import type { Metadata } from "next";
import { profile } from "@/src/content/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.heroStatement,
  keywords: [
    "Quality Engineering",
    "QA Director",
    "AI-First QA",
    "Quality Assurance",
    "Test Automation",
    "CI/CD",
    "Quality Transformation",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://(add-domain)",
    title: `${profile.name} | ${profile.title}`,
    description: profile.heroStatement,
    siteName: `${profile.name} - Executive Career Storefront`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.title}`,
    description: profile.heroStatement,
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
    },
    email: profile.contact.email,
    telephone: profile.contact.phone,
    url: "https://(add-domain)",
    sameAs: profile.contact.linkedin ? [profile.contact.linkedin] : [],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

