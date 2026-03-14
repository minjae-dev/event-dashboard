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
  const email = typeof query.email === "string" ? query.email : void 0;
  const db = await readDb();
  if (!email) return db.users;
  return db.users.filter((user) => user.email === email);
});

export { index_get as default };
//# sourceMappingURL=index.get3.mjs.map
