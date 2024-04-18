  import { createRouter, createWebHistory } from 'vue-router'
  import HomeView from '../views/HomeView.vue'

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/index',
        name: 'homepage',
        component: HomeView
      }, {
        path: '/',
        name: 'homepage',
        component: HomeView
      },
      {
        path: '/About',
        name: 'about',
        component: () => import('@/views/AboutView.vue'),
      },
      {
        path: '/Services',
        name: 'services',
        component: () => import('@/views/ServicesView.vue'),
      },
      {
        path: '/Portfolio',
        name: 'portfolio',
        component: () => import('@/views/ServicesView.vue'),
      },
      {
        path: '/Contact',
        name: 'contact',
        component: () => import('@/views/ContactView.vue'),
      },
      {
        path: '/Galleries',
        name: 'galleries',
        component: () => import('@/views/GalleriesView.vue'),
      },
      {
        path: '/Portfolio',
        name: 'portfolio',
        component: () => import('@/views/PortfolioView.vue'),
      },
      {
        path: '/Login',
        name: 'login',
        component: () => import('@/views/LoginView.vue'),
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
