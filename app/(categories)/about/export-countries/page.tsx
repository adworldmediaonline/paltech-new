import { ExportCountriesContent } from "@/components/landing/export-countries-content";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paltech™ Global Cooling Tower Exports to 40+ Countries",
  description: "Delivering world-class cooling tower solutions in 40+ countries across 5 continents. Partner with Paltech™ for reliable international projects.",
  keywords: [
    "Cooling Towers",
    "Export Countries",
    "International Projects",
    "Global Solutions",
    "Industrial Cooling",
    "Global cooling tower solutions provider",
    "Cooling tower exports to international markets",
    "Industrial cooling solutions for 40+ countries",
    "Worldwide cooling tower installations and projects",
    "International quality standards for cooling towers",
    "Partner with Paltech™ for global cooling projects",
    "Exporting industrial cooling towers across continents",
    "Cooling technology solutions in Middle East & Asia Pacific",
    "Africa and Europe industrial cooling tower projects",
    "Global network of satisfied cooling tower clients",
    "Industrial cooling tower exports",
    "Cooling tower solutions worldwide",
    "ISO-certified cooling tower systems",
    "Global industrial project solutions",
    "Cooling towers for international clients",
    "Cooling technology institute (CTI) member",
    "Exporting FRP, RCC, and wooden cooling towers",
    "International engineering and cooling tower solutions",
    "Industrial project consulting for cooling towers",
    "Trusted global cooling tower manufacturer",
    "Worldwide industrial cooling solutions",
    "International standards for cooling tower manufacturing",
    "Global market for industrial cooling towers",
    "Multi-continent cooling tower projects",
    "Exporting industrial chillers and water treatment systems",
    "Reliable global cooling tower installations",
    "Technical support for international projects",
    "Long-term partnerships with international clients",
    "Industrial cooling technology compliance",
    "Worldwide network of cooling tower partners"
  ],
  alternates: {
    canonical: '/about/export-countries',
  },
  openGraph: {
    title: "Paltech™ Global Cooling Tower Exports to 40+ Countries",
    description: "Delivering world-class cooling tower solutions in 40+ countries across 5 continents. Partner with Paltech™ for reliable international projects.",
    type: "website",
  },
};

export default function ExportCountriesPage() {
  return (
    <>
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
              <BreadcrumbPage className="text-foreground font-semibold">Export Countries</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <ExportCountriesContent />
          </main>
          <USPSidebar />
        </div>
      </div>
    </>
  );
}

