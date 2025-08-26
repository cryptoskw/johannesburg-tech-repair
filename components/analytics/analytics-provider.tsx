"use client"

import { GoogleAnalytics } from "./google-analytics"
import { GoogleTagManager } from "./google-tag-manager"
import { FacebookPixel } from "./facebook-pixel"
import { Hotjar } from "./hotjar"

export function AnalyticsProvider() {
  // These would typically come from environment variables
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX"
  const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || "000000000000000"
  const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID || "0000000"
  const HOTJAR_SV = process.env.NEXT_PUBLIC_HOTJAR_SV || "6"

  return (
    <>
      <GoogleAnalytics gaId={GA_ID} />
      <GoogleTagManager gtmId={GTM_ID} />
      <FacebookPixel pixelId={FB_PIXEL_ID} />
      <Hotjar hjid={HOTJAR_ID} hjsv={HOTJAR_SV} />
    </>
  )
}
