import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://vojtastruhar.github.io/",
  base: "/steam-review-template",
  integrations: [tailwind()],
  output: "server",
  adapter: netlify(),
});