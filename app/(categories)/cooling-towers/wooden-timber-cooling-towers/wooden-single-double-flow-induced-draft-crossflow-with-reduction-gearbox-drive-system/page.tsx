import { WoodenTimberReductionGearboxDriveSystemContent } from "@/components/landing/wooden-single-double-flow-induced-draft-crossflow-with-reduction-gearbox-drive-system-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";
import reducer1 from '../../../../../public/categories/wooden-timber-single-double-flow-induced-draft-crossflow-with-reduction-reducer-drive-system-1.webp';
import reducer2 from '../../../../../public/categories/wooden-timber-single-double-flow-induced-draft-crossflow-with-reduction-reducer-drive-system-2.webp';
import reducer3 from '../../../../../public/categories/wooden-timber-single-double-flow-induced-draft-crossflow-with-reduction-reducer-drive-system-3.webp';
import reducer4 from '../../../../../public/categories/wooden-timber-single-double-flow-induced-draft-crossflow-with-reduction-reducer-drive-system-4.webp';

const images = [reducer1, reducer2, reducer3, reducer4];

export const metadata: Metadata = {
  title: "Wooden Reduction Gearbox Cooling Towers | Medium Capacity",
  description: "Medium capacity wooden/timber reduction gearbox cooling towers. Reliable, low-maintenance, and efficient. Request expert consultation today!",
  keywords: [
    "Wooden Cooling Towers",
    "Timber Cooling Towers",
    "Gearbox Cooling Towers",
    "Reduction Gear Cooling",
    "Industrial Cooling",
    "Crossflow Cooling",
    "Induced Draft Towers",
    "Wooden reduction gearbox cooling towers",
    "Timber single & double flow towers",
    "Induced draft timber cooling systems",
    "Medium capacity industrial cooling towers",
    "Spiral bevel gearbox fan assembly towers",
    "Industrial crossflow gearbox cooling towers",
    "Gear-driven wooden cooling towers",
    "Low maintenance medium capacity towers",
    "Custom engineered reduction gearbox towers",
    "Efficient timber cooling towers for HVAC",
    "Industrial cooling towers",
    "Wooden cooling tower manufacturer",
    "Timber cooling tower solutions",
    "Reduction gearbox drive cooling towers",
    "Medium capacity industrial cooling",
    "Crossflow wooden cooling towers",
    "Induced draft timber towers",
    "Energy-efficient wooden cooling towers",
    "Cooling tower maintenance and repair",
    "Gearbox fan industrial cooling towers",
    "Spiral bevel gear reducer fan assembly",
    "Dynamically balanced drive shaft cooling towers",
    "Weatherproofed timber cooling tower frame",
    "Galvanized joint fastened timber towers",
    "Optimized water distribution wooden towers",
    "Hot water basin spray target nozzles",
    "Medium capacity process cooling solutions",
    "Commercial and industrial timber towers",
    "Custom mechanical drive cooling systems",
    "Industrial timber cooling tower upgrades"
  ],
  alternates: {
    canonical: '/cooling-towers/wooden-timber-cooling-towers/wooden-single-double-flow-induced-draft-crossflow-with-reduction-gearbox-drive-system',
  },
  openGraph: {
    title: "Wooden Reduction Gearbox Cooling Towers | Medium Capacity",
    description: "Medium capacity wooden/timber reduction gearbox cooling towers. Reliable, low-maintenance, and efficient. Request expert consultation today!",
    type: "website",
  },
};

export default function WoodenTimberReductionGearboxDriveSystemPage() {
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
                <Link href="/cooling-towers" className="text-white/90 hover:text-white">Cooling Towers</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/70" />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/cooling-towers/wooden-timber-cooling-towers" className="text-white/90 hover:text-white">Wooden/Timber Cooling Towers</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/70" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white font-semibold">Reduction Gearbox Drive System</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      {/* Content Section with USP Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <WoodenTimberReductionGearboxDriveSystemContent />
          </main>

          {/* USP Sidebar */}
          <USPSidebar />
        </div>
      </div>
    </>
  );
}
