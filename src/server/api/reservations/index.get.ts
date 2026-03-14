import { getQuery } from 'h3'
import { readDb } from '../../utils/db'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const eventId = typeof query.event_id === 'string' ? query.event_id : undefined

  const db = await readDb()
  if (!eventId) return db.reservations

  return db.reservations.filter((item) => String(item.event_id) === String(eventId))
})
