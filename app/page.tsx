import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Smartphone,
  Monitor,
  HardDrive,
  Wifi,
  Shield,
  CheckCircle,
  Award,
  Users,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/95">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-black text-white p-2 rounded-lg">
              <span className="font-bold text-lg">JTR</span>
            </div>
            <span className="font-bold text-xl text-foreground">Johannesburg Tech Repair</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/services" className="text-sm font-medium text-foreground hover:text-black transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-black transition-colors">
              About
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-foreground hover:text-black transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-black transition-colors">
              Contact
            </Link>
            <Button size="sm" className="bg-black text-white hover:bg-gray-800">
              Get Quote
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit bg-black text-white">
                ⭐ #1 Rated Tech Repair in Johannesburg
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Expert Computer Repair Services in
                <span className="text-black"> Johannesburg</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Professional laptop repair, desktop repair, phone repair & IT support with same-day service. Certified
                technicians, 90-day warranty, and unbeatable prices. Serving all of Johannesburg since 2015.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 bg-black hover:bg-gray-800 text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 075 046 1725
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 border-black text-black hover:bg-black hover:text-white bg-transparent"
                >
                  Get Free Diagnosis
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  Same Day Repairs Available
                </div>
                <div className="flex items-center text-muted-foreground">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  90-Day Parts & Labor Warranty
                </div>
                <div className="flex items-center text-muted-foreground">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  Free Pickup & Delivery
                </div>
                <div className="flex items-center text-muted-foreground">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  No Fix, No Fee Guarantee
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/professional-tech-repair-workshop-with-modern-equi.png"
                alt="Professional computer repair technician fixing laptop in modern Johannesburg workshop"
                className="rounded-lg shadow-xl border border-gray-200"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                <div className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-black" />
                  <div>
                    <div className="font-semibold text-sm">Certified Technicians</div>
                    <div className="text-xs text-muted-foreground">Microsoft & CompTIA Certified</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                <div className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-black" />
                  <div>
                    <div className="font-semibold text-sm">5000+ Happy Customers</div>
                    <div className="text-xs text-muted-foreground">4.9/5 Average Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-black text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">5000+</div>
              <div className="text-sm opacity-90">Devices Repaired</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24hr</div>
              <div className="text-sm opacity-90">Average Turnaround</div>
            </div>
            <div>
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold">9 Years</div>
              <div className="text-sm opacity-90">In Business</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Complete Tech Repair Services in Johannesburg</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From laptop screen replacement to data recovery, we handle all computer and mobile device repairs with
              expert precision and guaranteed results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Monitor,
                title: "Laptop & Desktop Repair",
                description:
                  "Screen replacement, motherboard repair, hardware upgrades, virus removal, performance optimization",
                price: "From R299",
                popular: true,
                image: "/professional-male-technician-with-computer-repair-.png",
              },
              {
                icon: Smartphone,
                title: "Mobile Phone Repair",
                description:
                  "iPhone & Android screen repair, battery replacement, water damage recovery, charging port fixes",
                price: "From R199",
                popular: false,
                image: "/professional-female-technician-working-on-mobile-d.png",
              },
              {
                icon: HardDrive,
                title: "Data Recovery Services",
                description: "Professional data recovery from crashed hard drives, SSDs, USB drives, and memory cards",
                price: "From R499",
                popular: false,
                image: "/data-recovery-hard-drive-repair.png",
              },
              {
                icon: Wifi,
                title: "Network & WiFi Setup",
                description:
                  "Business network installation, WiFi troubleshooting, router configuration, security setup",
                price: "From R399",
                popular: false,
                image: "/network-setup-wifi-installation.png",
              },
              {
                icon: Shield,
                title: "Virus & Malware Removal",
                description: "Complete system cleanup, malware removal, antivirus installation, security optimization",
                price: "From R249",
                popular: false,
                image: "/computer-security-virus-removal.png",
              },
              {
                icon: Zap,
                title: "Hardware Upgrades",
                description: "RAM upgrades, SSD installation, graphics card upgrades, performance enhancement",
                price: "From R199",
                popular: false,
                image: "/computer-hardware-upgrade-installation.png",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative bg-white border border-gray-200"
              >
                {service.popular && <Badge className="absolute -top-2 left-4 bg-black text-white">Most Popular</Badge>}
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} service`}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <CardHeader>
                  <service.icon className="h-12 w-12 text-black mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-black">{service.price}</span>
                    <Button
                      variant="outline"
                      className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                    >
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Why Johannesburg Trusts Us With Their Tech</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're not just another repair shop - we're your trusted technology partners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Certified Experts",
                description:
                  "Microsoft, CompTIA, and Apple certified technicians with 10+ years experience in computer repair",
                stat: "Certified Pros",
              },
              {
                icon: Zap,
                title: "Lightning Fast Service",
                description: "Most repairs completed same-day or within 24 hours. We know your time is valuable",
                stat: "Same Day",
              },
              {
                icon: Shield,
                title: "Unbeatable Warranty",
                description: "90-day comprehensive warranty on all repairs and parts. We stand behind our work",
                stat: "90 Day Warranty",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow bg-white border border-gray-200"
              >
                <CardHeader>
                  <feature.icon className="h-16 w-16 text-black mx-auto mb-4" />
                  <CardTitle className="text-2xl font-bold text-black mb-2">{feature.stat}</CardTitle>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Real Reviews From Real Customers</h2>
            <p className="text-xl text-muted-foreground">
              See why we're Johannesburg's most trusted tech repair service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                location: "Sandton Business District",
                rating: 5,
                review:
                  "My MacBook Pro screen was completely shattered. They replaced it in 4 hours and it looks brand new! Professional service and fair pricing. Will definitely use them again.",
                service: "Laptop Screen Repair",
              },
              {
                name: "David Kruger",
                location: "Rosebank",
                rating: 5,
                review:
                  "Thought I lost 5 years of family photos when my hard drive crashed. These guys recovered EVERYTHING! They're miracle workers. Worth every penny.",
                service: "Data Recovery",
              },
              {
                name: "Lisa Patel",
                location: "Fourways",
                rating: 5,
                review:
                  "My business laptop was running so slow I was ready to buy a new one. After their tune-up service, it's faster than when I first bought it. Saved me thousands!",
                service: "Performance Optimization",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white border border-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-black text-black" />
                    ))}
                  </div>
                  <Badge variant="outline" className="w-fit mb-2 border-black text-black">
                    {testimonial.service}
                  </Badge>
                  <CardDescription className="text-base italic leading-relaxed">"{testimonial.review}"</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Find Us in Johannesburg</h2>
            <p className="text-xl text-muted-foreground">
              Conveniently located in the heart of Johannesburg with easy access and free parking
            </p>
          </div>

          <div className="bg-gray-100 h-96 rounded-lg border border-gray-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-black mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">123 Main Street, Johannesburg CBD</h3>
              <p className="text-muted-foreground">Interactive map will be embedded here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Get Your Device Fixed Today</h2>
              <p className="text-xl text-muted-foreground">
                Emergency repairs available 24/7. Free diagnosis and pickup service in Johannesburg area.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-black" />
                  <div>
                    <span className="text-lg font-semibold">075 046 1725</span>
                    <div className="text-sm text-muted-foreground">24/7 Emergency Line</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-black" />
                  <span className="text-lg">info@fixmygaget.co.za</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-black" />
                  <div>
                    <span className="text-lg">123 Main Street, Johannesburg CBD</span>
                    <div className="text-sm text-muted-foreground">Free parking available</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-black" />
                  <div>
                    <span className="text-lg">Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</span>
                    <div className="text-sm text-muted-foreground">Emergency service available 24/7</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold mb-2">Service Areas:</h4>
                <p className="text-sm text-muted-foreground">
                  Sandton, Rosebank, Fourways, Randburg, Midrand, Roodepoort, Soweto, Johannesburg CBD, and surrounding
                  areas
                </p>
              </div>
            </div>

            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle>Get Free Quote</CardTitle>
                <CardDescription>Tell us about your device issue</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <input
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-black bg-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Phone</label>
                    <input
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-black bg-white"
                      placeholder="Your phone"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-black bg-white"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Device Type</label>
                  <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-black bg-white">
                    <option>Select device type</option>
                    <option>Laptop</option>
                    <option>Desktop</option>
                    <option>Smartphone</option>
                    <option>Tablet</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Issue Description</label>
                  <textarea
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md h-24 focus:ring-2 focus:ring-black focus:border-black bg-white"
                    placeholder="Describe the problem..."
                  ></textarea>
                </div>
                <Button className="w-full bg-black hover:bg-gray-800 text-white">Get Free Quote</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-white text-black p-2 rounded-lg">
                  <span className="font-bold text-lg">JTR</span>
                </div>
                <span className="font-bold text-xl">Johannesburg Tech Repair</span>
              </div>
              <p className="text-gray-300">Professional computer and device repair services in Johannesburg.</p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Laptop Repair</li>
                <li>Desktop Repair</li>
                <li>Mobile Phone Repair</li>
                <li>Data Recovery</li>
                <li>Network Setup</li>
                <li>Virus Removal</li>
                <li>Hardware Upgrades</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>075 046 1725</li>
                <li>info@fixmygaget.co.za</li>
                <li>123 Main Street, Johannesburg CBD</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Hours</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Mon-Fri: 8AM-6PM</li>
                <li>Saturday: 9AM-4PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Johannesburg Tech Repair. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
