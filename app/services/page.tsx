import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Monitor, Smartphone, HardDrive, Wrench, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Wrench className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Johannesburg Tech Repair</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <Button size="sm">Get Quote</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container">
          <Link href="/" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Professional Services
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold">Our Expert Repair Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tech repair solutions with professional service, competitive pricing, and guaranteed results
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="pb-20">
        <div className="container space-y-16">
          {/* Computer Repair */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Monitor className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Computer Repair</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Expert desktop and laptop repair services for all major brands including Dell, HP, Lenovo, Acer, and
                custom builds.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Hardware diagnostics",
                  "Motherboard repair",
                  "Screen replacements",
                  "Keyboard & trackpad fixes",
                  "Power jack repair",
                  "Overheating solutions",
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-primary">From R299</span>
                <Button>Get Quote</Button>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Free Diagnosis</span>
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div className="flex justify-between">
                  <span>90-Day Warranty</span>
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div className="flex justify-between">
                  <span>Genuine Parts</span>
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div className="flex justify-between">
                  <span>Data Backup</span>
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mobile Device Repair */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="lg:order-2">
              <CardHeader>
                <CardTitle>Popular Repairs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Screen Replacement</span>
                  <span className="font-semibold">R199-R899</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Battery Replacement</span>
                  <span className="font-semibold">R149-R399</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Water Damage Recovery</span>
                  <span className="font-semibold">R299-R699</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Charging Port Repair</span>
                  <span className="font-semibold">R199-R449</span>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-6 lg:order-1">
              <div className="flex items-center space-x-3">
                <Smartphone className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Mobile Device Repair</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Professional smartphone and tablet repair for iPhone, Samsung, Huawei, and all major Android devices.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Screen & LCD repair",
                  "Battery replacement",
                  "Water damage recovery",
                  "Camera fixes",
                  "Speaker & microphone",
                  "Software troubleshooting",
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-primary">From R199</span>
                <Button>Get Quote</Button>
              </div>
            </div>
          </div>

          {/* Data Recovery */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <HardDrive className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Data Recovery</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Professional data recovery services for hard drives, SSDs, USB drives, and memory cards with high
                success rates.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span>Success Rate</span>
                  <Badge variant="secondary">95%+</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span>Turnaround Time</span>
                  <Badge variant="secondary">2-5 Days</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span>No Data, No Fee</span>
                  <Badge variant="secondary">Guaranteed</Badge>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-primary">From R499</span>
                <Button>Get Quote</Button>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>We Recover From</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Failed hard drives",
                  "Corrupted SSDs",
                  "Damaged USB drives",
                  "Memory cards",
                  "RAID systems",
                  "Formatted drives",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold">Ready to Fix Your Device?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Get a free quote today and experience professional repair service with a 90-day warranty
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Get Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Call +27 11 123 4567
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Wrench className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">Johannesburg Tech Repair</span>
              </div>
              <p className="text-muted-foreground">Professional computer and device repair services in Johannesburg.</p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Computer Repair</li>
                <li>Mobile Repair</li>
                <li>Data Recovery</li>
                <li>Network Setup</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+27 11 123 4567</li>
                <li>info@johannesburgtechrepair.online</li>
                <li>123 Main Street, Johannesburg</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Hours</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Mon-Fri: 8AM-6PM</li>
                <li>Saturday: 9AM-4PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Johannesburg Tech Repair. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
