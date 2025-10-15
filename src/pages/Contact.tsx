import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to automate your business? Let's discuss how we can help you scale
            with AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass p-8 gradient-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass mt-2"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass mt-2"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="glass mt-2 min-h-[150px]"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full neon-glow bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2" size={18} />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">
                Contact <span className="gradient-text">Information</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Have questions? We're here to help. Reach out through any of these
                channels.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="glass p-6 hover:border-primary transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary neon-glow flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Email Us</h3>
                    <a
                      href="mailto:contact@soleaiagency.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contact@soleaiagency.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass p-6 hover:border-primary transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary neon-glow flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/233531423911"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Instant responses during business hours
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass p-6 hover:border-primary transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary neon-glow flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">Accra, Ghana</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Serving businesses across Africa
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* WhatsApp CTA */}
            <Card className="glass p-6 gradient-border neon-glow">
              <h3 className="font-heading text-xl font-semibold mb-3">
                Prefer to Chat?
              </h3>
              <p className="text-muted-foreground mb-4">
                Get instant answers to your questions via WhatsApp
              </p>
              <a
                href="https://wa.me/233531423911"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <MessageCircle className="mr-2" size={18} />
                  Chat on WhatsApp
                </Button>
              </a>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
