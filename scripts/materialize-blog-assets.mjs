import { copyFile, lstat, mkdir, readdir, readFile, realpath, rm, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const publicPrefix = '/images/blog/';
const defaultProjectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function readDraft(frontmatter, filename, scope, warn) {
  const match = frontmatter.match(/^draft:\s*(true|false)\s*(?:#.*)?$/m);
  if (!match) {
    if (scope === 'published') {
      warn(`[blog assets] ${filename}: missing draft flag; treating it as private.`);
    }
    return true;
  }
  return match[1] !== 'false';
}

function getFrontmatter(source, filename) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) throw new Error(`${filename}: invalid or missing frontmatter.`);
  return match[1];
}

function referencedBlogAssets(source, slug, filename) {
  const refs = new Set();
  const pattern = /\/images\/blog\/([^"'()\s<>{}\]]+)/g;
  let match;

  while ((match = pattern.exec(source)) !== null) {
    const encoded = match[1].split(/[?#]/, 1)[0];
    let decoded;
    try {
      decoded = decodeURIComponent(encoded);
    } catch {
      throw new Error(`${filename}: invalid encoded blog image path: ${match[0]}`);
    }

    if (decoded.includes('\\')) {
      throw new Error(`${filename}: backslashes are not allowed in blog image paths.`);
    }

    const normalized = path.posix.normalize(decoded);
    const segments = normalized.split('/');
    if (
      path.posix.isAbsolute(normalized) ||
      normalized === '.' ||
      normalized.startsWith('../') ||
      segments.includes('..') ||
      segments[0] !== slug
    ) {
      throw new Error(
        `${filename}: blog images must stay inside ${publicPrefix}${slug}/ (found ${match[0]}).`
      );
    }
    refs.add(normalized);
  }

  return refs;
}

async function assertSourceFile(relativePath, sourceRoot, resolvedSourceRoot) {
  const sourcePath = path.resolve(sourceRoot, ...relativePath.split('/'));
  if (!sourcePath.startsWith(`${sourceRoot}${path.sep}`)) {
    throw new Error(`Unsafe blog image source path: ${relativePath}`);
  }

  let fileStat;
  try {
    fileStat = await stat(sourcePath);
  } catch {
    throw new Error(`Referenced blog image is missing: ${relativePath}`);
  }
  if (!fileStat.isFile()) throw new Error(`Blog image reference is not a file: ${relativePath}`);

  const resolvedFile = await realpath(sourcePath);
  if (!resolvedFile.startsWith(`${resolvedSourceRoot}${path.sep}`)) {
    throw new Error(`Blog image source escapes its private directory: ${relativePath}`);
  }
  return sourcePath;
}

async function cleanGeneratedPublicAssets(publicRoot, resolvedProjectRoot) {
  try {
    const rootStat = await lstat(publicRoot);
    if (rootStat.isSymbolicLink()) {
      throw new Error(`Refusing to clean a symlinked public blog directory: ${publicRoot}`);
    }
    if (!rootStat.isDirectory()) {
      throw new Error(`Public blog asset path is not a directory: ${publicRoot}`);
    }
  } catch (error) {
    if (error?.code !== 'ENOENT') throw error;
    await mkdir(publicRoot, { recursive: true });
  }

  const resolvedPublicRoot = await realpath(publicRoot);
  if (!resolvedPublicRoot.startsWith(`${resolvedProjectRoot}${path.sep}`)) {
    throw new Error(`Public blog asset directory escapes the project root: ${publicRoot}`);
  }

  const children = await readdir(publicRoot, { withFileTypes: true });
  await Promise.all(
    children
      .filter((entry) => entry.name !== '.gitkeep')
      .map((entry) => rm(path.join(publicRoot, entry.name), { recursive: true, force: true }))
  );
}

export async function materializeBlogAssets(
  scope,
  {
    projectRoot = defaultProjectRoot,
    log = console.log,
    warn = console.warn,
  } = {}
) {
  if (!['all', 'published'].includes(scope)) {
    throw new Error('Blog asset scope must be "all" or "published".');
  }

  const postsRoot = path.resolve(projectRoot, 'src/content/posts');
  const sourceRoot = path.resolve(projectRoot, 'src/content/blog-media');
  const publicRoot = path.resolve(projectRoot, 'public/images/blog');

  const resolvedProjectRoot = await realpath(projectRoot);
  await mkdir(postsRoot, { recursive: true });
  await mkdir(sourceRoot, { recursive: true });
  const resolvedSourceRoot = await realpath(sourceRoot);
  const postFiles = (await readdir(postsRoot)).filter((name) => name.endsWith('.mdoc')).sort();
  const assets = new Map();
  let selectedPosts = 0;

  for (const filename of postFiles) {
    const slug = filename.slice(0, -'.mdoc'.length);
    const source = await readFile(path.join(postsRoot, filename), 'utf8');
    const draft = readDraft(getFrontmatter(source, filename), filename, scope, warn);
    if (scope === 'published' && draft) continue;

    selectedPosts += 1;
    for (const relativePath of referencedBlogAssets(source, slug, filename)) {
      assets.set(
        relativePath,
        await assertSourceFile(relativePath, sourceRoot, resolvedSourceRoot)
      );
    }
  }

  await cleanGeneratedPublicAssets(publicRoot, resolvedProjectRoot);
  for (const [relativePath, sourcePath] of assets) {
    const destination = path.resolve(publicRoot, ...relativePath.split('/'));
    if (!destination.startsWith(`${publicRoot}${path.sep}`)) {
      throw new Error(`Unsafe public blog image destination: ${relativePath}`);
    }
    await mkdir(path.dirname(destination), { recursive: true });
    await copyFile(sourcePath, destination);
  }

  const result = { assetCount: assets.size, postCount: selectedPosts, scope };
  log(
    `[blog assets] Materialized ${result.assetCount} image(s) referenced by ${result.postCount} ${scope} post(s).`
  );
  return result;
}

const isCli =
  process.argv[1] &&
  import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href;

if (isCli) {
  const scope = {
    '--all': 'all',
    '--published': 'published',
  }[process.argv[2]];
  if (!scope) {
    throw new Error('Usage: node scripts/materialize-blog-assets.mjs --all|--published');
  }
  await materializeBlogAssets(scope);
}
