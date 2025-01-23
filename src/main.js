import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ButtonItem from "@/components/ButtonItem.vue"
import ModalItem from "@/components/ModalItem.vue";

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.component("ButtonItem", ButtonItem)
app.component("ModalItem", ModalItem)
app.mount('#app')
