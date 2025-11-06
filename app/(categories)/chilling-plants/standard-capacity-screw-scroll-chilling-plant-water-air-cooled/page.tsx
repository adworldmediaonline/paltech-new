import { StandardCapacityScrewScrollChillingPlantWaterAirCooledContent } from "@/components/landing/standard-capacity-screw-scroll-chilling-plant-water-air-cooled-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";
import standard1 from '../../../../public/categories/standard-capacity-screw-scroll-chilling-plants-water-air-cooled-1.webp';
import standard2 from '../../../../public/categories/standard-capacity-screw-scroll-chilling-plants-water-air-cooled-2.webp';
import standard3 from '../../../../public/categories/standard-capacity-screw-scroll-chilling-plants-water-air-cooled-3.webp';
import standard4 from '../../../../public/categories/standard-capacity-screw-scroll-chilling-plants-water-air-cooled-4.webp';

const images = [standard1, standard2, standard3, standard4];

export const metadata: Metadata = {
  title: "Standard Capacity Screw/Scroll Chillers | Reliable Cooling",
  description: "Reliable standard capacity screw/scroll chillers for industrial & commercial cooling. Proven performance, energy-efficient, with advanced control systems.",
  keywords: [
    "Screw Chillers",
    "Scroll Chillers",
    "Industrial Chillers",
    "Water Chillers",
    "Air Chillers",
    "Standard Chillers",
    "Process Chillers",
    "Energy-Efficient Chillers",
    "Standard capacity screw chillers",
    "Standard capacity scroll chillers",
    "Industrial screw/scroll chillers",
    "Water-cooled standard chillers",
    "Air-cooled standard chillers",
    "Reliable industrial chillers",
    "Industrial chillers for process cooling",
    "Chillers with advanced control systems",
    "Multi-compressor industrial chillers",
    "Screw/scroll chillers for manufacturing",
    "Standard chillers for cold storage",
    "Industrial chillers for pharmaceutical applications",
    "Industrial chillers with LCD monitoring",
    "Energy-efficient chillers for industrial use",
    "Industrial cooling systems",
    "Water/air chillers",
    "Screw/scroll compressors",
    "Process cooling equipment",
    "Industrial refrigeration systems",
    "Commercial HVAC chillers",
    "Energy-saving industrial chillers",
    "Industrial chillers with proven performance",
    "Heavy-duty industrial chillers",
    "Multi-circuit chillers",
    "Standard industrial chillers",
    "Industrial chillers for food processing",
    "Commercial process chillers",
    "Heavy-duty water/air chillers",
    "Industrial chillers for laboratories",
    "Robust screw/scroll chillers",
    "Chillers for plastic processing",
    "Reliable industrial cooling equipment",
    "Multi-shift operation chillers",
    "Industrial chillers with extended service life"
  ],
  alternates: {
    canonical: '/chilling-plants/standard-capacity-screw-scroll-chilling-plant-water-air-cooled',
  },
  openGraph: {
    title: "Standard Capacity Screw/Scroll Chillers | Reliable Cooling",
    description: "Reliable standard capacity screw/scroll chillers for industrial & commercial cooling. Proven performance, energy-efficient, with advanced control systems.",
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
              <BreadcrumbPage className="text-white font-semibold">Standard Capacity Screw / Scroll Chilling Plants</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      {/* Content Section with USP Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <StandardCapacityScrewScrollChillingPlantWaterAirCooledContent />
          </main>

          {/* USP Sidebar */}
          <USPSidebar />
        </div>
      </div>
    </>
  );
}
