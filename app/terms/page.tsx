import type { Metadata } from "next"
import { MetaTags } from "@/components/seo/meta-tags"

export const metadata: Metadata = {
  title: "Terms of Service - Johannesburg Tech Repair",
  description:
    "Terms of service for Johannesburg Tech Repair. Read our service terms, warranty information, and customer responsibilities.",
  robots: "noindex, nofollow",
}

export default function TermsPage() {
  return (
    <>
      <MetaTags
        title="Terms of Service - Johannesburg Tech Repair"
        description="Terms of service for Johannesburg Tech Repair. Read our service terms, warranty information, and customer responsibilities."
        url="/terms"
        noIndex={true}
      />

      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4">
                  By using our services, you agree to be bound by these Terms of Service. If you do not agree to these
                  terms, please do not use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Services Provided</h2>
                <p className="mb-4">
                  Johannesburg Tech Repair provides computer and laptop repair services including but not limited to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Hardware diagnostics and repair</li>
                  <li>Software troubleshooting and installation</li>
                  <li>Virus and malware removal</li>
                  <li>Data recovery services</li>
                  <li>System optimization and upgrades</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Warranty and Guarantee</h2>
                <h3 className="text-lg font-semibold mb-2">90-Day Warranty</h3>
                <p className="mb-4">We provide a 90-day warranty on all repair work performed. This warranty covers:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Defects in workmanship</li>
                  <li>Failure of replaced parts under normal use</li>
                  <li>Recurrence of the original problem we repaired</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">No Fix, No Fee Policy</h3>
                <p className="mb-4">
                  If we cannot fix your device, you pay nothing for the diagnostic service. This applies to hardware
                  issues that cannot be resolved.
                </p>

                <h3 className="text-lg font-semibold mb-2">Warranty Exclusions</h3>
                <p className="mb-4">Our warranty does not cover:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Physical damage caused after repair</li>
                  <li>Liquid damage or abuse</li>
                  <li>Software issues caused by user actions</li>
                  <li>Normal wear and tear</li>
                  <li>Damage from power surges or electrical issues</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Customer Responsibilities</h2>
                <h3 className="text-lg font-semibold mb-2">Data Backup</h3>
                <p className="mb-4">
                  You are responsible for backing up your data before service. While we take care to preserve your data,
                  we are not responsible for data loss during repair.
                </p>

                <h3 className="text-lg font-semibold mb-2">Device Pickup</h3>
                <p className="mb-4">
                  Repaired devices must be collected within 30 days of completion notification. After 30 days, storage
                  fees may apply.
                </p>

                <h3 className="text-lg font-semibold mb-2">Payment</h3>
                <p className="mb-4">
                  Payment is due upon completion of service unless other arrangements have been made. We accept cash,
                  card, and electronic payments.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
                <p className="mb-4">
                  Our liability is limited to the cost of the repair service. We are not liable for:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Loss of data or software</li>
                  <li>Loss of use or business interruption</li>
                  <li>Consequential or indirect damages</li>
                  <li>Damages exceeding the repair cost</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Privacy and Confidentiality</h2>
                <p className="mb-4">
                  We respect your privacy and maintain confidentiality of your personal information and data. See our
                  Privacy Policy for detailed information about data handling.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Pricing and Estimates</h2>
                <p className="mb-4">
                  All estimates are provided free of charge and are valid for 30 days. Final pricing may vary based on
                  actual repair requirements discovered during service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Cancellation Policy</h2>
                <p className="mb-4">
                  You may cancel service before work begins without charge. Once repair work has started, you may be
                  charged for diagnostic time and any parts already ordered.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">9. Dispute Resolution</h2>
                <p className="mb-4">
                  Any disputes will be resolved through good faith negotiation. If resolution cannot be reached,
                  disputes will be handled according to South African law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
                <p className="mb-4">For questions about these Terms of Service, contact us:</p>
                <ul className="list-none space-y-2">
                  <li>Email: info@johannesburgtechrepair.online</li>
                  <li>Phone: 012 345 6789</li>
                  <li>Address: Johannesburg CBD, South Africa</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
                <p className="mb-4">
                  We reserve the right to modify these terms at any time. Changes will be posted on our website and take
                  effect immediately upon posting.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
