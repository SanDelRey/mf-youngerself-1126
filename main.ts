// entry: one line to my younger self, at most 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";

// The turn sits at the end: the door was never locked.
const LINE =
  "You're still waiting to feel ready. From the other side: it never " +
  "arrives, and the doors were never locked, only heavy.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, LINE, "utf8");
