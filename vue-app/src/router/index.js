import { createRouter, createMemoryHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createMemoryHistory('/react-vs-vue/vue/'),
  routes: [
    {
      path: '/vue/',
      redirect: '/',
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/start',
      name: 'Starting Projects',
      component: () => import('@/views/StartView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/basic',
      children: [
        {
          path: 'state',
          component: () => import('@/views/basic/StateView.vue'),
        },
        {
          path: 'routing',
          component: () => import('@/views/basic/RoutingView.vue'),
        },
        {
          path: 'template',
          component: () => import('@/views/basic/TemplatingView.vue'),
        },
      ],
    },
  ],
})

export default router
