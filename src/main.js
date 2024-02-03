
import { createApp } from 'vue'

import './style.css'
import App from './App.vue'
import router from './router'

import 'bootstrap-icons/font/bootstrap-icons.css'
import Vue3Lottie from 'vue3-lottie'

const app = createApp(App)

app.use(router)
app.use(Vue3Lottie)
app.mount('#app')
