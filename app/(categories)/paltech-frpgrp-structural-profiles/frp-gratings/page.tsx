import { FrpGratingsContent } from "@/components/landing/frp-gratings-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";
import gratings1 from '../../../../public/categories/frp-gratings-1.webp';
import gratings2 from '../../../../public/categories/frp-gratings-2.webp';
import gratings3 from '../../../../public/categories/frp-gratings-3.webp';
import gratings4 from '../../../../public/categories/frp-gratings-4.webp';

const images = [gratings1, gratings2, gratings3, gratings4];

export const metadata: Metadata = {
  title: "FRP Gratings | Corrosion-Resistant Industrial Walkways",
  description: "Premium FRP gratings with superior corrosion resistance and minimal maintenance, ideal for industrial walkways, platforms, cooling towers, and chemical plants.",
  keywords: [
    "FRP Gratings",
    "GRP Gratings",
    "Industrial Gratings",
    "Walkway Gratings",
    "Platform Gratings",
    "Corrosion-Resistant Gratings",
    "Pultruded Gratings",
    "FRP gratings for industrial walkways",
    "Corrosion-resistant FRP platform gratings",
    "Pultruded FRP gratings for chemical plants",
    "Heavy-duty FRP gratings for cooling towers",
    "GRP gratings for offshore platforms",
    "FRP T-bar and I-bar gratings",
    "Lightweight corrosion-resistant FRP gratings",
    "Industrial access FRP gratings for wastewater treatment",
    "FRP gratings for marine and petrochemical applications",
    "Custom-span FRP gratings for structural platforms",
    "Minimal maintenance FRP gratings for industrial use",
    "Pultruded FRP load-bearing gratings",
    "FRP gratings",
    "GRP gratings",
    "Pultruded gratings",
    "Corrosion-resistant gratings",
    "Industrial walkways",
    "FRP flooring panels",
    "Platform gratings",
    "Lightweight industrial gratings",
    "Offshore platform gratings",
    "Chemical plant gratings",
    "Fiberglass reinforced plastic gratings",
    "Industrial FRP flooring solutions",
    "Non-corrosive structural gratings",
    "FRP walkway panels",
    "GRP access platforms",
    "Load-bearing FRP gratings",
    "FRP marine deck gratings",
    "Industrial corrosion-resistant platforms",
    "FRP structural walkways",
    "GRP safety gratings"
  ],
  alternates: {
    canonical: '/paltech-frpgrp-structural-profiles/frp-gratings',
  },
  openGraph: {
    title: "FRP Gratings | Corrosion-Resistant Industrial Walkways",
    description: "Premium FRP gratings with superior corrosion resistance and minimal maintenance, ideal for industrial walkways, platforms, cooling towers, and chemical plants.",
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
              <BreadcrumbPage className="text-white font-semibold">FRP Gratings</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      {/* Content Section with USP Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <FrpGratingsContent />
          </main>

          {/* USP Sidebar */}
          <USPSidebar />
        </div>
      </div>
    </>
  );
}
