import type { Metadata } from "next"
import { MetaTags } from "@/components/seo/meta-tags"
import { StructuredData } from "@/components/seo/structured-data"
import { TrackedButton } from "@/components/ui/tracked-button"
import { Shield, Users, Award, Clock, CheckCircle, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Johannesburg Tech Repair | Expert Computer & Laptop Repair",
  description:
    "Learn about Johannesburg Tech Repair - your trusted local experts for computer and laptop repairs. 10+ years experience, certified technicians, and 90-day warranty.",
  keywords:
    "about johannesburg tech repair, computer repair company, laptop repair experts, certified technicians johannesburg",
}

export default function AboutPage() {
  return (
    <>
      <MetaTags
        title="About Us - Johannesburg Tech Repair"
        description="Learn about Johannesburg Tech Repair - your trusted local experts for computer and laptop repairs with 10+ years experience."
        url="/about"
      />
      <StructuredData type="AboutPage" />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Your Trusted Tech Repair Experts</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Serving Johannesburg with professional computer and laptop repair services since 2014
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                  <p className="text-muted-foreground mb-4">
                    Founded in 2014, Johannesburg Tech Repair began as a small family business with a simple mission: to
                    provide honest, reliable, and affordable tech repair services to the people of Johannesburg.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    What started as a one-person operation has grown into Johannesburg's most trusted tech repair
                    service, with thousands of satisfied customers and a reputation built on quality workmanship and
                    exceptional customer service.
                  </p>
                  <p className="text-muted-foreground">
                    Today, we continue to uphold the same values that founded our company: integrity, expertise, and a
                    genuine commitment to helping our customers get back to what matters most.
                  </p>
                </div>
                <div className="bg-muted/50 p-8 rounded-lg">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">10+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                      <div className="text-sm text-muted-foreground">Repairs Completed</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">98%</div>
                      <div className="text-sm text-muted-foreground">Success Rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">What Sets Us Apart</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Trusted & Reliable</h3>
                  <p className="text-muted-foreground text-sm">
                    Licensed, insured, and committed to honest business practices with transparent pricing.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Expert Technicians</h3>
                  <p className="text-muted-foreground text-sm">
                    Certified professionals with extensive experience in all major brands and operating systems.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Quality Guarantee</h3>
                  <p className="text-muted-foreground text-sm">
                    90-day warranty on all repairs and a no-fix-no-fee policy for your peace of mind.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Fast Turnaround</h3>
                  <p className="text-muted-foreground text-sm">
                    Same-day service for most repairs with free pickup and delivery in Johannesburg.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Expertise</h2>
              <p className="text-muted-foreground">
                We specialize in comprehensive tech repair services for both individuals and businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Laptop Repair</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Screen replacements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Keyboard repairs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Battery replacements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Motherboard repairs
                  </li>
                </ul>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Computer Repair</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Hardware diagnostics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Component upgrades
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    System optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Custom builds
                  </li>
                </ul>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Data & Security</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Virus removal
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Data recovery
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Security setup
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Backup solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Excellent service! They fixed my laptop screen the same day and the price was very reasonable. Highly
                  recommend for anyone needing tech repairs in Johannesburg."
                </p>
                <div className="font-semibold">Sarah M.</div>
                <div className="text-sm text-muted-foreground">Sandton</div>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Professional and trustworthy. They recovered all my important files when my hard drive crashed. The
                  90-day warranty gave me peace of mind."
                </p>
                <div className="font-semibold">David K.</div>
                <div className="text-sm text-muted-foreground">Rosebank</div>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Fast, reliable, and honest pricing. They explained everything clearly and had my computer running
                  like new. Will definitely use them again."
                </p>
                <div className="font-semibold">Lisa R.</div>
                <div className="text-sm text-muted-foreground">Fourways</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-8">
                Experience the difference that expert tech repair can make. Contact us today for your free quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <TrackedButton
                  href="tel:+27123456789"
                  variant="default"
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  eventName="phone_call_about_cta"
                >
                  Call Now: 012 345 6789
                </TrackedButton>
                <TrackedButton href="/contact" variant="outline" size="lg" eventName="contact_page_about_cta">
                  Get Free Quote
                </TrackedButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
