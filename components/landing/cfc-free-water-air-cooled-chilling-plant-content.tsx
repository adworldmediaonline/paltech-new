"use client";

import Link from "next/link";

export function CfcFreeWaterAirCooledChillingPlantContent() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 pt-6 space-y-10">
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold">Description</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Chlorofluorocarbons (CFCs) have been extensively used in air‑conditioning and refrigeration systems worldwide. CFC‑free Chilling Plants provide sustainable alternatives to conventional centrifugal, screw, and reciprocating equipment.
            </p>
            <p>
              Paltech’s optimized engineering and conversion expertise can deliver significant efficiency improvements in CFC‑free chillers, provided adequate cooling capacity is available.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h4 className="text-base sm:text-lg font-medium">Interested in our products?</h4>
              <p className="text-sm text-muted-foreground">Share your requirement to receive a tailored proposal.</p>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              Let’s Talk Business
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}

export default CfcFreeWaterAirCooledChillingPlantContent;


