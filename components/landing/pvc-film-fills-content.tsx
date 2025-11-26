import { CheckCircle, Shield, Droplets, Factory, Zap, Settings, Award, Layers, ThermometerSun, Wind } from "lucide-react";

export function PvcFilmFillsContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Paltech™ Cooling Tower Fill Solutions
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Maximize your cooling tower efficiency with Paltech™ cutting-edge <strong>fill solutions</strong> — engineered for superior heat transfer, durability, and versatility across diverse industrial applications. Whether your process requires film-type, splash-type, or custom fill-less configurations, Paltech™ delivers quality performance designed to meet your specific cooling challenges.
        </p>
      </div>

      {/* Why Choose Section */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Why Choose Paltech™ Fill Packs?</h2>
        <div className="grid gap-4">
          {[
            {
              icon: <Droplets className="w-6 h-6" />,
              title: "Maximum Cooling Surface Area",
              description: "Our fills maximize the exposed surface area, enhancing evaporation and heat dissipation for improved cooling efficiency per unit volume."
            },
            {
              icon: <Layers className="w-6 h-6" />,
              title: "Chevron Pattern Film Fill",
              description: "Designed with an optimized chevron structure that facilitates higher cooling rates by increasing air-water interaction."
            },
            {
              icon: <Settings className="w-6 h-6" />,
              title: "Adaptable Design",
              description: "Film-type fills easily conform to various cooling tower designs, ensuring seamless integration and performance."
            },
            {
              icon: <Droplets className="w-6 h-6" />,
              title: "Splash-Type Fill",
              description: "Ideal for environments with water contamination or dusty factory conditions, providing rugged and reliable cooling performance."
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Premium Material Construction",
              description: "Manufactured from vacuum-formed PVC, Paltech™ fill packs resist corrosion, chemical exposure, and operate effectively up to 55°C."
            },
            {
              icon: <ThermometerSun className="w-6 h-6" />,
              title: "Custom Fill-less Tower Design",
              description: "For high-temperature processes, Paltech™ offers engineered fill-less cooling towers that maintain effective cooling capacity without fill media."
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
                <th className="px-6 py-4 text-left font-semibold">Feature</th>
                <th className="px-6 py-4 text-left font-semibold">Specification</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Fill Types", spec: "Film-Type, Splash-Type, Fill-Less" },
                { feature: "Material", spec: "Vacuum-formed PVC" },
                { feature: "Max Operating Temperature", spec: "Up to 55°C" },
                { feature: "Cooling Efficiency", spec: "Maximum surface area per unit volume" },
                { feature: "Application Environment", spec: "Corrosive, Dusty, Contaminated Waters" },
                { feature: "Design", spec: "Chevron pattern (film fill)" }
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

      {/* Key Benefits */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Key Benefits</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Zap className="w-7 h-7" />,
              title: "Energy Efficiency",
              description: "Enhances evaporation efficiency, reducing overall energy consumption"
            },
            {
              icon: <Shield className="w-7 h-7" />,
              title: "Long Service Life",
              description: "Holds up against chemical exposure and corrosion for extended durability"
            },
            {
              icon: <Settings className="w-7 h-7" />,
              title: "Flexible Configurations",
              description: "Fit multiple tower designs for retrofit or new builds"
            },
            {
              icon: <Droplets className="w-7 h-7" />,
              title: "Fouling Protection",
              description: "Splash fills protect against fouling in harsh, contaminated settings"
            },
            {
              icon: <ThermometerSun className="w-7 h-7" />,
              title: "High Temperature",
              description: "Fill-less towers offer effective solutions for extreme temperature operations"
            },
            {
              icon: <Award className="w-7 h-7" />,
              title: "Proven Performance",
              description: "Trusted across industries for reliable cooling solutions"
            }
          ].map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fill Types Comparison */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Fill Types Overview</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: <Layers className="w-8 h-8" />,
              title: "Film-Type Fill",
              description: "Spreads water in thin sheets across chevron patterns for maximum surface contact and efficient heat transfer.",
              features: ["High efficiency", "Clean water", "Chevron design"]
            },

            {
              icon: <ThermometerSun className="w-8 h-8" />,
              title: "Fill-Less Design",
              description: "Eliminates fill media entirely for high-temperature applications while maintaining cooling capacity.",
              features: ["No clogging", "High temp", "Zero maintenance"]
            }
          ].map((fillType, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center text-white mb-4">
                {fillType.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{fillType.title}</h3>
              <p className="text-gray-600 mb-4">{fillType.description}</p>
              <div className="space-y-2">
                {fillType.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Applications</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Power generation cooling towers",
            "Chemical processing plants",
            "Petrochemical and refinery towers",
            "Food and beverage industry cooling",
            "Industrial HVAC and process cooling"
          ].map((app, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-gray-700">{app}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Highlights */}
      <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Material Excellence</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
              <Shield className="w-10 h-10" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">Vacuum-Formed PVC</div>
            <div className="text-sm text-gray-600 font-medium">Premium Material Construction</div>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
              <ThermometerSun className="w-10 h-10" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">Up to 55°C</div>
            <div className="text-sm text-gray-600 font-medium">Operating Temperature</div>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
              <Wind className="w-10 h-10" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">Maximum</div>
            <div className="text-sm text-gray-600 font-medium">Surface Area Efficiency</div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: "What is the difference between film-type and splash-type fill?",
              answer: "Film-type fills provide a large, continuous surface allowing water to spread thinly for efficient cooling, while splash-type generates droplets increasing air-water contact, suited for contaminated waters."
            },
            {
              question: "Can Paltech™ fills resist chemical corrosion?",
              answer: "Yes. The vacuum-formed PVC construction offers excellent corrosion resistance, maintaining structural integrity in aggressive environments."
            },
            {
              question: "What are the benefits of a fill-less cooling tower?",
              answer: "Fill-less towers eliminate clogging and fouling issues, ideal for high-temperature applications while providing similar cooling capacity."
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
          Enhance your system's cooling efficiency and longevity with Paltech™ advanced fill solutions. Contact us for custom engineering support and a fast quote!
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

