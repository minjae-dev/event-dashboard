import { d as defineEventHandler, g as getRouterParam, c as createError, s as setResponseStatus } from '../../../nitro/nitro.mjs';
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

const _id__delete = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "Event id is required" });
  }
  const db = await readDb();
  const prevLength = db.events.length;
  db.events = db.events.filter((item) => String(item.id) !== String(id));
  if (db.events.length === prevLength) {
    throw createError({ statusCode: 404, statusMessage: "Event not found" });
  }
  await writeDb(db);
  setResponseStatus(event, 204);
  return null;
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
