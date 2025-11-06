import { TrolleyMountedWaterAirCooledChillingPlantContent } from "@/components/landing/trolley-mounted-waterair-cooled-chilling-plant-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";
import trolley1 from '../../../../public/categories/trolley-mounted-water-air-cooled-chilling-plant-1.webp';
import trolley2 from '../../../../public/categories/trolley-mounted-water-air-cooled-chilling-plant-2.webp';
import trolley3 from '../../../../public/categories/trolley-mounted-water-air-cooled-chilling-plant-3.webp';
import trolley4 from '../../../../public/categories/trolley-mounted-water-air-cooled-chilling-plant-4.webp';

const images = [trolley1, trolley2, trolley3, trolley4];

export const metadata: Metadata = {
  title: "Trolley-Mounted Chillers | Mobile Water & Air Cooling",
  description: "Portable trolley-mounted chillers for water/air cooling. Mobile, rapid-deployment solutions for temporary, rental, or emergency industrial applications.",
  keywords: [
    "Trolley Chillers",
    "Mobile Chillers",
    "Portable Chillers",
    "Water Chillers",
    "Air Chillers",
    "Industrial Chillers",
    "Mobile Cooling",
    "Portable Cooling",
    "Trolley-mounted water chillers",
    "Trolley-mounted air chillers",
    "Portable industrial chillers",
    "Mobile cooling solutions for industry",
    "Temporary cooling systems for events",
    "Rental chillers for industrial use",
    "Emergency mobile chillers",
    "Rapid deployment chillers",
    "Portable chillers for construction sites",
    "Multi-location mobile chillers",
    "Trolley-mounted process chillers",
    "Mobile HVAC chillers",
    "Portable chillers with LCD display",
    "Temporary industrial cooling solutions",
    "Mobile chillers for maintenance backup",
    "Industrial chillers",
    "Process cooling equipment",
    "Water/air cooled chillers",
    "Portable cooling units",
    "Mobile HVAC systems",
    "Energy-efficient chillers",
    "Rental chillers",
    "Temporary cooling systems",
    "Heavy-duty chillers",
    "Industrial refrigeration",
    "Mobile chillers for manufacturing",
    "Portable chillers for food processing",
    "Trolley-mounted cooling systems",
    "Industrial chillers for temporary use",
    "Mobile chillers for laboratories",
    "Portable chillers for pharmaceutical plants",
    "Emergency cooling chillers",
    "Industrial process chillers",
    "Mobile chillers with data logging",
    "Trolley-mounted energy-saving chillers"
  ],
  alternates: {
    canonical: '/chilling-plants/trolley-mounted-water-air-cooled-chilling-plant',
  },
  openGraph: {
    title: "Trolley-Mounted Chillers | Mobile Water & Air Cooling",
    description: "Portable trolley-mounted chillers for water/air cooling. Mobile, rapid-deployment solutions for temporary, rental, or emergency industrial applications.",
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
              <BreadcrumbPage className="text-white font-semibold">Trolley Mounted Water / Air Cooled Chilling Plant</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      {/* Content Section with USP Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <TrolleyMountedWaterAirCooledChillingPlantContent />
          </main>

          {/* USP Sidebar */}
          <USPSidebar />
        </div>
      </div>
    </>
  );
}
