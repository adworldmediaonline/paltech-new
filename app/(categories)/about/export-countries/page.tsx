import { ExportCountriesContent } from "@/components/landing/export-countries-content";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Export Countries | Paltech™ Global Cooling Tower Solutions",
  description: "Paltech™ exports cooling towers to 40+ countries across Middle East, Asia Pacific, Africa, Europe, and Americas. Trusted worldwide for industrial cooling solutions.",
  keywords: [
    "Export Countries",
    "Global Cooling Towers",
    "International Exports",
    "Paltech™ Global Presence",
    "Middle East Cooling Towers",
    "Asia Pacific Cooling",
    "Africa Cooling Solutions",
    "European Cooling Towers",
    "UAE Cooling Towers",
    "Saudi Arabia Cooling",
    "Malaysia Cooling Towers",
    "International Cooling Solutions"
  ],
  openGraph: {
    title: "Export Countries | Paltech™ Global Cooling Tower Solutions",
    description: "Paltech™ exports cooling towers to 40+ countries across Middle East, Asia Pacific, Africa, Europe, and Americas. Trusted worldwide for industrial cooling solutions.",
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

