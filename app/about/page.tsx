import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Wrench, Award, Users, Clock, Shield, Star } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
            <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
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

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                About Our Company
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold">Johannesburg's Most Trusted Tech Repair Experts</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                With over 10 years of experience, we've built our reputation on quality repairs, honest service, and
                customer satisfaction. From simple fixes to complex recoveries, we're here to get your technology
                working perfectly again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Get Free Quote</Button>
                <Button variant="outline" size="lg">
                  View Our Services
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/professional-tech-repair-workshop-with-modern-equi.png"
                alt="Our professional repair workshop"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                stat: "5,000+",
                label: "Happy Customers",
              },
              {
                icon: Clock,
                stat: "10+",
                label: "Years Experience",
              },
              {
                icon: Award,
                stat: "95%",
                label: "Success Rate",
              },
              {
                icon: Shield,
                stat: "90-Day",
                label: "Warranty",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-4xl font-bold text-primary">{item.stat}</CardTitle>
                  <CardDescription className="text-lg font-medium">{item.label}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Story</h2>
              <p className="text-xl text-muted-foreground">How we became Johannesburg's leading tech repair service</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Founded on Trust & Quality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Started in 2014 by a team of passionate technicians, Johannesburg Tech Repair was born from a simple
                  mission: provide honest, reliable, and affordable tech repair services to our community.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  What began as a small workshop has grown into Johannesburg's most trusted repair service, handling
                  everything from simple screen replacements to complex data recovery operations.
                </p>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To provide fast, reliable, and affordable tech repair services while building lasting relationships
                    with our customers through honest communication and quality workmanship.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Meet Our Expert Team</h2>
            <p className="text-xl text-muted-foreground">Certified technicians with years of experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Johnson",
                role: "Lead Technician & Owner",
                experience: "12+ Years Experience",
                specialties: ["Computer Repair", "Data Recovery", "Network Setup"],
                image: "/professional-male-technician-with-computer-repair-.png",
              },
              {
                name: "Sarah Williams",
                role: "Mobile Device Specialist",
                experience: "8+ Years Experience",
                specialties: ["iPhone Repair", "Android Repair", "Tablet Repair"],
                image: "/professional-female-technician-working-on-mobile-d.png",
              },
              {
                name: "David Chen",
                role: "Data Recovery Expert",
                experience: "10+ Years Experience",
                specialties: ["Hard Drive Recovery", "SSD Repair", "RAID Systems"],
                image: "/placeholder-ykal2.png",
              },
            ].map((member, index) => (
              <Card key={index}>
                <CardHeader className="text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">{member.role}</CardDescription>
                  <Badge variant="secondary">{member.experience}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Why Customers Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The values and principles that make us Johannesburg's preferred tech repair service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Guaranteed Quality",
                description: "90-day warranty on all repairs with genuine parts and professional workmanship",
              },
              {
                icon: Clock,
                title: "Fast Turnaround",
                description: "Most repairs completed within 24-48 hours, with same-day service available",
              },
              {
                icon: Award,
                title: "Expert Technicians",
                description: "Certified professionals with 10+ years experience in all major brands",
              },
              {
                icon: Users,
                title: "Customer First",
                description: "Honest pricing, clear communication, and personalized service for every customer",
              },
              {
                icon: Star,
                title: "Proven Track Record",
                description: "5,000+ satisfied customers and 95% success rate across all repair types",
              },
              {
                icon: Wrench,
                title: "Full Service Shop",
                description: "Complete repair facility with advanced tools and genuine replacement parts",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold">Experience the Difference</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their tech repair needs
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
              Visit Our Workshop
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
