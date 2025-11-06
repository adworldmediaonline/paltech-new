import { OtherServicesContent } from "@/components/landing/other-services-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cooling Tower Annual Maintenance & Services | Paltech™ Experts",
  description: "Paltech™ annual maintenance contracts and comprehensive services ensure optimized performance and longevity of cooling towers. Trusted by 9000+ clients worldwide.",
  keywords: [
    "Cooling Tower Annual Maintenance",
    "Cooling Tower Repair Service",
    "Paltech™ Cooling Maintenance",
    "Cooling Tower AMC",
    "Cooling Tower Inspection and Cleaning",
    "Cooling Tower Renovation",
    "Water Treatment for Cooling Towers",
    "Industrial Cooling Tower Maintenance",
    "Cooling Tower Consumables Supply",
    "Emergency Cooling Tower Repairs",
    "Cooling Tower Thermal Analysis",
    "Preventive Maintenance Cooling Towers",
    "Cooling Tower Servicing Company"
  ],
  openGraph: {
    title: "Cooling Tower Annual Maintenance & Services | Paltech™ Experts",
    description: "Paltech™ annual maintenance contracts and comprehensive services ensure optimized performance and longevity of cooling towers. Trusted by 9000+ clients worldwide.",
    type: "website",
  },
};

export default function OtherServicesPage() {
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
              <BreadcrumbPage className="text-white font-semibold">Other Services</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <OtherServicesContent />
          </main>
          <USPSidebar />
        </div>
      </div>
    </>
  );
}

