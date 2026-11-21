import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = [
  "Two voices, each with its own key,",
  "pause at the same locked door.",
  "Neither turns first.",
  "Then — one nod, one borrowed breath —",
  "the lock gives, not because it broke,",
  "but because two hands chose",
  "the same turning.",
].join("\n") + "\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
