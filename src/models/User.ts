import type { USER_ROLE } from './Constants'

export interface IUser {
  id: number | null
  role: USER_ROLE | null
  email: string | null
  password?: string | null
}

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  access_token: string
  user: {
    id: number | null
    role: USER_ROLE | null
    email: string | null
  }
}
