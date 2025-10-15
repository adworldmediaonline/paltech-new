import { ClientLogos } from "@/components/landing/client-logos";
import { ContactSection } from "@/components/landing/contact-section";
import { FloatingCta } from "@/components/landing/floating-cta";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { ServicesGrid } from "@/components/landing/services-grid";
import { SolutionsShowcase } from "@/components/landing/solutions-showcase";
import { Stats } from "@/components/landing/stats";
import { WhatWeDo } from "@/components/landing/what-we-do";
import { WhoWeServe } from "@/components/landing/who-we-serve";
import { WhyChoose } from "@/components/landing/why-choose";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <SolutionsShowcase />
        <WhoWeServe />
        <WhyChoose />
        <ServicesGrid />
        <Stats />
        <ClientLogos />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
