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

export function WoodenTimberDirectDriveSystemsContent() {
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

  const structuralComponents = [
    "Main structural components and other lightweight sections are crafted from selected preservative timber.",
    "All structural joints are bolted using galvanized bolts, and Stainless Steel or Phosphor Bronze hardware can be supplied at an additional cost.",
    "To ensure uniform water distribution, the hot water basin is equipped with a distribution box, which evenly disperses water in the hot water basin, subsequently splashing it downward through spray target nozzles."
  ];

  const coolingComponents = [
    "The standard cladding consists of profile corrugated sheets, with joints designed to shed water only inside the cooling tower.",
    "Specially designed eliminators, available in single-pass to four-pass patterns made from various materials, are provided to minimize bleed losses.",
    "Fill bars are designed to maximize splash surface and wetted surface, resulting in a high heat transfer rate.",
    "Wooden/PVC fills are supported either on wooden stringers or inside S.S. wire mesh grids, ensuring secure and permanent positioning. Various fill materials with different shapes are available to suit specific design requirements."
  ];

  const technicalSpecs = [
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Motor Specifications",
      items: [
        "Special low R.P.M., totally enclosed vertical motor",
        "Flange type, with an enlarged and threaded shaft, and a sealed top",
        "Designed to be totally weatherproof with IP-55 protection",
        "Suitable for operation in heated and humid environments"
      ]
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Fan Drive System",
      items: [
        "Fan is directly coupled with low RPM motors (vertical flange-mounted with a sealed top and enlarged threaded shaft)",
        "As an option, a gear-driven fan system can be provided if required for more demanding applications"
      ]
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "Fan Specifications",
      items: [
        "Fans with diameters of up to 8 feet",
        "Multi-blade cast Aluminum/FRP adjustable pitch fan blades",
        "M.S. fabricated H.D.G./S.S. hub and S.S. hardware",
        "Designed for lower to medium capacity cooling needs"
      ]
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
                <BreadcrumbPage className="font-semibold">Direct Drive Systems</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mt-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Wooden/Timber Single & Double Flow Induced Draft Crossflow with Direct Drive Systems
            </h1>
            <p className="text-lg text-gray-600">
              Efficient and reliable cooling solutions with robust timber construction and direct drive technology
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
                  Cooling Towers featuring the Direct Drive System are designed for lower to medium capacity cooling needs. These towers come with fans with diameters of up to 8 feet, equipped with multi-blade cast Aluminum/FRP adjustable pitch fan blades, an M.S. fabricated H.D.G./S.S. hub, and S.S. hardware to ensure efficient cooling performance.
                </p>
                <p>
                  Paltech's Wooden/Timber Direct Drive Systems combine traditional robust construction with modern efficiency, providing durable and high-performing cooling solutions for various industrial applications.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-2 shadow-xl">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/categories/wooden-timber-cooling-towers/wooden-single-double-flow-induced-draft-crossflow-with-direct-drive-systems.png"
                  alt="Wooden/Timber Single & Double Flow Induced Draft Crossflow with Direct Drive Systems"
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
              Detailed insights into the core components and operational features
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
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

      {/* Key Components Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Key Structural Components
              </h2>
              <ul className="space-y-4 text-gray-700 leading-relaxed">
                {structuralComponents.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Key Cooling Components
              </h2>
              <ul className="space-y-4 text-gray-700 leading-relaxed">
                {coolingComponents.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Paltech Direct Drive Systems?
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
                For detailed dimensions and other engineering data, please refer to our Proposal/Quotation.
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
            Contact us today to learn more about our direct drive wooden/timber cooling towers and how they can benefit your industrial operations.
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
