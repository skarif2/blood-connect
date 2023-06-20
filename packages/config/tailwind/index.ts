import type { Config } from "tailwindcss";

import shadcnPlugin from "./shadcnPlugin";

export default {
  content: [""],
  darkMode: ["class"],
  plugins: [shadcnPlugin],
} satisfies Config;
