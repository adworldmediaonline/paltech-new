import { Building2, Award, Globe, Handshake, Users, CheckCircle, Shield } from "lucide-react";

const affiliationsData = [
  {
    name: "Cooling Technology Institute (CTI) USA",
    description: "Associate member of the world's leading authority on cooling tower technology and best practices",
    icon: <Globe className="w-6 h-6" />
  },
  {
    name: "Confederation Of Indian Industry (CII)",
    description: "Premier business association working to create and sustain an environment conducive to the development of India",
    icon: <Building2 className="w-6 h-6" />
  },
  {
    name: "FICCI",
    description: "Federation of Indian Chambers of Commerce & Industry - India's oldest and largest apex business organization",
    icon: <Handshake className="w-6 h-6" />
  },
  {
    name: "NCR Chamber Of Commerce and Industry",
    description: "National Capital Region's premier chamber promoting business growth and industrial development",
    icon: <Building2 className="w-6 h-6" />
  },
  {
    name: "ISHARE",
    description: "Industry association promoting excellence and collaboration in industrial sectors",
    icon: <Users className="w-6 h-6" />
  }
];

export function AffiliatedBodiesContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Affiliated Bodies
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Paltech maintains active memberships and affiliations with leading industry bodies, ensuring we stay at the forefront of technological advancements, quality standards, and best practices in cooling tower engineering.
        </p>
      </div>

      {/* Key Highlights */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Award className="w-7 h-7" />,
            value: "5+",
            label: "Industry Affiliations",
            color: "from-blue-500 to-blue-600"
          },
          {
            icon: <Globe className="w-7 h-7" />,
            value: "Global",
            label: "Standards Compliance",
            color: "from-green-500 to-green-600"
          },
          {
            icon: <Shield className="w-7 h-7" />,
            value: "CTI",
            label: "Associate Member",
            color: "from-purple-500 to-purple-600"
          },
          {
            icon: <Handshake className="w-7 h-7" />,
            value: "Active",
            label: "Industry Participation",
            color: "from-orange-500 to-orange-600"
          }
        ].map((stat, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
          >
            <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center text-white mb-4`}>
              {stat.icon}
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Title Section */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Paltech has project affiliation for
        </h2>
      </div>

      {/* Affiliations List */}
      <div className="space-y-4">
        {affiliationsData.map((affiliation, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
              {affiliation.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start gap-3 mb-2">
                <div className="w-2 h-2 bg-gray-900 rounded-full shrink-0 mt-2"></div>
                <h3 className="text-lg font-bold text-gray-900 leading-tight">{affiliation.name}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed ml-5">{affiliation.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Benefits of Affiliations */}
      <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
          Benefits of Our Industry Affiliations
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Globe className="w-6 h-6" />,
              title: "Global Best Practices",
              description: "Access to international standards and industry best practices through CTI USA membership"
            },
            {
              icon: <Award className="w-6 h-6" />,
              title: "Quality Standards",
              description: "Continuous alignment with evolving quality and safety standards in cooling technology"
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Industry Networking",
              description: "Strong connections with industry leaders and peer organizations"
            },
            {
              icon: <CheckCircle className="w-6 h-6" />,
              title: "Technical Resources",
              description: "Access to research, technical papers, and industry publications"
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Credibility & Trust",
              description: "Enhanced credibility through association with prestigious industry bodies"
            },
            {
              icon: <Handshake className="w-6 h-6" />,
              title: "Business Growth",
              description: "Opportunities for collaboration and business development"
            }
          ].map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Commitment */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
          Our Commitment to Excellence
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Adherence to CTI standards and guidelines for cooling tower performance",
            "Active participation in industry seminars and technical workshops",
            "Continuous knowledge sharing and skill development programs",
            "Implementation of industry best practices in our operations",
            "Contribution to industry advancement through research and innovation",
            "Regular updates on technological developments in cooling systems",
            "Compliance with national and international quality standards",
            "Collaboration with industry peers for mutual growth"
          ].map((commitment, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-gray-700">{commitment}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 sm:p-12 text-center text-white">
        <Award className="w-16 h-16 mx-auto mb-6" />
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Industry-Leading Standards, Guaranteed
        </h2>
        <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
          Our affiliations with premier industry bodies ensure that every Paltech cooling tower meets or exceeds global standards for quality, safety, and performance.
        </p>
        <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors shadow-lg">
          Learn More About Our Standards
        </button>
      </div>
    </div>
  );
}

