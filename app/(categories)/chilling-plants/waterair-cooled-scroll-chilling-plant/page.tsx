import { WaterAirCooledScrollChillingPlantContent } from "@/components/landing/waterair-cooled-scroll-chilling-plant-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import scroll1 from '../../../../public/categories/water-air-cooled-scroll-chilling-plants-1.webp';
import scroll2 from '../../../../public/categories/water-air-cooled-scroll-chilling-plants-2.webp';
import scroll3 from '../../../../public/categories/water-air-cooled-scroll-chilling-plants-3.webp';
import scroll4 from '../../../../public/categories/water-air-cooled-scroll-chilling-plants-4.webp';

const images = [scroll1, scroll2, scroll3, scroll4];

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
