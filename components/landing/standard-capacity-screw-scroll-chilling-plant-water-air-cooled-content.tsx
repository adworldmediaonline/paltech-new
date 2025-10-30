"use client";

import Link from "next/link";

export function StandardCapacityScrewScrollChillingPlantWaterAirCooledContent() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 pt-6 space-y-10">
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold">Description</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Paltech Standard Capacity Screw / Scroll Chilling Plants (Water / Air Cooled) are designed for optimum performance. These chilling plants include LCD display and data recording capability.
            </p>
            <p>
              Paltech uses best‑in‑class controls and heavy‑duty, long‑lasting industrial components conforming to relevant national and international standards.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h4 className="text-base sm:text-lg font-medium">Interested in our Products?</h4>
              <p className="text-sm text-muted-foreground">Share capacity and duty cycle to receive a tailored proposal.</p>
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

export default StandardCapacityScrewScrollChillingPlantWaterAirCooledContent;


