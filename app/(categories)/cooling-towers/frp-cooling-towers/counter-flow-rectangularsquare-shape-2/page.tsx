import { FrpCounterFlowRectangularSquareShape2Content } from "@/components/landing/frp-counter-flow-rectangularsquare-shape-2-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";
import rectangular1 from '../../../../../public/categories/counter-flow-rectangular-square-shape-1.webp';
import rectangular2 from '../../../../../public/categories/counter-flow-rectangular-square-shape-2.webp';
import rectangular3 from '../../../../../public/categories/counter-flow-rectangular-square-shape-3.webp';
import rectangular4 from '../../../../../public/categories/counter-flow-rectangular-square-shape-4.webp';

const images = [rectangular1, rectangular2, rectangular3, rectangular4];

export const metadata: Metadata = {
  title: "FRP Rectangular/Square Cooling Towers | Up to 1,500 TR",
  description: "High-capacity FRP rectangular/square cooling towers up to 1,500 TR. Efficient, durable, and space-optimized solutions for industrial & HVAC applications.",
  keywords: [
    "FRP Cooling Towers",
    "Rectangular Cooling Towers",
    "Square Cooling Towers",
    "Industrial Cooling",
    "HVAC Cooling",
    "High-Capacity Towers",
    "Energy-Efficient Towers",
    "FRP rectangular/square counter flow cooling towers",
    "High-capacity FRP cooling towers up to 1,500 TR",
    "Industrial FRP cooling towers for power plants",
    "Space-optimized FRP cooling towers",
    "Multi-cell FRP cooling towers for large industries",
    "Corrosion-resistant FRP cooling towers",
    "Energy-efficient industrial FRP cooling towers",
    "FRP cooling towers for chemical processing",
    "Rectangular FRP towers with FRP basin",
    "Scalable FRP cooling towers for large capacities",
    "Industrial FRP cooling towers",
    "Large-capacity FRP towers",
    "Counter flow FRP cooling systems",
    "Multi-cell industrial cooling towers",
    "Roof-top FRP cooling towers",
    "Power plant cooling towers",
    "Commercial FRP cooling towers",
    "High-efficiency FRP cooling systems",
    "Modular FRP cooling towers",
    "Space-saving industrial cooling towers",
    "Fiberglass reinforced plastic cooling towers",
    "Rectangular/square high-capacity cooling towers",
    "Industrial FRP cooling solutions",
    "Thermal-efficient FRP cooling towers",
    "Large industrial HVAC cooling towers",
    "Corrosion-proof FRP towers",
    "Customizable FRP cooling tower design",
    "Heavy-duty industrial cooling towers",
    "FRP cooling towers for data centers",
    "Pre-engineered industrial cooling towers"
  ],
  alternates: {
    canonical: '/cooling-towers/frp-cooling-towers/counter-flow-rectangularsquare-shape-2',
  },
  openGraph: {
    title: "FRP Rectangular/Square Cooling Towers | Up to 1,500 TR",
    description: "High-capacity FRP rectangular/square cooling towers up to 1,500 TR. Efficient, durable, and space-optimized solutions for industrial & HVAC applications.",
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
              <BreadcrumbPage className="text-white font-semibold">Counter Flow Rectangular/Square Shape</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      {/* Content Section with USP Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <FrpCounterFlowRectangularSquareShape2Content />
          </main>

          {/* USP Sidebar */}
          <USPSidebar />
        </div>
      </div>
    </>
  );
}
