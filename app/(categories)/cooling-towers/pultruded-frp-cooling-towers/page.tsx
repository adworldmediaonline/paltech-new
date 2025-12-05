import { PultrudedFRPCoolingTowersContent } from "@/components/landing/pultruded-frp-cooling-towers-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";
import pultruded1 from '../../../../public/categories/pultruded-frp-cooling-towers-1.png';
import pultruded2 from '../../../../public/categories/pultruded-frp-cooling-towers-2.png';
import pultruded3 from '../../../../public/categories/pultruded-frp-cooling-towers-3.png';
import pultruded4 from '../../../../public/categories/pultruded-frp-cooling-towers-4.png';

const images = [pultruded1, pultruded2, pultruded3, pultruded4];

export const metadata: Metadata = {
  title: "Pultruded FRP Cooling Towers | Lightweight Industrial Solutions",
  description: "Advanced pultruded FRP cooling towers for chemical, petrochemical & coastal industries. Lightweight, corrosion-resistant & energy-efficient. Request a quote today!",
  keywords: [
    "FRP Cooling Towers",
    "Pultruded Towers",
    "Industrial Cooling",
    "Lightweight Cooling",
    "Composite Cooling",
    "Cross Flow Towers",
    "Counter Flow Towers",
    "Corrosion-Resistant Towers",
    "Pultruded FRP cooling towers for industries",
    "Lightweight corrosion-resistant industrial cooling towers",
    "Counter flow FRP cooling towers with splash fill",
    "Cross flow FRP cooling towers with film fill",
    "High-capacity pultruded FRP cooling solutions",
    "Coastal and chemical plant FRP towers",
    "Advanced FRP cooling towers for HVAC systems",
    "Energy-efficient industrial FRP cooling towers",
    "Multi-cell pultruded FRP cooling tower configurations",
    "Custom FRP cooling towers for rapid installation",
    "Industrial cooling towers",
    "Chemical plant cooling towers",
    "Petrochemical cooling systems",
    "Seawater cooling solutions",
    "Energy-efficient cooling towers",
    "Corrosion-resistant industrial towers",
    "Lightweight cooling tower manufacturer",
    "Global FRP cooling tower supplier",
    "Custom engineered cooling towers",
    "Pultruded fiberglass cooling towers",
    "Fiber reinforced plastic cooling towers",
    "GRP cooling tower systems",
    "FRP fan deck design",
    "PVC/PP drift eliminators",
    "Non-clogging nozzle cooling towers",
    "Spiral bevel gearbox cooling towers",
    "Coastal industrial cooling solutions",
    "FRP tower maintenance and repair",
    "High-efficiency heat transfer cooling towers",
    "Industrial water cooling solutions"
  ],
  alternates: {
    canonical: '/cooling-towers/pultruded-frp-cooling-towers',
  },
  openGraph: {
    title: "Pultruded FRP Cooling Towers | Lightweight Industrial Solutions",
    description: "Advanced pultruded FRP cooling towers for chemical, petrochemical & coastal industries. Lightweight, corrosion-resistant & energy-efficient. Request a quote today!",
    type: "website",
  },
};

export default function PultrudedFRPCoolingTowersPage() {
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
              <BreadcrumbPage className="text-white font-semibold">Pultruded FRP Cooling Towers</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      {/* Content Section with USP Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <PultrudedFRPCoolingTowersContent />
          </main>

          {/* USP Sidebar */}
          <USPSidebar />
        </div>
      </div>
    </>
  );
}
