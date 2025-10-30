import Link from "next/link";
import { ArrowRight, CheckCircle, Zap, Settings, Droplets } from "lucide-react";

export function RCCConcreteCoolingTowersContent() {
  const availableTypes = [
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "Counter Flow with Splash Fills",
      description: "Traditional splash fill design for reliable cooling performance"
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Counter Flow with Film Fills",
      description: "Advanced film fill technology for enhanced efficiency"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Cross Flow with Splash/Film Fills",
      description: "Single Flow & Double Flow designs for versatile applications"
    }
  ];

  const capacityRanges = [
    { range: "500 - 1,000", unit: "m³/hr per cell" },
    { range: "1,000 - 2,000", unit: "m³/hr per cell" },
    { range: "2,000 - 3,000", unit: "m³/hr per cell" },
    { range: "3,000 - 4,500", unit: "m³/hr per cell" },
    { range: "2 x 2,800", unit: "m³/hr (specific configuration)" },
    { range: "Multicellular", unit: "construction for larger capacities" }
  ];

  const currentOperations = [
    { capacity: "27,000", unit: "m³/hr", status: "Operational" },
    { capacity: "14,000", unit: "m³/hr", status: "Operational" }
  ];

  return (
    <>
      {/* Product Description Section */}
      <section className="py-16 bg-gray-50 pt-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Product Description
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Paltech provides cooling towers in both counter flow and cross flow designs, featuring RCC/Concrete structures tailored for large-scale cooling tower applications.
              </p>
              <p>
                Various types of fills, including Asbestos fills, PVC Bars, PVC Film Fills, and polypropylene fills, are utilized based on specific application needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Paltech cooling towers boast a wide range of models designed to cater to diverse requirements, ensuring flexibility and suitability for various industrial applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary/5 to-blue-50 p-6 rounded-xl border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Design Flexibility</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Both counter flow and cross flow designs available to meet specific application requirements.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-blue-50 p-6 rounded-xl border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Fill Options</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Multiple fill types including Asbestos, PVC Bars, PVC Film Fills, and polypropylene fills.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-blue-50 p-6 rounded-xl border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Large Scale</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Specifically designed for large-scale cooling tower applications with robust construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capacity Available Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Capacity Available
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Paltech offers a wide range of capacities to meet diverse industrial requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capacityRanges.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">{item.range}</div>
                  <div className="text-sm text-gray-600">{item.unit}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Current Operations</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {currentOperations.map((operation, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-lg font-semibold text-gray-900">{operation.capacity}</div>
                    <div className="text-sm text-gray-600">{operation.unit}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-green-600">{operation.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Available Cooling Tower Types Section */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Available Cooling Tower Types
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer various types of cooling towers to meet diverse industrial needs
            </p>
          </div>

          <div className="space-y-6">
            {availableTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {type.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{type.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready for Detailed Engineering Data?
          </h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            For detailed information, including dimensions and other engineering data, please refer to our Proposal/Quotation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Proposal/Quotation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/cooling-towers"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              View All Cooling Towers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
