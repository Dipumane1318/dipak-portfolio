import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const siteUrl = "https://dipakmane.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteConfig.name} — Full Stack Developer`,
  description: siteConfig.tagline,
  keywords: [
    "Dipak Mane",
    "Full Stack Developer",
    "Computer Engineering Student",
    "MERN Stack Developer",
    "MEAN Stack Developer",
    "React Developer Portfolio",
    "Next.js Developer",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${siteConfig.name} — Full Stack Developer`,
    description: siteConfig.tagline,
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: "/assets/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Full Stack Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Full Stack Developer`,
    description: siteConfig.tagline,
    images: ["/assets/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Full Stack Developer",
    email: siteConfig.email,
    telephone: siteConfig.phone,
    url: siteUrl,
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin, siteConfig.links.leetcode],
    alumniOf: "SNJB's KBJ College of Engineering",
  };

  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-base text-ink font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
