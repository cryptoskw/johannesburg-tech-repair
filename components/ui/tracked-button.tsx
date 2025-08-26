"use client"

import type React from "react"

import { Button, type ButtonProps } from "@/components/ui/button"
import { trackFormSubmission, trackQuoteRequest } from "@/components/analytics/conversion-tracking"
import { forwardRef } from "react"

interface TrackedButtonProps extends ButtonProps {
  eventName: "form_submit" | "quote_request" | "service_interest" | "engagement"
  eventLabel: string
  eventValue?: number
}

export const TrackedButton = forwardRef<HTMLButtonElement, TrackedButtonProps>(
  ({ eventName, eventLabel, eventValue, onClick, children, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      // Track the event based on type
      if (eventName === "form_submit") {
        trackFormSubmission(eventLabel)
      } else if (eventName === "quote_request") {
        trackQuoteRequest(eventLabel)
      } else {
        // Generic event tracking
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", eventName, {
            event_category: "engagement",
            event_label: eventLabel,
            value: eventValue || 1,
          })
        }

        if (typeof window !== "undefined" && window.fbq) {
          window.fbq("track", "ViewContent", {
            content_name: eventLabel,
            content_category: eventName,
          })
        }
      }

      // Call original onClick if provided
      if (onClick) {
        onClick(e)
      }
    }

    return (
      <Button ref={ref} onClick={handleClick} {...props}>
        {children}
      </Button>
    )
  },
)

TrackedButton.displayName = "TrackedButton"
