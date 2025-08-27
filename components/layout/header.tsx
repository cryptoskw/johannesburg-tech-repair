"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-20 h-25 bg-white-600 rounded-lg flex items-center justify-center overflow-hidden p-1">
              <img src="/logo-JTR.png" alt="Johannesburg Tech Repair Logo" className="w-full h-full object-contain" />
            </div>
            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-cyan-600 font-medium">Services</button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/services/laptop-repair"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Laptop Repair
                  </Link>
                  <Link
                    href="/services/computer-repair"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Computer Repair
                  </Link>
                  <Link
                    href="/services/virus-removal"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Virus Removal
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-700 hover:text-cyan-600 font-medium">Areas</button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/areas/sandton" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Sandton
                  </Link>
                  <Link href="/areas/rosebank" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Rosebank
                  </Link>
                  <Link href="/areas/fourways" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Fourways
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/about" className="text-gray-700 hover:text-cyan-600 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-cyan-600 font-medium">
              Contact
            </Link>
          </nav>

          {/* Call Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
              <Link href="tel:+27750461725" className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Call Now</span>
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-gray-900">Services</div>
                <Link href="/services/laptop-repair" className="block px-6 py-2 text-sm text-gray-700">
                  Laptop Repair
                </Link>
                <Link href="/services/computer-repair" className="block px-6 py-2 text-sm text-gray-700">
                  Computer Repair
                </Link>
                <Link href="/services/virus-removal" className="block px-6 py-2 text-sm text-gray-700">
                  Virus Removal
                </Link>
              </div>

              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-gray-900">Areas</div>
                <Link href="/areas/sandton" className="block px-6 py-2 text-sm text-gray-700">
                  Sandton
                </Link>
                <Link href="/areas/rosebank" className="block px-6 py-2 text-sm text-gray-700">
                  Rosebank
                </Link>
                <Link href="/areas/fourways" className="block px-6 py-2 text-sm text-gray-700">
                  Fourways
                </Link>
              </div>

              <Link href="/about" className="block px-3 py-2 text-sm text-gray-700">
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-sm text-gray-700">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
