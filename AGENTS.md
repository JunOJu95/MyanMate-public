# AGENTS.md — MyanMate

> 이 파일은 Codex가 이 저장소에서 작업할 때 **반드시 따라야 하는** 규칙이다.
> 사업 원칙·면책·코딩 규칙을 위반하는 코드는 작성하지 않는다.

## 0. 프로젝트 한 줄

**미얀마인을 위한 온라인 한국어 수업 안내·신청 + 한국 생활 정보 블로그, 모바일 우선 웹.**
현재 핵심 흐름은 **수업 선택 → 상세 확인 → 신청 → 개별 상담**이다. 수강생 로그인과 온라인 결제는 사용하지 않는다. 기존 정보·서비스 관련 규칙은 블로그와 기존 정보 콘텐츠에 적용한다.

기준 문서:
- 수업 운영 준비: [docs/한국어수업_오픈준비.md](docs/한국어수업_오픈준비.md).
- 블로그 운영: [docs/블로그_운영가이드.md](docs/블로그_운영가이드.md).
- 관리자 후기 관리: [docs/후기_운영가이드.md](docs/후기_운영가이드.md).
- 앱 문구의 공개 API는 `src/i18n/ui.ts`이다. 한국어·영어 원문은 `src/i18n/reference.json`, 미얀마어의 단일 소스는 Keystatic에서 편집하는 `src/content/ui-copy/*.json`이며, 사업 경계는 아래 §1을 따른다.

---

## 1. ★ 절대 사업 원칙 (위반 시 사업이 망한다)

> **우리는 "정보 제공·동행 자문" 서비스다. "대행·대리·중개"는 하지 않는다.**

판별 한 줄: **"고객을 *돕는* 거냐, 고객을 *대신해* 거래·신청을 처리하는 거냐?"**
앞이면(정보·동행·자문) ✅ 합법, 뒤면(대행·대리·알선) ❌ 무자격 위법.

| 영역 | ✅ 우리가 하는 것 | ❌ 절대 안 하는 것 |
|---|---|---|
| 비자 | 필요 서류 조사·안내, 체크리스트, 절차 설명, 공개 서식 위치 안내 | 신청서·서류 **대신 작성**, 출입국 **대리 신청·제출**, 위임 발급 |
| 집 | 공인중개사 통해 보는 집에 **동행**·통역·비교·의견 | **매물 소개·연결**, 조건 **협상·중재**, **계약서 작성** 관여 |

### 코드/문구에 그대로 적용 (UI·메타·약관 공통)
1. **금지 용어**: `대행` `대리` `중개` `알선` `복비` (영어로도 *"on your behalf"*, *"we file/submit for you"*, *"broker"*, *"agent"* 금지). → 승인 표현만 사용: **"비자 서류 정보 조사·안내"**, **"집 보러 동행·자문 서비스"**, *"We research and guide — you apply yourself."*
2. **매물 광고 금지**: "동행 서비스" 홍보는 OK, "이런 방 있어요"(특정 매물 표시) ❌.
3. **면책 문구 상시 노출** (아래 §3).
4. **정보 정확성·최신성**: 비자 콘텐츠에는 **최종 검토일(`lastReviewed`)** 을 표시한다. 정책은 바뀐다 → "최종 확인은 출입국·하이코리아에서" 안내 유지.

---

## 2. 디자인·UX 원칙

- **모바일 우선** 반응형. 타깃은 틱톡에서 링크 타고 폰으로 들어온다.
- 디자인 시스템은 **보라·라임 팔레트**(`--brand:#6a35e8`, 라임 `#ddfa71`) + 흰 배경(`#ffffff`). 2026-10-06 사용자가 승인한 수정 방향: 굵은 제목·반복 카드·장식 아이콘을 줄이고, 열린 강사 소개와 편안한 문구를 사용한다. 사진은 사용자가 제공할 때까지 빈 사진 영역으로 둔다. 신청서는 연락처 먼저, 수준은 '잘 모르겠어요'를 기본으로 둔다.
- 2026-10-06 추가 승인: 생성한 학습 장면 이미지를 홈과 말하기 연습 소개에 사용할 수 있다. AI 이미지라는 설명을 표시하고 실제 강사·수강생·후기 사진으로 제시하지 않는다. Moe·Jun Ho의 프로필 영역은 실제 사진 제공 전까지 빈 영역을 유지한다. 화면 진입·선택·FAQ·페이지 이동에 부드러운 모션을 적용하되, reduced motion과 JS 없는 화면에서도 내용과 신청 기능을 사용할 수 있어야 한다.
- 톤: **따뜻한 멘토** — "우리도 겪어봤고, 같이 걸어줄게."
- 가볍게·빠르게. 거창하게 짓지 말 것 (웹 자체가 검증 도구).

---

## 3. 면책 문구 (화면에 반드시 노출 — 원문 고정)

면책은 `src/i18n/ui.ts`의 키로 관리하고, **다음 위치에 항상 렌더**한다:

- `footer.disclaimer` → **모든 페이지 푸터** (`Footer.astro`, `Base.astro` 경유).
- `content.disclaimer` → **콘텐츠(비자 등) 상세** 하단.
- `svcDetail.dont.body` + "What we don't do"(`svcDetail.section.whatWeDont`) → **서비스 상세** "무엇은 안 하나" 블록.

