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
      component: () => import('../views/AboutPage.vue')
    },
    {
      path: '/Portfolio',
      name: 'portfolio',
      component: () => import('../views/PortfolioPage.vue')
    },
    {
      path: '/Services',
      name: 'services',
      component: () => import('../views/ServicesPage.vue'),
    },
    {
      path: '/Community',
      name: 'community and events',
      component: () => import('../views/CommunityAndEventsPage.vue')
    },
    {
      path: '/Blog',
      name: 'blog',
      component: () => import('../views/BlogNewsPage.vue')
    },
    {
      path: '/Testimonials',
      name: 'testimonials',
      component: () => import('../views/TestimonialsPage.vue')
    },
    {
      path: '/Sitemap',
      name: 'sitemap',
      component: () => import('../views/SiteMap.vue')
    },
    {
      path: '/Contact',
      name: 'contact',
      component: () => import('../views/ContactPage.vue')
    }
  ]
})

export default router
