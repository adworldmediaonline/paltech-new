import { ArrowRight, CheckCircle, Shield, Settings, Zap, Award, Wrench, Factory, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function DriveShaftsContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Drive Shafts – Precision-Balanced Power Transmission
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          At Paltech™ Cooling Towers and Equipments Ltd., we manufacture high-performance <strong>drive shafts</strong> engineered to deliver smooth, vibration-free power transmission for all types of industrial cooling towers. Designed for long service life, our single-piece dynamically balanced drive shafts ensure maximum mechanical efficiency with minimal maintenance requirements.
        </p>
        <p className="text-base sm:text-lg text-gray-600">
          With over 39+ years of manufacturing expertise, Paltech™ has become a trusted name in cooling tower components across India and over 30 export countries. Our drive shafts are built to perform efficiently under the toughest industrial conditions — from power plants to chemical and steel industries.
        </p>
      </div>

      {/* Engineered Section */}
      <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-2xl p-6 sm:p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Engineered for Efficiency and Longevity</h2>
        <p className="text-gray-700 leading-relaxed">
          Paltech™ Drive Shafts are fully floating, single-piece designs built for optimum alignment and smooth torque transmission. Their non-lubricated flexible couplings and precision balancing eliminate vibrations, reduce wear, and enhance operational stability — resulting in a maintenance-free experience and extended equipment lifespan.
        </p>
      </div>

      {/* Key Features */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Key Features</h2>
        <div className="grid gap-4">
          {[
            {
              icon: <Settings className="w-6 h-6" />,
              title: "Single-Piece Fully Floating Design",
              description: "Ensures perfect alignment between motor and gearbox."
            },
            {
              icon: <TrendingUp className="w-6 h-6" />,
              title: "Dynamically Balanced",
              description: "Minimizes vibration and mechanical stress for silent operation."
            },
            {
              icon: <Wrench className="w-6 h-6" />,
              title: "Non-Lubricated Flexible Couplings",
              description: "Zero lubrication needed—ensures maintenance-free performance."
            },
            {
              icon: <Factory className="w-6 h-6" />,
              title: "Multiple Material Options",
              description: "Galvanized Steel, Stainless Steel, and Carbon Fiber (HDGMS Type) available."
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "High Torque Transmission",
              description: "Suitable for heavy-duty cooling tower applications up to 375 HP and beyond."
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Material Options */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Material Options</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Galvanized Steel Drive Shafts",
              description: "Cost-effective and durable for standard applications.",
              link: "/spares/drive-shafts/galvanized-steel"
            },
            {
              title: "Stainless Steel Drive Shafts",
              description: "Corrosion-resistant and suitable for humid or chemical environments.",
              link: "/spares/drive-shafts/stainless-steel"
            },
            {
              title: "Carbon Fiber Drive Shafts (HDGMS)",
              description: "Lightweight, high-strength alternative for energy-efficient operations.",
              link: "/spares/drive-shafts/carbon-fiber"
            }
          ].map((material, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{material.title}</h3>
              <p className="text-gray-600 mb-4">{material.description}</p>
              <Link href={material.link}>
                <Button variant="outline" size="sm" className="group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Paltech™ */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Why Choose Paltech™ Drive Shafts</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: <Award className="w-5 h-5" />,
              text: "ISO Certified Manufacturing: Produced under ISO 9001:2015 and ISO 45001:2018 quality standards."
            },
            {
              icon: <CheckCircle className="w-5 h-5" />,
              text: "Maintenance-Free Design: Non-lubricated flexible couplings eliminate the need for frequent servicing."
            },
            {
              icon: <Settings className="w-5 h-5" />,
              text: "Custom Lengths & Configurations: Built to exact specifications for diverse cooling tower models."
            },
            {
              icon: <Shield className="w-5 h-5" />,
              text: "Corrosion & Fatigue Resistant: Designed to perform in harsh industrial environments."
            },
            {
              icon: <TrendingUp className="w-5 h-5" />,
              text: "Proven Global Reliability: Trusted by industries in power generation, petrochemicals, fertilizers, HVAC, and refineries."
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200">
              <div className="text-primary shrink-0 mt-0.5">{item.icon}</div>
              <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
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
                { feature: "Type", spec: "Single-Piece Floating Type" },
                { feature: "Coupling", spec: "Non-Lubricated Flexible" },
                { feature: "Balance", spec: "Dynamically Balanced" },
                { feature: "Material Options", spec: "Galvanized Steel, Stainless Steel, Carbon Fiber" },
                { feature: "Horsepower Range", spec: "Up to 375 HP" },
                { feature: "Maintenance", spec: "No Lubrication Required" },
                { feature: "Applications", spec: "Induced Draft & Forced Draft Cooling Towers" }
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
        <p className="text-gray-700 mb-4">Paltech™ Drive Shafts are ideal for:</p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {[
            "Industrial Cooling Towers (FRP, Timber, RCC types)",
            "Process Cooling Systems",
            "Power Plants & Thermal Stations",
            "Chemical & Petrochemical Industries",
            "Steel & Fertilizer Plants"
          ].map((app, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-gray-700">{app}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* FAQs */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: "What makes Paltech™ drive shafts different from others?",
              answer: "Our drive shafts are precision-engineered, dynamically balanced, and maintenance-free, ensuring smooth operation even in demanding industrial environments."
            },
            {
              question: "Can I get a customized drive shaft for my cooling tower?",
              answer: "Yes. We manufacture drive shafts in custom lengths and diameters to fit your specific cooling tower design."
            },
            {
              question: "Are carbon fiber drive shafts suitable for high-humidity conditions?",
              answer: "Absolutely. Carbon fiber shafts are ideal for high-moisture environments, offering lightweight performance with superior corrosion resistance."
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
          Upgrade Your Cooling Tower's Performance
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Get Paltech™ Drive Shafts — the perfect balance of strength, stability, and efficiency.
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

