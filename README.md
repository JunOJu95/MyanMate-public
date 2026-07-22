# MyanMate

한국에 정착하는 미얀마인을 돕는 **정보 허브 + 서비스 안내** 모바일 우선 웹 (1단계 MVP).
Mobile-first info hub + service guide for Myanmar people settling in Korea.

- **Stack**: Astro 6 (SSG) · Keystatic (Git 기반 CMS) · 평면 i18n 사전(EN·KO·MY) · 무JS 위주
- 사업 원칙: 정보 제공·동행 자문만 제공하며, 대행·대리·중개·알선은 하지 않습니다.

## 실행 (Commands)

```bash
npm install      # 1회
npm run dev      # 개발 서버 → http://localhost:4321  (콘텐츠 편집: /keystatic)
npm run build    # 정적 빌드 (dist/)
npm run preview  # 빌드 미리보기
```

## 콘텐츠 추가/수정 — 비개발자용 (공동창업자)

코드 없이 `http://localhost:4321/keystatic` 에서 편집합니다.

- **Guides (정보 콘텐츠)**: 비자·생활 글. 카테고리 · 순서 · **최종 검토일(lastReviewed)** · 영어/한국어/미얀마어 칸을 나눠 입력.
  - "Documents you'll need / How to apply / Watch out for" 칸은 **한 줄에 하나씩** 적으면 목록으로 표시됩니다.
  - 비자처럼 바뀌는 정보는 확인할 때마다 **최종 검토일**을 갱신하세요(독자에게 노출됩니다).
- **Blog (블로그)**: 글마다 언어 하나를 선택해 작성합니다. 새 글은 항상 **Draft(비공개 초안)** 로 시작하며, 카테고리·게시일·최종 검토일·요약·본문·대표/본문 이미지를 입력할 수 있습니다.
  - Draft를 해제한 글만 `/blog`와 홈의 최신 글 영역에 표시됩니다.
  - 발행 전 **Publishing boundary confirmed**를 확인해야 하며, 확인하지 않은 공개 글은 빌드가 중단됩니다.
  - 초안 이미지는 `src/content/blog-media/`에 보관되고, 빌드할 때 공개 글이 참조하는 이미지만 공개 경로로 복사됩니다.
  - 실제 운영 절차와 권한 설정은 [`docs/블로그_운영가이드.md`](docs/블로그_운영가이드.md)를 따르세요.
- **Reviews (후기)**: 비포/애프터 + 한 줄 후기 + 서비스 종류 + 별점.
- 저장하면 Markdown/YAML로 `src/content/` 에 기록됩니다(버전 관리). 배포 시에는 GitHub 로그인으로 편집(아래 배포 메모).

## UI 문구 (버튼·메뉴·면책 등)

- **단일 소스 = [`src/i18n/ui.ts`](src/i18n/ui.ts)**. 여기 값만 고치면 전체 화면에 반영됩니다.
- **미얀마어(MY)는 기계 초안** → 네이티브 감수 후 값만 교체(키는 고정). 면책·법적 문구 우선 검수.
- 3개 언어는 우측 상단 토글(EN·MM·KO)로 즉시 전환(새로고침 없음, 기본 EN).

## 꼭 지킬 것 (사업 원칙)

- 우리는 **정보 제공·동행 자문**만 합니다. 서류 **대리작성·대행·제출**, 부동산 **중개·알선** ❌.
- 금지 용어: `대행/대리/중개/복비`. 특정 매물 광고 ❌. 면책 문구는 줄이지 말 것.

## 배포/운영 메모

1. **호스팅**: Vercel 프로덕션 도메인 `https://www.myanmate.com/` 기준. `https://myanmate.com/`은 `www`로 리다이렉트합니다.
2. **문의 폼**: [Web3Forms](https://web3forms.com)를 통해 MyanMate Gmail 받은편지함으로 전달됩니다. 운영 키를 바꿀 때는 `.env`의 `PUBLIC_WEB3FORMS_KEY`와 Vercel 환경변수를 함께 확인하세요.
3. **Messenger**: 문의 페이지의 Facebook Messenger 링크가 보조 문의 경로입니다. 모바일 실기기에서 앱/브라우저 이동을 같이 확인하세요.
4. **Keystatic 운영 어드민**: 프로덕션에서는 GitHub storage를 사용합니다. `/keystatic/branch/main`에서 GitHub 로그인, 저장, GitHub 커밋 생성, Vercel 재배포 반영까지 확인해야 합니다. 초안과 원본 이미지 보호를 위해 운영 저장소는 **Private** 이어야 하며, 공동창업자는 해당 저장소의 Write 권한과 Keystatic GitHub App 접근 권한이 필요합니다.
5. **Analytics**: Vercel Web Analytics가 연결되어 있습니다. 현재는 페이지뷰 중심으로 보고, 세부 CTA 이벤트 분석은 출시 후 필요성이 확인되면 별도 도구를 검토합니다.
6. **사진/콘텐츠**: OG 이미지는 `public/og-default.jpg`를 사용합니다. 미얀마어 본문과 법적 경계 문구는 출시 전 네이티브/전문가 검수를 우선합니다.
7. **SEO 확장**: 추후 언어별 URL(/ko·/my)로 가면 `SeoHead.astro`에 hreflang 추가(구조 준비됨).
