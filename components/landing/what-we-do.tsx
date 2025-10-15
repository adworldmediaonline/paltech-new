"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { principlesData, whatWeDoData } from "@/lib/data/landing-data";
import { ArrowRight, Award, Crosshair, ZapOff } from "lucide-react";
import Link from "next/link";

const iconMap = {
  award: Award,
  crosshair: Crosshair,
  "zap-off": ZapOff,
};

export function WhatWeDo() {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <section ref={ref} className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">
            {whatWeDoData.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
            {whatWeDoData.headline}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
            {whatWeDoData.description}
          </p>
          <p className="text-base md:text-lg text-foreground/80 font-semibold max-w-3xl mx-auto">
            {principlesData.subheadline}
          </p>
        </div>

        {/* Our Principles - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16 md:mb-20">
          {principlesData.principles.map((principle, index) => {
            const Icon = iconMap[principle.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="h-full bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 leading-tight">
                    {principle.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications & Capabilities */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 lg:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Our Certifications & Commitments
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
              {whatWeDoData.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group"
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2.5 group-hover:scale-125 transition-transform" />
                  <p className="text-base text-foreground/90 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href={whatWeDoData.ctaHref}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-base md:text-lg"
              >
                {whatWeDoData.ctaText}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
