import { PvcFilmFillsContent } from "@/components/landing/pvc-film-fills-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

import pvcFilmFills1 from '../../../../../public/categories/cooling-tower-pvc-fills.webp';

const images = [pvcFilmFills1];

export const metadata: Metadata = {
  title: "Cooling Tower Fill Solutions | Film & Splash Fill by Paltech™",
  description: "Paltech™ offers efficient corrosion-resistant cooling tower fill packs. Film-type, splash-type, and fill-less designs for maximum cooling and durability.",
  alternates: {
    canonical: '/spares/fills/pvc-film',
  },
  keywords: [
    "Cooling Tower Fill",
    "Film Fill Cooling Tower",
    "Splash Fill Cooling Tower",
    "Paltech™ Cooling Tower Fill",
    "Corrosion Resistant Fill Pack",
    "PVC Cooling Tower Fill",
    "Fill-less Cooling Tower",
    "Industrial Cooling Tower Components",
    "Chevron Pattern Film Fill",
    "High Temperature Cooling Tower Fill",
    "Contaminated Water Splash Fill",
    "Cooling Tower Efficiency Enhancer",
    "Cooling Tower Heat Exchange Media"
  ],
  openGraph: {
    title: "Cooling Tower Fill Solutions | Film & Splash Fill by Paltech™",
    description: "Paltech™ offers efficient corrosion-resistant cooling tower fill packs. Film-type, splash-type, and fill-less designs for maximum cooling and durability.",
    type: "website",
  },
};

export default function PvcFilmPage() {
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
              <BreadcrumbPage className="text-white font-semibold">PVC Film</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <PvcFilmFillsContent />
          </main>
          <USPSidebar />
        </div>
      </div>
    </>
  );
}

