import { OurClientsContent } from "@/components/landing/our-clients-content";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clients | Paltech™ Trusted by 11,000+ Organizations",
  description: "Paltech™ has successfully served 11,000+ clients across 25+ countries in power, steel, sugar, chemical, and other industries with world-class cooling tower solutions.",
  keywords: [
    "Paltech™ Clients",
    "Client Portfolio",
    "Cooling Tower Clients",
    "Industrial Clients",
    "Power Plant Clients",
    "Steel Industry Clients",
    "Sugar Industry Clients",
    "Chemical Industry Clients",
    "International Clients",
    "Trusted Organizations",
    "Client Testimonials"
  ],
  openGraph: {
    title: "Our Clients | Paltech™ Trusted by 11,000+ Organizations",
    description: "Paltech™ has successfully served 11,000+ clients across 25+ countries in power, steel, sugar, chemical, and other industries with world-class cooling tower solutions.",
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

