import Image from "next/image";
import { Shield, Award, CheckCircle, FileText, Users, Leaf } from "lucide-react";
import certificateImage from '../../public/about/certificate.jpg';

export function PoliciesCertificationContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Policies & Certification
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            At <span className="text-primary font-semibold">PALTECH</span>, we have established quality, environmental and safety policies that are consistent with our mission.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            These are in line with the specific requirements of <span className="text-primary font-semibold">ISO 9001:2015 Quality Management System</span>, <span className="text-primary font-semibold">ISO 14001:2015 Environmental Management System</span> and <span className="text-primary font-semibold">OHSAS 45001:2018 Occupational Health and Safety Management Systems Certified Company Occupational Health and Safety Management Systems</span>.
          </p>
        </div>
      </div>

      {/* Certifications Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: <Award className="w-7 h-7" />,
            title: "ISO 9001:2015",
            subtitle: "Quality Management System",
            description: "Ensuring consistent quality in design, manufacturing, and delivery of cooling towers and equipment."
          },
          {
            icon: <Leaf className="w-7 h-7" />,
            title: "ISO 14001:2015",
            subtitle: "Environmental Management System",
            description: "Committed to environmental protection and sustainable manufacturing practices."
          },
          {
            icon: <Shield className="w-7 h-7" />,
            title: "ISO 45001:2018",
            subtitle: "Occupational Health & Safety",
            description: "Prioritizing workplace safety and health management for all employees."
          }
        ].map((cert, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center text-white mb-4">
              {cert.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{cert.title}</h3>
            <p className="text-primary font-semibold text-sm mb-3">{cert.subtitle}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
          </div>
        ))}
      </div>

      {/* Certificate Display */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Certificate of Compliance</h2>
        <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden shadow-lg">
          <div className="relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-[16/10]">
            <Image
              src={certificateImage}
              alt="Paltech™ ISO Certificate of Compliance - ISO 9001:2015, ISO 14001:2015, ISO 45001:2018"
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-primary/5 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Registration No.</p>
            <p className="text-lg font-bold text-gray-900">R191/09</p>
          </div>
          <div className="p-4 bg-primary/5 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Registered Since</p>
            <p className="text-lg font-bold text-gray-900">18th Feb, 2009</p>
          </div>
          <div className="p-4 bg-primary/5 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Reassessment Date</p>
            <p className="text-lg font-bold text-gray-900">07th April, 2021</p>
          </div>
          <div className="p-4 bg-primary/5 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Accredited By</p>
            <p className="text-sm font-bold text-gray-900">JAS-ANZ</p>
          </div>
        </div>
      </div>

      {/* Scope of Certification */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Scope of Certification</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our Integrated Management System is applicable to:
        </p>
        <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-xl p-6 border border-primary/10">
          <p className="text-gray-900 font-medium leading-relaxed">
            Design And Development, Manufacturing, Supply, Erection, Commissioning And Testing Of FRP/Wooden/RCC/Pultruded FRP Cooling Towers/Chilling Plants And Their Accessories Parts Such As Fans, Gear Box, Fills, Eliminators.
          </p>
        </div>
      </div>

      {/* Our Commitment */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Our Commitment to Excellence</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              icon: <FileText className="w-6 h-6" />,
              title: "Quality Policy",
              description: "We are committed to delivering products and services that meet or exceed customer expectations through continuous improvement and innovation."
            },
            {
              icon: <Leaf className="w-6 h-6" />,
              title: "Environmental Policy",
              description: "We strive to minimize our environmental impact through sustainable practices, waste reduction, and efficient resource utilization."
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Safety Policy",
              description: "We prioritize the health and safety of our employees, contractors, and visitors through robust safety management systems."
            },
            {
              icon: <Award className="w-6 h-6" />,
              title: "Compliance",
              description: "We maintain strict adherence to international standards and regulatory requirements across all our operations."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Benefits */}
      <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-8 border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Benefits of Our Certification</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Consistent product quality and reliability",
            "Environmental sustainability practices",
            "Safe and healthy workplace environment",
            "Continuous improvement culture",
            "Enhanced customer satisfaction",
            "Compliance with international standards",
            "Reduced operational risks",
            "Improved operational efficiency",
            "Global market competitiveness"
          ].map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 text-gray-700">
              <CheckCircle className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Accreditation Info */}
      <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 sm:p-12 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Accredited by International Bodies
          </h2>
          <p className="text-lg text-white/90 leading-relaxed">
            Our certifications are issued by <strong>International Certification Services Pvt. Ltd.</strong> and accredited by the <strong>Joint Accreditation System of Australia and New Zealand (JAS-ANZ)</strong>, ensuring global recognition and compliance.
          </p>
        </div>
      </div>
    </div>
  );
}

