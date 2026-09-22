import { PageLoader } from "@/components/common/page-loader";
import { Header } from "@/components/layout/header/header";
import { AboutSection } from "@/components/sections/about/about-section";
import { GallerySection } from "@/components/sections/gallery/gallery-section";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { ScheduleSection } from "@/components/sections/schedule/schedule-section";
import { TrainersSection } from "@/components/sections/trainers/trainers-section";
import { ContactSection } from "@/components/sections/contact/contact-section";

export default function HomePage() {
  return (
    <>
      <PageLoader />

      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <TrainersSection />
        <ScheduleSection />
        <GallerySection />
        <ContactSection />
      </main>
    </>
  );
}