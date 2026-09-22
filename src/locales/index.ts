import { en } from "@/locales/en";
import { pl } from "@/locales/pl";
import type { Language } from "@/types/language";

export const dictionaries = {
  pl,
  en,
} as const;

export type Dictionary =
  (typeof dictionaries)[Language];