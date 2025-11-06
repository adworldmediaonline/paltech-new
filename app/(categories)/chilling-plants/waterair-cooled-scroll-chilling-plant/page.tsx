import { WaterAirCooledScrollChillingPlantContent } from "@/components/landing/waterair-cooled-scroll-chilling-plant-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";
import scroll1 from '../../../../public/categories/water-air-cooled-scroll-chilling-plants-1.webp';
import scroll2 from '../../../../public/categories/water-air-cooled-scroll-chilling-plants-2.webp';
import scroll3 from '../../../../public/categories/water-air-cooled-scroll-chilling-plants-3.webp';
import scroll4 from '../../../../public/categories/water-air-cooled-scroll-chilling-plants-4.webp';

const images = [scroll1, scroll2, scroll3, scroll4];

export const metadata: Metadata = {
  title: "Water & Air Cooled Scroll Chillers | Industrial Cooling",
  description: "High-performance water & air-cooled scroll chillers for industrial applications. Energy-efficient, reliable, and custom-engineered for precise temperature control.",
  keywords: [
    "Scroll Chillers",
    "Industrial Chillers",
    "Water-Cooled Chillers",
    "Air-Cooled Chillers",
    "Process Chillers",
    "Industrial Cooling",
    "HVAC Chillers",
    "Energy-Efficient Chillers",
    "Water-cooled scroll chilling plants",
    "Air-cooled scroll chillers for factories",
    "Industrial chillers for process cooling",
    "Energy-efficient industrial scroll chillers",
    "High-capacity water/air chillers",
    "Custom-engineered scroll chilling plants",
    "Low-maintenance scroll chiller systems",
    "Scroll chillers for commercial HVAC",
    "Multi-circuit scroll chillers for industries",
    "Scroll chillers for pharmaceutical manufacturing",
    "Water-cooled chillers with cooling towers",
    "Air-cooled chillers without condenser pumps",
    "Industrial cooling systems",
    "Energy-saving chillers",
    "Process cooling equipment",
    "Water/air cooled chillers",
    "Industrial HVAC cooling solutions",
    "Factory-assembled chillers",
    "High-capacity chillers",
    "Low-maintenance chilling plants",
    "Commercial and industrial chillers",
    "Precision temperature control chillers",
    "Refrigerant-efficient chillers",
    "Industrial temperature control systems",
    "Screw/scroll/reciprocating chillers",
    "Custom industrial chilling solutions",
    "Large-scale process chillers",
    "Chilling systems for manufacturing",
    "Sustainable industrial chillers",
    "Plastic injection molding chillers",
    "Cold storage chillers",
    "Data center cooling chillers"
  ],
  alternates: {
    canonical: '/chilling-plants/waterair-cooled-scroll-chilling-plant',
  },
  openGraph: {
    title: "Water & Air Cooled Scroll Chillers | Industrial Cooling",
    description: "High-performance water & air-cooled scroll chillers for industrial applications. Energy-efficient, reliable, and custom-engineered for precise temperature control.",
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
              <BreadcrumbPage className="text-white font-semibold">Water/Air Cooled Scroll Chilling Plant</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      {/* Content Section with USP Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <WaterAirCooledScrollChillingPlantContent />
          </main>

          {/* USP Sidebar */}
          <USPSidebar />
        </div>
      </div>
    </>
  );
}
