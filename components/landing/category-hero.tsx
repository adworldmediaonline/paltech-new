
"use client";

import Image from "next/image";

export interface CategoryHeroProps {
  title: string;
  imageSrc?: string;
  alt?: string;
}

export function CategoryHero({ title, imageSrc = "/banner/banner.png", alt = title }: CategoryHeroProps) {
  return (
    <section className="relative w-full pt-36 sm:pt-40 md:pt-44">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-white/40 shadow-sm">
          <div className="relative h-[200px] sm:h-[260px] md:h-[320px]">
            <Image src={imageSrc} alt={alt} fill sizes="100vw" className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            <h1 className="absolute bottom-4 left-4 right-4 text-xl sm:text-2xl md:text-3xl font-semibold text-white drop-shadow">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryHero;


