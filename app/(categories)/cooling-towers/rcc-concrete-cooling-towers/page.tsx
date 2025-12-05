import { RCCConcreteCoolingTowersContent } from "@/components/landing/rcc-concrete-cooling-towers-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

import rcc1 from '../../../../public/categories/rcc-cooling-tower-1.png';
import rcc2 from '../../../../public/categories/rcc-cooling-tower-2.png';
import rcc3 from '../../../../public/categories/rcc-cooling-tower-3.png';


const images = [rcc1, rcc2, rcc3];

export const metadata: Metadata = {
  title: "RCC Concrete Cooling Towers | Large-Scale Industrial Cooling",
  description: "High-performance RCC concrete cooling towers for power plants, refineries, and large industries. ISO-certified, durable, and energy-efficient. Get a quote today!",
  keywords: [
    "RCC Cooling Towers",
    "Concrete Cooling",
    "Industrial Cooling",
    "Large Cooling Towers",
    "FRP Cooling",
    "Cross Flow Towers",
    "Counter Flow Towers",
    "Cooling Tower Manufacturer",
    "RCC concrete cooling towers for industries",
    "Large-scale industrial cooling tower solutions",
    "Counter flow and cross flow RCC towers",
    "Industrial cooling towers for power plants",
    "Petrochemical refinery cooling tower solutions",
    "High-capacity reinforced concrete cooling towers",
    "Energy-efficient industrial cooling towers",
    "Custom RCC cooling tower design and installation",
    "Splash fill and film fill cooling towers",
    "Multicellular RCC cooling towers for large capacity",
    "Industrial cooling towers",
    "Power plant cooling solutions",
    "Petrochemical cooling systems",
    "Chemical plant cooling towers",
    "Large industrial cooling solutions",
    "ISO-certified cooling tower manufacturer",
    "Energy-efficient cooling tower systems",
    "Global cooling tower suppliers",
    "Custom engineered cooling towers",
    "Thermal power cooling towers",
    "Reinforced cement concrete towers",
    "Industrial heat exchange towers",
    "Cooling tower design and engineering",
    "High-efficiency cooling towers",
    "Multi-cell cooling tower systems",
    "Large-scale HVAC cooling towers",
    "Industrial water cooling solutions",
    "Cooling tower maintenance and repair",
    "Long-lasting concrete cooling towers",
    "Technical specifications for RCC towers"
  ],
  alternates: {
    canonical: '/cooling-towers/rcc-concrete-cooling-towers',
  },
  openGraph: {
    title: "RCC Concrete Cooling Towers | Large-Scale Industrial Cooling",
    description: "High-performance RCC concrete cooling towers for power plants, refineries, and large industries. ISO-certified, durable, and energy-efficient. Get a quote today!",
    type: "website",
  },
};

export default function RCCConcreteCoolingTowersPage() {
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
                <Link href="/cooling-towers" className="text-white/90 hover:text-white">Cooling Towers</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/70" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white font-semibold">RCC Concrete Cooling Towers</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      {/* Content Section with USP Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <RCCConcreteCoolingTowersContent />
          </main>

          {/* USP Sidebar */}
          <USPSidebar />
        </div>
      </div>
    </>
  );
}
