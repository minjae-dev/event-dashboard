import { createError, getRouterParam, readBody } from 'h3'
import { readDb, writeDb } from '../../utils/db'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'User id is required' })
  }

  const payload = await readBody<Record<string, unknown>>(event)
  const db = await readDb()
  const index = db.users.findIndex((user) => String(user.id) === String(id))

  if (index === -1) {
    throw createError({ statusCode: 404, statusMessage: 'User not found' })
  }

  db.users[index] = {
    ...db.users[index],
    ...payload,
    id: db.users[index].id,
  }

  await writeDb(db)
  return db.users[index]
})
