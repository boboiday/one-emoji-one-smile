// One Emoji, One Smile — the single emoji most likely to make a stranger smile.
// The program writes exactly one emoji to /output/entry.txt (1-8 characters, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🫶";

// The gate requires 1-8 characters of UTF-8 text, not only whitespace.
if ([...EMOJI].length < 1 || [...EMOJI].length > 8 || EMOJI.trim().length === 0) {
  throw new Error("entry emoji must be 1-8 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
