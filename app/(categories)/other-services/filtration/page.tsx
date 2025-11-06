import { FiltrationContent } from "@/components/landing/filtration-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

import filtration1 from '../../../../public/other-services/Filtration 1.webp';
import filtration2 from '../../../../public/other-services/Filtration 2.webp';
import filtration3 from '../../../../public/other-services/Filtration 3.webp';
import filtration4 from '../../../../public/other-services/Filtration 4.webp';

const images = [filtration1, filtration2, filtration3, filtration4];

export const metadata: Metadata = {
  title: "Industrial Cooling Tower Filtration Systems | Paltech™ Water Treatment",
  description: "Paltech™ offers comprehensive filtration solutions for cooling towers, including sand, activated carbon, multimedia, and cartridge filters to enhance water quality and system efficiency.",
  alternates: {
    canonical: '/other-services/filtration',
  },
  keywords: [
    "Cooling Tower Filtration",
    "Industrial Water Filtration",
    "Paltech™ Filtration Systems",
    "Cooling Water Treatment",
    "Sand Filter Cooling Tower",
    "Activated Carbon Filtration",
    "Multimedia Water Filter",
    "Cartridge Water Filter",
    "Cooling Tower Water Quality",
    "Suspended Solids Filtration",
    "Water Treatment Chemicals Reduction",
    "Industrial Cooling Water Systems",
    "Side Stream Filtration"
  ],
  openGraph: {
    title: "Industrial Cooling Tower Filtration Systems | Paltech™ Water Treatment",
    description: "Paltech™ offers comprehensive filtration solutions for cooling towers, including sand, activated carbon, multimedia, and cartridge filters to enhance water quality and system efficiency.",
    type: "website",
  },
};

export default function FiltrationPage() {
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
              <BreadcrumbPage className="text-white font-semibold">Filtration</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <FiltrationContent />
          </main>
          <USPSidebar />
        </div>
      </div>
    </>
  );
}

