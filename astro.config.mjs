import { defineConfig } from "astro/config";
import { themeIntegration } from "@sikorsky/site";
import themeConfig from "./theme.config";

// https://astro.build/config
export default defineConfig({
  integrations: [themeIntegration({ config: themeConfig })],
  vite: {
    ssr: {
      noExternal: ["firebase"]
    }
  }
});
