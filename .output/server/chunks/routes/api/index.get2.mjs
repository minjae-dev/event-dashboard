import { d as defineEventHandler, a as getQuery } from '../../nitro/nitro.mjs';
import { r as readDb } from '../../_/db.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'node:fs/promises';

const index_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const eventId = typeof query.event_id === "string" ? query.event_id : void 0;
  const db = await readDb();
  if (!eventId) return db.reservations;
  return db.reservations.filter((item) => String(item.event_id) === String(eventId));
});

export { index_get as default };
//# sourceMappingURL=index.get2.mjs.map
