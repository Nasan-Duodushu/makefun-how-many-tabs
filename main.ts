// How Many Tabs Do You Have Open? The whole entry is one number, digits
// only: the honest count, which happens to also be an error code.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), '404');
