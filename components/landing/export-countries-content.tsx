"use client";

import WorldMap from "react-svg-worldmap";
import type { CountryContext } from "react-svg-worldmap";
import { Globe, MapPin, Award, TrendingUp } from "lucide-react";

// Match react-svg-worldmap's d3 geoMercator (scale 150, translate [480, 250])
const projectToMap = (lon: number, lat: number): [number, number] => {
  const scale = 150;
  const tx = 480;
  const ty = 250;
  const x = tx + scale * (lon * Math.PI / 180);
  const y = ty - scale * Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360));
  return [x, y];
};

// Country name to ISO 3166-1 alpha-2 code
const countryToISO: Record<string, string> = {
  Mexico: "mx",
  Guatemala: "gt",
  Colombia: "co",
  Panama: "pa",
  Sudan: "sd",
  "United Arab Emirates": "ae",
  Nepal: "np",
  "Sri Lanka": "lk",
  Bangladesh: "bd",
  Thailand: "th",
  Malaysia: "my",
  Bhutan: "bt",
  Daman: "in", // Union Territory of India
  Yemen: "ye",
  Morocco: "ma",
  Nigeria: "ng",
  "Czech Republic": "cz",
  Azerbaijan: "az",
  Bahrain: "bh",
  "Burkina Faso": "bf",
  Egypt: "eg",
  Ethiopia: "et",
  Ghana: "gh",
  Guinea: "gn",
  Indonesia: "id",
  Iran: "ir",
  Iraq: "iq",
  "Ivory Coast": "ci",
  Kenya: "ke",
  Myanmar: "mm",
  Oman: "om",
  Pakistan: "pk",
  Philippines: "ph",
  "Saudi Arabia": "sa",
  Senegal: "sn",
  "South Africa": "za",
  Syria: "sy",
  Tanzania: "tz",
  Turkey: "tr",
  Uganda: "ug",
  Vietnam: "vn",
  Zambia: "zm",
  Zimbabwe: "zw",
  "Marshall Islands": "mh",
  Ukraine: "ua",
  Madagascar: "mg",
};

// Region-based country grouping with colors
const regionColors = {
  americas: "#10b981",
  europe: "#8b5cf6",
  middleEast: "#f59e0b",
  africa: "#ef4444",
  asiaPacific: "#3b82f6",
};

