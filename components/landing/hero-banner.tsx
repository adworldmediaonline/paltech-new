"use client";

import Image from "next/image";

export function HeroBanner() {
  return (
    <section className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/banner/hero-banner-1.png"
        alt="Industrial Cooling Towers"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
    </section>
  );
}
