"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>075 046 1725</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@fixmygaget.co.za</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Serving Greater Johannesburg</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg font-bold text-xl">JTR</div>
              <div className="hidden sm:block">
                <div className="font-sans font-bold text-lg text-foreground">Johannesburg Tech Repair</div>
                <div className="text-xs text-muted-foreground">Professional Computer Services</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/blog"
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Tech Tips
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:text-primary p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Tech Tips
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
