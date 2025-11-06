import { FrpLaddersContent } from "@/components/landing/frp-ladders-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";
import ladders1 from '../../../../public/categories/frp-ladders-1.webp';
import ladders2 from '../../../../public/categories/frp-ladders-2.webp';
import ladders3 from '../../../../public/categories/frp-ladders-3.webp';
import ladders4 from '../../../../public/categories/frp-ladders-4.webp';

const images = [ladders1, ladders2, ladders3, ladders4];

export const metadata: Metadata = {
  title: "FRP Ladders | Non-Conductive Industrial Safety Solutions",
  description: "Premium FRP ladders with non-conductive, rust-proof, and lightweight design for industrial access, electrical safety, and corrosive environments.",
  keywords: [
    "FRP Ladders",
    "GRP Ladders",
    "Industrial Ladders",
    "Safety Ladders",
    "Non-Conductive Ladders",
    "Fiberglass Ladders",
    "Electrical Ladders",
    "FRP ladders for industrial applications",
    "Non-conductive fiberglass ladders for electrical safety",
    "Rust-proof FRP ladders for chemical plants",
    "Lightweight corrosion-resistant FRP ladders",
    "FRP ladders for offshore and marine applications",
    "Custom-height FRP ladders for industrial maintenance",
    "FRP extension ladders for high access",
    "Self-supported FRP stool ladders for maintenance tasks",
    "Industrial access FRP ladders for power transmission facilities",
    "FRP ladders for cooling towers and water treatment",
    "FRP ladders",
    "Fiberglass ladders",
    "Industrial safety ladders",
    "Non-conductive ladders",
    "Electrical safety ladders",
    "Corrosion-resistant ladders",
    "Lightweight industrial ladders",
    "GRP ladders",
    "Offshore platform ladders",
    "Chemical plant ladders",
    "FRP industrial access solutions",
    "Fiberglass safety ladders",
    "Non-metallic ladders for electrical hazards",
    "FRP maintenance ladders",
    "Industrial fiberglass step ladders",
    "Heavy-duty FRP ladders",
    "Rust-proof industrial ladders",
    "FRP ladder manufacturers",
    "GRP ladders for power plants",
    "Electrical utility FRP ladders"
  ],
  alternates: {
    canonical: '/paltech-frpgrp-structural-profiles/frp-ladders',
  },
  openGraph: {
    title: "FRP Ladders | Non-Conductive Industrial Safety Solutions",
    description: "Premium FRP ladders with non-conductive, rust-proof, and lightweight design for industrial access, electrical safety, and corrosive environments.",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      {/* Full-width Hero Slider */}
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
                <Link href="/paltech-frpgrp-structural-profiles" className="text-white/90 hover:text-white">FRP/GRP Structural Profiles</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/70" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white font-semibold">FRP Ladders</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      {/* Content Section with USP Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <FrpLaddersContent />
          </main>

          {/* USP Sidebar */}
          <USPSidebar />
        </div>
      </div>
    </>
  );
}
