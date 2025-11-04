import { CheckCircle, Shield, Droplets, Zap, Settings, Award, BarChart, Factory, Phone, Mail, Globe } from "lucide-react";

export function UltrapureWaterContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Paltech™ Ultrapure Water Systems
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Paltech™ <strong>Ultrapure Water Systems</strong> deliver the highest quality water critical for semiconductor manufacturing, pharmaceuticals, and other advanced industries. Our ultrapure water solutions ensure removal of all particulate, organic, and ionic contaminants, providing water with conductivity as low as <strong>10 µS/cm</strong> suitable for sensitive production processes.
        </p>
      </div>

      {/* What is Ultrapure Water */}
      <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-2xl p-6 sm:p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What is Ultrapure Water?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Ultrapure water is water that has been purified to extremely high standards, free from dissolved salts, organics, particles, bacteria, and other impurities. It is essential in applications where even trace contaminants can impact product quality or equipment reliability.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Paltech™ achieves ultrapure water quality through a multi-stage treatment process, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li>Initial demineralization by membrane filtration or ion-exchange to remove dissolved salts.</li>
          <li>Advanced polishing using mixed bed ion-exchange or electrodeionization systems to reach ultimate purity.</li>
        </ul>
      </div>

      {/* Key Features & Benefits */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Key Features & Benefits</h2>
        <div className="grid gap-4">
          {[
            {
              icon: <Award className="w-6 h-6" />,
              title: "Exceptional Purity",
              description: "Water conductivity reduced to ultra-low levels (< 10 µS/cm), meeting strict industry standards."
            },
            {
              icon: <Droplets className="w-6 h-6" />,
              title: "Two-Stage Treatment Process",
              description: "Combines robust demineralization with high-performance polishing for consistent, ultrapure quality."
            },
            {
              icon: <Settings className="w-6 h-6" />,
              title: "Advanced Ion Exchange Technology",
              description: "Premium resins and electrodeionization modules ensure deep removal of ionic impurities."
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Custom-Designed Systems",
              description: "Tailored configurations to match flow rate and purity requirements of different industries."
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Critical Process Protection",
              description: "Prevents contamination in semiconductor fabrication, pharmaceutical cleaning, and high-precision manufacturing."
            },
            {
              icon: <BarChart className="w-6 h-6" />,
              title: "Compliance and Certification",
              description: "Systems manufactured and operated under ISO and industry-specific quality management protocols."
            },
            {
              icon: <Award className="w-6 h-6" />,
              title: "Environmentally Responsible",
              description: "Efficient chemical use and water recycle capabilities support sustainable operations."
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
                { feature: "Conductivity", spec: "≤ 10 µS/cm" },
                { feature: "Treatment Stages", spec: "Demineralization + Mixed Bed / Electrodeionization" },
                { feature: "Flow Capacity", spec: "Modular, scalable to industrial demand" },
                { feature: "Purity Assurance", spec: "Real-time monitoring & automated controls" },
                { feature: "Typical Applications", spec: "Semiconductor, Pharmaceutical, Electronics Manufacturing" },
                { feature: "Certification", spec: "ISO 9001, ISO 14001" }
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

      {/* Applications */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Applications</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Semiconductor fabrication and wafer cleaning",
            "Pharmaceutical process water and washing",
            "Laboratory and medical device manufacturing",
            "Electronics and microchip production",
            "Chemical analysis and precision manufacturing processes"
          ].map((app, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-gray-700">{app}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Highlights */}
      <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-8 border border-primary/10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
              <Droplets className="w-8 h-8" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">&lt; 10 µS/cm</div>
            <div className="text-sm text-gray-600 font-medium">Water Conductivity</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
              <BarChart className="w-8 h-8" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">2-Stage</div>
            <div className="text-sm text-gray-600 font-medium">Treatment Process</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">ISO Certified</div>
            <div className="text-sm text-gray-600 font-medium">Quality Assurance</div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: "Why is ultrapure water necessary in semiconductor and pharma industries?",
              answer: "Even minute impurities can cause product defects or equipment failure. Ultrapure water prevents contamination that compromises precision manufacturing."
            },
            {
              question: "What multi-stage process does Paltech™ use to produce ultrapure water?",
              answer: "A combination of membrane filtration or ion exchange demineralization, followed by advanced polishing via mixed bed resins or electrodeionization."
            },
            {
              question: "How does Paltech™ ensure consistent ultrapure water quality?",
              answer: "Through automated monitoring systems and high-quality treatment modules, Paltech™ maintains rigorous quality control and compliance."
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
          Trust Paltech™ for Reliable Ultrapure Water Solutions
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Secure the highest purity water for your critical processes with Paltech™ ultrapure water systems. Contact us for expert consultation and customized system design.
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

