"use client";

import { Check } from "lucide-react";

export function USP() {
  const uspItems = [
    "Quality Products & Most Reliable Services",
    "More than 34 years of mfg. Excellence",
    "More than 9000 clients",
    "Export to 25+ countries",
    "More than 11000 Installations Worldwide",
    "Associate Member of Cooling Technology Institute (CTI) USA, Since more than Last Two Decades",
    "ISO 9001: 2015 Quality Management System, ISO 14001:2015 Environmental Management System and OHSAS 45001:2018 Occupational Health and Safety Management Systems Certified Company"
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our USP
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/80 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10 md:p-12">
          <div className="grid gap-4 sm:gap-6">
            {uspItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50/50 transition-colors group"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
