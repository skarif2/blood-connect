// @ts-check
import i18nConfig from "./next-i18next.config.js";
// Importing env files here to validate on build
import "./src/env.mjs";
import "@acme/auth/env.mjs";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  i18n: i18nConfig.i18n,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ["@acme/ui", "@acme/api", "@acme/auth", "@acme/db"],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  experimental: {
    esmExternals: false,
  },
};

export default config;
