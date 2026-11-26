// entry: one line to my younger self, the turn sits at the end: the doors were never locked, only the handle was stiff.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I know you're waiting to feel ready. I'm writing from the other side " +
  "to say: it never arrives, and the doors weren't locked.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, LINE, "utf8");
