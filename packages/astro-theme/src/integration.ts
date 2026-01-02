import type { AstroIntegration } from "astro";
import { cpSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { defaultConfig } from "./config.js";
import type { ResolvedThemeConfig } from "./types.js";

const VIRTUAL_MODULE_ID = "virtual:theme-config";
const RESOLVED_VIRTUAL_MODULE_ID = "\0" + VIRTUAL_MODULE_ID;

export interface ThemeIntegrationOptions {
  /**
   * Theme configuration. Pass the result of defineConfig() here.
   */
  config?: ResolvedThemeConfig;
}

/**
 * Astro integration for the @sikorsky/astro-theme package.
 *
 * This integration:
 * 1. Provides a virtual module `virtual:theme-config` that components can import
 * 2. Copies Inter fonts to the public folder during build
 */
export function themeIntegration(options: ThemeIntegrationOptions = {}): AstroIntegration {
  const config = options.config ?? defaultConfig;

  return {
    name: "@sikorsky/astro-theme",
    hooks: {
      "astro:config:setup": ({ updateConfig }) => {
        updateConfig({
          vite: {
            plugins: [
              {
                name: "sikorsky-theme-virtual-config",
                resolveId(id: string) {
                  if (id === VIRTUAL_MODULE_ID) {
                    return RESOLVED_VIRTUAL_MODULE_ID;
                  }
                },
                load(id: string) {
                  if (id === RESOLVED_VIRTUAL_MODULE_ID) {
                    return `export default ${JSON.stringify(config)};`;
                  }
                }
              }
            ]
          }
        });
      },

      "astro:build:start": ({ logger }) => {
        // Copy fonts to public folder during build
        const packageDir = dirname(fileURLToPath(import.meta.url));
        const fontsSource = join(packageDir, "fonts", "Inter");

        // This will be the consumer's public folder
        const publicFontsDir = join(process.cwd(), "public", "fonts", "Inter");

        if (existsSync(fontsSource)) {
          try {
            mkdirSync(publicFontsDir, { recursive: true });
            cpSync(fontsSource, publicFontsDir, { recursive: true });
            logger.info("Copied Inter fonts to public/fonts/Inter");
          } catch (error) {
            logger.warn(`Could not copy fonts: ${error}`);
          }
        }
      }
    }
  };
}
