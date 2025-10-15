import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Shield, Users } from "lucide-react";

const Verification = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary neon-glow mb-6">
              <Shield size={40} />
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Platform <span className="gradient-text">Verification</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Official verification page for Meta and Twilio reviewers
            </p>
          </div>

          <Card className="glass p-8 md:p-12 space-y-8 gradient-border">
            <section>
              <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-3">
                <CheckCircle2 className="text-primary" size={28} />
                Business Overview
              </h2>
              <p className="text-muted-foreground mb-4">
                Sole AI Agency is a legitimate AI automation business that provides
                WhatsApp Business API and Twilio-powered communication solutions for small
                and medium businesses across Africa, with a primary focus on Ghana.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="glass p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Company Name</h3>
                  <p className="text-muted-foreground">Sole AI Agency</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">Accra, Ghana</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Industry</h3>
                  <p className="text-muted-foreground">
                    AI Automation & Communication Technology
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Founded By</h3>
                  <p className="text-muted-foreground">
                    Solomon Onokeror & Leslie Maccarthy
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-3">
                <Users className="text-primary" size={28} />
                Founders Information
              </h2>
              <div className="space-y-4">
                <div className="glass p-6 rounded-lg">
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    Solomon Onokeror
                  </h3>
                  <p className="text-muted-foreground">
                    Co-Founder & CEO - Visionary leader with expertise in AI technology
                    and business automation. Responsible for strategic direction and
                    business development.
                  </p>
                </div>
                <div className="glass p-6 rounded-lg">
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    Leslie Maccarthy
                  </h3>
                  <p className="text-muted-foreground">
                    Co-Founder & CTO - Technical architect specializing in conversational
                    AI and integration systems. Oversees all technical implementations and
                    platform integrations.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">Services Provided</h2>
              <p className="text-muted-foreground mb-4">
                We automate WhatsApp and Twilio communications for small businesses,
                enabling them to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">WhatsApp Shop Automation:</strong>{" "}
                  Automated product catalogs, order processing, and customer support via
                  WhatsApp Business API
                </li>
                <li>
                  <strong className="text-foreground">AI Chatbots:</strong> Intelligent
                  conversational agents for customer engagement and lead generation
                </li>
                <li>
                  <strong className="text-foreground">Lead Collection:</strong> Automated
                  lead capture and CRM integration for sales teams
                </li>
                <li>
                  <strong className="text-foreground">Voice Integration:</strong> Twilio
                  voice-enabled solutions for appointment scheduling and customer inquiries
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">Use Case Examples</h2>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Retail Businesses</h3>
                  <p className="text-muted-foreground">
                    We help retail shops manage customer orders, inventory inquiries, and
                    delivery updates through WhatsApp automation.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Service Providers</h3>
                  <p className="text-muted-foreground">
                    Service businesses use our voice and SMS automation for appointment
                    reminders, confirmations, and customer follow-ups.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">E-commerce</h3>
                  <p className="text-muted-foreground">
                    Online sellers leverage our chatbots to handle product inquiries,
                    process orders, and provide 24/7 customer support.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">Data & Privacy</h2>
              <p className="text-muted-foreground mb-4">
                We are committed to protecting user data and maintaining compliance with
                international standards:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Full compliance with Meta's WhatsApp Business API policies</li>
                <li>Adherence to Twilio's acceptable use policies</li>
                <li>Secure data storage and encryption practices</li>
                <li>Clear privacy policy and terms of service</li>
                <li>Transparent data collection and usage practices</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">Payment Methods</h2>
              <p className="text-muted-foreground mb-4">
                We accept payments through legitimate, verified channels:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Mobile Money: MTN Mobile Money, Vodafone Cash, AirtelTigo Money</li>
                <li>Paystack: Credit/debit cards and bank transfers</li>
                <li>All transactions are secure and processed through official gateways</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">Contact Information</h2>
              <div className="glass p-6 rounded-lg space-y-3">
                <p>
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a
                    href="mailto:contact@soleaiagency.com"
                    className="text-primary hover:underline"
                  >
                    contact@soleaiagency.com
                  </a>
                </p>
                <p>
                  <strong className="text-foreground">Privacy:</strong>{" "}
                  <a
                    href="mailto:privacy@soleaiagency.com"
                    className="text-primary hover:underline"
                  >
                    privacy@soleaiagency.com
                  </a>
                </p>
                <p>
                  <strong className="text-foreground">Location:</strong> Accra, Ghana
                </p>
                <p>
                  <strong className="text-foreground">Website:</strong>{" "}
                  <span className="text-muted-foreground">soleaiagency.com</span>
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">Compliance Statement</h2>
              <p className="text-muted-foreground">
                Sole AI Agency operates in full compliance with all applicable laws and
                regulations. We maintain transparent business practices, clear terms of
                service, comprehensive privacy policies, and secure payment processing. Our
                services are designed to help legitimate businesses improve customer
                communication and operational efficiency through AI automation.
              </p>
            </section>

            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                This verification page is intended for platform reviewers. For general
                inquiries, please visit our{" "}
                <a href="/contact" className="text-primary hover:underline">
                  contact page
                </a>
                .
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Verification;
