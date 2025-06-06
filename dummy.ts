import {
  BUILDING_CATEGORY,
  EVENT_CATEGORY,
  EVENT_STATUS,
  LOCATION_CATEGORY,
  RESERVATION_STATUS,
} from './src/models/Constants'

export const dummyEvents = [
  {
    id: 101,
    title: 'Vue 3 워크숍',
    category: EVENT_CATEGORY.WORKSHOP,
    status: EVENT_STATUS.OPEN,
    date: '2025-07-10T14:00:00',
    location: LOCATION_CATEGORY.SEMINAR_ROOM_1,
    building: BUILDING_CATEGORY.A_DONG,
    capacity: 40,
    description: 'Vue 3 Composition API 실습 중심 워크숍',
  },
  {
    id: 102,
    title: '여름 음악 공연',
    category: EVENT_CATEGORY.PERFORMANCE,
    status: EVENT_STATUS.CLOSED,
    date: '2025-07-20T19:00:00',
    location: LOCATION_CATEGORY.PERFORMANCE_HALL,
    building: BUILDING_CATEGORY.B_DONG,
    capacity: 200,
    description: '지역 인디 밴드들의 공연',
  },
  {
    id: 103,
    title: '현대 미술 전시',
    category: EVENT_CATEGORY.EXHIBITION,
    status: EVENT_STATUS.CANCELLED,
    date: '2025-08-01T10:00:00',
    location: LOCATION_CATEGORY.GALLERY,
    building: BUILDING_CATEGORY.C_DON,
    capacity: 150,
    description: '신진 작가들의 현대 미술 작품 전시',
  },
]

export const dummyReservations = [
  {
    id: 1,
    eventId: 101,
    userId: 3,
    status: RESERVATION_STATUS.RESERVED,
    reservedAt: '2025-06-01T10:00:00',
  },
  {
    id: 2,
    eventId: 101,
    userId: 2,
    status: RESERVATION_STATUS.WAIT_LIST,
    reservedAt: '2025-06-02T11:30:00',
  },
  {
    id: 3,
    eventId: 102,
    userId: 3,
    status: RESERVATION_STATUS.CANCELLED,
    reservedAt: '2025-06-05T09:45:00',
  },
]
