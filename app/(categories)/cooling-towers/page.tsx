import { CoolingTowersContent } from "@/components/landing/cooling-towers-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import coolingTowers1 from '../../../public/categories/cooling-towers-1.webp';
import coolingTowers2 from '../../../public/categories/cooling-towers-2.webp';
import coolingTowers3 from '../../../public/categories/cooling-towers-3.webp';
import coolingTowers4 from '../../../public/categories/cooling-towers-4.webp';

export default function CoolingTowersPage() {
  return (
    <>
      {/* Full-width Hero Slider */}
      <CategoryHero imageSrc="/categories/cooling-towers.png" images={[coolingTowers1, coolingTowers2, coolingTowers3, coolingTowers4]}>
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
