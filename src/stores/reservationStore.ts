import { computed } from 'vue'
// /stores/reservationStore.ts
import { getReservationsByEventId } from '@/apis/reservations/reservationsApi'
import { RESERVATION_STATUS } from '@/models/Constants'
import type { IReservation } from '@/models/Reservation'
import { reservationStatusMapper } from '@/uses/enumMapping'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useReservationStore = defineStore('reservationStore', () => {
  const reservations = ref<IReservation[]>([])

  const loadReservations = async (eventId: string) => {
    const response = await getReservationsByEventId(eventId)
    reservations.value = response
      ? response.data.map((item: IReservation) => ({
          id: item.id,
          event_id: item.event_id,
          user_id: item.user_id,
          status: reservationStatusMapper(item.status),
          reserved_at: item.reserved_at,
        }))
      : []
    console.log(reservations.value)
  }

  const getByEventId = (eventId: number) => {
    return reservations.value.filter((r) => r.event_id === eventId)
  }

  const getStatusCountByEvent = (eventId: number) => {
    const list = getByEventId(eventId)
    return {
      reserved: list.filter((r) => r.status === RESERVATION_STATUS.RESERVED).length,
      wait_list: list.filter((r) => r.status === RESERVATION_STATUS.WAIT_LIST).length,
      cancelled: list.filter((r) => r.status === RESERVATION_STATUS.CANCELLED).length,
    }
  }

  const getRecentReservedDate = computed(() =>
    reservations.value && reservations.value.length > 0
      ? reservations.value[0].reserved_at
      : new Date().toISOString().slice(0, 10),
  )

  return {
    reservations,
    loadReservations,
    getByEventId,
    getStatusCountByEvent,
    getRecentReservedDate,
  }
})
