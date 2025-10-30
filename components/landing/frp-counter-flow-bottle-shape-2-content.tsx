"use client";

import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export function FrpCounterFlowBottleShape2Content() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 pt-6">
        <div className="space-y-10">
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold">Product Description</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Our FRP cooling towers are crafted using a specially curated blend of raw materials, meticulously chosen to withstand corrosion, resist waterborne bacteria and organisms, and maintain a lightweight structure. This unique composition enables easy roof installation with specialized reinforcement, ensuring flexibility in design. The vertical induced draft counter-flow design allows for installation in any direction, providing freedom in placement.
              </p>
              <p>
                One of the key advantages of our cooling towers is their energy efficiency. The innovative design minimizes air resistance to water, resulting in lower power consumption and reduced operational costs. Additionally, our cooling towers are available in a variety of colors, allowing them to seamlessly blend with the exterior architectural aesthetics.
              </p>
              <p>
                Furthermore, the cooling system is equipped with a direct-driven axial fan, eliminating the issues often faced with belt and gear drives. This ensures a reliable and trouble-free operation, enhancing the overall efficiency and performance of the cooling tower.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">Construction and Components</h3>
            <div className="space-y-3 text-muted-foreground">
              <p><span className="font-semibold text-foreground">Casing:</span> The cooling tower casing is constructed from selected grade materials of tough fiberglass reinforced polyester and resins, ensuring durability and longevity. Additional embossing is applied for extra strength, especially in the case of larger cooling towers.</p>
              <p><span className="font-semibold text-foreground">Fill:</span> Paltech cooling towers feature Honeycomb/Film Fills and Splash type PVC/PP fills, providing an extended contact area with high heat transfer efficiency. The strategic crossing of air and water streams creates diffused turbulence conducive to efficient evaporation and heat transfer.</p>
              <p><span className="font-semibold text-foreground">Basin:</span> The FRP basin is meticulously designed to be completely leak-proof, preventing spillage and seepage of water. Its deep sump design ensures a maximum water level at all times and is reinforced with additional stiffening to handle extra water weight. For larger capacities, an RCC basin is recommended.</p>
              <p><span className="font-semibold text-foreground">Sprinkler:</span> Paltech specially designed rotary sprinkler heads are made of durable materials such as Aluminum alloy or Stainless Steel (S.S.) to prevent corrosion. These sprinklers are fitted with sealed ball bearings to handle both thrust and radial loads. S.S. and Brass sprinklers are also available at an extra cost.</p>
              <p><span className="font-semibold text-foreground">Fan:</span> Paltech fan is made of cast Aluminum alloy/FRP and designed aerodynamically in an axial flow type to achieve high efficiency.</p>
              <p><span className="font-semibold text-foreground">Drift Eliminator:</span> Specially designed multi-blade rotary drift eliminators, made of FRP sheets/Aluminum, are incorporated to reduce carryout losses through the entrainment of moisture drops in the stream. Large capacity cooling towers also feature additional PVC eliminators.</p>
              <p><span className="font-semibold text-foreground">Motor:</span> Special low RPM totally enclosed motors of vertical, flange type with an enlarged and threaded shaft and sealed top are supplied with the cooling tower. These motors are weatherproof and constructed with IP-55 protection. For larger capacities, a gear reducer-driven system is provided.</p>
              <p><span className="font-semibold text-foreground">Support & Hardware:</span> All tower components, including tower supports, motor supports, and leg supports, are either hot-dip galvanized or epoxy coated for corrosion resistance. Hardware is made of galvanized steel, with the option for Stainless Steel or Phosphor Bronze hardware available upon request at an additional cost.</p>
              <p><span className="font-semibold text-foreground">Capacity:</span> The cooling towers are available in capacities ranging from 3TR to 700TR in a single cell, catering to a wide range of cooling needs.</p>
              <p><span className="font-semibold text-foreground">Note:</span> Dimensions & other Engineering Data are available with Proposal / Quotation.</p>
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h4 className="text-base sm:text-lg font-medium">Interested in our products?</h4>
                <p className="text-sm text-muted-foreground">Let’s talk business. Share your application and get a proposal.</p>
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

export default FrpCounterFlowBottleShape2Content;


