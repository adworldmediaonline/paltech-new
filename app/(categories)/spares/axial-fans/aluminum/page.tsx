import { AluminumFansContent } from "@/components/landing/aluminum-fans-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

import aluminumFans1 from '../../../../../public/categories/aluminum-fans.webp';

const images = [aluminumFans1];

export const metadata: Metadata = {
  title: "Aluminum Fans for Cooling Towers | Commercial-Grade by Paltech™",
  description: "Discover high-efficiency aluminum cooling tower fans by Paltech™. Durable, corrosion-resistant, custom-sized fans for commercial and industrial cooling applications.",
  alternates: {
    canonical: '/spares/axial-fans/aluminum',
  },
  keywords: [
    "Cooling Tower Aluminum Fan",
    "Aluminum Fan for Cooling Tower",
    "Industrial Cooling Tower Fan",
    "Corrosion Resistant Fan",
    "Commercial Cooling Tower Fan",
    "Alloy Fan Blade",
    "Paltech™ Aluminum Fan",
    "Heavy Duty Cooling Tower Fan",
    "Extruded Alloy Hub Fan",
    "Zinc Plated Fan Hardware",
    "Custom Size Aluminum Fan",
    "Durable Cooling Tower Fan",
    "Energy Efficient Aluminum Fan"
  ],
  openGraph: {
    title: "Aluminum Fans for Cooling Towers | Commercial-Grade by Paltech™",
    description: "Discover high-efficiency aluminum cooling tower fans by Paltech™. Durable, corrosion-resistant, custom-sized fans for commercial and industrial cooling applications.",
    type: "website",
  },
};

export default function AluminumFansPage() {
  return (
    <>
      <CategoryHero images={images}>
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
                <Link href="/spares/axial-fans" className="text-white/90 hover:text-white">Axial Fans</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/70" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white font-semibold">Aluminum</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <AluminumFansContent />
          </main>
          <USPSidebar />
        </div>
      </div>
    </>
  );
}

