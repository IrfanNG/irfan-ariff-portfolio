import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Irfan | AI-Assisted Software Developer",
  description:
    "Internship-focused portfolio for a Software Engineering student building web and mobile products with speed, clarity, and practical implementation.",
  keywords: [
    "Irfan",
    "Software Engineering Student",
    "AI-Assisted Software Developer",
    "Internship",
    "Banking",
    "Fintech",
    "Software House",
    "Web Development",
    "Mobile Development",
  ],
  authors: [{ name: "Irfan Ariff" }],
  openGraph: {
    title: "Irfan | AI-Assisted Software Developer",
    description:
      "Internship-focused portfolio for a Software Engineering student building web and mobile products with speed, clarity, and practical implementation.",
    url: "https://irfanariff.com",
    siteName: "Irfan Internship Portfolio",
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Irfan | AI-Assisted Software Developer",
    description:
      "Internship-focused portfolio for a Software Engineering student building web and mobile products with speed, clarity, and practical implementation.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
    "jobTitle": "Software Engineering Student & AI-Assisted Software Developer",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "UniKL MIIT",
    },
    "sameAs": [
      "https://github.com/IrfanNG",
      "https://www.linkedin.com/in/irfan-ariff-20691a264",
      "https://www.threads.net/@irfanrff",
    ],
  };

  return (
    <html lang="en">
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
