import type { Config } from "tailwindcss";

import baseConfig from "@acme/tailwind-config";

export default {
  content: ["./components/**/*.tsx"],
  presets: [baseConfig],
} satisfies Config;
