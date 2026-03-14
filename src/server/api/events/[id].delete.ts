import { createError, getRouterParam, setResponseStatus } from 'h3'
import { readDb, writeDb } from '../../utils/db'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Event id is required' })
  }

  const db = await readDb()
  const prevLength = db.events.length
  db.events = db.events.filter((item) => String(item.id) !== String(id))

  if (db.events.length === prevLength) {
    throw createError({ statusCode: 404, statusMessage: 'Event not found' })
  }

  await writeDb(db)
  setResponseStatus(event, 204)
  return null
})
