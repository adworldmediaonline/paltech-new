import { CoolingTowerSplashBarsContent } from "@/components/landing/cooling-tower-splash-bars-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cooling Tower Splash Bars | Durable PVC Fill Media by Paltech™",
  description: "Paltech™ splash bars enhance cooling tower heat exchange with optimized droplet formation. Corrosion-resistant and ideal for fouling-prone environments.",
  keywords: [
    "Cooling Tower Splash Bars",
    "Splash Bar Fill",
    "Paltech Cooling Tower Fill",
    "PVC Splash Bar",
    "Corrosion Resistant Splash Bars",
    "Industrial Cooling Tower Fill Media",
    "Fouling Resistant Cooling Fill",
    "Durable Cooling Tower Splash Bars",
    "Water Droplet Cooling Fill",
    "Splash Bar Heat Transfer",
    "Modular Cooling Tower Fill",
    "Chemical Resistant Fill Media",
    "Enhanced Evaporation Cooling Fill"
  ],
  openGraph: {
    title: "Cooling Tower Splash Bars | Durable PVC Fill Media by Paltech™",
    description: "Paltech™ splash bars enhance cooling tower heat exchange with optimized droplet formation. Corrosion-resistant and ideal for fouling-prone environments.",
    type: "website",
  },
};

export default function CoolingTowerSplashBarPage() {
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
                <Link href="/spares/fills" className="text-white/90 hover:text-white">Fills</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/70" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white font-semibold">Cooling Tower Splash Bar</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <CoolingTowerSplashBarsContent />
          </main>
          <USPSidebar />
        </div>
      </div>
    </>
  );
}

