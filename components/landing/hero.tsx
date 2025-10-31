"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { heroData } from "@/lib/data/landing-data";
import { ArrowRight, Award, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/banner/banner.png')] bg-cover bg-center bg-no-repeat" />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/80 to-slate-950/85" />
      </div>
      {/* Subtle animated gradient orbs for depth */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-primary/8 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24 md:pb-32 lg:pb-40 pt-10 w-full">
        <div className="max-w-5xl mx-auto">
          {/* Content - Centered */}
          <div className="text-center animate-fade-in">
            {/* Eyebrow badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6 sm:mb-8">
              <Badge className="px-2.5 py-1.5 sm:px-3 sm:py-2 bg-white/5 text-white border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm text-[10px] sm:text-xs">
                <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1 sm:mr-1.5 text-primary" />
                ISO 9001:2015
              </Badge>
              <Badge className="px-2.5 py-1.5 sm:px-3 sm:py-2 bg-white/5 text-white border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm text-[10px] sm:text-xs">
                <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1 sm:mr-1.5 text-primary" />
                ISO 14001:2015
              </Badge>
              <Badge className="px-2.5 py-1.5 sm:px-3 sm:py-2 bg-white/5 text-white border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm text-[10px] sm:text-xs">
                <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1 sm:mr-1.5 text-primary" />
                ISO 45001:2018
              </Badge>
              <Badge className="px-2.5 py-1.5 sm:px-3 sm:py-2 bg-white/5 text-white border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm text-[10px] sm:text-xs">
                <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1 sm:mr-1.5 text-primary" />
                CTI USA Member
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white leading-[1.1] sm:leading-[1.08] tracking-tight mb-6 sm:mb-8 px-2">
              Precision-Engineered{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-gradient inline-block">
                Cooling Solutions
              </span>{" "}
              for Critical Industries
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 sm:mb-12 leading-relaxed max-w-4xl mx-auto font-light px-4">
              Over 37+ of Years delivering quality products and most reliable services.
              Trusted by 11,000+ clients worldwide with 13,000+ installations across 25+ countries.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4">
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-primary to-primary/90 text-white hover:shadow-2xl hover:shadow-primary/30 active:scale-95 transition-all text-sm sm:text-base md:text-lg px-8 sm:px-10 py-5 sm:py-6 md:py-7 h-auto rounded-xl sm:rounded-2xl font-semibold hover:scale-105 touch-manipulation"
              >
                <Link href={heroData.primaryCta.href}>
                  {heroData.primaryCta.text}
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/20 text-black hover:bg-primary/10 hover:text-white backdrop-blur-sm active:scale-95 text-sm sm:text-base md:text-lg px-8 sm:px-10 py-5 sm:py-6 md:py-7 h-auto rounded-xl sm:rounded-2xl font-semibold transition-all hover:border-white/40 touch-manipulation"
              >
                <Link href={heroData.secondaryCta.href}>
                  {heroData.secondaryCta.text}
                </Link>
              </Button>
            </div>

            {/* Trust Stats - Horizontal row */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12 px-4">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">37+</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Years Excellence</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">11K+</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Clients Served</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">13K+</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Installations</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 sm:mb-2">25+</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Export Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
