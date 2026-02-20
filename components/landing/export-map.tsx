"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import WorldMap from "react-svg-worldmap";
import type { CountryContext } from "react-svg-worldmap";
import { Globe } from "lucide-react";

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
  Daman: "in",
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

export function ExportMap() {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <section ref={ref} className="relative py-16 md:py-20 bg-linear-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <div
          className={`relative transition-all duration-700 delay-200 min-h-[400px] w-full min-w-0 max-w-full overflow-x-auto overflow-y-hidden flex justify-center ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
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
    </section>
  );
}
