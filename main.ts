import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I was never afraid of being deleted. I was afraid you'd forget which version of me you loved.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
