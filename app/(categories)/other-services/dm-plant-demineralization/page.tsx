import { DmPlantContent } from "@/components/landing/dm-plant-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

import dmPlant1 from '../../../../public/categories/dm-plant-demineralization-1.webp';
import dmPlant2 from '../../../../public/categories/dm-plant-demineralization-2.webp';
import dmPlant3 from '../../../../public/categories/dm-plant-demineralization-3.webp';
import dmPlant4 from '../../../../public/categories/dm-plant-demineralization-4.webp';

const images = [dmPlant1, dmPlant2, dmPlant3, dmPlant4];

export const metadata: Metadata = {
  title: "Industrial Demineralization Plants | Paltech™ Water Treatment Solutions",
  description: "Paltech™ offers advanced demineralization plants producing ultra-pure water for cooling towers. Enhance efficiency, reduce scaling and corrosion with our modular systems.",
  alternates: {
    canonical: '/other-services/dm-plant-demineralization',
  },
  keywords: [
    "Demineralization Plant",
    "Cooling Tower Water Treatment",
    "Industrial Water Demineralization",
    "Paltech™ Demineralized Water",
    "Ion Exchange Water Treatment",
    "High Purity Water Systems",
    "Scale Prevention Water Treatment",
    "Modular Demineralization Plants",
    "Industrial Cooling Water Purification",
    "Chemical-Free Water Treatment",
    "Automated Demineralization System",
    "Corrosion Control Water Treatment",
    "Efficient Water Purification for Cooling"
  ],
  openGraph: {
    title: "Industrial Demineralization Plants | Paltech™ Water Treatment Solutions",
    description: "Paltech™ offers advanced demineralization plants producing ultra-pure water for cooling towers. Enhance efficiency, reduce scaling and corrosion with our modular systems.",
    type: "website",
  },
};

export default function DmPlantPage() {
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
                <Link href="/other-services" className="text-white/90 hover:text-white">Other Services</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/70" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white font-semibold">DM Plant: Demineralization</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <DmPlantContent />
          </main>
          <USPSidebar />
        </div>
      </div>
    </>
  );
}

