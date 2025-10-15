"use client";

import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { solutionsShowcaseData } from "@/lib/data/landing-data";
import { Building2, Check, Snowflake } from "lucide-react";
import Link from "next/link";

const iconMap = {
  building: Building2,
  snowflake: Snowflake,
};

export function SolutionsShowcase() {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <section ref={ref} className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-sm uppercase tracking-wider text-primary font-semibold mb-6">
            {solutionsShowcaseData.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
            {solutionsShowcaseData.headline}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {solutionsShowcaseData.description}
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {solutionsShowcaseData.categories.map((category, index) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className={`group transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative h-full bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 lg:p-12 border border-gray-200 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Decorative gradient blob */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className="mb-8">
                      <div className="inline-flex w-20 h-20 rounded-2xl bg-primary/10 items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                        <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                      {category.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Product List */}
                    <div className="space-y-3">
                      {category.products.map((product, productIndex) => (
                        <div
                          key={productIndex}
                          className="flex items-start gap-3 group/item"
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 group-hover/item:bg-primary/20 transition-colors">
                            <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                          </div>
                          <span className="text-base text-foreground/80 leading-relaxed group-hover/item:text-foreground transition-colors">
                            {product}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Hover indicator */}
                    <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>View specifications</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-200">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Need a custom solution?
              </h3>
              <p className="text-base text-muted-foreground">
                Our engineering team can design tailored cooling systems for your specific requirements
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 px-8 py-6 h-auto rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
            >
              <Link href={solutionsShowcaseData.ctaHref}>
                {solutionsShowcaseData.ctaText}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
