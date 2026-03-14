import { useToast } from 'vue-toastification'

export default defineNuxtRouteMiddleware((to) => {
  if (process.server) return

  const authStore = useAuthStore()
  const toast = useToast()
  const protectedPrefixes = ['/manager', '/admin']

  if (protectedPrefixes.some((path) => to.path.startsWith(path)) && !authStore.isLogin) {
    toast.error('권한이 없습니다.')
    return navigateTo('/login')
  }
})
