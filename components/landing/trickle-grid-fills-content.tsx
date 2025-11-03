import { CheckCircle, Shield, Droplets, Factory, Zap, Settings, Award, Package, Grid3x3, Waves } from "lucide-react";

export function TrickleGridFillsContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Paltech™ Cooling Tower Trickle Grid Fills
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Paltech™ Cooling Tower <strong>Trickle Grid Fills</strong> offer optimized water distribution and extended surface area, enhancing heat dissipation and maximizing cooling tower performance in diverse industrial processes. Designed with precision-engineered grids, these fills promote uniform water flow and improve evaporation rates, making them a reliable choice for high-demand cooling systems.
        </p>
      </div>

      {/* What Are Trickle Grid Fills */}
      <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-2xl p-6 sm:p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What Are Trickle Grid Fills?</h2>
        <p className="text-gray-700 leading-relaxed">
          Trickle grid fills are structured cooling tower media composed of finely spaced grids. Water trickles down these grids in thin films, increasing its contact with air and facilitating efficient heat exchange. By evenly distributing water and maintaining high air-water interaction, trickle grids boost evaporative cooling and minimize water channeling.
        </p>
      </div>

      {/* Key Features & Benefits */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Key Features & Benefits</h2>
        <div className="grid gap-4">
          {[
            {
              icon: <Waves className="w-6 h-6" />,
              title: "Uniform Water Distribution",
              description: "The grid design ensures consistent water flow, preventing dry spots that reduce cooling efficiency."
            },
            {
              icon: <Grid3x3 className="w-6 h-6" />,
              title: "High Surface Area",
              description: "Expanded surface contact between air and water facilitates enhanced heat transfer."
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Corrosion Resistant Materials",
              description: "Constructed from durable, corrosion-resistant polypropylene or PVC for longevity in harsh industrial environments."
            },
            {
              icon: <Settings className="w-6 h-6" />,
              title: "Reduced Fouling & Maintenance",
              description: "Open grid structure limits clogging and simplifies cleaning, reducing downtime."
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Thermal Efficiency",
              description: "Optimized for various fill depths and airflow conditions to suit specific cooling tower configurations."
            },
            {
              icon: <Factory className="w-6 h-6" />,
              title: "Versatile Application",
              description: "Suitable for mechanical draft cooling towers including induced and forced draft types."
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
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
                <th className="px-6 py-4 text-left font-semibold">Specification</th>
                <th className="px-6 py-4 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                { spec: "Material", desc: "Polypropylene (PP) or Polyvinyl Chloride (PVC)" },
                { spec: "Structure", desc: "Fine mesh grid with precise spacing" },
                { spec: "Operating Temperature", desc: "Up to 60°C" },
                { spec: "Dimensions", desc: "Modular panels, customizable sizes" },
                { spec: "Chemical Resistance", desc: "High resistance to acids, alkalis, and industrial contaminants" },
                { spec: "Application Type", desc: "Induced/Forced Draft Cooling Towers" },
                { spec: "Maintenance", desc: "Low fouling, easy to clean" }
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

      {/* Design Advantages */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Design Advantages</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Droplets className="w-7 h-7" />,
              title: "Thin Film Formation",
              description: "Creates uniform thin water films for maximum air contact"
            },
            {
              icon: <Waves className="w-7 h-7" />,
              title: "Prevents Channeling",
              description: "Grid structure eliminates water channeling and dry spots"
            },
            {
              icon: <Grid3x3 className="w-7 h-7" />,
              title: "Open Structure",
              description: "Allows easy airflow and reduces pressure drop"
            },
            {
              icon: <Award className="w-7 h-7" />,
              title: "Modular Design",
              description: "Easy installation and replacement with standard panels"
            }
          ].map((advantage, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{advantage.title}</h3>
              <p className="text-gray-600 text-sm">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Applications</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Power generation cooling systems",
            "Petrochemical and refinery cooling towers",
            "Industrial process cooling",
            "HVAC large-scale air conditioning systems",
            "Wastewater treatment plants"
          ].map((app, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-gray-700">{app}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Paltech™ Trickle Grid Fills vs. Traditional Media</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-6 py-4 text-left font-semibold">Aspect</th>
                <th className="px-6 py-4 text-left font-semibold">Trickle Grid Fill</th>
                <th className="px-6 py-4 text-left font-semibold">Traditional Fill Media</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  aspect: "Water Distribution",
                  trickle: "Uniform, thin film flow",
                  traditional: "Uneven, possible channeling"
                },
                {
                  aspect: "Heat Transfer",
                  trickle: "High efficiency through consistent contact",
                  traditional: "Less efficient due to water pooling"
                },
                {
                  aspect: "Fouling Resistance",
                  trickle: "Open structure reduces clogging",
                  traditional: "Prone to blockage and biofouling"
                },
                {
                  aspect: "Maintenance",
                  trickle: "Easier cleaning, lower downtime",
                  traditional: "Frequent cleaning needed"
                },
                {
                  aspect: "Durability",
                  trickle: "High chemical and physical resistance",
                  traditional: "Shorter lifespan, vulnerable to damage"
                }
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-6 py-4 font-medium text-gray-900 border-t border-gray-200">{row.aspect}</td>
                  <td className="px-6 py-4 text-gray-700 border-t border-gray-200">
                    <span className="inline-flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {row.trickle}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 border-t border-gray-200">{row.traditional}</td>
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
              question: "How do trickle grid fills improve cooling tower performance?",
              answer: "By creating thin water films evenly distributed over a large surface, trickle grids maximize heat transfer efficiency and evaporation rates."
            },
            {
              question: "What materials are used in Paltech™ trickle grid fills?",
              answer: "Our fills are made from corrosion resistant polypropylene or PVC, suitable for harsh industrial conditions."
            },
            {
              question: "Can trickle grid fills reduce maintenance efforts?",
              answer: "Yes. The open grid design prevents clogging and fouling, resulting in less cleaning and reduced downtime."
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
          Enhance Cooling Tower Efficiency with Paltech™ Trickle Grid Fills!
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Optimize your cooling tower's thermal performance and lower maintenance costs with Paltech™'s advanced trickle grid fills tailored to your specific industrial needs. Contact us today for expert consultation and custom solutions.
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

