"use client";

import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export function FrpLaddersContent() {
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
                <BreadcrumbPage>FRP Ladders</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">FRP Ladders</h1>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-3xl">
            High‑strength, corrosion‑resistant FRP ladders engineered for safe access in industrial environments. Available in multiple formats to suit site needs.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 space-y-10">
        {/* Straight ladder */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold">Straight Ladder</h2>
          <p className="text-muted-foreground">Made of high‑strength FRP materials for durable industrial use.</p>
          <h3 className="text-lg sm:text-xl font-semibold">Description</h3>
          <ul className="list-disc pl-5 space-y-2 marker:text-primary text-muted-foreground">
            <li>Available with Flat Ribbed and Fluted Tube type steps</li>
          </ul>
          <h4 className="text-base sm:text-lg font-medium">Technical Specifications</h4>
          <ul className="list-disc pl-5 space-y-1 marker:text-primary text-muted-foreground text-sm">
            <li>Channel size: 75×30×6.35 mm (flat ribbed) / 63×30×6.00 mm or 50×50×5.00 mm (fluted)</li>
            <li>Step size: 63 mm (flat ribbed) / 32 mm (fluted with/without aluminum pipe)</li>
            <li>Rung spacing: 300 mm; Rung length: 450 mm; Workload: 150–175 kg</li>
            <li>Height options: 3′ to 20′</li>
          </ul>
        </section>

        {/* Extension ladder */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold">Extension Ladder</h2>
          <p className="text-muted-foreground">High‑strength FRP construction, suitable for varied industrial use.</p>
          <h4 className="text-base sm:text-lg font-medium">Technical Specifications</h4>
          <ul className="list-disc pl-5 space-y-1 marker:text-primary text-muted-foreground text-sm">
            <li>Height range: 16′ to 40′</li>
            <li>Channel size: 75×30×6.35 mm</li>
            <li>Step size: 63 mm flat ribbed / 32 mm ø fluted tube with or without aluminum pipe</li>
            <li>Rung spacing: 300 mm; Rung length: 450 mm; Workload: 125–150 kg</li>
            <li>Accessories: Aluminum stopper, hooks, steel sliders, rope</li>
          </ul>
        </section>

        {/* Self Supported stool type */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold">Self Supported Stool Type Ladder</h2>
          <p className="text-muted-foreground">Durable FRP stool ladders for versatile maintenance tasks.</p>
          <h3 className="text-lg sm:text-xl font-semibold">Description</h3>
          <ul className="list-disc pl-5 space-y-2 marker:text-primary text-muted-foreground">
            <li>Single side flat ribbed/fluted tube step</li>
            <li>Double side flat ribbed/fluted tube step</li>
            <li>One side flat ribbed and other side fluted step</li>
          </ul>
          <h4 className="text-base sm:text-lg font-medium">Technical Specifications</h4>
          <ul className="list-disc pl-5 space-y-1 marker:text-primary text-muted-foreground text-sm">
            <li>Height: 3′ to 20′; Channel size: 75×30×6.35 mm</li>
            <li>Step size: 63 mm flat ribbed / 32 mm ø fluted tube with or without aluminum pipe</li>
            <li>Rung spacing: 300 mm; Platform size: 325×190 mm; Workload: 150–175 kg</li>
          </ul>
        </section>

        {/* FRP cage/other ladders summary */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold">Fiber Glass Reinforced Polymer (FRP) Ladders</h2>
          <ul className="list-disc pl-5 space-y-2 marker:text-primary text-muted-foreground">
            <li>Non‑conductive and non‑metallic; safe around electricity</li>
            <li>Lightweight, easy to carry, low maintenance</li>
            <li>Non‑corrosive; 100% rust and water proof</li>
            <li>High mechanical strength and durability</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h4 className="text-base sm:text-lg font-medium">Need sizing or a custom configuration?</h4>
              <p className="text-sm text-muted-foreground">Share height, duty class, step type and accessories—get a tailored proposal.</p>
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

export default FrpLaddersContent;


