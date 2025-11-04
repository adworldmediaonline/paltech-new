import { CheckCircle, Shield, Droplets, Factory, Zap, Settings, Award, Wind, Flame, TrendingDown, Leaf, DollarSign } from "lucide-react";

export function DriftEliminatorsContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Paltech™ Drift Eliminators
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Minimize water loss and boost cooling tower efficiency with Paltech™ <strong>XCEL Drift Eliminators</strong>, engineered to reduce drift to as low as <strong>0.005%</strong> of your flow rate, and down to <strong>0.0005%</strong> with advanced configurations. Our cutting-edge PVC drift eliminators combine superior design, structural rigidity, and low pressure drop to deliver unmatched performance and operational savings.
        </p>
      </div>

      {/* What Are Drift Eliminators */}
      <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-2xl p-6 sm:p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What Are Drift Eliminators?</h2>
        <p className="text-gray-700 leading-relaxed">
          Drift eliminators are critical components installed in cooling towers to capture and recover water droplets entrained in the air stream, preventing excessive water loss and environmental damage. They help avoid complications such as chemical spotting, corrosion, and biological contamination around the cooling tower site.
        </p>
      </div>

      {/* Why Choose Section */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Why Choose Paltech™ XCEL Drift Eliminators?</h2>
        <div className="grid gap-4">
          {[
            {
              icon: <Droplets className="w-6 h-6" />,
              title: "Exceptional Water Loss Reduction",
              description: "Standard XCEL models reduce drift to 0.005% of water flow, while specialized 6-pass configurations can reduce it further to 0.0005%, ideal for ultra-critical water conservation needs."
            },
            {
              icon: <Wind className="w-6 h-6" />,
              title: "Advanced Chevron Pattern Design",
              description: "The unique cellular, labyrinthine structure maximizes water capture efficiency while minimizing airflow resistance and power consumption."
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Optimized for Thermal Efficiency",
              description: "XCEL drift eliminators are engineered to complement Paltech™ fill packs perfectly, ensuring seamless integration for superior overall cooling tower performance."
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Lightweight & Structurally Rigid",
              description: "Preassembled, nestable bundles provide easy installation and maintain shape without sagging or displacement, common in less robust designs."
            },
            {
              icon: <Flame className="w-6 h-6" />,
              title: "Certified Fire-Retardant PVC",
              description: "Factory Mutual-approved materials eliminate the need for additional fire protection systems, enhancing safety without compromising performance."
            },
            {
              icon: <TrendingDown className="w-6 h-6" />,
              title: "Significant Energy Savings",
              description: "Reduced airflow resistance lowers required fan horsepower by 6-10%, resulting in substantial operational cost reductions."
            },
            {
              icon: <Factory className="w-6 h-6" />,
              title: "Tailored Designs for Crossflow & Counterflow Towers",
              description: "Specific designs account for discharge angle and airflow direction, optimizing thermal efficiency and minimizing fan load."
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

      {/* Technical Specifications Comparison */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Technical Specifications</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-6 py-4 text-left font-semibold">Feature</th>
                <th className="px-6 py-4 text-left font-semibold">Standard XCEL Eliminator</th>
                <th className="px-6 py-4 text-left font-semibold">6-Pass XCEL Configuration</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Drift Reduction Rate", standard: "0.005% of water flow", sixPass: "0.0005% of water flow" },
                { feature: "Material", standard: "Fire-retardant thermoformed PVC", sixPass: "Fire-retardant thermoformed PVC" },
                { feature: "Structural Rigidity", standard: "High, prevents sagging", sixPass: "High, preassembled for strength" },
                { feature: "Pressure Drop", standard: "Low, less than half of competitors", sixPass: "Low, minimal airflow resistance" },
                { feature: "Fire Protection", standard: "Factory Mutual approved", sixPass: "Factory Mutual approved" },
                { feature: "Compatible Fill Media", standard: "Paltech™ Fill Packs", sixPass: "Paltech™ Fill Packs" },
                { feature: "Energy Saving Potential", standard: "6-10% less fan power requirement", sixPass: "6-10% less fan power requirement" }
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-6 py-4 font-medium text-gray-900 border-t border-gray-200">{row.feature}</td>
                  <td className="px-6 py-4 text-gray-700 border-t border-gray-200">{row.standard}</td>
                  <td className="px-6 py-4 text-gray-700 border-t border-gray-200">{row.sixPass}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Benefits of Paltech™ Drift Eliminators</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Droplets className="w-7 h-7" />,
              title: "Reduce Water Loss",
              description: "Significant savings in water consumption improve sustainability and reduce operating costs."
            },
            {
              icon: <Leaf className="w-7 h-7" />,
              title: "Minimize Environmental Impact",
              description: "Lower drift prevents spotting and environmental damage near cooling towers."
            },
            {
              icon: <Award className="w-7 h-7" />,
              title: "Increase Operational Reliability",
              description: "Durable materials and rigid construction ensure long-lasting performance."
            },
            {
              icon: <DollarSign className="w-7 h-7" />,
              title: "Lower Maintenance Costs",
              description: "Resistant to chemical exposure and weathering, reducing replacement frequency."
            },
            {
              icon: <Zap className="w-7 h-7" />,
              title: "Boost Energy Efficiency",
              description: "Reduce fan power needs, lowering electricity expenses."
            },
            {
              icon: <Shield className="w-7 h-7" />,
              title: "Enhanced Safety",
              description: "Factory Mutual-approved fire-retardant materials for peace of mind."
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

      {/* Performance Metrics */}
      <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Performance Metrics</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">0.005%</div>
            <div className="text-sm text-gray-600">Standard Drift Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">0.0005%</div>
            <div className="text-sm text-gray-600">6-Pass Configuration</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">6-10%</div>
            <div className="text-sm text-gray-600">Energy Savings</div>
          </div>
        </div>
      </div>

      {/* Key Features Highlight */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Design Excellence</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: <Wind className="w-8 h-8" />,
              title: "Chevron Pattern Technology",
              description: "Unique cellular labyrinthine structure captures water droplets efficiently while allowing smooth airflow passage."
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Structural Integrity",
              description: "Preassembled nestable bundles maintain shape and prevent sagging, ensuring consistent performance over time."
            },
            {
              icon: <TrendingDown className="w-8 h-8" />,
              title: "Low Pressure Drop",
              description: "Advanced aerodynamic design reduces airflow resistance by more than 50% compared to conventional eliminators."
            },
            {
              icon: <Flame className="w-8 h-8" />,
              title: "Fire Safety Certified",
              description: "Factory Mutual-approved fire-retardant PVC eliminates need for additional fire suppression systems."
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

      {/* FAQs */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: "How do Paltech™ drift eliminators save water?",
              answer: "By capturing and redirecting water droplets in the air stream, they minimize evaporative losses and prevent water waste."
            },
            {
              question: "What makes XCEL drift eliminators better than traditional types?",
              answer: "XCEL's advanced chevron pattern and cellular design deliver superior drift control while maintaining low airflow resistance and easy installation."
            },
            {
              question: "Are Paltech™ drift eliminators fire-safe?",
              answer: "Yes. Made with Factory Mutual-approved fire-retardant PVC, they can be used safely without additional fire protection systems."
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
          Reduce Drift and Save Water with Paltech™ Today!
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Optimize your cooling tower's water conservation and energy efficiency with Paltech™ XCEL Drift Eliminators. Contact us for expert guidance, customization, and competitive pricing.
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

