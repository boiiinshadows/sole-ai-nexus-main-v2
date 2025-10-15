import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Bot, CheckCircle2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "WhatsApp Shop Automation",
      description:
        "Transform your WhatsApp into a 24/7 intelligent sales assistant that never sleeps.",
      features: [
        "Automated product catalogs",
        "Order processing & payment links",
        "Customer inquiry responses",
        "Inventory management integration",
        "Multi-language support",
      ],
    },
    {
      icon: Bot,
      title: "AI Chatbots for Businesses",
      description:
        "Deploy smart chatbots that understand context and deliver human-like conversations.",
      features: [
        "Natural language understanding",
        "Multi-platform deployment",
        "Custom training on your data",
        "Sentiment analysis",
        "Seamless human handoff",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI automation solutions designed to transform how you connect
            with customers and grow your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass p-8 md:p-10 gradient-border hover:border-primary transition-all">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary to-secondary neon-glow flex items-center justify-center">
                      <service.icon size={36} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h2 className="font-heading text-3xl font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2
                            size={20}
                            className="text-primary flex-shrink-0 mt-0.5"
                          />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact">
                      <Button className="neon-glow bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                        Get a Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass rounded-2xl p-12 text-center gradient-border neon-glow"
        >
          <h2 className="font-heading text-4xl font-bold mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free consultation and we'll help you design the perfect automation
            strategy for your business.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="neon-glow bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8"
            >
              Schedule Consultation
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
