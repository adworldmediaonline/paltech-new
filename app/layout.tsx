import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paltech | Industrial Cooling Solutions | Cooling Towers & Heat Exchangers",
  description:
    "Precision-engineered cooling solutions for critical industries. 37+ years of excellence in industrial cooling towers, heat exchangers, and HVAC systems serving 25+ countries worldwide.",
  keywords: [
    "industrial cooling towers",
    "heat exchangers",
    "HVAC systems",
    "cooling solutions",
    "industrial cooling",
    "precision engineering",
    "energy efficient cooling",
    "cooling tower manufacturer",
    "India cooling solutions",
  ],
  authors: [{ name: "Paltech Industrial Solutions" }],
  openGraph: {
    title: "Paltech | Industrial Cooling Solutions",
    description:
      "Precision-engineered cooling solutions for critical industries. 37+ years of excellence serving 25+ countries worldwide.",
    type: "website",
    locale: "en_IN",
    siteName: "Paltech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paltech | Industrial Cooling Solutions",
    description:
      "Precision-engineered cooling solutions for critical industries. 37+ years of excellence serving 25+ countries worldwide.",
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
  verification: {
    // Add Google Search Console verification here when available
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
