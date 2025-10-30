"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Home, Zap, Settings, Droplets, Shield, Award, Clock, Users, Globe } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function PackagedWoodenDoubleFlowInducedDraftCrossflowContent() {
  const keyFeatures = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "Quality Products & Most Reliable Services",
      description: "Paltech ensures top-tier quality and dependable services for all cooling tower components."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "More than 34 years of mfg. Excellence",
      description: "Decades of experience in manufacturing ensure superior product quality and performance."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "More than 9000 clients",
      description: "A vast client base trusts Paltech for their industrial cooling solutions worldwide."
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Export to 25+ countries",
      description: "Our cooling towers are supplied globally, meeting international standards and demands."
    },
  ];

  const technicalSpecs = [
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Motor Placement",
      items: [
        "The motor is mounted entirely outside the fan cylinder, enhancing accessibility and ease of maintenance",
        "This design minimizes complexities associated with housing, bearings, pulleys, V belts, drive shafts, couplings, and gearboxes",
        "Results in a low-maintenance operation"
      ]
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Compact Design",
      items: [
        "The cooling tower is designed to be extremely compact, reducing the need for extensive space",
        "The absence of complicated components ensures a hassle-free operation",
        "Ideal for installations with space constraints"
      ]
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "On-Site Assembly",
      items: [
        "In special cases where lifting and shifting of packaged cooling towers is challenging",
        "The towers can be assembled on-site, offering flexibility in installation",
        "Provides solutions for difficult installation scenarios"
      ]
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "Material Selection",
      items: [
        "The casing top panel and access door are constructed from marine-grade pressure-treated materials",
        "Chemically treated pine wood is used for fills and other components",
        "Ensures durability in high inlet water temperature conditions"
      ]
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "High-Temperature Applications",
      items: [
        "Specially designed and selected materials of construction are utilized to withstand very high temperatures",
        "Suitable for contamination or brackish water conditions",
        "Particularly useful where PVC fills are not suitable and may deform"
      ]
    }
  ];

  const standardAccessories = [
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Induced Draft Fan & Motor",
      description: "The cooling tower comes complete with an induced draft fan and motor for efficient cooling."
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Fiber Glass/Wooden Louvers",
      description: "Fiber glass/wooden louvers are incorporated for proper air circulation."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Fan Cylinder Construction",
      description: "The fan cylinder is constructed from D.G. painted M.S. or S.S., providing durability."
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "Marine Plywood & Pine Wood",
      description: "Chemically treated marine plywood and pine wood are used for various components, ensuring resilience against water exposure."
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Cold Water Basin & Fittings",
      description: "The tower includes a cold water basin and basin fittings, including suction assembly, overflow, and drain fittings, ensuring comprehensive functionality."
    }
  ];

  return (
    <>
      {/* Breadcrumb Section */}
      <section className="pt-2  pb-8 bg-white border-b">
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/cooling-towers">Cooling Towers</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/cooling-towers/wooden-timber-cooling-towers">
                  Wooden/Timber Cooling Towers
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-semibold">Packaged Double Flow Induced Draft Crossflow</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mt-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Packaged Wooden/Timber Double Flow Induced Draft Crossflow Cooling Towers
            </h1>
            <p className="text-lg text-gray-600">
              Superior efficiency and consistent performance with vertical discharge design
            </p>
          </div>
        </div>
      </section>

      {/* Product Description Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Product Description
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Paltech proudly introduces the double cross flow induced draft Cooling Towers with basin, a design that has long been recognized for its superior efficiency and consistent performance.
                </p>
                <p>
                  This innovative cooling tower features a vertical discharge, allowing for installation in areas where towers with horizontal discharge are not suitable. This unique design ensures optimal cooling efficiency and reliability, making it a top choice for various industrial applications.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-2 shadow-xl">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/categories/wooden-timber-cooling-towers/packaged-wooden-double-flow-induced-draft-crossflow.png"
                  alt="Packaged Wooden/Timber Double Flow Induced Draft Crossflow Cooling Towers"
                  width={1000}
                  height={625}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
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
              Advanced engineering specifications designed for superior performance and reliability
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-primary/5 to-blue-50 p-6 rounded-xl border border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
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
      </section>

      {/* Standard Accessories Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Standard Accessories
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Complete package with all essential components for optimal performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {standardAccessories.map((accessory, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {accessory.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{accessory.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{accessory.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Paltech Packaged Cooling Towers?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our proven track record and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 rounded-xl border border-green-200">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-3 sm:mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Engineering Data & Dimensions</h3>
              <p className="text-gray-600 mb-6">
                Dimensions & other Engineering Data are available with Proposal / Quotation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Proposal/Quotation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/cooling-towers/wooden-timber-cooling-towers"
                  className="inline-flex items-center px-6 py-3 bg-transparent text-primary border-2 border-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  Back to Wooden/Timber Cooling Towers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Interested in our Products? Let's Talk Business
          </h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Contact us today to learn more about our packaged wooden/timber cooling towers and how they can benefit your industrial operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Expert Consultation
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
