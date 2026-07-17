import type { Dictionary, Locale } from "./types";
import { en } from "./en";
import { fr } from "./fr";
import { de } from "./de";
import { nl } from "./nl";
import { ar } from "./ar";

export { locales } from "./types";
export type { Dictionary, Locale } from "./types";

export const dictionaries: Record<Locale, Dictionary> = { en, fr, de, nl, ar };
