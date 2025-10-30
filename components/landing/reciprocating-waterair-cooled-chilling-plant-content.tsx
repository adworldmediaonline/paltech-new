"use client";

import Link from "next/link";

export function ReciprocatingWaterAirCooledChillingPlantContent() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 pt-6 space-y-10">
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold">Description</h2>
          <p className="text-muted-foreground">
            Paltech Reciprocating Water / Air Cooled Chilling Plants combine robust engineering with proven controls to deliver reliable performance across diverse applications. Systems can be configured with single or multiple truly independent refrigeration circuits for maximum uptime and serviceability.
          </p>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h4 className="text-base sm:text-lg font-medium">Interested in our Products?</h4>
              <p className="text-sm text-muted-foreground">Share duty cycle and capacity—get a tailored proposal.</p>
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

export default ReciprocatingWaterAirCooledChillingPlantContent;


