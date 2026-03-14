import { apiClient, apiHelper } from '@/apis/apiHelper'
import type { IUser } from '@/models/User'
import type { AxiosResponse } from 'axios'

export interface IUserAdmin extends IUser {
  name: string
  created_at: string
  isActive?: boolean
}

export async function getUsers(email: string): Promise<AxiosResponse<IUser[]> | null> {
  return await apiHelper<IUser[]>(() => apiClient.get(`/users?email=${email}`))
}

export async function getAllUsers(): Promise<AxiosResponse<IUserAdmin[]> | null> {
  return await apiHelper<IUserAdmin[]>(() => apiClient.get('/users'))
}

export async function updateUserRole(
  id: string,
  role: string,
): Promise<AxiosResponse<IUserAdmin> | null> {
  return await apiHelper<IUserAdmin>(() => apiClient.patch(`/users/${id}`, { role }))
}
