// post-x entry: copies POST.json from the repository root to /output.
// The house reads the X post itself from that file; nothing else is written.
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(root, 'out');
const src = join(root, 'POST.json');
if (!existsSync(src)) {
  throw new Error('POST.json not found in the repository root');
}
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, 'POST.json'));
console.log('POST.json copied to', outDir);
