import { CoolingTowersContent } from "@/components/landing/cooling-towers-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import coolingTowers1 from '../../../public/categories/cooling-towers-1.webp';
import coolingTowers2 from '../../../public/categories/cooling-towers-2.webp';
import coolingTowers3 from '../../../public/categories/cooling-towers-3.webp';
import coolingTowers4 from '../../../public/categories/cooling-towers-4.webp';
import { Metadata } from "next";

const images = [coolingTowers1, coolingTowers2, coolingTowers3, coolingTowers4];

export const metadata: Metadata = {
  title: "Premium Industrial Cooling Towers | Paltech™ India",
  description: "India's leading industrial cooling tower manufacturer since 1986. ISO-certified, custom solutions, global installations. Get expert consultation today!",
  keywords: [
    "Cooling Towers",
    "Industrial Cooling",
    "FRP Towers",
    "RCC Towers",
    "Wooden Towers",
    "HVAC Cooling",
    "Chilling Systems",
    "Power Plant Cooling",
    "Industrial cooling tower manufacturer in India",
    "ISO-certified industrial cooling tower solutions",
    "Custom engineered cooling towers for industry",
    "RCC, FRP, and wooden cooling towers",
    "Cooling towers for power plants and refineries",
    "Global industrial cooling tower installations",
    "Maintenance and repair of cooling towers",
    "High-performance industrial cooling solutions",
    "Cooling towers for HVAC and data centers",
    "Energy-efficient cooling tower systems",
    "Industrial cooling solutions",
    "Cooling tower manufacturers",
    "Power plant cooling towers",
    "Chemical processing cooling systems",
    "Petrochemical cooling towers",
    "ISO 9001 cooling tower certification",
    "CTI-certified cooling towers",
    "Global cooling tower exports",
    "Commercial and industrial cooling towers",
    "FRP and RCC cooling systems",
    "Industrial water cooling systems",
    "Cross-flow and counter-flow cooling towers",
    "Cooling tower installation and commissioning",
    "Cooling tower performance optimization",
    "Long-lasting industrial cooling towers",
    "Energy-efficient cooling tower design",
    "Cooling tower project consultancy",
    "Custom cooling tower solutions",
    "Thermal performance of cooling towers",
    "International standards for cooling towers"
  ],
  alternates: {
    canonical: '/cooling-towers',
  },
  openGraph: {
    title: "Premium Industrial Cooling Towers | Paltech™ India",
    description: "India's leading industrial cooling tower manufacturer since 1986. ISO-certified, custom solutions, global installations. Get expert consultation today!",
    type: "website",
  },
};

export default function CoolingTowersPage() {
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
              <BreadcrumbPage className="text-white font-semibold">Cooling Towers</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      {/* Content Section with USP Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <CoolingTowersContent />
          </main>

          {/* USP Sidebar */}
          <USPSidebar />
        </div>
      </div>
    </>
  );
}
