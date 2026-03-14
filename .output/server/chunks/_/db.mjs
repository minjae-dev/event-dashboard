import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const DB_PATH = resolve(process.cwd(), "db.json");
async function readDb() {
  const raw = await readFile(DB_PATH, "utf-8");
  return JSON.parse(raw);
}
async function writeDb(data) {
  await writeFile(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
}
function nextNumericStringId(items) {
  const maxId = items.reduce((max, item) => {
    const value = Number(item.id);
    if (Number.isNaN(value)) return max;
    return Math.max(max, value);
  }, 0);
  return String(maxId + 1);
}

export { nextNumericStringId as n, readDb as r, writeDb as w };
//# sourceMappingURL=db.mjs.map
