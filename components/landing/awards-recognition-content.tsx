import Image from "next/image";
import { Award, Trophy, Star, CheckCircle } from "lucide-react";
import award1 from '../../public/about/img-1.webp';
import award2 from '../../public/about/img-2.webp';

export function AwardsRecognitionContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Awards & Recognition
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          It was a momentous occasion for <strong>"Paltech Cooling Towers & Equipments Limited"</strong> when two National Awards were conferred to the Company in a row for Excellence and Quality.
        </p>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Since 1986, the company started proving itself in the field of Cooling Towers (FRP/Wooden/Rcc), Water Treatment Systems and Chilling Plants in it's bouquet for various applications.
        </p>
      </div>

      {/* Award Images Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Award 1 - Prime Minister */}
        <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={award1}
              alt="National Award for Quality presented by Hon'ble Prime Minister Dr. Manmohan Singh"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              National Award
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-start gap-3 mb-3">
              <Award className="w-6 h-6 text-primary shrink-0 mt-1" />
              <h3 className="text-xl font-bold text-gray-900">
                Awarded for "Quality"
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Awarded by <strong>Hon'ble Prime Minister of India Dr. Manmohan Singh</strong> for outstanding quality standards in cooling tower manufacturing and engineering excellence.
            </p>
          </div>
        </div>

        {/* Award 2 - Vice President */}
        <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={award2}
              alt="National Award for Excellence & Performance presented by Hon'ble Vice President Shri Bhairon Singh Shekhawat"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              National Award
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-start gap-3 mb-3">
              <Award className="w-6 h-6 text-primary shrink-0 mt-1" />
              <h3 className="text-xl font-bold text-gray-900">
                Awarded for "Excellence & Performance"
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Awarded by <strong>Hon'ble Vice President of India Shri Bhairon Singh Shekhawat</strong> for exceptional performance and excellence in industrial cooling solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Achievement Highlights */}
      <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Our Achievement Highlights</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Award className="w-7 h-7" />,
              title: "National Recognition",
              description: "Two prestigious national awards"
            },
            {
              icon: <Trophy className="w-7 h-7" />,
              title: "Quality Excellence",
              description: "Recognized for superior quality standards"
            },
            {
              icon: <Star className="w-7 h-7" />,
              title: "Performance Leader",
              description: "Excellence in industrial solutions"
            },
            {
              icon: <CheckCircle className="w-7 h-7" />,
              title: "Since 1986",
              description: "37+ years of proven excellence"
            }
          ].map((highlight, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{highlight.title}</h3>
              <p className="text-gray-600 text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Portfolio */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Our Core Competencies</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              title: "Cooling Towers",
              description: "FRP, Wooden, and RCC cooling towers for diverse industrial applications",
              types: ["FRP Cooling Towers", "Wooden Cooling Towers", "RCC Cooling Towers", "Pultruded FRP Towers"]
            },
            {
              title: "Water Treatment Systems",
              description: "Comprehensive water treatment solutions for optimal cooling tower performance",
              types: ["Filtration Systems", "DM Plants", "Water Softening", "RO Systems"]
            },
            {
              title: "Chilling Plants",
              description: "Advanced chilling plant solutions for industrial and commercial applications",
              types: ["Water Cooled Chillers", "Air Cooled Chillers", "Scroll Chillers", "Screw Chillers"]
            }
          ].map((product, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>
              <div className="space-y-2">
                {product.types.map((type, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>{type}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 sm:p-12 text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Journey of Excellence</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl font-bold shrink-0">
              1986
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Foundation Year</h3>
              <p className="text-white/90 leading-relaxed">
                Paltech Cooling Towers & Equipments Limited was established, marking the beginning of our journey in delivering exceptional cooling solutions.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0">
              <Trophy className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">National Awards</h3>
              <p className="text-white/90 leading-relaxed">
                Received two consecutive National Awards from the highest offices of India for Quality and Excellence & Performance, cementing our position as an industry leader.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl font-bold shrink-0">
              2025
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Continued Excellence</h3>
              <p className="text-white/90 leading-relaxed">
                With 37+ years of experience, 11,000+ installations worldwide, and 9,000+ satisfied clients across 25+ countries, we continue to set benchmarks in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

