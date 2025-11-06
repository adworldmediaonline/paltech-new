import { TailorMadePowerSaverScrewScrollChillingPlantWaterAirCooledContent } from "@/components/landing/tailor-made-power-saver-screw-scroll-chilling-plant-water-air-cooled-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";
import tailor1 from '../../../../public/categories/tailor-made-power-saver-screw-scroll-chilling-plant-water-air-cooled-1.webp';
import tailor2 from '../../../../public/categories/tailor-made-power-saver-screw-scroll-chilling-plant-water-air-cooled-2.webp';
import tailor3 from '../../../../public/categories/tailor-made-power-saver-screw-scroll-chilling-plant-water-air-cooled-3.webp';

const images = [tailor1, tailor2, tailor3];

export const metadata: Metadata = {
  title: "Tailor-Made Screw/Scroll Chillers | Custom Power Saver",
  description: "Custom screw/scroll chillers with power-saving technology. Tailor-made solutions for industrial cooling, efficiency, and precise operational control.",
  keywords: [
    "Screw Chillers",
    "Scroll Chillers",
    "Industrial Chillers",
    "Water Chillers",
    "Air Chillers",
    "Power Saver Chillers",
    "Custom Chillers",
    "Tailor-Made Chillers",
    "Tailor-made screw chillers",
    "Tailor-made scroll chillers",
    "Custom industrial cooling solutions",
    "Power saver screw/scroll chillers",
    "Industrial chillers for unique applications",
    "Low-energy industrial chillers",
    "Custom-engineered process chillers",
    "Multi-shift operation chillers",
    "Variable load industrial chillers",
    "Precision temperature control chillers",
    "Space-constrained custom chillers",
    "Energy-efficient industrial chillers",
    "Chillers with advanced monitoring systems",
    "Tailor-made chillers for manufacturing",
    "Custom chillers for regulatory compliance",
    "Industrial cooling systems",
    "Process cooling equipment",
    "Water/air chillers",
    "Industrial refrigeration systems",
    "Energy-efficient chillers",
    "Custom industrial chillers",
    "Screw/scroll compressors",
    "Industrial HVAC chillers",
    "Heavy-duty industrial chillers",
    "Multi-circuit chillers",
    "Industrial chillers for food processing",
    "Custom chillers for pharmaceutical plants",
    "Commercial process chillers",
    "Industrial chillers with extended service life",
    "Robust screw/scroll chillers",
    "Custom-engineered chillers for manufacturing",
    "Industrial chillers for laboratories",
    "Energy-saving industrial chillers",
    "Chillers with LCD monitoring",
    "Heavy-duty water/air chillers"
  ],
  alternates: {
    canonical: '/chilling-plants/tailor-made-power-saver-screw-scroll-chilling-plant-water-air-cooled',
  },
  openGraph: {
    title: "Tailor-Made Screw/Scroll Chillers | Custom Power Saver",
    description: "Custom screw/scroll chillers with power-saving technology. Tailor-made solutions for industrial cooling, efficiency, and precise operational control.",
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
              <BreadcrumbPage className="text-white font-semibold">Tailor Made Power Saver Screw / Scroll Chilling Plant</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      {/* Content Section with USP Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <TailorMadePowerSaverScrewScrollChillingPlantWaterAirCooledContent />
          </main>

          {/* USP Sidebar */}
          <USPSidebar />
        </div>
      </div>
    </>
  );
}
