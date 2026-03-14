import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

export interface DbUser {
  id: string
  name: string
  email: string
  role: string
  created_at: string
  password: string
}

export interface DbReservation {
  id: string
  event_id: number
  user_id: number
  status: number
  reserved_at: string
}

export interface DbEvent {
  id: string
  title: string
  description: string
  category: string
  status: string | number
  location: string
  building: string
  startDate: string
  endDate: string
  capacity: number
}

export interface DatabaseSchema {
  users: DbUser[]
  reservations: DbReservation[]
  events: DbEvent[]
}

const DB_PATH = resolve(process.cwd(), 'db.json')

export async function readDb(): Promise<DatabaseSchema> {
  const raw = await readFile(DB_PATH, 'utf-8')
  return JSON.parse(raw) as DatabaseSchema
}

export async function writeDb(data: DatabaseSchema): Promise<void> {
  await writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf-8')
}

export function nextNumericStringId(items: Array<{ id: string | number }>): string {
  const maxId = items.reduce((max, item) => {
    const value = Number(item.id)
    if (Number.isNaN(value)) return max
    return Math.max(max, value)
  }, 0)

  return String(maxId + 1)
}
