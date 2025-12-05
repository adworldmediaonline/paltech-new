import dynamic from "next/dynamic";
import { Header } from "@/components/landing/header";
import { HeroBanner } from "@/components/landing/hero-banner";
import { Hero } from "@/components/landing/hero";

// Lazy load below-the-fold components to reduce initial JavaScript bundle
const Principles = dynamic(() => import("@/components/landing/principles").then((mod) => ({ default: mod.Principles })), {
  loading: () => <div className="h-32 sm:h-48" />,
});

const About = dynamic(() => import("@/components/landing/about").then((mod) => ({ default: mod.About })), {
  loading: () => <div className="h-64 sm:h-96" />,
});

const ProductShowcase = dynamic(() => import("@/components/landing/product-showcase").then((mod) => ({ default: mod.ProductShowcase })), {
  loading: () => <div className="h-96 sm:h-[600px]" />,
});

const WhyChoose = dynamic(() => import("@/components/landing/why-choose").then((mod) => ({ default: mod.WhyChoose })), {
  loading: () => <div className="h-96 sm:h-[600px]" />,
});

const ServicesGrid = dynamic(() => import("@/components/landing/services-grid").then((mod) => ({ default: mod.ServicesGrid })), {
  loading: () => <div className="h-96 sm:h-[600px]" />,
});

const ExportMap = dynamic(() => import("@/components/landing/export-map").then((mod) => ({ default: mod.ExportMap })), {
  loading: () => <div className="h-96 sm:h-[500px]" />,
});

const InstitutionalPartners = dynamic(() => import("@/components/landing/institutional-partners").then((mod) => ({ default: mod.InstitutionalPartners })), {
  loading: () => <div className="h-96 sm:h-[500px]" />,
});

const ClientLogos = dynamic(() => import("@/components/landing/client-logos").then((mod) => ({ default: mod.ClientLogos })), {
  loading: () => <div className="h-64 sm:h-80" />,
});

const ContactSection = dynamic(() => import("@/components/landing/contact-section").then((mod) => ({ default: mod.ContactSection })), {
  loading: () => <div className="h-96 sm:h-[600px]" />,
});

const Footer = dynamic(() => import("@/components/landing/footer").then((mod) => ({ default: mod.Footer })), {
  loading: () => <div className="h-64 sm:h-96" />,
});

const FloatingCta = dynamic(() => import("@/components/landing/floating-cta").then((mod) => ({ default: mod.FloatingCta })), {
  loading: () => null,
});

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Background gradient area behind header */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-950/85 via-slate-900/80 to-slate-950/85 -z-10" />

      <Header />
      <div className="sm:pt-32 pt-20">
        <HeroBanner />
      </div>
      <main>
        <Hero />
        <Principles />
        <About />
        <ProductShowcase />
        <WhyChoose />
        <ServicesGrid />
        {/* <Stats /> */}
        <ExportMap />
        <InstitutionalPartners />
        <ClientLogos />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
