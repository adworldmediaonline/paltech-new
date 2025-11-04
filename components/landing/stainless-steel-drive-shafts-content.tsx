import { ArrowRight, CheckCircle, Shield, Settings, Zap, Award, TrendingUp, Factory, Wrench, Package, Gauge, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function StainlessSteelDriveShaftsContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          SS (Stainless Steel) Drive Shafts – Precision-Engineered Power Transmission
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Paltech™ Cooling Towers and Equipments Ltd. is a leading manufacturer and exporter of <strong>Metallic Drive Shafts</strong> designed to deliver efficient, vibration-free, and long-lasting power transmission for all types of industrial cooling towers.
        </p>
        <p className="text-base sm:text-lg text-gray-600">
          Built for high torque and continuous operation, our galvanized steel and stainless-steel drive shafts ensure durability, corrosion resistance, and superior load handling — making them the ideal choice for critical cooling tower applications worldwide.
        </p>
      </div>

      {/* Engineered Section */}
      <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-2xl p-6 sm:p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Engineered for Performance and Reliability</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Every Paltech™ Metallic Drive Shaft is precision-balanced, single-span, and fully floating, designed to handle angular and parallel misalignments without stress or vibration.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Manufactured using high-grade metallic materials such as <strong>Galvanized Steel, Stainless Steel 304, and Stainless Steel 316</strong>, these shafts provide exceptional mechanical strength, torque efficiency, and longevity — even in harsh industrial environments involving moisture, heat, and corrosive elements.
        </p>
      </div>

      {/* Key Features */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Key Features of Paltech™ Metallic Drive Shafts</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: <Zap className="w-5 h-5" />,
              title: "High Torque Transmission",
              description: "Engineered to transmit power efficiently across high-speed cooling tower systems."
            },
            {
              icon: <Shield className="w-5 h-5" />,
              title: "Durable Construction",
              description: "Manufactured from GS, SS304, or SS316 for maximum corrosion resistance and operational stability."
            },
            {
              icon: <Package className="w-5 h-5" />,
              title: "Single-Span Tubular Design",
              description: "Ensures uniform load distribution and smooth power delivery."
            },
            {
              icon: <Settings className="w-5 h-5" />,
              title: "Flexible Couplings",
              description: "Absorb misalignment and prevent mechanical strain between motor and gearbox."
            },
            {
              icon: <Wrench className="w-5 h-5" />,
              title: "Interchangeable Components",
              description: "Standardized design ensures easy replacement and maintenance."
            },
            {
              icon: <Gauge className="w-5 h-5" />,
              title: "Fully Balanced for Smooth Operation",
              description: "Minimizes vibration and reduces wear and tear on connected equipment."
            },
            {
              icon: <Award className="w-5 h-5" />,
              title: "ANSI/AGMA 9000 – D11 Standards",
              description: "Guarantees precision engineering and international quality compliance."
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-5 bg-white rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Material Options */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Material Options</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              title: "Galvanized Steel (GS)",
              description: "Cost-effective and robust, ideal for standard industrial cooling tower applications with moderate environmental exposure.",
              features: ["Economical solution", "Good corrosion resistance", "High strength"]
            },
            {
              title: "Stainless Steel 304 (SS304)",
              description: "Enhanced corrosion resistance for environments with moderate chemical exposure and humidity.",
              features: ["Superior corrosion resistance", "Excellent durability", "Wide temperature range"]
            },
            {
              title: "Stainless Steel 316 (SS316)",
              description: "Premium-grade material for highly corrosive environments including coastal, saline, and chemical processing facilities.",
              features: ["Maximum corrosion resistance", "Chemical resistant", "Marine-grade quality"]
            }
          ].map((material, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{material.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{material.description}</p>
              <ul className="space-y-2">
                {material.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Technical Specifications</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-6 py-4 text-left font-semibold">Feature</th>
                <th className="px-6 py-4 text-left font-semibold">Specification</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Construction", spec: "Tubular, Single-Span" },
                { feature: "Material Options", spec: "Galvanized Steel, Stainless Steel 304, Stainless Steel 316" },
                { feature: "Standard Compliance", spec: "ANSI/AGMA 9000 – D11" },
                { feature: "Alignment", spec: "Flexible for Angular & Parallel Misalignment" },
                { feature: "Torque Capacity", spec: "High Torque Transmission for Industrial Applications" },
                { feature: "Coupling Type", spec: "Non-Lubricated, Maintenance-Free" },
                { feature: "Balancing Standard", spec: "Dynamically Balanced for Vibration-Free Operation" }
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-6 py-4 font-medium text-gray-900 border-t border-gray-200">{row.feature}</td>
                  <td className="px-6 py-4 text-gray-700 border-t border-gray-200">{row.spec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Applications */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Applications</h2>
        <p className="text-gray-700 mb-4">Paltech™ Metallic Drive Shafts are used in:</p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {[
            "Industrial Cooling Towers (FRP, Timber, RCC, and Crossflow)",
            "Power Plants and Energy Systems",
            "Petrochemical and Fertilizer Plants",
            "HVAC and Process Cooling Systems",
            "Steel, Sugar, and Chemical Industries"
          ].map((app, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-gray-700">{app}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Why Choose Paltech */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Why Choose Paltech™ Metallic Drive Shafts?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: <Award className="w-5 h-5" />,
              text: "Over 37 Years of Cooling Tower Expertise – Proven reliability in global markets."
            },
            {
              icon: <CheckCircle className="w-5 h-5" />,
              text: "ISO 9001:2015 and 45001:2018 Certified manufacturing for quality and safety."
            },
            {
              icon: <Settings className="w-5 h-5" />,
              text: "Custom Sizes and Configurations available for any cooling tower model."
            },
            {
              icon: <Wrench className="w-5 h-5" />,
              text: "Low Maintenance & Long Life: Precision-engineered to reduce wear and downtime."
            },
            {
              icon: <Factory className="w-5 h-5" />,
              text: "Global Reach: Exported to over 30 countries with full technical and after-sales support."
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200">
              <div className="text-primary shrink-0 mt-0.5">{item.icon}</div>
              <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Material Comparison Guide</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-6 py-4 text-left font-semibold">Feature</th>
                <th className="px-6 py-4 text-left font-semibold">Galvanized Steel</th>
                <th className="px-6 py-4 text-left font-semibold">SS 304</th>
                <th className="px-6 py-4 text-left font-semibold">SS 316</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  feature: "Corrosion Resistance",
                  gs: "Good",
                  ss304: "Excellent",
                  ss316: "Superior"
                },
                {
                  feature: "Cost",
                  gs: "Economical",
                  ss304: "Moderate",
                  ss316: "Premium"
                },
                {
                  feature: "Chemical Exposure",
                  gs: "Limited",
                  ss304: "Moderate",
                  ss316: "Excellent"
                },
                {
                  feature: "Coastal/Marine",
                  gs: "Not Recommended",
                  ss304: "Suitable",
                  ss316: "Ideal"
                }
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-6 py-4 font-medium text-gray-900 border-t border-gray-200">{row.feature}</td>
                  <td className="px-6 py-4 text-gray-700 border-t border-gray-200">{row.gs}</td>
                  <td className="px-6 py-4 text-gray-700 border-t border-gray-200">{row.ss304}</td>
                  <td className="px-6 py-4 text-gray-700 border-t border-gray-200">{row.ss316}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQs */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: "What materials are available for Paltech™ Metallic Drive Shafts?",
              answer: "Our drive shafts are available in Galvanized Steel, Stainless Steel 304, and Stainless Steel 316, depending on environmental and application requirements."
            },
            {
              question: "Are Paltech™ shafts maintenance-free?",
              answer: "Yes. Our non-lubricated flexible couplings ensure long-lasting, zero-maintenance performance."
            },
            {
              question: "Can these shafts be customized for specific torque or span requirements?",
              answer: "Absolutely. Paltech™ provides custom-engineered shafts designed as per your cooling tower capacity and operational load."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary/40 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 sm:p-12 text-center text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Looking for a Durable, High-Torque Metallic Drive Shaft?
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Trust Paltech™ Cooling Towers and Equipments Ltd. — a global leader in precision cooling tower components.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="tel:+911244499700" className="inline-flex items-center gap-2 text-white hover:text-white/90 font-semibold">
            📞 +91-124-4499700
          </a>
          <a href="mailto:paltech@paltech.in" className="inline-flex items-center gap-2 text-white hover:text-white/90 font-semibold">
            📩 paltech@paltech.in
          </a>
          <a href="https://www.paltech.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-white/90 font-semibold">
            🌐 www.paltech.in
          </a>
        </div>
      </div>
    </div>
  );
}

