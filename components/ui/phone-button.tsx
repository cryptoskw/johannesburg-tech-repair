"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { trackPhoneClick } from "@/components/analytics/conversion-tracking"

interface PhoneButtonProps {
  phoneNumber: string
  className?: string
  children?: React.ReactNode
}

export function PhoneButton({ phoneNumber, className, children }: PhoneButtonProps) {
  const handlePhoneClick = () => {
    trackPhoneClick(phoneNumber)
  }

  return (
    <Button asChild className={className} onClick={handlePhoneClick}>
      <a href={`tel:${phoneNumber}`}>
        <Phone className="w-4 h-4 mr-2" />
        {children || phoneNumber}
      </a>
    </Button>
  )
}
