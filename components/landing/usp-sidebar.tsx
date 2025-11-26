"use client";

import { Check, Award, Users, Globe, Clock, Shield } from "lucide-react";
import { useState } from "react";

export function USPSidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const uspItems = [
    {
      icon: <Award className="w-5 h-5" />,
      text: "Quality Products & Most Reliable Services"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "More than 39 years of mfg. Excellence"
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "More than 9000 clients"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      text: "Export to 46+ countries"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "More than 11000 Installations Worldwide"
    },
    {
      icon: <Award className="w-5 h-5" />,
      text: "Associate Member of Cooling Technology Institute (CTI) USA, Since more than Last Two Decades"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "ISO 9001: 2015 Quality Management System, ISO 14001:2015 Environmental Management System and OHSAS 45001:2018 Occupational Health and Safety Management Systems Certified Company"
    }
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden xl:block w-96 flex-shrink-0 bg-gradient-to-b from-primary/5 to-white border-l border-gray-200">
        <div className="sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto">
          <div className="pt-6 pb-4 px-4">
            {/* Header */}
            <div className="mb-3">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Our USP</h3>
              <div className="w-10 h-0.5 bg-gradient-to-r from-primary to-primary/80 rounded-full"></div>
            </div>

            {/* USP Items */}
            <div className="space-y-2">
              {uspItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 p-2 rounded-md hover:bg-white hover:shadow-sm transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-md flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-4 p-3 bg-gradient-to-r from-primary/10 to-blue-50 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-gray-900 mb-1 text-sm">Why Choose Us?</h4>
              <p className="text-xs text-gray-600 mb-2">
                Experience the difference with our proven track record and industry expertise.
              </p>
              <button className="w-full bg-primary text-white py-1.5 px-3 rounded-md text-xs font-medium hover:bg-primary/90 transition-colors">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Floating Button */}
      <div className="xl:hidden fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsExpanded(true)}
          className="bg-primary text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          aria-label="View our USP"
        >
          <Award className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Modal */}
      {isExpanded && (
        <div className="xl:hidden fixed inset-0 z-50 bg-black/50 flex items-end">
          <div className="bg-white w-full max-h-[80vh] rounded-t-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-bold text-gray-900">Our USP</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[60vh] p-4">
              <div className="space-y-3">
                {uspItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-gray-50"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-blue-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Why Choose Us?</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Experience the difference with our proven track record.
                </p>
                <button className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
