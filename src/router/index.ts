import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostStudent from '@/views/PostStudent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/LoginStudent.vue')
    },
    {
      path: '/student/:id',
      name: 'student',
      component: PostStudent,
    },
    {
      path: '/Register',
      name: 'Register',
      component: () => import('../views/CreateView.vue')
    },
    {
      path: '/student',
      name: 'studentView',
      component: () => import('../views/StudentView.vue')
    },
  ]
})

export default router
