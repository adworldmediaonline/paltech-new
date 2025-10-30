"use client";

import Image from "next/image";
import { ReactNode } from "react";

export interface CategoryHeroProps {
  imageSrc?: string;
  alt?: string;
  children?: ReactNode;
}

export function CategoryHero({ imageSrc = "/banner/banner.png", alt = "Hero Banner", children }: CategoryHeroProps) {
  return (
    <section className="relative w-full pt-24 sm:pt-28 md:pt-32 pb-[5px] sm:pb-[10px]">
      <div className="relative w-full overflow-hidden">
        <div className="relative h-[200px] sm:h-[260px] md:h-[320px]">
          <Image src={imageSrc} alt={alt} fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          {children && (
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 md:left-8 md:right-8">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CategoryHero;


