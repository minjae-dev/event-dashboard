// imports
import 'bootstrap/dist/css/bootstrap.css'
import './assets/main.scss'

import { createApp } from 'vue'
import 'vue-toastification/dist/index.css'

import { createPinia } from 'pinia'
import Toast from 'vue-toastification'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia()).use(Toast).use(router).mount('#app')
