import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

let appInstance = null

export function mount(selector) {
  appInstance = createApp(App)
  appInstance.use(router)
  appInstance.mount(selector)
  return () => unmount()
}

export function unmount() {
  if (appInstance) {
    appInstance.unmount()
    appInstance = null
  }
}