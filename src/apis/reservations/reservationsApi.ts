import { apiClient, apiHelper } from '@/apis/apiHelper'
import type { IReservation } from '@/models/Reservation'
import type { AxiosResponse } from 'axios'

export async function getReservationsByEventId(
  eventId: string,
): Promise<AxiosResponse<IReservation[]> | null> {
  return await apiHelper<IReservation[]>(() => apiClient.get(`/reservations?event_id=${eventId}`))
}
