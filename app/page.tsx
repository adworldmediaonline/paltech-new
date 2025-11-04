import { About } from "@/components/landing/about";
import { ClientLogos } from "@/components/landing/client-logos";
import { ContactSection } from "@/components/landing/contact-section";
import { ExportMap } from "@/components/landing/export-map";
import { FloatingCta } from "@/components/landing/floating-cta";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { HeroBanner } from "@/components/landing/hero-banner";
import { Principles } from "@/components/landing/principles";
import { ProductShowcase } from "@/components/landing/product-showcase";
import { ServicesGrid } from "@/components/landing/services-grid";
import { Stats } from "@/components/landing/stats";
import { WhyChoose } from "@/components/landing/why-choose";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Background gradient area behind header */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-950/85 via-slate-900/80 to-slate-950/85 -z-10" />

      <Header />
      <div className="pt-20">
        <HeroBanner />
      </div>
      <main>
        <Hero />
        <Principles />
        <About />
        <ProductShowcase />
        <WhyChoose />
        <ServicesGrid />
        <Stats />
        <ExportMap />
        <ClientLogos />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
