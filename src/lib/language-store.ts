import type { Language } from "@/types/language";

export const LANGUAGE_STORAGE_KEY = "pab-language";

const LANGUAGE_CHANGE_EVENT = "pab-language-change";

function isLanguage(
  value: string | null,
): value is Language {
  return value === "pl" || value === "en";
}

export function getLanguageSnapshot(): Language {
  if (typeof window === "undefined") {
    return "pl";
  }

  const storedLanguage =
    window.localStorage.getItem(
      LANGUAGE_STORAGE_KEY,
    );

  if (isLanguage(storedLanguage)) {
    return storedLanguage;
  }

  return window.navigator.language
    .toLowerCase()
    .startsWith("en")
    ? "en"
    : "pl";
}

export function getServerLanguageSnapshot(): Language {
  return "pl";
}

export function subscribeToLanguage(
  callback: () => void,
): () => void {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  window.addEventListener("storage", callback);
  window.addEventListener(
    LANGUAGE_CHANGE_EVENT,
    callback,
  );

  return () => {
    window.removeEventListener(
      "storage",
      callback,
    );

    window.removeEventListener(
      LANGUAGE_CHANGE_EVENT,
      callback,
    );
  };
}

export function persistLanguage(
  language: Language,
): void {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    LANGUAGE_STORAGE_KEY,
    language,
  );

  document.documentElement.lang = language;

  window.dispatchEvent(
    new Event(LANGUAGE_CHANGE_EVENT),
  );
}