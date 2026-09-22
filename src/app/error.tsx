"use client";

import {
  ArrowLeft,
  RotateCcw,
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

import { useLanguage } from "@/components/providers/language-provider";
import { oswald } from "@/lib/fonts";

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  const { dictionary: t } = useLanguage();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-gold)]">
          {t.errors.general.eyebrow}
        </p>

        <h1
          className={`${oswald.className} mt-5 text-5xl font-bold uppercase leading-[0.95] text-white sm:text-7xl`}
        >
          {t.errors.general.title}
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/45">
          {t.errors.general.description}
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="flex h-14 items-center justify-center gap-3 bg-[var(--color-gold)] px-7 text-xs font-bold uppercase tracking-[0.16em] text-black"
          >
            <RotateCcw className="h-4 w-4" />

            {t.errors.general.retry}
          </button>

          <Link
            href="/"
            className="flex h-14 items-center justify-center gap-3 border border-white/15 px-7 text-xs font-bold uppercase tracking-[0.16em] text-white"
          >
            <ArrowLeft className="h-4 w-4" />

            {t.errors.general.home}
          </Link>
        </div>
      </div>
    </main>
  );
}