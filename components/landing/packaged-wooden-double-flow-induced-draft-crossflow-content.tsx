import Link from "next/link";
import { ArrowRight, CheckCircle, Zap, Settings, Droplets, Shield, Award, Clock, Users, Globe, Factory } from "lucide-react";

export function PackagedWoodenDoubleFlowInducedDraftCrossflowContent() {
  const keyFeatures = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "Quality Products & Reliable Services",
      description: "Paltech ensures top-tier quality and dependable services for all cooling tower components, backed by over 37 years of manufacturing excellence."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "37+ Years Manufacturing Excellence",
      description: "Decades of experience in manufacturing ensure superior product quality, performance, and reliability across diverse industrial applications."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "9,000+ Satisfied Clients",
      description: "A vast client base trusts Paltech for their industrial cooling solutions worldwide, demonstrating proven track record and customer satisfaction."
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Global Export Network",
      description: "Our cooling towers are supplied globally to 25+ countries, meeting international standards and diverse industrial requirements."
    },
  ];

  const technicalSpecs = [
    {
      icon: <Settings className="w-5 h-5" />,
      title: "External Motor Placement",
      items: [
        "Motor mounted entirely outside fan cylinder enhancing accessibility and ease of maintenance",
        "Design minimizes complexities associated with housing, bearings, pulleys, V belts, drive shafts, couplings, and gearboxes",
        "Results in significantly reduced maintenance requirements and simplified service procedures"
      ]
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Compact Space-Efficient Design",
      items: [
        "Extremely compact design reducing space requirements and installation footprint",
        "Absence of complicated components ensures hassle-free operation and simplified maintenance",
        "Ideal for installations with space constraints and specific layout requirements"
      ]
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Flexible Installation Options",
      items: [
        "Packaged design allows for pre-assembled delivery reducing installation time",
        "On-site assembly option available for difficult installation scenarios where lifting constraints exist",
        "Provides maximum flexibility for diverse installation requirements and site conditions"
      ]
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "Premium Material Selection",
      items: [
        "Casing top panel and access door constructed from marine-grade pressure-treated materials",
        "Chemically treated pine wood used for fills and components ensuring durability",
        "Materials selected to withstand high inlet water temperature conditions effectively"
      ]
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "High-Temperature Capability",
      items: [
        "Specially designed materials of construction utilized to withstand very high temperatures",
        "Suitable for contamination or brackish water conditions where standard materials fail",
        "Particularly useful where PVC fills are not suitable and may deform under high temperatures"
      ]
    }
  ];

  const standardAccessories = [
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Complete Induced Draft Fan & Motor",
      description: "Cooling tower comes complete with induced draft fan and motor system ensuring efficient cooling performance and reliable operation."
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Fiber Glass/Wooden Louvers",
      description: "Fiber glass/wooden louvers incorporated for proper air circulation, optimal airflow control, and efficient cooling performance."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Durable Fan Cylinder Construction",
      description: "Fan cylinder constructed from D.G. painted M.S. or S.S., providing exceptional durability, corrosion resistance, and long-term reliability."
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "Marine-Grade Timber Components",
      description: "Chemically treated marine plywood and pine wood used for various components ensuring resilience against water exposure and environmental conditions."
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Comprehensive Basin & Fittings",
      description: "Complete cold water basin with basin fittings including suction assembly, overflow, and drain fittings ensuring comprehensive functionality and proper operation."
    }
  ];

  return (
    <>
      {/* Hero Product Description */}
      <section className="py-16 bg-gray-50 pt-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Packaged Wooden/Timber Double Flow Induced Draft Crossflow Cooling Towers
            </h1>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Paltech proudly introduces the <strong>Packaged Wooden/Timber Double Flow Induced Draft Crossflow Cooling Towers</strong>, a design that has long been recognized for its <strong>superior efficiency, consistent performance, and convenience</strong>. These complete packaged systems come fully assembled and ready for installation, providing comprehensive functionality and efficient cooling solutions for various industrial applications.
              </p>
              <p>
                This innovative cooling tower features a <strong>vertical discharge configuration</strong>, allowing for installation in areas where towers with horizontal discharge are not suitable. This unique design ensures optimal cooling efficiency and reliability, making it a top choice for applications requiring specific discharge orientations and space constraints. The packaged design significantly reduces on-site assembly time and ensures consistent quality control.
              </p>
              <p>
                Our packaged cooling towers are engineered with <strong>motor placement outside the fan cylinder</strong>, enhancing accessibility and simplifying maintenance procedures. This design eliminates complexities associated with housing, bearings, pulleys, V belts, drive shafts, couplings, and gearboxes, resulting in low-maintenance operation and reduced service requirements. The compact design minimizes space requirements while maintaining optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Paltech Packaged Cooling Towers?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Advanced Engineering Specifications
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Precision-engineered packaged systems designed for convenience, reliability, and superior performance in demanding industrial applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technicalSpecs.map((spec, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {spec.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{spec.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {spec.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standard Accessories */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Complete Standard Accessories & Components
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {standardAccessories.map((accessory, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {accessory.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{accessory.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{accessory.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Ideal Applications & Use Cases
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Double Flow Crossflow Applications",
                "Vertical Discharge Requirements",
                "Packaged Installation Projects",
                "Space-Constrained Installations",
                "Manufacturing Facilities",
                "Process Cooling Applications",
                "Industrial HVAC Systems",
                "High-Temperature Applications",
                "Brackish Water Conditions"
              ].map((app, index) => (
                <div key={index} className="p-4 bg-white rounded-lg border border-gray-200 hover:bg-primary/5 hover:border-primary transition-colors">
                  <p className="text-gray-700 font-medium">{app}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready for Packaged Cooling Tower Solutions?
          </h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Get detailed information about our Packaged Wooden/Timber Double Flow Cooling Towers and discover how complete packaged systems can benefit your industrial cooling requirements. Request comprehensive specifications and expert consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Quote & Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/cooling-towers/wooden-timber-cooling-towers"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              View All Wooden Cooling Towers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
