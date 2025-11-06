import { AffiliatedBodiesContent } from "@/components/landing/affiliated-bodies-content";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paltech™ Industry Affiliations & Cooling Tower Memberships",
  description: "Explore Paltech™'s global industry affiliations with CTI, CII, FICCI & more. Ensuring best practices, quality standards, and trusted cooling tower solutions.",
  keywords: [
    "Industry Affiliations",
    "Cooling Towers",
    "Technical Standards",
    "ISO Certified",
    "Business Membership",
    "Industrial cooling tower industry memberships",
    "Cooling Technology Institute (CTI) USA member",
    "Collaborations with leading industry bodies",
    "Quality and safety standards in cooling towers",
    "Global best practices in industrial cooling",
    "Technical resources for cooling tower engineering",
    "Business development through industry associations",
    "Knowledge sharing and skill development programs",
    "Compliance with international cooling tower standards",
    "Networking with industrial leaders and peers",
    "Cooling tower industry affiliations",
    "ISO-certified cooling tower solutions",
    "Engineering standards for industrial cooling",
    "CTI USA cooling tower member benefits",
    "FICCI and CII industrial collaborations",
    "Technical excellence in cooling tower projects",
    "Global cooling tower best practices",
    "Trusted industry partnerships for cooling solutions",
    "Industrial project standards and certifications",
    "International engineering association memberships",
    "Access to international technical guidelines",
    "Enhanced credibility through industry membership",
    "Implementation of industry best practices",
    "Industrial cooling tower compliance",
    "Cooling tower performance standards",
    "Collaboration with top engineering bodies",
    "Continuous knowledge sharing in industrial projects",
    "Industry-leading cooling technology standards"
  ],
  alternates: {
    canonical: '/about/affiliated-bodies',
  },
  openGraph: {
    title: "Paltech™ Industry Affiliations & Cooling Tower Memberships",
    description: "Explore Paltech™'s global industry affiliations with CTI, CII, FICCI & more. Ensuring best practices, quality standards, and trusted cooling tower solutions.",
    type: "website",
  },
};

export default function AffiliatedBodiesPage() {
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
            <BreadcrumbPage className="text-foreground font-semibold">Affiliated Bodies</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex gap-8">
        <main className="flex-1 min-w-0">
          <AffiliatedBodiesContent />
        </main>
        <USPSidebar />
      </div>
    </div>
  );
}

