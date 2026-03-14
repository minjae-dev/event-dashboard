import { d as defineEventHandler, r as readBody, s as setResponseStatus } from '../../nitro/nitro.mjs';
import { r as readDb, n as nextNumericStringId, w as writeDb } from '../../_/db.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'node:fs/promises';

const index_post = defineEventHandler(async (event) => {
  const payload = await readBody(event);
  const db = await readDb();
  const created = {
    id: nextNumericStringId(db.events),
    ...payload
  };
  db.events.push(created);
  await writeDb(db);
  setResponseStatus(event, 201);
  return created;
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
