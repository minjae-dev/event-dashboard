export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src',
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'vue-toastification/dist/index.css',
    '@/assets/main.scss',
  ],
})
