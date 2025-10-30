"use client";

import Link from "next/link";
import Image from "next/image";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export function ChillingPlantsContent() {
  return (
    <section className="w-full">
      {/* Intro with visual */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="relative w-full rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/categories/chilling-plants.png"
                alt="Industrial Chilling Plant"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 560px, 100vw"
                priority
              />
            </div>
          </div>

          <div className="space-y-4 text-muted-foreground">
            <p>
              We, Paltech Cooling Towers & Equipments Limited, are committed to complete customer delight by manufacturing and supplying high quality Chilling Plants at competitive prices through emphasis on team work, environment, transparency and continuous innovation.
            </p>
            <p>
              We strive to be a world‑class Chilling Plant manufacturer. Paltech packaged chillers are environment friendly and carefully designed for optimum performance. We have been manufacturing chilling plants using heavy‑duty and long‑lasting industrial components as per national and international designs and fabrication standards (IS‑2825/TEMA/ASHARE/ASME). Paltech has a full‑fledged in‑house test lab and technical support for manufacturing systems, installations, and after‑sales service at site.
            </p>
            <p>
              With three decades of manufacturing excellence, our reputation for uncompromising professionalism has earned the trust of clients worldwide. Founded in 1986, Paltech operates three manufacturing facilities with the latest machinery and equipment, headquartered in Gurugram with branches across India.
            </p>
          </div>
        </div>
      </div>

      {/* Specs and capabilities */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 space-y-10">
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold">Capacity Offering</h2>
          <ul className="list-disc pl-5 space-y-2 marker:text-primary text-muted-foreground">
            <li>Water‑cooled chillers: from 3TR to any capacity</li>
            <li>Air‑cooled chillers: from &lt;1TR to any capacity</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="text-lg sm:text-xl font-semibold">Temperature Range</h3>
          <p className="text-muted-foreground">We offer process chillers with temperature range from +32°C down to −50°C.</p>
        </section>

        <section className="space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold">Manufacture & Design</h3>
          <div className="text-muted-foreground space-y-2">
            <p>Process Chillers remove unwanted heat generated during manufacturing to keep the process healthy. Our chillers are factory assembled, pre‑commissioned, and skid mounted. We customize/tailor per application by:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary">
              <li>Understanding the application</li>
              <li>Designing an optimum solution capacity‑wise</li>
              <li>Using world‑class materials</li>
              <li>Employing finest workmanship</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold">Types of Chilling Plants</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-primary">
            <li><Link href="/chilling-plants/water-air-cooled-scroll-chilling-plants" className="hover:underline">Water/Air Cooled Scroll Chilling Plant</Link></li>
            <li><Link href="/chilling-plants/cfc-free-water-air-cooled-chilling-plant" className="hover:underline">CFC Free Water / Air Cooled Chilling Plant</Link></li>
            <li><Link href="/chilling-plants/glycol-based-water-air-cooled-chilling-plants" className="hover:underline">Glycol based Water / Air Cooled Chilling Plant</Link></li>
            <li><Link href="/chilling-plants/micro-processor-based-water-air-cooled-chilling-plants" className="hover:underline">Micro Processor based Water/Air Cooled Chilling Plant</Link></li>
            <li><Link href="/chilling-plants/multi-circuit-power-saver-scroll-screw-chilling-plant" className="hover:underline">Multi Circuit Power Saver Scroll / Screw Chilling Plant (Water/Air Cooled)</Link></li>
            <li><Link href="/chilling-plants/reciprocating-water-air-cooled-chilling-plants" className="hover:underline">Reciprocating Water/Air Cooled Chilling Plant</Link></li>
            <li><Link href="/chilling-plants/standard-capacity-screw-scroll-chilling-plants" className="hover:underline">Standard Capacity Screw / Scroll Chilling Plants (Water/Air Cooled)</Link></li>
            <li><Link href="/chilling-plants/tailor-made-power-saver-screw-scroll-chilling-plant" className="hover:underline">Tailor Made Power Saver Screw/Scroll Chilling Plant (Water/Air Cooled)</Link></li>
            <li><Link href="/chilling-plants/trolley-mounted-water-air-cooled-chilling-plant" className="hover:underline">Trolley Mounted Water / Air Cooled Chilling Plant</Link></li>
          </ul>
          <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Note:</span> Detailed engineering data is shared with the formal proposal/quotation.</p>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h4 className="text-base sm:text-lg font-medium">Need sizing or selection help?</h4>
              <p className="text-sm text-muted-foreground">Tell us your process and ambient—get a tailored chiller proposal.</p>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              Request Proposal
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}

export default ChillingPlantsContent;


