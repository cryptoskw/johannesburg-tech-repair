import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg font-bold text-xl">JTR</div>
              <div>
                <div className="font-sans font-bold text-lg text-foreground">Johannesburg Tech Repair</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Professional computer and device repair services in Johannesburg. Fast, reliable, and affordable solutions
              for all your tech needs.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-sans font-bold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-muted-foreground hover:text-primary text-sm">
                Home
              </Link>
              <Link href="/services" className="block text-muted-foreground hover:text-primary text-sm">
                Services
              </Link>
              <Link href="/about" className="block text-muted-foreground hover:text-primary text-sm">
                About Us
              </Link>
              <Link href="/blog" className="block text-muted-foreground hover:text-primary text-sm">
                Tech Tips
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-sans font-bold text-foreground">Our Services</h3>
            <div className="space-y-2">
              <div className="text-muted-foreground text-sm">Computer Repair</div>
              <div className="text-muted-foreground text-sm">Laptop Repair</div>
              <div className="text-muted-foreground text-sm">Phone Repair</div>
              <div className="text-muted-foreground text-sm">Data Recovery</div>
              <div className="text-muted-foreground text-sm">IT Support</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-sans font-bold text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">075 046 1725</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">info@fixmygaget.co.za</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">Greater Johannesburg Area</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">Mon-Fri: 8AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">© 2024 Johannesburg Tech Repair. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
