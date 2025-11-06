import { CfcFreeWaterAirCooledChillingPlantContent } from "@/components/landing/cfc-free-water-air-cooled-chilling-plant-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";
import cfc1 from '../../../../public/categories/cfc-free-water-air-cooled-chilling-plant-1.webp';
import cfc2 from '../../../../public/categories/cfc-free-water-air-cooled-chilling-plant-2.webp';
import cfc3 from '../../../../public/categories/cfc-free-water-air-cooled-chilling-plant-3.webp';
import cfc4 from '../../../../public/categories/cfc-free-water-air-cooled-chilling-plant-4.webp';

const images = [cfc1, cfc2, cfc3, cfc4];

export const metadata: Metadata = {
  title: "CFC-Free Water & Air Chillers | Sustainable Industrial Cooling",
  description: "Eco-friendly CFC-free water & air chillers for industrial cooling. Energy-efficient, compliant with Montreal Protocol, and optimized for reliable performance.",
  keywords: [
    "CFC-Free Chillers",
    "Industrial Chillers",
    "Water-Cooled Chillers",
    "Air-Cooled Chillers",
    "Process Chillers",
    "Sustainable Cooling",
    "Energy-Efficient Chillers",
    "Eco-Friendly Chillers",
    "CFC-free water/air cooled chillers",
    "Eco-friendly industrial chilling plants",
    "Energy-efficient process chillers",
    "Industrial chillers with CFC-free refrigerants",
    "Montreal Protocol compliant chillers",
    "Conversion of CFC-based chillers",
    "Low-maintenance CFC-free chilling systems",
    "Sustainable water/air chillers for factories",
    "Modern environmentally safe chillers",
    "Industrial process cooling with eco-friendly chillers",
    "CFC-free chillers for pharmaceutical applications",
    "Chillers for food & beverage processing",
    "Industrial cooling solutions",
    "Environmentally sustainable chillers",
    "Energy-saving industrial chillers",
    "Commercial and industrial chillers",
    "Process cooling equipment",
    "Water/air cooled industrial chillers",
    "Industrial HVAC chillers",
    "Factory-assembled chillers",
    "Low-energy chillers",
    "Sustainable refrigeration systems",
    "Refrigerant replacement chillers",
    "Conversion of CFC systems to eco-friendly",
    "Industrial refrigeration compliance",
    "Sustainable industrial cooling solutions",
    "Modern chilling plant technology",
    "Industrial HVAC energy efficiency",
    "Large-scale eco-friendly chillers",
    "Process temperature control systems",
    "Zero ozone-depleting chillers",
    "Regulatory compliant chillers"
  ],
  alternates: {
    canonical: '/chilling-plants/cfc-free-water-air-cooled-chilling-plant',
  },
  openGraph: {
    title: "CFC-Free Water & Air Chillers | Sustainable Industrial Cooling",
    description: "Eco-friendly CFC-free water & air chillers for industrial cooling. Energy-efficient, compliant with Montreal Protocol, and optimized for reliable performance.",
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
              <BreadcrumbPage className="text-white font-semibold">CFC Free Water/Air Cooled Chilling Plant</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      {/* Content Section with USP Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <CfcFreeWaterAirCooledChillingPlantContent />
          </main>

          {/* USP Sidebar */}
          <USPSidebar />
        </div>
      </div>
    </>
  );
}
