"use client";

import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { whyChooseData } from "@/lib/data/landing-data";
import { ArrowRight, Cpu, ShieldCheck, Target, TrendingDown, VolumeX, Zap } from "lucide-react";
import Link from "next/link";

const iconMap = {
  "shield-check": ShieldCheck,
  "volume-x": VolumeX,
  zap: Zap,
  "trending-down": TrendingDown,
  target: Target,
  cpu: Cpu,
};

export function WhyChoose() {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <section ref={ref} className="py-24 md:py-32 lg:py-40 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 md:mb-24">
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="text-sm uppercase tracking-wider text-foreground/60 font-semibold mb-6 inline-block px-4 py-1.5 bg-gray-100 rounded-full">
              {whyChooseData.eyebrow}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Why <span className="text-primary">Paltech™</span> is The Right Choice for You
            </h2>
          </div>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Card 1 - High Quality Components (Light, Top Left) */}
          <div
            className={`lg:col-span-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="h-full bg-gray-50 rounded-3xl p-10 lg:p-12">
              {/* Icon with generous top space */}
              <div className="mb-8">
                <div className="w-20 h-20 rounded-full border-2 border-foreground/10 flex items-center justify-center">
                  <ShieldCheck className="w-9 h-9 text-foreground/80" strokeWidth={1.5} />
                </div>
              </div>

              {/* Title with good spacing */}
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 leading-tight">
                {whyChooseData.cards[0].title}
              </h3>

              {/* Description with proper line height */}
              <p className="text-base lg:text-lg text-foreground/70 leading-relaxed">
                {whyChooseData.cards[0].description}
              </p>
            </div>
          </div>

          {/* Card 2 - Low Noise Operation (Light, Top Middle) */}
          <div
            className={`lg:col-span-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="h-full bg-gray-50 rounded-3xl p-10 lg:p-12">
              <div className="mb-8">
                <div className="w-20 h-20 rounded-full border-2 border-foreground/10 flex items-center justify-center">
                  <VolumeX className="w-9 h-9 text-foreground/80" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 leading-tight">
                {whyChooseData.cards[1].title}
              </h3>
              <p className="text-base lg:text-lg text-foreground/70 leading-relaxed">
                {whyChooseData.cards[1].description}
              </p>
            </div>
          </div>

          {/* Card 3 - Low Power Consumption (FEATURED DARK CARD - Top Right, Spans 2 Rows) */}
          <div
            className={`lg:col-span-4 lg:row-span-2 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="h-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 lg:p-12 flex flex-col">
              <div className="flex-1">
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center">
                    <Zap className="w-9 h-9 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                  {whyChooseData.cards[2].title}
                </h3>
                <p className="text-base lg:text-lg text-white/80 leading-relaxed mb-8">
                  {whyChooseData.cards[2].description}
                </p>
                <p className="text-base text-white/70 leading-relaxed mb-10">
                  Our energy-efficient designs not only reduce your carbon footprint but also deliver measurable cost savings. Experience peak performance with minimal environmental impact and operational expenses.
                </p>
              </div>

              {/* CTA Button at bottom */}
              <div className="mt-auto">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-2xl py-7 h-auto text-base font-semibold shadow-lg hover:shadow-xl transition-all group"
                >
                  <Link href="#contact">
                    Request Energy Analysis
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Card 4 - Economical Production Cost (Light, Bottom Left, Spans 2 Columns) */}
          <div
            className={`lg:col-span-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="h-full bg-gray-50 rounded-3xl p-10 lg:p-12">
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full border-2 border-foreground/10 flex items-center justify-center">
                    <TrendingDown className="w-9 h-9 text-foreground/80" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 leading-tight">
                    {whyChooseData.cards[3].title}
                  </h3>
                  <p className="text-base lg:text-lg text-foreground/70 leading-relaxed">
                    {whyChooseData.cards[3].description} Our solutions are designed for longevity, requiring minimal maintenance while delivering consistent, reliable performance year after year.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 - Precision Process Control (Light, Second Row Left) */}
          <div
            className={`lg:col-span-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="h-full bg-gray-50 rounded-3xl p-10 lg:p-12">
              <div className="mb-8">
                <div className="w-20 h-20 rounded-full border-2 border-foreground/10 flex items-center justify-center">
                  <Target className="w-9 h-9 text-foreground/80" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 leading-tight">
                {whyChooseData.cards[4].title}
              </h3>
              <p className="text-base lg:text-lg text-foreground/70 leading-relaxed">
                {whyChooseData.cards[4].description}
              </p>
            </div>
          </div>

          {/* Card 6 - Smarter & More Reliable (Light, Second Row Middle) */}
          <div
            className={`lg:col-span-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="h-full bg-gray-50 rounded-3xl p-10 lg:p-12">
              <div className="mb-8">
                <div className="w-20 h-20 rounded-full border-2 border-foreground/10 flex items-center justify-center">
                  <Cpu className="w-9 h-9 text-foreground/80" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 leading-tight">
                {whyChooseData.cards[5].title}
              </h3>
              <p className="text-base lg:text-lg text-foreground/70 leading-relaxed">
                {whyChooseData.cards[5].description}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div
          className={`mt-24 lg:mt-32 transition-all duration-700 delay-600 ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 text-center">
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-foreground mb-3">37+</div>
              <div className="text-sm lg:text-base text-muted-foreground">Years of Excellence</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-foreground mb-3">11,000+</div>
              <div className="text-sm lg:text-base text-muted-foreground">Clients Served</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-foreground mb-3">13,000+</div>
              <div className="text-sm lg:text-base text-muted-foreground">Installations</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-primary mb-3">25+</div>
              <div className="text-sm lg:text-base text-muted-foreground">Export Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
