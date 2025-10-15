import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <Card className="glass p-8 md:p-12 space-y-8">
            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground">
                Sole AI Agency ("we," "our," or "us") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you use our AI automation services,
                including WhatsApp, Voice, and SMS automation solutions.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">
                2. Information We Collect
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Personal Information
                  </h3>
                  <p>
                    We may collect personal information that you provide directly to us,
                    including but not limited to: name, email address, phone number,
                    business information, and payment details.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Communication Data
                  </h3>
                  <p>
                    When you use our WhatsApp, Voice, or SMS automation services, we may
                    collect and process message content, conversation logs, and metadata
                    necessary to provide our services.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Technical Information
                  </h3>
                  <p>
                    We automatically collect certain information about your device and how
                    you interact with our services, including IP address, browser type,
                    and usage data.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>To provide, maintain, and improve our AI automation services</li>
                <li>To process transactions and send related information</li>
                <li>
                  To communicate with you about services, updates, and promotional offers
                </li>
                <li>To personalize and optimize your experience</li>
                <li>To detect, prevent, and address technical issues or fraud</li>
                <li>To comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">
                4. Cookies and Tracking
              </h2>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to track activity on our
                website and hold certain information. You can instruct your browser to
                refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">5. Payment Processing</h2>
              <p className="text-muted-foreground">
                We support payments through Mobile Money (MTN, Vodafone, AirtelTigo) and
                Paystack. Payment information is processed securely through these
                third-party payment processors. We do not store your complete payment card
                details on our servers.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">
                6. WhatsApp Communications
              </h2>
              <p className="text-muted-foreground">
                By using our WhatsApp automation services, you consent to communicate with
                us via WhatsApp. Message and data rates may apply. We process WhatsApp
                communications in accordance with Meta's Business API Terms and this
                Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">7. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational security measures to
                protect your personal information. However, no method of transmission over
                the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">8. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your personal information only for as long as necessary to
                fulfill the purposes outlined in this Privacy Policy, unless a longer
                retention period is required by law.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">9. Your Rights</h2>
              <p className="text-muted-foreground mb-3">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">
                10. Third-Party Services
              </h2>
              <p className="text-muted-foreground">
                Our services integrate with third-party platforms including WhatsApp
                (Meta), Twilio, and payment processors. These third parties have their own
                privacy policies governing the use of information you provide to them.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">
                11. International Data Transfers
              </h2>
              <p className="text-muted-foreground">
                Your information may be transferred to and processed in countries other
                than Ghana. We ensure appropriate safeguards are in place to protect your
                information in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">
                12. Children's Privacy
              </h2>
              <p className="text-muted-foreground">
                Our services are not intended for individuals under the age of 18. We do
                not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">
                13. Changes to This Policy
              </h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of
                any changes by posting the new Privacy Policy on this page and updating
                the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">14. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions or concerns about this Privacy Policy, please contact
                us at:
              </p>
              <div className="mt-4 p-4 glass rounded-lg">
                <p className="font-semibold">Sole AI Agency</p>
                <p className="text-muted-foreground">Email: privacy@soleaiagency.com</p>
                <p className="text-muted-foreground">Location: Accra, Ghana</p>
              </div>
            </section>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
