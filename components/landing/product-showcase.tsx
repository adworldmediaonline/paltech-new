"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import Image from "next/image";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const products = [
  {
    title: "Pultruded FRP Cooling Towers",
    images: [
      "/products/Pultruded FRP Cooling Towers_11zon.webp",
      "/products/Pultruded FRP Cooling Towers2_11zon.webp",
      "/products/Pultruded FRP Cooling Towers 3_11zon.webp",
      "/products/Pultruded FRP Cooling Towers 4_11zon.webp",
      "/products/Pultruded FRP Cooling Towers 5_11zon.webp",
    ],
  },
];

// Flatten all images for the main swiper
const allImages = products.flatMap(category =>
  category.images.map(img => ({
    src: img,
    category: category.title
  }))
);

export function ProductShowcase() {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <section ref={ref} className="relative py-10 md:py-12 lg:py-14 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">
            OUR PRODUCTS
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight max-w-4xl mx-auto">
            Precision Engineering in Action
          </h2>
        </div>

        {/* Main Swiper */}
        <div
          className={`mb-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            className="product-swiper"
          >
            {allImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="group relative w-full aspect-[5/3] rounded-xl shadow-lg overflow-hidden">
                  {/* Image fills entire card - no padding, no white space */}
                  <Image
                    src={image.src}
                    alt={image.category}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority={index < 3}
                  />

                  {/* Category Badge - Floating over image */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-white/20">
                    <span className="text-xs font-semibold text-foreground">
                      {image.category}
                    </span>
                  </div>

                  {/* Subtle gradient overlay for badge readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10 pointer-events-none" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .product-swiper {
          padding: 40px 0 60px;
        }

        .product-swiper .swiper-slide {
          width: 80%;
          max-width: 750px;
        }

        .product-swiper .swiper-slide-shadow-left,
        .product-swiper .swiper-slide-shadow-right {
          background-image: linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0));
        }

        .product-swiper .swiper-button-next,
        .product-swiper .swiper-button-prev {
          color: hsl(var(--primary));
          background: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: all 0.3s;
        }

        .product-swiper .swiper-button-next:hover,
        .product-swiper .swiper-button-prev:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 30px rgba(0,0,0,0.15);
        }

        .product-swiper .swiper-button-next::after,
        .product-swiper .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }

        .product-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: hsl(var(--primary));
          opacity: 0.4;
        }

        .product-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
}
