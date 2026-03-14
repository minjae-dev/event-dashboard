import { createError, getRouterParam, readBody } from 'h3'
import { readDb, writeDb } from '../../utils/db'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Event id is required' })
  }

  const payload = await readBody<Record<string, unknown>>(event)
  const db = await readDb()
  const index = db.events.findIndex((item) => String(item.id) === String(id))

  if (index === -1) {
    throw createError({ statusCode: 404, statusMessage: 'Event not found' })
  }

  db.events[index] = {
    ...db.events[index],
    ...payload,
    id: db.events[index].id,
  }

  await writeDb(db)
  return db.events[index]
})
