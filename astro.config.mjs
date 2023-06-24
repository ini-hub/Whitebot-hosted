import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: parseInt(process.env.PORT || "6701"),
  },
  integrations: [react(), tailwind()],
});
