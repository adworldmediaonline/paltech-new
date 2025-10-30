"use client";

import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export function FrpFanLessInducedDraftJetTypeFrpContent() {
  return (
    <section className="w-full">
      {/* Header offset for fixed header */}
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
                <BreadcrumbPage>Fan less Induced Draft – Jet Type FRP</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Fan less Induced Draft – Jet Type FRP</h1>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-3xl">
            Virtually zero-maintenance FRP cooling towers using jet type induction—no traditional fan assembly—optimized for efficient heat transfer and reliable operation.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14">
        <div className="space-y-10">
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold">Product Description</h2>
            <div className="space-y-3 text-muted-foreground">
              <p><span className="font-semibold text-foreground">Casing:</span> High‑quality FRP molded panels, securely joined and sealed; reinforced for strength and corrosion resistance.</p>
              <p><span className="font-semibold text-foreground">Fill:</span> Advanced film/splash fills enhance contact between air and water for efficient heat transfer.</p>
              <p><span className="font-semibold text-foreground">Jet Type System:</span> Jet system generates a powerful, directed water flow, eliminating the need for traditional fans and creating a natural draft through the tower.</p>
              <p><span className="font-semibold text-foreground">Drift Elimination:</span> Multi‑blade drift eliminators reduce carryout losses by capturing moisture droplets.</p>
              <p><span className="font-semibold text-foreground">Water Distribution:</span> Precisely designed pipes and nozzles ensure uniform distribution over the fill for maintenance‑free operation.</p>
              <p><span className="font-semibold text-foreground">Applications:</span> Ideal for installations requiring low noise, low maintenance, and efficient cooling where conventional fan systems are impractical.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">Technical Description</h3>
            <div className="space-y-3 text-muted-foreground">
              <p><span className="font-semibold text-foreground">Material of Construction:</span> Louvers in FRP; distribution in GI/PVC; structure in HDGMS/Pultruded FRP; nozzles in specially designed Nylon/PP.</p>
              <p><span className="font-semibold text-foreground">Basin Options:</span> Available with FRP‑coated MS basin or without basin depending on requirements.</p>
              <p><span className="font-semibold text-foreground">Capacity:</span> From 150 TR and above, scalable for diverse industrial applications.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">Key Features</h3>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary text-muted-foreground">
              <li><span className="text-foreground font-medium">Low Maintenance:</span> Fan‑less and jet type design minimizes moving parts and service needs.</li>
              <li><span className="text-foreground font-medium">Efficient Heat Transfer:</span> Optimized air‑water interaction ensures excellent thermal performance.</li>
              <li><span className="text-foreground font-medium">Durable Construction:</span> High‑quality FRP, GI, PVC with engineered nozzles for longevity.</li>
              <li><span className="text-foreground font-medium">Customization:</span> Multiple models and configurations to meet specific cooling demands.</li>
            </ul>
            <p className="text-muted-foreground"><span className="font-semibold text-foreground">Note:</span> Dimensions & other Engineering Data are available with Proposal / Quotation.</p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h4 className="text-base sm:text-lg font-medium">Interested in our products?</h4>
                <p className="text-sm text-muted-foreground">Share your application to get a tailored proposal.</p>
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

export default FrpFanLessInducedDraftJetTypeFrpContent;


