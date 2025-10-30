"use client";

import Link from "next/link";

export function FrpCoolingTowersContent() {
  return (
    <section className="w-full">
      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-6">
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold">Product Description</h2>
            <p className="text-muted-foreground">
              We offer a vast selection of FRP Cooling Towers available in various shapes and colors to complement your aesthetics and surroundings. As one of the leading manufacturers of FRP Induced Draft Cooling Towers, we provide efficient and reliable cooling solutions.
            </p>
            <p className="text-muted-foreground">
              <span className="font-semibold">Note:</span> Detailed dimensions and engineering data can be provided with a formal proposal/quotation.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold">Types of FRP cooling towers available with us:</h3>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary">
              <li>
                <Link href="#counter-flow-bottle" className="text-primary hover:underline">Counter Flow Bottle Shape</Link>
              </li>
              <li>
                <Link href="#counter-flow-rect-square" className="text-primary hover:underline">Counter Flow Rectangular/Square Shape</Link>
              </li>
              <li>
                <Link href="#fanless-jet-type" className="text-primary hover:underline">Fan less Induced Draft, Jet Type FRP</Link>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h4 className="text-base sm:text-lg font-medium">Need a tailored configuration?</h4>
            <p className="mt-1 text-sm text-muted-foreground">Share your application details and get a customized proposal.</p>
            <div className="mt-4">
              <Link href="/contact" className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                Request Proposal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FrpCoolingTowersContent;


