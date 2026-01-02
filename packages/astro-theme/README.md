# @sikorsky/astro-theme

A reusable Astro theme package with components, styles, and a Firebase-powered like system.

## Installation

```bash
npm install @sikorsky/astro-theme
```

Or for local development:

```bash
# In the package directory
npm link

# In your Astro project
npm link @sikorsky/astro-theme
```

## Setup

### 1. Create a theme configuration file

Create `theme.config.ts` in your project root:

```typescript
import { defineConfig } from "@sikorsky/astro-theme";

export default defineConfig({
  site: {
    name: "Your Name",
    domain: "your-site.com"
  },
  logo: "/logo.png",
  footer: {
    copyright: "© Your Name, b. 1990",
    decoration: "·㉨·", // Optional decorative element
    email: "you@your-site.com",
    socials: [
      { label: "Telegram", url: "https://t.me/yourhandle" },
      { label: "LinkedIn", url: "https://linkedin.com/in/you" },
      { label: "Instagram", url: "https://instagram.com/you" }
    ]
  }
});
```

### 2. Add the integration to your Astro config

```typescript
// astro.config.mjs
import { defineConfig } from "astro/config";
import { themeIntegration } from "@sikorsky/astro-theme";
import themeConfig from "./theme.config";

export default defineConfig({
  integrations: [themeIntegration({ config: themeConfig })]
});
```

### 3. Set up Firebase (for the like system)

Create a `.env` file with your Firebase credentials:

```env
PUBLIC_FIREBASE_API_KEY=your-api-key
PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
PUBLIC_FIREBASE_DATABASE_URL=https://your-project.firebaseio.com
PUBLIC_FIREBASE_PROJECT_ID=your-project
PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
```

### 4. Copy fonts to your public folder

The integration will attempt to copy fonts during build, but you may need to manually copy them:

```bash
cp -r node_modules/@sikorsky/astro-theme/src/fonts/Inter public/fonts/
```

## Usage

### Using the Layout component

```astro
---
import { Layout } from "@sikorsky/astro-theme";
---

<Layout title="My Page" description="Page description" pageId="my-page">
  <h1 id="title">My Page</h1>
  <p>Content goes here...</p>
</Layout>
```

The `pageId` prop enables the like button for that page.

### Available Components

- `Layout` - Main layout with nav, footer, and optional like button
- `Nav` - Navigation with logo and breadcrumbs
- `Breadcrumbs` - Breadcrumb navigation with scroll-based visibility
- `LikeButton` - Firebase-powered like button with animations
- `Card` - Link card component

### Utilities

- `generateBreadcrumbs(path, title)` - Generate breadcrumb items from a path

## TypeScript Support

Add the virtual module types to your `src/env.d.ts`:

```typescript
/// <reference types="@sikorsky/astro-theme/src/virtual" />
```

## License

MIT
