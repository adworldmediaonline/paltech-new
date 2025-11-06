import { PoliciesCertificationContent } from "@/components/landing/policies-certification-content";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paltech™ ISO Certified Cooling Towers & Equipment",
  description: "ISO 9001, 14001 & 45001 certified industrial cooling solutions. Ensuring quality, safety, and sustainability for 37+ years worldwide.",
  keywords: [
    "ISO Certification",
    "Cooling Towers",
    "Industrial Safety",
    "Water Treatment",
    "Chilling Plants",
    "ISO-certified industrial cooling solutions",
    "ISO 9001:2015 quality management cooling towers",
    "ISO 14001 environmental management in cooling systems",
    "ISO 45001 occupational health and safety for industries",
    "Certified cooling tower and chilling plant manufacturer",
    "Sustainable industrial cooling solutions",
    "Safe and efficient industrial process cooling systems",
    "ISO certified cooling tower company",
    "Industrial cooling solutions ISO standards",
    "Internationally certified industrial equipment",
    "Energy-efficient cooling tower manufacturer",
    "Global industrial process cooling systems",
    "Industrial safety and compliance certified solutions",
    "FRP, Wooden, RCC cooling tower manufacturer",
    "Industrial chilling plants and water treatment solutions",
    "Accredited ISO cooling system provider",
    "Certified industrial HVAC & process cooling solutions",
    "Quality, environmental & safety policies",
    "JAS-ANZ accredited certifications",
    "Integrated management system for cooling towers",
    "Compliance with international ISO standards",
    "Operational efficiency through ISO certification",
    "Continuous improvement in industrial cooling solutions"
  ],
  alternates: {
    canonical: '/about/policies-certification',
  },
  openGraph: {
    title: "Paltech™ ISO Certified Cooling Towers & Equipment",
    description: "ISO 9001, 14001 & 45001 certified industrial cooling solutions. Ensuring quality, safety, and sustainability for 37+ years worldwide.",
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

