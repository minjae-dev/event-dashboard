import { USER_ROLE } from '@/models/Constants'
import { useAuthStore } from '@/stores/authStore'
import { createRouter, createWebHistory } from 'vue-router'
import { useToast } from 'vue-toastification'

const toast = useToast()

const routes = [
  {
    // 공통 Root 레이아웃
    path: '/',
    component: () => import('@/layouts/RootLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/LoginView.vue'),
      },
      {
        path: '/eventDetail/:id',
        name: 'EventDetail',
        component: () => import('@/views/DetailView.vue'),
        props: true,
      },
      {
        path: '/reservations/:id',
        name: 'Reservations',
        component: () => import('@/views/ReservationsView.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    // 사용자 (manger)
    path: '/manager',
    component: () => import('@/layouts/ManagerLayout.vue'),
    meta: { requiresAuth: true, role: USER_ROLE.MANAGER },
    children: [
      {
        path: 'dashboard',
        name: 'userDashboard',
        component: () => import('@/views/manager/DashBoardView.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('@/layouts/AdminLayout.vue'),
    meta: { requiresAuth: true, role: ['admin'] },
    children: [
      {
        path: 'dashboard',
        name: 'adminDashboard',
        component: () => import('@/views/admin/DashBoardView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const protectedRoutes = ['/user', '/admin']
  if (protectedRoutes.some((path) => to.path.startsWith(path)) && !authStore.token) {
    toast.error('권한이 없습니다.')
    next({ name: 'login' })
  }

  next()
})

export default router
