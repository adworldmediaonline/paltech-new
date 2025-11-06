import { PackagedWoodenDoubleFlowInducedDraftCrossflowContent } from "@/components/landing/packaged-wooden-double-flow-induced-draft-crossflow-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";
import packaged1 from '../../../../../public/categories/packaged-wooden-timber-double-flow-induced-draft-crossflow-cooling-towers-1.webp';
import packaged2 from '../../../../../public/categories/packaged-wooden-timber-double-flow-induced-draft-crossflow-cooling-towers-2.webp';
import packaged3 from '../../../../../public/categories/packaged-wooden-timber-double-flow-induced-draft-crossflow-cooling-towers-3.webp';
import packaged4 from '../../../../../public/categories/packaged-wooden-timber-double-flow-induced-draft-crossflow-cooling-towers-4.webp';

const images = [packaged1, packaged2, packaged3, packaged4];

export const metadata: Metadata = {
  title: "Packaged Wooden Cooling Towers | Double Flow Crossflow",
  description: "Packaged wooden/timber double flow crossflow cooling towers. Efficient, space-saving, low-maintenance solutions for industrial and HVAC applications.",
  keywords: [
    "Wooden Cooling Towers",
    "Timber Cooling Towers",
    "Packaged Cooling Towers",
    "Crossflow Cooling",
    "Industrial Cooling",
    "HVAC Cooling",
    "Double Flow Towers",
    "Packaged wooden double flow cooling towers",
    "Timber double flow crossflow towers",
    "Induced draft wooden cooling systems",
    "Industrial space-saving cooling towers",
    "Pre-assembled timber cooling towers",
    "Low-maintenance packaged cooling towers",
    "Vertical discharge wooden cooling towers",
    "Packaged cooling towers for high temperatures",
    "Marine-grade timber cooling systems",
    "Efficient industrial double flow crossflow towers",
    "Industrial cooling towers",
    "Wooden cooling tower manufacturer",
    "Packaged timber cooling towers",
    "Double flow crossflow cooling towers",
    "Low-maintenance industrial cooling systems",
    "HVAC cooling towers",
    "Vertical discharge cooling towers",
    "Medium to large capacity cooling towers",
    "Pre-assembled industrial cooling towers",
    "Energy-efficient wooden cooling towers",
    "Motor outside fan cylinder cooling towers",
    "Chemically treated timber cooling towers",
    "Hot water basin spray nozzles",
    "Fiber glass/wooden louvers cooling systems",
    "Durable fan cylinder construction towers",
    "High-temperature resistant timber towers",
    "Space-efficient packaged cooling towers",
    "Brackish water industrial cooling systems",
    "Industrial process cooling timber towers",
    "Complete packaged double flow crossflow towers"
  ],
  alternates: {
    canonical: '/cooling-towers/wooden-timber-cooling-towers/packaged-wooden-double-flow-induced-draft-crossflow',
  },
  openGraph: {
    title: "Packaged Wooden Cooling Towers | Double Flow Crossflow",
    description: "Packaged wooden/timber double flow crossflow cooling towers. Efficient, space-saving, low-maintenance solutions for industrial and HVAC applications.",
    type: "website",
  },
};

export default function PackagedWoodenDoubleFlowInducedDraftCrossflowPage() {
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
              <BreadcrumbPage className="text-white font-semibold">Packaged Wooden Double Flow Induced Draft Crossflow</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      {/* Content Section with USP Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <PackagedWoodenDoubleFlowInducedDraftCrossflowContent />
          </main>

          {/* USP Sidebar */}
          <USPSidebar />
        </div>
      </div>
    </>
  );
}
