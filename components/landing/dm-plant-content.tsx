import { CheckCircle, Shield, Droplets, Zap, Settings, Award, BarChart, Phone, Mail, Globe } from "lucide-react";

export function DmPlantContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Paltech™ Demineralization Plant
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Paltech™ <strong>Demineralization Plants</strong> provide advanced deionization technology to deliver ultra-pure water essential for the efficient and long-lasting operation of your cooling towers and allied equipment. Our plants remove dissolved mineral salts, chlorides, sulfates, nitrates, and other ions to reduce scaling, corrosion, and fouling in your water system.
        </p>
      </div>

      {/* What is Demineralized Water */}
      <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-2xl p-6 sm:p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What is Demineralized Water?</h2>
        <p className="text-gray-700 leading-relaxed">
          Demineralized water is treated water with most mineral ions removed, including cations like calcium, sodium, iron, copper and anions such as chloride, sulfate, and nitrate. This water — free of dissolved salts — protects your cooling tower and associated machinery by preventing scale formation and corrosion.
        </p>
      </div>

      {/* Technology & Process */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Paltech™ Demineralization Technology & Process</h2>
        <div className="grid gap-4">
          {[
            {
              icon: <Settings className="w-6 h-6" />,
              title: "Ion Exchange Resin Beds",
              description: "Utilizes specially formulated ion exchange resins that replace unwanted mineral salts with hydrogen (H⁺) and hydroxyl (OH⁻) ions, producing clean water."
            },
            {
              icon: <Droplets className="w-6 h-6" />,
              title: "Two-Bed or Mixed-Bed Systems",
              description: "Customized configurations to optimize purity levels and throughput suited to specific industrial scale and water quality."
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "High Efficiency Operation",
              description: "Fast processing with low chemical usage and long-lasting resin life."
            },
            {
              icon: <BarChart className="w-6 h-6" />,
              title: "Advanced Control Systems",
              description: "PLC automation ensures consistent output quality, easy monitoring, and reduced operational costs."
            },
            {
              icon: <Award className="w-6 h-6" />,
              title: "Scalable Solutions",
              description: "Systems designed to handle from small to large volume water requirements for various industrial cooling applications."
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

      {/* Benefits */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Benefits of Using Paltech™ Demineralized Water</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Significantly reduces scaling and deposits in cooling systems, extending equipment life",
            "Minimizes corrosion of structural and mechanical components",
            "Enhances heat transfer efficiency by maintaining pristine water quality",
            "Decreases maintenance needs and downtime due to fouling or blockages",
            "Supports environmental compliance by reducing chemical discharge",
            "Ensures reliability and operational continuity for critical cooling processes"
          ].map((benefit, index) => (
            <div key={index} className="flex items-start gap-2 p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm">{benefit}</span>
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
                <th className="px-6 py-4 text-left font-semibold">Detail</th>
              </tr>
            </thead>
            <tbody>
              {[
                { param: "Water Purity Level", detail: ">99.9% removal of dissolved salts" },
                { param: "Resin Type", detail: "Cation and Anion Exchange Resins" },
                { param: "System Capacity", detail: "Modular; customizable for various flow rates" },
                { param: "Automation", detail: "PLC-controlled with real-time monitoring" },
                { param: "Chemical Usage", detail: "Optimized for minimal consumption" },
                { param: "Typical Applications", detail: "Cooling towers, boilers, manufacturing processes" },
                { param: "System Footprint", detail: "Compact footprint; suitable for retrofits and new plants" }
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-6 py-4 font-medium text-gray-900 border-t border-gray-200">{row.param}</td>
                  <td className="px-6 py-4 text-gray-700 border-t border-gray-200">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-8 border border-primary/10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">&gt;99.9%</div>
            <div className="text-sm text-gray-600 font-medium">Salt Removal Efficiency</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
              <BarChart className="w-8 h-8" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">PLC Control</div>
            <div className="text-sm text-gray-600 font-medium">Automated Monitoring</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
              <Award className="w-8 h-8" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">ISO Certified</div>
            <div className="text-sm text-gray-600 font-medium">Quality Management</div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: "Why is demineralized water important for cooling towers?",
              answer: "Mineral-free water prevents scaling and corrosion, enhancing cooling efficiency and reducing costly maintenance."
            },
            {
              question: "What industries benefit from Paltech™ demineralization plants?",
              answer: "Power generation, petrochemical, HVAC, food processing, pharmaceuticals, and any industry dependent on efficient heat exchange."
            },
            {
              question: "How does Paltech™ ensure system reliability?",
              answer: "With quality ion-exchange resins, automated controls, and effective water pretreatment, Paltech™ plants maintain consistent water purity and operational uptime."
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
          Enhance Cooling Tower Performance with Paltech™ Demineralized Water
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Invest in Paltech™ Demineralization Plants to safeguard your cooling systems with the highest quality treated water. Contact us for a tailored solution and expert support.
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

