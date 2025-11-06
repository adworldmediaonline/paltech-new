import { FrpDeckPanelsContent } from "@/components/landing/frp-deck-panels-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";
import deck1 from '../../../../public/categories/frp-deck-panels-1.webp';
import deck2 from '../../../../public/categories/frp-deck-panels-2.webp';
import deck3 from '../../../../public/categories/frp-deck-panels-3.webp';

const images = [deck1, deck2, deck3];

export const metadata: Metadata = {
  title: "FRP Deck Panels | High-Strength Corrosion-Resistant GRP",
  description: "High-strength FRP deck panels with corrosion resistance and lightweight design. Ideal for industrial, cooling tower, scaffolding, and walkway applications.",
  keywords: [
    "FRP Deck Panels",
    "GRP Deck Panels",
    "Composite Deck Panels",
    "Industrial Deck Panels",
    "Corrosion-Resistant Panels",
    "Lightweight Decking",
    "FRP Walkways",
    "High-strength FRP deck panels",
    "Corrosion-resistant GRP decking solutions",
    "Industrial FRP decking panels",
    "Lightweight composite deck panels",
    "FRP panels for cooling towers",
    "GRP staircase and ladder platforms",
    "FRP scaffolding and temporary flooring",
    "FRP rooftop walkway panels",
    "Durable FRP cellular wall panels",
    "FRP decking for odor control covers",
    "FRP panels with load-bearing capacity",
    "FRP decking for industrial facilities",
    "GRP walkways for corrosive environments",
    "FRP decking",
    "GRP deck panels",
    "Industrial FRP panels",
    "Corrosion-resistant decking",
    "Lightweight composite panels",
    "FRP structural solutions",
    "GRP structural panels",
    "FRP walkways and platforms",
    "FRP temporary flooring",
    "FRP scaffolding solutions",
    "Fiberglass reinforced plastic deck panels",
    "Industrial walkway panels",
    "GRP handrails and walkways",
    "FRP ladder platforms",
    "FRP deck panels for wastewater treatment",
    "Composite roofing panels",
    "FRP panels for chemical plants",
    "Lightweight corrosion-resistant deck solutions",
    "FRP structural panels for cooling towers",
    "GRP decking for food & beverage facilities"
  ],
  alternates: {
    canonical: '/paltech-frpgrp-structural-profiles/frp-deck-panels',
  },
  openGraph: {
    title: "FRP Deck Panels | High-Strength Corrosion-Resistant GRP",
    description: "High-strength FRP deck panels with corrosion resistance and lightweight design. Ideal for industrial, cooling tower, scaffolding, and walkway applications.",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      {/* Full-width Hero Slider */}
      <CategoryHero images={images}>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="text-white/90 hover:text-white">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/70" />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/paltech-frpgrp-structural-profiles" className="text-white/90 hover:text-white">FRP/GRP Structural Profiles</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/70" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white font-semibold">FRP Deck Panels</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      {/* Content Section with USP Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <FrpDeckPanelsContent />
          </main>

          {/* USP Sidebar */}
          <USPSidebar />
        </div>
      </div>
    </>
  );
}
