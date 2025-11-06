import { MultiCircuitPowerSaverScrollScrewChillingPlantWaterAirCooledContent } from "@/components/landing/multi-circuit-power-saver-scroll-screw-chilling-plant-water-air-cooled-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";
import multi1 from '../../../../public/categories/multi-circuit-power-saver-scroll-screw-chilling-plant-water-air-cooled-1.webp';
import multi2 from '../../../../public/categories/multi-circuit-power-saver-scroll-screw-chilling-plant-water-air-cooled-2.webp';
import multi3 from '../../../../public/categories/multi-circuit-power-saver-scroll-screw-chilling-plant-water-air-cooled-3.webp';
import multi4 from '../../../../public/categories/multi-circuit-power-saver-scroll-screw-chilling-plant-water-air-cooled-4.webp';

const images = [multi1, multi2, multi3, multi4];

export const metadata: Metadata = {
  title: "Multi-Circuit Power Saver Chillers | Energy Efficient Cooling",
  description: "Multi-circuit power saver scroll/screw chillers for industrial and commercial cooling. Maximize energy efficiency, reduce costs, and ensure reliable operation.",
  keywords: [
    "Multi-Circuit Chillers",
    "Power Saver Chillers",
    "Scroll Chillers",
    "Screw Chillers",
    "Industrial Chillers",
    "Energy-Efficient Chillers",
    "Commercial Chillers",
    "Process Chillers",
    "Multi-circuit power saver chillers",
    "Scroll/screw compressor chillers",
    "Energy-efficient industrial chilling plants",
    "Multi-circuit industrial chillers",
    "Power-saving water/air-cooled chillers",
    "Industrial chillers with intelligent controls",
    "High-efficiency process cooling systems",
    "Multi-compressor industrial chillers",
    "Industrial chillers with LCD monitoring",
    "Chillers for large-scale manufacturing applications",
    "Industrial chillers for pharmaceutical processing",
    "Low-energy commercial chillers for data centers",
    "Industrial cooling solutions",
    "Energy-efficient chillers",
    "Water-cooled chillers",
    "Air-cooled chillers",
    "Multi-compressor chillers",
    "Process cooling equipment",
    "Scroll and screw chillers",
    "Commercial HVAC chillers",
    "Industrial refrigeration systems",
    "Advanced industrial chillers",
    "Intelligent load management chillers",
    "Optimized energy consumption chillers",
    "Multi-circuit refrigeration systems",
    "Industrial chillers for food processing",
    "Low-cost operational chillers",
    "Redundant cooling systems",
    "High-capacity industrial chillers",
    "Industrial chillers for plastic processing",
    "Multi-shift operation chillers",
    "Sustainable energy-saving chillers"
  ],
  alternates: {
    canonical: '/chilling-plants/multi-circuit-power-saver-scroll-screw-chilling-plant-water-air-cooled',
  },
  openGraph: {
    title: "Multi-Circuit Power Saver Chillers | Energy Efficient Cooling",
    description: "Multi-circuit power saver scroll/screw chillers for industrial and commercial cooling. Maximize energy efficiency, reduce costs, and ensure reliable operation.",
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
                <Link href="/chilling-plants" className="text-white/90 hover:text-white">Chilling Plants</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/70" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white font-semibold">Multi Circuit Power Saver Scroll / Screw Chilling Plant</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      {/* Content Section with USP Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <MultiCircuitPowerSaverScrollScrewChillingPlantWaterAirCooledContent />
          </main>

          {/* USP Sidebar */}
          <USPSidebar />
        </div>
      </div>
    </>
  );
}
