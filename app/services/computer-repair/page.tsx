import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, CheckCircle, Monitor, HardDrive, Cpu, Zap } from "lucide-react"
import Link from "next/link"
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/structured-data"

export const metadata = {
  title: "Computer Repair Services Johannesburg | Desktop PC Hardware Repair",
  description:
    "Professional desktop computer repair in Johannesburg. Hardware diagnostics, component replacement, performance optimization. Same-day service, 90-day warranty, free pickup.",
  keywords:
    "computer repair Johannesburg, desktop repair, PC repair, hardware diagnostics, motherboard repair, power supply replacement",
}

export default function ComputerRepairPage() {
  return (
    <div className="min-h-screen bg-background">
      <ServiceSchema
        serviceName="Computer Repair Services"
        description="Professional desktop computer repair services including hardware diagnostics, component replacement, and performance optimization in Johannesburg."
        provider="Johannesburg Tech Repair"
        areaServed={["Johannesburg", "Sandton", "Rosebank", "Fourways", "Randburg"]}
        url="https://johannesburgtechrepair.online/services/computer-repair"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://johannesburgtechrepair.online" },
          { name: "Services", url: "https://johannesburgtechrepair.online/#services" },
          { name: "Computer Repair", url: "https://johannesburgtechrepair.online/services/computer-repair" },
        ]}
      />

      {/* Header */}
    

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground">Professional Desktop Computer Repair</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Expert Computer Repair Services in
              <span className="text-primary block">Johannesburg</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              From hardware diagnostics to component replacements, our certified technicians provide comprehensive
              desktop computer repair services with same-day turnaround and professional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                Book Free Diagnosis
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent">
                <Phone className="w-5 h-5 mr-2" />
                Call (011) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Computer Repair Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Complete Desktop Computer Repair Solutions
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              We diagnose and repair all types of desktop computer issues, from simple software problems to complex
              hardware failures. Our expert technicians work on all major brands including Dell, HP, Lenovo, ASUS, and
              custom-built PCs.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Monitor className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">Hardware Diagnostics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm text-center">
                    Comprehensive testing to identify failing components and performance bottlenecks.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Cpu className="w-12 h-12 text-accent mx-auto mb-4" />
                  <CardTitle className="text-lg">Motherboard Repair</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm text-center">
                    Component-level repairs and motherboard replacements for all desktop models.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">Power Supply Issues</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm text-center">
                    PSU testing, replacement, and power-related troubleshooting services.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <HardDrive className="w-12 h-12 text-accent mx-auto mb-4" />
                  <CardTitle className="text-lg">Storage Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm text-center">
                    Hard drive replacement, SSD upgrades, and data migration services.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Service Descriptions */}
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Hardware Diagnostics & Testing</h3>
                  <p className="text-muted-foreground mb-4">
                    Our comprehensive diagnostic process identifies the root cause of your computer problems. We use
                    professional-grade testing equipment to check all major components including CPU, RAM, motherboard,
                    power supply, and storage devices.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Common issues we diagnose include random shutdowns, blue screen errors, boot failures, overheating,
                    and performance problems. Our detailed diagnostic report helps you make informed decisions about
                    repairs.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      CPU stress testing and thermal analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Memory (RAM) comprehensive testing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Hard drive health and performance checks
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Power supply voltage and stability testing
                    </li>
                  </ul>
                </div>
                <Card className="bg-card">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-semibold text-foreground mb-4">Free Diagnostic Service</h4>
                    <p className="text-muted-foreground mb-6">
                      We provide free diagnostic services for all desktop computers. Our technicians will identify the
                      problem and provide you with a detailed quote before any repair work begins.
                    </p>
                    <Button className="w-full bg-primary hover:bg-primary/90">Schedule Free Diagnosis</Button>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <Card className="bg-accent text-accent-foreground order-2 md:order-1">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-semibold mb-4">Performance Optimization</h4>
                    <p className="mb-6 opacity-90">
                      Is your computer running slowly? We can optimize your system for peak performance through hardware
                      upgrades, software cleanup, and system tuning.
                    </p>
                    <Button variant="secondary" className="w-full">
                      Learn About Upgrades
                    </Button>
                  </CardContent>
                </Card>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Component Replacement & Upgrades</h3>
                  <p className="text-muted-foreground mb-4">
                    We replace and upgrade all types of computer components using high-quality parts from trusted
                    manufacturers. Whether you need more RAM, a faster processor, or a larger hard drive, we can help
                    improve your computer's performance.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Our upgrade services include compatibility checking, professional installation, and system
                    optimization to ensure your new components work perfectly together.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Common Upgrades:</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• RAM memory upgrades</li>
                        <li>• SSD hard drive upgrades</li>
                        <li>• Graphics card replacement</li>
                        <li>• CPU processor upgrades</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Replacements:</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Power supply units</li>
                        <li>• Motherboard replacement</li>
                        <li>• Cooling fans and systems</li>
                        <li>• Optical drives (DVD/Blu-ray)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Computer Problems */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Common Desktop Computer Problems We Solve
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              Our experienced technicians have encountered and resolved thousands of computer issues. Here are some of
              the most common problems we fix daily.
            </p>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Monitor className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Computer Won't Turn On</h3>
                      <p className="text-muted-foreground mb-4">
                        When your computer doesn't respond to the power button, it could be a power supply failure,
                        motherboard issue, or faulty power button. We systematically test each component to identify the
                        exact cause.
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Common solutions:</strong> Power supply replacement, motherboard repair, power button
                        replacement, or cable reconnection.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Random Shutdowns and Restarts</h3>
                      <p className="text-muted-foreground mb-4">
                        Unexpected shutdowns can be caused by overheating, power supply issues, RAM problems, or
                        software conflicts. We perform comprehensive testing to determine the root cause.
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Common solutions:</strong> Cooling system cleaning, thermal paste replacement, power
                        supply testing, memory diagnostics, and malware removal.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <HardDrive className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Slow Performance and Freezing</h3>
                      <p className="text-muted-foreground mb-4">
                        A slow computer can significantly impact productivity. Common causes include insufficient RAM,
                        failing hard drives, malware infections, or outdated hardware struggling with modern software
                        demands.
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Common solutions:</strong> RAM upgrades, SSD installation, malware removal, system
                        optimization, and hardware upgrades.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Professional Computer Repair?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't let computer problems slow you down. Our expert technicians are ready to diagnose and fix your desktop
            computer quickly and professionally.
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

    </div>
  )
}
