import { GearReducersContent } from "@/components/landing/gear-reducers-content";
import { CategoryHero } from "@/components/landing/category-hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { USPSidebar } from "@/components/landing/usp-sidebar";
import Link from "next/link";
import { Metadata } from "next";

import gearReducers1 from '../../../../public/categories/gear-reducer-1.webp';
import gearReducers2 from '../../../../public/categories/gear-reducer-2.webp';
import gearReducers3 from '../../../../public/categories/gear-reducer-3.webp';
import gearReducers4 from '../../../../public/categories/gear-reducer-4.webp';

const images = [gearReducers1, gearReducers2, gearReducers3, gearReducers4];

export const metadata: Metadata = {
  title: "Gear Reducers for Cooling Towers | Paltech™ Industrial Gearboxes",
  description: "Paltech™ Gear Reducers – heavy-duty, right-angle gearboxes for cooling towers. High torque, durable, and CTI-compliant power transmission solutions.",
  alternates: {
    canonical: '/spares/gear-reducers',
  },
  keywords: [
    "Cooling Tower Gear Reducer",
    "Cooling Tower Gearbox",
    "Industrial Gear Reducer Manufacturer",
    "Right Angle Gearbox",
    "Paltech™ Gear Drive",
    "Spiral Bevel Gearbox",
    "Double Reduction Gearbox",
    "CTI Standard Gear Reducer",
    "Heavy Duty Cooling Tower Gear Drive",
    "Cooling Tower Transmission Gearbox",
    "Industrial Cooling Tower Components",
    "High Torque Gear Reducer",
    "Cooling Tower Fan Drive System",
    "Gearbox for Cooling Towers",
    "Paltech™ Cooling Tower Spares"
  ],
  openGraph: {
    title: "Gear Reducers for Cooling Towers | Paltech™ Industrial Gearboxes",
    description: "Paltech™ Gear Reducers – heavy-duty, right-angle gearboxes for cooling towers. High torque, durable, and CTI-compliant power transmission solutions.",
    type: "website",
  },
};

export default function GearReducersPage() {
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
              <BreadcrumbPage className="text-white font-semibold">Gear Reducers</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CategoryHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <GearReducersContent />
          </main>
          <USPSidebar />
        </div>
      </div>
    </>
  );
}

