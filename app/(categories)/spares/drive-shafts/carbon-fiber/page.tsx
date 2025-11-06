import { CarbonFiberDriveShaftsContent } from "@/components/landing/carbon-fiber-drive-shafts-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

import carbonFiberDriveShafts1 from '../../../../../public/categories/drive-shaftshdgms-carbon-fiber.webp';

const images = [carbonFiberDriveShafts1];

export const metadata: Metadata = {
  title: "Carbon Fiber Drive Shafts | Paltech™ Advanced Cooling Tower Components",
  description: "Paltech™ Carbon Fiber Drive Shafts – lightweight, high-torque, corrosion-resistant, and maintenance-free solutions for modern industrial cooling towers.",
  keywords: [
    "Carbon Fiber Drive Shaft",
    "Composite Drive Shaft",
    "Cooling Tower Drive Shaft",
    "Industrial Drive Shaft Manufacturer",
    "Paltech™ Carbon Fiber Shaft",
    "Non-Lubricated Drive Shaft",
    "High Torque Drive Shaft",
    "Lightweight Cooling Tower Shaft",
    "ISO Certified Cooling Tower Components",
    "Carbon Composite Coupling Shaft",
    "Industrial Cooling Tower Spares",
    "Long Span Drive Shaft",
    "Maintenance Free Cooling Tower Shaft",
    "Carbon Fiber Cooling Tower Component",
    "Paltech™ Cooling Equipment"
  ],
  openGraph: {
    title: "Carbon Fiber Drive Shafts | Paltech™ Advanced Cooling Tower Components",
    description: "Paltech™ Carbon Fiber Drive Shafts – lightweight, high-torque, corrosion-resistant, and maintenance-free solutions for modern industrial cooling towers.",
    type: "website",
  },
};

export default function CarbonFiberDriveShaftsPage() {
  return (
    <>
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
                <Link href="/spares" className="text-white/90 hover:text-white">Spares</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/70" />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/spares/drive-shafts" className="text-white/90 hover:text-white">Drive Shafts</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/70" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white font-semibold">Carbon Fiber</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <CarbonFiberDriveShaftsContent />
          </main>
          <USPSidebar />
        </div>
      </div>
    </>
  );
}

