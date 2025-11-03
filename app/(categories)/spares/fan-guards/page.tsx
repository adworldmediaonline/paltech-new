import { FanGuardsContent } from "@/components/landing/fan-guards-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Metal Fan Screens & Guards | Paltech™ Cooling Tower Solutions",
  description: "Premium fan screens and guards for cooling towers and HVAC by Paltech™. Custom fabricated from galvanized or stainless steel, available in all sizes and mesh patterns.",
  keywords: [
    "Cooling Tower Fan Screen",
    "Cooling Tower Fan Guard",
    "Custom Fan Screen",
    "Paltech Metal Fan Guard",
    "Stainless Steel Fan Guard",
    "Galvanized Fan Screen",
    "HVAC Fan Guard",
    "Universal Fan Screen",
    "Commercial Cooling Tower Screen",
    "Debris Screen for Cooling Tower",
    "Rodent Guard for HVAC",
    "Bird Guard Fan Screen",
    "Custom Mesh Cooling Tower Screen",
    "MEP System Metal Screens"
  ],
  openGraph: {
    title: "Custom Metal Fan Screens & Guards | Paltech™ Cooling Tower Solutions",
    description: "Premium fan screens and guards for cooling towers and HVAC by Paltech™. Custom fabricated from galvanized or stainless steel, available in all sizes and mesh patterns.",
    type: "website",
  },
};

export default function FanGuardsPage() {
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
              <BreadcrumbPage className="text-white font-semibold">Fan Guards</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <FanGuardsContent />
          </main>
          <USPSidebar />
        </div>
      </div>
    </>
  );
}

