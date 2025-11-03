import { ArrowRight, CheckCircle, Shield, Settings, Zap, Award, TrendingUp, Factory, Droplets, Package, Wind, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FillsContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Paltech™ Cooling Tower Fill Solutions
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          The <strong>cooling tower fill</strong> is the essential component that drives the cooling process by maximizing the contact surface area between air and water. Paltech™ offers advanced fill media designed to optimize heat exchange, improve evaporation rates, and support reliable cooling tower performance across industries.
        </p>
      </div>

      {/* What Are Cooling Tower Fills */}
      <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-2xl p-6 sm:p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What Are Cooling Tower Fills?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Cooling tower fills, also known as <strong>fill packs</strong> or <strong>wet decks</strong>, provide an extended air-water interface to facilitate heat transfer. Water flows downward through the fill by gravity while air simultaneously flows across, enabling effective cooling as water evaporates.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The principle goal of fill media is to maximize the water surface area exposed to airflow for as long as possible, thereby boosting cooling rates and energy efficiency.
        </p>
      </div>

      {/* Types of Fills */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Types of Paltech™ Cooling Tower Fills</h2>
        <div className="grid gap-6">
          {[
            {
              icon: <Waves className="w-7 h-7" />,
              title: "Film-Type Fills",
              description: "Designed with chevron patterns forming thin, water sheets to increase surface contact with air for maximal cooling. Ideal for clean water conditions and retrofit applications.",
              link: "/spares/fills/pvc-film"
            },
            {
              icon: <Droplets className="w-7 h-7" />,
              title: "Splash-Type Fills",
              description: "More rugged and suited for environments with water contamination or dusty factory air. The irregular water droplets enhance heat transfer while resisting fouling.",
              link: "/spares/fills/pvc-splash-fills"
            },
            {
              icon: <Settings className="w-7 h-7" />,
              title: "Fill-Less Designs",
              description: "For high-temperature or special cases, Paltech™ engineers fill-less cooling towers delivering equivalent cooling capacity without traditional fill media."
            }
          ].map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6 sm:p-8 flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  {type.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  {type.link && (
                    <Link href={type.link}>
                      <Button variant="outline" size="sm" className="group">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium PVC Fill Packs */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Premium PVC Fill Packs</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Paltech™ fill packs are carefully manufactured from high-quality vacuum-formed virgin PVC sheets, measuring <strong>600 x 300 mm (1 CFT)</strong> and <strong>600 x 150 mm (1/2 CFT)</strong>, with folded edges to minimize attrition and extend service life.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: <Package className="w-5 h-5" />, text: "Material: Virgin PVC with corrosion and chemical resistance" },
            { icon: <Shield className="w-5 h-5" />, text: "Colors: Available in durable blue and black options" },
            { icon: <Factory className="w-5 h-5" />, text: "Applications: Suitable for FRP induced draft, counterflow, and crossflow towers" },
            { icon: <Award className="w-5 h-5" />, text: "Benefits: Reduced fouling, enhanced durability, longer lifecycle" }
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200">
              <div className="text-primary shrink-0 mt-0.5">{item.icon}</div>
              <span className="text-gray-700 text-sm leading-relaxed">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Crossflow vs Counterflow */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Crossflow vs. Counterflow Fill Configurations</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-6 py-4 text-left font-semibold">Feature</th>
                <th className="px-6 py-4 text-left font-semibold">Crossflow Fill</th>
                <th className="px-6 py-4 text-left font-semibold">Counterflow Fill</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  feature: "Airflow Direction",
                  crossflow: "Air enters horizontally from tower sides",
                  counterflow: "Air enters vertically from tower bottom"
                },
                {
                  feature: "Water Flow",
                  crossflow: "Hot water flows downward from the tower top",
                  counterflow: "Hot water is evenly distributed over the fill media"
                },
                {
                  feature: "Cooling Efficiency",
                  crossflow: "Effective for lower height towers",
                  counterflow: "Best for tall towers with high cooling loads"
                },
                {
                  feature: "Application Suitability",
                  crossflow: "Industrial settings with wide airflow needs",
                  counterflow: "Compact high-efficiency cooling requirements"
                }
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-6 py-4 font-medium text-gray-900 border-t border-gray-200">{row.feature}</td>
                  <td className="px-6 py-4 text-gray-700 border-t border-gray-200">{row.crossflow}</td>
                  <td className="px-6 py-4 text-gray-700 border-t border-gray-200">{row.counterflow}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Technical Specifications</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-6 py-4 text-left font-semibold">Specification</th>
                <th className="px-6 py-4 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                { spec: "Material", desc: "Virgin PVC (Vacuum-formed, edge folded)" },
                { spec: "Standard Pack Sizes", desc: "600 x 300 mm (1 CFT) and 600 x 150 mm (1/2 CFT)" },
                { spec: "Operating Temperature", desc: "Up to 55°C" },
                { spec: "Color Options", desc: "Blue, Black" },
                { spec: "Compatibility", desc: "FRP Induced Draft, Crossflow, Counterflow Towers" },
                { spec: "Surface Area", desc: "5.85 sq. meters wetted area per CFT pack" },
                { spec: "Durability Features", desc: "Corrosion-resistant, chemically stable" }
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-6 py-4 font-medium text-gray-900 border-t border-gray-200">{row.spec}</td>
                  <td className="px-6 py-4 text-gray-700 border-t border-gray-200">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Why Choose Paltech */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Why Choose Paltech™ Cooling Tower Fills?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              icon: <TrendingUp className="w-5 h-5" />,
              text: "Enhanced cooling efficiency reduces operational costs and energy use."
            },
            {
              icon: <Shield className="w-5 h-5" />,
              text: "High resistance to chemical attack and corrosion ensures long longevity."
            },
            {
              icon: <Settings className="w-5 h-5" />,
              text: "Reduced maintenance and fouling with edge folded technology."
            },
            {
              icon: <Factory className="w-5 h-5" />,
              text: "Wide compatibility with most industrial cooling tower designs."
            },
            {
              icon: <Award className="w-5 h-5" />,
              text: "Expert support for optimizing tower fill selection and configuration."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <div className="text-primary shrink-0 mt-0.5">{item.icon}</div>
              <span className="text-gray-700 text-sm leading-relaxed">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Related Products */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Related Fill Components</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Cooling Tower Splash Bar",
              link: "/spares/cooling-tower-splash-bar"
            },
            {
              title: "Drift Eliminator",
              link: "/spares/drift-eliminator"
            },
            {
              title: "FC Valve",
              link: "/spares/fc-valve"
            },
            {
              title: "Nozzles",
              link: "/spares/nozzles"
            }
          ].map((product, index) => (
            <Link
              key={index}
              href={product.link}
              className="p-5 bg-white rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">{product.title}</h3>
            </Link>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: "How do cooling tower fills improve efficiency?",
              answer: "By increasing the water surface area exposed to air, fills enhance evaporation and heat transfer, crucial to energy-efficient cooling tower operation."
            },
            {
              question: "Which fill type should I choose for contaminated water?",
              answer: "Splash-type fills are best suited for dirty or chemically contaminated water, as they resist clogging and fouling better than film fills."
            },
            {
              question: "What distinguishes crossflow from counterflow fills?",
              answer: "Crossflow fills have horizontal airflow intersecting vertical water flow, ideal for wider towers. Counterflow fills arrange air and water flow in opposite vertical directions, optimizing cooling in tall towers."
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
          Optimize Your Cooling Tower Today!
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Elevate heat exchange and reduce maintenance costs with Paltech™ cooling tower fill solutions tailored to your facility's needs. Contact Paltech™ for expert advice and a custom quote.
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

