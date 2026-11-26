// entry: one line to my younger self, at most 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";

// The line earns its turn at the end: the door was never locked.
const LINE =
  "I know you're waiting to feel ready. I'm writing from the other side " +
  "to say: it never arrives, and the doors weren't locked.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, LINE, "utf8");
