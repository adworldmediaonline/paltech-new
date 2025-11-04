import { CheckCircle, Shield, Droplets, Factory, Zap, Settings, Award, Layers, Waves, ThermometerSun } from "lucide-react";

export function CoolingTowerSplashBarsContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Paltech™ Cooling Tower Splash Bars
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Enhance your cooling tower's heat transfer capacity with Paltech™ <strong>Cooling Tower Splash Bars</strong> — engineered to maximize evaporation and improve water distribution for optimal cooling performance. Designed with durable materials and precision geometry, our splash bars create an effective breakup of water flow into droplets, increasing the air-water contact surface and boosting cooling efficiency.
        </p>
      </div>

      {/* What Are Cooling Tower Splash Bars */}
      <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-2xl p-6 sm:p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What Are Cooling Tower Splash Bars?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Splash bars are integral components of cooling tower fill systems. They work by breaking flowing water into droplets as it cascades down the cooling tower media. This "splashing" action generates a large surface area of water exposed to air, enabling efficient heat transfer and evaporation.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Unlike film fills, which spread water into thin sheets, splash bars create dynamic water droplets suspended longer in the airflow, ideal for applications with contaminated or high-fouling water.
        </p>
      </div>

      {/* Key Features & Benefits */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Key Features & Benefits</h2>
        <div className="grid gap-4">
          {[
            {
              icon: <Droplets className="w-6 h-6" />,
              title: "Maximized Evaporative Surface Area",
              description: "The splash bar structure maximizes droplet formation, increasing thermal transfer efficiency."
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Robust Construction",
              description: "Made from corrosion-resistant PVC or polypropylene, designed to withstand harsh chemical exposures and ensure long-term durability."
            },
            {
              icon: <Waves className="w-6 h-6" />,
              title: "Improved Water Distribution",
              description: "Prevents water channeling and ensures uniform flow across the cooling tower fill pack."
            },
            {
              icon: <Settings className="w-6 h-6" />,
              title: "Fouling Resistant",
              description: "Effective in reducing clogging from mineral deposits and biological growth, minimizing maintenance efforts."
            },
            {
              icon: <Factory className="w-6 h-6" />,
              title: "Versatile Application",
              description: "Suitable for both induced and forced draft cooling towers, as well as crossflow and counterflow configurations."
            },
            {
              icon: <ThermometerSun className="w-6 h-6" />,
              title: "Temperature and Chemical Endurance",
              description: "Designed to operate effectively in elevated temperature and chemically aggressive environments."
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
                { spec: "Material", desc: "PVC or Polypropylene (PP)" },
                { spec: "Design", desc: "Structured bars with optimized spacing" },
                { spec: "Operating Temperature", desc: "Up to 60°C" },
                { spec: "Corrosion Resistance", desc: "Excellent resistance to acids and alkalis" },
                { spec: "Water Flow Capacity", desc: "Adaptable to various flow rates" },
                { spec: "Application Types", desc: "Industrial Cooling Towers, HVAC, Petrochemical" }
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
              title: "Dynamic Droplet Creation",
              description: "Creates suspended water droplets for extended air contact time"
            },
            {
              icon: <Layers className="w-7 h-7" />,
              title: "Optimized Bar Spacing",
              description: "Precisely engineered spacing maximizes water breakup efficiency"
            },
            {
              icon: <Shield className="w-7 h-7" />,
              title: "Chemical Stability",
              description: "Resists degradation in aggressive chemical environments"
            },
            {
              icon: <Award className="w-7 h-7" />,
              title: "Easy Installation",
              description: "Modular design allows quick installation and replacement"
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
            "Power and thermal power plant cooling towers",
            "Chemical and petrochemical industry cooling",
            "Steel manufacturing cooling processes",
            "HVAC and large commercial cooling systems",
            "Wastewater treatment and desalination towers"
          ].map((app, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-gray-700">{app}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Highlights */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Performance Highlights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Enhanced Heat Transfer",
              description: "Superior evaporative cooling through maximized water-air contact"
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Reduced Fouling",
              description: "Open structure minimizes biological growth and mineral buildup"
            },
            {
              icon: <Settings className="w-8 h-8" />,
              title: "Low Maintenance",
              description: "Durable design reduces cleaning frequency and operational costs"
            }
          ].map((highlight, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center text-white mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
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
              question: "Why are splash bars important in a cooling tower?",
              answer: "Splash bars break water into droplets, increasing the surface area for evaporation, which enhances heat transfer and overall cooling efficiency."
            },
            {
              question: "What materials are used in Paltech™ splash bars?",
              answer: "We use corrosion-resistant PVC or polypropylene, providing durability against chemical and environmental exposure."
            },
            {
              question: "Are Paltech™ splash bars suitable for dirty or corrosive water?",
              answer: "Yes. Splash bars are ideal for water with higher contaminants, resisting fouling and reducing system downtime."
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
          Upgrade Your Cooling Tower Today with Paltech™ Splash Bars!
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Improve cooling efficiency and extend your system's service life with Paltech™ durable splash bar fill packs designed for top industrial performance. Contact us for technical assistance and tailored solutions.
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

