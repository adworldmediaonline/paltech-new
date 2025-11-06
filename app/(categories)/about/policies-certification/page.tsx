import { PoliciesCertificationContent } from "@/components/landing/policies-certification-content";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policies & Certification | Paltech™ ISO Certified Company",
  description: "Paltech™ is ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certified, demonstrating our commitment to quality, environmental management, and workplace safety.",
  keywords: [
    "ISO 9001:2015",
    "ISO 14001:2015",
    "ISO 45001:2018",
    "Quality Management System",
    "Environmental Management",
    "Occupational Health and Safety",
    "ISO Certification",
    "Paltech™ Certifications",
    "Quality Policy",
    "Environmental Policy",
    "Safety Policy",
    "JAS-ANZ Accredited",
    "International Standards"
  ],
  openGraph: {
    title: "Policies & Certification | Paltech™ ISO Certified Company",
    description: "Paltech™ is ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certified, demonstrating our commitment to quality, environmental management, and workplace safety.",
    type: "website",
  },
};

export default function PoliciesCertificationPage() {
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
            <BreadcrumbPage className="text-foreground font-semibold">Policies & Certification</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex gap-8">
        <main className="flex-1 min-w-0">
          <PoliciesCertificationContent />
        </main>
        <USPSidebar />
      </div>
    </div>
  );
}

