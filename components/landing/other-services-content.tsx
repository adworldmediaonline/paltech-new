import { CheckCircle, Shield, Wrench, Zap, Users, Globe, Award, Clock, FileText, Settings, Droplets, Factory, TrendingUp, Phone, Mail, Globe as GlobeIcon } from "lucide-react";

export function OtherServicesContent() {
  return (
    <div className="space-y-12">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Paltech™ Annual Maintenance and Other Services
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Paltech™ offers industry-leading <strong>annual maintenance and allied services</strong> for cooling towers, ensuring sustained performance, longevity, and operational reliability of your cooling infrastructure. With over <strong>39 years of experience</strong> and <strong>11,000+ installations worldwide</strong>, our expert team delivers tailored solutions across diverse cooling tower types—RCC, wooden, FRP, and more.
        </p>
      </div>

      {/* Our Maintenance & Service Portfolio */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Maintenance & Service Portfolio</h2>
          <p className="text-gray-600">We provide a full range of cooling tower services designed to maximize uptime and optimize cooling efficiency</p>
        </div>
        <div className="grid gap-4">
          {[
            {
              icon: <Settings className="w-6 h-6" />,
              title: "Designing, Fabricating & Installing",
              description: "Custom cooling towers crafted with industry-best design and materials for superior performance."
            },
            {
              icon: <TrendingUp className="w-6 h-6" />,
              title: "Redesign and Upgradation",
              description: "Modernize existing towers to enhance efficiency and extend service life using advanced FRP pultruded components."
            },
            {
              icon: <Wrench className="w-6 h-6" />,
              title: "Revamping & Renovation",
              description: "Structural repairs and retrofitting for worn or damaged towers to restore original performance."
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Emergency Repairs & Overhaul",
              description: "Rapid response for critical failures ensuring minimal downtime and swift restoration."
            },
            {
              icon: <Clock className="w-6 h-6" />,
              title: "Scheduled Maintenance & Inspections",
              description: "Periodic assessments, cleaning, lubrication, and parts replacement to prevent failures."
            },
            {
              icon: <FileText className="w-6 h-6" />,
              title: "Annual Maintenance Contracts (AMC)",
              description: "Flexible AMC plans providing proactive service and cost management."
            },
            {
              icon: <FileText className="w-6 h-6" />,
              title: "Thermal & Structural Analysis",
              description: "Detailed evaluations to optimize cooling tower thermal processes and structural integrity."
            },
            {
              icon: <Droplets className="w-6 h-6" />,
              title: "Water Treatment Integration",
              description: "Supply and install complete water treatment packages including filtration, chemical dosing, softening, and RO systems."
            },
            {
              icon: <Settings className="w-6 h-6" />,
              title: "Consumables & Component Supply",
              description: "Reliable sourcing and delivery of all consumables—nozzles, fills, fans, gearboxes, etc."
            },
            {
              icon: <TrendingUp className="w-6 h-6" />,
              title: "Upgrades of Mechanical Systems",
              description: "Conversion of cross flow to counter flow towers and installation or upgrade of drive systems."
            },
            {
              icon: <Factory className="w-6 h-6" />,
              title: "Custom Chilling Plant Services",
              description: "Water and air-cooled chilling plant repairs and maintenance tailored for industrial HVAC needs."
            }
          ].map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Paltech™ */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Why Choose Paltech™ for Cooling Tower Service?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Award className="w-7 h-7" />,
              title: "Proven Expertise",
              description: "Decades of engineering excellence with ISO-certified quality management (ISO 9001, ISO 14001, OHSAS 45001)."
            },
            {
              icon: <Globe className="w-7 h-7" />,
              title: "Global Reach & Experience",
              description: "Over 9000 satisfied clients across 46+ countries and multiple industries."
            },
            {
              icon: <Shield className="w-7 h-7" />,
              title: "Trusted Partner",
              description: "Recognized associate member of Cooling Technology Institute (CTI USA) with cutting-edge solutions."
            },
            {
              icon: <Zap className="w-7 h-7" />,
              title: "Rapid Emergency Support",
              description: "Well-equipped teams and inventories enable fast response to equipment failure or urgent repairs."
            },
            {
              icon: <Settings className="w-7 h-7" />,
              title: "Holistic Approach",
              description: "All-in-one provider of new towers, revamps, consumables, water treatment, and turnkey services."
            }
          ].map((reason, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                {reason.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Maintenance Workflow */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Our Maintenance Workflow</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {[
            {
              number: "01",
              title: "Initial Assessment & Inspection",
              description: "Comprehensive diagnosis of tower health, structural condition, and operational efficiency."
            },
            {
              number: "02",
              title: "Plan Development",
              description: "Customized maintenance schedules, repair recommendations, and upgrade pathways."
            },
            {
              number: "03",
              title: "Execution",
              description: "Skilled technicians perform cleaning, repairs, lubrication, part replacements, and system adjustments."
            },
            {
              number: "04",
              title: "Optimization",
              description: "Thermal and water treatment fine-tuning to maximize cooling efficiency."
            },
            {
              number: "05",
              title: "Documentation & Reporting",
              description: "Detailed records and performance reports for informed decision-making and compliance."
            }
          ].map((step, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-xl border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -top-4 left-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {step.number}
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-8 border border-primary/10">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
              <Award className="w-8 h-8" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">34+</div>
            <div className="text-sm text-gray-600 font-medium">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
              <Factory className="w-8 h-8" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">11,000+</div>
            <div className="text-sm text-gray-600 font-medium">Installations Worldwide</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">9,000+</div>
            <div className="text-sm text-gray-600 font-medium">Satisfied Clients</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
              <Globe className="w-8 h-8" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">46+</div>
            <div className="text-sm text-gray-600 font-medium">Countries Served</div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: "What is included in Paltech™ annual maintenance contracts?",
              answer: "Our AMCs cover regular inspections, cleaning, preventive maintenance, consumable replacement, and emergency repair services ensuring consistent tower performance and minimal downtime."
            },
            {
              question: "Can Paltech™ assist with cooling tower revamps?",
              answer: "Yes. We specialize in upgrading existing cooling towers by redesigning components and structure, enhancing operational life and efficiency."
            },
            {
              question: "Does Paltech™ provide water treatment services for cooling towers?",
              answer: "Absolutely. We offer complete water treatment packages including side stream filtration, chemical dosing, softening, and reverse osmosis systems tailored for your plant's needs."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary/40 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 sm:p-12 text-center text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Partner with Paltech™ for Unmatched Cooling Tower Care
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Ensure long service life and peak cooling tower performance with Paltech's expert annual maintenance and comprehensive service solutions. Contact us today for a tailored maintenance plan and reliable support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="tel:+911244499700" className="inline-flex items-center gap-2 text-white hover:text-white/90 font-semibold">
            <Phone className="w-5 h-5" />
            +91-124-4499700
          </a>
          <a href="mailto:paltech@paltech.in" className="inline-flex items-center gap-2 text-white hover:text-white/90 font-semibold">
            <Mail className="w-5 h-5" />
            paltech@paltech.in
          </a>
          <a href="https://www.paltech.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-white/90 font-semibold">
            <GlobeIcon className="w-5 h-5" />
            www.paltech.in
          </a>
        </div>
      </div>
    </div>
  );
}

