"use client";

import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export function WaterAirCooledScrollChillingPlantContent() {
  return (
    <section className="w-full">
      {/* Header-safe spacing */}
      <div className="pt-36 sm:pt-40 md:pt-44 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/chilling-plants">Chilling Plants</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Water/Air Cooled Scroll Chilling Plant</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Water/Air Cooled Scroll Chilling Plant</h1>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-3xl">
            High-efficiency scroll chiller solutions available in water- and air‑cooled configurations with compact footprint, low noise, and reliable operation.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 space-y-10">
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold">Description</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Water cooled chillers have longer life, higher efficiency, large capacity and better refrigerant containment. Typically intended for indoor installation and operation, they are cooled by a separate condenser water loop connected to outdoor cooling towers to expel heat to the atmosphere. Due to lower power consumption, they are preferred where optimum energy efficiency is required.
            </p>
            <p>
              Water cooled chillers are often chosen as water has superior heat transfer properties versus air. The primary advantage is the higher film coefficient at a given area and temperature difference. Air cooled chillers absorb heat from process water and transfer it to ambient air, ideal where heat discharge is not a factor. They require no cooling tower or condenser water pump and have lower maintenance than water cooled units. Air‑cooled chillers are usually installed outdoors; ambient air is drawn directly across the condenser coil.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-lg sm:text-xl font-semibold">Product Features (USP)</h3>
          <ul className="list-disc pl-5 space-y-2 marker:text-primary text-muted-foreground">
            <li>High performance and low operating cost</li>
            <li>Rapid, powerful cooling</li>
            <li>High energy efficiency</li>
            <li>High‑quality components</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="text-lg sm:text-xl font-semibold">Technical Specifications</h3>
          <ul className="list-disc pl-5 space-y-2 marker:text-primary text-muted-foreground">
            <li><span className="text-foreground font-medium">Cooling capacity:</span> Water cooled: 3 TR to any capacity; Air cooled: &lt;1 TR to any capacity</li>
            <li><span className="text-foreground font-medium">Superior Performance:</span> Advanced Screw/Scroll/Reciprocating compressors with multi‑circuit design for uptime and low‑noise heat transfer</li>
            <li><span className="text-foreground font-medium">Easy Installation:</span> Compact structure and minimal space requirements save time and costs</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h4 className="text-base sm:text-lg font-medium">Need help selecting capacity?</h4>
              <p className="text-sm text-muted-foreground">Share process load and ambient; we’ll send a tailored selection.</p>
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

export default WaterAirCooledScrollChillingPlantContent;


