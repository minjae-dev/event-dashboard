import { apiClient, apiHelper } from '@/apis/apiHelper'
import type { IUser } from '@/models/User'
import type { AxiosResponse } from 'axios'

export async function getUsers(email: string): Promise<AxiosResponse<IUser[]> | null> {
  return await apiHelper<IUser[]>(() => apiClient.get(`/users?email=${email}`))
}
