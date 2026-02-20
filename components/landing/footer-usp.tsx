"use client";

import { usePathname } from "next/navigation";

const uspItems = [
  "Quality Products & Most Reliable Services",
  "More than 39+ of mfg. Excellence",
  "More than 11000 clients",
  "Export to 46+ countries",
  "More than 11000 Installations Worldwide",
  "Associate Member of Cooling Technology Institute (CTI) USA, Since more than Last Two Decades",
  "ISO 9001: 2015 Quality Management System, ISO 14001:2015 Environmental Management System and OHSAS 45001:2018 Occupational Health and Safety Management Systems Certified Company"
];

export default function FooterUSP() {
  const pathname = usePathname();
  const isAwardsRecognition = pathname.includes("/about/awards-recognition");
  if (isAwardsRecognition) {
    return null;
  }

  return (
    <div>
      <h3 className="text-2xl font-bold text-foreground mb-6">Our USP</h3>
      <ul className="space-y-3">
        {uspItems.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
            <span className="text-foreground mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
