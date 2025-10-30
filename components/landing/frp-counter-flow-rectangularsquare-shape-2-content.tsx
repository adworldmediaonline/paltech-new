"use client";

import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export function FrpCounterFlowRectangularSquareShape2Content() {
  return (
    <section className="w-full">
      {/* Spacing under fixed header */}
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
                  <Link href="/cooling-towers">Cooling Towers</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/cooling-towers/frp-cooling-towers">FRP Cooling Towers</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Counter Flow Rectangular/Square Shape</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Counter Flow Rectangular/Square Shape (FRP)</h1>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-3xl">
            Modular FRP counter-flow towers in rectangular/square geometry designed for higher capacities and easy multi-cell expansion with low maintenance.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14">
        <div className="space-y-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-semibold">Upto 1500 TR With FRP Basin in single cell</h2>
          </div>

          <section className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">Product Description</h3>
            <div className="space-y-3 text-muted-foreground">
              <p><span className="font-semibold text-foreground">Casing:</span> The casing of Paltech cooling towers is constructed using FRP molded panels. All joints are sealed with a waterproof compound and fastened together with galvanized steel bolts or stainless steel bolts if specified. Additional embossing enhances the casing’s strength for durability.</p>
              <p><span className="font-semibold text-foreground">Fill:</span> The cooling towers are equipped with Honeycomb/Film Fills and Splash Type PVC/PP Fills, ensuring an extended contact area and higher heat transfer efficiency.</p>
              <p><span className="font-semibold text-foreground">Fan:</span> Paltech utilizes cast Aluminum alloy/S.S./FRP fans designed aerodynamically in an axial flow type, ensuring high efficiency in cooling operations.</p>
              <p><span className="font-semibold text-foreground">Drift Eliminator:</span> Specially designed multi-blade rotary drift eliminators, made of FRP/Aluminum sheets, reduce carryout losses by preventing the entrainment of moisture ropes in the air stream.</p>
              <p><span className="font-semibold text-foreground">Motor:</span> The cooling towers are powered by special low RPM totally enclosed motors of vertical, flange type with an enlarged and threaded shaft. These motors are sealed and weatherproofed to IP-55 protection standards. For larger capacities, a gear reducer-driven system is provided.</p>
              <p><span className="font-semibold text-foreground">Water Distribution System:</span> Hot water is raised by a hot water riser and transported inside through an M.S.H.D.G./P.V.C. hot water header. Branch distribution pipes, equipped with Polypropylene Splash cups/non-clogging nozzles, are connected to the hot water header, ensuring uniform water distribution over the entire fill. This system is maintenance-free.</p>
              <p><span className="font-semibold text-foreground">Capacity:</span> The cooling towers are available in capacities ranging from 3TR to 1500TR in a single cell. Larger capacities are available through multiple cell construction, providing flexibility for various cooling requirements.</p>
              <p><span className="font-semibold text-foreground">Note:</span> Dimensions & other Engineering Data are available with Proposal / Quotation.</p>
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h4 className="text-base sm:text-lg font-medium">Interested in our products?</h4>
                <p className="text-sm text-muted-foreground">Let’s talk business. Share your requirement to get a tailored proposal.</p>
              </div>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                Contact Sales
              </Link>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default FrpCounterFlowRectangularSquareShape2Content;


