import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ContactPage from '../views/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/index',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/HomePage.vue'),
    },
    {
      path: '/community',
      name: 'community and events',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/testimonials',
      name: 'testimonials',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/sitemap',
      name: 'sitemap',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactPage.vue')
    }
  ]
})

export default router
