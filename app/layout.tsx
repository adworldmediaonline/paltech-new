import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Paltech™ Industrial Cooling Towers & Heat Exchangers",
  description: "Trusted industrial cooling solutions with 37+ years expertise. High-quality cooling towers, heat exchangers & energy-efficient systems worldwide.",
  keywords: [
    "Cooling Towers",
    "Heat Exchangers",
    "Industrial Cooling",
    "HVAC Systems",
    "Chilling Plants",
    "Industrial cooling towers for factories",
    "Energy-efficient cooling solutions",
    "Air-cooled and water-cooled chilling plants",
    "Custom-designed heat exchanger systems",
    "ISO-certified cooling tower manufacturer in India",
    "Industrial HVAC integration and optimization",
    "Cooling towers manufacturer",
    "Industrial cooling solutions",
    "FRP cooling towers",
    "RCC cooling towers",
    "Pultruded FRP cooling towers",
    "Packaged cooling towers",
    "Industrial heat exchangers",
    "Energy-efficient HVAC systems",
    "Cooling tower maintenance services",
    "Industrial cooling system optimization",
    "Low power consumption cooling towers",
    "Low noise industrial cooling solutions",
    "ISO 9001:2015 cooling tower company",
    "CTI USA member cooling towers",
    "Precision-engineered cooling equipment",
    "Industrial temperature control solutions"
  ],
  metadataBase: new URL('https://www.paltech.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Paltech™ Industrial Cooling Towers & Heat Exchangers",
    description: "Trusted industrial cooling solutions with 37+ years expertise. High-quality cooling towers, heat exchangers & energy-efficient systems worldwide.",
    type: "website",
    url: 'https://www.paltech.in',
    siteName: "Paltech™",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paltech™ Industrial Cooling Towers & Heat Exchangers",
    description: "Trusted industrial cooling solutions with 37+ years expertise. High-quality cooling towers, heat exchangers & energy-efficient systems worldwide.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
