"use client";

import Link from "next/link";

export function FrpGratingsContent() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 pt-6">
        <div className="space-y-8">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold">Description</h2>
            <p className="text-muted-foreground">
              Pultruded gratings are corrosion‑resistant structural products used in corrosive environments to minimize maintenance. Typical uses include walkways, platforms, and overhead areas. FRP gratings can be weight‑bearing across spans when engineered correctly.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold">Product Features (USP)</h3>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary text-muted-foreground">
              <li>Resistant to corrosion unlike steel gratings</li>
              <li>Available in T‑bar, I‑bar, and heavy load bar profiles</li>
              <li>Suitable for walkways, platforms, and industrial access</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold">Technical Specifications</h3>
            <div className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-muted-foreground">
              I‑Beam sizes and recommended loads vary by cross‑rod spacing. Provide span, load class, and environment for detailed selection and drawings.
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h4 className="text-base sm:text-lg font-medium">Interested in our Products?</h4>
                <p className="text-sm text-muted-foreground">Share span, load, resin system, and profile—get a tailored proposal.</p>
              </div>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                Lets Talk Business
              </Link>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default FrpGratingsContent;


