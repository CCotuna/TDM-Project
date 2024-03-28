import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/index',
      name: 'homepage',
      component: HomePage
    }, {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/About',
      name: 'about',
      component: () => import('@/views/AboutPage.vue'),
    },
    {
      path: '/Services',
      name: 'services',
      component: () => import('@/views/ServicesPage.vue'),
    },
    {
      path: '/Portfolio',
      name: 'portfolio',
      component: () => import('@/views/ServicesPage.vue'),
    },
    {
      path: '/Contact',
      name: 'contact',
      component: () => import('@/views/ServicesPage.vue'),
    }
  ],
  scrollBehavior(savedPosition) {
    if(savedPosition) {
      return savedPosition
    } else {
      return { top: 0 } 
    }
  }
})

export default router
