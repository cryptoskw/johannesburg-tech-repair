import type { Metadata } from "next"
import { MetaTags } from "@/components/seo/meta-tags"
import { StructuredData } from "@/components/seo/structured-data"
import { ConversionTracking } from "@/components/analytics/conversion-tracking"
import { TrackedButton } from "@/components/ui/tracked-button"
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Johannesburg Tech Repair | Free Quotes & Same-Day Service",
  description:
    "Contact Johannesburg Tech Repair for expert computer and laptop repairs. Free quotes, same-day service, and 90-day warranty. Call now or request a callback.",
  keywords:
    "contact tech repair johannesburg, computer repair quotes, laptop repair contact, same day repair johannesburg",
}

export default function ContactPage() {
  return (
    <>
      <MetaTags
        title="Contact Us - Johannesburg Tech Repair"
        description="Contact Johannesburg Tech Repair for expert computer and laptop repairs. Free quotes, same-day service, and 90-day warranty."
        url="/contact"
      />
      <StructuredData type="ContactPage" />
      <ConversionTracking />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get Your Free Quote Today</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert tech repair services with same-day turnaround and 90-day warranty
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <TrackedButton
                  href="tel:+27750461725"
                  variant="default"
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  eventName="phone_call_contact_hero"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 075 046 1725
                </TrackedButton>
                <TrackedButton href="#contact-form" variant="outline" size="lg" eventName="scroll_to_form">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Request Callback
                </TrackedButton>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <p className="text-muted-foreground">075 046 1725</p>
                <p className="text-sm text-muted-foreground">Available 24/7</p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-muted-foreground">info@fixmygadget.co.za</p>
                <p className="text-sm text-muted-foreground">Response within 1 hour</p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Location</h3>
                <p className="text-muted-foreground">Johannesburg CBD</p>
                <p className="text-sm text-muted-foreground">Free pickup & delivery</p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Hours</h3>
                <p className="text-muted-foreground">Mon-Fri: 8AM-6PM</p>
                <p className="text-sm text-muted-foreground">Emergency: 24/7</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto" id="contact-form">
              <div className="bg-card border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Request Your Free Quote</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Service Needed</label>
                    <select className="w-full px-4 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option>Select a service...</option>
                      <option>Laptop Repair</option>
                      <option>Computer Repair</option>
                      <option>Virus Removal</option>
                      <option>Data Recovery</option>
                      <option>Same-Day IT Support</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Describe the Problem</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Please describe what's wrong with your device..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Contact Method</label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input type="radio" name="contact" value="phone" className="mr-2" />
                        Phone Call
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="contact" value="email" className="mr-2" />
                        Email
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="contact" value="whatsapp" className="mr-2" />
                        WhatsApp
                      </label>
                    </div>
                  </div>

                  <TrackedButton
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                    size="lg"
                    eventName="contact_form_submit"
                  >
                    Get My Free Quote
                  </TrackedButton>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="bg-muted/50 py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold">90-Day Warranty</h3>
                <p className="text-sm text-muted-foreground">On all repairs</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold">Same-Day Service</h3>
                <p className="text-sm text-muted-foreground">Most repairs completed today</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold">Free Pickup & Delivery</h3>
                <p className="text-sm text-muted-foreground">Within Johannesburg</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold">No Fix, No Fee</h3>
                <p className="text-sm text-muted-foreground">Guaranteed satisfaction</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
