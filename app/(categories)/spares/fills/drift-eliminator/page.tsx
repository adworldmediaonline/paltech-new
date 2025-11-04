import { DriftEliminatorsContent } from "@/components/landing/drift-eliminators-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drift Eliminators for Cooling Towers | Efficient Water Conservation by Paltech™",
  description: "Paltech™ XCEL Drift Eliminators minimize water drift loss to 0.005% or 0.0005% with advanced 6-pass models. Fire-retardant PVC, low pressure drop, energy-saving design.",
  keywords: [
    "Drift Eliminator",
    "Cooling Tower Drift Eliminator",
    "Paltech Drift Eliminator",
    "Low Drift Cooling Tower Fill",
    "Water Loss Reduction Fill",
    "Fire-Retardant Drift Eliminator",
    "Energy Efficient Cooling Tower Media",
    "XCEL Drift Eliminator",
    "Chevron Pattern Drift Eliminator",
    "Structural Rigidity Cooling Fill",
    "Factory Mutual Approved Fill",
    "Low Airflow Resistance Fill",
    "Cooling Tower Water Conservation Media"
  ],
  openGraph: {
    title: "Drift Eliminators for Cooling Towers | Efficient Water Conservation by Paltech™",
    description: "Paltech™ XCEL Drift Eliminators minimize water drift loss to 0.005% or 0.0005% with advanced 6-pass models. Fire-retardant PVC, low pressure drop, energy-saving design.",
    type: "website",
  },
};

export default function DriftEliminatorPage() {
  return (
    <>
      <CategoryHero>
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
              <BreadcrumbPage className="text-white font-semibold">Drift Eliminator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <DriftEliminatorsContent />
          </main>
          <USPSidebar />
        </div>
      </div>
    </>
  );
}

