import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ButtonItem from '@/components/ButtonItem.vue'
import ModalItem from '@/components/ModalItem.vue'
import { useModalStore } from '@/stores/modalStore'
import { createModal } from '@/composables/useModal'
// import { useNavDrawerStore } from '@/stores/navDrawerStore'
import { useNavDrawerStore } from '@/stores/navDrawerStore'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.component('ButtonItem', ButtonItem)
app.component('ModalItem', ModalItem)

const modalStore = useModalStore()
app.provide('$modalStore', modalStore)

app.config.globalProperties.$modal = createModal()
app.provide('$modal', app.config.globalProperties.$modal)

app.config.globalProperties.$navdrawer = useNavDrawerStore()
app.provide('$navdrawer', app.config.globalProperties.$navdrawer)

app.mount('#app')
