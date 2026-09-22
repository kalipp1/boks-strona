"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { oswald } from "@/lib/fonts";
import { useLanguage } from "@/components/providers/language-provider";
import type { Trainer } from "@/types/trainer";

interface TrainerCardProps {
  trainer: Trainer;
  index: number;
}

export function TrainerCard({
  trainer,
  index,
}: TrainerCardProps) {
  const { dictionary: t } = useLanguage();
  
  const content = t.trainers.profiles[trainer.contentKey];

  return (
    <motion.article
      className="group relative overflow-hidden border border-white/10 bg-[#0b0b0b]"
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-black">
        {trainer.image ? (
          <Image
            src={trainer.image}
            alt={content.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,161,58,0.12),transparent_55%)]" />

            <Image
              src="/images/logo/club-mark.png"
              alt=""
              width={492}
              height={310}
              className="relative w-[68%] select-none object-contain opacity-25 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-40 group-hover:grayscale-0"
            />

            <span className="relative mt-8 text-[9px] font-semibold uppercase tracking-[0.32em] text-white/25">
              {t.trainers.placeholderLabel}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />

        <div className="absolute left-5 top-5 flex h-10 min-w-10 items-center justify-center border border-white/15 bg-black/40 px-3 backdrop-blur-md">
          <span className="text-[10px] font-bold tracking-[0.22em] text-[var(--color-gold)]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--color-gold)]">
            {content.role}
          </p>

          <h3
            className={`${oswald.className} text-4xl font-semibold uppercase leading-none tracking-[-0.02em] text-white sm:text-5xl`}
          >
            {content.name}
          </h3>

          <div className="mt-6 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-52 group-hover:opacity-100">
            <div className="border-t border-white/15 pt-5">
              <div className="grid gap-4">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/35">
                    {t.trainers.experienceLabel}
                  </span>

                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {content.experience}
                  </p>
                </div>

                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/35">
                    {t.trainers.achievementsLabel}
                  </span>

                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {content.achievements}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/15 bg-black/40 text-white/50 backdrop-blur-md transition-all duration-300 group-hover:border-[var(--color-gold)] group-hover:bg-[var(--color-gold)] group-hover:text-black">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </motion.article>
  );
}