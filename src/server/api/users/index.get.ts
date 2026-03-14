import { getQuery } from 'h3'
import { readDb } from '../../utils/db'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const email = typeof query.email === 'string' ? query.email : undefined

  const db = await readDb()
  if (!email) return db.users

  return db.users.filter((user) => user.email === email)
})
