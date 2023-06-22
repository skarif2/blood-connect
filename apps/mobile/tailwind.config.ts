/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type Config } from "tailwindcss";

import baseConfig from "@acme/tailwind-config";

const nativewind = require("nativewind/tailwind");

export default {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [nativewind, baseConfig],
  plugins: [],
} satisfies Config;
