import { PPBallFillsContent } from "@/components/landing/pp-ball-fills-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

import ppBallFills1 from '../../../../../public/categories/pp-ball-fills.webp';

const images = [ppBallFills1];
export const metadata: Metadata = {
  title: "PP Ball Fills for Cooling Towers | Durable Polypropylene Fills by Paltech™",
  description: "Paltech™ offers high-efficiency polypropylene (PP) ball fills designed for optimal cooling tower heat transfer and chemical resistance in industrial applications.",
  keywords: [
    "PP Ball Fill",
    "Polypropylene Ball Fill Cooling Tower",
    "Cooling Tower Fill Media",
    "Paltech Ball Fills",
    "Chemical Resistant Cooling Tower Fill",
    "Industrial Cooling Tower Media",
    "Low Fouling Fill Pack",
    "Durable Cooling Tower Fill Material",
    "Ball-Shaped Cooling Tower Fill",
    "Thermal Efficiency Cooling Fill",
    "Modular Cooling Tower Media",
    "Easy Maintenance Cooling Fill",
    "Corrosion Resistant Fill Media"
  ],
  openGraph: {
    title: "PP Ball Fills for Cooling Towers | Durable Polypropylene Fills by Paltech™",
    description: "Paltech™ offers high-efficiency polypropylene (PP) ball fills designed for optimal cooling tower heat transfer and chemical resistance in industrial applications.",
    type: "website",
  },
};

export default function PPBallFillsPage() {
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
              <BreadcrumbPage className="text-white font-semibold">PP Ball Fills</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <PPBallFillsContent />
          </main>
          <USPSidebar />
        </div>
      </div>
    </>
  );
}

