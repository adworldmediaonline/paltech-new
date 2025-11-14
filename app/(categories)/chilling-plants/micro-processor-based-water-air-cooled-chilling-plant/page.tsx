import { MicroProcessorBasedWaterAirCooledChillingPlantContent } from "@/components/landing/micro-processor-based-waterair-cooled-chilling-plant-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";
import micro1 from '../../../../public/categories/micro-processor-based-water-air-cooled-chilling-plant-1.webp';
import micro2 from '../../../../public/categories/micro-processor-based-water-air-cooled-chilling-plant-2.webp';
import micro3 from '../../../../public/categories/micro-processor-based-water-air-cooled-chilling-plant-3.webp';

import micro4 from '../../../../public/categories/micro-processor-based-water-air-cooled-chilling-plant-4.webp';

const images = [micro1, micro2, micro3, micro4];

export const metadata: Metadata = {
  title: "Microprocessor-Based Chillers | Intelligent Industrial Cooling",
  description: "Microprocessor-based water/air chillers with intelligent controls for precise industrial cooling. Ideal for pharma, food, labs, and commercial applications.",
  keywords: [
    "Microprocessor Chillers",
    "Industrial Chillers",
    "Intelligent Chillers",
    "Water-Cooled Chillers",
    "Air-Cooled Chillers",
    "Process Chillers",
    "Precision Chillers",
    "Energy-Efficient Chillers",
    "Microprocessor-based water/air chillers",
    "Intelligent industrial process cooling systems",
    "Advanced microprocessor-controlled chillers",
    "Industrial chillers with LCD display",
    "Multi-circuit industrial chilling plants",
    "Precision temperature control chillers",
    "Microprocessor-based chillers for labs",
    "Data-logging industrial chillers",
    "Automated industrial cooling systems",
    "Smart control chillers for pharmaceutical manufacturing",
    "Microprocessor chillers for food processing",
    "Low-maintenance intelligent chillers",
    "Industrial cooling solutions",
    "Water/air-cooled chillers",
    "Energy-efficient industrial chillers",
    "Intelligent temperature control systems",
    "Process cooling equipment",
    "Microprocessor-controlled chillers",
    "Precision industrial chillers",
    "Automated chillers for manufacturing",
    "Advanced refrigeration systems",
    "Commercial and industrial chillers",
    "Multi-compressor chillers",
    "Microprocessor-based control systems",
    "LCD display chillers",
    "Intelligent load management chillers",
    "Data-recording chillers",
    "Industrial cooling automation",
    "Lab and medical chillers",
    "Controlled environment cooling solutions",
    "Process cooling microprocessor chillers",
    "Microprocessor-based refrigeration systems"
  ],
  alternates: {
    canonical: '/chilling-plants/micro-processor-based-water-air-cooled-chilling-plant',
  },
  openGraph: {
    title: "Microprocessor-Based Chillers | Intelligent Industrial Cooling",
    description: "Microprocessor-based water/air chillers with intelligent controls for precise industrial cooling. Ideal for pharma, food, labs, and commercial applications.",
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
              <BreadcrumbPage className="text-white font-semibold">Micro Processor based Water/Air Cooled Chilling Plants</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      {/* Content Section with USP Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <MicroProcessorBasedWaterAirCooledChillingPlantContent />
          </main>

          {/* USP Sidebar */}
          <USPSidebar />
        </div>
      </div>
    </>
  );
}
