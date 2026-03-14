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

const _id__patch = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "User id is required" });
  }
  const payload = await readBody(event);
  const db = await readDb();
  const index = db.users.findIndex((user) => String(user.id) === String(id));
  if (index === -1) {
    throw createError({ statusCode: 404, statusMessage: "User not found" });
  }
  db.users[index] = {
    ...db.users[index],
    ...payload,
    id: db.users[index].id
  };
  await writeDb(db);
  return db.users[index];
});

export { _id__patch as default };
//# sourceMappingURL=_id_.patch.mjs.map
