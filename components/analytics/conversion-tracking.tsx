"use client"

import { useEffect } from "react"

// Track phone number clicks
export function trackPhoneClick(phoneNumber: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "phone_call", {
      event_category: "engagement",
      event_label: phoneNumber,
      value: 1,
    })
  }

  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Contact", {
      content_name: "Phone Call",
      content_category: "Contact",
    })
  }
}

// Track form submissions
export function trackFormSubmission(formName: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "form_submit", {
      event_category: "engagement",
      event_label: formName,
      value: 1,
    })
  }

  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", {
      content_name: formName,
      content_category: "Form Submission",
    })
  }
}

// Track quote requests
export function trackQuoteRequest(serviceType: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "quote_request", {
      event_category: "conversion",
      event_label: serviceType,
      value: 1,
    })
  }

  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "InitiateCheckout", {
      content_name: "Quote Request",
      content_category: serviceType,
    })
  }
}

// Track page views for SPA navigation
export function trackPageView(url: string, title: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID || "", {
      page_title: title,
      page_location: url,
    })
  }
}

// Track scroll depth
export function useScrollTracking() {
  useEffect(() => {
    let scrollDepth = 0
    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
      )

      if (scrollPercent > scrollDepth && scrollPercent % 25 === 0) {
        scrollDepth = scrollPercent
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "scroll", {
            event_category: "engagement",
            event_label: `${scrollPercent}%`,
            value: scrollPercent,
          })
        }
      }
    }

    window.addEventListener("scroll", trackScrollDepth)
    return () => window.removeEventListener("scroll", trackScrollDepth)
  }, [])
}

export function ConversionTracking() {
  useScrollTracking()
  return null
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    fbq: (...args: any[]) => void
  }
}
