# 🧩 Nuxt 3 Event Dashboard

Nuxt 3, TypeScript, Pinia 기반의 대시보드 웹 애플리케이션입니다.
기존 Vue + Vite 구조를 Nuxt 파일 기반 라우팅/레이아웃 구조로 전환했습니다.

## 🚀 실행

```bash
npm install
npm run dev
```

- 앱: http://localhost:3000
- API: Nuxt 서버 라우트(`/api/users`, `/api/events`, `/api/reservations`)를 통해 같은 앱 서버에서 동작합니다.

## ☁️ Render 배포

이 프로젝트는 별도 `json-server` 없이 Nuxt 서버가 API와 페이지를 함께 제공합니다.

- Build Command: `npm install && npm run build`
- Start Command: `npm run start`
- Node 버전: `20` 이상 권장

## 📁 Nuxt 구조

```bash
src/
├── app.vue
├── layouts/
├── middleware/
├── pages/
├── plugins/
├── components/
├── stores/
└── views/
```

## ✅ 전환 내용 요약

- Nuxt 설정(`nuxt.config.ts`) 및 `src/app.vue` 엔트리 도입
- Vue Router 설정 파일 제거 후 Nuxt pages/layouts/middleware로 라우팅 이전
- Pinia, Toastification을 Nuxt plugin 방식으로 등록
- Mock API를 Nuxt 서버 API(`src/server/api`)로 통합
