import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Clock, Shield, Truck, CheckCircle, Star, MapPin, Navigation } from "lucide-react"
import Link from "next/link"
import { BreadcrumbSchema } from "@/components/seo/structured-data"

export const metadata = {
  title: "Computer Repair Sandton | Laptop & Desktop Repair Services in Sandton CBD",
  description:
    "Professional computer and laptop repair services in Sandton. Same-day repairs, free pickup & delivery in Sandton CBD, Morningside, Bryanston. 90-day warranty guaranteed.",
  keywords:
    "computer repair Sandton, laptop repair Sandton CBD, tech support Sandton, same day computer repair Sandton, Morningside computer repair",
}

export default function SandtonRepairPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://johannesburgtechrepair.online" },
          { name: "Service Areas", url: "https://johannesburgtechrepair.online/#areas" },
          { name: "Sandton", url: "https://johannesburgtechrepair.online/areas/sandton" },
        ]}
      />

      {/* Header */}


      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground">Serving Sandton & Surrounding Areas</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Professional Computer Repair Services in
              <span className="text-primary block">Sandton, Johannesburg</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Expert laptop and desktop computer repair services in Sandton CBD, Morningside, Bryanston, and surrounding
              areas. Same-day repairs with free pickup and delivery across Sandton.
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
              <span>Serving all of Sandton including CBD, Morningside, Bryanston & Hyde Park</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Sandton Areas We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Sandton CBD", "Morningside", "Bryanston", "Hyde Park", "Illovo", "Inanda", "Rivonia", "Woodmead"].map(
                (area, index) => (
                  <Card key={index} className="text-center p-4">
                    <CardContent className="p-2">
                      <Navigation className="w-5 h-5 text-primary mx-auto mb-2" />
                      <span className="text-sm font-medium text-foreground">{area}</span>
                    </CardContent>
                  </Card>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Sandton */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Why Sandton Businesses Choose Us
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              As Sandton's premier tech repair service, we understand the fast-paced business environment and provide
              solutions that keep you productive.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-primary" />
                    Same-Day Service in Sandton
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We know how critical your technology is to your business operations in Sandton's bustling commercial
                    district. That's why we offer same-day repair services for most common issues.
                  </p>
                  <p className="text-muted-foreground">
                    Whether you're in the Sandton CBD working late or running a business in Morningside, we ensure
                    minimal downtime with our rapid response service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Truck className="w-6 h-6 text-accent" />
                    Free Pickup & Delivery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Don't waste valuable time traveling to a repair shop. Our free pickup and delivery service covers
                    all of Sandton, from the CBD to residential areas like Hyde Park and Bryanston.
                  </p>
                  <p className="text-muted-foreground">
                    Schedule a pickup online or by phone, and we'll collect your device from your office or home at no
                    extra charge.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Shield className="w-8 h-8 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">90-Day Warranty</h4>
                    <p className="text-sm opacity-90">All repairs guaranteed</p>
                  </div>
                  <div>
                    <CheckCircle className="w-8 h-8 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">No-Fix, No-Fee</h4>
                    <p className="text-sm opacity-90">Pay only if we fix it</p>
                  </div>
                  <div>
                    <Star className="w-8 h-8 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">5-Star Service</h4>
                    <p className="text-sm opacity-90">Rated by Sandton customers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Business Focus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Supporting Sandton's Business Community
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              From small startups in Rivonia to large corporations in the Sandton CBD, we provide reliable tech support
              that keeps businesses running smoothly.
            </p>

            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Corporate IT Support</h3>
                  <p className="text-muted-foreground mb-4">
                    Sandton is home to many of South Africa's largest corporations and financial institutions. We
                    understand the unique IT challenges faced by businesses in this commercial hub.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Our corporate services include bulk device repairs, emergency IT support, and preventive maintenance
                    programs designed to minimize business disruption.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Priority same-day service for businesses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Bulk repair discounts available</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">On-site service for large offices</span>
                    </li>
                  </ul>
                </div>
                <Card className="bg-card">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-semibold text-foreground mb-4">Business Hours</h4>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-medium">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-medium">9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-medium">Emergency Only</span>
                      </div>
                    </div>
                    <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                      Schedule Business Consultation
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-accent text-accent-foreground">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Emergency IT Support</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Critical system down? We offer emergency IT support for Sandton businesses with same-day response
                    guaranteed.
                  </p>
                  <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                    Get Emergency Support
                  </Button>
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
              What Sandton Customers Say
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
                    "Excellent service! They picked up my laptop from my office in Sandton CBD and had it back to me the
                    same day with a new screen. Very professional and reliable."
                  </p>
                  <div className="font-semibold text-foreground">David M.</div>
                  <div className="text-sm text-muted-foreground">Financial Services, Sandton CBD</div>
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
                    "Our office computers in Morningside were running very slowly. They diagnosed the problem quickly
                    and upgraded our systems. Great value for money!"
                  </p>
                  <div className="font-semibold text-foreground">Jennifer K.</div>
                  <div className="text-sm text-muted-foreground">Marketing Agency, Morningside</div>
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
                    "Fast and efficient virus removal service. They cleaned my home computer in Bryanston and installed
                    proper security software. Highly recommended!"
                  </p>
                  <div className="font-semibold text-foreground">Robert L.</div>
                  <div className="text-sm text-muted-foreground">Bryanston Resident</div>
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
                    "Professional service with great communication. They kept me updated throughout the repair process
                    and delivered exactly when promised."
                  </p>
                  <div className="font-semibold text-foreground">Amanda S.</div>
                  <div className="text-sm text-muted-foreground">Hyde Park</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Sandton */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Complete Tech Repair Services in Sandton
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              From laptop screen replacements to complete system overhauls, we handle all your technology needs in
              Sandton.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Laptop Repair Sandton</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Screen replacement, keyboard repair, battery issues, and performance optimization for all laptop
                    brands.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Link href="/services/laptop-repair">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Desktop Computer Repair</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Hardware diagnostics, component replacement, and system upgrades for desktop computers.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Link href="/services/computer-repair">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Virus Removal Sandton</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Complete malware removal, system security optimization, and protection setup.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Link href="/services/virus-removal">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Data Recovery Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Professional data recovery from failed hard drives, corrupted files, and deleted data.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Network Setup & Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Business network installation, WiFi setup, and ongoing IT support for Sandton offices.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Hardware Upgrades</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    RAM upgrades, SSD installations, and performance improvements for better productivity.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Schedule Upgrade
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Computer Repair in Sandton?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get professional tech repair services with same-day turnaround and free pickup & delivery across all Sandton
            areas.
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
                Professional computer repair services in Sandton with same-day turnaround and warranty guarantee.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Sandton Areas</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Sandton CBD</li>
                <li>Morningside</li>
                <li>Bryanston</li>
                <li>Hyde Park</li>
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
                <li>Data Recovery</li>
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
                  Serving all of Sandton
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
