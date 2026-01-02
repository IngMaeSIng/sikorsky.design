// Configuration
export { defaultConfig, defineConfig } from "./config.js";
export { themeIntegration } from "./integration.js";
export type { FirebaseConfig, FooterConfig, ResolvedThemeConfig, SocialLink, ThemeConfig } from "./types.js";

// Note: Components should be imported directly from their paths:
// import Layout from '@sikorsky/astro-theme/components/Layout.astro';
// import Nav from '@sikorsky/astro-theme/components/Nav.astro';
// etc.

// Utilities and Firebase are re-exported below for convenience,
// but they require the virtual:theme-config module to be set up first.
// They should only be used in .astro files, not during config loading.
