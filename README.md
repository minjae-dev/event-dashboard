# 🧩 Nuxt 3 Event Dashboard

Nuxt 3, TypeScript, Pinia 기반의 대시보드 웹 애플리케이션입니다.
기존 Vue + Vite 구조를 Nuxt 파일 기반 라우팅/레이아웃 구조로 전환했습니다.

## 🚀 실행

```bash
npm install
npx json-server --watch db.json --port 3000
npm run dev
```

- 앱: http://localhost:3000
- Mock API: http://localhost:3000 (json-server를 다른 포트로 사용하려면 API 베이스 URL도 함께 조정하세요)

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
