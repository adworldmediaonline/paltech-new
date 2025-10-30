"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Zap, Settings, Shield, Factory, Cpu, Award } from "lucide-react";

export function TailorMadePowerSaverScrewScrollChillingPlantWaterAirCooledContent() {
  const keyFeatures = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Custom Engineering Excellence",
      description: "Designed to meet demanding custom requirements while maintaining efficiency and reliability, ensuring optimal performance for specific application needs."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Power Saver Technology",
      description: "Advanced power-saving features and optimization ensure maximum energy efficiency tailored to specific operational requirements and load profiles."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Best-in-Class Controls",
      description: "Utilizing best-in-class control systems ensuring precise operation, comprehensive monitoring, and optimal performance management."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Rigorous Testing & Validation",
      description: "Fully tested systems using heavy-duty components ensuring reliability, performance validation, and compliance with international standards."
    },
  ];

  return (
    <section className="w-full">
      {/* Hero Introduction */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Tailor-Made Power Saver Screw/Scroll Chilling Plants - Custom Engineering Solutions
          </h1>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Paltech's <strong>Tailor-Made Power Saver Screw/Scroll Chilling Plants (Water/Air Cooled)</strong> represent the pinnacle of <strong>custom engineering excellence</strong>, designed to meet demanding custom requirements while maintaining optimal efficiency and reliability. These sophisticated chilling systems are engineered for specific applications requiring unique configurations, performance characteristics, or operational parameters that cannot be met by standard solutions.
            </p>
            <p>
              Our tailor-made power saver chilling plants combine <strong>advanced power-saving technology</strong> with custom engineering capabilities, ensuring maximum energy efficiency tailored to specific operational requirements and load profiles. Each system is carefully designed to optimize performance for your unique application, considering factors such as load variations, operational schedules, environmental conditions, and specific performance objectives.
            </p>
            <p>
              These systems utilize <strong>best-in-class control systems</strong> and <strong>heavy-duty industrial components</strong>, ensuring reliable operation and extended service life. Each tailor-made system undergoes <strong>comprehensive testing and validation</strong> processes, ensuring performance meets or exceeds specified requirements. The custom engineering approach ensures optimal integration with your existing processes and infrastructure while maintaining efficiency and reliability.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Features & Custom Engineering Advantages
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Engineering Process */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Custom Engineering Process & Approach
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Detailed Requirements Analysis",
                description: "Comprehensive evaluation of your specific application requirements, load profiles, operational conditions, and performance objectives."
              },
              {
                title: "Custom Design Engineering",
                description: "Tailored engineering solutions optimized for your unique requirements, ensuring optimal performance, efficiency, and integration."
              },
              {
                title: "Performance Optimization",
                description: "Advanced power-saving features and optimization techniques tailored to your specific operational profile and efficiency objectives."
              },
              {
                title: "Comprehensive Testing & Validation",
                description: "Rigorous testing processes ensuring performance meets specified requirements, reliability validation, and quality assurance."
              },
              {
                title: "Component Customization",
                description: "Custom selection and configuration of components ensuring optimal compatibility with your specific application and operational requirements."
              },
              {
                title: "Integration Support",
                description: "Expert assistance ensuring seamless integration with existing processes, infrastructure, and control systems."
              }
            ].map((step, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ideal Applications for Custom Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Unique Process Requirements",
              "Complex Load Profiles",
              "Space-Constrained Installations",
              "Specific Performance Objectives",
              "Integration with Existing Systems",
              "Energy Optimization Projects",
              "Regulatory Compliance Needs",
              "Multi-Shift Operations",
              "Variable Load Applications",
              "Precision Temperature Control",
              "High-Reliability Requirements",
              "Specialized Industrial Processes"
            ].map((app, index) => (
              <div key={index} className="p-4 bg-white rounded-lg border border-gray-200 hover:bg-primary/5 hover:border-primary transition-colors">
                <p className="text-gray-700 font-medium">{app}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need a Tailor-Made Chilling Solution?</h2>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Share your exact specifications, performance requirements, and operational constraints. Our engineering team will provide custom-designed power saver solutions with detailed engineering proposals and competitive pricing.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-primary px-8 py-4 font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Request Engineering Proposal
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default TailorMadePowerSaverScrewScrollChillingPlantWaterAirCooledContent;
