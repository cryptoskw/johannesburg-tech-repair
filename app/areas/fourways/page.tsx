import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, CheckCircle, Star, MapPin, Home, Users } from "lucide-react"
import Link from "next/link"
import { BreadcrumbSchema } from "@/components/seo/structured-data"

export const metadata = {
  title: "Computer Repair Fourways | Laptop & Desktop Repair Services Fourways Mall",
  description:
    "Expert computer and laptop repair in Fourways, Johannesburg. Serving Fourways Mall, Lonehill, Dainfern. Same-day service, free pickup & delivery. Family-friendly tech support.",
  keywords:
    "computer repair Fourways, laptop repair Fourways Mall, tech support Lonehill, Dainfern computer repair, family computer repair Fourways",
}

export default function FourwaysRepairPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://johannesburgtechrepair.online" },
          { name: "Service Areas", url: "https://johannesburgtechrepair.online/#areas" },
          { name: "Fourways", url: "https://johannesburgtechrepair.online/areas/fourways" },
        ]}
      />

      {/* Header */}
     

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground">Serving Fourways Families Since 2020</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Family-Friendly Computer Repair in
              <span className="text-primary block">Fourways, Johannesburg</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional laptop and desktop repair services for Fourways families and businesses. Convenient location
              near Fourways Mall with same-day repairs and free pickup & delivery across the northern suburbs.
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
              <span>Serving Fourways, Lonehill, Dainfern, Broadacres & surrounding areas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Family-Focused Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Tech Support for Fourways Families
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              We understand that technology is essential for modern family life - from work laptops to kids' school
              computers and family entertainment systems.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-primary" />
                    Family Computer Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    From setting up parental controls to fixing gaming computers, we provide comprehensive tech support
                    that keeps the whole family connected and productive.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Kids' laptop repairs for school</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Home office setup and support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Gaming computer optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Family network and WiFi setup</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Home className="w-6 h-6 text-accent" />
                    Convenient Home Service
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Busy family schedule? We offer free pickup and delivery service throughout Fourways, so you don't
                    have to disrupt your day to get your tech fixed.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">Free pickup from your home</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">Evening and weekend appointments</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">Same-day service available</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">Family-friendly pricing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Multi-Device Family Discounts</h3>
                <p className="text-lg mb-6 opacity-90">
                  Need repairs for multiple family devices? We offer special discounts when you bring us more than one
                  computer or laptop.
                </p>
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                  Get Family Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fourways Area Coverage */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Fourways & Northern Suburbs Coverage
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Fourways",
                "Lonehill",
                "Dainfern",
                "Broadacres",
                "Bryanston East",
                "Paulshof",
                "Sunninghill",
                "Douglasdale",
              ].map((area, index) => (
                <Card key={index} className="text-center p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-2">
                    <Home className="w-5 h-5 text-primary mx-auto mb-2" />
                    <span className="text-sm font-medium text-foreground">{area}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Family Tech Issues */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Common Tech Issues We Fix for Fourways Families
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              Based on our experience serving families in the Fourways area, these are the most frequent tech problems
              we encounter.
            </p>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🎮</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Gaming Computer Problems</h3>
                      <p className="text-muted-foreground mb-4">
                        Many Fourways families have gaming setups for entertainment and education. We fix overheating
                        issues, upgrade graphics cards, and optimize gaming performance for smooth gameplay.
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Common solutions:</strong> Graphics card upgrades, cooling system improvements, RAM
                        increases, game optimization
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📚</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">School Laptop Repairs</h3>
                      <p className="text-muted-foreground mb-4">
                        With many schools requiring laptops for learning, we see frequent repairs for student devices.
                        From broken screens to keyboard issues, we get kids back to learning quickly.
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Student-friendly service:</strong> Fast turnaround, educational discounts, data backup
                        to prevent homework loss
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🏠</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Home Office Setup Issues</h3>
                      <p className="text-muted-foreground mb-4">
                        With remote work becoming common in Fourways, we help families set up efficient home offices.
                        This includes network optimization, printer setup, and multi-monitor configurations.
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Home office services:</strong> WiFi optimization, printer installation, dual monitor
                        setup, video conferencing solutions
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
              What Fourways Families Say
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
                    "Perfect for busy families! They picked up our kids' laptops and had them back the same day. The
                    children didn't miss any school work. Highly recommend!"
                  </p>
                  <div className="font-semibold text-foreground">Michelle R.</div>
                  <div className="text-sm text-muted-foreground">Parent, Lonehill</div>
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
                    "Great service for our gaming computer. They upgraded the graphics card and now it runs all the
                    latest games perfectly. Kids are thrilled!"
                  </p>
                  <div className="font-semibold text-foreground">Peter K.</div>
                  <div className="text-sm text-muted-foreground">Dainfern Resident</div>
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
                    "They set up our entire home office network and fixed connectivity issues. Professional service with
                    great family pricing."
                  </p>
                  <div className="font-semibold text-foreground">Susan M.</div>
                  <div className="text-sm text-muted-foreground">Work-from-home Mom, Broadacres</div>
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
                    "Excellent virus removal service. They cleaned up our family computer and taught us how to keep it
                    safe. Very patient and educational."
                  </p>
                  <div className="font-semibold text-foreground">David L.</div>
                  <div className="text-sm text-muted-foreground">Fourways Family</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Family Tech Support in Fourways?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            From kids' school laptops to family gaming computers, we provide reliable tech support that keeps your
            family connected. Free pickup & delivery available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Book Family Consultation
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

    </div>
  )
}
