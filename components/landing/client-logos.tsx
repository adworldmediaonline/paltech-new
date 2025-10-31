"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { clientLogosData } from "@/lib/data/landing-data";
import { Award } from "lucide-react";
import Image from "next/image";

export function ClientLogos() {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...clientLogosData.logos, ...clientLogosData.logos];

  // Split into two rows for alternating scroll directions
  const firstRowLogos = duplicatedLogos.slice(0, Math.ceil(duplicatedLogos.length / 2));
  const secondRowLogos = duplicatedLogos.slice(Math.ceil(duplicatedLogos.length / 2));

  return (
    <section ref={ref} className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        {/* Section Header */}
        <div
          className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-primary/10 rounded-full">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">
              Trusted Worldwide
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {clientLogosData.headline}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Partnering with industry leaders across 25+ countries for over three decades
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div
        className={`relative transition-all duration-700 delay-300 ${isVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        {/* First Row - Scroll Left */}
        <div className="mb-6 lg:mb-8">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex animate-marquee hover:pause-animation">
              {firstRowLogos.map((logo, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 mx-3 lg:mx-4"
                >
                  <div className="group relative w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-36 lg:w-64 lg:h-40 bg-white rounded-2xl border-2 border-gray-200 hover:border-primary/30 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Logo */}
                    <div className="relative w-full h-full p-6 flex items-center justify-center">
                      <Image
                        src={logo.imageUrl}
                        alt={logo.name}
                        fill
                        className="object-contain p-4 group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                      />
                    </div>

                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex animate-marquee hover:pause-animation" aria-hidden="true">
              {firstRowLogos.map((logo, index) => (
                <div
                  key={`row1-dup-${index}`}
                  className="flex-shrink-0 mx-3 lg:mx-4"
                >
                  <div className="group relative w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-36 lg:w-64 lg:h-40 bg-white rounded-2xl border-2 border-gray-200 hover:border-primary/30 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-full h-full p-6 flex items-center justify-center">
                      <Image
                        src={logo.imageUrl}
                        alt={logo.name}
                        fill
                        className="object-contain p-4  group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row - Scroll Right */}
        <div>
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex animate-marquee-reverse hover:pause-animation">
              {secondRowLogos.map((logo, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 mx-3 lg:mx-4"
                >
                  <div className="group relative w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-36 lg:w-64 lg:h-40 bg-white rounded-2xl border-2 border-gray-200 hover:border-primary/30 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-full h-full p-6 flex items-center justify-center">
                      <Image
                        src={logo.imageUrl}
                        alt={logo.name}
                        fill
                        className="object-contain p-4  group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex animate-marquee-reverse hover:pause-animation" aria-hidden="true">
              {secondRowLogos.map((logo, index) => (
                <div
                  key={`row2-dup-${index}`}
                  className="flex-shrink-0 mx-3 lg:mx-4"
                >
                  <div className="group relative w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-36 lg:w-64 lg:h-40 bg-white rounded-2xl border-2 border-gray-200 hover:border-primary/30 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-full h-full p-6 flex items-center justify-center">
                      <Image
                        src={logo.imageUrl}
                        alt={logo.name}
                        fill
                        className="object-contain p-4  group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div
        className={`relative mt-16 lg:mt-20 text-center transition-all duration-700 delay-600 ${isVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-semibold text-foreground">
              11,000+ clients
            </span>
          </div>
          <div className="w-px h-4 bg-gray-300" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
            <span className="text-sm font-semibold text-foreground">
              25+ countries
            </span>
          </div>
          <div className="w-px h-4 bg-gray-300" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '1s' }} />
            <span className="text-sm font-semibold text-foreground">
              37+ years trusted
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
