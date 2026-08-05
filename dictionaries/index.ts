import { en } from "./en";
import { ur } from "./ur";
import type { Dictionary, Locale } from "./types";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  ur,
};

export const getDictionary = (locale: Locale): Dictionary => {
  return dictionaries[locale] ?? dictionaries.en;
};

export type { Dictionary, Locale };
