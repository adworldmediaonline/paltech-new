"use client";

import { memo, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { Globe } from "lucide-react";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const exportCountries = [
  "Mexico", "Guatemala", "Colombia", "Sudan", "United Arab Emirates", "Nepal",
  "Sri Lanka", "Bangladesh", "Thailand", "Malaysia", "Bhutan", "Daman", "Yemen",
  "Morocco", "Nigeria", "Czech Republic", "Azerbaijan", "Bahrain", "Burkina Faso",
  "Egypt", "Ethiopia", "Ghana", "Guinea", "Indonesia", "Iran", "Iraq", "Ivory Coast",
  "Kenya", "Panama", "Myanmar", "Oman", "Pakistan", "Philippines", "Saudi Arabia",
  "Senegal", "South Africa", "Syria", "Tanzania", "Turkey", "Uganda", "Vietnam",
  "Zambia", "Zimbabwe", "Marshall Islands", "Ukraine", "Madagascar"
];

// Country label coordinates (approximate center of each country)
const countryLabels = [
  { name: "Mexico", coordinates: [-102, 23] },
  { name: "Guatemala", coordinates: [-90, 15] },
  { name: "Colombia", coordinates: [-72, 4] },
  { name: "Czech Republic", coordinates: [15, 50] },
  { name: "Ukraine", coordinates: [32, 49] },
  { name: "Turkey", coordinates: [35, 39] },
  { name: "Syria", coordinates: [38, 35] },
  { name: "Iraq", coordinates: [43, 33] },
  { name: "Iran", coordinates: [53, 32] },
  { name: "Kuwait", coordinates: [47.5, 29.5] },
  { name: "Bahrain", coordinates: [50.5, 26] },
  { name: "Saudi Arabia", coordinates: [45, 24] },
  { name: "UAE", coordinates: [54, 24] },
  { name: "Oman", coordinates: [56, 21] },
  { name: "Yemen", coordinates: [48, 15] },
  { name: "Egypt", coordinates: [30, 26] },
  { name: "Sudan", coordinates: [30, 15] },
  { name: "Morocco", coordinates: [-7, 32] },
  { name: "Burkina Faso", coordinates: [-2, 13] },
  { name: "Guinea", coordinates: [-10, 10] },
  { name: "Ivory Coast", coordinates: [-5, 8] },
  { name: "Ghana", coordinates: [-2, 8] },
  { name: "Nigeria", coordinates: [8, 9] },
  { name: "Ethiopia", coordinates: [40, 8] },
  { name: "Kenya", coordinates: [38, 1] },
  { name: "Uganda", coordinates: [32, 1] },
  { name: "Tanzania", coordinates: [35, -6] },
  { name: "Zambia", coordinates: [27, -13] },
  { name: "Zimbabwe", coordinates: [30, -19] },
  { name: "Madagascar", coordinates: [47, -19] },
  { name: "South Africa", coordinates: [25, -29] },
  { name: "Senegal", coordinates: [-14, 14] },
  { name: "Azerbaijan", coordinates: [47, 40] },
  { name: "Pakistan", coordinates: [69, 30] },
  { name: "Nepal", coordinates: [84, 28] },
  { name: "Bhutan", coordinates: [90, 27] },
  { name: "Bangladesh", coordinates: [90, 24] },
  { name: "Myanmar", coordinates: [96, 21] },
  { name: "Thailand", coordinates: [101, 15] },
  { name: "Vietnam", coordinates: [106, 16] },
  { name: "Sri Lanka", coordinates: [81, 7] },
  { name: "Malaysia", coordinates: [102, 4] },
  { name: "Indonesia", coordinates: [118, -2] },
  { name: "Philippines", coordinates: [122, 12] },
  { name: "Panama", coordinates: [-80, 9] },
];

const countryNameMap: { [key: string]: string } = {
  "United Arab Emirates": "United Arab Emirates",
  "Sri Lanka": "Sri Lanka",
  "Czech Republic": "Czechia",
  "Ivory Coast": "Côte d'Ivoire",
  "Marshall Islands": "Marshall Is.",
  "Myanmar": "Myanmar",
  "Daman": "India",
  "Mexico": "Mexico",
  "Guatemala": "Guatemala",
  "Colombia": "Colombia",
  "Madagascar": "Madagascar"
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

      {/* Country Labels */}
      {countryLabels.map(({ name, coordinates }) => (
        <Marker key={name} coordinates={coordinates as [number, number]}>
          <text
            textAnchor="middle"
            y={0}
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "7px",
              fontWeight: "bold",
              fill: "#ffffff",
              stroke: "#1e293b",
              strokeWidth: "0.5px",
              paintOrder: "stroke",
              pointerEvents: "none",
              userSelect: "none"
            }}
          >
            {name}
          </text>
        </Marker>
      ))}
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
            Exporting to 46+ Countries
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
