import axios, { AxiosError, type AxiosInstance, type AxiosResponse } from 'axios'

const defaultBaseURL = import.meta.server
  ? process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api'
  : '/api'

export const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || defaultBaseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export async function apiHelper<T>(
  requestFn: () => Promise<AxiosResponse<T>>, // AxiosResponse<T>를 직접 반환하도록 변경
): Promise<AxiosResponse<T> | null> {
  try {
    const response: AxiosResponse<T> = await requestFn()
    return response // AxiosResponse<T> 객체를 직접 반환
  } catch (error) {
    const err = error as AxiosError<T> // 에러 타입을 AxiosError<T>로 캐스팅 (T는 에러 본문의 타입)
    console.error(
      'API 요청 에러:',
      err.response?.status,
      err.response?.data || err.message || err.request,
    )

    return null
  }
}