원문(EN 기준 / KO):
- **footer.disclaimer (EN)**: "MyanMate offers online Korean classes. Blog content is general information, not advice for individual cases. Requirements may change; confirm the latest details with the relevant official institution."
- **footer.disclaimer (KO)**: "MyanMate는 온라인 한국어 수업을 제공합니다. 블로그 내용은 일반적인 정보이며 개별 상황에 대한 자문이 아닙니다. 요건은 변경될 수 있으므로 최신 내용은 관련 공식 기관에서 확인해 주세요."
- **content.disclaimer (EN)**: "This is general information, not legal advice. Always confirm with Immigration (HiKorea)."
- **svcDetail.dont.body (EN)**: "We don't write, submit, or file documents for you, and we don't broker contracts. We research, guide, and come along — you stay in control."

> 면책 문구는 임의로 줄이거나 톤을 약화하지 말 것. MY 값은 기계 초안 → **네이티브 감수 후** 교체(키는 고정).

---

## 4. 코딩 규칙

### i18n (가장 중요)
- **공개 API = `src/i18n/ui.ts`.** 사용자 노출 문자열을 컴포넌트/페이지에 **하드코딩 금지**. 항상 `t(key, lang)` 또는 `data-i18n="key"`. 한국어·영어는 `reference.json`, 미얀마어는 `src/content/ui-copy/*.json`에서 한 번만 저장한다.
- **키 구조 보존**: `home.hero.headline`, `svc.visa.desc` 같은 `화면.요소` 평면 키 그대로. 전달된 app.js 키를 바꾸지 말 것.
- **언어**: `my`(기본) · `ko` · `en`. **MY는 기계 초안** — 값만 나중에 교체, 키는 안정 유지.
- 카피를 docs 카피시트나 컴포넌트와 **중복 저장하지 말 것**. 검수자는 `/keystatic`의 **미얀마어 문구 검수**에서 값과 검수 상태만 바꾼다. 그룹·문구 키는 고정하며, 누락·빈 문구·알 수 없는 키는 빌드에서 거부한다.
- 운영 사이트의 미얀마어 문구 저장은 검토용 PR을 생성하며 자동 병합하지 않는다. 과정 조건·동의·면책의 의미와 모바일 표시를 확인한 뒤 게시한다. 절차는 `docs/미얀마어_문구_검수가이드.md`를 따른다.
- 확장 대비: 지금은 즉시 토글(단일 URL)이지만, `t()`는 프레임워크 중립으로 두어 **나중에 언어별 URL(/ko, /my)·hreflang**로 확장이 국소적이게.

### 폰트 (깨짐 방지 — 절대 제거 금지)
- Google Fonts 로드 유지: **Noto Sans Myanmar**, Padauk, **Noto Sans KR**, Gothic A1, IBM Plex Mono.
- `body.lang-my` → `font-family:'Noto Sans Myanmar','Padauk'` + 미얀마어 줄높이 리듬 규칙 유지. `body.lang-ko` → `'Gothic A1','Noto Sans KR'`.

### 콘텐츠 (비개발자 편집)
- 비자·생활 글, 서비스 정보, 후기는 **Keystatic(`/keystatic`)으로 관리** → `content/`에 Markdown/JSON. 컴포넌트에 글 본문 하드코딩 금지.
- 비개발자(공동창업자)가 코드 없이 추가/수정할 수 있어야 한다.

### 개인정보 / 폼
- 문의 폼은 **민감정보를 요구·저장하지 않는다.** 메모 칸에 "여권번호 등 민감정보는 적지 마세요" 안내(`request.field.memo.note`) 노출.
- 동의 문구(`request.consent`) 표시. 개인정보 처리방침 페이지(`/privacy`)를 푸터에서 링크.

### 일반
- 새 파일/Edit 전 기존 파일을 Read. 사용자 노출 문구는 ui.ts로.
- JS 최소화(Astro 기본 무JS 유지). 이미지엔 `alt`.
- 요청 없이 자동 커밋 금지.

---

## 5. 기술 스택 & 빌드 명령

- **Astro** (SSG, 모바일 우선) + **Keystatic** (Git 기반 CMS) + 평면 i18n 사전.
- 폼: 호스팅 엔드포인트(무료) + DM 링크. 배포: 정적 호스팅(무료).

```bash
npm install          # 의존성 설치
npm run dev          # 개발 서버 (사이트 + /keystatic 어드민)
npm run build        # 정적 빌드
npm run preview      # 빌드 결과 미리보기
```

- 콘텐츠 편집: 개발 서버 실행 후 `http://localhost:4321/keystatic`.

---

## 6. 폴더 구조 (요약)

```
src/
  i18n/ui.ts          # ★ 공개 API: dict{en,ko,my} + t() + languages/defaultLang
  i18n/reference.json # 한국어·영어 원문 (관리자에서는 참고 전용)
  content/ui-copy/    # Keystatic 미얀마어 문구와 검수 상태, JSON
  lib/icons.ts        # SVG 아이콘 맵
  scripts/lang.ts     # 언어 토글 런타임(textContent + placeholder/aria)
  styles/global.css   # 공통 화면·폰트·정보 콘텐츠 기본 스타일
  styles/brand.css    # 흰 배경·보라색 브랜드와 공통 컴포넌트
  styles/redesign.css # 수업 소개·상담 중심 화면
  lib/content.ts      # Keystatic 콘텐츠 읽기와 정규화
  content/            # 블로그·정보 콘텐츠·관리자 후기 원본
  components/          # 수업·상담·정보 콘텐츠·관리자 후기 표시 컴포넌트
  layouts/Base.astro   # head(폰트·SEO)+TopBar+slot+Footer(면책)
  pages/               # 01 홈 ~ 08 소개 + privacy
keystatic.config.ts    # CMS 스키마(언어별 필드, guides.lastReviewed)
docs/                  # 수업·블로그·후기 운영 안내
```
