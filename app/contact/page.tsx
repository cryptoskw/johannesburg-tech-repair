import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Wrench, Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Wrench className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl">Johannesburg Tech Repair</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">
              About
            </Link>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Quote
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:underline mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold">Contact Us Today</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to fix your device? Get a free quote, schedule a repair, or visit our workshop. We're here to help
              with all your tech repair needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Phone,
                title: "Call Us",
                info: "075 046 1725",
                description: "Speak directly with our team",
                action: "Call Now",
              },
              {
                icon: MessageSquare,
                title: "WhatsApp",
                info: "075 046 1725",
                description: "Quick questions and quotes",
                action: "Message Us",
              },
              {
                icon: Mail,
                title: "Email",
                info: "info@fixmygaget.co.za",
                description: "Detailed inquiries welcome",
                action: "Send Email",
              },
              {
                icon: Calendar,
                title: "Book Appointment",
                info: "Online Scheduling",
                description: "Reserve your repair slot",
                action: "Book Now",
              },
            ].map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <method.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription className="font-medium text-foreground">{method.info}</CardDescription>
                  <CardDescription className="text-sm">{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Get Free Quote</CardTitle>
                <CardDescription className="text-base">
                  Tell us about your device issue and we'll provide a free estimate
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium block mb-2">First Name *</label>
                    <input
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-2">Last Name *</label>
                    <input
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      placeholder="Smith"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium block mb-2">Phone Number *</label>
                    <input
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      placeholder="+27 11 123 4567"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-2">Email Address *</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">Device Type *</label>
                  <select className="w-full px-3 py-2 border border-input rounded-md bg-background" required>
                    <option value="">Select your device</option>
                    <option value="laptop">Laptop</option>
                    <option value="desktop">Desktop Computer</option>
                    <option value="smartphone">Smartphone</option>
                    <option value="tablet">Tablet</option>
                    <option value="gaming">Gaming Console</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">Device Brand & Model</label>
                  <input
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    placeholder="e.g., MacBook Pro 2020, Samsung Galaxy S21"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">Issue Description *</label>
                  <textarea
                    className="w-full px-3 py-2 border border-input rounded-md bg-background h-32 resize-none"
                    placeholder="Please describe the problem you're experiencing with your device..."
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">Preferred Contact Method</label>
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

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                  Get Free Quote
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We'll respond within 2 hours during business hours
                </p>
              </CardContent>
            </Card>

            {/* Contact Information & Map */}
            <div className="space-y-8">
              {/* Workshop Location */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span>Visit Our Workshop</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium">Johannesburg Tech Repair</p>
                    <p className="text-muted-foreground">123 Main Street</p>
                    <p className="text-muted-foreground">Johannesburg CBD, 2001</p>
                    <p className="text-muted-foreground">South Africa</p>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-medium mb-2">Directions:</p>
                    <p className="text-sm text-muted-foreground">
                      Located in the heart of Johannesburg CBD, easily accessible by public transport. Parking available
                      on Main Street and surrounding areas.
                    </p>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
                      { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
                      { day: "Sunday", hours: "Closed" },
                    ].map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-border last:border-0"
                      >
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm font-medium text-blue-600">Emergency Repairs</p>
                    <p className="text-xs text-muted-foreground">
                      After-hours emergency service available by appointment
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">075 046 1725</p>
                      <p className="text-sm text-muted-foreground">Call or WhatsApp</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">info@fixmygaget.co.za</p>
                      <p className="text-sm text-muted-foreground">Email us anytime</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm font-medium mb-2">Response Times:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Phone calls: Immediate during business hours</li>
                      <li>• WhatsApp: Within 30 minutes</li>
                      <li>• Email: Within 2 hours</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long do repairs typically take?",
                answer:
                  "Most repairs are completed within 24-48 hours. Simple fixes like screen replacements can often be done same-day.",
              },
              {
                question: "Do you offer a warranty on repairs?",
                answer: "Yes! We provide a 90-day warranty on all repairs, covering both parts and labor.",
              },
              {
                question: "How much does a diagnostic cost?",
                answer:
                  "Diagnostics are completely free! We'll assess your device and provide a detailed quote at no charge.",
              },
              {
                question: "Do you repair all device brands?",
                answer: "We repair all major brands including Apple, Samsung, HP, Dell, Lenovo, and many others.",
              },
              {
                question: "Can you recover data from a broken device?",
                answer:
                  "Yes, we specialize in data recovery with a 95% success rate. We offer a 'no data, no fee' guarantee.",
              },
              {
                question: "Do you offer pickup and delivery?",
                answer: "Yes, we offer pickup and delivery service within Johannesburg for an additional fee.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Wrench className="h-6 w-6 text-blue-600" />
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
                <li>075 046 1725</li>
                <li>info@fixmygaget.co.za</li>
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
