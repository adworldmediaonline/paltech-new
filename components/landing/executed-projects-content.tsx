import { Building2, MapPin, Gauge, Award } from "lucide-react";

const projectsData = [
  {
    sno: 1,
    name: "KANTI BIJLEE UTPADAN NIGAM LIMITED",
    address: "A JOINT VENTURE OF NTPC LTD. AND BIHAR STATE ELECTRICITY BOARD (BSEB), P.O. KANTI THERMAL, DIST. MUZAFFARPUR - 843 130, BIHAR",
    capacity: "56,000"
  },
  {
    sno: 2,
    name: "PRAKASH INDUSTRIES LTD.",
    address: "CHAMPA - 495671, CHHATTISGARH. TEL.: 07819-245103",
    capacity: "34,000 & 27,000"
  },
  {
    sno: 3,
    name: "SABAH FOREST INDUSTRIES SDN BHD",
    address: "KOMPLEKS SFI, NO.10, JALAN JETI, WDT31, 89859 SIPITAND, SABAH, MALAYSIA",
    capacity: "7,500"
  },
  {
    sno: 4,
    name: "WALCHANDNAGAR INDUSTRIES LTD.",
    address: "WALCHAND HOUSE, 15/1/B-2, G. A. KULKARNI PATH, KOTHRUD, PUNE - 411 038, MAHARASHTRA. PROJECT: SHREE TATYASAHEB KORE WARANA SSK LIMITED, WARANA NAGAR, KOLHAPUR, MAHARASHTRA",
    capacity: "9,000"
  },
  {
    sno: 5,
    name: "MITTAL STEEL",
    address: "SOUTH AFRICA",
    capacity: "13,000"
  },
  {
    sno: 6,
    name: "M/S RATNAPRABHA SUGARS PROJECT",
    address: "NANDUR, MAHARASHTRA",
    capacity: "6,000"
  },
  {
    sno: 7,
    name: "PRAKASH INDUSTRIES LTD",
    address: "CHAMPA - 495671, CHHATTISGARH. TEL: 07819-245103",
    capacity: "8,000"
  },
  {
    sno: 8,
    name: "SHREE GANESH METALIKS LIMITED",
    address: "CHARDIHARIHARPUR, KUARMUNDA, SUNDARGARH, ORISSA",
    capacity: "10,000"
  },
  {
    sno: 9,
    name: "CORE GREEN SUGAR & FUELS PVT. LTD.",
    address: "TUMKUR VILLAGE, TQ. SHAHPUR, DIST. GULBARGA, KARNATAKA",
    capacity: "5,700"
  },
  {
    sno: 10,
    name: "RUNGTA MINES LIMITED (KAMANDO)",
    address: "KAMANDO, P.O. KOIRA, P.S. KOIRA, DIST. SUNDERGARH, ORISSA - 770 048",
    capacity: "9,800"
  },
  {
    sno: 11,
    name: "RUNGTA MINES LIMITED (CHALIYAMA)",
    address: "CHALIYAMA, DIST. SERAIKELLA-KHARSWAN, P.O.: KESARGADIA, P.S.: RAJNAGAR, JHARKAND",
    capacity: "9,800"
  },
  {
    sno: 12,
    name: "SHREE SOMESHWAR SAHAKARI SAKHAR KARKHANA LIMITED",
    address: "SOMESHWARNAGAR – 412 306, TALUKA BARAMATI, PUNE DISTRICT, MAHARASHTRA. PH: 02112-282150, 282476, 282477",
    capacity: "5,100"
  },
  {
    sno: 13,
    name: "GOPANI IRON & POWER (INDIA) PVT. LTD.",
    address: "A-22, M.I.D.C., GROWTH CENTRE, POST-TADALI -442 406, DIST. – CHANDRAPUR, MAHARASHTRA. TEL: 07172-237706/8/9/882/883, FAX: 07172-237707",
    capacity: "4,200"
  },
  {
    sno: 14,
    name: "VISION SPONGE IRON PVT. LTD.",
    address: "RAKTA, P.O. MADHUKUNDA, P.S. SANTURI, DIST. PURULIA, W.B. PH: 03251-272181",
    capacity: "6,180"
  },
  {
    sno: 15,
    name: "RAIPUR POWER AND STEEL LIMITED",
    address: "PLOT NO. 75-76, INDUSTRIAL GROWTH CENTRE BORAI, RASMADA, DIST. DURG (C.G.) PH: 0788-2617227/212003",
    capacity: "4,500"
  },
  {
    sno: 16,
    name: "AMRIT CEMENT INDUSTRIES LTD.",
    address: "TRINITY HOUSE, 226/1, AJC BOSE ROAD, 6TH FLOOR, KOLKATA – 700 020. PH: 033-40033441",
    capacity: "3,700"
  },
  {
    sno: 17,
    name: "GULF FLUOR – FLUORINE COMPLEX PROJECT",
    address: "ABU DHABI ICAD II DEVELOPMENT, ABU DHABI, UAE",
    capacity: "5,420"
  },
  {
    sno: 18,
    name: "APOLLO INTERNATIONAL LIMITED",
    address: "SYRIA. THROUGH: APOLLO INTERNATIONAL LIMITED, APOLLO HOUSE, 7 INSTITUTIONAL AREA, SECTOR 32, GURGAON – 122 001, HARYANA. PHONE: 0124-4197387",
    capacity: "4,591"
  },
  {
    sno: 19,
    name: "ITC LIMITED",
    address: "SARAPAKA – 507 128, KHAMMAM DIST., (A.P.) TEL: 08746-242331-40",
    capacity: "3,500"
  },
  {
    sno: 20,
    name: "White Nile Sugar Process House Project",
    address: "SUDAN. THROUGH: ISGEC JOHN THOMPSON, A-4, SECTOR-24, NOIDA, U.P. – 201301",
    capacity: "24,000"
  },
  {
    sno: 21,
    name: "GULF FLUOR – FLUORINE COMPLEX PROJECT",
    address: "ABU DHABI ICAD II DEVELOPMENT, ABU DHABI, UAE. THROUGH: SIMON CARVES INDIA LIMITED, PLOT NO. 39, ANANTH INFOPARK, PHASE II, HITECH CITY, MADHAPUR, HYDERABAD - 500081, A.P.",
    capacity: "5,420"
  },
  {
    sno: 22,
    name: "SEKSARIA",
    address: "U.P",
    capacity: "6,500"
  },
  {
    sno: 23,
    name: "JSPL",
    address: "ANGUL, ODISHA",
    capacity: "5,600"
  },
  {
    sno: 24,
    name: "NAINI PAPERS LTD.",
    address: "",
    capacity: "2,500"
  }
];

