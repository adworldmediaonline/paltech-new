import { ReverseOsmosisContent } from "@/components/landing/reverse-osmosis-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

import reverseOsmosis1 from '../../../../public/categories/reverse-osmosis-ro-1.webp';
import reverseOsmosis2 from '../../../../public/categories/reverse-osmosis-ro-2.webp';
import reverseOsmosis3 from '../../../../public/categories/reverse-osmosis-ro-3.webp';
import reverseOsmosis4 from '../../../../public/categories/reverse-osmosis-ro-4.webp';

const images = [reverseOsmosis1, reverseOsmosis2, reverseOsmosis3, reverseOsmosis4];

export const metadata: Metadata = {
  title: "Industrial Reverse Osmosis Systems | Paltech™ Cooling Tower Water Treatment",
  description: "Paltech™ provides scalable and energy-efficient RO plants for industrial water purification. Designed for cooling towers, mineral water, and process water treatment.",
  alternates: {
    canonical: '/other-services/reverse-osmosis-ro',
  },
  keywords: [
    "Reverse Osmosis System",
    "Industrial RO Plant",
    "Paltech™ RO Plant",
    "Cooling Tower Water Treatment RO",
    "Membrane Water Filtration",
    "High-Purity Water Manufacturing",
    "Scalable RO Plant",
    "Industrial Water Purification System",
    "Low TDS Water Production",
    "Automated RO System",
    "Energy Efficient Water Treatment",
    "RO Membrane Technology",
    "Industrial Water Treatment Solutions"
  ],
  openGraph: {
    title: "Industrial Reverse Osmosis Systems | Paltech™ Cooling Tower Water Treatment",
    description: "Paltech™ provides scalable and energy-efficient RO plants for industrial water purification. Designed for cooling towers, mineral water, and process water treatment.",
    type: "website",
  },
};

export default function ReverseOsmosisPage() {
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
              <BreadcrumbPage className="text-white font-semibold">Reverse Osmosis / R.O</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <ReverseOsmosisContent />
          </main>
          <USPSidebar />
        </div>
      </div>
    </>
  );
}

