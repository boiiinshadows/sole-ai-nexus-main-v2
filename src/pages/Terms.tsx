import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <Card className="glass p-8 md:p-12 space-y-8">
            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-muted-foreground">
                By accessing or using the services provided by Sole AI Agency ("Company,"
                "we," "our," or "us"), operated by co-founders Solomon Onokeror and Leslie
                Maccarthy, you agree to be bound by these Terms of Service. If you
                disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">2. Company Information</h2>
              <div className="p-4 glass rounded-lg text-muted-foreground">
                <p>
                  <strong className="text-foreground">Company Name:</strong> Sole AI Agency
                </p>
                <p>
                  <strong className="text-foreground">Founders:</strong> Solomon Onokeror
                  & Leslie Maccarthy
                </p>
                <p>
                  <strong className="text-foreground">Location:</strong> Accra, Ghana
                </p>
                <p>
                  <strong className="text-foreground">Jurisdiction:</strong> Republic of
                  Ghana
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">
                3. Services Description
              </h2>
              <p className="text-muted-foreground mb-3">
                Sole AI Agency provides AI-powered automation services including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>WhatsApp Shop Automation</li>
                <li>AI Chatbot Development and Deployment</li>
                <li>Lead Collection and CRM Integration</li>
                <li>Twilio Voice Integration Services</li>
                <li>Custom AI automation solutions</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">4. User Obligations</h2>
              <p className="text-muted-foreground mb-3">You agree to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use our services in compliance with all applicable laws</li>
                <li>Not use our services for fraudulent or illegal purposes</li>
                <li>
                  Comply with WhatsApp Business API terms and Twilio's acceptable use
                  policy
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">5. Payment Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Accepted Payment Methods
                  </h3>
                  <p>
                    We accept payments through Mobile Money (MTN Mobile Money, Vodafone
                    Cash, AirtelTigo Money) and Paystack (credit/debit cards, bank
                    transfers).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Pricing</h3>
                  <p>
                    Service pricing will be communicated during the consultation phase.
                    All prices are in Ghana Cedis (GHS) unless otherwise stated.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Payment Schedule</h3>
                  <p>
                    Payment terms vary by service package. Typical arrangements include:
                    50% upfront deposit and 50% upon project completion, or monthly
                    subscription billing.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Late Payments</h3>
                  <p>
                    Late payments may result in service suspension. A late fee of 5% per
                    month may be applied to overdue balances.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">6. Refund Policy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Refunds are evaluated on a case-by-case basis. Generally, deposits are
                  non-refundable once work has commenced. For monthly subscriptions, you
                  may cancel at any time, with no refund for partial months.
                </p>
                <p>
                  To request a refund, contact us at contact@soleaiagency.com within 7
                  days of payment with a detailed explanation.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">
                7. Intellectual Property
              </h2>
              <p className="text-muted-foreground">
                All custom AI solutions, chatbot configurations, and automation workflows
                developed for your business remain your property upon full payment.
                However, our underlying technology, frameworks, and methodologies remain
                the intellectual property of Sole AI Agency.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">
                8. Service Availability
              </h2>
              <p className="text-muted-foreground">
                While we strive for 99.9% uptime, we do not guarantee uninterrupted
                service. Scheduled maintenance will be communicated in advance. We are not
                liable for service interruptions caused by third-party platforms (WhatsApp,
                Twilio) or force majeure events.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">
                9. Data and Privacy
              </h2>
              <p className="text-muted-foreground">
                Your use of our services is also governed by our Privacy Policy. We
                process your data in accordance with applicable data protection laws and
                maintain strict confidentiality.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">
                10. Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                To the maximum extent permitted by law, Sole AI Agency shall not be liable
                for any indirect, incidental, special, consequential, or punitive damages
                resulting from your use or inability to use our services. Our total
                liability shall not exceed the amount you paid for services in the six
                months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">11. Termination</h2>
              <p className="text-muted-foreground">
                Either party may terminate services with 30 days written notice. We
                reserve the right to suspend or terminate accounts immediately for
                violation of these terms, non-payment, or fraudulent activity.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">
                12. Third-Party Platforms
              </h2>
              <p className="text-muted-foreground">
                Our services integrate with third-party platforms (WhatsApp Business API,
                Twilio). You are responsible for compliance with their respective terms of
                service. We are not liable for changes or interruptions to these
                third-party services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">
                13. Governing Law and Dispute Resolution
              </h2>
              <p className="text-muted-foreground">
                These Terms shall be governed by and construed in accordance with the laws
                of the Republic of Ghana. Any disputes arising from these terms shall be
                resolved through good-faith negotiation. If negotiation fails, disputes
                shall be submitted to arbitration in Accra, Ghana, or the courts of Ghana.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">
                14. Changes to Terms
              </h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Changes will be
                effective immediately upon posting to our website. Continued use of our
                services after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">15. Contact Information</h2>
              <p className="text-muted-foreground mb-3">
                For questions about these Terms of Service, please contact:
              </p>
              <div className="p-4 glass rounded-lg">
                <p className="font-semibold">Sole AI Agency</p>
                <p className="text-muted-foreground">
                  Founders: Solomon Onokeror & Leslie Maccarthy
                </p>
                <p className="text-muted-foreground">Email: contact@soleaiagency.com</p>
                <p className="text-muted-foreground">Location: Accra, Ghana</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">
                16. Entire Agreement
              </h2>
              <p className="text-muted-foreground">
                These Terms of Service, together with our Privacy Policy, constitute the
                entire agreement between you and Sole AI Agency regarding the use of our
                services.
              </p>
            </section>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
