# 🧩 Vue 3 Admin Dashboard

Vue 3, TypeScript, Pinia 기반의 대시보드 웹 애플리케이션입니다.  
내부 관리 시스템 구축을 목표로, 요약 데이터, 최근 활동, 모듈형 컴포넌트, 깔끔한 아키텍처를 구현했습니다.

---

## 🚀 프로젝트 개요

- **모듈형 프론트엔드 구조**로 확장성 확보
- 카드, 테이블 등 대시보드 컴포넌트 제공
- 유저, 이벤트, 예약 Mock API 활용
- 관리자/사용자 레이아웃 및 라우트 분리
- SCSS 기반 디자인 베스트 프랙티스 적용

---

## ⚙️ 기술 스택

| 카테고리    | 도구                            |
| ----------- | ------------------------------- |
| 프레임워크  | Vue 3 + Composition API         |
| 언어        | TypeScript                      |
| 상태 관리   | Pinia                           |
| 라우팅      | Vue Router                      |
| UI & 스타일 | Bootstrap 5, SCSS Modules       |
| API         | Axios, json-server              |
| 검증        | vee-validate                    |
| 툴링        | Vite, ESLint, Prettier, Vue TSC |

---

## 🔗 포트폴리오 / 관리자 데모 확인 방법

1. 홈 화면(` / `)의 **포트폴리오 & 관리자 데모** 섹션에서 바로 이동
2. 로그인 후 권한별 대시보드 접근
   - 관리자: `admin@gmail.com / 123456`
   - 매니저: `manager@gmail.com / 123456`
   - 일반 회원: `viewer@gmail.com / 123456`
3. 관리자 회원 관리 데모: `/admin/dashboard`

---

## 🧩 폴더 구조

```bash
src/
├── apis/        # API 모듈
├── assets/      # 스타일링
├── components/  # UI 컴포넌트
├── layouts/     # 레이아웃 래퍼
├── models/      # 데이터 모델
├── router/      # 라우터 설정
├── stores/      # Pinia 스토어
├── uses/        # Composable 유틸리티
├── views/       # 페이지 컴포넌트
└── main.ts      # 엔트리 포인트
```

---

## 📊 주요 기능

- 로그인 (유저, 매니저, 관리자)
- 이벤트 및 예약 현황 조회/수정
- 관리자 회원 검색/권한 변경 데모

---

## 🖥️ 설치 및 실행

```bash
npm install
npx json-server --watch db.json --port 3000
npm run dev
```

앱: http://localhost:5173

---

## 🚢 배포

이 저장소에는 GitHub Pages 자동 배포 워크플로우(`.github/workflows/deploy-pages.yml`)가 포함되어 있습니다.

1. GitHub 저장소에서 **Settings → Pages → Build and deployment → Source**를 `GitHub Actions`로 변경
2. 기본 브랜치에 push 하면 `Deploy to GitHub Pages` 워크플로우가 실행
3. 배포 URL: `https://<github-username>.github.io/<repository-name>/`

> 참고: 로컬에서는 `npm run build`로 배포 산출물(`dist/`) 생성 여부를 검증할 수 있습니다.

---

## 🗺️ 라우트 및 권한

| 권한   | 주요 라우트 예시                                      | 설명                        |
| ------ | ----------------------------------------------------- | --------------------------- |
| 관리자 | `/admin/event/:id`, `/admin/users/reservations/:id`   | 이벤트/예약 관리            |
| 매니저 | `/manager/event/:id`                                  | 이벤트 관리                 |
| 공통   | `/login`, `/`, `/eventDetail/:id`, `reservations/:id` | 로그인, 대시보드, 조회/수정 |

- 권한별 라우트 분리 및 접근 제어
- 인증 필요 시 로그인 리다이렉트
- 레이아웃/메뉴 권한별 분기

---

👨‍💻 개발: Minjae Kim  
Repository: https://github.com/minjae-dev/dashboard
