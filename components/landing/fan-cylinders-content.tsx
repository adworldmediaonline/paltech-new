import { ArrowRight, CheckCircle, Shield, Settings, Zap, Award, TrendingUp, Factory, Wrench, Package, Flame, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FanCylindersContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Paltech™ Cooling Tower Fan Cylinders
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Upgrade your cooling tower efficiency and airflow with precision-engineered <strong>FRP fan cylinders</strong> from Paltech™ — customized for industrial power and reliability. Each cylinder is crafted using advanced fiberglass-reinforced plastic, guaranteeing exceptional strength, lightweight performance, and enhanced resistance to harsh environments.
        </p>
      </div>

      {/* Why Choose Section */}
      <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-2xl p-6 sm:p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Why Choose Paltech™ Fan Cylinders?</h2>
        <ul className="space-y-3">
          {[
            "Manufactured as per CTI STD-131(86) quality standards for optimal cooling tower performance.",
            "Available in diameters up to 11 meters to suit all industrial cooling tower requirements.",
            "Special fire-retardant FRP fan cylinders available on request for enhanced safety.",
            "Trusted by leading sectors including power, chemical, petrochemical, and process cooling industries."
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-gray-700 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Types of Fan Cylinders */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Types of Cooling Tower Fan Cylinders</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          Paltech™ offers a complete range of FRP fan cylinders to match every project's needs:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Standard Fan Cylinder",
              description: "Reliable and durable for most cooling tower applications.",
              icon: <Package className="w-8 h-8" />
            },
            {
              title: "10 Feet High Fan Cylinder",
              description: "Increased height for higher airflow efficiency in larger installations.",
              icon: <Wind className="w-8 h-8" />
            },
            {
              title: "14 Feet High Fan Cylinder",
              description: "Heavy-duty option for extra-large cooling tower setups.",
              icon: <TrendingUp className="w-8 h-8" />
            },
            {
              title: "18 Feet High Fan Cylinder",
              description: "Maximum cooling performance for high-capacity industrial towers.",
              icon: <Factory className="w-8 h-8" />
            }
          ].map((type, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 transition-transform">
                {type.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{type.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{type.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features & Technical Advantages */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Key Features & Technical Advantages</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: <Shield className="w-5 h-5" />,
              title: "Premium-Grade FRP Construction",
              description: "Built with fiberglass-reinforced plastic for superior strength and durability."
            },
            {
              icon: <Package className="w-5 h-5" />,
              title: "Lightweight Design",
              description: "Easy installation and reduced operational stress on the cooling tower structure."
            },
            {
              icon: <Flame className="w-5 h-5" />,
              title: "Fire Retardant Options",
              description: "Available on special request for safety compliance and risk mitigation."
            },
            {
              icon: <Award className="w-5 h-5" />,
              title: "Highly Corrosion-Resistant",
              description: "Ensures long service life in wet and humid conditions."
            },
            {
              icon: <Wind className="w-5 h-5" />,
              title: "Optimized Airflow",
              description: "Smooth finish reduces turbulence and lowers energy consumption."
            },
            {
              icon: <Settings className="w-5 h-5" />,
              title: "Custom Specifications",
              description: "Tailored diameter and height options for your project requirements."
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
                { feature: "Material", spec: "Fiberglass-Reinforced Plastic (FRP)" },
                { feature: "Diameter Options", spec: "Up to 11 meters" },
                { feature: "Height Options", spec: "Standard, 10ft, 14ft, 18ft" },
                { feature: "Quality Standard", spec: "CTI STD-131(86)" },
                { feature: "Fire Retardancy", spec: "On Special Request" },
                { feature: "Applications", spec: "Industrial Cooling Towers" }
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

      {/* Benefits Comparison */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">FRP vs. Metal Fan Cylinders</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/3 rounded-xl border border-primary/10">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-primary" />
              FRP Fan Cylinders
            </h3>
            <ul className="space-y-2">
              {[
                "Lightweight and easy to install",
                "Superior corrosion resistance",
                "Low maintenance requirements",
                "Excellent strength-to-weight ratio",
                "Cost-effective long-term solution",
                "Improved airflow efficiency"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Metal Fan Cylinders</h3>
            <ul className="space-y-2">
              {[
                "Heavier, requires more support",
                "Prone to corrosion and rust",
                "Higher maintenance needs",
                "Less resistant to chemicals",
                "Higher long-term costs",
                "Potential airflow restrictions"
              ].map((limitation, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-4 h-4 text-gray-400 shrink-0 mt-0.5">•</span>
                  <span className="text-gray-600 text-sm">{limitation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Applications */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Applications</h2>
        <p className="text-gray-700 mb-4">Paltech™ FRP Fan Cylinders are ideal for:</p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {[
            "Industrial Cooling Towers (All Types)",
            "Power Generation Plants",
            "Chemical and Petrochemical Facilities",
            "Process Cooling Systems",
            "HVAC Applications",
            "Manufacturing Industries"
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
              question: "What are the benefits of FRP fan cylinders vs. metal fan cylinders?",
              answer: "FRP cylinders are lighter, more corrosion-resistant, and require less maintenance compared to traditional metal units, delivering improved airflow and longer operational life."
            },
            {
              question: "Can Paltech™ supply customized sizes for fan cylinders?",
              answer: "Absolutely. Our team can fabricate fan cylinders in various sizes and diameters to match your cooling tower's exact requirements."
            },
            {
              question: "Are fire-retardant fan cylinders necessary for every installation?",
              answer: "Fire-retardant options are recommended for industries with higher safety needs, but standard FRP cylinders offer excellent resistance for most industrial environments."
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
          Enhance Your Cooling Tower's Performance!
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Choose Paltech™ Cooling Tower Fan Cylinders for dependable strength, efficiency, and custom engineering. Get an expert quote or technical consultation today!
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

