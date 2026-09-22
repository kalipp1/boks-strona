"use client";

import { motion } from "framer-motion";
import {
    Mail,
    MapPin,
    MessageCircle,
    Phone,
  } from "lucide-react";
  
  import {
    FaFacebookF,
    FaInstagram,
  } from "react-icons/fa";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { QRCodeSVG } from "qrcode.react";

import { siteConfig } from "@/data/site-config";
import { oswald } from "@/lib/fonts";
import { useLanguage } from "@/components/providers/language-provider";
import type { ScheduleGroupType } from "@/types/schedule";

interface ContactFormState {
  name: string;
  group: ScheduleGroupType | "";
  message: string;
}

const initialFormState: ContactFormState = {
  name: "",
  group: "",
  message: "",
};

export function ContactSection() {
  const { dictionary: t } = useLanguage();
  
  const [formData, setFormData] =
    useState<ContactFormState>(initialFormState);

  const isWhatsappConfigured = /^\d{8,15}$/.test(
    siteConfig.contact.whatsappNumber,
  );

  const isFormReady =
    formData.name.trim().length > 0 &&
    formData.group.length > 0;

  const selectedGroupName = useMemo(() => {
        if (!formData.group) {
          return "";
        }
      
        return t.schedule.groups[formData.group].name;
  }, [formData.group, t]);

  const whatsappMessage = useMemo(() => {
    const lines = [
      t.contact.whatsappMessage.greeting,
      "",
      t.contact.whatsappMessage.intro,
      "",
      `${t.contact.whatsappMessage.name}: ${formData.name.trim()}`,
      `${t.contact.whatsappMessage.group}: ${selectedGroupName}`,
    ];

    if (formData.message.trim()) {
      lines.push(
        "",
        `${t.contact.whatsappMessage.message}:`,
        formData.message.trim(),
      );
    }

    return lines.join("\n");
    }, [
        formData.name,
        formData.message,
        selectedGroupName,
        t,
    ]);

  const whatsappUrl =
    isWhatsappConfigured && isFormReady
      ? `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
          whatsappMessage,
        )}`
      : "";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!whatsappUrl) {
      return;
    }

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080808] py-24 sm:py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute right-[-180px] top-[12%] h-[520px] w-[520px] rounded-full bg-[rgba(214,161,58,0.05)] blur-[150px]" />

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
                {t.contact.sectionNumber}
              </span>

              <span className="h-px w-9 bg-[var(--color-gold)]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
                {t.contact.eyebrow}
              </span>
            </div>

            <h2
              className={`${oswald.className} flex flex-col text-[clamp(3.4rem,7vw,7.2rem)] font-bold uppercase leading-[0.86] tracking-[-0.045em] text-white`}
            >
              <span>{t.contact.titleLineOne}</span>

              <span className="text-[var(--color-gold)]">
                {t.contact.titleLineTwo}
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
            {t.contact.description}
          </motion.p>
        </div>

        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.form
            onSubmit={handleSubmit}
            className="border border-white/10 bg-black p-6 sm:p-8 lg:p-10"
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="grid gap-7">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-3 block text-[10px] font-bold uppercase tracking-[0.22em] text-white/40"
                >
                  {t.contact.form.nameLabel}
                </label>

                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((currentState) => ({
                      ...currentState,
                      name: event.target.value,
                    }))
                  }
                  placeholder={t.contact.form.namePlaceholder}
                  className="h-14 w-full border border-white/10 bg-[#0b0b0b] px-5 text-base text-white outline-none transition-colors placeholder:text-white/20 focus:border-[var(--color-gold)]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-group"
                  className="mb-3 block text-[10px] font-bold uppercase tracking-[0.22em] text-white/40"
                >
                  {t.contact.form.groupLabel}
                </label>

                <select
                  id="contact-group"
                  value={formData.group}
                  onChange={(event) =>
                    setFormData((currentState) => ({
                      ...currentState,
                      group: event.target
                        .value as ScheduleGroupType | "",
                    }))
                  }
                  className="h-14 w-full border border-white/10 bg-[#0b0b0b] px-5 text-base text-white outline-none transition-colors focus:border-[var(--color-gold)]"
                >
                  <option value="">
                    {t.contact.form.groupPlaceholder}
                  </option>

                  <option value="beginner">
                    {t.schedule.groups.beginner.name}
                  </option>

                  <option value="advanced">
                    {t.schedule.groups.advanced.name}
                  </option>

                  <option value="children">
                    {t.schedule.groups.children.name}
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-3 block text-[10px] font-bold uppercase tracking-[0.22em] text-white/40"
                >
                  {t.contact.form.messageLabel}
                </label>

                <textarea
                  id="contact-message"
                  rows={5}
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((currentState) => ({
                      ...currentState,
                      message: event.target.value,
                    }))
                  }
                  placeholder={t.contact.form.messagePlaceholder}
                  className="w-full resize-none border border-white/10 bg-[#0b0b0b] px-5 py-4 text-base leading-7 text-white outline-none transition-colors placeholder:text-white/20 focus:border-[var(--color-gold)]"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={
                    !isWhatsappConfigured || !isFormReady
                  }
                  className="group flex h-14 w-full items-center justify-center gap-3 bg-[var(--color-gold)] px-6 text-xs font-bold uppercase tracking-[0.16em] text-black transition-all duration-300 hover:bg-[var(--color-gold-light)] disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <MessageCircle className="h-4 w-4" />

                  <span>{t.contact.form.submit}</span>
                </button>

                {!isWhatsappConfigured ? (
                  <p className="mt-3 text-xs leading-5 text-white/30">
                    {t.contact.form.whatsappUnavailable}
                  </p>
                ) : !isFormReady ? (
                  <p className="mt-3 text-xs leading-5 text-white/30">
                    {t.contact.form.requiredHint}
                  </p>
                ) : null}
              </div>
            </div>
          </motion.form>

          <div className="grid gap-6">
            <motion.div
              className="hidden min-h-[360px] border border-white/10 bg-black p-8 lg:flex lg:flex-col"
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--color-gold)]">
                {t.contact.qr.eyebrow}
              </p>

              <h3
                className={`${oswald.className} mt-3 text-4xl font-semibold uppercase text-white`}
              >
                {t.contact.qr.title}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/40">
                {t.contact.qr.description}
              </p>

              <div className="mt-8 flex flex-1 items-center justify-center">
                {whatsappUrl ? (
                  <div className="bg-white p-4">
                    <QRCodeSVG
                      value={whatsappUrl}
                      size={190}
                      level="M"
                      includeMargin={false}
                    />
                  </div>
                ) : (
                  <div className="flex h-[222px] w-[222px] items-center justify-center border border-dashed border-white/10 px-8 text-center">
                    <p className="text-xs leading-6 text-white/25">
                      {t.contact.qr.waiting}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              className="border border-white/10 bg-black"
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="border-b border-white/10 px-6 py-5 sm:px-7">
                <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--color-gold)]">
                  {t.contact.details.eyebrow}
                </p>
              </div>

              <div className="divide-y divide-white/10">
                <ContactRow
                  icon={<Phone className="h-4 w-4" />}
                  label={t.contact.details.phone}
                  value={
                    siteConfig.contact.phoneDisplay ||
                    t.contact.details.unavailable
                  }
                  href={
                    siteConfig.contact.phoneHref
                      ? `tel:${siteConfig.contact.phoneHref}`
                      : undefined
                  }
                />

                <ContactRow
                  icon={<Mail className="h-4 w-4" />}
                  label={t.contact.details.email}
                  value={
                    siteConfig.contact.email ||
                    t.contact.details.unavailable
                  }
                  href={
                    siteConfig.contact.email
                      ? `mailto:${siteConfig.contact.email}`
                      : undefined
                  }
                />

                <ContactRow
                  icon={<MapPin className="h-4 w-4" />}
                  label={t.contact.details.address}
                  value={
                    siteConfig.contact.address ||
                    t.contact.details.unavailable
                  }
                  href={
                    siteConfig.contact.googleMapsUrl ||
                    undefined
                  }
                />
              </div>

              <div className="flex items-center gap-3 border-t border-white/10 px-6 py-5 sm:px-7">
                <span className="mr-auto text-[9px] font-bold uppercase tracking-[0.22em] text-white/30">
                  {t.contact.details.socialMedia}
                </span>

                {siteConfig.contact.instagramUrl && (
                  <Link
                    href={siteConfig.contact.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/45 transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                  >
                    <FaInstagram className="h-4 w-4" />
                  </Link>
                )}

                {siteConfig.contact.facebookUrl && (
                  <Link
                    href={siteConfig.contact.facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/45 transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                  >
                    <FaFacebookF className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: ContactRowProps) {
  const content = (
    <>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 text-[var(--color-gold)]">
        {icon}
      </div>

      <div>
        <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/30">
          {label}
        </p>

        <p className="mt-1 text-sm text-white/70">
          {value}
        </p>
      </div>
    </>
  );

  if (!href) {
    return (
      <div className="flex items-center gap-4 px-6 py-5 sm:px-7">
        {content}
      </div>
    );
  }

  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={
        href.startsWith("http")
          ? "noreferrer"
          : undefined
      }
      className="flex items-center gap-4 px-6 py-5 transition-colors hover:bg-white/[0.025] sm:px-7"
    >
      {content}
    </Link>
  );
}