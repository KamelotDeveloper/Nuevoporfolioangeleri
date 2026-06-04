import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://KamelotDeveloper.github.io",
  base: "/Nuevoporfolioangeleri",
  integrations: [tailwind()],
  devToolbar: {
    enabled: false
  }
})