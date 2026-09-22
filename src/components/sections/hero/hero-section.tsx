"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site-config";
import { oswald } from "@/lib/fonts";
import { useLanguage } from "@/components/providers/language-provider";

export function HeroSection() {
  const { dictionary: t } = useLanguage();
  
  const yearStart = siteConfig.foundedYear.slice(0, 2);
  const yearEnd = siteConfig.foundedYear.slice(2);

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-[var(--color-background)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_46%,rgba(214,161,58,0.1),transparent_32%)]" />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/45" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />

      <motion.div
        className="pointer-events-none absolute right-[3%] top-1/2 hidden w-[38vw] max-w-[560px] -translate-y-1/2 lg:block"
        initial={{
          opacity: 0,
          scale: 0.92,
          x: 40,
        }}
        animate={{
          opacity: 0.32,
          scale: 1,
          x: 0,
        }}
        transition={{
          duration: 1.2,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Image
          src="/images/logo/club-logo.png"
          alt=""
          width={657}
          height={646}
          priority
          className="h-auto w-full select-none object-contain"
        />
      </motion.div>

      <div className="absolute right-[-180px] top-[24%] h-[560px] w-[560px] rounded-full bg-[rgba(214,161,58,0.1)] blur-[150px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-24 pt-36 md:px-10 lg:px-16">
        <motion.div
          className="max-w-5xl"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="mb-7 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)] md:text-xs">
            <span className="block h-px w-5 bg-[var(--color-gold)]" />

            <span>{t.hero.eyebrow}</span>

            <span className="block h-px w-5 bg-[var(--color-gold)]" />
          </div>

          <h1
            className={`${oswald.className} flex flex-col text-[clamp(3.65rem,19vw,5.6rem)] font-bold uppercase leading-[0.79] tracking-[-0.055em] text-white sm:text-[clamp(4rem,11vw,10rem)]`}
          >
            <span>{t.hero.titleLineOne}</span>

            <span>{t.hero.titleLineTwo}</span>

            <span className="text-[var(--color-gold)]">
              {t.hero.titleHighlight}
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-[var(--color-text-secondary)] md:mt-10 md:text-lg md:leading-8">
            {t.hero.description}
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="group flex items-center justify-center gap-5 bg-[var(--color-gold)] px-7 py-4 text-xs font-bold uppercase tracking-[0.13em] text-black transition-all duration-300 hover:bg-[var(--color-gold-light)] hover:shadow-[var(--shadow-gold)]"
            >
              <span>{t.hero.primaryAction}</span>

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
            </Link>

            <Link
              href="#schedule"
              className="border border-white/15 px-7 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white transition-all duration-300 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
            >
              {t.hero.secondaryAction}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}