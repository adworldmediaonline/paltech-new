import { GlycolBasedWaterAirCooledChillingPlantContent } from "@/components/landing/glycol-based-waterair-cooled-chilling-plant-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";
import glycol1 from '../../../../public/categories/glycol-based-water-air-cooled-chilling-plants-1.webp';
import glycol2 from '../../../../public/categories/glycol-based-water-air-cooled-chilling-plants-2.webp';
import glycol3 from '../../../../public/categories/glycol-based-water-air-cooled-chilling-plants-3.webp';
import glycol4 from '../../../../public/categories/glycol-based-water-air-cooled-chilling-plants-4.webp';

const images = [glycol1, glycol2, glycol3, glycol4];

export const metadata: Metadata = {
  title: "Glycol-Based Chillers | Low-Temperature Industrial Cooling",
  description: "Glycol-based water/air chillers for precise low-temperature cooling. Ideal for industrial, pharmaceutical, and food processing applications. Request a quote today.",
  keywords: [
    "Glycol Chillers",
    "Low-Temperature Chillers",
    "Industrial Chillers",
    "Water-Cooled Chillers",
    "Air-Cooled Chillers",
    "Process Chillers",
    "Cold Storage Chillers",
    "Energy-Efficient Chillers",
    "Glycol-based water/air chillers",
    "Low-temperature industrial chilling systems",
    "Industrial chillers for cold storage",
    "Process cooling glycol chillers",
    "High-performance low-temperature chillers",
    "Glycol chillers for pharmaceutical applications",
    "Precision temperature control chillers",
    "Packaged glycol-based chilling plants",
    "Industrial process cooling glycol chillers",
    "Glycol chillers for food processing",
    "Low-temperature chillers for laboratory cooling",
    "Cryogenic and freeze drying chillers",
    "Industrial cooling systems",
    "Low-temperature refrigeration",
    "Water/air-cooled chillers",
    "Energy-efficient industrial chillers",
    "Process cooling equipment",
    "Industrial HVAC chillers",
    "Cold storage cooling solutions",
    "Industrial refrigeration systems",
    "Packaged chillers for factories",
    "Sustainable industrial chillers",
    "Secondary refrigerant glycol chillers",
    "Low-temperature process cooling units",
    "Glycol chiller manufacturers",
    "Industrial refrigeration solutions",
    "Custom low-temperature chillers",
    "Laboratory and medical cooling systems",
    "Large-scale cold storage chillers",
    "Precision process cooling equipment",
    "Industrial chillers with glycol refrigerant",
    "Low-maintenance glycol chillers"
  ],
  alternates: {
    canonical: '/chilling-plants/glycol-based-waterair-cooled-chilling-plant',
  },
  openGraph: {
    title: "Glycol-Based Chillers | Low-Temperature Industrial Cooling",
    description: "Glycol-based water/air chillers for precise low-temperature cooling. Ideal for industrial, pharmaceutical, and food processing applications. Request a quote today.",
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
              <BreadcrumbPage className="text-white font-semibold">Glycol-based Water/Air Cooled Chilling Plant</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      {/* Content Section with USP Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <GlycolBasedWaterAirCooledChillingPlantContent />
          </main>

          {/* USP Sidebar */}
          <USPSidebar />
        </div>
      </div>
    </>
  );
}
