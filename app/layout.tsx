import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import DebugPanel from "@/components/layout/DebugPanel";
import PageTransition from "@/components/layout/PageTransition";
import { business, links } from "@/lib/data";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kings-cut-el-cajon.vercel.app"),
  title: {
    default: "King's Cut El Cajon — Premier Barbershop on Jamacha Rd",
    template: "%s | King's Cut El Cajon",
  },
  description:
    "King's Cut — El Cajon's premier barbershop since 2007. Precision cuts, traditional shaves, beard trims, family-friendly chairs. Walk-ins welcome. (619) 334-6665.",
  keywords: [
    "barbershop El Cajon",
    "Jamacha Road barbershop",
    "King's Cut",
    "haircut El Cajon",
    "beard trim El Cajon",
    "straight razor shave El Cajon",
    "kids haircut El Cajon",
    "Maysam barber",
  ],
  authors: [{ name: "King's Cut" }],
  openGraph: {
    title: "King's Cut El Cajon — Premier Barbershop on Jamacha Rd",
    description:
      "Eighteen years of precision cuts, traditional shaves, and family service in East El Cajon.",
    url: "https://kings-cut-el-cajon.vercel.app",
    siteName: "King's Cut El Cajon",
    images: [
      {
        url: "/og/home.jpg",
        width: 1200,
        height: 630,
        alt: "King's Cut — Premier Barbershop in El Cajon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "King's Cut El Cajon",
    description: "El Cajon's premier barbershop since 2007. Your Cut. Your Crown.",
    images: ["/og/home.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["BarberShop", "LocalBusiness"],
  "@id": "https://kings-cut-el-cajon.vercel.app/#barbershop",
  name: business.name,
  description:
    "El Cajon's premier barbershop since 2007. Precision cuts, traditional shaves, beard trims, and family-friendly service.",
  url: "https://kings-cut-el-cajon.vercel.app",
  telephone: business.phone.raw,
  email: undefined,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.7681,
    longitude: -116.9476,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "15:00",
    },
  ],
  priceRange: "$",
  image: "https://kings-cut-el-cajon.vercel.app/og/home.jpg",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.1",
    reviewCount: "116",
    bestRating: "5",
  },
  sameAs: [links.facebook, links.instagram, links.yelp],
  paymentAccepted: "Cash, Credit Card",
  currenciesAccepted: "USD",
  potentialAction: {
    "@type": "ReserveAction",
    target: links.booking,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>
          <ScrollProgress />
          <DebugPanel />
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
