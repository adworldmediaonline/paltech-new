"use client";

import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export function PaltechFrpGrpStructuralProfilesContent() {
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
                <BreadcrumbPage>FRP/GRP Structural Profiles</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Paltech FRP/GRP Structural Profiles</h1>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-3xl">
            High‑strength pultruded fiberglass sections engineered to replace steel, wood, and aluminum—offering corrosion resistance, low maintenance, and excellent dielectric properties.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 space-y-10">
        {/* Solution intro */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">Why FRP Pultruded Sections?</h2>
          <div className="text-muted-foreground space-y-3">
            <p>
              Traditional materials deteriorate and cost more to maintain over time. Wooden items suffer fungal attack, steel rusts, and aluminum deforms under certain conditions.
            </p>
            <p>
              FRP pultruded sections provide a lightweight, corrosion‑resistant, electrically non‑conductive alternative with long service life. Profiles can be customized to application‑specific shapes and parameters.
            </p>
          </div>
        </section>

        {/* Advantages */}
        <section className="space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold">Advantages</h3>
          <ul className="list-disc pl-5 space-y-2 marker:text-primary text-muted-foreground">
            <li><span className="text-foreground font-medium">Lighter weight:</span> ~25–30% of steel and 65–70% of aluminum—easy transport, handling and installation.</li>
            <li><span className="text-foreground font-medium">Equivalent strength:</span> Comparable to structural steel and better than aluminum for numerous structural uses.</li>
            <li><span className="text-foreground font-medium">Anti‑corrosive:</span> Ideal for corrosive indoor/outdoor environments including chemical and coastal applications.</li>
            <li><span className="text-foreground font-medium">Non‑conductive:</span> Electrically non‑conductive with very low thermal conductivity.</li>
            <li><span className="text-foreground font-medium">Dimensional permanency:</span> Lower thermal expansion than aluminum; slightly lower than steel.</li>
            <li><span className="text-foreground font-medium">EMI compatibility:</span> Does not hinder electromagnetic equipment; friendly to radio/microwave systems.</li>
            <li><span className="text-foreground font-medium">Assembly of parts:</span> Can be fabricated as single assemblies, reducing part count and joinery.</li>
            <li><span className="text-foreground font-medium">Visual demand:</span> Pigmentable through thickness during manufacturing to match site conditions.</li>
          </ul>
        </section>

        {/* Applications */}
        <section className="space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold">Industry Applications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-muted-foreground">
            <div className="rounded-xl border border-gray-200 bg-white p-4">Defence — Signal systems, bullet protection, shelters, ladders, stiffeners</div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">Automobiles — Walkways, guards, enclosures</div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">Building/Construction — Handrails, flooring, platforms</div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">Chemical Processing — Corrosion‑resistant structures</div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">Cooling Towers — Structural members and accessories</div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">Electrical Utility — Non‑conductive supports</div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">Food & Beverage — Hygienic platforms</div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">Infrastructure — Bridges, walkways, fencing</div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">Water/Wastewater — Clarifier components, covers</div>
          </div>
        </section>

        {/* Offerings */}
        <section className="space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold">Paltech FRP Offerings</h3>
          <p className="text-muted-foreground">Fully automatic, computer‑controlled pultrusion for structural profiles: Angles, C‑Channels, I‑Beams, Flats, Square & Round Tubes, Solid Rods, and more. Custom and standard shapes available.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-primary">
            <Link href="#" className="hover:underline">FRP Deck Panels</Link>
            <Link href="#" className="hover:underline">FRP Corrugated Sheets</Link>
            <Link href="#" className="hover:underline">FRP Gratings</Link>
            <Link href="#" className="hover:underline">FRP Ladders</Link>
            <Link href="#" className="hover:underline">FRP Cable Trays</Link>
            <Link href="#" className="hover:underline">FRP Solar Mounting Structures</Link>
            <Link href="#" className="hover:underline">FRP Hand Rails & Walkway</Link>
            <Link href="#" className="hover:underline">FRP Scaffolding</Link>
            <Link href="#" className="hover:underline">FRP Insulator Rods</Link>
            <Link href="#" className="hover:underline">FRP Benches</Link>
            <Link href="#" className="hover:underline">FRP Ducts</Link>
            <Link href="#" className="hover:underline">FRP Fencing</Link>
            <Link href="#" className="hover:underline">FRP Chequered Plates/Trenches</Link>
            <Link href="#" className="hover:underline">FRP Wall Panels</Link>
            <Link href="#" className="hover:underline">FRP Vent Pipes</Link>
            <Link href="#" className="hover:underline">FRP Huts/Cabins or Portable Cabins</Link>
            <Link href="#" className="hover:underline">FRP Junction/Panel Boxes</Link>
            <Link href="#" className="hover:underline">FRP Storage Tanks</Link>
            <Link href="#" className="hover:underline">FRP Lining Works</Link>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h4 className="text-base sm:text-lg font-medium">Need custom profiles?</h4>
              <p className="text-sm text-muted-foreground">Share drawings, loads, and environment—get a tailored engineering proposal.</p>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              Request Proposal
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}

export default PaltechFrpGrpStructuralProfilesContent;


