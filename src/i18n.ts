export const locales = ["fa", "en"] as const;
export const defaultLocale = "fa";

export type Locale = (typeof locales)[number];