"use client";

import { memo, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { Globe } from "lucide-react";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Region-based country grouping with colors
const regionColors = {
  americas: { fill: "#10b981", hover: "#059669", label: "#10b981" }, // Green
  europe: { fill: "#8b5cf6", hover: "#7c3aed", label: "#8b5cf6" }, // Purple
  middleEast: { fill: "#f59e0b", hover: "#d97706", label: "#f59e0b" }, // Amber
  africa: { fill: "#ef4444", hover: "#dc2626", label: "#ef4444" }, // Red
  asiaPacific: { fill: "#3b82f6", hover: "#2563eb", label: "#3b82f6" } // Blue
};

const countryRegions: { [key: string]: keyof typeof regionColors } = {
  // Americas
  "Mexico": "americas",
  "Guatemala": "americas",
  "Colombia": "americas",
  "Panama": "americas",

  // Europe
  "Czech Republic": "europe",
  "Czechia": "europe",
  "Ukraine": "europe",

  // Middle East
  "Turkey": "middleEast",
  "Syria": "middleEast",
  "Iraq": "middleEast",
  "Iran": "middleEast",
  "Kuwait": "middleEast",
  "Bahrain": "middleEast",
  "Saudi Arabia": "middleEast",
  "United Arab Emirates": "middleEast",
  "UAE": "middleEast",
  "Oman": "middleEast",
  "Yemen": "middleEast",
  "Azerbaijan": "middleEast",

  // Africa
  "Egypt": "africa",
  "Sudan": "africa",
  "Morocco": "africa",
  "Burkina Faso": "africa",
  "Guinea": "africa",
  "Ivory Coast": "africa",
  "Côte d'Ivoire": "africa",
  "Ghana": "africa",
  "Nigeria": "africa",
  "Ethiopia": "africa",
  "Kenya": "africa",
  "Uganda": "africa",
  "Tanzania": "africa",
  "Zambia": "africa",
  "Zimbabwe": "africa",
  "Madagascar": "africa",
  "South Africa": "africa",
  "Senegal": "africa",

  // Asia Pacific
  "Pakistan": "asiaPacific",
  "Nepal": "asiaPacific",
  "Bhutan": "asiaPacific",
  "Bangladesh": "asiaPacific",
  "Myanmar": "asiaPacific",
  "Thailand": "asiaPacific",
  "Vietnam": "asiaPacific",
  "Sri Lanka": "asiaPacific",
  "Malaysia": "asiaPacific",
  "Indonesia": "asiaPacific",
  "Philippines": "asiaPacific",
  "Daman": "asiaPacific",
  "India": "asiaPacific",
  "Marshall Islands": "asiaPacific",
  "Marshall Is.": "asiaPacific"
};

const exportCountries = [
  "Mexico", "Guatemala", "Colombia", "Sudan", "United Arab Emirates", "Nepal",
  "Sri Lanka", "Bangladesh", "Thailand", "Malaysia", "Bhutan", "Daman", "Yemen",
  "Morocco", "Nigeria", "Czech Republic", "Azerbaijan", "Bahrain", "Burkina Faso",
  "Egypt", "Ethiopia", "Ghana", "Guinea", "Indonesia", "Iran", "Iraq", "Ivory Coast",
  "Kenya", "Panama", "Myanmar", "Oman", "Pakistan", "Philippines", "Saudi Arabia",
  "Senegal", "South Africa", "Syria", "Tanzania", "Turkey", "Uganda", "Vietnam",
  "Zambia", "Zimbabwe", "Marshall Islands", "Ukraine", "Madagascar"
];

// Country label coordinates (approximate center of each country) with region info
const countryLabels = [
  { name: "Mexico", coordinates: [-102, 23], region: "americas" },
  { name: "Guatemala", coordinates: [-90, 15], region: "americas" },
  { name: "Colombia", coordinates: [-72, 4], region: "americas" },
  { name: "Czech Republic", coordinates: [15, 50], region: "europe" },
  { name: "Ukraine", coordinates: [32, 49], region: "europe" },
  { name: "Turkey", coordinates: [35, 39], region: "middleEast" },
  { name: "Syria", coordinates: [38, 35], region: "middleEast" },
  { name: "Iraq", coordinates: [43, 33], region: "middleEast" },
  { name: "Iran", coordinates: [53, 32], region: "middleEast" },
  { name: "Kuwait", coordinates: [47.5, 29.5], region: "middleEast" },
  { name: "Bahrain", coordinates: [50.5, 26], region: "middleEast" },
  { name: "Saudi Arabia", coordinates: [45, 24], region: "middleEast" },
  { name: "UAE", coordinates: [54, 24], region: "middleEast" },
  { name: "Oman", coordinates: [56, 21], region: "middleEast" },
  { name: "Yemen", coordinates: [48, 15], region: "middleEast" },
  { name: "Egypt", coordinates: [30, 26], region: "africa" },
  { name: "Sudan", coordinates: [30, 15], region: "africa" },
  { name: "Morocco", coordinates: [-7, 32], region: "africa" },
  { name: "Burkina Faso", coordinates: [-2, 13], region: "africa" },
  { name: "Guinea", coordinates: [-10, 10], region: "africa" },
  { name: "Ivory Coast", coordinates: [-5, 8], region: "africa" },
  { name: "Ghana", coordinates: [-2, 8], region: "africa" },
  { name: "Nigeria", coordinates: [8, 9], region: "africa" },
  { name: "Ethiopia", coordinates: [40, 8], region: "africa" },
  { name: "Kenya", coordinates: [38, 1], region: "africa" },
  { name: "Uganda", coordinates: [32, 1], region: "africa" },
  { name: "Tanzania", coordinates: [35, -6], region: "africa" },
  { name: "Zambia", coordinates: [27, -13], region: "africa" },
  { name: "Zimbabwe", coordinates: [30, -19], region: "africa" },
  { name: "Madagascar", coordinates: [47, -19], region: "africa" },
  { name: "South Africa", coordinates: [25, -29], region: "africa" },
  { name: "Senegal", coordinates: [-14, 14], region: "africa" },
  { name: "Azerbaijan", coordinates: [47, 40], region: "middleEast" },
  { name: "Pakistan", coordinates: [69, 30], region: "asiaPacific" },
  { name: "Nepal", coordinates: [84, 28], region: "asiaPacific" },
  { name: "Bhutan", coordinates: [90, 27], region: "asiaPacific" },
  { name: "Bangladesh", coordinates: [90, 24], region: "asiaPacific" },
  { name: "Myanmar", coordinates: [96, 21], region: "asiaPacific" },
  { name: "Thailand", coordinates: [101, 15], region: "asiaPacific" },
  { name: "Vietnam", coordinates: [106, 16], region: "asiaPacific" },
  { name: "Sri Lanka", coordinates: [81, 7], region: "asiaPacific" },
  { name: "Malaysia", coordinates: [102, 4], region: "asiaPacific" },
  { name: "Indonesia", coordinates: [118, -2], region: "asiaPacific" },
  { name: "Philippines", coordinates: [122, 12], region: "asiaPacific" },
  { name: "Panama", coordinates: [-80, 9], region: "americas" },
] as const;

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

  const getCountryRegion = (geoName: string): keyof typeof regionColors | null => {
    return countryRegions[geoName] || null;
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
            const region = getCountryRegion(geo.properties.name);
            const colors = region ? regionColors[region] : null;

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
                    fill: isExport && colors ? colors.fill : "#f3f4f6",
                    stroke: "#ffffff",
                    strokeWidth: 0.5,
                    outline: "none"
                  },
                  hover: {
                    fill: isExport && colors ? colors.hover : "#f3f4f6",
                    stroke: "#ffffff",
                    strokeWidth: 0.5,
                    outline: "none",
                    cursor: isExport ? "pointer" : "default"
                  },
                  pressed: {
                    fill: isExport && colors ? colors.hover : "#f3f4f6",
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
      {countryLabels.map(({ name, coordinates, region }) => {
        const labelColor = regionColors[region].label;
        return (
          <Marker key={name} coordinates={coordinates as [number, number]}>
            <text
              textAnchor="middle"
              y={0}
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "7px",
                fontWeight: "bold",
                fill: "#ffffff",
                stroke: labelColor,
                strokeWidth: "1px",
                paintOrder: "stroke",
                pointerEvents: "none",
                userSelect: "none"
              }}
            >
              {name}
            </text>
          </Marker>
        );
      })}
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
