import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const VueWrapper = {
  template: '<div id="vue-container"></div>',
  async mounted() {
    await import('../../dist/vue-app/vue-entry.css')
    const { mount } = await import('../../dist/vue-app/vue-entry.js')
    this.vueUnmount = await mount('#vue-container')
  },
  unmounted() {
    if (this.vueUnmount) this.vueUnmount()
  }
}

const ReactWrapper = {
  template: '<div id="react-container"></div>',
  async mounted() {
    await import('../../dist/react-app/react-entry.css')
    const { mount } = await import('../../dist/react-app/react-entry.js')
    this.reactUnmount = await mount('#react-container')
  },
  unmounted() {
    if (this.reactUnmount) this.reactUnmount()
  }
}

const routes = [
  { path: '/', redirect: '/vue' },
  { path: '/vue/:pathMatch(.*)*', component: VueWrapper },
  { path: '/react/:pathMatch(.*)*', component: ReactWrapper }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp({ template: '<router-view />' }).use(router).mount('#app')