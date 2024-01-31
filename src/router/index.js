import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ContactPage from '../views/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Index',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/About',
      name: 'about',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/Portfolio',
      name: 'portfolio',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/Services',
      name: 'services',
      component: () => import('../views/HomePage.vue'),
    },
    {
      path: '/Community',
      name: 'community and events',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/Blog',
      name: 'blog',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/Testimonials',
      name: 'testimonials',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/Sitemap',
      name: 'sitemap',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/Contact',
      name: 'contact',
      component: () => import('../views/ContactPage.vue')
    }
  ]
})

export default router
