import { ArrowRight, CheckCircle, Shield, Settings, Zap, Award, TrendingUp, Factory, Wrench, Package, Grid3x3, Bird } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FanGuardsContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Paltech™ Custom Fan Screens & Guards
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Protect your cooling tower and HVAC systems with Paltech™ <strong>custom metal fan screens and guards</strong> — designed for unmatched durability, safety, and performance. Our premium fan guards are manufactured from high-quality hot dipped galvanized steel (HDG) or stainless steel, providing long-lasting protection against debris, pests, and accidental contact.
        </p>
      </div>

      {/* Why Choose Section */}
      <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-2xl p-6 sm:p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Why Choose Paltech™ Metal Fan Screens?</h2>
        <ul className="space-y-3">
          {[
            {
              title: "Available in HDG or Stainless Steel",
              description: "Choose the right material for your environment and longevity requirements."
            },
            {
              title: "Custom Sized for Every Application",
              description: "Sizes range from 6 feet (180 cm) to 18 feet (550 cm) diameter, ensuring perfect fit for any cooling tower or HVAC system."
            },
            {
              title: "Universal Compatibility",
              description: "Precision-built for Paltech™ products and suitable for all major brands and models, regardless of year or make."
            },
            {
              title: "Rapid Turnaround",
              description: "Fast delivery and cost-effective fabrication for business continuity."
            },
            {
              title: "Multi-Industry Utility",
              description: "Ideal for cooling towers, MEP (Mechanical, Electrical, Plumbing), commercial HVAC, and custom-engineered projects."
            }
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="text-gray-900 font-semibold">{item.title}:</span>{" "}
                <span className="text-gray-700">{item.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Features & Options */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Features & Options</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: <Grid3x3 className="w-5 h-5" />,
              title: "Custom Mesh Patterns",
              description: "Diamond, square, rectangular, circular, or custom shapes to suit your specific requirements."
            },
            {
              icon: <Shield className="w-5 h-5" />,
              title: "Multiple Metal Gauges",
              description: "Various weights for structural stability and tailored protection levels."
            },
            {
              icon: <Settings className="w-5 h-5" />,
              title: "Advanced Mounting Solutions",
              description: "Hassle-free installation with custom or standard mounting options."
            },
            {
              icon: <Bird className="w-5 h-5" />,
              title: "Comprehensive Protection",
              description: "Effective in blocking debris, birds, rodents, and minimizing operational risks."
            },
            {
              icon: <Package className="w-5 h-5" />,
              title: "Optional Fabrication",
              description: "Sump screens and cold water basin debris guards for enhanced system life."
            },
            {
              icon: <Award className="w-5 h-5" />,
              title: "Quality Materials",
              description: "Premium HDG and stainless steel ensure long-lasting durability."
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
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Hot Dipped Galvanized (HDG) Steel",
              description: "Superior corrosion resistance with a protective zinc coating that extends service life in outdoor and wet environments.",
              features: [
                "Cost-effective solution",
                "Excellent weather resistance",
                "Long-lasting protection",
                "Ideal for standard applications"
              ]
            },
            {
              icon: <Award className="w-8 h-8" />,
              title: "Stainless Steel",
              description: "Premium-grade material offering maximum corrosion resistance, ideal for harsh chemical environments and coastal installations.",
              features: [
                "Maximum durability",
                "Chemical resistant",
                "Marine-grade quality",
                "Premium aesthetic appeal"
              ]
            }
          ].map((material, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                {material.icon}
              </div>
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

      {/* Mesh Pattern Options */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Mesh Pattern Options</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              pattern: "Diamond Mesh",
              description: "Classic diagonal pattern for general protection"
            },
            {
              pattern: "Square Mesh",
              description: "Traditional grid pattern for standard applications"
            },
            {
              pattern: "Rectangular Mesh",
              description: "Extended openings for specific airflow needs"
            },
            {
              pattern: "Custom Patterns",
              description: "Tailored designs for unique requirements"
            }
          ].map((mesh, index) => (
            <div
              key={index}
              className="p-5 bg-white rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-md transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-3">
                <Grid3x3 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{mesh.pattern}</h3>
              <p className="text-gray-600 text-sm">{mesh.description}</p>
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
                { feature: "Metal Options", spec: "Hot Dipped Galvanized (HDG), Stainless Steel" },
                { feature: "Diameter Size Range", spec: "6' (180 cm) – 18' (550 cm)" },
                { feature: "Mesh Pattern Options", spec: "Diamond, Square, Rectangular, Circular, Custom" },
                { feature: "Custom Applications", spec: "Bird, Rodent, Debris, Sump Screens" },
                { feature: "Mounting Solutions", spec: "Custom, Standard" },
                { feature: "Industry Compatibility", spec: "All Cooling Towers, HVAC Units, MEP Systems" }
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
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Fan Screens & Guard Applications</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Factory className="w-7 h-7" />,
              title: "Industrial Cooling Towers",
              description: "Power, chemical, steel, and process cooling installations"
            },
            {
              icon: <Settings className="w-7 h-7" />,
              title: "HVAC Systems",
              description: "Air handling units in commercial buildings"
            },
            {
              icon: <Wrench className="w-7 h-7" />,
              title: "MEP Installations",
              description: "Mechanical, electrical, and plumbing systems"
            },
            {
              icon: <Bird className="w-7 h-7" />,
              title: "Specialized Screens",
              description: "Debris, birds, rodents, and security protection"
            },
            {
              icon: <Package className="w-7 h-7" />,
              title: "Basin Protection",
              description: "Cold water basin and outlet sump screens"
            },
            {
              icon: <Shield className="w-7 h-7" />,
              title: "Safety Guards",
              description: "Prevent accidental contact and ensure worker safety"
            }
          ].map((app, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                {app.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{app.title}</h3>
              <p className="text-gray-600 text-sm">{app.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: "What are fan screens and why does my cooling tower need one?",
              answer: "Fan screens and guards prevent debris, wildlife, and accidental contact with fan blades, extending the lifespan and safety of cooling towers and HVAC systems."
            },
            {
              question: "Can Paltech™ screens fit non-Paltech™ cooling towers?",
              answer: "Yes. Our products are custom fabricated for all major brands and models, ensuring universal compatibility and exact fit—regardless of year or manufacturer."
            },
            {
              question: "How do I select the right mesh pattern or metal type?",
              answer: "Our engineering team will consult with you on your operational needs and environment to recommend the ideal material, gauge, and mesh pattern for your application."
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
          Protect Your Cooling System — Order Today!
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Boost safety and system life with Paltech™ custom fan screens and guards. Contact our engineering team for expert solutions and fast quotes tailored to your specifications.
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

