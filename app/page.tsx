import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Shield, Truck, CheckCircle, Star, Laptop, Monitor, ShieldCheck } from "lucide-react"
import { LocalBusinessSchema } from "@/components/seo/structured-data"
import { PhoneButton } from "@/components/ui/phone-button"
import { TrackedButton } from "@/components/ui/tracked-button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <LocalBusinessSchema
        name="Johannesburg Tech Repair"
        description="Professional computer and laptop repair services in Johannesburg with same-day turnaround, 90-day warranty, and free pickup & delivery."
        address={{
          addressLocality: "Johannesburg",
          addressRegion: "Gauteng",
          addressCountry: "ZA",
        }}
        telephone="(011) 123-4567"
        email="info@johannesburgtechrepair.online"
        url="https://johannesburgtechrepair.online"
        serviceArea={["Johannesburg", "Sandton", "Rosebank", "Fourways", "Randburg"]}
        services={[
          "Laptop Repair",
          "Computer Repair",
          "Virus Removal",
          "Data Recovery",
          "Screen Replacement",
          "Hardware Upgrades",
        ]}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-accent text-accent-foreground">Johannesburg's #1 Tech Repair Experts</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Your Trusted Tech Repair
            <span className="text-primary block">Experts in Johannesburg</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional computer and laptop repair services with same-day turnaround, 90-day warranty, and free pickup
            & delivery across{" "}
            <Link href="/areas/sandton" className="text-primary hover:underline">
              Sandton
            </Link>
            ,{" "}
            <Link href="/areas/rosebank" className="text-primary hover:underline">
              Rosebank
            </Link>
            , and{" "}
            <Link href="/areas/fourways" className="text-primary hover:underline">
              Fourways
            </Link>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <TrackedButton
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-4"
              eventName="quote_request"
              eventLabel="Hero CTA - Book Free Diagnosis"
              asChild
            >
              <Link href="/contact">Book Free Diagnosis</Link>
            </TrackedButton>
            <PhoneButton
              phoneNumber="(011) 123-4567"
              size="lg"
              className="text-lg px-8 py-4 bg-transparent border border-input hover:bg-accent hover:text-accent-foreground"
            >
              Call (011) 123-4567
            </PhoneButton>
          </div>

          <div className="mb-12">
            <img
              src="/professional-tech-repair-workshop-with-computers-a.png"
              alt="Professional tech repair workshop in Johannesburg"
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">90-Day Warranty</h3>
              <p className="text-sm text-muted-foreground text-center">All repairs guaranteed</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Same-Day Repairs</h3>
              <p className="text-sm text-muted-foreground text-center">Most issues fixed today</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                <Truck className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Free Pickup</h3>
              <p className="text-sm text-muted-foreground text-center">& delivery service</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">No-Fix, No-Fee</h3>
              <p className="text-sm text-muted-foreground text-center">Pay only if we fix it</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Expert Repair Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From hardware repairs to virus removal, we handle all your tech problems with expertise and care.
              <Link href="/about" className="text-primary hover:underline ml-1">
                Learn more about our team
              </Link>
              .
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img
                    src="/laptop-repair-service-with-broken-screen-being-fix.png"
                    alt="Laptop repair services"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Laptop className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Laptop Repair</h3>
                <p className="text-muted-foreground mb-4">
                  Screen replacement, keyboard repair, battery issues, and more. We service all major brands including
                  Dell, HP, Lenovo, and Apple.
                </p>
                <TrackedButton
                  variant="outline"
                  className="w-full bg-transparent"
                  eventName="service_interest"
                  eventLabel="Laptop Repair"
                  asChild
                >
                  <Link href="/services/laptop-repair">Learn More</Link>
                </TrackedButton>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img
                    src="/desktop-computer-repair-with-motherboard-and-compo.png"
                    alt="Computer repair services"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Computer Repair</h3>
                <p className="text-muted-foreground mb-4">
                  Hardware diagnostics, component replacement, performance optimization. Serving businesses and homes
                  across{" "}
                  <Link href="/areas/sandton" className="text-primary hover:underline">
                    Sandton
                  </Link>{" "}
                  and surrounding areas.
                </p>
                <TrackedButton
                  variant="outline"
                  className="w-full bg-transparent"
                  eventName="service_interest"
                  eventLabel="Computer Repair"
                  asChild
                >
                  <Link href="/services/computer-repair">Learn More</Link>
                </TrackedButton>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img
                    src="/computer-security-virus-removal-antivirus-software.png"
                    alt="Virus removal services"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Virus Removal</h3>
                <p className="text-muted-foreground mb-4">
                  Complete malware removal and system security optimization. We also provide ongoing security advice to
                  prevent future infections.
                </p>
                <TrackedButton
                  variant="outline"
                  className="w-full bg-transparent"
                  eventName="service_interest"
                  eventLabel="Virus Removal"
                  asChild
                >
                  <Link href="/services/virus-removal">Learn More</Link>
                </TrackedButton>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              We also offer{" "}
              <Link href="/services/data-recovery" className="text-primary hover:underline">
                data recovery
              </Link>
              , hardware upgrades, and{" "}
              <Link href="/contact" className="text-primary hover:underline">
                same-day IT support
              </Link>{" "}
              for businesses.
            </p>
            <TrackedButton variant="outline" eventName="view_all_services" eventLabel="View All Services" asChild>
              <Link href="/services">View All Services</Link>
            </TrackedButton>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Service Areas Across Johannesburg</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide free pickup and delivery across all major Johannesburg areas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="/sandton-business-district-skyline-johannesburg.png"
                  alt="Sandton area"
                  className="w-full h-24 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">Sandton</h3>
                <p className="text-muted-foreground mb-4">
                  Serving the business hub with corporate IT support and personal device repairs.
                </p>
                <Link href="/areas/sandton" className="text-primary hover:underline">
                  Learn about Sandton services →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="/rosebank-shopping-area-johannesburg.png"
                  alt="Rosebank area"
                  className="w-full h-24 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">Rosebank</h3>
                <p className="text-muted-foreground mb-4">
                  Quick repairs for residents and businesses in the Rosebank area.
                </p>
                <Link href="/areas/rosebank" className="text-primary hover:underline">
                  Learn about Rosebank services →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="/fourways-residential-area-johannesburg.png"
                  alt="Fourways area"
                  className="w-full h-24 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">Fourways</h3>
                <p className="text-muted-foreground mb-4">
                  Family-friendly tech support for the growing Fourways community.
                </p>
                <Link href="/areas/fourways" className="text-primary hover:underline">
                  Learn about Fourways services →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-muted-foreground">4.9/5 from 200+ reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Excellent service! They fixed my laptop screen the same day and the warranty gave me peace of mind.
                  The{" "}
                  <Link href="/services/laptop-repair" className="text-primary hover:underline">
                    laptop repair service
                  </Link>{" "}
                  was professional and affordable."
                </p>
                <div className="font-semibold text-foreground">Sarah M.</div>
                <div className="text-sm text-muted-foreground">
                  <Link href="/areas/sandton" className="hover:underline">
                    Sandton
                  </Link>
                </div>
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
                  "Professional and honest. They diagnosed the issue quickly and the free pickup service was convenient.
                  Highly recommend their{" "}
                  <Link href="/services/computer-repair" className="text-primary hover:underline">
                    computer repair
                  </Link>{" "}
                  services."
                </p>
                <div className="font-semibold text-foreground">Michael K.</div>
                <div className="text-sm text-muted-foreground">
                  <Link href="/areas/rosebank" className="hover:underline">
                    Rosebank
                  </Link>
                </div>
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
                  "Best tech repair in Joburg! Fixed my computer virus issue and it's running like new. Their{" "}
                  <Link href="/services/virus-removal" className="text-primary hover:underline">
                    virus removal
                  </Link>{" "}
                  service is top-notch."
                </p>
                <div className="font-semibold text-foreground">Lisa T.</div>
                <div className="text-sm text-muted-foreground">
                  <Link href="/areas/fourways" className="hover:underline">
                    Fourways
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Fix Your Tech Problems?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a free diagnosis today. Our expert technicians are standing by to help with all your repair needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedButton
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-4"
              eventName="quote_request"
              eventLabel="Bottom CTA - Book Free Diagnosis"
              asChild
            >
              <Link href="/contact">Book Free Diagnosis</Link>
            </TrackedButton>
            <PhoneButton
              phoneNumber="(011) 123-4567"
              size="lg"
              className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Call (011) 123-4567
            </PhoneButton>
          </div>
        </div>
      </section>
    </div>
  )
}
