"use client";

import Link from "next/link";
import Image from "next/image";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export function FrpCorrugatedSheetsContent() {
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
                  <Link href="/paltech-frpgrp-structural-profiles">FRP/GRP Structural Profiles</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>FRP Corrugated Sheets</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">FRP Corrugated Sheets</h1>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-3xl">
            Lightweight, durable, and corrosion‑resistant corrugated FRP sheets in multiple profiles and colors—ideal for roofing, walkways, and covers across industries.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Visual */}
          <div className="relative w-full rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image src="/profiles/frp-corrugated-sheets.png" alt="FRP Corrugated Sheets" fill className="object-contain" sizes="(min-width: 1024px) 560px, 100vw" />
            </div>
          </div>

          {/* Specifications & Applications */}
          <div className="space-y-8">
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold">Specifications</h2>
              <ul className="list-disc pl-5 space-y-2 marker:text-primary text-muted-foreground">
                <li>Thickness: 0.8mm, 1.2mm, 1.5mm, 2mm, 2.5mm, 3mm, 4mm</li>
                <li>Colors: clear, sky blue, light green</li>
                <li>Profiles: over 100 general profiles</li>
                <li>Length: cut to requirement (transport‑suitable); Density: 2.1–2.15 g/cm³</li>
                <li>Fiber content: &gt; 25%</li>
                <li>Light transmission: 60–85%</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold">Application Areas</h3>
              <ul className="list-disc pl-5 space-y-2 marker:text-primary text-muted-foreground">
                <li>Domestic: parking sheds, room extensions, toilets, bathrooms, roofing</li>
                <li>Transportation: bus stations, ticket counters, parcel offices, shelters</li>
                <li>Agriculture: farm houses, poultry farms, generator rooms, sheds</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold">Features</h3>
              <ul className="list-disc pl-5 space-y-2 marker:text-primary text-muted-foreground">
                <li>Rust proof and fire retardant</li>
                <li>Lightweight with high tensile strength</li>
                <li>Resistant to acid/alkali fumes</li>
                <li>Free from cracking, wrapping, and buckling issues</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h4 className="text-base sm:text-lg font-medium">Interested in our Products?</h4>
                  <p className="text-sm text-muted-foreground">Share profile, thickness, color and quantity—get a tailored proposal.</p>
                </div>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  Lets Talk Business
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FrpCorrugatedSheetsContent;


