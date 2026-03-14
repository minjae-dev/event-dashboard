import { getQuery, setHeader } from 'h3'
import { readDb } from '../../utils/db'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const id = typeof query.id === 'string' ? query.id : undefined
  const category = typeof query.category === 'string' ? query.category : undefined
  const keyword = typeof query.q === 'string' ? query.q.toLowerCase() : undefined
  const page = Number(query._page ?? 1)
  const limit = Number(query._limit ?? 10)

  const db = await readDb()
  let items = [...db.events]

  if (id) {
    items = items.filter((item) => String(item.id) === String(id))
  }

  if (category) {
    items = items.filter((item) => item.category === category)
  }

  if (keyword) {
    items = items.filter((item) => {
      const haystack =
        `${item.title} ${item.description} ${item.category} ${item.location} ${item.building}`.toLowerCase()
      return haystack.includes(keyword)
    })
  }

  const total = items.length
  setHeader(event, 'x-total-count', String(total))

  const safePage = Number.isFinite(page) && page > 0 ? page : 1
  const safeLimit = Number.isFinite(limit) && limit > 0 ? limit : total || 10

  const start = (safePage - 1) * safeLimit
  const end = start + safeLimit

  return items.slice(start, end)
})
