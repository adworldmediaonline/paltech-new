import { FrpCounterFlowBottleShape2Content } from "@/components/landing/frp-counter-flow-bottle-shape-2-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";
import bottle1 from '../../../../../public/categories/counter-flow-bottle-shape-1.webp';
import bottle2 from '../../../../../public/categories/counter-flow-bottle-shape-2.webp';
import bottle3 from '../../../../../public/categories/counter-flow-bottle-shape-3.webp';
import bottle4 from '../../../../../public/categories/counter-flow-bottle-shape-4.webp';

const images = [bottle1, bottle2, bottle3, bottle4];

export const metadata: Metadata = {
  title: "FRP Bottle Shape Cooling Towers | Efficient & Corrosion-Resistant",
  description: "FRP bottle-shaped cooling towers with corrosion resistance, energy efficiency, and flexible installation. Ideal for commercial, industrial, and HVAC applications.",
  keywords: [
    "FRP Cooling Towers",
    "Bottle Shape Towers",
    "Counter Flow Towers",
    "Industrial Cooling",
    "HVAC Cooling",
    "Energy-Efficient Towers",
    "Corrosion-Resistant Towers",
    "FRP bottle shape counter flow cooling towers",
    "Corrosion-resistant FRP cooling towers",
    "Energy-efficient industrial FRP cooling towers",
    "Lightweight FRP roof-top cooling towers",
    "Vertical induced draft FRP cooling towers",
    "Multi-blade drift eliminator FRP towers",
    "Aerodynamic axial fan FRP cooling towers",
    "FRP cooling towers for commercial HVAC systems",
    "Industrial FRP cooling towers for data centers",
    "Custom FRP cooling towers with aesthetic options",
    "Industrial FRP cooling towers",
    "Counter flow FRP cooling towers",
    "Large capacity FRP towers",
    "Lightweight industrial cooling towers",
    "Fan-less FRP cooling systems",
    "Modular FRP cooling towers",
    "Corrosion-proof cooling towers",
    "Energy-saving industrial cooling towers",
    "Roof-top FRP cooling towers",
    "Pre-engineered FRP cooling towers",
    "Fiberglass reinforced plastic cooling towers",
    "Bottle-shaped industrial cooling towers",
    "Architectural FRP cooling tower designs",
    "Vertical discharge cooling towers",
    "High-efficiency FRP cooling systems",
    "Commercial FRP cooling solutions",
    "Lightweight corrosion-resistant towers",
    "Roof-mounted FRP cooling towers",
    "Multi-color FRP cooling towers",
    "Medium to large FRP industrial cooling"
  ],
  alternates: {
    canonical: '/cooling-towers/frp-cooling-towers/counter-flow-bottle-shape-2',
  },
  openGraph: {
    title: "FRP Bottle Shape Cooling Towers | Efficient & Corrosion-Resistant",
    description: "FRP bottle-shaped cooling towers with corrosion resistance, energy efficiency, and flexible installation. Ideal for commercial, industrial, and HVAC applications.",
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
              <BreadcrumbLink asChild>
                <Link href="/cooling-towers/frp-cooling-towers" className="text-white/90 hover:text-white">FRP Cooling Towers</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/70" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white font-semibold">Counter Flow Bottle Shape</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      {/* Content Section with USP Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <FrpCounterFlowBottleShape2Content />
          </main>

          {/* USP Sidebar */}
          <USPSidebar />
        </div>
      </div>
    </>
  );
}
