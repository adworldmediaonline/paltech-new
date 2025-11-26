"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { principlesData } from "@/lib/data/landing-data";
import { Award, Crosshair, Zap } from "lucide-react";

const iconMap = {
  award: Award,
  crosshair: Crosshair,
  zap: Zap,
};

export function Principles() {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <section ref={ref} className="py-20 md:py-28 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Header */}
          <div className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">
            {principlesData.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 max-w-4xl">
            {principlesData.headline}
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl leading-relaxed">
            {principlesData.subheadline}
          </p>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 mb-10">
            {principlesData.principles.map((principle, index) => {
              const Icon = iconMap[principle.icon as keyof typeof iconMap];
              return (
                <div
                  key={index}
                  className="group"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-3">
                    {principle.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm font-medium text-foreground/80">
                      {principle.highlight}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certifications List */}
          <div className="border-t border-border pt-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-4">
              {[
                "ISO 9001:2015",
                "ISO 14001:2015",
                "ISO 45001:2018",
                "CTI USA Member",
                "39+ Years",
                "11K+ Clients",
              ].map((cert, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2 group-hover:scale-125 transition-transform" />
                  <p className="text-sm text-foreground/90">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
