"use client";

import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import Image from "next/image";

import { oswald } from "@/lib/fonts";
import { useLanguage } from "@/components/providers/language-provider";
import type { GalleryItem as GalleryItemType } from "@/types/gallery";

interface GalleryItemProps {
  item: GalleryItemType;
  index: number;
}

const sizeClasses = {
  large:
    "md:col-span-7 md:row-span-2 min-h-[420px] lg:min-h-[620px]",
  wide:
    "md:col-span-7 min-h-[300px] lg:min-h-[360px]",
  tall:
    "md:col-span-5 md:row-span-2 min-h-[420px] lg:min-h-[620px]",
  standard:
    "md:col-span-5 min-h-[300px] lg:min-h-[360px]",
} as const;

export function GalleryItem({
  item,
  index,
}: GalleryItemProps) {
  const { dictionary: t } = useLanguage();
  
  const content = t.gallery.items[item.contentKey];

  return (
    <motion.article
      className={`group relative overflow-hidden border border-white/10 bg-[#0b0b0b] ${sizeClasses[item.size]}`}
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {item.image ? (
        <Image
          src={item.image}
          alt={content.alt}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,161,58,0.09),transparent_52%)]" />

          <Image
            src="/images/logo/club-mark.png"
            alt=""
            width={492}
            height={310}
            className="relative w-[46%] select-none object-contain opacity-[0.14] grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-25 group-hover:grayscale-0"
          />

          <span className="absolute bottom-7 left-7 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/20">
            {t.gallery.placeholderLabel}
          </span>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-5 p-6 sm:p-7">
        <div>
          <span className="text-[9px] font-bold tracking-[0.25em] text-[var(--color-gold)]">
            {String(index + 1).padStart(2, "0")}
          </span>

          <h3
            className={`${oswald.className} mt-2 text-3xl font-semibold uppercase tracking-[-0.02em] text-white sm:text-4xl`}
          >
            {content.title}
          </h3>
        </div>

        <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 bg-black/30 text-white/50 backdrop-blur-md transition-all duration-300 group-hover:border-[var(--color-gold)] group-hover:text-[var(--color-gold)]">
          <Maximize2 className="h-4 w-4" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-[var(--color-gold)]/30" />
    </motion.article>
  );
}