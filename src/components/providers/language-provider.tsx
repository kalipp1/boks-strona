"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
    useSyncExternalStore,
} from "react";
import type { ReactNode } from "react";

import {
    getLanguageSnapshot,
    getServerLanguageSnapshot,
    persistLanguage,
    subscribeToLanguage,
} from "@/lib/language-store";

import {
  dictionaries,
  type Dictionary,
} from "@/locales";
import type { Language } from "@/types/language";

interface LanguageContextValue {
  language: Language;
  dictionary: Dictionary;
  changeLanguage: (language: Language) => void;
}

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageContext =
  createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const language = useSyncExternalStore(
        subscribeToLanguage,
        getLanguageSnapshot,
        getServerLanguageSnapshot,
  );

  const [isTransitioning, setIsTransitioning] =
    useState(false);

  const shouldReduceMotion = useReducedMotion();

  const languageTimer = useRef<number | null>(null);
  const transitionTimer = useRef<number | null>(null);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    return () => {
      if (languageTimer.current) {
        window.clearTimeout(languageTimer.current);
      }

      if (transitionTimer.current) {
        window.clearTimeout(
          transitionTimer.current,
        );
      }
    };
  }, []);

  const changeLanguage = (
    nextLanguage: Language,
  ) => {
    if (
      nextLanguage === language ||
      isTransitioning
    ) {
      return;
    }

    if (shouldReduceMotion) {
        persistLanguage(nextLanguage);
        return;
    }

    setIsTransitioning(true);

    languageTimer.current =
    window.setTimeout(() => {
      persistLanguage(nextLanguage);
    }, 180);

    transitionTimer.current =
      window.setTimeout(() => {
        setIsTransitioning(false);
      }, 520);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        dictionary:
          dictionaries[language],
        changeLanguage,
      }}
    >
      {children}

      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="pointer-events-none fixed inset-0 z-[9998] bg-black/20 backdrop-blur-md"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.18,
            }}
          />
        )}
      </AnimatePresence>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider",
    );
  }

  return context;
}