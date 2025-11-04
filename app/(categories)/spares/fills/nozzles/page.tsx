import { CoolingTowerNozzlesContent } from "@/components/landing/cooling-tower-nozzles-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cooling Tower Spray Nozzles | Uniform Water Distribution by Paltech™",
  description: "Paltech™ spiral spray nozzles provide consistent, uniform water distribution for cooling towers. Durable polypropylene construction with low pressure, clog-resistant design.",
  keywords: [
    "Cooling Tower Spray Nozzle",
    "Spiral Spray Nozzle",
    "Paltech Spray Nozzle",
    "Uniform Water Distribution Nozzle",
    "Low Pressure Nozzle",
    "Non-Clogging Spray Nozzle",
    "Polypropylene Cooling Nozzle",
    "Industrial Water Spray Nozzle",
    "Cooling Tower Water Distribution",
    "Solid Cone Spray Nozzle",
    "Maintenance-Free Spray Nozzle",
    "High Temperature Spray Nozzle",
    "Cooling Tower Efficiency Enhancer"
  ],
  openGraph: {
    title: "Cooling Tower Spray Nozzles | Uniform Water Distribution by Paltech™",
    description: "Paltech™ spiral spray nozzles provide consistent, uniform water distribution for cooling towers. Durable polypropylene construction with low pressure, clog-resistant design.",
    type: "website",
  },
};

export default function NozzlesPage() {
  return (
    <>
      <CategoryHero>
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
                <Link href="/spares" className="text-white/90 hover:text-white">Spares</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/70" />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/spares/fills" className="text-white/90 hover:text-white">Fills</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/70" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white font-semibold">Nozzles</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <CoolingTowerNozzlesContent />
          </main>
          <USPSidebar />
        </div>
      </div>
    </>
  );
}

