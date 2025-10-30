"use client";

import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export function MicroProcessorBasedWaterAirCooledChillingPlantContent() {
  return (
    <section className="w-full">
      {/* Header-safe spacing */}
      <div className="pt-2  pb-8">
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
                <BreadcrumbPage>Micro Processor based Water/Air Cooled Chilling Plant</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Micro Processor based Water/Air Cooled Chilling Plant</h1>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-3xl">
            Robust PLC/micro‑processor controlled chillers with LCD display and data logging—optimized design, rugged skid and casing, and true independent refrigeration circuits across multi‑compressor systems.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 space-y-10">
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold">Description</h2>
          <p className="text-muted-foreground">
            Paltech offers Micro Processor based Water / Air Cooled Chilling Plants with LCD display and data recording facility. These chillers feature optimum design, quality construction, rugged skid, sturdy casing, and single or multiple true independent refrigeration circuits providing flexibility via multi‑compressor configurations.
          </p>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h4 className="text-base sm:text-lg font-medium">Interested in our Products?</h4>
              <p className="text-sm text-muted-foreground">Share your load profile and controls needs—get a tailored proposal.</p>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              Lets Talk Business
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}

export default MicroProcessorBasedWaterAirCooledChillingPlantContent;


