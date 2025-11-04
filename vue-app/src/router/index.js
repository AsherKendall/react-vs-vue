import { createRouter, createMemoryHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StateView from '@/views/basic/StateView.vue'
import RoutingPage from '@/components/RoutingPage.vue'

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
          component: RoutingPage,
        },
      ],
    },
  ],
})

export default router
