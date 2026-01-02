export interface SocialLink {
  label: string;
  url: string;
  /** Optional: set to true to open in same tab instead of new tab */
  sameTab?: boolean;
}

export interface FooterConfig {
  /** Copyright text, e.g. "© Your Name, b. 1990" */
  copyright: string;
  /** Optional decorative element after copyright */
  decoration?: string;
  /** Contact email address */
  email: string;
  /** Social media links */
  socials: SocialLink[];
}

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

export interface ThemeConfig {
  site: {
    /** Site owner's name - used in breadcrumbs and metadata */
    name: string;
    /** Domain without protocol, e.g. "your-site.com" */
    domain: string;
  };
  /** Path to logo image (relative to public folder) */
  logo: string;
  /** Logo alt text */
  logoAlt?: string;
  /** Footer configuration */
  footer: FooterConfig;
  /**
   * Firebase configuration.
   * If not provided, will use PUBLIC_FIREBASE_* environment variables.
   */
  firebase?: Partial<FirebaseConfig>;
}

export interface ResolvedThemeConfig extends ThemeConfig {
  logoAlt: string;
}
