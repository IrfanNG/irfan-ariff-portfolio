import type { Metadata } from "next";
import { Inter, Newsreader, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Irfan Ariff | Software Engineering & Technical Architecture",
  description: "Software Engineering student at UniKL MIIT focusing on clean logic and scalable architecture. Ambassador at KrackedDevs and founder of Alchimistra Studio.",
  keywords: ["Irfan Ariff", "Software Engineer", "UniKL", "Alchimistra", "KrackedDevs", "Web Development", "Malaysia", "Kuala Lumpur"],
  authors: [{ name: "Irfan Ariff" }],
  openGraph: {
    title: "Irfan Ariff | Software Engineering & Technical Architecture",
    description: "Software Engineering student focusing on clean logic and scalable architecture.",
    url: "https://irfanariff.com",
    siteName: "Irfan Ariff Portfolio",
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Irfan Ariff | Software Engineering & Technical Architecture",
    description: "Software Engineering student focusing on clean logic and scalable architecture.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Irfan Ariff",
    "url": "https://irfanariff.com",
    "jobTitle": "Software Engineering Student & Founder",
    "worksFor": {
      "@type": "Organization",
      "name": "Alchimistra Studio"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "UniKL MIIT"
    },
    "sameAs": [
      "https://github.com/IrfanNG",
      "https://www.linkedin.com/in/irfan-ariff-20691a264",
      "https://www.threads.net/@irfanrff"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} ${ibmPlexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
