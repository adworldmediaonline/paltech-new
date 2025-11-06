import { WaterSofteningContent } from "@/components/landing/water-softening-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

import waterSoftening1 from '../../../../public/other-services/Water Softeness 1.webp';
import waterSoftening2 from '../../../../public/other-services/Water Softeness 2.webp';
import waterSoftening3 from '../../../../public/other-services/Water Softeness 3.webp';
import waterSoftening4 from '../../../../public/other-services/Water Softeness 4.webp';

const images = [waterSoftening1, waterSoftening2, waterSoftening3, waterSoftening4];

export const metadata: Metadata = {
  title: "Industrial Water Softening Systems for Cooling Towers | Paltech™",
  description: "Paltech™ water softening systems prevent scale and corrosion in cooling towers with high-capacity resin technology and automated regeneration.",
  alternates: {
    canonical: '/other-services/water-softening',
  },
  keywords: [
    "Cooling Tower Water Softening",
    "Industrial Water Softener",
    "Paltech™ Water Softening System",
    "Scale Prevention Cooling System",
    "Ion Exchange Water Softener",
    "Automated Water Softening Plant",
    "High Capacity Softening System",
    "Cooling Tower Water Treatment Solutions",
    "Calcium and Magnesium Removal",
    "Water Softener Resin",
    "Cooling Tower Scale Control",
    "Reduced Maintenance Water Softening",
    "Efficient Water Treatment Systems"
  ],
  openGraph: {
    title: "Industrial Water Softening Systems for Cooling Towers | Paltech™",
    description: "Paltech™ water softening systems prevent scale and corrosion in cooling towers with high-capacity resin technology and automated regeneration.",
    type: "website",
  },
};

export default function WaterSofteningPage() {
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
              <BreadcrumbPage className="text-white font-semibold">Water Softening</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <WaterSofteningContent />
          </main>
          <USPSidebar />
        </div>
      </div>
    </>
  );
}

