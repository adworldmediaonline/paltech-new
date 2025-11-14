import { UltrapureWaterContent } from "@/components/landing/ultrapure-water-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

import ultrapureWater1 from '../../../../public/categories/ultrapure-water-1.webp';
import ultrapureWater2 from '../../../../public/categories/ultrapure-water-2.webp';
import ultrapureWater3 from '../../../../public/categories/ultrapure-water-3.webp';
import ultrapureWater4 from '../../../../public/categories/ultrapure-water-4.webp';

const images = [ultrapureWater1, ultrapureWater2, ultrapureWater3, ultrapureWater4];

export const metadata: Metadata = {
  title: "Ultrapure Water Systems for Semiconductor & Pharma | Paltech™",
  description: "Paltech™ ultrapure water systems provide industry-leading purity for semiconductor and pharmaceutical applications via advanced demineralization and polishing technology.",
  alternates: {
    canonical: '/other-services/ultrapure-water',
  },
  keywords: [
    "Ultrapure Water System",
    "Semiconductor Ultrapure Water",
    "Pharmaceutical Water Purification",
    "Paltech™ Water Treatment",
    "Mixed Bed Demineralization",
    "Electrodeionization Plant",
    "High Purity Water System",
    "Advanced Water Polishing",
    "Water Conductivity Control",
    "Ionic Removal Water Treatment",
    "Clean Water Manufacturing",
    "Precision Industry Water",
    "Sustainable Water Treatment Systems"
  ],
  openGraph: {
    title: "Ultrapure Water Systems for Semiconductor & Pharma | Paltech™",
    description: "Paltech™ ultrapure water systems provide industry-leading purity for semiconductor and pharmaceutical applications via advanced demineralization and polishing technology.",
    type: "website",
  },
};

export default function UltrapureWaterPage() {
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
              <BreadcrumbPage className="text-white font-semibold">Ultrapure Water</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <UltrapureWaterContent />
          </main>
          <USPSidebar />
        </div>
      </div>
    </>
  );
}

