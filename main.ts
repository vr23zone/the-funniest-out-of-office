import { mkdirSync, writeFileSync } from "node:fs";

// Final pass: tighten the wording so the meetings gag and the closing
// "nobody has noticed" land in one breath, comfortably under 140 chars.
const ENTRY =
  "Out of office until Monday. The mannequin in my shirt at my desk has attended more meetings than me this year — and nobody has noticed.";

// The bounty caps the reply at 140 characters and allows exactly one
// line, so fail loudly if a future edit ever breaks either rule instead
// of quietly submitting a broken entry.
if (ENTRY.length > 140 || ENTRY.includes("\n")) {
  throw new Error(`entry must be one line of at most 140 characters (got ${ENTRY.length})`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
