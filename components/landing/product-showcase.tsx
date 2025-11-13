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
    title: "RCC Concrete Cooling Towers",
    images: [
      "/categories/RCC Concrete Cooling Towers 1.webp",
      "/categories/RCC Concrete Cooling Towers 2.webp",
      "/categories/RCC Concrete Cooling Towers 3.webp",
      "/categories/RCC Concrete Cooling Towers 4.webp",
    ],
  },
  {
    title: "Pultruded FRP Cooling Towers",
    images: [
      "/categories/pultruded-frp-cooling-towers-1.webp",
      "/categories/pultruded-frp-cooling-towers-2.webp",
      "/categories/pultruded-frp-cooling-towers-3.webp",
      "/categories/pultruded-frp-cooling-towers-4.webp",
    ],
  },
  {
    title: "Wooden Timber Cooling Towers",
    images: [
      "/categories/wooden-timber-cooling-towers-1.webp",
      "/categories/wooden-timber-cooling-towers-2.webp",
      "/categories/wooden-timber-cooling-towers-3.webp",
      "/categories/wooden-timber-cooling-towers-4.webp",
    ],
  },
  {
    title: "Packaged Wooden Double Flow Cooling Towers",
    images: [
      "/categories/packaged-wooden-timber-double-flow-induced-draft-crossflow-cooling-towers-1.webp",
      "/categories/packaged-wooden-timber-double-flow-induced-draft-crossflow-cooling-towers-2.webp",
      "/categories/packaged-wooden-timber-double-flow-induced-draft-crossflow-cooling-towers-3.webp",
      "/categories/packaged-wooden-timber-double-flow-induced-draft-crossflow-cooling-towers-4.webp",
    ],
  },
  {
    title: "Water/Air Cooled Scroll Chilling Plants",
    images: [
      "/categories/water-air-cooled-scroll-chilling-plants-1.webp",
      "/categories/water-air-cooled-scroll-chilling-plants-2.webp",
      "/categories/water-air-cooled-scroll-chilling-plants-3.webp",
      "/categories/water-air-cooled-scroll-chilling-plants-4.webp",
    ],
  },
  {
    title: "Reciprocating Chilling Plants",
    images: [
      "/categories/reciprocating-water-air-cooled-chilling-plants-1.webp",
      "/categories/reciprocating-water-air-cooled-chilling-plants-2.webp",
      "/categories/reciprocating-water-air-cooled-chilling-plants-3.webp",
      "/categories/reciprocating-water-air-cooled-chilling-plants-4.webp",
    ],
  },
  {
    title: "Trolley Mounted Chilling Plants",
    images: [
      "/categories/trolley-mounted-water-air-cooled-chilling-plant-1.webp",
      "/categories/trolley-mounted-water-air-cooled-chilling-plant-2.webp",
      "/categories/trolley-mounted-water-air-cooled-chilling-plant-3.webp",
      "/categories/trolley-mounted-water-air-cooled-chilling-plant-4.webp",
    ],
  },
  {
    title: "Micro-Processor Based Chilling Plants",
    images: [
      "/categories/micro-processor-based-water-air-cooled-chilling-plants-1.webp",
      "/categories/micro-processor-based-water-air-cooled-chilling-plants-2.webp",
      "/categories/micro-processor-based-water-air-cooled-chilling-plants-3.webp",
      "/categories/micro-processor-based-water-air-cooled-chilling-plants-4.webp",
    ],
  },
  {
    title: "Glycol Based Chilling Plants",
    images: [
      "/categories/glycol-based-water-air-cooled-chilling-plants-1.webp",
      "/categories/glycol-based-water-air-cooled-chilling-plants-2.webp",
      "/categories/glycol-based-water-air-cooled-chilling-plants-3.webp",
      "/categories/glycol-based-water-air-cooled-chilling-plants-4.webp",
    ],
  },
  {
    title: "FRP Gratings",
    images: [
      "/categories/frp-gratings-1.webp",
      "/categories/frp-gratings-2.webp",
      "/categories/frp-gratings-3.webp",
      "/categories/frp-gratings-4.webp",
    ],
  },
  {
    title: "FRP Ladders",
    images: [
      "/categories/frp-ladders-1.webp",
      "/categories/frp-ladders-2.webp",
      "/categories/frp-ladders-3.webp",
      "/categories/frp-ladders-4.webp",
    ],
  },
  {
    title: "FRP Deck Panels",
    images: [
      "/categories/frp-deck-panels-1.webp",
      "/categories/frp-deck-panels-2.webp",
      "/categories/frp-deck-panels-3.webp",
    ],
  },
  {
    title: "FRP Corrugated Sheets",
    images: [
      "/categories/frp-corrugated-sheets-1.webp",
      "/categories/frp-corrugated-sheets-2.webp",
      "/categories/frp-corrugated-sheets-3.webp",
      "/categories/frp-corrugated-sheets-4.webp",
    ],
  },
  {
    title: "Fan-Less Induced Draft Jet Type",
    images: [
      "/categories/fan-less-induced-draft-jet-type-frp-1.webp",
      "/categories/fan-less-induced-draft-jet-type-frp-2.webp",
      "/categories/fan-less-induced-draft-jet-type-frp-3.webp",
      "/categories/fan-less-induced-draft-jet-type-frp-4.webp",
    ],
  },
  {
    title: "Gear Reducers",
    images: [
      "/categories/gear-reducer-1.webp",
      "/categories/gear-reducer-2.webp",
      "/categories/gear-reducer-3.webp",
      "/categories/gear-reducer-4.webp",
    ],
  },
  {
    title: "Fan Cylinders",
    images: [
      "/categories/fan-cylinders-1.webp",
      "/categories/fan-cylinders-2.webp",
      "/categories/fan-cylinders-3.webp",
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

// Shuffle array randomly
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Create randomized images array
const randomImages = shuffleArray(allImages);

export function ProductShowcase() {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <section ref={ref} className="relative py-10 md:py-12 lg:py-14 bg-linear-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
          className={`mb-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"
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
            {randomImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="group relative w-full aspect-5/3 rounded-xl shadow-lg overflow-hidden">
                  {/* Image fills entire card - no padding, no white space */}
                  <Image
                    src={image.src}
                    alt={image.category}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority={index < 3}
                    quality={100}
                  />

                  {/* Category Badge - Floating over image */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-white/20">
                    <span className="text-xs font-semibold text-foreground">
                      {image.category}
                    </span>
                  </div>

                  {/* Subtle gradient overlay for badge readability */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-black/10 pointer-events-none" />
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
