import { RESERVATION_STATUS } from '@/models/Constants'

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
