import { ReciprocatingWaterAirCooledChillingPlantContent } from "@/components/landing/reciprocating-waterair-cooled-chilling-plant-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";
import reciprocating1 from '../../../../public/categories/reciprocating-water-air-cooled-chilling-plants-1.webp';
import reciprocating2 from '../../../../public/categories/reciprocating-water-air-cooled-chilling-plants-2.webp';
import reciprocating3 from '../../../../public/categories/reciprocating-water-air-cooled-chilling-plants-3.webp';
import reciprocating4 from '../../../../public/categories/reciprocating-water-air-cooled-chilling-plants-4.webp';

const images = [reciprocating1, reciprocating2, reciprocating3, reciprocating4];

export const metadata: Metadata = {
  title: "Reciprocating Water/Air Chillers | Reliable Industrial Cooling",
  description: "Reliable reciprocating water/air chillers for industrial and commercial cooling. Proven performance, energy-efficient operation, and multi-circuit flexibility.",
  keywords: [
    "Reciprocating Chillers",
    "Water Chillers",
    "Air Chillers",
    "Industrial Chillers",
    "Process Chillers",
    "Commercial Chillers",
    "Multi-Circuit Chillers",
    "Energy-Efficient Chillers",
    "Reciprocating water-cooled chillers",
    "Reciprocating air-cooled chillers",
    "Multi-circuit industrial chillers",
    "Reliable industrial chilling plants",
    "Industrial chillers for process cooling",
    "Low-maintenance commercial chillers",
    "Energy-efficient reciprocating chillers",
    "Industrial chillers with proven performance",
    "Multi-compressor industrial chillers",
    "Chillers for pharmaceutical manufacturing",
    "Water/air chillers for cold storage",
    "Reciprocating chillers for food processing",
    "Industrial chillers for laboratory cooling",
    "Industrial cooling systems",
    "Energy-efficient chillers",
    "Water-cooled chillers",
    "Air-cooled chillers",
    "Reciprocating compressors",
    "Process cooling equipment",
    "Commercial HVAC chillers",
    "Multi-circuit chillers",
    "Industrial refrigeration systems",
    "Reliable industrial chillers",
    "Redundant cooling systems",
    "Industrial chillers for manufacturing",
    "Low-cost operational chillers",
    "Heavy-duty industrial chillers",
    "Multi-compressor chilling plants",
    "Industrial chillers for plastic processing",
    "Precision process chillers",
    "High-capacity commercial chillers",
    "Multi-shift operation chillers",
    "Industrial chillers with LCD monitoring"
  ],
  alternates: {
    canonical: '/chilling-plants/reciprocating-water-air-cooled-chilling-plant',
  },
  openGraph: {
    title: "Reciprocating Water/Air Chillers | Reliable Industrial Cooling",
    description: "Reliable reciprocating water/air chillers for industrial and commercial cooling. Proven performance, energy-efficient operation, and multi-circuit flexibility.",
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
              <BreadcrumbPage className="text-white font-semibold">Reciprocating Water / Air Cooled Chilling Plants</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      {/* Content Section with USP Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <ReciprocatingWaterAirCooledChillingPlantContent />
          </main>

          {/* USP Sidebar */}
          <USPSidebar />
        </div>
      </div>
    </>
  );
}
