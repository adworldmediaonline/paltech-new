"use client";

import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { statsData } from "@/lib/data/landing-data";

function StatItem({ value, label, isVisible }: { value: string; label: string; isVisible: boolean }) {
  // Extract number from value string (e.g., "37+" -> 30)
  const numericValue = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  const count = useCounterAnimation(numericValue, 2000, isVisible);

  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-base sm:text-lg text-muted-foreground">{label}</div>
    </div>
  );
}

export function Stats() {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true, threshold: 0.3 });

  return (
    <section ref={ref} className="py-20 md:py-28 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {statsData.stats.map((stat, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <StatItem value={stat.value} label={stat.label} isVisible={isVisible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

