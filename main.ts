import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "Bought the dip. The dip had a basement. The basement had my life savings.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
