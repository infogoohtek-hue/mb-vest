/**
 * =====================================================================
 * GLOBAL THEME & BRAND CONFIGURATION: NHÀ MAY MB VEST
 * =====================================================================
 * Single Source of Truth for MB VEST brand data, contacts, and tokens.
 */

export const THEME_CONFIG = {
  // 1. BRAND IDENTITY: NHÀ MAY MB VEST
  brand: {
    name: "MB VEST",
    fullName: "Nhà may MB VEST",
    subtitle: "BESPOKE TAILOR",
    tagline: "Nhà may MB VEST - May đo Suit, Vest cưới & Âu phục nam thủ công cao cấp",
    hotline: "0904 989 326",
    contactPerson: "Mr. Bình",
    feedbackPhone: "0904 989 326",
    zaloPhone: "0904 989 326",
    zaloLink: "https://zalo.me/0904989326",
    googleMapsUrl: "https://www.google.com/maps/place/Nhà+may+MB+VEST/@20.7240575,105.8827778,152m/data=!3m1!1e3!4m6!3m5!1s0x3135c91dd951f101:0x78221c9f5e6cb5be!8m2!3d20.7240734!4d105.8824261!16s%2Fg%2F11whfs0_cr",
    address: "Nhà may MB VEST, Hà Nội",
    email: "mbvest.tailor@gmail.com",
    freeShippingThreshold: 500000,
    defaultVoucherCode: "MBVEST10",
  },

  // 2. GLOBAL FONTS (Lora Serif Typography)
  fonts: {
    sans: {
      name: "Lora",
      variable: "--font-sans",
      fallback: "Georgia, 'Times New Roman', serif",
    },
    heading: {
      name: "Lora",
      variable: "--font-heading",
      fallback: "Georgia, 'Times New Roman', serif",
    },
    mono: {
      name: "JetBrains Mono",
      variable: "--font-mono",
      fallback: "'Courier New', monospace",
    },
  },

  // 3. GLOBAL COLOR PALETTE (Luxury Sartorial Obsidian & Gold)
  colors: {
    primary: {
      DEFAULT: "#121212", // Obsidian Black
      hover: "#000000",
      light: "#262626",
    },
    surface: {
      white: "#ffffff",
      sand: "#f7f5f0", // Warm Tailoring Atelier Linen
      subtle: "#f9f9f9",
      dark: "#141414",
    },
    accent: {
      gold: "#c5a880", // Champagne Sartorial Gold
      goldLight: "#e6c987",
      emerald: "#135e1b",
      emeraldLight: "#2e7d32",
    },
    status: {
      sale: "#dc2626",
      saleBg: "#fef2f2",
      success: "#059669",
      warning: "#d97706",
    },
    text: {
      primary: "#171717",
      secondary: "#4a4a4a",
      muted: "#737373",
      light: "#f5f5f5",
    },
    border: {
      DEFAULT: "#e5e5e5",
      subtle: "#f0f0f0",
      dark: "#2e2e2e",
    },
  },

  // 4. TYPOGRAPHY LETTER SPACING (TRACKING)
  tracking: {
    tightest: "-0.04em",
    tighter: "-0.02em",
    normal: "0em",
    wide: "0.05em",
    wider: "0.12em",
    widest: "0.22em",
    overline: "0.25em",
    ultra: "0.32em",
  },
};

export type ThemeConfig = typeof THEME_CONFIG;
