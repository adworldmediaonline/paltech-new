"use client";

import Image from "next/image";
import heroBanner from "../../public/banner/hero-banner-1.png";

export function HeroBanner() {
  return (
    <section className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden">
      {/* Optimized Background Image for LCP */}
      <Image
        src={heroBanner}
        alt="Paltech Cooling Towers - Industrial Cooling Solutions"
        fill
        preload={true}
        quality={90}
        sizes="100vw"
        className="object-cover object-top"
        placeholder="blur"
        loading="eager"
      />
    </section>
  );
}
