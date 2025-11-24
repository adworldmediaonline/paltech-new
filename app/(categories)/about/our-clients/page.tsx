import { OurClientsContent } from "@/components/landing/our-clients-content";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paltech™ Trusted by 9,000+ Industrial Clients Worldwide",
  description: "Serving 9,000+ clients across 46+ countries with ISO-certified cooling towers & heat exchangers. Trusted industrial solutions for 37+ years.",
  keywords: [
    "Industrial Cooling",
    "Cooling Towers",
    "Heat Exchangers",
    "HVAC Systems",
    "Chilling Plants",
    "ISO-certified industrial cooling solutions",
    "Cooling towers for power generation & steel industry",
    "Trusted cooling equipment supplier worldwide",
    "Energy-efficient industrial heat exchangers",
    "Industrial process cooling solutions for factories",
    "HVAC integration for industrial facilities",
    "Industrial cooling systems for sugar & food processing",
    "Industrial cooling solutions",
    "Cooling tower manufacturer",
    "Heat exchanger supplier",
    "Energy-efficient cooling towers",
    "ISO 9001:2015 cooling tower company",
    "Industrial HVAC solutions",
    "Custom-designed industrial cooling systems",
    "Cooling tower maintenance services",
    "Process cooling systems provider",
    "Global industrial cooling equipment supplier",
    "Trusted by 11,000+ organizations",
    "Exporting cooling towers to 46+ countries",
    "Low power consumption cooling towers",
    "Low maintenance industrial cooling solutions",
    "Precision-engineered cooling systems",
    "CTI USA member cooling towers"
  ],
  alternates: {
    canonical: '/about/our-clients',
  },
  openGraph: {
    title: "Paltech™ Trusted by 9,000+ Industrial Clients Worldwide",
    description: "Serving 9,000+ clients across 46+ countries with ISO-certified cooling towers & heat exchangers. Trusted industrial solutions for 37+ years.",
    type: "website",
  },
};

export default function OurClientsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/" className="text-foreground/60 hover:text-foreground">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-foreground font-semibold">Our Clients</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex gap-8">
        <main className="flex-1 min-w-0">
          <OurClientsContent />
        </main>
        <USPSidebar />
      </div>
    </div>
  );
}

