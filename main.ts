import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = `You weigh less than the rice I carry home.
Your cardigan smells of the stove.
On the third stair you say,
"Don't drop me."
I don't.
Forty years ago you carried me up these stairs.
Sunlight eight minutes old rests on your cheek.
I set you down on the bed.
Your hand stays in mine.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
