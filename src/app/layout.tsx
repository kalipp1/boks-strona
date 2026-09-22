import type { Metadata } from "next";

import { LanguageProvider } from "@/components/providers/language-provider";
import { inter } from "@/lib/fonts";

import "./globals.css";
import "@/styles/colors.css";

export const metadata: Metadata = {
  title: {
    default: "Prudnicka Akademia Boksu",
    template: "%s | Prudnicka Akademia Boksu",
  },
  description:
    "Prudnicka Akademia Boksu — treningi bokserskie, rozwój techniki, kondycji i charakteru.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="pl"
      className="scroll-smooth bg-[var(--color-background)]"
    >
      <body
        className={`${inter.className} min-h-screen overflow-x-hidden bg-[var(--color-background)] text-[var(--color-text-primary)] antialiased selection:bg-[var(--color-gold)] selection:text-black`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}