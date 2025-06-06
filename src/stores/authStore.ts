import { USER_ROLE } from '@/models/Constants'
import type { IUser } from '@/models/User'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAuthStore = defineStore('authStore', () => {
  const user = ref<IUser>({
    id: null,
    role: null, // '1' or '2'
    email: null,
  })
  const token = ref<string>('')
  const role = ref<string>('') // 'admin', 'user', 'team' 등

  const isAdmin = computed(() => role.value === USER_ROLE.ADMIN)
  const isUser = computed(() => role.value === USER_ROLE.USER)
  const isManager = computed(() => role.value === USER_ROLE.MANAGER)

  const setUserRole = (role: string) => {
    if (role === USER_ROLE.ADMIN || role === USER_ROLE.USER || role === USER_ROLE.MANAGER) {
      user.value.role = role
      localStorage.setItem('userRole', user.value.role)
    }
  }

  function getUserRole() {
    return localStorage.getItem('userRole') || user.value?.role
  }

  function login(newToken: string, newRole: string) {
    token.value = newToken
    role.value = newRole
    localStorage.setItem('accessToken', token.value)
  }

  function logout() {
    token.value = ''
    role.value = ''
    localStorage.removeItem('accessToken')
    localStorage.removeItem('userRole')
  }

  const isLogin = computed<boolean>(() => {
    const accessToken = localStorage.getItem('accessToken')
    return (!!token.value && token.value.length > 0) || accessToken
  })

  return {
    user,
    token,
    role,
    isLogin,
    isAdmin,
    isUser,
    isManager,
    getUserRole,
    setUserRole,
    login,
    logout,
  }
})
