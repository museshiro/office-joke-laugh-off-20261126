// One-Line Office Joke Laugh-Off — writes the entry to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "The office plant died of secondhand burnout.");
