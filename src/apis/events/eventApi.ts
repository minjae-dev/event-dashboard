import { apiClient, apiHelper } from '@/apis/apiHelper'
import type { IEvent } from '@/models/Event'
import type { AxiosResponse } from 'axios'

export interface GetEventsParams {
  page: number
  limit: number
  category?: string
  keyword?: string
}

export async function getEvents({
  page,
  limit,
  category,
  keyword,
}: GetEventsParams): Promise<AxiosResponse<IEvent[]> | null> {
  let query = `/events?_page=${page}&_limit=${limit}`
  if (category) query += `&category=${category}`
  if (keyword) query += `&q=${encodeURIComponent(keyword)}`
  return await apiHelper<IEvent[]>(() => apiClient.get(query))
}

export async function getEventById(id: string): Promise<AxiosResponse<IEvent[]> | null> {
  return await apiHelper<IEvent[]>(() => apiClient.get(`/events?id=${id}`))
}

export async function createEvent(data: Partial<IEvent>): Promise<AxiosResponse<IEvent> | null> {
  return await apiHelper<IEvent>(() => apiClient.post(`/events`, data))
}

export async function updateEvent(
  id: string,
  data: Partial<IEvent>,
): Promise<AxiosResponse<IEvent> | null> {
  return await apiHelper<IEvent>(() => apiClient.put(`/events/${id}`, data))
}

export async function deleteEvent(id: number): Promise<AxiosResponse<void> | null> {
  return await apiHelper<void>(() => apiClient.delete(`/events/${id}`))
}
