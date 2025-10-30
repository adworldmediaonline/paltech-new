"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Home, Zap, Settings, Droplets, Shield, Award, Clock, Users } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function PultrudedFRPCoolingTowersContent() {
  const availableTypes = [
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "Pultruded FRP Counter Flow Cooling Tower with Splash Fill",
      description: "Traditional splash fill design for reliable cooling performance"
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Pultruded FRP Counter Flow Cooling Tower with Film Fill",
      description: "Advanced film fill technology for enhanced efficiency"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Pultruded FRP Cross Flow Cooling Tower with Splash Fill",
      description: "Cross flow design optimized for specific industrial applications"
    }
  ];

  const technicalSpecs = [
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Single Cell Capacity",
      description: "Up to 4500 cubic meters per hour"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Multi-Cell Capacities",
      description: "Designed to accommodate any size in counter flow with both film and splash fill options"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Structure Material",
      description: "Constructed from Pultruded Fiberglass for enhanced strength"
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "Corrosion Resistance",
      description: "Uses hot-dip galvanized MS hardware, with Stainless Steel hardware available as an upgrade"
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Casing",
      description: "Made from Pultruded FRP or corrugated FRP sheets for robustness"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Fan Deck",
      description: "Built with strong Pultruded FRP panels/sheets for stability"
    }
  ];

  const additionalFeatures = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Fan Design",
      description: "Features efficient FRP fans, designed by the Indian Institute of Technology, Mumbai"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Fan Cylinder",
      description: "Made of tough and durable FRP/GRP material for long-lasting use"
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "Drift Eliminator",
      description: "Incorporates efficient PVC Drift Eliminators in cellular/full wave design to minimize water loss and reduce fan air pressure, leading to low energy consumption"
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Nozzles",
      description: "Equipped with non-clogging nozzles made of PP/PVC, SS/HDG (Stainless Steel/Hot Dip Galvanized), or Carbon Fiber for optimal efficiency"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Gearbox",
      description: "Features Spiral Bevel or Spiral Bevel cum Helical gearboxes, validated by the Indian Institute of Technology, New Delhi, and manufactured to CTI, USA, and AGMA standards"
    }
  ];

  const uspFeatures = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "High Efficiency",
      description: "Ensures optimal performance and energy use"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Ultimate Quality, Reliability, and Longevity",
      description: "Guarantees durable, long-term solutions"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Suitable for Challenging Water Sources",
      description: "Effective in environments with sea water or hard water"
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Replacement for Wooden Cooling Towers",
      description: "Offers a modern and more efficient alternative"
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "Space and Cost Efficiency",
      description: "A practical choice for replacing large RCC cooling towers, saving both cost and space"
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
                <BreadcrumbPage className="font-semibold">Pultruded FRP Cooling Towers</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mt-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Pultruded FRP Cooling Towers
            </h1>
            <p className="text-lg text-gray-600">
              Lightweight, non-corrosive, and exceptionally durable cooling solutions for modern industrial applications
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
                  Our Pultruded FRP Cooling Towers are highlighted for their <strong>lightweight construction</strong>, <strong>non-corrosive properties</strong>, <strong>long lifespan</strong>, <strong>exceptional durability</strong>, and <strong>high strength</strong>.
                </p>
                <p>
                  They offer <strong>quick construction and installation</strong>, making them a superior alternative to conventional RCC or Wooden Cooling Towers. The description emphasizes benefits such as longevity, robustness, and efficient setup.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-2 shadow-xl">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/categories/pultruded-frp-cooling-towers.png"
                  alt="Pultruded FRP Cooling Towers"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-primary/5 to-blue-50 p-6 rounded-xl border border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    {spec.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{spec.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Features
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Engineered components designed by leading institutions for optimal performance
            </p>
          </div>

          <div className="space-y-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
              Product Unique Selling Proposition
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Why choose Pultruded FRP Cooling Towers over traditional alternatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uspFeatures.map((usp, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                    {usp.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{usp.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {usp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Types of Cooling Towers Available
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Each type is designed for specific industrial cooling needs
            </p>
          </div>

          <div className="space-y-6">
            {availableTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
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
            Interested in our Products? Let's Talk Business
          </h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Get detailed information about our Pultruded FRP Cooling Towers and discover how they can benefit your industrial operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Quote & Consultation
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
