import { Building2, Users, Award, Globe, Handshake, CheckCircle } from "lucide-react";

const consultantsData = [
  "Kvaerner Powergas Pvt. Ltd.",
  "Avant - Garde Engineers & Consultants Pvt. Ltd.",
  "Engineers India Limited",
  "Fichtner Consulting Engineers (India) Pvt. Ltd.",
  "Jacobs Engineering Group Inc.",
  "LURGI",
  "Mecon Limited",
  "M N Dastur & Co.",
  "Mott Macdonald",
  "PDIL",
  "Tata Projects Limited",
  "Technip KT India Ltd.",
  "Toyo Engineering India Limited",
  "STUP Consultants Pvt. Ltd.",
  "Uhde (A Company of Thyssenkrupp Technologies)"
];

export function ProjectConsultantsContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Project Consultants
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Paltech™ has collaborated with leading national and international engineering consultants, demonstrating our capability to deliver world-class cooling tower solutions for complex industrial projects.
        </p>
      </div>

      {/* Key Highlights */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Handshake className="w-7 h-7" />,
            value: "15+",
            label: "Leading Consultants",
            color: "from-blue-500 to-blue-600"
          },
          {
            icon: <Globe className="w-7 h-7" />,
            value: "Global",
            label: "Partnership Network",
            color: "from-green-500 to-green-600"
          },
          {
            icon: <Award className="w-7 h-7" />,
            value: "Trusted",
            label: "Engineering Partner",
            color: "from-purple-500 to-purple-600"
          },
          {
            icon: <Building2 className="w-7 h-7" />,
            value: "Premium",
            label: "Project Quality",
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
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-red-700">
          Project consultants (with whom Paltech™ has worked / working with)
        </h2>
      </div>

      {/* Consultants List - Desktop Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {consultantsData.map((consultant, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-5 bg-white rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="w-2 h-2 bg-primary rounded-full shrink-0 mt-2 group-hover:scale-150 transition-transform"></div>
            <p className="text-gray-900 font-medium leading-relaxed">{consultant}</p>
          </div>
        ))}
      </div>

      {/* And Many More */}
      <div className="text-center">
        <p className="text-xl font-semibold text-gray-600 italic">and many more...</p>
      </div>

      {/* Why Consultants Trust Us */}
      <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
          Why Leading Consultants Choose Paltech™
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Award className="w-6 h-6" />,
              title: "Proven Expertise",
              description: "37+ years of engineering excellence in cooling tower design and manufacturing"
            },
            {
              icon: <CheckCircle className="w-6 h-6" />,
              title: "Quality Assurance",
              description: "ISO 9001, ISO 14001, and ISO 45001 certified manufacturing processes"
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Technical Collaboration",
              description: "Seamless coordination with engineering teams for complex projects"
            },
            {
              icon: <Globe className="w-6 h-6" />,
              title: "Global Standards",
              description: "Compliance with international design and safety standards"
            },
            {
              icon: <Building2 className="w-6 h-6" />,
              title: "Timely Delivery",
              description: "Consistent track record of on-time project completion"
            },
            {
              icon: <Handshake className="w-6 h-6" />,
              title: "Trusted Partner",
              description: "Long-term relationships built on reliability and performance"
            }
          ].map((reason, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                {reason.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Benefits */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
          Our Collaborative Approach
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Custom engineering solutions tailored to project specifications",
            "Comprehensive technical support from design to commissioning",
            "Adherence to consultant specifications and project timelines",
            "Advanced manufacturing capabilities for complex requirements",
            "Quality documentation and certification support",
            "Post-installation service and maintenance support",
            "Value engineering to optimize project costs",
            "Multi-disciplinary coordination for seamless execution"
          ].map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 sm:p-12 text-center text-white">
        <Handshake className="w-16 h-16 mx-auto mb-6" />
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Partner With Paltech™ for Your Next Project
        </h2>
        <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
          Join the prestigious list of engineering consultants who trust Paltech™ for delivering exceptional cooling tower solutions. Let's collaborate to achieve excellence together.
        </p>
        <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors shadow-lg">
          Discuss Your Project Requirements
        </button>
      </div>
    </div>
  );
}

