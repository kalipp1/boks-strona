"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { siteConfig } from "@/data/site-config";
import { oswald } from "@/lib/fonts";
import { useLanguage } from "@/components/providers/language-provider";

export function AboutSection() {
  const { dictionary: t } = useLanguage();
  
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/5 bg-[#080808] py-24 sm:py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute right-[-180px] top-[10%] h-[500px] w-[500px] rounded-full bg-[rgba(214,161,58,0.05)] blur-[150px]" />

      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-7 flex items-center gap-4">
              <span className="text-[10px] font-bold tracking-[0.28em] text-[var(--color-gold)]">
                {t.about.sectionNumber}
              </span>

              <span className="h-px w-9 bg-[var(--color-gold)]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
                {t.about.eyebrow}
              </span>
            </div>

            <h2
              className={`${oswald.className} flex flex-col text-[clamp(3.4rem,7vw,7.2rem)] font-bold uppercase leading-[0.86] tracking-[-0.045em] text-white`}
            >
              <span>{t.about.titleLineOne}</span>

              <span className="text-[var(--color-gold)]">
                {t.about.titleLineTwo}
              </span>
            </h2>

            <p className="mt-9 max-w-2xl text-lg font-medium leading-8 text-white sm:text-xl">
              {t.about.lead}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/50">
              {t.about.description}
            </p>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-[560px]"
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="relative aspect-square overflow-hidden border border-white/10 bg-black">
              <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-white/10 px-5 py-4">
                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/35">
                  {t.about.foundedLabel}
                </span>

                <span className="text-xs font-bold tracking-[0.2em] text-[var(--color-gold)]">
                  {siteConfig.foundedYear}
                </span>
              </div>

              <div
                className={`${oswald.className} pointer-events-none absolute -right-3 top-[10%] text-[clamp(9rem,22vw,15rem)] font-bold leading-none tracking-[-0.08em] text-white/[0.025]`}
              >
                {siteConfig.foundedYear}
              </div>

              <div className="absolute inset-0 flex items-center justify-center px-8 pt-12">
                <motion.div
                  className="relative w-[88%]"
                  initial={{
                    opacity: 0,
                    scale: 0.92,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Image
                    src="/images/logo/club-mark.png"
                    alt=""
                    width={492}
                    height={310}
                    className="h-auto w-full select-none object-contain opacity-90"
                  />
                </motion.div>
              </div>

              <div className="absolute bottom-7 left-7 right-7 flex items-center gap-4">
                <span className="h-px flex-1 bg-white/10" />

                <span className="h-2 w-2 rotate-45 border border-[var(--color-gold)]" />

                <span className="h-px flex-1 bg-white/10" />
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 h-20 w-20 border-b border-r border-[var(--color-gold)]/50" />

            <div className="absolute -left-4 -top-4 h-20 w-20 border-l border-t border-[var(--color-gold)]/50" />
          </motion.div>
        </div>

        <div className="mt-20 grid border-t border-white/10 md:grid-cols-3 lg:mt-28">
          {t.about.values.map((value, index) => (
            <motion.article
              key={value.number}
              className={[
                "group relative py-9",
                "md:px-8",
                index > 0 ? "border-t border-white/10 md:border-l md:border-t-0" : "",
                index === 0 ? "md:pl-0" : "",
                index === t.about.values.length - 1 ? "md:pr-0" : "",
              ].join(" ")}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-[0.25em] text-[var(--color-gold)]">
                  {value.number}
                </span>

                <span className="h-px w-8 bg-white/15 transition-all duration-300 group-hover:w-14 group-hover:bg-[var(--color-gold)]" />
              </div>

              <h3
                className={`${oswald.className} text-3xl font-semibold uppercase tracking-[0.01em] text-white transition-colors duration-300 group-hover:text-[var(--color-gold)]`}
              >
                {value.title}
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-white/45">
                {value.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}