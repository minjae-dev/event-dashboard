import { readBody, setResponseStatus } from 'h3'
import { nextNumericStringId, readDb, writeDb } from '../../utils/db'

export default defineEventHandler(async (event) => {
  const payload = await readBody<Record<string, unknown>>(event)
  const db = await readDb()

  const created = {
    id: nextNumericStringId(db.events),
    ...payload,
  }

  db.events.push(created as never)
  await writeDb(db)

  setResponseStatus(event, 201)
  return created
})
