import { AxialFansContent } from "@/components/landing/axial-fans-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FRP Cooling Tower Fans | High-Efficiency Industrial Fans by Paltech™",
  description: "Boost cooling tower performance with Paltech™ FRP Fans. Achieve up to 40% energy savings, whisper-quiet operation, and long-term durability in any industry.",
  keywords: [
    "FRP Cooling Tower Fan",
    "High Efficiency Cooling Tower Fan",
    "Paltech FRP Fan",
    "Industrial Cooling Tower Fan",
    "Energy Saving Cooling Tower Fan",
    "Axial Flow FRP Fan",
    "Corrosion Resistant Fan",
    "Custom Cooling Tower Fan",
    "Cooling Tower Fan Manufacturer",
    "Fiberglass Reinforced Plastic Fan",
    "Long Life Cooling Tower Fan",
    "Low Noise Industrial Fan",
    "Adjustable Pitch Cooling Tower Fan",
    "Power Saving Fan for Cooling Tower"
  ],
  openGraph: {
    title: "FRP Cooling Tower Fans | High-Efficiency Industrial Fans by Paltech™",
    description: "Boost cooling tower performance with Paltech™ FRP Fans. Achieve up to 40% energy savings, whisper-quiet operation, and long-term durability in any industry.",
    type: "website",
  },
};

export default function AxialFansPage() {
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
              <BreadcrumbPage className="text-white font-semibold">Axial Fans</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <AxialFansContent />
          </main>
          <USPSidebar />
        </div>
      </div>
    </>
  );
}

