import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, CheckCircle, Star, MapPin, Building } from "lucide-react"
import Link from "next/link"
import { BreadcrumbSchema } from "@/components/seo/structured-data"

export const metadata = {
  title: "Computer Repair Rosebank | Professional Laptop & Desktop Repair Services",
  description:
    "Expert computer and laptop repair in Rosebank, Johannesburg. Same-day service, free pickup & delivery. Serving Rosebank Mall, Parktown North, and surrounding areas.",
  keywords:
    "computer repair Rosebank, laptop repair Rosebank Mall, tech support Rosebank, Parktown North computer repair, same day repair Rosebank",
}

export default function RosebankRepairPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://johannesburgtechrepair.online" },
          { name: "Service Areas", url: "https://johannesburgtechrepair.online/#areas" },
          { name: "Rosebank", url: "https://johannesburgtechrepair.online/areas/rosebank" },
        ]}
      />

      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">JTR</span>
            </div>
            <span className="font-bold text-xl text-foreground">Johannesburg Tech Repair</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/#about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Button className="bg-primary hover:bg-primary/90">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground">Trusted in Rosebank Since 2020</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Expert Computer Repair Services in
              <span className="text-primary block">Rosebank, Johannesburg</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional laptop and desktop repair services in Rosebank and surrounding areas. Convenient location
              near Rosebank Mall with same-day repairs and free pickup & delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                Book Free Diagnosis
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent">
                <Phone className="w-5 h-5 mr-2" />
                Call (011) 123-4567
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Serving Rosebank, Parktown North, Craighall & surrounding areas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Coverage */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Rosebank Areas We Cover</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Rosebank", "Parktown North", "Craighall", "Parktown", "Auckland Park", "Melville"].map(
                (area, index) => (
                  <Card key={index} className="text-center p-4 hover:shadow-md transition-shadow">
                    <CardContent className="p-2">
                      <Building className="w-5 h-5 text-primary mx-auto mb-2" />
                      <span className="text-sm font-medium text-foreground">{area}</span>
                    </CardContent>
                  </Card>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Rosebank */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Why Rosebank Residents Trust Us
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              As a trusted tech repair service in the Rosebank area, we combine local knowledge with expert technical
              skills to provide exceptional service.
            </p>

            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Convenient Rosebank Location</h3>
                  <p className="text-muted-foreground mb-4">
                    Located in the heart of Rosebank, we're easily accessible whether you're shopping at Rosebank Mall,
                    working in the business district, or living in the surrounding residential areas.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Our central location means faster response times and convenient drop-off options for all Rosebank
                    residents and businesses.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Walking distance from Rosebank Gautrain Station</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Near major shopping and business centers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Easy parking and public transport access</span>
                    </li>
                  </ul>
                </div>
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-semibold mb-4">Local Expertise</h4>
                    <p className="mb-6 opacity-90">
                      We understand the unique needs of Rosebank's diverse community - from students and young
                      professionals to established businesses.
                    </p>
                    <Button variant="secondary" className="w-full">
                      Visit Our Location
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-accent text-accent-foreground">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Student & Professional Discounts</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Special rates for students from nearby universities and young professionals in the Rosebank area.
                  </p>
                  <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                    Learn About Discounts
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Popular in Rosebank */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Most Popular Services in Rosebank
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              Based on our experience serving the Rosebank community, these are the most common tech issues we resolve.
            </p>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">💻</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Laptop Screen Replacement</h3>
                      <p className="text-muted-foreground mb-4">
                        Cracked laptop screens are common among busy professionals and students in Rosebank. We provide
                        same-day screen replacement services for all major laptop brands including MacBook, Dell, HP,
                        and Lenovo.
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Average repair time:</strong> 2-4 hours | <strong>Warranty:</strong> 90 days |{" "}
                        <strong>Price range:</strong> R800 - R2,500
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🔧</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Performance Optimization</h3>
                      <p className="text-muted-foreground mb-4">
                        Slow computers affect productivity for Rosebank's working professionals. We provide
                        comprehensive performance optimization including SSD upgrades, RAM increases, and system cleanup
                        services.
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Typical improvements:</strong> 3-5x faster boot times |{" "}
                        <strong>Popular upgrades:</strong> SSD installation, RAM upgrade
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Virus & Malware Removal</h3>
                      <p className="text-muted-foreground mb-4">
                        With high internet usage in the area, malware infections are unfortunately common. We provide
                        complete virus removal and security setup to protect your valuable data and privacy.
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Service includes:</strong> Complete malware scan, system cleanup, antivirus
                        installation, security education
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              What Rosebank Customers Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Perfect location near Rosebank Mall! Dropped off my laptop during lunch break and picked it up
                    after work. Screen replacement was flawless."
                  </p>
                  <div className="font-semibold text-foreground">Sarah P.</div>
                  <div className="text-sm text-muted-foreground">Marketing Professional, Rosebank</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Great student discount and friendly service. They explained everything clearly and didn't try to
                    oversell. Will definitely recommend to other students."
                  </p>
                  <div className="font-semibold text-foreground">Michael T.</div>
                  <div className="text-sm text-muted-foreground">University Student, Parktown North</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Excellent virus removal service. My computer was completely infected and they cleaned it up
                    perfectly. Also taught me how to avoid future problems."
                  </p>
                  <div className="font-semibold text-foreground">Linda M.</div>
                  <div className="text-sm text-muted-foreground">Craighall Resident</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Fast and professional service. They upgraded my laptop's RAM and installed an SSD. The performance
                    improvement is incredible!"
                  </p>
                  <div className="font-semibold text-foreground">James K.</div>
                  <div className="text-sm text-muted-foreground">Freelance Designer, Melville</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Tech Repair in Rosebank?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Visit our convenient Rosebank location or schedule free pickup & delivery. Same-day service available for
            most repairs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Book Free Diagnosis
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (011) 123-4567
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">JTR</span>
                </div>
                <span className="font-bold text-lg">Johannesburg Tech Repair</span>
              </Link>
              <p className="text-sm opacity-80">
                Professional computer repair services in Rosebank with same-day turnaround and warranty guarantee.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Rosebank Areas</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Rosebank</li>
                <li>Parktown North</li>
                <li>Craighall</li>
                <li>Melville</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <Link href="/services/laptop-repair" className="hover:text-primary transition-colors">
                    Laptop Repair
                  </Link>
                </li>
                <li>
                  <Link href="/services/computer-repair" className="hover:text-primary transition-colors">
                    Computer Repair
                  </Link>
                </li>
                <li>
                  <Link href="/services/virus-removal" className="hover:text-primary transition-colors">
                    Virus Removal
                  </Link>
                </li>
                <li>Performance Upgrades</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (011) 123-4567
                </div>
                <div className="flex items-center gap-2">
                  <span>info@johannesburgtechrepair.online</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Serving all of Rosebank
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-60">
            <p>&copy; 2024 Johannesburg Tech Repair. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
