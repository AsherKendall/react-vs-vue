import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Material from '@primeuix/themes/material'
import { definePreset } from '@primeuix/themes'
import Ripple from 'primevue/ripple'

let appInstance = null
let hashListener = null

const customPreset = definePreset(Material, {
  semantic: {
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}', // This sets the main primary color to blue.500
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}',
    },
  },
  ripple: true,
})

export function mount(selector, initialPath = '/') {
  appInstance = createApp(App)
  // Add Prime Vue Themeing and Ripple Effect
  appInstance.use(PrimeVue, {
    theme: {
      preset: customPreset,
    },
  })
  appInstance.directive('ripple', Ripple)
  appInstance.use(router)
  router.push(initialPath).catch(() => {})
  let updatingFromShell = false

  // Whenever Vue navigates, update shell hash
  router.afterEach((to) => {
    if (updatingFromShell) return
    const desiredHash = `#/vue${to.fullPath}`
    if (window.location.hash !== desiredHash) {
      window.location.hash = desiredHash
    }
  })

  // ---- Sync Shell URL -> Vue router ----
  hashListener = () => {
    const hash = window.location.hash || ''
    if (!hash.startsWith('#/vue')) return

    const match = hash.match(/^#\/vue(\/.*)?$/)
    const vueSubPath = match?.[1] || '/'

    updatingFromShell = true
    router.push(vueSubPath).catch(() => {})
    updatingFromShell = false
  }
  // Adds listener to trigger on hash change
  window.addEventListener('hashchange', hashListener)
  appInstance.mount(selector)
  return () => unmount()
}

export function unmount() {
  if (appInstance) {
    appInstance.unmount()
    appInstance = null
  }
}
