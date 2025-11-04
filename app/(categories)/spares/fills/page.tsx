import { FillsContent } from "@/components/landing/fills-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

import fills1 from '../../../../public/categories/fills.webp';

const images = [fills1];
export const metadata: Metadata = {
  title: "Cooling Tower Fill Solutions | Film & Splash Fill by Paltech™",
  description: "Paltech™ offers efficient corrosion-resistant cooling tower fill packs. Film-type, splash-type, and fill-less designs for maximum cooling and durability.",
  keywords: [
    "Cooling Tower Fill",
    "Film Fill Cooling Tower",
    "Splash Fill Cooling Tower",
    "Paltech Cooling Tower Fill",
    "Corrosion Resistant Fill Pack",
    "PVC Cooling Tower Fill",
    "Fill-less Cooling Tower",
    "Industrial Cooling Tower Components",
    "Chevron Pattern Film Fill",
    "High Temperature Cooling Tower Fill",
    "Contaminated Water Splash Fill",
    "Cooling Tower Efficiency Enhancer",
    "Cooling Tower Heat Exchange Media",
    "PVC Film Fills",
    "PVC Splash Fills",
    "PP Ball Fills",
    "Trickle Grid Fills"
  ],
  openGraph: {
    title: "Cooling Tower Fill Solutions | Film & Splash Fill by Paltech™",
    description: "Paltech™ offers efficient corrosion-resistant cooling tower fill packs. Film-type, splash-type, and fill-less designs for maximum cooling and durability.",
    type: "website",
  },
};

export default function FillsPage() {
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
              <BreadcrumbPage className="text-white font-semibold">Fills</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <FillsContent />
          </main>
          <USPSidebar />
        </div>
      </div>
    </>
  );
}

