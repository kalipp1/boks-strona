"use client";

import { motion } from "framer-motion";

import { scheduleGroups } from "@/data/schedule";
import { oswald } from "@/lib/fonts";
import { useLanguage } from "@/components/providers/language-provider";

import { ScheduleTable } from "./schedule-table";

export function ScheduleSection() {
  const { dictionary: t } = useLanguage();
  
  return (
    <section
      id="schedule"
      className="relative overflow-hidden bg-[#080808] py-24 sm:py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute right-[-220px] top-[16%] h-[520px] w-[520px] rounded-full bg-[rgba(214,161,58,0.04)] blur-[150px]" />

      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:pb-16">
          <motion.div
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
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-7 flex items-center gap-4">
              <span className="text-[10px] font-bold tracking-[0.28em] text-[var(--color-gold)]">
                {t.schedule.sectionNumber}
              </span>

              <span className="h-px w-9 bg-[var(--color-gold)]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
                {t.schedule.eyebrow}
              </span>
            </div>

            <h2
              className={`${oswald.className} flex flex-col text-[clamp(3.4rem,7vw,7.2rem)] font-bold uppercase leading-[0.86] tracking-[-0.045em] text-white`}
            >
              <span>{t.schedule.titleLineOne}</span>

              <span className="text-[var(--color-gold)]">
                {t.schedule.titleLineTwo}
              </span>
            </h2>
          </motion.div>

          <motion.p
            className="max-w-xl text-base leading-8 text-white/45 lg:ml-auto"
            initial={{
              opacity: 0,
              y: 20,
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
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {t.schedule.description}
          </motion.p>
        </div>

        <div className="mt-10 grid gap-6 lg:mt-14">
          {scheduleGroups.map((group, index) => (
            <ScheduleTable
              key={group.id}
              group={group}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}