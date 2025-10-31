import { ReciprocatingWaterAirCooledChillingPlantContent } from "@/components/landing/reciprocating-waterair-cooled-chilling-plant-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import reciprocating1 from '../../../../public/categories/reciprocating-water-air-cooled-chilling-plants-1.webp';
import reciprocating2 from '../../../../public/categories/reciprocating-water-air-cooled-chilling-plants-2.webp';
import reciprocating3 from '../../../../public/categories/reciprocating-water-air-cooled-chilling-plants-3.webp';
import reciprocating4 from '../../../../public/categories/reciprocating-water-air-cooled-chilling-plants-4.webp';

const images = [reciprocating1, reciprocating2, reciprocating3, reciprocating4];

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
