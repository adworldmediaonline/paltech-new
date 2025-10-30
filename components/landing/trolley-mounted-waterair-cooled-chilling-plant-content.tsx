"use client";

import Link from "next/link";

export function TrolleyMountedWaterAirCooledChillingPlantContent() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 pt-6 space-y-10">
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold">Description</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Paltech Trolley Mounted Water / Air Cooled Chilling Plants combine field mobility with dependable performance. Systems feature LCD display and data logging, controlled by reliable electronics used across global markets.
            </p>
            <p>
              Constructed with long‑life industrial components, these units adhere to relevant national and international design and fabrication standards.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h4 className="text-base sm:text-lg font-medium">Interested in our Products?</h4>
              <p className="text-sm text-muted-foreground">Tell us your site conditions and load—get a tailored proposal.</p>
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

export default TrolleyMountedWaterAirCooledChillingPlantContent;


