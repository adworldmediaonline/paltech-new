"use client";

import { memo, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { Globe, MapPin, Award, TrendingUp } from "lucide-react";

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

export function ExportCountriesContent() {
  const [content, setContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number } | null>(null);

  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Export Countries
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Paltech's cooling tower solutions have reached across continents, serving clients in over <strong>46+ countries</strong> worldwide. Our global presence demonstrates our commitment to delivering world-class cooling technology to diverse markets.
        </p>
      </div>

      {/* Key Statistics */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Globe className="w-7 h-7" />,
            value: "46+",
            label: "Export Countries",
            color: "from-blue-500 to-blue-600"
          },
          {
            icon: <MapPin className="w-7 h-7" />,
            value: "5",
            label: "Continents",
            color: "from-green-500 to-green-600"
          },
          {
            icon: <Award className="w-7 h-7" />,
            value: "1000+",
            label: "International Projects",
            color: "from-purple-500 to-purple-600"
          },
          {
            icon: <TrendingUp className="w-7 h-7" />,
            value: "37+",
            label: "Years Global Presence",
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

      {/* Interactive World Map - Same as Landing Page */}
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
          Global Presence Map
        </h2>
        <div className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xl p-6">
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

      {/* Export Countries List - Enhanced */}
      <div className="space-y-6">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 rounded-full">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">
              Our Global Footprint
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">All Export Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete list of 46 countries where Paltech™ delivers world-class cooling tower solutions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {exportCountries.sort().map((country, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-linear-to-br from-white to-blue-50/30 rounded-xl px-5 py-4 border-2 border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-linear-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform shadow-md">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">{country.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Regional Breakdown */}
      <div className="bg-linear-to-br from-primary/5 to-transparent rounded-2xl p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
          Regional Distribution
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { region: "Middle East", countries: 11, icon: "🏜️" },
            { region: "Asia Pacific", countries: 12, icon: "🌏" },
            { region: "Africa", countries: 17, icon: "🌍" },
            { region: "Europe", countries: 2, icon: "🏰" },
            { region: "Americas", countries: 4, icon: "🌎" }
          ].map((region, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-3">{region.icon}</div>
              <div className="text-2xl font-bold text-primary mb-1">{region.countries}</div>
              <div className="text-sm text-gray-600 font-medium">{region.region}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-linear-to-br from-primary to-primary/90 rounded-2xl p-8 sm:p-12 text-center text-white">
        <Globe className="w-16 h-16 mx-auto mb-6" />
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Expand Your Global Reach with Paltech™
        </h2>
        <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
          Join our worldwide network of satisfied clients. Experience world-class cooling tower solutions backed by international quality standards and local support.
        </p>
        <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors shadow-lg">
          Discuss International Projects
        </button>
      </div>
    </div>
  );
}
