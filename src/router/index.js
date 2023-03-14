import { createRouter, createWebHistory } from 'vue-router'

/* Views */
import DesignSystem from '../designSystem/DesignSystem.vue'
import Home from '../views/HelloWorld.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/design-system',
      name: 'design-system',
      component: DesignSystem
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/HelloWorld.vue')
    // }
  ]
})

export default router