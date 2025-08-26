import type { Metadata } from "next"
import { MetaTags } from "@/components/seo/meta-tags"

export const metadata: Metadata = {
  title: "Privacy Policy - Johannesburg Tech Repair",
  description:
    "Privacy policy for Johannesburg Tech Repair. Learn how we collect, use, and protect your personal information.",
  robots: "noindex, nofollow",
}

export default function PrivacyPage() {
  return (
    <>
      <MetaTags
        title="Privacy Policy - Johannesburg Tech Repair"
        description="Privacy policy for Johannesburg Tech Repair. Learn how we collect, use, and protect your personal information."
        url="/privacy"
        noIndex={true}
      />

      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                <p className="mb-4">We collect information you provide directly to us, such as when you:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Request a repair quote or service</li>
                  <li>Contact us via phone, email, or our website</li>
                  <li>Subscribe to our newsletter or updates</li>
                  <li>Provide feedback or reviews</li>
                </ul>
                <p className="mb-4">
                  This information may include your name, email address, phone number, address, device information, and
                  details about the technical issues you're experiencing.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Provide, maintain, and improve our repair services</li>
                  <li>Process and complete transactions</li>
                  <li>Send you technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Communicate with you about services, offers, and events</li>
                  <li>Monitor and analyze trends and usage</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
                <p className="mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except as described in this policy:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>With service providers who assist us in operating our business</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or acquisition</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                <p className="mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. However, no method of transmission over the internet
                  is 100% secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Device Data</h2>
                <p className="mb-4">
                  When you bring your device to us for repair, we may need to access data on your device to diagnose and
                  fix issues. We:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Only access data necessary for the repair</li>
                  <li>Do not copy or retain your personal data</li>
                  <li>Recommend backing up your data before service</li>
                  <li>Can provide data backup services upon request</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Cookies and Tracking</h2>
                <p className="mb-4">
                  Our website uses cookies and similar tracking technologies to improve your experience. You can control
                  cookie settings through your browser preferences.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request a copy of your personal information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
                <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
                <ul className="list-none space-y-2">
                  <li>Email: info@johannesburgtechrepair.online</li>
                  <li>Phone: 012 345 6789</li>
                  <li>Address: Johannesburg CBD, South Africa</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
                <p className="mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
