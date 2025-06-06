export interface IEvent {
  id: number
  title: string
  description: string
  category: string
  status: string
  location: string
  building: string
  startDate: string
  endDate: string
  capacity: number
}

export type EventDataType = {
  id: number | null
  description: string | null
  category: string | null
  location: string | null
  building: string | null
  startDate: string | null
  endDate: string | null
  capacity: number | null
  title: string | null
  status: string | null
}
