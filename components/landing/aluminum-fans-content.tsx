import { CheckCircle, Shield, Settings, Award, Package, Wind, Factory, Wrench, Gauge, TrendingUp } from "lucide-react";

export function AluminumFansContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Paltech™ Cooling Tower Aluminum Fans
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Power your industrial cooling systems with Paltech™ <strong>Cooling Tower Aluminum Fans</strong> — engineered for durability, superior airflow, and long-lasting corrosion resistance. Crafted from premium alloy materials and designed for consistent performance, these fans are the industry standard for commercial cooling tower applications.
        </p>
      </div>

      {/* Why Choose Section */}
      <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-2xl p-6 sm:p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Why Choose Paltech™ Aluminum Fans?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: <Shield className="w-5 h-5" />,
              title: "Exceptional Durability",
              description: "Built from high-strength aluminum, these fans deliver robust performance and resist deformation, even under demanding operating conditions."
            },
            {
              icon: <Award className="w-5 h-5" />,
              title: "Advanced Corrosion Protection",
              description: "Every fan features a specialized coating, providing reliable resistance against abrasion, oxidation, and rust for extended service life."
            },
            {
              icon: <Wind className="w-5 h-5" />,
              title: "Optimized Airflow",
              description: "Expert blade geometry promotes maximum airflow, improving cooling efficiency in commercial environments."
            },
            {
              icon: <Settings className="w-5 h-5" />,
              title: "Custom Sizing",
              description: "Available in multiple diameters (3' to 6') and 5-inch blade widths, allowing for ideal fit and performance in various cooling tower configurations."
            },
            {
              icon: <Package className="w-5 h-5" />,
              title: "Superior Hub Engineering",
              description: "Hubs are manufactured using extruded alloy, with plates constructed from 5052-H32 for ultimate strength and reliability."
            },
            {
              icon: <Wrench className="w-5 h-5" />,
              title: "Reinforced Hardware",
              description: "Zinc-plated carbon steel bushings and blade clamp bolts guarantee secure, vibration-free operation."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Technical Specifications</h2>

        {/* Performance & Operating Ranges */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="bg-primary text-white px-6 py-4">
            <h3 className="text-xl font-semibold">Performance & Operating Ranges</h3>
          </div>
          <div className="p-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Air Flow</h4>
                  <p className="text-gray-700">3.0 million CMH (850 M³/Sec) maximum</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Static Pressure</h4>
                  <p className="text-gray-700">3.0 inch (75 mm) wc maximum</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Available Size Range & Standard Features */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="bg-primary text-white px-6 py-4">
            <h3 className="text-xl font-semibold">Available Size Range & Standard Features</h3>
          </div>
          <div className="p-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Diameter</h4>
                  <p className="text-gray-700">2 feet (914 mm) to 34 feet (10363 mm)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">No. of Blades</h4>
                  <p className="text-gray-700">3 to 10 blades</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Blade Pitch Angle</h4>
                  <p className="text-gray-700">Adjustable</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Leading Edge Protection</h4>
                  <p className="text-gray-700">Included on all blades</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Material of Construction */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="bg-primary text-white px-6 py-4">
            <h3 className="text-xl font-semibold">Material of Construction</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-6">The best available is used for the manufacturing of fan assemblies confirming various international standards. The specification of these are as below:</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Component</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Material Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { component: "HUB ASSEMBLY", material: "HDGMS TO AISI 304" },
                    { component: "HARDWARE", material: "SST TO AISI 304" },
                    { component: "HUB SPOOL", material: "CI TO IS 210-1970" },
                    { component: "CLAMPS", material: "LM 6 TO BS 1490 1963" },
                    { component: "HUB BODY", material: "HDGMS" },
                    { component: "BLADES", material: "ISO AND EPOXY RESIN AS PER ASTM CODES" }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 font-medium text-gray-900 border-t border-gray-200">{row.component}</td>
                      <td className="px-4 py-3 text-gray-700 border-t border-gray-200">{row.material}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features & Benefits */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Key Features & Benefits</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <TrendingUp className="w-7 h-7" />,
              title: "Maximum Performance",
              description: "Designed to maximize cooling tower performance with optimized blade geometry."
            },
            {
              icon: <Shield className="w-7 h-7" />,
              title: "Extended Lifespan",
              description: "Reinforced corrosion protection ensures long-lasting durability."
            },
            {
              icon: <Gauge className="w-7 h-7" />,
              title: "Reduced Noise",
              description: "Minimal operational noise and vibration for quieter operation."
            },
            {
              icon: <Wrench className="w-7 h-7" />,
              title: "Easy Maintenance",
              description: "Simple installation and maintenance with robust hardware design."
            },
            {
              icon: <Settings className="w-7 h-7" />,
              title: "Custom Configurations",
              description: "Tailored solutions available for special project requirements."
            },
            {
              icon: <Factory className="w-7 h-7" />,
              title: "Industrial Grade",
              description: "Built to withstand demanding commercial and industrial environments."
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Design Excellence */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Design Excellence</h2>
        <div className="grid gap-6">
          {[
            {
              icon: <Package className="w-7 h-7" />,
              title: "Premium Aluminum Alloy Construction",
              description: "Manufactured from high-strength aluminum alloy, our fans provide excellent mechanical properties and corrosion resistance. The aluminum construction ensures a perfect balance between weight reduction and structural integrity, making them ideal for heavy-duty cooling tower applications."
            },
            {
              icon: <Settings className="w-7 h-7" />,
              title: "Extruded Alloy Hub System",
              description: "The hub is precision-engineered using extruded alloy technology, providing superior dimensional stability and load-bearing capacity. This advanced manufacturing process ensures consistent quality and optimal power transmission from the motor to the fan blades."
            },
            {
              icon: <Shield className="w-7 h-7" />,
              title: "Specialized Protective Coating",
              description: "Each fan receives a specialized protective coating that guards against oxidation, abrasion, and environmental degradation. This multi-layer coating system significantly extends the operational life of the fan, reducing maintenance requirements and total cost of ownership."
            },
            {
              icon: <Wrench className="w-7 h-7" />,
              title: "Reinforced Hardware System",
              description: "All hardware components including bushings, clamp bolts, and fasteners are manufactured from zinc-plated carbon steel, providing superior corrosion resistance and mechanical strength. This ensures secure blade attachment and vibration-free operation throughout the fan's service life."
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6 sm:p-8 flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  {feature.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Applications</h2>
        <p className="text-gray-700 mb-4">Paltech™ Aluminum Fans are ideal for:</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Commercial Cooling Towers",
            "Industrial Cooling Systems",
            "HVAC Applications",
            "Process Cooling Equipment",
            "Manufacturing Facilities",
            "Power Generation Plants",
            "Chemical Processing Plants",
            "Food & Beverage Industry"
          ].map((app, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-gray-700">{app}</span>
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
              question: "What makes aluminum fans suitable for commercial cooling towers?",
              answer: "Aluminum fans combine lightweight properties with high tensile strength and corrosion resistance, resulting in efficient airflow and long-lasting reliability."
            },
            {
              question: "Can Paltech™ aluminum fans be customized for size?",
              answer: "Yes. The diameter and blade width can be tailored to match your cooling tower specifications, ensuring optimal fit and function."
            },
            {
              question: "How does the extruded alloy hub improve performance?",
              answer: "Extruded alloy hubs provide superior support and stability, reducing mechanical wear and extending the fan's operational life."
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
          Upgrade Your Cooling Tower Performance!
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Maximize efficiency and minimize maintenance with Paltech™ Cooling Tower Aluminum Fans. Contact our technical team for product customization, installation support, or a fast quote.
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

