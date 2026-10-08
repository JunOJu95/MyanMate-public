import { fields, singleton } from '@keystatic/core';
import references from './reference.json';
import { copyGroups } from './copy-groups.mjs';

export const myanmarCopyNavigation = copyGroups.map(group => `myanmar${group.id}`);

export const myanmarCopySingletons = Object.fromEntries(copyGroups.map(group => {
  const translations = Object.fromEntries(group.keys.map((key: keyof typeof references) => {
    const source = references[key];
    const heading = source.ko.replace(/\s+/g, ' ').slice(0, 55);
    return [key, fields.object({
      value: fields.text({
        label: '미얀마어 · မြန်မာ',
        description: `한국어 원문: ${source.ko}\nEnglish: ${source.en}`,
        multiline: true,
        validation: { isRequired: true, pattern: { regex: /\S/, message: '문구를 비워두지 마세요. / Please enter the Myanmar wording.' } },
      }),
      reviewed: fields.checkbox({
        label: '검수 완료 · Reviewed',
        description: '실제 미얀마어 검수자가 의미와 표현을 확인한 뒤 표시하세요. 문구를 다시 바꾸면 재검수하세요.',
        defaultValue: false,
      }),
    }, { label: heading.length < source.ko.length ? `${heading}…` : heading, description: key })];
  }));
  return [`myanmar${group.id}`, singleton({
    label: group.label,
    path: `src/content/ui-copy/${group.id}`,
    format: { data: 'json' },
    previewUrl: group.previewUrl,
    schema: {
      translations: fields.object(translations, {
        label: `미얀마어 문구 검수 · ${group.keys.length}개`,
        description: '한국어·영어를 참고해 미얀마어와 검수 상태를 수정하세요. 수강 조건·동의·면책의 의미는 유지합니다. 로컬은 저장 후 미리보기, 운영 사이트는 검토·배포 후 반영됩니다. 글 본문은 기존 메뉴에서 수정합니다.',
      }),
    },
  })];
}));
