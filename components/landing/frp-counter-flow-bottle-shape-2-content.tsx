"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Droplets, Settings, Zap, Shield, Factory } from "lucide-react";

export function FrpCounterFlowBottleShape2Content() {
  const keyFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Corrosion-Resistant Construction",
      description: "Specially curated blend of raw materials engineered to withstand corrosion, resist waterborne bacteria and organisms, ensuring long-term durability and performance."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Energy-Efficient Design",
      description: "Innovative design minimizing air resistance to water, resulting in lower power consumption, reduced operational costs, and enhanced environmental sustainability."
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Lightweight & Flexible Installation",
      description: "Lightweight structure enabling easy roof installation with specialized reinforcement, providing maximum design flexibility and installation versatility."
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Direct-Driven Axial Fan",
      description: "Equipped with direct-driven axial fan eliminating belt and gear drive issues, ensuring reliable, trouble-free operation with enhanced efficiency and performance."
    },
  ];

  const components = [
    {
      title: "High-Strength FRP Casing",
      description: "Constructed from selected grade materials of tough fiberglass reinforced polyester and resins, ensuring exceptional durability and longevity. Additional embossing applied for extra strength in larger cooling towers."
    },
    {
      title: "Advanced Fill Media",
      description: "Features Honeycomb/Film Fills and Splash type PVC/PP fills providing extended contact area with high heat transfer efficiency. Strategic crossing of air and water streams creates diffused turbulence for efficient evaporation."
    },
    {
      title: "Leak-Proof FRP Basin",
      description: "Meticulously designed completely leak-proof basin preventing spillage and seepage. Deep sump design ensures maximum water level with reinforced stiffening for extra water weight handling."
    },
    {
      title: "Specialized Rotary Sprinklers",
      description: "Paltech-designed rotary sprinkler heads made of durable Aluminum alloy or Stainless Steel preventing corrosion. Fitted with sealed ball bearings handling both thrust and radial loads."
    },
    {
      title: "Aerodynamic Fan Systems",
      description: "Cast Aluminum alloy/FRP fans designed aerodynamically in axial flow type achieving high efficiency and optimal air movement for superior cooling performance."
    },
    {
      title: "Multi-Blade Drift Eliminators",
      description: "Specially designed multi-blade rotary drift eliminators made of FRP sheets/Aluminum reducing carryout losses through entrainment of moisture drops. Large capacity towers feature additional PVC eliminators."
    },
    {
      title: "Weatherproof Motor Systems",
      description: "Special low RPM totally enclosed motors of vertical, flange type with enlarged threaded shaft and sealed top. Weatherproof construction with IP-55 protection. Gear reducer-driven systems for larger capacities."
    },
    {
      title: "Corrosion-Resistant Hardware",
      description: "All tower components including supports, motor supports, and leg supports are hot-dip galvanized or epoxy coated. Hardware available in galvanized steel, with Stainless Steel or Phosphor Bronze options."
    }
  ];

  return (
    <section className="w-full">
      {/* Hero Introduction */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            FRP Counter Flow Bottle Shape Cooling Towers - Aesthetic Design Meets Superior Performance
          </h1>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Paltech's <strong>FRP Counter Flow Bottle Shape Cooling Towers</strong> represent the perfect fusion of <strong>aesthetic appeal and functional excellence</strong>, engineered for facilities requiring both superior cooling performance and architectural integration. These uniquely designed cooling towers feature a distinctive bottle-shaped profile that seamlessly blends with modern architectural aesthetics while delivering exceptional thermal efficiency.
            </p>
            <p>
              Our FRP cooling towers are crafted using a <strong>specially curated blend of premium raw materials</strong>, meticulously selected to withstand corrosion, resist waterborne bacteria and organisms, and maintain lightweight structural integrity. This unique composition enables easy roof installation with specialized reinforcement, ensuring maximum design flexibility. The <strong>vertical induced draft counter-flow design</strong> allows for installation in any direction, providing complete freedom in placement and orientation.
            </p>
            <p>
              One of the key advantages of our bottle-shaped cooling towers is their <strong>superior energy efficiency</strong>. The innovative design minimizes air resistance to water, resulting in significantly lower power consumption and reduced operational costs. Additionally, our cooling towers are available in a variety of colors, allowing them to seamlessly blend with your facility's exterior architectural aesthetics while maintaining optimal performance.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Features & Advantages
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Premium Components & Construction Details
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {components.map((component, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  {component.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity & Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Capacity Range & Specifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Settings className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Capacity Range</h3>
                    <p className="text-gray-600">Available from <strong>3TR to 700TR</strong> in a single cell, catering to diverse cooling requirements from small commercial applications to large industrial facilities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Installation Flexibility</h3>
                    <p className="text-gray-600">Vertical induced draft counter-flow design enables installation in any direction, providing maximum flexibility for space-constrained applications.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Droplets className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Aesthetic Options</h3>
                    <p className="text-gray-600">Available in multiple colors allowing seamless integration with facility aesthetics and architectural requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Large Capacity Options</h3>
                    <p className="text-gray-600">For larger capacities exceeding FRP basin limitations, RCC (Reinforced Cement Concrete) basin options are recommended and available.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-gray-900">Note:</span> Detailed dimensions, engineering drawings, performance curves, and comprehensive technical data are available with formal proposals and quotations. Please contact our technical team for detailed specifications tailored to your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ideal Applications & Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Commercial HVAC Systems",
              "Office Buildings",
              "Shopping Malls",
              "Hotels & Resorts",
              "Healthcare Facilities",
              "Educational Institutions",
              "Industrial Manufacturing",
              "Data Centers",
              "Roof-Top Installations",
              "Architecturally Sensitive Applications",
              "Retail Complexes",
              "Mixed-Use Developments"
            ].map((app, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-primary/5 hover:border-primary transition-colors">
                <p className="text-gray-700 font-medium">{app}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Interested in Bottle Shape FRP Cooling Towers?</h2>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Share your cooling capacity requirements, installation constraints, and aesthetic preferences. Our cooling tower experts will provide customized recommendations, detailed specifications, and competitive pricing.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-primary px-8 py-4 font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contact Sales Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default FrpCounterFlowBottleShape2Content;
