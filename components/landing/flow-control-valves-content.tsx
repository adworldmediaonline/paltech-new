import { CheckCircle, Shield, Settings, Gauge, Wrench, TrendingDown, Award, Droplets, Zap, Package } from "lucide-react";

export function FlowControlValvesContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Paltech™ Flow Control Valves
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Paltech™ <strong>Flow Control Valves</strong> are engineered for simplicity, durability, and precision, ensuring optimal water flow management in industrial cooling towers. Designed with heavy-duty materials and corrosion-resistant coatings, these valves deliver low head loss and dependable operation across various capacities and sizes.
        </p>
      </div>

      {/* Why Choose Section */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Why Choose Paltech™ Flow Control Valves?</h2>
        <div className="grid gap-4">
          {[
            {
              icon: <Settings className="w-6 h-6" />,
              title: "Simple & Reliable Design",
              description: "Established for consistent, hassle-free control of water flow in cooling tower systems."
            },
            {
              icon: <TrendingDown className="w-6 h-6" />,
              title: "Low Head Loss",
              description: "Engineered to minimize pressure drop, ensuring efficient system operation and energy savings."
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Heavy-Duty Construction",
              description: "Body made from cast iron and valve stems crafted from stainless steel for enhanced strength and longevity."
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Corrosion-Resistant Coatings",
              description: "Special protective coatings available to withstand harsh, corrosive atmospheres, extending valve life."
            },
            {
              icon: <Package className="w-6 h-6" />,
              title: "Wide Capacity & Size Range",
              description: "Available from 300 to 2200 m³/h capacity and 150 NB to 500 NB size to accommodate diverse cooling tower requirements."
            },
            {
              icon: <Wrench className="w-6 h-6" />,
              title: "Easy Availability & Maintenance",
              description: "Designed for easy installation, servicing, and part replacement to minimize downtime."
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
                <th className="px-6 py-4 text-left font-semibold">Parameter</th>
                <th className="px-6 py-4 text-left font-semibold">Specification</th>
              </tr>
            </thead>
            <tbody>
              {[
                { param: "Valve Body Material", spec: "Heavy Duty Cast Iron" },
                { param: "Valve Stem Material", spec: "Stainless Steel" },
                { param: "Capacity Range", spec: "300 – 2200 m³/h" },
                { param: "Size Range", spec: "150 NB – 500 NB" },
                { param: "Head Loss", spec: "Low Pressure Drop Design" },
                { param: "Protective Coating", spec: "Corrosion-Resistant Optional Coatings" }
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-6 py-4 font-medium text-gray-900 border-t border-gray-200">{row.param}</td>
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
              icon: <Gauge className="w-7 h-7" />,
              title: "Accurate Flow Control",
              description: "Improves cooling tower system stability"
            },
            {
              icon: <Shield className="w-7 h-7" />,
              title: "Durable Materials",
              description: "Reduce wear and operational interruptions"
            },
            {
              icon: <TrendingDown className="w-7 h-7" />,
              title: "Lower Maintenance Costs",
              description: "With corrosion-resistant features"
            },
            {
              icon: <Package className="w-7 h-7" />,
              title: "Wide Selection",
              description: "Fits various industrial cooling tower setups"
            },
            {
              icon: <Zap className="w-7 h-7" />,
              title: "Energy Optimization",
              description: "Reduces unnecessary pressure loss"
            },
            {
              icon: <Award className="w-7 h-7" />,
              title: "Proven Reliability",
              description: "Consistent performance across industries"
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

      {/* Specifications Highlight */}
      <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Capacity & Size Range</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
              <Droplets className="w-10 h-10" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">300 - 2200 m³/h</div>
            <div className="text-sm text-gray-600 font-medium">Capacity Range</div>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
              <Settings className="w-10 h-10" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">150 - 500 NB</div>
            <div className="text-sm text-gray-600 font-medium">Size Range</div>
          </div>
        </div>
      </div>

      {/* Construction Features */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Construction Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Heavy-Duty Cast Iron Body",
              description: "Robust construction ensures long-lasting performance under high-pressure conditions and heavy industrial use."
            },
            {
              icon: <Settings className="w-8 h-8" />,
              title: "Stainless Steel Stem",
              description: "Corrosion-resistant stem material prevents degradation and ensures smooth operation over extended periods."
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Protective Coatings",
              description: "Optional corrosion-resistant coatings provide additional protection in harsh chemical and atmospheric environments."
            },
            {
              icon: <TrendingDown className="w-8 h-8" />,
              title: "Low Pressure Drop Design",
              description: "Optimized internal geometry minimizes head loss, reducing energy consumption and improving system efficiency."
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Applications</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Industrial cooling tower water control",
            "Process cooling systems",
            "HVAC and building cooling applications",
            "Power plant cooling circuits",
            "Chemical and petrochemical facilities",
            "Steel and manufacturing plants"
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
              question: "What makes Paltech™ flow control valves suitable for cooling towers?",
              answer: "Our valves combine robust materials and low head loss designs specifically optimized for cooling tower water control applications."
            },
            {
              question: "Are these valves available in multiple sizes?",
              answer: "Yes. We provide a broad range from 150 NB to 500 NB to fit different system capacities and piping configurations."
            },
            {
              question: "How does the corrosion-resistant coating benefit these valves?",
              answer: "The coating protects valves from chemical and atmospheric corrosion, extending service life and maintaining performance."
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
          Secure Reliable Flow Control with Paltech™ Flow Control Valves!
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Enhance your cooling tower's operational efficiency and durability with Paltech™ valves engineered for precision and longevity. Contact us for expert guidance and fast delivery options.
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

