import Link from "next/link";
import { ArrowRight, CheckCircle, Zap, Settings, Droplets, Building2, Factory } from "lucide-react";

export function RCCConcreteCoolingTowersContent() {
  const availableTypes = [
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "Counter Flow Cooling Towers with Splash Fills",
      description: "Traditional splash fill design ensuring reliable cooling performance through enhanced water-air contact surface area. Ideal for applications requiring consistent thermal efficiency and lower maintenance requirements."
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Counter Flow Cooling Towers with Film Fills",
      description: "Advanced film fill technology delivering superior heat transfer efficiency and reduced water consumption. Perfect for applications prioritizing energy efficiency and compact footprint."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Cross Flow Cooling Towers with Splash/Film Fills",
      description: "Versatile single flow and double flow designs optimized for specific industrial requirements. Cross flow configuration offers lower pump head requirements and simplified maintenance access."
    }
  ];

  const capacityRanges = [
    { min: "500", max: "1,000", unit: "m³/hr per cell", applications: "Small to medium industrial facilities" },
    { min: "1,000", max: "2,000", unit: "m³/hr per cell", applications: "Medium-scale manufacturing plants" },
    { min: "2,000", max: "3,000", unit: "m³/hr per cell", applications: "Large industrial complexes" },
    { min: "3,000", max: "4,500", unit: "m³/hr per cell", applications: "Power plants and refineries" },
    { min: "2 x 2,800", max: "", unit: "m³/hr (specific configuration)", applications: "Dual-cell installations" },
    { min: "Multicellular", max: "", unit: "construction for larger capacities", applications: "Ultra-large capacity requirements" }
  ];

  const currentOperations = [
    { capacity: "56,000(m³/hr)", unit: "", status: "Operational", location: "Large-scale power generation facility" }
  ];

  return (
    <>
      {/* Hero Product Description */}
      <section className="py-16 bg-gray-50 pt-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              RCC Concrete Cooling Towers - Large-Scale Industrial Cooling Solutions
            </h1>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Paltech's <strong>RCC (Reinforced Cement Concrete) cooling towers</strong> represent the pinnacle of large-scale industrial cooling technology, engineered for power generation facilities, petrochemical refineries, chemical processing plants, and other applications requiring <strong>massive cooling capacity and exceptional durability</strong>. These robust concrete structures offer unmatched longevity, typically operating for <strong>39+ years with proper maintenance</strong>, making them the preferred choice for capital-intensive industrial projects.
              </p>
              <p>
                Our RCC concrete cooling towers are available in both <strong>counter flow and cross flow designs</strong>, each optimized for specific application requirements, space constraints, and operational preferences. Counter flow configurations deliver superior thermal efficiency by directing water downward against upward air flow, while cross flow designs offer lower pump head requirements and simplified maintenance access. Both configurations support <strong>single flow and double flow</strong> arrangements, providing flexibility for diverse industrial cooling needs.
              </p>
              <p>
                Paltech™ utilizes various fill media types including <strong>PVC bars, PVC film fills, polypropylene fills, and asbestos fills</strong> (where applicable), selected based on water chemistry, temperature ranges, and efficiency requirements. Each fill type is engineered to maximize water-air contact surface area, optimize heat transfer rates, and minimize pressure drop, ensuring optimal cooling performance while maintaining energy efficiency.
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
              Key Features & Technical Advantages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-linear-to-br from-primary/5 to-blue-50 p-6 rounded-xl border border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Design Flexibility</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Both counter flow and cross flow designs available with single and double flow configurations, enabling customization for specific space constraints, capacity requirements, and operational preferences.
                </p>
              </div>

              <div className="bg-linear-to-br from-primary/5 to-blue-50 p-6 rounded-xl border border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Multiple Fill Options</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Comprehensive fill media selection including PVC bars, PVC film fills, polypropylene fills, and asbestos fills, each optimized for specific water chemistry, temperature ranges, and efficiency targets.
                </p>
              </div>

              <div className="bg-linear-to-br from-primary/5 to-blue-50 p-6 rounded-xl border border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Large-Scale Capacity</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Specifically engineered for large-scale industrial applications with robust reinforced concrete construction, supporting capacities from 500 m³/hr to unlimited multicellular configurations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capacity Ranges */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Operational Track Record</h3>
              <p className="text-gray-600 text-center mb-6">Paltech™ has successfully commissioned and maintains large-scale RCC concrete cooling towers including:</p>
              <div className="grid md:grid-cols-2 gap-6">
                {currentOperations.map((operation, index) => (
                  <div key={index} className="flex items-center justify-between p-5 bg-linear-to-r from-primary/5 to-blue-50 rounded-lg border border-primary/20">
                    <div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{operation.capacity}</div>
                      <div className="text-sm text-gray-600 mb-2">{operation.unit}</div>
                      <div className="text-xs text-gray-500">{operation.location}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <span className="text-sm font-semibold text-green-600">{operation.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Available Types */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Available RCC Concrete Cooling Tower Configurations
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive range of RCC concrete cooling tower designs, each engineered for specific performance characteristics and industrial applications.
              </p>
            </div>

            <div className="space-y-6">
              {availableTypes.map((type, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {type.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{type.description}</p>
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
              Industrial Applications & Use Cases
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Thermal Power Generation Plants",
                "Petrochemical Refineries",
                "Chemical Processing Industries",
                "Steel Manufacturing Facilities",
                "Large-Scale HVAC Systems",
                "Industrial Manufacturing Plants",
                "Oil & Gas Processing",
                "Cement Production Facilities",
                "Paper & Pulp Mills"
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
      <section className="py-16 bg-linear-to-br from-primary to-primary/90 text-white">
        <div className="px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready for Detailed Engineering Data & Specifications?
          </h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Request comprehensive technical documentation including dimensions, structural drawings, performance curves, and custom engineering solutions tailored to your large-scale cooling requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Request Proposal & Quotation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/cooling-towers"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              Explore All Cooling Towers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
