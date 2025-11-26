"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { clientLogosData } from "@/lib/data/landing-data";
import { Award, Building2, Globe, Users } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function OurClientsContent() {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  // Filter clients by sector
  const privateClients = clientsList.filter(client => client.sector === 'PRIVATE');
  const publicClients = clientsList.filter(client => client.sector === 'PUBLIC');

  // Split logos into 5 rows for more comprehensive display
  const logosPerRow = Math.ceil(clientLogosData.logos.length / 5);
  const row1Logos = [...clientLogosData.logos.slice(0, logosPerRow), ...clientLogosData.logos.slice(0, logosPerRow)];
  const row2Logos = [...clientLogosData.logos.slice(logosPerRow, logosPerRow * 2), ...clientLogosData.logos.slice(logosPerRow, logosPerRow * 2)];
  const row3Logos = [...clientLogosData.logos.slice(logosPerRow * 2, logosPerRow * 3), ...clientLogosData.logos.slice(logosPerRow * 2, logosPerRow * 3)];
  const row4Logos = [...clientLogosData.logos.slice(logosPerRow * 3, logosPerRow * 4), ...clientLogosData.logos.slice(logosPerRow * 3, logosPerRow * 4)];
  const row5Logos = [...clientLogosData.logos.slice(logosPerRow * 4), ...clientLogosData.logos.slice(logosPerRow * 4)];

  const rows = [
    { logos: row1Logos, direction: 'left' },
    { logos: row2Logos, direction: 'right' },
    { logos: row3Logos, direction: 'left' },
    { logos: row4Logos, direction: 'right' },
    { logos: row5Logos, direction: 'left' }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Our Clients
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Partnering with industry leaders across 46+ countries for over 39+ years. Paltech™ is trusted by thousands of organizations worldwide for delivering exceptional cooling solutions.
        </p>
      </div>
      {/* Industries Served */}
      <div className="bg-linear-to-br from-primary/5 to-transparent rounded-2xl p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
          Industries We Serve
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Power Generation",
            "Steel & Mining",
            "Sugar & Food Processing",
            "Cement & Construction",
            "Chemical & Petrochemical",
            "Paper & Pulp",
            "Textile & Garments",
            "Pharmaceutical",
            "Automobile Manufacturing",
            "Oil & Gas",
            "HVAC Systems",
            "Process Cooling"
          ].map((industry, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-gray-200 hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <div className="w-2 h-2 bg-primary rounded-full shrink-0"></div>
              <span className="text-sm font-medium text-gray-700">{industry}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Key Statistics */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {[
          {
            icon: <Users className="w-7 h-7" />,
            value: "65+",
            label: "Featured Clients",
            color: "from-blue-500 to-blue-600"
          },
          {
            icon: <Building2 className="w-7 h-7" />,
            value: "16",
            label: "Public Sector",
            color: "from-blue-500 to-blue-700"
          },
          {
            icon: <Building2 className="w-7 h-7" />,
            value: "49",
            label: "Private Sector",
            color: "from-green-500 to-green-600"
          },
          {
            icon: <Globe className="w-7 h-7" />,
            value: "46+",
            label: "Export Countries",
            color: "from-purple-500 to-purple-600"
          },
          {
            icon: <Award className="w-7 h-7" />,
            value: "9,000+",
            label: "Total Clients",
            color: "from-orange-500 to-orange-600"
          }
        ].map((stat, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
          >
            <div className={`w-12 h-12 bg-linear-to-br ${stat.color} rounded-lg flex items-center justify-center text-white mb-4`}>
              {stat.icon}
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Section Header */}
      <div ref={ref} className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 bg-primary/10 rounded-full">
          <Award className="w-4 h-4 text-primary" />
          <span className="text-sm uppercase tracking-wider text-primary font-semibold">
            Trusted Worldwide
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          {clientLogosData.headline}
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          Our client portfolio spans across power generation, petrochemical, steel, sugar, food processing, and many other industries.
        </p>
      </div>

      {/* Multi-Row Marquee Container */}
      <div
        className={`relative transition-all duration-700 delay-300 ${isVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="mb-6 lg:mb-8">
            <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className={`flex ${row.direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'} hover:pause-animation`}>
                {row.logos.map((logo, index) => (
                  <div
                    key={`row${rowIndex}-${index}`}
                    className="shrink-0 mx-3 lg:mx-4"
                  >
                    <div className="group relative w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-36 lg:w-64 lg:h-40 bg-white rounded-2xl border-2 border-gray-200 hover:border-primary/30 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden">
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Logo */}
                      <div className="relative w-full h-full p-6 flex items-center justify-center">
                        <Image
                          src={logo.imageUrl}
                          alt={logo.name}
                          fill
                          className="object-contain p-4 group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                          sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                        />
                      </div>

                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </div>
                ))}
              </div>
              {/* Duplicate for seamless loop */}
              <div className={`flex ${row.direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'} hover:pause-animation`} aria-hidden="true">
                {row.logos.map((logo, index) => (
                  <div
                    key={`row${rowIndex}-dup-${index}`}
                    className="shrink-0 mx-3 lg:mx-4"
                  >
                    <div className="group relative w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-36 lg:w-64 lg:h-40 bg-white rounded-2xl border-2 border-gray-200 hover:border-primary/30 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden">
                      <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative w-full h-full p-6 flex items-center justify-center">
                        <Image
                          src={logo.imageUrl}
                          alt={logo.name}
                          fill
                          className="object-contain p-4 group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                          sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                        />
                      </div>
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Info */}
      <div
        className={`text-center transition-all duration-700 delay-600 ${isVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        <div className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full border border-gray-200 shadow-lg">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-semibold text-foreground">
              9,000+ clients
            </span>
          </div>
          <div className="w-px h-4 bg-gray-300" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
            <span className="text-sm font-semibold text-foreground">
              46+ countries
            </span>
          </div>
          <div className="w-px h-4 bg-gray-300" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '1s' }} />
            <span className="text-sm font-semibold text-foreground">
              39+ years trusted
            </span>
          </div>
        </div>
      </div>

      {/* Comprehensive Client List with Tabs */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Esteemed Clients</h2>
          <p className="text-gray-600">A comprehensive list of organizations that trust Paltech™ for their cooling solutions</p>
        </div>

        <Tabs defaultValue="private" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-6">
            <TabsTrigger value="private" className="text-sm sm:text-base">
              Private Sector ({privateClients.length})
            </TabsTrigger>
            <TabsTrigger value="public" className="text-sm sm:text-base">
              Public Sector ({publicClients.length})
            </TabsTrigger>
          </TabsList>

          {/* Private Sector Tab */}
          <TabsContent value="private" className="space-y-4">
            {/* Desktop Table */}
            <div className="hidden lg:block bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-green-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold w-20">S.No.</th>
                      <th className="px-6 py-4 text-left font-semibold">Client Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {privateClients.map((client, index) => (
                      <tr
                        key={client.sno}
                        className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-green-50 transition-colors`}
                      >
                        <td className="px-6 py-4 text-gray-900 font-medium border-t border-gray-200">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 text-gray-900 border-t border-gray-200">
                          {client.name}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile/Tablet Cards */}
            <div className="lg:hidden space-y-3">
              {privateClients.map((client, index) => (
                <div
                  key={client.sno}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:border-green-400 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 font-bold text-sm shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm">{client.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Public Sector Tab */}
          <TabsContent value="public" className="space-y-4">
            {/* Desktop Table */}
            <div className="hidden lg:block bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold w-20">S.No.</th>
                      <th className="px-6 py-4 text-left font-semibold">Client Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {publicClients.map((client, index) => (
                      <tr
                        key={client.sno}
                        className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}
                      >
                        <td className="px-6 py-4 text-gray-900 font-medium border-t border-gray-200">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 text-gray-900 border-t border-gray-200">
                          {client.name}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile/Tablet Cards */}
            <div className="lg:hidden space-y-3">
              {publicClients.map((client, index) => (
                <div
                  key={client.sno}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:border-blue-400 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm">{client.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>


    </div>
  );
}

const clientsList = [
  { sno: 1, name: "Indian Oil Corporation Limited (IOCL)", sector: "PUBLIC" },
  { sno: 2, name: "Aditya Birla Chemical (I) Ltd.", sector: "PRIVATE" },
  { sno: 3, name: "Gujarat State Fertilizers & Chemicals Ltd. (GSFCL)", sector: "PUBLIC" },
  { sno: 4, name: "Reliance Industries Ltd (RIL)", sector: "PRIVATE" },
  { sno: 5, name: "Hindustan Unilever Ltd (HUL)", sector: "PRIVATE" },
  { sno: 6, name: "Larsen & Toubro (L&T)", sector: "PRIVATE" },
  { sno: 7, name: "UltraTech Cement", sector: "PRIVATE" },
  { sno: 8, name: "National Thermal Power Corporation (NTPC)", sector: "PUBLIC" },
  { sno: 9, name: "JSW Steel Ltd.", sector: "PRIVATE" },
  { sno: 10, name: "Tata Steel Ltd.", sector: "PRIVATE" },
  { sno: 11, name: "Grasim Industries Ltd.", sector: "PRIVATE" },
  { sno: 12, name: "Bharat Petroleum Corporation Limited (BPCL)", sector: "PUBLIC" },
  { sno: 13, name: "Vedanta Ltd", sector: "PRIVATE" },
  { sno: 14, name: "Hindustan Zinc", sector: "PUBLIC" },
  { sno: 15, name: "Steel Authority of India Ltd (SAIL)", sector: "PUBLIC" },
  { sno: 16, name: "Jindal Steel & Power Ltd (JSPL)", sector: "PRIVATE" },
  { sno: 17, name: "ArcelorMittal Nippon Steel India (AM/NS India)", sector: "PRIVATE" },
  { sno: 18, name: "Rashtriya Ispat Nigam Ltd (RINL / Vizag Steel)", sector: "PUBLIC" },
  { sno: 19, name: "Electrosteel Steels Ltd", sector: "PRIVATE" },
  { sno: 20, name: "Lloyds Metals & Energy Ltd", sector: "PRIVATE" },
  { sno: 21, name: "Shyam Metalics & Energy Ltd", sector: "PRIVATE" },
  { sno: 22, name: "Numaligarh Refinery Limited (NRL)", sector: "PUBLIC" },
  { sno: 23, name: "Rungta Mines Ltd.", sector: "PRIVATE" },
  { sno: 24, name: "Gallant Ispat Ltd.", sector: "PRIVATE" },
  { sno: 25, name: "Prakash Industries Ltd.", sector: "PRIVATE" },
  { sno: 26, name: "Seksarai Biswa Sugar Factory", sector: "PRIVATE" },
  { sno: 27, name: "Gujarat Fluorochemicals Ltd (GFL)", sector: "PRIVATE" },
  { sno: 28, name: "Aarti Industries Ltd", sector: "PRIVATE" },
  { sno: 29, name: "SRF Ltd", sector: "PRIVATE" },
  { sno: 30, name: "Talcher Fertilizers Limited (TFL)", sector: "PUBLIC" },
  { sno: 31, name: "Thermax", sector: "PRIVATE" },
  { sno: 32, name: "Oil India Limited (OIL)", sector: "PUBLIC" },
  { sno: 33, name: "Hindustan Petroleum Corporation Limited (HPCL)", sector: "PUBLIC" },
  { sno: 34, name: "Isgec Heavy Engineering Ltd.", sector: "PRIVATE" },
  { sno: 35, name: "ITC Group", sector: "PRIVATE" },
  { sno: 36, name: "JK Group", sector: "PRIVATE" },
  { sno: 37, name: "Tata Projects Ltd.", sector: "PRIVATE" },
  { sno: 38, name: "Shriram Industrial Enterprises Limited (SIEL)", sector: "PRIVATE" },
  { sno: 39, name: "Birla Sugar", sector: "PRIVATE" },
  { sno: 40, name: "Modi Sugar", sector: "PRIVATE" },
  { sno: 41, name: "Bannari Amman Group", sector: "PRIVATE" },
  { sno: 42, name: "Voltas Ltd.", sector: "PRIVATE" },
  { sno: 43, name: "National Fertilizers Limited (NFL)", sector: "PUBLIC" },
  { sno: 44, name: "TAJ PALACE HOTEL", sector: "PRIVATE" },
  { sno: 45, name: "Hotel Clark", sector: "PRIVATE" },
  { sno: 46, name: "Aurobindo Group", sector: "PRIVATE" },
  { sno: 47, name: "Sudhir Genset", sector: "PRIVATE" },
  { sno: 48, name: "Jakson Genset", sector: "PRIVATE" },
  { sno: 49, name: "Tamil Nadu Newsprint & Paper Limited (TNPL)", sector: "PUBLIC" },
  { sno: 50, name: "Ballarpur Industries Limited (BILT)", sector: "PRIVATE" },
  { sno: 51, name: "Polycon Industries", sector: "PRIVATE" },
  { sno: 52, name: "Century Pulp and Paper", sector: "PRIVATE" },
  { sno: 53, name: "Trident Group", sector: "PRIVATE" },
  { sno: 54, name: "Century laminates", sector: "PRIVATE" },
  { sno: 55, name: "KRBL Limited", sector: "PRIVATE" },
  { sno: 56, name: "Rathi Steel & Power", sector: "PRIVATE" },
  { sno: 57, name: "Bharat Heavy Electricals Limited (BHEL)", sector: "PUBLIC" },
  { sno: 58, name: "Deepak Spinners Ltd.", sector: "PRIVATE" },
  { sno: 59, name: "Vardhman Textiles Limited", sector: "PRIVATE" },
  { sno: 60, name: "NBCC (India) Limited", sector: "PUBLIC" },
  { sno: 61, name: "Emami Paper Mills Limited", sector: "PRIVATE" },
  { sno: 62, name: "JAIN DISTILLERY PRIVATE LIMITED", sector: "PRIVATE" },
  { sno: 63, name: "Triveni Turbines Ltd.", sector: "PRIVATE" },
  { sno: 64, name: "Greenesol Power System Pvt. Ltd.", sector: "PRIVATE" },
  { sno: 65, name: "West Coast Paper Mills Ltd", sector: "PRIVATE" }
];

