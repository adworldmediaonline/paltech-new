"use client";

import { memo, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Globe } from "lucide-react";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const exportCountries = [
  "Sudan", "United Arab Emirates", "Nepal", "Sri Lanka", "Bangladesh", "Thailand",
  "Malaysia", "Bhutan", "Daman", "Yemen", "Morocco", "Nigeria", "Czech Republic",
  "Azerbaijan", "Bahrain", "Burkina Faso", "Egypt", "Ethiopia", "Ghana", "Guinea",
  "Indonesia", "Iran", "Iraq", "Ivory Coast", "Kenya", "Panama", "Myanmar", "Oman",
  "Pakistan", "Philippines", "Saudi Arabia", "Senegal", "South Africa", "Syria",
  "Tanzania", "Turkey", "Uganda", "Vietnam", "Zambia", "Zimbabwe", "Marshall Islands", "Ukraine"
];

const countryNameMap: { [key: string]: string } = {
  "United Arab Emirates": "United Arab Emirates",
  "Sri Lanka": "Sri Lanka",
  "Czech Republic": "Czechia",
  "Ivory Coast": "Côte d'Ivoire",
  "Marshall Islands": "Marshall Is.",
  "Myanmar": "Myanmar",
  "Daman": "India"
};

const getCountryName = (country: string): string => {
  return countryNameMap[country] || country;
};

const MapChart = memo(({ setTooltipContent, setTooltipPosition }: {
  setTooltipContent: (content: string) => void;
  setTooltipPosition: (pos: { x: number; y: number } | null) => void;
}) => {
  const isExportCountry = (geoName: string): boolean => {
    return exportCountries.some(country => {
      const mappedName = getCountryName(country);
      return geoName === mappedName || geoName.includes(mappedName) || mappedName.includes(geoName);
    });
  };

  return (
    <ComposableMap
      data-tip=""
      projectionConfig={{
        scale: 160,
        center: [15, 10]
      }}
      width={800}
      height={400}
      className="w-full"
      style={{ width: "100%", height: "auto" }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }: any) =>
          geographies.map((geo: any) => {
            const isExport = isExportCountry(geo.properties.name);
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={(evt: any) => {
                  if (isExport) {
                    const { clientX, clientY } = evt;
                    setTooltipContent(geo.properties.name);
                    setTooltipPosition({ x: clientX, y: clientY });
                  }
                }}
                onMouseMove={(evt: any) => {
                  if (isExport) {
                    const { clientX, clientY } = evt;
                    setTooltipPosition({ x: clientX, y: clientY });
                  }
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                  setTooltipPosition(null);
                }}
                style={{
                  default: {
                    fill: isExport ? "#3b82f6" : "#f3f4f6",
                    stroke: "#ffffff",
                    strokeWidth: 0.5,
                    outline: "none"
                  },
                  hover: {
                    fill: isExport ? "#2563eb" : "#f3f4f6",
                    stroke: "#ffffff",
                    strokeWidth: 0.5,
                    outline: "none",
                    cursor: isExport ? "pointer" : "default"
                  },
                  pressed: {
                    fill: isExport ? "#1e40af" : "#f3f4f6",
                    stroke: "#ffffff",
                    strokeWidth: 0.5,
                    outline: "none"
                  }
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
});

MapChart.displayName = "MapChart";

export function ExportMap() {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });
  const [content, setContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number } | null>(null);

  return (
    <section ref={ref} className="relative py-16 md:py-20 bg-linear-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header - Minimal Spacing */}
        <div
          className={`text-center mb-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="inline-flex items-center gap-2 mb-2 px-5 py-2 bg-primary/10 rounded-full">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">
              Global Reach
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Exporting to 40+ Countries
          </h2>
        </div>

        {/* Map - Tight Container with Fixed Aspect */}
        <div
          className={`relative transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Tooltip - Positioned at cursor */}
          {content && tooltipPosition && (
            <div
              className="fixed z-50 pointer-events-none"
              style={{
                left: `${tooltipPosition.x}px`,
                top: `${tooltipPosition.y - 50}px`,
                transform: 'translateX(-50%)'
              }}
            >
              <div className="bg-linear-to-r from-primary to-primary/90 text-white px-4 py-2 rounded-lg shadow-2xl text-sm font-bold whitespace-nowrap">
                {content}
              </div>
            </div>
          )}

          <MapChart setTooltipContent={setContent} setTooltipPosition={setTooltipPosition} />
        </div>
      </div>
    </section>
  );
}
