import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">JTR</span>
              </div>
              <span className="font-bold text-lg">Johannesburg Tech Repair</span>
            </div>
            <p className="text-gray-300 text-sm">
              Professional computer and laptop repair services in Johannesburg. 90-day warranty, same-day repairs,
              no-fix-no-fee guarantee.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/laptop-repair" className="text-gray-300 hover:text-white">
                  Laptop Repair
                </Link>
              </li>
              <li>
                <Link href="/services/computer-repair" className="text-gray-300 hover:text-white">
                  Computer Repair
                </Link>
              </li>
              <li>
                <Link href="/services/virus-removal" className="text-gray-300 hover:text-white">
                  Virus Removal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Data Recovery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Same-Day IT Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/areas/sandton" className="text-gray-300 hover:text-white">
                  Sandton
                </Link>
              </li>
              <li>
                <Link href="/areas/rosebank" className="text-gray-300 hover:text-white">
                  Rosebank
                </Link>
              </li>
              <li>
                <Link href="/areas/fourways" className="text-gray-300 hover:text-white">
                  Fourways
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Randburg
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Johannesburg CBD
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300">+27 12 345 6789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300">info@johannesburgtechrepair.online</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300">Johannesburg, South Africa</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300">Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Johannesburg Tech Repair. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
