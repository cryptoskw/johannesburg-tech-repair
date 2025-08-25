import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"], // Including black weight for headings
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Johannesburg Tech Repair | Professional Computer & Device Repair Services",
  description:
    "Expert computer repair, laptop repair, phone repair & IT support in Johannesburg. Fast, reliable, affordable tech repair services. Same-day repairs available. Call now!",
  keywords:
    "computer repair johannesburg, laptop repair, phone repair, IT support, tech repair, device repair, same day repair, affordable computer repair",
  authors: [{ name: "Johannesburg Tech Repair" }],
  creator: "Johannesburg Tech Repair",
  publisher: "Johannesburg Tech Repair",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.johannesburgtechrepair.online",
    siteName: "Johannesburg Tech Repair",
    title: "Professional Computer & Device Repair Services in Johannesburg",
    description:
      "Expert tech repair services in Johannesburg. Fast, reliable, affordable repairs for computers, laptops, phones & more. Same-day service available.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Johannesburg Tech Repair - Professional Computer Repair Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Johannesburg Tech Repair | Professional Computer & Device Repair",
    description:
      "Expert tech repair services in Johannesburg. Fast, reliable, affordable repairs. Same-day service available.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <link rel="canonical" href="https://www.johannesburgtechrepair.online" />
        <meta name="geo.region" content="ZA-GP" />
        <meta name="geo.placename" content="Johannesburg" />
        <meta name="geo.position" content="-26.2041;28.0473" />
        <meta name="ICBM" content="-26.2041, 28.0473" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
