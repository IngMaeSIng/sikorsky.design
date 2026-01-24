import { defineConfig } from "@sikorsky/site";

export default defineConfig({
  site: {
    name: "Paul Sikorsky",
    domain: "sikorsky.design"
  },
  logo: "/logo.png",
  logoAlt: "Paul Sikorsky logo",
  footer: {
    copyright: "© Paul Sikorsky, b. 1988",
    decoration: "·㉨·",
    email: "p@sikorsky.design",
    socials: [
      { label: "@initsrightplace", url: "https://t.me/initsrightplace" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/paulsikorsky/" },
      { label: "Instagram", url: "https://www.instagram.com/ingmaesing/" }
    ]
  },
  head: [
    {
      tag: "script",
      attrs: {
        defer: true,
        src: "https://stats.andreitarasov.dev/stats.js",
        "data-website-id": "0790d682-eacb-4a94-9501-f74afdf185c9"
      }
    }
  ]
});
