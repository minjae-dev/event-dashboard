import { getUsers } from '@/apis/users/usersApi'
import type { LoginRequest, LoginResponse } from '@/models/User'
import { useToast } from 'vue-toastification'

const toast = useToast()
export async function loginUser(payload: LoginRequest): Promise<LoginResponse | null> {
  const users = await getUsers(payload.email)
  if (!users) {
    toast.error('서버 오류')
    return null
  }
  if (users?.data.length === 0) {
    toast.error('사용자가 없습니다')
    return null
  }
  const user = users.data[0]
  if (user.password !== payload.password) {
    toast.error('비밀번호가 일치하지 않습니다.')
    return null
  }
  toast.success('로그인 성공')
  return {
    access_token: 'example_access_token',
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
    },
  }
}
