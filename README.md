# 바이브라이팅 - 랜딩 페이지

바이브라이팅 프로젝트의 공식 랜딩 페이지입니다.

## 프로젝트 소개

바이브라이팅은 **말한 내용을 바로 써먹을 수 있는 문서로 바꾸는 AI 코파일럿**입니다.

전사/요약 툴이 아니라, 말하는 순간부터 도메인별 구조화된 초안을 함께 만드는 도구로, **두 번 일하지 않게** 해드립니다.

## 주요 기능

- 🎤 **음성 녹음 & 업로드**: 브라우저에서 실시간 녹음 또는 파일 업로드
- 📋 **도메인별 템플릿**: 전략 메모, 콘텐츠 아이디어, 일반 메모 등
- 🤖 **AI 구조화**: OpenAI를 통한 전사 및 구조화된 초안 생성
- ✏️ **섹션별 편집**: 각 섹션을 개별적으로 편집하거나 AI로 재작성
- 🎨 **개인화된 톤**: 사용자 스타일 반영

## 기술 스택

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Supabase
- **AI**: OpenAI API
- **배포**: GitHub Pages

## 개발 환경 설정

### 필수 요구사항

- Node.js 20 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 정적 파일 export (GitHub Pages용)
npm run export
```

개발 서버는 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

## 배포

이 프로젝트는 GitHub Actions를 통해 자동으로 배포됩니다.

- `main` 브랜치에 푸시하면 자동으로 GitHub Pages에 배포됩니다
- 워크플로우는 `.github/workflows/deploy.yml`에 정의되어 있습니다

### 수동 배포

```bash
npm run build
# out 폴더의 내용을 GitHub Pages에 업로드
```

## 프로젝트 구조

```
landing-page/
├── app/              # Next.js App Router
│   ├── layout.tsx    # 루트 레이아웃
│   ├── page.tsx     # 메인 페이지
│   └── globals.css   # 글로벌 스타일
├── components/       # React 컴포넌트
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Solution.tsx
│   ├── Features.tsx
│   ├── UseCases.tsx
│   ├── TechStack.tsx
│   ├── Roadmap.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── plans/            # 계획 문서
└── public/           # 정적 파일
```

## 기여하기

이슈나 피드백은 [GitHub Issues](https://github.com/silverJen/landing-page-/issues)에 남겨주세요.

## 라이선스

MIT License

## 관련 링크

- [PRD 문서](../docs/PRD.md)
- [랜딩 페이지 계획서](./plans/landing-page-plan.md)

