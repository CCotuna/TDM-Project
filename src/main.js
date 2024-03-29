
import { createApp } from 'vue'
import { createPinia } from "pinia";

import '@/assets/css/main.css'
import App from './App.vue'
import router from './router'

import 'vant/lib/index.css'; // Import Vant CSS

import 'bootstrap-icons/font/bootstrap-icons.css'
// import Vue3Lottie from 'vue3-lottie'

const app = createApp(App)

app.use(router)
app.use(createPinia());
// app.use(Vue3Lottie)
app.mount('#app')
