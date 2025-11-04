import { CheckCircle, Shield, Droplets, Zap, Settings, Award, TrendingDown, Recycle, Phone, Mail, Globe } from "lucide-react";

export function WaterSofteningContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Paltech™ Water Softening Systems
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Paltech™ <strong>Water Softening solutions</strong> are designed to eliminate hardness from water, preventing scaling, corrosion, and operational challenges in industrial cooling towers. Our advanced water softeners utilize high-quality resin technology to deliver softened water that optimizes heat transfer and extends equipment lifespan.
        </p>
      </div>

      {/* Understanding Water Softening */}
      <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-2xl p-6 sm:p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Understanding Water Softening</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Water hardness is primarily caused by calcium and magnesium ions that lead to scale formation and reduce the effectiveness of cooling towers and related equipment. Soft water allows better detergent action, reduces clogging in pipes, and prevents damage to internal components such as boilers, heat exchangers, and pumps.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Paltech™'s water softening systems use ion exchange resin beads that replace hardness ions with sodium ions, delivering consistently soft, scale-free water optimized for industrial cooling.
        </p>
      </div>

      {/* Key Features & Benefits */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Key Features & Benefits</h2>
        <div className="grid gap-4">
          {[
            {
              icon: <Award className="w-6 h-6" />,
              title: "Superior Resin Technology",
              description: "Uses premium-grade resin beads with high ion exchange capacity and durability for long service life."
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Reliable Hardness Removal",
              description: "Effectively eliminates calcium and magnesium ions to reduce scale formation."
            },
            {
              icon: <TrendingDown className="w-6 h-6" />,
              title: "Energy and Cost Savings",
              description: "Prevents scale buildup that can increase energy consumption and require costly maintenance."
            },
            {
              icon: <Settings className="w-6 h-6" />,
              title: "Customizable Capacities",
              description: "Systems tailored to meet various flow rates and hardness levels, suitable for small to large industrial plants."
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Automated Regeneration Cycles",
              description: "Ensures continuous soft water availability with minimal manual intervention."
            },
            {
              icon: <Recycle className="w-6 h-6" />,
              title: "Environmentally Friendly",
              description: "Reduces chemical usage and improves water recycling efficiency."
            },
            {
              icon: <Settings className="w-6 h-6" />,
              title: "Easy Installation and Maintenance",
              description: "Designed for seamless integration with cooling tower systems and straightforward upkeep."
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
                <th className="px-6 py-4 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                { param: "Resin Type", desc: "High Capacity Cation Exchange Resin" },
                { param: "Flow Rate Capacity", desc: "Modular, scalable to plant requirements" },
                { param: "Hardness Removal Efficiency", desc: ">99% removal of Calcium & Magnesium ions" },
                { param: "Regeneration", desc: "Automated, sodium chloride (salt) based process" },
                { param: "Application", desc: "Industrial cooling towers, boilers, HVAC" },
                { param: "Control System", desc: "PLC-enabled for optimized regeneration" }
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-6 py-4 font-medium text-gray-900 border-t border-gray-200">{row.param}</td>
                  <td className="px-6 py-4 text-gray-700 border-t border-gray-200">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Advantages */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Advantages of Paltech™ Water Softening</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Prolongs cooling tower and boiler lifespans by preventing scale and corrosion",
            "Maintains optimal heat transfer efficiency by minimizing mineral deposits",
            "Enhances overall system reliability and reduces downtime",
            "Supports sustainability goals by improving water quality and reuse",
            "Offers cost-effective solutions customized according to your plant's water quality and usage"
          ].map((advantage, index) => (
            <div key={index} className="flex items-start gap-2 p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm">{advantage}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Highlights */}
      <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-8 border border-primary/10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">&gt;99%</div>
            <div className="text-sm text-gray-600 font-medium">Hardness Removal Efficiency</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
              <Zap className="w-8 h-8" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">Automated</div>
            <div className="text-sm text-gray-600 font-medium">PLC Control System</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
              <Recycle className="w-8 h-8" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">Eco-Friendly</div>
            <div className="text-sm text-gray-600 font-medium">Sustainable Operation</div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: "Why is water softening important for cooling towers?",
              answer: "Softened water reduces scale build-up, improving heat transfer and preventing pipe and equipment damage."
            },
            {
              question: "How does Paltech™ water softener work?",
              answer: "Hard water ions like calcium and magnesium are exchanged with sodium ions on resin beads, producing soft water."
            },
            {
              question: "What maintenance is required for these systems?",
              answer: "Automated regeneration cycles limit maintenance needs, and periodic resin replacement ensures long-term performance."
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
          Invest in Paltech™ Water Softening for Reliable Cooling Operations
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Achieve consistent water quality, reduce operational costs, and improve cooling tower efficiency with Paltech™ water softening solutions. Contact us today for expert consultation and personalized system design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="tel:+911244499700" className="inline-flex items-center gap-2 text-white hover:text-white/90 font-semibold">
            <Phone className="w-5 h-5" />
            +91-124-4499700
          </a>
          <a href="mailto:paltech@paltech.in" className="inline-flex items-center gap-2 text-white hover:text-white/90 font-semibold">
            <Mail className="w-5 h-5" />
            paltech@paltech.in
          </a>
          <a href="https://www.paltech.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-white/90 font-semibold">
            <Globe className="w-5 h-5" />
            www.paltech.in
          </a>
        </div>
      </div>
    </div>
  );
}

