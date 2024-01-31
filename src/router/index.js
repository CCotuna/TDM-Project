import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/.vue'),
      meta: {
        requiresAuth: false 
      }
    },
    {
      path: '/community',
      name: 'community and events',
      component: () => import('../views/.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/.vue')
    },
    {
      path: '/testimonials',
      name: 'testimonials',
      component: () => import('../views/.vue')
    },
    {
      path: '/sitemap',
      name: 'sitemap',
      component: () => import('../views/.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/.vue')
    }
  ]
})

export default router
