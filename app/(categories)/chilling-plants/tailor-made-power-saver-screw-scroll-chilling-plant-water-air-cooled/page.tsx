import { TailorMadePowerSaverScrewScrollChillingPlantWaterAirCooledContent } from "@/components/landing/tailor-made-power-saver-screw-scroll-chilling-plant-water-air-cooled-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import tailor1 from '../../../../public/categories/tailor-made-power-saver-screw-scroll-chilling-plant-water-air-cooled-1.webp';
import tailor2 from '../../../../public/categories/tailor-made-power-saver-screw-scroll-chilling-plant-water-air-cooled-2.webp';
import tailor3 from '../../../../public/categories/tailor-made-power-saver-screw-scroll-chilling-plant-water-air-cooled-3.webp';

const images = [tailor1, tailor2, tailor3];

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
