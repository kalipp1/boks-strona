"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import { brandFont } from "@/lib/fonts";
import { useLanguage } from "@/components/providers/language-provider";

const INTRO_DURATION = 2200;
const REDUCED_MOTION_DURATION = 650;

export function PageLoader() {
  const { dictionary: t } = useLanguage();
  
  const [isVisible, setIsVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(
      () => {
        setIsVisible(false);
        document.body.style.overflow = "";
      },
      shouldReduceMotion ? REDUCED_MOTION_DURATION : INTRO_DURATION,
    );

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.28,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,161,58,0.07),transparent_44%)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
          />

          {/* TOP ARC WORD */}
          <motion.div
            className="absolute left-1/2 top-[7%] z-30 h-[120px] w-[min(76vw,760px)] -translate-x-1/2 sm:h-[140px]"
            initial={{
              opacity: 0,
              y: -12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.35,
              delay: 0.05,
            }}
          >
            <svg
              viewBox="0 0 760 180"
              className={`${brandFont.className} h-full w-full overflow-visible`}
              aria-hidden="true"
            >
              <defs>
                <path
                  id="loader-top-arc"
                  d="M 95 145 Q 380 20 665 145"
                />
              </defs>

              <text
                fill="var(--color-gold)"
                fontSize="56"
                fontWeight="900"
                letterSpacing="14"
              >
                <textPath
                  href="#loader-top-arc"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  {t.loader.topWord.toUpperCase()}
                </textPath>
              </text>
            </svg>
          </motion.div>

          {/* BOXER STAGE */}
          <div className="absolute left-1/2 top-1/2 z-20 h-[clamp(240px,32vw,390px)] w-[min(74vw,700px)] -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="absolute bottom-0 left-[2.2%] w-[50.4%]"
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : {
                      x: "-140%",
                      rotate: -4,
                      opacity: 1,
                    }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : {
                      x: 0,
                      rotate: 0,
                    }
              }
              transition={{
                duration: 0.9,
                delay: 0.24,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="overflow-hidden [clip-path:inset(0_10%_0_0)]">
                <Image
                  src="/images/logo/boxer-left.png"
                  alt=""
                  width={259}
                  height={303}
                  priority
                  className="h-auto w-full select-none object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-[-1.2%] right-[2.2%] w-[50.4%]"
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : {
                      x: "140%",
                      rotate: 4,
                      opacity: 1,
                    }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : {
                      x: 0,
                      rotate: 0,
                    }
              }
              transition={{
                duration: 0.9,
                delay: 0.24,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Image
                src="/images/logo/boxer-right.png"
                alt=""
                width={251}
                height={306}
                priority
                className="h-auto w-full select-none object-contain"
              />
            </motion.div>

            {!shouldReduceMotion && (
              <motion.div
                className="pointer-events-none absolute left-1/2 top-[41%] z-30 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-gold)] blur-2xl"
                initial={{
                  opacity: 0,
                  scale: 0.3,
                }}
                animate={{
                  opacity: [0, 0, 0.7, 0],
                  scale: [0.3, 0.3, 1.5, 2],
                }}
                transition={{
                  duration: 0.28,
                  delay: 0.98,
                  times: [0, 0.2, 0.45, 1],
                }}
              />
            )}
          </div>

          {/* BOTTOM WORDS */}
          <motion.div
            className="absolute bottom-[8%] left-1/2 z-30 -translate-x-1/2 text-center"
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.35,
              delay: 0.08,
            }}
          >
            <p
              className={`${brandFont.className} text-[clamp(2rem,4.4vw,4.1rem)] font-black uppercase leading-none tracking-[0.08em] text-[var(--color-gold)]`}
            >
              {t.loader.bottomMain}
            </p>

            <p
              className={`${brandFont.className} mt-1 text-[clamp(0.95rem,1.7vw,1.55rem)] font-black uppercase leading-none tracking-[0.34em] text-[var(--color-gold)]`}
            >
              {t.loader.bottomSub}
            </p>
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-[var(--color-gold)]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}