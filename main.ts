import { mkdirSync, writeFileSync } from "node:fs";

// Final pass: tighten the wording so the meetings gag and the closing
// "nobody has noticed" land in one breath, comfortably under 140 chars.
const ENTRY =
  "Out of office until Monday. The mannequin in my shirt at my desk has attended more meetings than me this year — and nobody has noticed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
