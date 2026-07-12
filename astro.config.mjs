import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: process.env.PUBLIC_SITE_URL ?? "https://www.barbaranunez-osteopata.es",
  trailingSlash: "always",
});
