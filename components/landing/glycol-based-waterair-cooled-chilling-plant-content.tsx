"use client";

import Link from "next/link";

export function GlycolBasedWaterAirCooledChillingPlantContent() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 pt-6 space-y-10">
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold">Description</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Glycol chillers are designed and manufactured specifically for low‑temperature applications—unlike medium‑temperature chillers modified to operate at somewhat lower temperatures.
            </p>
            <p>
              These chillers are widely applied for process cooling or as part of a secondary refrigerant system for chilled and cold‑storage applications. Packaged units are available across a range of capacities with outlet glycol temperatures from +5°C down to −50°C.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h4 className="text-base sm:text-lg font-medium">Interested in our Products?</h4>
              <p className="text-sm text-muted-foreground">Tell us your temperature range and load—receive a tailored proposal.</p>
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

export default GlycolBasedWaterAirCooledChillingPlantContent;


