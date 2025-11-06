import { PaltechFrpGrpStructuralProfilesContent } from "@/components/landing/paltech-frpgrp-structural-profiles-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";
import frpGrp1 from '../../../public/categories/frp-grp-structural-profiles-1.webp';
import frpGrp2 from '../../../public/categories/frp-grp-structural-profiles-2.webp';
import frpGrp3 from '../../../public/categories/frp-grp-structural-profiles-3.webp';

const images = [frpGrp1, frpGrp2, frpGrp3];

export const metadata: Metadata = {
  title: "FRP/GRP Structural Profiles | Pultruded Composite Solutions",
  description: "Premium FRP/GRP structural profiles & pultruded sections. Lightweight, corrosion-resistant composites for industrial, construction & infrastructure use.",
  keywords: [
    "FRP Profiles",
    "GRP Profiles",
    "Pultruded Sections",
    "Composite Profiles",
    "Industrial Composites",
    "FRP Structures",
    "GRP Sections",
    "Structural Composites",
    "FRP structural profiles for industry",
    "GRP pultruded structural sections",
    "Corrosion-resistant FRP profiles",
    "Lightweight composite structural profiles",
    "FRP profiles for chemical plants",
    "GRP sections for construction",
    "Electrical non-conductive FRP profiles",
    "Pultruded FRP shapes and dimensions",
    "Custom FRP structural profiles",
    "FRP walkways, ladders, and handrails",
    "FRP gratings and deck panels",
    "FRP cable trays and solar structures",
    "FRP fencing and wall panels",
    "FRP tanks and storage solutions",
    "Pultruded composite profiles for infrastructure",
    "FRP pultrusions",
    "GRP structural profiles",
    "Composite structural profiles",
    "FRP sheets and panels",
    "Industrial FRP components",
    "Pultruded composites",
    "Lightweight industrial composites",
    "Corrosion-resistant profiles",
    "Custom FRP sections",
    "FRP decking and gratings",
    "FRP ladders and handrails",
    "GRP structural beams",
    "FRP I-beams, C-channels, angles",
    "Pultruded rods and tubes",
    "FRP chequered plates",
    "FRP ducts and vent pipes",
    "FRP insulation and non-conductive supports",
    "FRP walkways for food & beverage industry",
    "FRP platforms for chemical processing",
    "GRP structures for telecom and defense"
  ],
  alternates: {
    canonical: '/paltech-frpgrp-structural-profiles',
  },
  openGraph: {
    title: "FRP/GRP Structural Profiles | Pultruded Composite Solutions",
    description: "Premium FRP/GRP structural profiles & pultruded sections. Lightweight, corrosion-resistant composites for industrial, construction & infrastructure use.",
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
              <BreadcrumbPage className="text-white font-semibold">FRP/GRP Structural Profiles</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      {/* Content Section with USP Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <PaltechFrpGrpStructuralProfilesContent />
          </main>

          {/* USP Sidebar */}
          <USPSidebar />
        </div>
      </div>
    </>
  );
}
