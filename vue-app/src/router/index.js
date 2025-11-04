import { createRouter, createMemoryHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StateView from '@/views/basic/StateView.vue'
import TemplatingView from '@/views/basic/TemplatingView.vue'
import RoutingView from '@/views/basic/RoutingView.vue'

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
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/basic',
      children: [
        {
          path: 'state',
          component: StateView,
        },
        {
          path: 'routing',
          component: RoutingView,
        },
        {
          path: 'template',
          component: TemplatingView,
        },
      ],
    },
  ],
})

export default router
