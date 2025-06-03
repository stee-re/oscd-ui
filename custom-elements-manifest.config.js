import { jsDocTagsPlugin } from "@wc-toolkit/jsdoc-tags";

import { dedupeAndFilterPlugin } from "./scripts/cem-plugin-dedupe.js";

export default {
  globs: ["**/Oscd*.ts"], // Adjust to match your tag-defining files
  exclude: [
    "**/*.stories.ts",
    "**/*.d.ts",
    "**/*.js",
    "node_modules",
    ".storybook",
    ".vscode",
    "utils",
    "theming",
  ],
  outdir: "./",
  litelement: true, // Only if you're using Lit
  analyzeDependencies: true,
  dev: false,
  plugins: [jsDocTagsPlugin({}), dedupeAndFilterPlugin()],
};
