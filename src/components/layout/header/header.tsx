"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { useLanguage } from "@/components/providers/language-provider";

export function Header() {
  const {
        language,
        dictionary: t,
        changeLanguage,
  } = useLanguage();

  const languageOptions = [
        {
          code: "pl" as const,
          flag: "🇵🇱",
          label: t.accessibility.polishLanguage,
        },
        {
          code: "en" as const,
          flag: "🇬🇧",
          label: t.accessibility.englishLanguage,
        },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    {
      label: t.navigation.about,
      href: "#about",
    },
    {
      label: t.navigation.trainers,
      href: "#trainers",
    },
    {
      label: t.navigation.schedule,
      href: "#schedule",
    },
    {
      label: t.navigation.gallery,
      href: "#gallery",
    },
    {
      label: t.navigation.contact,
      href: "#contact",
    },
  ];

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center px-5 md:px-10 lg:px-16">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={t.accessibility.homeLink}
        >
          <Image
            src="/images/logo/club-mark.png"
            alt={t.accessibility.clubLogo}
            width={492}
            height={310}
            priority
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />

          <span className="hidden max-w-[170px] text-[10px] font-bold uppercase leading-[1.4] tracking-[0.18em] text-white sm:block">
            {t.hero.eyebrow}
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-8 lg:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-3 text-xs font-medium uppercase tracking-[0.14em] text-white/60 transition-colors duration-300 hover:text-[var(--color-gold)]"
            >
              {item.label}

              <span className="absolute bottom-1 left-0 h-px w-0 bg-[var(--color-gold)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div
            className="ml-8 hidden items-center border border-white/10 bg-black/30 p-1 lg:flex"
            aria-label={t.accessibility.changeLanguage}
        >
            {languageOptions.map((option) => (
                <button
                    key={option.code}
                    type="button"
                    onClick={() => changeLanguage(option.code)}
                    className="relative flex h-9 min-w-11 items-center justify-center px-2"
                    aria-label={option.label}
                    title={option.label}
                    aria-pressed={language === option.code}
                >
                    {language === option.code && (
                    <motion.span
                        layoutId="active-language-desktop"
                        className="absolute inset-0 bg-[var(--color-gold)]"
                        transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 35,
                        }}
                    />
                    )}

                    <span
                    className={`relative z-10 text-xl leading-none transition-all duration-300 ${
                        language === option.code
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-45 hover:scale-100 hover:opacity-100"
                    }`}
                    >
                    {option.flag}
                    </span>
                </button>
                ))}
        </div>

        <Link
          href="#contact"
          className="ml-4 hidden border border-[var(--color-gold)] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-gold)] transition-all duration-300 hover:bg-[var(--color-gold)] hover:text-black hover:shadow-[var(--shadow-gold)] lg:block"
        >
          {t.navigation.join}
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen((currentState) => !currentState)}
          className="ml-auto flex h-11 w-11 items-center justify-center border border-white/15 text-white transition-colors duration-300 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] lg:hidden"
          aria-label={
            isMenuOpen
              ? t.accessibility.closeMenu
              : t.accessibility.openMenu
          }
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="absolute left-0 top-20 flex min-h-[calc(100vh-5rem)] w-full flex-col bg-black px-6 py-10 lg:hidden"
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <div className="flex flex-1 flex-col justify-center gap-3">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={handleCloseMenu}
                    className="block border-b border-white/10 py-5 text-3xl font-bold uppercase text-white transition-colors hover:text-[var(--color-gold)]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div
                className="mt-8 flex w-fit items-center border border-white/10 bg-black/30 p-1"
                aria-label={t.accessibility.changeLanguage}
            >
                {languageOptions.map((option) => (
                    <button
                        key={option.code}
                        type="button"
                        onClick={() => changeLanguage(option.code)}
                        className="relative flex h-11 min-w-14 items-center justify-center px-3"
                        aria-label={option.label}
                        title={option.label}
                        aria-pressed={language === option.code}
                    >
                        {language === option.code && (
                        <motion.span
                            layoutId="active-language-mobile"
                            className="absolute inset-0 bg-[var(--color-gold)]"
                            transition={{
                            type: "spring",
                            stiffness: 450,
                            damping: 35,
                            }}
                        />
                        )}

                        <span
                        className={`relative z-10 text-2xl leading-none transition-all duration-300 ${
                            language === option.code
                            ? "scale-100 opacity-100"
                            : "scale-90 opacity-45"
                        }`}
                        >
                        {option.flag}
                        </span>
                    </button>
                    ))}
            </div>

            <Link
              href="#contact"
              onClick={handleCloseMenu}
              className="mt-8 flex h-14 items-center justify-center bg-[var(--color-gold)] text-xs font-bold uppercase tracking-[0.18em] text-black"
            >
              {t.navigation.join}
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}