import { FrpCorrugatedSheetsContent } from "@/components/landing/frp-corrugated-sheets-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";
import corrugated1 from '../../../../public/categories/frp-corrugated-sheets-1.webp';
import corrugated2 from '../../../../public/categories/frp-corrugated-sheets-2.webp';
import corrugated3 from '../../../../public/categories/frp-corrugated-sheets-3.webp';
import corrugated4 from '../../../../public/categories/frp-corrugated-sheets-4.webp';

const images = [corrugated1, corrugated2, corrugated3, corrugated4];

export const metadata: Metadata = {
  title: "FRP Corrugated Sheets | Corrosion-Resistant Roofing Solutions",
  description: "High-strength FRP corrugated sheets with corrosion, fire, and weather resistance. Ideal for industrial, residential, and agricultural roofing applications.",
  keywords: [
    "FRP Sheets",
    "GRP Sheets",
    "Corrugated Sheets",
    "FRP Roofing",
    "GRP Roofing",
    "Composite Sheets",
    "Industrial Roofing",
    "FRP corrugated sheets for roofing",
    "Corrosion-resistant FRP roofing panels",
    "Fire-retardant GRP corrugated sheets",
    "Lightweight FRP panels for industrial roofing",
    "Weather-resistant FRP corrugated sheets",
    "FRP sheets for chemical plants",
    "GRP sheets for agricultural sheds",
    "FRP panels for transportation shelters",
    "FRP roofing solutions for residential applications",
    "Durable FRP corrugated panels for outdoor use",
    "FRP sheets with high tensile strength",
    "Acid and alkali resistant FRP sheets",
    "FRP panels for industrial and commercial roofing",
    "FRP corrugated sheets",
    "GRP roofing sheets",
    "Corrosion-resistant roofing",
    "Lightweight FRP sheets",
    "Industrial FRP roofing",
    "FRP panels for construction",
    "Fire-retardant corrugated sheets",
    "Composite roofing sheets",
    "GRP sheets for industrial use",
    "Weatherproof FRP roofing panels",
    "Fiberglass reinforced plastic sheets",
    "Industrial roofing panels",
    "FRP roofing for chemical facilities",
    "GRP agricultural roofing sheets",
    "Lightweight composite panels",
    "High-strength FRP roofing solutions",
    "FRP sheets for industrial applications",
    "GRP sheets for transport shelters",
    "Corrosion-proof FRP panels",
    "FRP panels for environmental resistance"
  ],
  alternates: {
    canonical: '/paltech-frpgrp-structural-profiles/frp-corrugated-sheets',
  },
  openGraph: {
    title: "FRP Corrugated Sheets | Corrosion-Resistant Roofing Solutions",
    description: "High-strength FRP corrugated sheets with corrosion, fire, and weather resistance. Ideal for industrial, residential, and agricultural roofing applications.",
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
              <BreadcrumbPage className="text-white font-semibold">FRP Corrugated Sheets</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      {/* Content Section with USP Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <FrpCorrugatedSheetsContent />
          </main>

          {/* USP Sidebar */}
          <USPSidebar />
        </div>
      </div>
    </>
  );
}
