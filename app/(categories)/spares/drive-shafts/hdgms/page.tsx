import { HdgmsDriveShaftsContent } from "@/components/landing/hdgms-drive-shafts-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

import hdgmsDriveShafts1 from '../../../../../public/categories/drive-shafts-stainless-steel.webp';

const images = [hdgmsDriveShafts1];

export const metadata: Metadata = {
  title: "HDGMS Drive Shafts | Paltech™ High-Density Composite Cooling Tower Components",
  description: "Paltech™ HDGMS Drive Shafts – high-density glass fiber reinforced composite shafts offering superior strength, corrosion resistance, and reliable performance for industrial cooling towers.",
  alternates: {
    canonical: '/spares/drive-shafts/hdgms',
  },
  keywords: [
    "HDGMS Drive Shaft",
    "High-Density Composite Drive Shaft",
    "Glass Fiber Drive Shaft",
    "Cooling Tower Drive Shaft",
    "Industrial Drive Shaft",
    "Paltech™ HDGMS Shaft",
    "Corrosion Resistant Drive Shaft",
    "Composite Cooling Tower Shaft",
    "ISO Certified Cooling Tower Components",
    "Industrial Cooling Tower Spares",
    "Low Maintenance Drive Shaft",
    "Cooling Tower Power Transmission",
    "Paltech™ Cooling Equipment",
    "FRP Cooling Tower Components",
    "Industrial Shaft Manufacturer"
  ],
  openGraph: {
    title: "HDGMS Drive Shafts | Paltech™ High-Density Composite Cooling Tower Components",
    description: "Paltech™ HDGMS Drive Shafts – high-density glass fiber reinforced composite shafts offering superior strength, corrosion resistance, and reliable performance for industrial cooling towers.",
    type: "website",
  },
};

export default function HdgmsDriveShaftsPage() {
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
              <BreadcrumbPage className="text-white font-semibold">HDGMS</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <HdgmsDriveShaftsContent />
          </main>
          <USPSidebar />
        </div>
      </div>
    </>
  );
}

