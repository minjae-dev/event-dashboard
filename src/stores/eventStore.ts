import axios from 'axios'
import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { ref } from 'vue'

export const useEventStore = defineStore('eventStore', () => {
  const events: Ref<any[]> = ref([])
  const selectedEvent: Ref<any | null> = ref(null)

  const fetchEvents = async () => {
    const res = await axios.get('http://localhost:4000/events')
    events.value = res.data
  }

  const fetchEventById = async (id: number) => {
    const res = await axios.get(`http://localhost:4000/events/${id}`)
    selectedEvent.value = res.data
  }

  

  return {
    events,
    selectedEvent,
    fetchEvents,
    fetchEventById,
  }
})
