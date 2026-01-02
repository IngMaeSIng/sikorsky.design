import type { ResolvedThemeConfig, ThemeConfig } from "./types.js";

/**
 * Define your theme configuration.
 * This helper provides type-checking and sets default values.
 */
export function defineConfig(config: ThemeConfig): ResolvedThemeConfig {
  return {
    ...config,
    logoAlt: config.logoAlt ?? `${config.site.name} logo`
  };
}

// Default config used when no config is provided
export const defaultConfig: ResolvedThemeConfig = {
  site: {
    name: "My Site",
    domain: "example.com"
  },
  logo: "/logo.png",
  logoAlt: "My Site logo",
  footer: {
    copyright: "© My Site",
    email: "hello@example.com",
    socials: []
  }
};
