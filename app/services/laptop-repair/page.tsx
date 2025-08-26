import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Clock, Shield, Truck, CheckCircle, Laptop, Monitor, HardDrive } from "lucide-react"
import Link from "next/link"
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/structured-data"

export const metadata = {
  title: "Professional Laptop Repair Services Johannesburg | Same-Day Screen Replacement",
  description:
    "Expert laptop repair in Johannesburg. Screen replacement, keyboard repair, battery issues, motherboard repair. 90-day warranty, same-day service, free pickup & delivery.",
  keywords:
    "laptop repair Johannesburg, laptop screen replacement, keyboard repair, battery replacement, motherboard repair, same day laptop repair",
}

export default function LaptopRepairPage() {
  return (
    <div className="min-h-screen bg-background">
      <ServiceSchema
        serviceName="Laptop Repair Services"
        description="Professional laptop repair services including screen replacement, keyboard repair, battery replacement, and performance optimization in Johannesburg."
        provider="Johannesburg Tech Repair"
        areaServed={["Johannesburg", "Sandton", "Rosebank", "Fourways", "Randburg"]}
        url="https://johannesburgtechrepair.online/services/laptop-repair"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://johannesburgtechrepair.online" },
          { name: "Services", url: "https://johannesburgtechrepair.online/#services" },
          { name: "Laptop Repair", url: "https://johannesburgtechrepair.online/services/laptop-repair" },
        ]}
      />

      {/* Header */}
  

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground">Professional Laptop Repair Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Expert Laptop Repair Services in
              <span className="text-primary block">Johannesburg</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              From cracked screens to keyboard malfunctions, our certified technicians provide comprehensive laptop
              repair services with same-day turnaround and a 90-day warranty guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                Book Free Diagnosis
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent">
                <Phone className="w-5 h-5 mr-2" />
                Call (075) 046-1725
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-card rounded-lg">
              <Shield className="w-8 h-8 text-accent mb-2" />
              <h3 className="font-semibold text-foreground mb-1">90-Day Warranty</h3>
              <p className="text-sm text-muted-foreground text-center">All repairs guaranteed</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-card rounded-lg">
              <Clock className="w-8 h-8 text-primary mb-2" />
              <h3 className="font-semibold text-foreground mb-1">Same-Day Service</h3>
              <p className="text-sm text-muted-foreground text-center">Most repairs completed today</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-card rounded-lg">
              <Truck className="w-8 h-8 text-accent mb-2" />
              <h3 className="font-semibold text-foreground mb-1">Free Pickup</h3>
              <p className="text-sm text-muted-foreground text-center">& delivery in Johannesburg</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-card rounded-lg">
              <CheckCircle className="w-8 h-8 text-primary mb-2" />
              <h3 className="font-semibold text-foreground mb-1">No-Fix, No-Fee</h3>
              <p className="text-sm text-muted-foreground text-center">Pay only if we fix it</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Laptop Problems */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              5 Common Laptop Problems We Fix the Same Day
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              Our expert technicians have seen it all. Here are the most common laptop issues we resolve quickly and
              efficiently in our Johannesburg repair center.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Monitor className="w-6 h-6 text-primary" />
                    Cracked or Black Laptop Screen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    A damaged laptop screen is one of the most common issues we see. Whether it's cracked from a drop,
                    showing black areas, or displaying strange colors, we can replace your screen with genuine parts.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <strong>Common causes:</strong> Drops, pressure on closed laptop, manufacturing defects, or
                    age-related wear.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Our solution:</strong> We stock screens for all major laptop brands including HP, Dell,
                    Lenovo, Acer, and ASUS. Most screen replacements are completed within 2-4 hours.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Laptop className="w-6 h-6 text-accent" />
                    Keyboard Not Working or Sticky Keys
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Laptop keyboards can fail due to liquid spills, dust accumulation, or worn-out key mechanisms. We
                    provide both individual key repairs and full keyboard replacements.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <strong>Common causes:</strong> Liquid spills, dust and debris, worn key switches, or connection
                    issues.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Our solution:</strong> Professional cleaning, individual key replacement, or complete
                    keyboard assembly replacement with genuine parts.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <HardDrive className="w-6 h-6 text-primary" />
                    Battery Won't Hold Charge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Laptop batteries degrade over time, leading to shorter usage periods or complete failure to charge.
                    We replace batteries with high-quality alternatives that often exceed original specifications.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <strong>Common causes:</strong> Age-related degradation, overcharging, extreme temperatures, or
                    manufacturing defects.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Our solution:</strong> Battery health diagnostics and replacement with premium cells that
                    come with a 12-month warranty.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Monitor className="w-6 h-6 text-accent" />
                    Overheating and Loud Fan Noise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Overheating laptops can cause performance issues, unexpected shutdowns, and permanent hardware
                    damage. We provide thorough cleaning and thermal paste replacement services.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <strong>Common causes:</strong> Dust buildup in fans, dried thermal paste, blocked air vents, or
                    failing cooling components.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Our solution:</strong> Complete disassembly, professional cleaning, thermal paste
                    replacement, and fan servicing or replacement.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Slow Performance and Freezing</h3>
                <p className="text-lg mb-6 opacity-90">
                  Is your laptop taking forever to start up or freezing during use? This could indicate hard drive
                  failure, insufficient RAM, malware infection, or software conflicts. Our comprehensive diagnostics
                  identify the root cause and provide targeted solutions.
                </p>
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                  Get Quick Diagnosis
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Laptop Repair Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Comprehensive Laptop Repair Services
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              We repair all laptop brands and models with genuine parts and expert craftsmanship.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Screen Replacement", description: "LCD, LED, OLED screen repairs for all laptop models" },
                { title: "Keyboard Repair", description: "Individual keys or complete keyboard replacement" },
                { title: "Battery Replacement", description: "High-quality battery replacements with warranty" },
                { title: "Motherboard Repair", description: "Component-level repairs and replacements" },
                { title: "Hard Drive Replacement", description: "SSD upgrades and data migration services" },
                { title: "RAM Upgrades", description: "Memory upgrades for improved performance" },
                { title: "Charging Port Repair", description: "DC jack and charging port replacements" },
                { title: "Fan & Cooling", description: "Overheating solutions and fan replacements" },
                { title: "Virus Removal", description: "Complete malware removal and system optimization" },
              ].map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Why Choose Johannesburg Tech Repair for Your Laptop?
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Certified Technicians</h3>
                  <p className="text-muted-foreground">
                    Our team consists of certified laptop repair specialists with over 10 years of combined experience.
                    We stay updated with the latest laptop technologies and repair techniques to provide you with the
                    best service possible.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Genuine Parts Only</h3>
                  <p className="text-muted-foreground">
                    We use only genuine manufacturer parts or high-quality OEM equivalents. This ensures your laptop
                    maintains its original performance and reliability. All parts come with our comprehensive warranty
                    coverage.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Fast Turnaround Times</h3>
                  <p className="text-muted-foreground">
                    Most laptop repairs are completed within 24-48 hours. For urgent repairs, we offer same-day service
                    for common issues like screen replacements and keyboard repairs. We understand how important your
                    laptop is to your daily routine.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Convenient Pickup & Delivery</h3>
                  <p className="text-muted-foreground">
                    We offer free pickup and delivery services across Johannesburg, including Sandton, Rosebank,
                    Fourways, and Randburg. Schedule a pickup online or by phone, and we'll collect your laptop from
                    your home or office at no extra charge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Fix Your Laptop?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a free diagnosis and quote today. Our expert technicians are ready to restore your laptop to perfect
            working condition.
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
              Call (075) 046-1725
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}

    </div>
  )
}
