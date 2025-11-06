import { StainlessSteelDriveShaftsContent } from "@/components/landing/stainless-steel-drive-shafts-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metallic Drive Shafts for Cooling Towers | Paltech™ Industrial Solutions",
  description: "Paltech™ Metallic Drive Shafts – engineered for high torque, long life, and smooth operation. Available in GS, SS304 & SS316 for industrial cooling towers.",
  keywords: [
    "Metallic Drive Shaft",
    "Cooling Tower Drive Shaft",
    "Stainless Steel Drive Shaft",
    "Industrial Drive Shaft Manufacturer",
    "Galvanized Steel Drive Shaft",
    "Cooling Tower Spares",
    "ANSI AGMA Drive Shaft",
    "High Torque Cooling Tower Shaft",
    "Industrial Shaft Supplier India",
    "Maintenance Free Drive Shaft",
    "Industrial Cooling Tower Components",
    "Long Span Metallic Shaft",
    "Vibration Free Power Transmission",
    "Paltech™ Cooling Tower Accessories",
    "Stainless Steel Cooling Tower Shaft"
  ],
  openGraph: {
    title: "Metallic Drive Shafts for Cooling Towers | Paltech™ Industrial Solutions",
    description: "Paltech™ Metallic Drive Shafts – engineered for high torque, long life, and smooth operation. Available in GS, SS304 & SS316 for industrial cooling towers.",
    type: "website",
  },
};

export default function StainlessSteelDriveShaftsPage() {
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
              <BreadcrumbLink asChild>
                <Link href="/spares/drive-shafts" className="text-white/90 hover:text-white">Drive Shafts</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/70" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white font-semibold">Stainless Steel</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <StainlessSteelDriveShaftsContent />
          </main>
          <USPSidebar />
        </div>
      </div>
    </>
  );
}

