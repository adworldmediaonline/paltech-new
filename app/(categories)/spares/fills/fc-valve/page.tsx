import { FlowControlValvesContent } from "@/components/landing/flow-control-valves-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

import fcValve1 from '../../../../../public/categories/fc-valve.webp';

const images = [fcValve1];

export const metadata: Metadata = {
  title: "Durable Flow Control Valves for Cooling Towers | Paltech™",
  description: "Paltech™ heavy-duty flow control valves designed for cooling towers. Low head loss, corrosion-resistant, available in multiple sizes and capacities.",
  alternates: {
    canonical: '/spares/fills/fc-valve',
  },
  keywords: [
    "Flow Control Valve",
    "Cooling Tower Flow Valve",
    "Paltech™ Flow Control Valve",
    "Low Head Loss Valve",
    "Cast Iron Valve",
    "Stainless Steel Valve Stem",
    "Corrosion Resistant Cooling Valve",
    "Industrial Flow Control Valve",
    "Flow Regulation Valve",
    "Cooling Tower Valve Sizes",
    "Heavy Duty Valve",
    "Energy Efficient Valve",
    "Valve Maintenance Cooling Tower"
  ],
  openGraph: {
    title: "Durable Flow Control Valves for Cooling Towers | Paltech™",
    description: "Paltech™ heavy-duty flow control valves designed for cooling towers. Low head loss, corrosion-resistant, available in multiple sizes and capacities.",
    type: "website",
  },
};

export default function FCValvePage() {
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
              <BreadcrumbPage className="text-white font-semibold">FC Valve</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <FlowControlValvesContent />
          </main>
          <USPSidebar />
        </div>
      </div>
    </>
  );
}

