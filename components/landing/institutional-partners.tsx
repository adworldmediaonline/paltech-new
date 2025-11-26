"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Award, GraduationCap, BookOpen } from "lucide-react";
import Image from "next/image";
import iitLogo from "../../public/it/Indian_Institute_of_Technology_Delhi_Logo.svg.png";

export function InstitutionalPartners() {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-24 bg-linear-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 bg-primary/10 rounded-full">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">
              Academic Excellence
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-4xl mx-auto mb-4">
            Institutional Collaboration
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Gear Reducer systems technically validated by IIT Delhi & Gear Reducer systems technically validated by IIT Delhi
          </p>
        </div>

        {/* IIT Delhi Showcase */}
        <div
          className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="bg-white rounded-3xl border-2 border-gray-200 shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Logo Side */}
              <div className="bg-linear-to-br from-gray-50 to-white p-12 md:p-16 flex items-center justify-center border-r-2 border-gray-200">
                <div className="relative w-full max-w-md aspect-square">
                  <Image
                    src={iitLogo}
                    alt="Indian Institute of Technology Logo"
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg mb-4">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                      Premier Institution
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    Indian Institute of Technology
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    One of India's most prestigious technical institutions, representing excellence in engineering education, research, and innovation.
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-4">
                  {[
                    {
                      icon: <GraduationCap className="w-5 h-5" />,
                      title: "Received Technical Validation from IIT Delhi for our high-performance Gear Reducers",
                      description: "Paltech’s Gear Reducers underwent a rigorous technical evaluation conducted by IIT Delhi, one of India’s most respected engineering institutes. The validation process included performance benchmarking, structural analysis, reliability testing, and adherence to industry standards. This independent assessment confirms that Paltech Gear Reducers deliver superior efficiency, durability, and operational stability under diverse industrial conditions. The endorsement strengthens customer confidence and reinforces Paltech’s commitment to engineering excellence."
                    },
                    {
                      icon: <BookOpen className="w-5 h-5" />,
                      title: "Obtained Technical Design Expertise from IIT Bombay for next-generation FRP Fans",
                      description: "To develop advanced, high-efficiency FRP Fans, Paltech collaborated with IIT Bombay’s engineering experts. The institute provided specialized technical design inputs covering aerodynamic modeling, structural optimization, material selection, and performance enhancement. This partnership helped us create FRP Fans that offer improved airflow, reduced energy consumption, lower noise levels, and enhanced resistance to corrosion. The result is a next-generation product line engineered using world-class academic and technical knowledge."
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

