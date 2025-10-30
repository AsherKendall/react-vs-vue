import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Material from '@primeuix/themes/material';
import { definePreset } from '@primeuix/themes';


let appInstance = null


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
            950: '{blue.950}'
        }
    }
});

export function mount(selector) {
  appInstance = createApp(App)
  appInstance.use(PrimeVue, {theme: {
    preset: customPreset
  }})
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