export function ExecutedProjectsContent() {
  // Sort projects by capacity in ascending order (low to high)
  const sortedProjects = [...projectsData].sort((a, b) => {
    // Get max capacity for each project
    const getMaxCapacity = (capacityStr: string) => {
      // Split by ", " to handle multiple capacities, then remove thousand separators
      const capacities = capacityStr.split(' & ').map(c => parseFloat(c.replace(/,/g, '')));
      return Math.max(...capacities);
    };
    return getMaxCapacity(b.capacity) - getMaxCapacity(a.capacity);
  });

  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Executed Projects
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Showcasing our excellence in cooling tower installations across diverse industries and geographies. Each project represents our commitment to quality, innovation, and customer satisfaction.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {[
          {
            icon: <Gauge className="w-7 h-7" />,
            value: "56,000(M³/hr)",
            label: "(NTPC - Muzaffarpur, Bihar)",
            color: "from-green-500 to-green-600"
          },
          {
            icon: <Award className="w-7 h-7" />,
            value: "100%",
            label: "Client Satisfaction",
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

      {/* Projects Table Title */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Few of our Executed Projects (Cooling Towers)
        </h2>
        <p className="text-gray-600">
          A comprehensive list of major cooling tower installations across various industries
        </p>
      </div>

      {/* Projects Table - Desktop */}
      <div className="hidden lg:block bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold w-20">S.No</th>
                <th className="px-6 py-4 text-left font-semibold">Name & Address</th>
                <th className="px-6 py-4 text-right font-semibold w-48">Capacity (M³/hour)</th>
              </tr>
            </thead>
            <tbody>
              {sortedProjects.map((project, index) => (
                <tr
                  key={project.sno}
                  className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-primary/5 transition-colors`}
                >
                  <td className="px-6 py-4 text-gray-900 font-medium border-t border-gray-200">
                    {index + 1}.
                  </td>
                  <td className="px-6 py-4 border-t border-gray-200">
                    <div className="font-semibold text-gray-900 mb-1">{project.name}</div>
                    {project.address && (
                      <div className="text-sm text-gray-600 leading-relaxed">{project.address}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right text-gray-900 font-semibold border-t border-gray-200">
                    {project.capacity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Projects Cards - Mobile/Tablet */}
      <div className="lg:hidden space-y-4">
        {sortedProjects.map((project, index) => (
          <div
            key={project.sno}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold shrink-0">
                {index + 1}
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-bold text-gray-900 text-sm mb-2">{project.name}</h3>
                {project.address && (
                  <div className="flex items-start gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-600 leading-relaxed">{project.address}</p>
                  </div>
                )}
                <div className="flex items-center gap-2 bg-primary/5 rounded-lg px-3 py-2 w-fit">
                  <Gauge className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-gray-900">{project.capacity} M³/hr</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Industry Sectors */}
      <div className="bg-linear-to-br from-primary/5 to-transparent rounded-2xl p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Industries We Serve</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Power Generation",
            "Steel & Mining",
            "Sugar & Food Processing",
            "Cement & Construction",
            "Chemical & Petrochemical",
            "Paper & Pulp",
            "Iron & Steel",
            "International Projects"
          ].map((industry, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-gray-200"
            >
              <div className="w-2 h-2 bg-primary rounded-full shrink-0"></div>
              <span className="text-sm font-medium text-gray-700">{industry}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-linear-to-br from-primary to-primary/90 rounded-2xl p-8 sm:p-12 text-center text-white">
        <Building2 className="w-16 h-16 mx-auto mb-6" />
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Partner With Us for Your Next Project
        </h2>
        <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
          Join our growing list of satisfied clients across India and international markets. Experience world-class cooling tower solutions backed by decades of expertise.
        </p>
        <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors shadow-lg">
          Contact Us for Your Project
        </button>
      </div>
    </div>
  );
}

