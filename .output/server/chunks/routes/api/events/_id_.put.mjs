import { d as defineEventHandler, g as getRouterParam, c as createError, r as readBody } from '../../../nitro/nitro.mjs';
import { r as readDb, w as writeDb } from '../../../_/db.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'node:fs/promises';

const _id__put = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "Event id is required" });
  }
  const payload = await readBody(event);
  const db = await readDb();
  const index = db.events.findIndex((item) => String(item.id) === String(id));
  if (index === -1) {
    throw createError({ statusCode: 404, statusMessage: "Event not found" });
  }
  db.events[index] = {
    ...db.events[index],
    ...payload,
    id: db.events[index].id
  };
  await writeDb(db);
  return db.events[index];
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
