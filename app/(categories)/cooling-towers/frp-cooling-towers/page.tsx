import { FrpCoolingTowersContent } from "@/components/landing/frp-cooling-towers-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";
import counterFlow1 from '../../../../public/categories/counter-flow-bottle-shape-1.webp';
import counterFlow2 from '../../../../public/categories/counter-flow-bottle-shape-2.webp';
import counterFlow3 from '../../../../public/categories/counter-flow-bottle-shape-3.webp';
import counterFlow4 from '../../../../public/categories/counter-flow-bottle-shape-4.webp';

const images = [counterFlow1, counterFlow2, counterFlow3, counterFlow4];

export const metadata: Metadata = {
  title: "FRP Cooling Towers | Corrosion-Resistant Industrial Systems",
  description: "FRP cooling towers with corrosion resistance, lightweight design, and flexible configurations. Ideal for industrial, HVAC, and commercial applications.",
  keywords: [
    "FRP Cooling Towers",
    "Industrial Cooling",
    "HVAC Cooling",
    "Fan-less Cooling",
    "Corrosion-Resistant Towers",
    "Counter Flow Towers",
    "Cross Flow Towers",
    "FRP cooling towers for industrial applications",
    "Corrosion-resistant FRP cooling towers",
    "Fan-less induced draft FRP cooling towers",
    "Counter flow bottle-shaped FRP towers",
    "Rectangular FRP cooling towers with basin",
    "Customizable FRP cooling tower configurations",
    "Medium to large capacity FRP cooling towers",
    "Lightweight FRP industrial cooling systems",
    "Energy-efficient FRP cooling solutions",
    "FRP cooling towers for chemical and pharmaceutical plants",
    "Industrial FRP cooling towers",
    "FRP induced draft cooling towers",
    "Lightweight cooling towers",
    "Fan-less industrial cooling systems",
    "Chemical-resistant cooling towers",
    "FRP crossflow cooling towers",
    "HVAC FRP cooling towers",
    "Large-capacity FRP towers",
    "Pre-engineered FRP cooling towers",
    "Modular FRP cooling systems",
    "FRP composite cooling towers",
    "Aesthetic FRP cooling tower designs",
    "Bottle-shaped FRP towers",
    "Rectangular/square FRP towers",
    "Industrial process cooling towers",
    "Data center cooling towers",
    "Custom FRP cooling tower solutions",
    "High-performance FRP cooling systems",
    "Corrosion-proof industrial towers",
    "FRP cooling towers with low maintenance"
  ],
  alternates: {
    canonical: '/cooling-towers/frp-cooling-towers',
  },
  openGraph: {
    title: "FRP Cooling Towers | Corrosion-Resistant Industrial Systems",
    description: "FRP cooling towers with corrosion resistance, lightweight design, and flexible configurations. Ideal for industrial, HVAC, and commercial applications.",
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
                <Link href="/cooling-towers" className="text-white/90 hover:text-white">Cooling Towers</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/70" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white font-semibold">FRP Cooling Towers</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      {/* Content Section with USP Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <FrpCoolingTowersContent />
          </main>

          {/* USP Sidebar */}
          <USPSidebar />
        </div>
      </div>
    </>
  );
}
