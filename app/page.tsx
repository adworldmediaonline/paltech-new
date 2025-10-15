import { ClientLogos } from "@/components/landing/client-logos";
import { ContactForm } from "@/components/landing/contact-form";
import { CtaSection } from "@/components/landing/cta-section";
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
        <CtaSection />
        <ContactForm />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
