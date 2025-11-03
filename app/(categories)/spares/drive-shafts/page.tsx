import { DriveShaftsContent } from "@/components/landing/drive-shafts-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drive Shafts for Cooling Towers | Paltech™ Industrial Power Components",
  description: "Paltech™ manufactures premium drive shafts for cooling towers—dynamic balance, zero maintenance, and long service life for heavy-duty industrial use.",
  keywords: [
    "Drive Shaft for Cooling Tower",
    "Cooling Tower Drive Shaft",
    "Industrial Drive Shaft Manufacturer",
    "Carbon Fiber Drive Shaft",
    "Stainless Steel Drive Shaft",
    "Cooling Tower Spares",
    "Power Transmission Shaft",
    "Maintenance-Free Drive Shaft",
    "Dynamically Balanced Shaft",
    "Cooling Tower Coupling Shaft",
    "Industrial Cooling Tower Components",
    "Energy Efficient Cooling Tower Parts",
    "Non-Lubricated Drive Shaft",
    "Paltech Cooling Tower Spares"
  ],
  openGraph: {
    title: "Drive Shafts for Cooling Towers | Paltech™ Industrial Power Components",
    description: "Paltech™ manufactures premium drive shafts for cooling towers—dynamic balance, zero maintenance, and long service life for heavy-duty industrial use.",
    type: "website",
  },
};

export default function DriveShaftsPage() {
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
              <BreadcrumbPage className="text-white font-semibold">Drive Shafts</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <DriveShaftsContent />
          </main>
          <USPSidebar />
        </div>
      </div>
    </>
  );
}

