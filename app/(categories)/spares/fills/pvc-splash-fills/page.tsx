import { PVCSplashFillsContent } from "@/components/landing/pvc-splash-fills-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

import pvcSplashFills1 from '../../../../../public/categories/pvc-splash-fills.webp';

const images = [pvcSplashFills1];


export const metadata: Metadata = {
  title: "PVC Splash Fills for Cooling Towers | Durable Fill Media by Paltech™",
  description: "Paltech™ PVC splash fills enhance cooling tower efficiency by increasing water-air contact. Corrosion resistant, reliable, and ideal for contaminated water conditions.",
  keywords: [
    "PVC Splash Fill",
    "Cooling Tower Splash Fill",
    "Splash Fill Media",
    "Paltech Splash Fill",
    "Corrosion Resistant Splash Fill",
    "Industrial Cooling Tower Fill",
    "PVC Cooling Tower Media",
    "Splash Fill for Contaminated Water",
    "Water Droplet Cooling Fill",
    "Heat Transfer Fill Media",
    "Fouling Resistant Cooling Tower Fill",
    "Durable Splash Fill Pack",
    "Enhanced Evaporation Cooling Fill"
  ],
  openGraph: {
    title: "PVC Splash Fills for Cooling Towers | Durable Fill Media by Paltech™",
    description: "Paltech™ PVC splash fills enhance cooling tower efficiency by increasing water-air contact. Corrosion resistant, reliable, and ideal for contaminated water conditions.",
    type: "website",
  },
};

export default function PVCSplashFillsPage() {
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
                <Link href="/spares/fills" className="text-white/90 hover:text-white">Fills</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/70" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white font-semibold">PVC Splash Fills</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <PVCSplashFillsContent />
          </main>
          <USPSidebar />
        </div>
      </div>
    </>
  );
}

