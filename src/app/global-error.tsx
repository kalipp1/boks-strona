"use client";

import { RotateCcw } from "lucide-react";
import {
    useEffect,
    useSyncExternalStore,
  } from "react";
  
  import { dictionaries } from "@/locales";
  import {
    getLanguageSnapshot,
    getServerLanguageSnapshot,
    subscribeToLanguage,
  } from "@/lib/language-store";
import { oswald } from "@/lib/fonts";

interface GlobalErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function GlobalError({
  error,
  reset,
}: GlobalErrorProps) {
    const language = useSyncExternalStore(
        subscribeToLanguage,
        getLanguageSnapshot,
        getServerLanguageSnapshot,
      );
      
      const t = dictionaries[language];
      
      useEffect(() => {
        console.error(error);
      }, [error]);

  return (
    <html lang={language}>
      <body className="bg-black text-white">
        <main className="flex min-h-screen items-center justify-center px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d6a13a]">
              {t.errors.general.eyebrow}
            </p>

            <h1
              className={`${oswald.className} mt-5 text-5xl font-bold uppercase leading-[0.95] sm:text-7xl`}
            >
              {t.errors.general.title}
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/45">
              {t.errors.general.description}
            </p>

            <button
              type="button"
              onClick={reset}
              className="mx-auto mt-9 flex h-14 items-center justify-center gap-3 bg-[#d6a13a] px-7 text-xs font-bold uppercase tracking-[0.16em] text-black"
            >
              <RotateCcw className="h-4 w-4" />

              {t.errors.general.retry}
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}