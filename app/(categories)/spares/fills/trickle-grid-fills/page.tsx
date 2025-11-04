import { TrickleGridFillsContent } from "@/components/landing/trickle-grid-fills-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

import trickleGridFills1 from '../../../../../public/categories/trickle-grid-fills.webp';

const images = [trickleGridFills1];


export const metadata: Metadata = {
  title: "Trickle Grid Fills for Cooling Towers | High-Efficiency Fill Media by Paltech™",
  description: "Paltech™ trickle grid fills provide uniform water distribution and enhanced heat transfer for industrial cooling towers. Durable PP/PVC construction with low maintenance.",
  keywords: [
    "Trickle Grid Fill",
    "Cooling Tower Trickle Fill",
    "Paltech Trickle Grid",
    "High Efficiency Cooling Tower Fill",
    "Uniform Water Distribution Fill",
    "Corrosion Resistant Cooling Fill",
    "Industrial Cooling Tower Media",
    "Low Fouling Cooling Fill",
    "Evaporative Cooling Media",
    "Thin Film Water Fill",
    "Mechanical Draft Fill",
    "Modular Cooling Tower Fill Media",
    "Thermal Efficiency Cooling Fill"
  ],
  openGraph: {
    title: "Trickle Grid Fills for Cooling Towers | High-Efficiency Fill Media by Paltech™",
    description: "Paltech™ trickle grid fills provide uniform water distribution and enhanced heat transfer for industrial cooling towers. Durable PP/PVC construction with low maintenance.",
    type: "website",
  },
};

export default function TrickleGridFillsPage() {
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
              <BreadcrumbPage className="text-white font-semibold">Trickle Grid Fills</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <TrickleGridFillsContent />
          </main>
          <USPSidebar />
        </div>
      </div>
    </>
  );
}

