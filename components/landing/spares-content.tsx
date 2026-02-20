import { ArrowRight, CheckCircle, Shield, Package, Cog, Fan, Droplets, Wrench, Globe, Award, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function SparesContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Spares and FRP Fans – High-Performance Cooling Tower Components
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Paltech™ Cooling Towers and Equipments Ltd. is one of India's most trusted manufacturers and exporters of <strong>Cooling Tower Spares, FRP Fans, and Industrial Cooling Components</strong>. With over 39+ of engineering excellence, Paltech™ designs and delivers precision-built components that enhance cooling performance, minimize downtime, and extend equipment life.
        </p>
        <p className="text-base sm:text-lg text-gray-600">
          Our spare parts are compatible with FRP, Timber, RCC, and Crossflow Cooling Towers across multiple industries, ensuring seamless integration and reliable performance.
        </p>
      </div>

      {/* Key Benefits Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: <Award className="w-6 h-6" />,
            title: "ISO Certified Quality",
            description: "Manufactured under ISO 9001:2015 and ISO 45001:2018 certified processes."
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Extended Equipment Life",
            description: "Premium-grade materials and advanced manufacturing techniques ensure durability."
          },
          {
            icon: <Cog className="w-6 h-6" />,
            title: "Custom Fit Solutions",
            description: "Available in multiple sizes and specifications to match different cooling tower models."
          },
          {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Energy & Cost Efficiency",
            description: "Designed for reduced operational costs and optimized thermal performance."
          },
          {
            icon: <Globe className="w-6 h-6" />,
            title: "Global Supply Capability",
            description: "Exporting to 30+ countries with on-time delivery and superior technical support."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Unmatched Reliability",
            description: "Consistent performance even under demanding industrial conditions."
          }
        ].map((benefit, index) => (
          <div
            key={index}
            className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
              {benefit.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Main Components Section */}
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Cooling Tower Spares & Components
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Paltech™ offers a comprehensive range of cooling tower parts and accessories manufactured using high-quality, corrosion-resistant materials. Each component is engineered for optimum airflow, minimal maintenance, and long service life.
          </p>
        </div>

        {/* Components Grid */}
        <div className="grid gap-8">
          {/* Drive Shafts */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <Cog className="w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">1. Drive Shafts</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Available in <strong>Carbon Fiber (HDGMS)</strong> and <strong>Stainless Steel (SS)</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Designed for vibration-free power transmission and superior load handling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Lightweight, maintenance-free, and resistant to rust and fatigue</span>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Link href="/spares/drive-shafts">
                      <Button variant="outline" className="group">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gear Reducers */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <Wrench className="w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">2. Gear Reducers</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Heavy-duty gear reducers ensure maximum torque with minimal energy loss</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Precision-engineered for smooth performance and longer operational life</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Ideal for both induced draft and forced draft cooling towers</span>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Link href="/spares/gear-reducers">
                      <Button variant="outline" className="group">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fan Cylinders */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <Package className="w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">3. Fan Cylinders</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Manufactured from premium-grade FRP material for durability and stability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Streamlined design for enhanced air velocity and reduced turbulence</span>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Link href="/spares/fan-cylinders">
                      <Button variant="outline" className="group">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fan Guards */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <Shield className="w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">4. Fan Guards</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>High-strength guards for safety and optimal airflow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Hot-dip galvanized and corrosion-resistant finish ensures longevity</span>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Link href="/spares/fan-guards">
                      <Button variant="outline" className="group">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Axial Flow Fans */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <Fan className="w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">5. Axial Flow Fans</h3>
                  <p className="text-gray-600 mb-3">
                    Paltech™ manufactures high-performance Axial Fans in FRP and Aluminum variants.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>FRP Fans:</strong> Lightweight, low-noise, and ideal for high-humidity environments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Aluminum Fans:</strong> High static pressure, robust design, and superior balance for long-term industrial use</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>All fans are dynamically balanced for vibration-free, energy-efficient operation</span>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Link href="/spares/axial-fans">
                      <Button variant="outline" className="group">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fills and Drift Eliminators */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <Droplets className="w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">6. Fills and Drift Eliminators</h3>
                  <p className="text-gray-600 mb-3">
                    Our Cooling Tower Fill Media are designed to maximize heat transfer efficiency while minimizing water loss.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>PVC Film Fills</strong> – Suitable for counterflow and crossflow towers, ensuring maximum thermal performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>PVC Splash Fills</strong> – Ideal for dirty water applications and high-load conditions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>PP Ball Fills</strong> – High durability and easy maintenance for chemical and industrial cooling systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Trickle Grid Fills & Cooling Tower Splash Bars</strong> – Effective for uneven water distribution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Drift Eliminators</strong> – Prevent water droplets from escaping, reducing drift loss by up to 0.001%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>FC Valves & Nozzles</strong> – Precision-designed for even water distribution and spray coverage</span>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Link href="/spares/fills">
                      <Button variant="outline" className="group">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries Served */}
      <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-2xl p-6 sm:p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Industries Served</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Power Plants</strong> | Chemical Processing | HVAC | Petrochemical | Sugar | Fertilizer | Food Processing | Steel | Cement | Textile | and more.
        </p>
        <p className="text-gray-600 mt-4">
          Paltech™ spares and fans are widely used in both domestic and international installations, offering unmatched reliability and consistent performance even under demanding industrial conditions.
        </p>
      </div>

      {/* FAQs */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: "Are Paltech™ spares compatible with other cooling tower brands?",
              answer: "Yes, our spares are designed for universal compatibility and can be customized to fit any make or model."
            },
            {
              question: "Do you offer export support and documentation?",
              answer: "Absolutely. Paltech™ exports to over 30 countries and provides complete export documentation and logistics support."
            },
            {
              question: "How do FRP fans compare to aluminum fans?",
              answer: "FRP fans are lightweight, energy-efficient, and corrosion-resistant, while aluminum fans are preferred for high static pressure and heavy-duty performance."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary/40 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 sm:p-12 text-center text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Looking to upgrade or replace your Cooling Tower Components?
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Contact Paltech™ Cooling Towers and Equipments Ltd. for reliable, performance-driven cooling tower spares built for industrial excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="tel:+911244499700" className="inline-flex items-center gap-2 text-white hover:text-white/90 font-semibold">
            📞 +91-124-4499700
          </a>
          <a href="mailto:paltech@paltech.in" className="inline-flex items-center gap-2 text-white hover:text-white/90 font-semibold">
            📩 paltech@paltech.in
          </a>
          <a href="https://www.paltech.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-white/90 font-semibold">
            🌐 www.paltech.in
          </a>
        </div>
      </div>
    </div>
  );
}

