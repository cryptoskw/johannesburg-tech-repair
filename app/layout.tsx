import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { AnalyticsProvider } from "@/components/analytics/analytics-provider"
import { ScrollTracker } from "@/components/analytics/scroll-tracker"
import { Suspense } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: {
    default: "Johannesburg Tech Repair - Professional Computer & Laptop Repair Services",
    template: "%s | Johannesburg Tech Repair",
  },
  description:
    "Expert computer and laptop repair services in Johannesburg. Same-day repairs, 90-day warranty, free pickup & delivery. No-fix, no-fee guarantee.",
  generator: "v0.app",
  keywords:
    "computer repair Johannesburg, laptop repair, tech support, same day repair, virus removal, screen replacement, Sandton, Rosebank, Fourways",
  authors: [{ name: "Johannesburg Tech Repair" }],
  creator: "Johannesburg Tech Repair",
  publisher: "Johannesburg Tech Repair",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://johannesburgtechrepair.online",
    siteName: "Johannesburg Tech Repair",
    title: "Johannesburg Tech Repair - Professional Computer & Laptop Repair Services",
    description:
      "Expert computer and laptop repair services in Johannesburg. Same-day repairs, 90-day warranty, free pickup & delivery. No-fix, no-fee guarantee.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Johannesburg Tech Repair - Professional Computer & Laptop Repair Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Johannesburg Tech Repair - Professional Computer & Laptop Repair Services",
    description:
      "Expert computer and laptop repair services in Johannesburg. Same-day repairs, 90-day warranty, free pickup & delivery.",
    images: ["/og-image.jpg"],
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
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-ZA">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <AnalyticsProvider />
          <ScrollTracker />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
