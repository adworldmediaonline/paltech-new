import { FrpFanLessInducedDraftJetTypeFrpContent } from "@/components/landing/frp-fan-less-induced-draft-jet-type-frp-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";
import fanLess1 from '../../../../../public/categories/fan-less-induced-draft-jet-type-frp-1.webp';
import fanLess2 from '../../../../../public/categories/fan-less-induced-draft-jet-type-frp-2.webp';
import fanLess3 from '../../../../../public/categories/fan-less-induced-draft-jet-type-frp-3.webp';
import fanLess4 from '../../../../../public/categories/fan-less-induced-draft-jet-type-frp-4.webp';

const images = [fanLess1, fanLess2, fanLess3, fanLess4];

export const metadata: Metadata = {
  title: "Fan-less Jet Type FRP Cooling Towers | Energy Efficient",
  description: "Energy-efficient fan-less FRP cooling towers with minimal maintenance, low noise, and superior thermal performance for industrial & commercial applications.",
  keywords: [
    "FRP Cooling Towers",
    "Fan-less Cooling Towers",
    "Jet Type Towers",
    "Industrial Cooling",
    "Energy-Efficient Cooling",
    "Low Maintenance Towers",
    "Thermal Cooling",
    "Fan-less induced draft FRP cooling towers",
    "Energy-efficient FRP cooling towers",
    "Industrial jet type FRP cooling towers",
    "Low noise FRP cooling towers",
    "Maintenance-free fan-less cooling towers",
    "Fan-less FRP towers for commercial buildings",
    "Scalable FRP jet type cooling towers",
    "Eco-friendly industrial cooling towers",
    "FRP cooling towers for urban installations",
    "Custom-engineered fan-less cooling solutions",
    "Industrial FRP cooling systems",
    "Energy-saving cooling towers",
    "High-efficiency FRP cooling towers",
    "Commercial FRP cooling towers",
    "Fan-less industrial cooling towers",
    "Zero fan energy cooling systems",
    "Jet-induced draft cooling towers",
    "Sustainable industrial cooling",
    "FRP cooling towers for offices & hotels",
    "Low-cost maintenance cooling towers",
    "Fiberglass reinforced plastic cooling towers",
    "Eco-friendly FRP cooling towers",
    "Noise-sensitive industrial cooling solutions",
    "FRP cooling towers for educational institutions",
    "Energy-efficient HVAC cooling towers",
    "Corrosion-resistant FRP towers",
    "Industrial cooling towers with natural draft",
    "Custom FRP cooling towers",
    "High-performance fan-less cooling towers",
    "Commercial building cooling systems"
  ],
  alternates: {
    canonical: '/cooling-towers/frp-cooling-towers/fan-less-induced-draft-jet-type-frp',
  },
  openGraph: {
    title: "Fan-less Jet Type FRP Cooling Towers | Energy Efficient",
    description: "Energy-efficient fan-less FRP cooling towers with minimal maintenance, low noise, and superior thermal performance for industrial & commercial applications.",
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
              <BreadcrumbPage className="text-white font-semibold">Fan less Induced Draft – Jet Type FRP</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      {/* Content Section with USP Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <FrpFanLessInducedDraftJetTypeFrpContent />
          </main>

          {/* USP Sidebar */}
          <USPSidebar />
        </div>
      </div>
    </>
  );
}