const isoToRegion: Record<string, keyof typeof regionColors> = {
  mx: "americas",
  gt: "americas",
  co: "americas",
  pa: "americas",
  cz: "europe",
  ua: "europe",
  tr: "middleEast",
  sy: "middleEast",
  iq: "middleEast",
  ir: "middleEast",
  kw: "middleEast",
  bh: "middleEast",
  sa: "middleEast",
  ae: "middleEast",
  om: "middleEast",
  ye: "middleEast",
  az: "middleEast",
  eg: "africa",
  sd: "africa",
  ma: "africa",
  bf: "africa",
  gn: "africa",
  ci: "africa",
  gh: "africa",
  ng: "africa",
  et: "africa",
  ke: "africa",
  ug: "africa",
  tz: "africa",
  zm: "africa",
  zw: "africa",
  mg: "africa",
  za: "africa",
  sn: "africa",
  pk: "asiaPacific",
  np: "asiaPacific",
  bt: "asiaPacific",
  bd: "asiaPacific",
  mm: "asiaPacific",
  th: "asiaPacific",
  vn: "asiaPacific",
  lk: "asiaPacific",
  my: "asiaPacific",
  id: "asiaPacific",
  ph: "asiaPacific",
  in: "asiaPacific",
  mh: "asiaPacific",
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

// Build map data: each export country gets value 1 for highlighting
const mapData = exportCountries
  .filter((c) => countryToISO[c])
  .map((country) => ({
    country: countryToISO[country].toLowerCase(),
    value: 1,
  }));

const getStyle = (context: CountryContext) => {
  const code = context.countryCode.toLowerCase();
  const region = isoToRegion[code];
  const isExport = typeof context.countryValue !== "undefined";

  return {
    fill: isExport && region ? regionColors[region] : "#f3f4f6",
    stroke: "#ffffff",
    strokeWidth: 0.5,
    strokeOpacity: 0.5,
    cursor: isExport ? "pointer" : "default",
  };
};

const getTooltipText = (context: CountryContext) => {
  if (typeof context.countryValue === "undefined") return "";
  return context.countryName;
};

// Country label positions [longitude, latitude] for text overlay on map
const countryLabelPositions: { name: string; coords: [number, number]; region: keyof typeof regionColors }[] = [
  { name: "Mexico", coords: [-102, 23], region: "americas" },
  { name: "Guatemala", coords: [-90, 15], region: "americas" },
  { name: "Colombia", coords: [-72, 4], region: "americas" },
  { name: "Panama", coords: [-80, 9], region: "americas" },
  { name: "Czech Rep.", coords: [15, 50], region: "europe" },
  { name: "Ukraine", coords: [32, 49], region: "europe" },
  { name: "Turkey", coords: [35, 39], region: "middleEast" },
  { name: "Syria", coords: [38, 35], region: "middleEast" },
  { name: "Iraq", coords: [43, 33], region: "middleEast" },
  { name: "Iran", coords: [53, 32], region: "middleEast" },
  { name: "Saudi Arabia", coords: [45, 24], region: "middleEast" },
  { name: "UAE", coords: [54, 24], region: "middleEast" },
  { name: "Oman", coords: [56, 21], region: "middleEast" },
  { name: "Yemen", coords: [48, 15], region: "middleEast" },
  { name: "Azerbaijan", coords: [47, 40], region: "middleEast" },
  { name: "Bahrain", coords: [50.5, 26], region: "middleEast" },
  { name: "Egypt", coords: [30, 26], region: "africa" },
  { name: "Sudan", coords: [30, 15], region: "africa" },
  { name: "Morocco", coords: [-7, 32], region: "africa" },
  { name: "Burkina Faso", coords: [-2, 13], region: "africa" },
  { name: "Guinea", coords: [-10, 10], region: "africa" },
  { name: "Ivory Coast", coords: [-5, 8], region: "africa" },
  { name: "Ghana", coords: [-2, 8], region: "africa" },
  { name: "Senegal", coords: [-14, 14], region: "africa" },
  { name: "Nigeria", coords: [8, 9], region: "africa" },
  { name: "Ethiopia", coords: [40, 8], region: "africa" },
  { name: "Kenya", coords: [38, 1], region: "africa" },
  { name: "Uganda", coords: [32, 1], region: "africa" },
  { name: "Tanzania", coords: [35, -6], region: "africa" },
  { name: "Zambia", coords: [27, -13], region: "africa" },
  { name: "Zimbabwe", coords: [30, -19], region: "africa" },
  { name: "Madagascar", coords: [47, -19], region: "africa" },
  { name: "S. Africa", coords: [25, -29], region: "africa" },
  { name: "Pakistan", coords: [69, 30], region: "asiaPacific" },
  { name: "India", coords: [77, 21], region: "asiaPacific" },
  { name: "Nepal", coords: [84, 27], region: "asiaPacific" },
  { name: "Bhutan", coords: [89, 27], region: "asiaPacific" },
  { name: "Bangladesh", coords: [90, 24], region: "asiaPacific" },
  { name: "Myanmar", coords: [96, 21], region: "asiaPacific" },
  { name: "Thailand", coords: [101, 15], region: "asiaPacific" },
  { name: "Vietnam", coords: [106, 16], region: "asiaPacific" },
  { name: "Sri Lanka", coords: [81, 7], region: "asiaPacific" },
  { name: "Malaysia", coords: [102, 4], region: "asiaPacific" },
  { name: "Indonesia", coords: [118, -2], region: "asiaPacific" },
  { name: "Philippines", coords: [122, 12], region: "asiaPacific" },
];

const createTextLabels = (mapWidth: number) => {
  const scale = mapWidth / 960;
  const fontSize = Math.max(10, Math.min(14, mapWidth / 70));
  return countryLabelPositions.map(({ name, coords, region }) => {
    const [lon, lat] = coords;
    const [projX, projY] = projectToMap(lon, lat);
    const x = projX * scale;
    const y = (projY + 240) * scale;
    return {
      label: name,
      x,
      y,
      textAnchor: "middle" as const,
      style: {
        fontFamily: "system-ui, sans-serif",
        fontSize: `${fontSize}px`,
        fontWeight: "bold",
        fill: "#ffffff",
        stroke: regionColors[region],
        strokeWidth: "1.5px",
        paintOrder: "stroke",
        pointerEvents: "none" as const,
      },
    };
  });
};

export function ExportCountriesContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Export Countries
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Paltech&apos;s cooling tower solutions have reached across continents, serving clients in over <strong>46+ countries</strong> worldwide. Our global presence demonstrates our commitment to delivering world-class cooling technology to diverse markets.
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
            value: "100+",
            label: "International Projects",
            color: "from-purple-500 to-purple-600"
          },
          {
            icon: <TrendingUp className="w-7 h-7" />,
            value: "39+",
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

      {/* Interactive World Map */}
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
          Global Presence Map
        </h2>
        <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl p-6 min-h-[400px] w-full min-w-0 max-w-full overflow-x-auto overflow-y-hidden flex justify-center">
          <div className="shrink-0">
            <WorldMap
              color="#3b82f6"
              backgroundColor="transparent"
              size={1200}
              data={mapData}
              frame={false}
              borderColor="#ffffff"
              styleFunction={getStyle}
              tooltipTextFunction={getTooltipText}
              tooltipBgColor="#009ad5"
              tooltipTextColor="#ffffff"
              textLabelFunction={createTextLabels}
            />
          </div>
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
