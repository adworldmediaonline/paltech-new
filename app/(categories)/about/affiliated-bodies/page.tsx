import { AffiliatedBodiesContent } from "@/components/landing/affiliated-bodies-content";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliated Bodies | Paltech™ Industry Memberships",
  description: "Paltech™ is affiliated with leading industry bodies including Cooling Technology Institute (CTI) USA, CII, FICCI, and NCR Chamber of Commerce, ensuring global standards.",
  keywords: [
    "Affiliated Bodies",
    "Industry Memberships",
    "CTI USA",
    "Cooling Technology Institute",
    "CII Membership",
    "FICCI",
    "NCR Chamber of Commerce",
    "ISHARE",
    "Industry Associations",
    "Professional Affiliations",
    "Quality Standards",
    "Industry Best Practices"
  ],
  openGraph: {
    title: "Affiliated Bodies | Paltech™ Industry Memberships",
    description: "Paltech™ is affiliated with leading industry bodies including Cooling Technology Institute (CTI) USA, CII, FICCI, and NCR Chamber of Commerce, ensuring global standards.",
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

