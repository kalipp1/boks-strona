"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/components/providers/language-provider";
import { oswald } from "@/lib/fonts";

export default function NotFound() {
  const { dictionary: t } = useLanguage();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,161,58,0.08),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Image
          src="/images/logo/club-mark.png"
          alt=""
          width={492}
          height={310}
          className="mx-auto mb-10 w-40 opacity-40 sm:w-52"
        />

        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-gold)]">
          {t.errors.notFound.eyebrow}
        </p>

        <p
          className={`${oswald.className} mt-4 text-[clamp(6rem,18vw,13rem)] font-bold leading-none tracking-[-0.06em] text-white`}
        >
          {t.errors.notFound.code}
        </p>

        <h1
          className={`${oswald.className} mt-3 text-4xl font-semibold uppercase text-white sm:text-6xl`}
        >
          {t.errors.notFound.title}
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/45">
          {t.errors.notFound.description}
        </p>

        <Link
          href="/"
          className="mx-auto mt-9 flex h-14 w-fit items-center gap-3 bg-[var(--color-gold)] px-7 text-xs font-bold uppercase tracking-[0.16em] text-black transition-colors hover:bg-[var(--color-gold-light)]"
        >
          <ArrowLeft className="h-4 w-4" />

          {t.errors.notFound.action}
        </Link>
      </div>
    </main>
  );
}