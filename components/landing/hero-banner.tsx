"use client";

import Image from "next/image";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import hero1 from '../../public/home-banner/home-page-1.png'
import hero2 from '../../public/home-banner/home-page-2.png'
import hero3 from '../../public/home-banner/home-page-3.png'

const heroImages = [hero1, hero2, hero3];

export function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={1000}
        className="hero-banner-swiper"
      >
        {heroImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full">
              <Image
                src={img}
                alt={`Paltech™ Cooling Towers - Industrial Cooling Solutions ${index + 1}`}
                quality={100}
                unoptimized={true}
                className="object-cover object-center w-full"
                placeholder="blur"
                loading={index === 0 ? "eager" : "lazy"}
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
