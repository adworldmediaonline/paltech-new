import { ChillingPlantsContent } from "@/components/landing/chilling-plants-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";
import chillingPlants1 from '../../../public/categories/chilling-plants-1.webp';
import chillingPlants2 from '../../../public/categories/chilling-plants-2.webp';
import chillingPlants3 from '../../../public/categories/chilling-plants-3.webp';

const images = [chillingPlants1, chillingPlants2, chillingPlants3];

export const metadata: Metadata = {
  title: "Industrial Chilling Plants & Process Chillers | Paltech",
  description: "High-performance industrial chilling plants & process chillers for precise temperature control. Energy-efficient, custom-engineered solutions for all industries.",
  keywords: [
    "Chilling Plants",
    "Process Chillers",
    "Industrial Chillers",
    "Water-Cooled Chillers",
    "Air-Cooled Chillers",
    "Industrial Cooling",
    "HVAC Chillers",
    "Energy-Efficient Chillers",
    "Industrial water-cooled chilling plants",
    "Air-cooled process chillers for factories",
    "High-capacity industrial chillers",
    "Custom-engineered industrial chilling systems",
    "Glycol-based water/air chilling plants",
    "Skid-mounted industrial chillers",
    "Low-temperature process chillers",
    "Microprocessor-based chilling systems",
    "Multi-circuit power saver chillers",
    "Trolley-mounted air/water chillers",
    "Industrial chillers for pharmaceutical manufacturing",
    "Chilling plants for plastic injection molding",
    "Industrial cooling systems",
    "Energy-saving chillers",
    "Water/air cooled chillers",
    "Industrial HVAC cooling solutions",
    "Factory-assembled chillers",
    "High-capacity process chillers",
    "Precision temperature control chillers",
    "Commercial and industrial chillers",
    "Low-maintenance chilling plants",
    "Sustainable industrial cooling systems",
    "CFC-free chillers",
    "Screw/scroll chilling plants",
    "Heavy-duty industrial chillers",
    "Process cooling equipment",
    "Custom industrial chillers",
    "Industrial temperature control systems",
    "Data center cooling chillers",
    "Chemical process chillers",
    "Food & beverage chillers",
    "Pharmaceutical cooling systems"
  ],
  alternates: {
    canonical: '/chilling-plants',
  },
  openGraph: {
    title: "Industrial Chilling Plants & Process Chillers | Paltech",
    description: "High-performance industrial chilling plants & process chillers for precise temperature control. Energy-efficient, custom-engineered solutions for all industries.",
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
              <BreadcrumbPage className="text-white font-semibold">Chilling Plants</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      {/* Content Section with USP Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <ChillingPlantsContent />
          </main>

          {/* USP Sidebar */}
          <USPSidebar />
        </div>
      </div>
    </>
  );
}
