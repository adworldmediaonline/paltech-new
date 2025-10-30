"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, Zap, Factory, Building2, Settings } from "lucide-react";

export function PaltechFrpGrpStructuralProfilesContent() {
  const productCategories = [
    { name: "FRP Deck Panels", href: "/paltech-frpgrp-structural-profiles/frp-deck-panels" },
    { name: "FRP Corrugated Sheets", href: "/paltech-frpgrp-structural-profiles/frp-corrugated-sheets" },
    { name: "FRP Gratings", href: "/paltech-frpgrp-structural-profiles/frp-gratings" },
    { name: "FRP Ladders", href: "/paltech-frpgrp-structural-profiles/frp-ladders" },
  ];

  const advantages = [
    {
      title: "Lightweight Construction",
      description: "Approximately 25-30% weight of steel and 65-70% of aluminum, enabling easier transport, handling, and installation while reducing structural load requirements."
    },
    {
      title: "Superior Strength Characteristics",
      description: "Equivalent structural strength comparable to steel with better performance than aluminum for numerous industrial structural applications and load-bearing requirements."
    },
    {
      title: "Excellent Corrosion Resistance",
      description: "Ideal for corrosive environments including chemical processing facilities, coastal applications, wastewater treatment plants, and industrial settings where traditional materials deteriorate."
    },
    {
      title: "Electrical Non-Conductivity",
      description: "Electrically non-conductive properties with very low thermal conductivity, making FRP profiles perfect for electrical utility applications, power transmission, and EMI-sensitive environments."
    },
    {
      title: "Dimensional Stability",
      description: "Lower thermal expansion coefficient than aluminum and slightly lower than steel, ensuring consistent dimensional performance across temperature variations."
    },
    {
      title: "EMI Compatibility",
      description: "Does not interfere with electromagnetic equipment and is compatible with radio frequency and microwave systems, making it ideal for telecommunications and defense applications."
    },
    {
      title: "Integrated Assembly Capability",
      description: "Can be fabricated as single assemblies, reducing part count, minimizing joinery, and simplifying installation processes."
    },
    {
      title: "Custom Aesthetic Options",
      description: "Pigmentable throughout thickness during manufacturing to match site conditions and aesthetic requirements, offering design flexibility beyond functional performance."
    },
  ];

  const industries = [
    { name: "Defence", applications: "Signal systems, bullet protection, shelters, ladders, stiffeners" },
    { name: "Automotive", applications: "Walkways, guards, enclosures" },
    { name: "Building & Construction", applications: "Handrails, flooring, platforms, structural members" },
    { name: "Chemical Processing", applications: "Corrosion-resistant structures, platforms, walkways" },
    { name: "Cooling Towers", applications: "Structural members and accessories, drift eliminators" },
    { name: "Electrical Utility", applications: "Non-conductive supports, cable trays, insulator rods" },
    { name: "Food & Beverage", applications: "Hygienic platforms, walkways, structural components" },
    { name: "Infrastructure", applications: "Bridges, walkways, fencing, architectural elements" },
    { name: "Water & Wastewater", applications: "Clarifier components, covers, structural supports" },
  ];

  const offerings = [
    "FRP Deck Panels", "FRP Corrugated Sheets", "FRP Gratings", "FRP Ladders",
    "FRP Cable Trays", "FRP Solar Mounting Structures", "FRP Hand Rails & Walkways",
    "FRP Scaffolding", "FRP Insulator Rods", "FRP Benches", "FRP Ducts",
    "FRP Fencing", "FRP Chequered Plates/Trenches", "FRP Wall Panels",
    "FRP Vent Pipes", "FRP Huts/Cabins", "FRP Junction/Panel Boxes",
    "FRP Storage Tanks", "FRP Lining Works"
  ];

  return (
    <section className="w-full">
      {/* Hero Introduction */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            FRP/GRP Structural Profiles & Pultruded Sections - Advanced Composite Solutions
          </h1>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Paltech manufactures premium <strong>FRP (Fiber Reinforced Plastic) and GRP (Glass Reinforced Plastic) structural profiles</strong> using advanced pultrusion technology, delivering superior alternatives to traditional materials like steel, aluminum, and wood. These engineered composite products offer exceptional <strong>corrosion resistance, lightweight construction, electrical non-conductivity, and long-term durability</strong>, making them ideal for demanding industrial, infrastructure, and specialty applications.
            </p>
            <p>
              Traditional construction materials face inherent limitations: wood suffers from fungal attack and moisture degradation, steel rusts in corrosive environments, and aluminum deforms under certain conditions. <strong>FRP pultruded sections address these challenges</strong> by providing a lightweight, corrosion-resistant, electrically non-conductive alternative with extended service life and minimal maintenance requirements. Our profiles can be customized to application-specific shapes, dimensions, and structural parameters.
            </p>
            <p>
              Manufactured using fully automatic, computer-controlled pultrusion processes, Paltech's FRP structural profiles maintain consistent quality, dimensional accuracy, and mechanical properties. Our comprehensive product range includes standard sections like angles, C-channels, I-beams, flats, square and round tubes, solid rods, and custom-engineered shapes tailored to specific project requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Advantages of FRP Pultruded Structural Profiles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{advantage.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Industry Applications & Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 p-5 rounded-xl border border-gray-200 hover:bg-primary/5 hover:border-primary transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.applications}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured FRP Structural Profile Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of FRP structural profiles engineered for specific applications and performance requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {productCategories.map((product, index) => (
              <Link
                key={index}
                href={product.href}
                className="group p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-primary group-hover:translate-x-2 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Offerings */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Complete FRP Product Portfolio
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Paltech offers fully automatic, computer-controlled pultrusion manufacturing for structural profiles including <strong>angles, C-channels, I-beams, flats, square & round tubes, solid rods, and custom shapes</strong>. Our manufacturing capabilities extend to a comprehensive range of FRP products:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {offerings.map((offering, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{offering}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Manufacturing Capabilities & Customization
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Factory className="w-6 h-6 text-primary" />
                Standard Profiles
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Angles, C-Channels, I-Beams
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Flats, Square & Round Tubes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Solid Rods & Custom Shapes
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Settings className="w-6 h-6 text-primary" />
                Custom Engineering
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Application-Specific Shapes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Custom Dimensions & Parameters
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Load-Optimized Designs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need Custom FRP Profiles?</h2>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Share your technical drawings, load requirements, and environmental conditions. Our engineering team will provide tailored solutions, detailed specifications, and competitive pricing for your FRP structural profile needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-primary px-8 py-4 font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Request Engineering Proposal
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default PaltechFrpGrpStructuralProfilesContent;
