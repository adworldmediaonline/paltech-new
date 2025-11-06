import { SparesContent } from "@/components/landing/spares-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cooling Tower Spares & FRP Fans | Paltech™ Industrial Cooling Components",
  description: "Buy premium Cooling Tower Spares & FRP Fans from Paltech™ – India's trusted cooling equipment manufacturer with 37+ years of industry expertise.",
  alternates: {
    canonical: '/spares',
  },
  keywords: [
    "Cooling Tower Spares",
    "FRP Cooling Tower Fans",
    "Cooling Tower Components",
    "Cooling Tower Parts Manufacturer",
    "Industrial Cooling Tower Spares",
    "Gear Reducer Cooling Tower",
    "Drive Shaft Carbon Fiber",
    "Cooling Tower Fill Media",
    "FRP Axial Fans",
    "PVC Fills for Cooling Towers",
    "Cooling Tower Accessories"
  ],
  openGraph: {
    title: "Cooling Tower Spares & FRP Fans | Paltech™ Industrial Cooling Components",
    description: "Buy premium Cooling Tower Spares & FRP Fans from Paltech™ – India's trusted cooling equipment manufacturer with 37+ years of industry expertise.",
    type: "website",
  },
};

export default function SparesPage() {
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
              <BreadcrumbPage className="text-white font-semibold">Spares</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <SparesContent />
          </main>
          <USPSidebar />
        </div>
      </div>
    </>
  );
}

