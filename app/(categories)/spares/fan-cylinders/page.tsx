import { FanCylindersContent } from "@/components/landing/fan-cylinders-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

import fanCylinders1 from '../../../../public/categories/fan-cylinders-1.webp';
import fanCylinders2 from '../../../../public/categories/fan-cylinders-2.webp';
import fanCylinders3 from '../../../../public/categories/fan-cylinders-3.webp';

const images = [fanCylinders1, fanCylinders2, fanCylinders3];

export const metadata: Metadata = {
  title: "Cooling Tower Fan Cylinders | Premium FRP Cylinders by Paltech™",
  description: "Discover high-performance FRP cooling tower fan cylinders by Paltech™. Made to CTI STD-131(86) standards, up to 11 meters diameter, fire-retardant options.",
  alternates: {
    canonical: '/spares/fan-cylinders',
  },
  keywords: [
    "Cooling Tower Fan Cylinder",
    "FRP Fan Cylinder",
    "Industrial Cooling Tower Fan Cylinder",
    "Paltech™ Fan Cylinder",
    "Fiberglass Reinforced Plastic Fan Cylinder",
    "CTI Standard Fan Cylinder",
    "Large Diameter Fan Cylinder",
    "Fire Retardant Cooling Tower Cylinder",
    "Cooling Tower Cylinder Supplier",
    "High-Efficiency Cooling Tower Components",
    "Custom Cooling Tower Fan Cylinder",
    "Lightweight FRP Fan Cylinder",
    "Cooling Tower Airflow Optimization"
  ],
  openGraph: {
    title: "Cooling Tower Fan Cylinders | Premium FRP Cylinders by Paltech™",
    description: "Discover high-performance FRP cooling tower fan cylinders by Paltech™. Made to CTI STD-131(86) standards, up to 11 meters diameter, fire-retardant options.",
    type: "website",
  },
};

export default function FanCylindersPage() {
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
              <BreadcrumbPage className="text-white font-semibold">Fan Cylinders</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <FanCylindersContent />
          </main>
          <USPSidebar />
        </div>
      </div>
    </>
  );
}

