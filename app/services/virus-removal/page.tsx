import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Shield, CheckCircle, AlertTriangle, Lock, Scan } from "lucide-react"
import Link from "next/link"
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/structured-data"

export const metadata = {
  title: "Virus Removal Services Johannesburg | Malware & Spyware Removal",
  description:
    "Professional virus removal and malware cleaning in Johannesburg. Complete system security optimization, spyware removal, ransomware recovery. Same-day service available.",
  keywords:
    "virus removal Johannesburg, malware removal, spyware cleaning, ransomware recovery, computer security, antivirus installation",
}

export default function VirusRemovalPage() {
  return (
    <div className="min-h-screen bg-background">
      <ServiceSchema
        serviceName="Virus Removal Services"
        description="Professional virus and malware removal services including complete system cleaning, security optimization, and protection setup in Johannesburg."
        provider="Johannesburg Tech Repair"
        areaServed={["Johannesburg", "Sandton", "Rosebank", "Fourways", "Randburg"]}
        url="https://johannesburgtechrepair.online/services/virus-removal"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://johannesburgtechrepair.online" },
          { name: "Services", url: "https://johannesburgtechrepair.online/#services" },
          { name: "Virus Removal", url: "https://johannesburgtechrepair.online/services/virus-removal" },
        ]}
      />

      {/* Header */}
     

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-destructive text-destructive-foreground">Emergency Virus Removal Service</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Professional Virus Removal &<span className="text-primary block">Malware Cleaning in Johannesburg</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Is your computer infected with viruses, malware, or ransomware? Our certified security specialists provide
              complete malware removal and system protection services with same-day turnaround.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-lg px-8 py-4">
                Emergency Virus Removal
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent">
                <Phone className="w-5 h-5 mr-2" />
                Call (075) 046-1725
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Warning Signs Your Computer is Infected
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              Don't ignore these common symptoms of malware infection. Early detection and removal can prevent data loss
              and system damage.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-destructive/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-destructive">
                    <AlertTriangle className="w-6 h-6" />
                    Immediate Action Required
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Pop-up ads appearing constantly, even when not browsing
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Browser homepage changed without your permission</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Files encrypted or inaccessible with ransom demands</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Unknown programs running or installed automatically</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-accent">
                    <Scan className="w-6 h-6" />
                    Performance Issues
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Computer running extremely slowly or freezing frequently
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">High CPU usage with no apparent cause</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Internet connection slower than usual</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Antivirus software disabled or not working properly</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-destructive text-destructive-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Don't Wait - Act Now!</h3>
                <p className="text-lg mb-6 opacity-90">
                  Malware can steal your personal information, corrupt your files, and damage your system permanently.
                  The longer you wait, the more damage it can cause.
                </p>
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                  Get Emergency Help Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Virus Removal Process */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Our Comprehensive Virus Removal Process
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              We use a systematic approach to completely eliminate all types of malware while protecting your valuable
              data.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Initial Assessment & Data Backup</h3>
                  <p className="text-muted-foreground">
                    We start by assessing the extent of the infection and immediately backing up your important files to
                    prevent data loss. Our technicians identify the type of malware and create a customized removal
                    strategy.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Deep System Scan & Malware Detection</h3>
                  <p className="text-muted-foreground">
                    Using professional-grade security tools, we perform comprehensive scans to detect all forms of
                    malware including viruses, trojans, spyware, adware, rootkits, and ransomware. We scan system files,
                    registry entries, and hidden locations where malware typically hides.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Complete Malware Removal</h3>
                  <p className="text-muted-foreground">
                    We manually remove all detected threats and clean infected system files. This includes removing
                    malicious registry entries, deleting infected files, and repairing system damage caused by the
                    malware.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">System Optimization & Security Setup</h3>
                  <p className="text-muted-foreground">
                    After removal, we optimize your system for better performance and install robust security software.
                    We configure firewalls, update operating system security patches, and set up real-time protection to
                    prevent future infections.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Final Testing & Prevention Education</h3>
                  <p className="text-muted-foreground">
                    We thoroughly test your system to ensure all malware has been eliminated and your computer is
                    running optimally. We also provide you with essential tips and best practices to avoid future
                    infections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Malware We Remove */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Types of Malware We Remove
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              Our experts are trained to handle all types of malicious software threats.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                    Viruses & Worms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Self-replicating programs that spread through files and networks, causing system damage and data
                    corruption.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Lock className="w-6 h-6 text-destructive" />
                    Ransomware
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Malicious software that encrypts your files and demands payment for decryption keys.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Scan className="w-6 h-6 text-accent" />
                    Spyware & Adware
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Programs that secretly monitor your activities and display unwanted advertisements.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-primary" />
                    Trojans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Malicious programs disguised as legitimate software that provide unauthorized access to your system.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                    Rootkits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Stealthy malware that hides deep in your system and provides persistent unauthorized access.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Scan className="w-6 h-6 text-accent" />
                    Browser Hijackers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Malware that modifies browser settings and redirects you to malicious or unwanted websites.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              How to Prevent Future Malware Infections
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              Prevention is always better than cure. Follow these expert tips to keep your computer safe from malware.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Keep Software Updated</h4>
                    <p className="text-muted-foreground text-sm">
                      Regularly update your operating system, browsers, and software to patch security vulnerabilities.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Use Reliable Antivirus</h4>
                    <p className="text-muted-foreground text-sm">
                      Install reputable antivirus software with real-time protection and keep it updated.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Be Cautious with Email</h4>
                    <p className="text-muted-foreground text-sm">
                      Don't open suspicious email attachments or click links from unknown senders.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Safe Browsing Habits</h4>
                    <p className="text-muted-foreground text-sm">
                      Avoid suspicious websites and only download software from trusted sources.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Regular Backups</h4>
                    <p className="text-muted-foreground text-sm">
                      Backup important files regularly to protect against ransomware and data loss.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Enable Firewall</h4>
                    <p className="text-muted-foreground text-sm">
                      Keep your firewall enabled to block unauthorized network access attempts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-destructive text-destructive-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Computer Infected? Get Help Now!</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't let malware compromise your data and privacy. Our virus removal experts are standing by to clean your
            system and restore your security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Emergency Virus Removal
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-destructive-foreground text-destructive-foreground hover:bg-destructive-foreground hover:text-destructive bg-transparent"
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
