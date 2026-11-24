import { mkdirSync, writeFileSync } from "node:fs";

// The Dog Ate My Homework: the dog's own excuse, in the dog's voice.
// The twist redefines the setup: the homework smelled like the bacon
// sandwich eaten over it, so the dog did not eat homework at all —
// it finished lunch, and believes it did nothing wrong. No stock lines:
// no cat, no taste of paper, no good boy.
// Single line, no trailing newline: the gate counts 1-200 characters.
const ENTRY =
  "It smelled exactly like the bacon sandwich you ate over it. I didn't eat your homework — I finished your lunch.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${ENTRY.length}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars`);
