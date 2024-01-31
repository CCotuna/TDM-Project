import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ContactPage from '../views/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/index.html',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/About.html',
      name: 'about',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/Portfolio.html',
      name: 'portfolio',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/Services.html',
      name: 'services',
      component: () => import('../views/HomePage.vue'),
    },
    {
      path: '/Community.html',
      name: 'community and events',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/Blog.html',
      name: 'blog',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/Testimonials.html',
      name: 'testimonials',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/Sitemap.html',
      name: 'sitemap',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/Contact.html',
      name: 'contact',
      component: () => import('../views/ContactPage.vue')
    }
  ]
})

export default router
