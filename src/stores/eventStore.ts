import { getEventById, getEvents } from '@/apis/events/eventApi'
import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { ref } from 'vue'

export const useEventStore = defineStore('eventStore', () => {
  const events: Ref<any[]> = ref([])
  const selectedEvent: Ref<any | null> = ref(null)

  const fetchEvents = async () => {
    const response = await getEvents({ page: 1, limit: 9999 })
    events.value = response?.data ?? []
  }

  const fetchEventById = async (id: number) => {
    const response = await getEventById(String(id))
    selectedEvent.value = response?.data?.[0] ?? null
  }

  return {
    events,
    selectedEvent,
    fetchEvents,
    fetchEventById,
  }
})
