import { d as defineEventHandler, a as getQuery, b as setHeader } from '../../nitro/nitro.mjs';
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
  var _a, _b;
  const query = getQuery(event);
  const id = typeof query.id === "string" ? query.id : void 0;
  const category = typeof query.category === "string" ? query.category : void 0;
  const keyword = typeof query.q === "string" ? query.q.toLowerCase() : void 0;
  const page = Number((_a = query._page) != null ? _a : 1);
  const limit = Number((_b = query._limit) != null ? _b : 10);
  const db = await readDb();
  let items = [...db.events];
  if (id) {
    items = items.filter((item) => String(item.id) === String(id));
  }
  if (category) {
    items = items.filter((item) => item.category === category);
  }
  if (keyword) {
    items = items.filter((item) => {
      const haystack = `${item.title} ${item.description} ${item.category} ${item.location} ${item.building}`.toLowerCase();
      return haystack.includes(keyword);
    });
  }
  const total = items.length;
  setHeader(event, "x-total-count", String(total));
  const safePage = Number.isFinite(page) && page > 0 ? page : 1;
  const safeLimit = Number.isFinite(limit) && limit > 0 ? limit : total || 10;
  const start = (safePage - 1) * safeLimit;
  const end = start + safeLimit;
  return items.slice(start, end);
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
