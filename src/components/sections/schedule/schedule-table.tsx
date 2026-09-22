"use client";

import { motion } from "framer-motion";

import { oswald } from "@/lib/fonts";
import { useLanguage } from "@/components/providers/language-provider";
import type { ScheduleGroup } from "@/types/schedule";

interface ScheduleTableProps {
  group: ScheduleGroup;
  index: number;
}

export function ScheduleTable({
  group,
  index,
}: ScheduleTableProps) {
  const { dictionary: t } = useLanguage();
  
  const content = t.schedule.groups[group.type];

  return (
    <motion.article
      className="overflow-hidden border border-white/10 bg-[#0b0b0b]"
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="border-b border-white/10 px-6 py-6 sm:px-7">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--color-gold)]">
              {String(index + 1).padStart(2, "0")}
            </p>

            <h3
              className={`${oswald.className} mt-3 text-3xl font-semibold uppercase tracking-[-0.02em] text-white sm:text-4xl`}
            >
              {content.name}
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-6 text-white/40">
              {content.description}
            </p>
          </div>

          <div className="hidden h-10 w-10 rotate-45 border border-[var(--color-gold)]/40 sm:block" />
        </div>
      </div>

      {group.entries.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-4 text-left text-[9px] font-bold uppercase tracking-[0.25em] text-white/30 sm:px-7">
                  {t.schedule.columns.day}
                </th>

                <th className="px-6 py-4 text-left text-[9px] font-bold uppercase tracking-[0.25em] text-white/30 sm:px-7">
                  {t.schedule.columns.time}
                </th>

                <th className="px-6 py-4 text-left text-[9px] font-bold uppercase tracking-[0.25em] text-white/30 sm:px-7">
                  {t.schedule.columns.note}
                </th>
              </tr>
            </thead>

            <tbody>
              {group.entries.map((entry, rowIndex) => (
                <tr
                  key={`${group.id}-${t.schedule.days[entry.day]}`}
                  className={[
                    "transition-colors duration-300 hover:bg-white/[0.025]",
                    rowIndex !== group.entries.length - 1
                      ? "border-b border-white/10"
                      : "",
                  ].join(" ")}
                >
                  <td className="px-6 py-5 text-sm font-semibold uppercase tracking-[0.1em] text-white sm:px-7">
                    {t.schedule.days[entry.day]}
                  </td>

                  <td
                    className={`${oswald.className} px-6 py-5 text-2xl font-semibold text-[var(--color-gold)] sm:px-7`}
                  >
                    {entry.time}
                  </td>

                  <td className="px-6 py-5 text-sm text-white/45 sm:px-7">
                  {entry.note
                    ? t.schedule.notes[entry.note]
                    : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex min-h-[180px] items-center justify-center px-6 py-10 text-center">
          <div>
            <div className="mx-auto mb-5 h-10 w-10 rotate-45 border border-white/10" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/30">
              {t.schedule.emptyState}
            </p>
          </div>
        </div>
      )}
    </motion.article>
  );
}