import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Bot, Users, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "WhatsApp Shop Automation",
      description: "Transform WhatsApp into your 24/7 sales assistant with AI-powered conversations.",
    },
    {
      icon: Bot,
      title: "AI Chatbots for Business",
      description: "Smart chatbots that understand context and deliver human-like interactions.",
    },
    {
      icon: Users,
      title: "Lead Collection & CRM",
      description: "Automatically capture, qualify, and nurture leads while you sleep.",
    },
    {
      icon: Phone,
      title: "Twilio Voice Integration",
      description: "Voice-enabled AI that handles calls and appointments intelligently.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We analyze your business needs and design a custom automation strategy.",
    },
    {
      number: "02",
      title: "Implementation",
      description: "Our team builds and deploys your AI solutions with zero downtime.",
    },
    {
      number: "03",
      title: "Growth",
      description: "Watch your business scale with automated conversations that convert.",
    },
  ];

  const testimonials = [
    {
      name: "Kwame Mensah",
      company: "GhanaShop Ltd",
      text: "Sole AI transformed our WhatsApp sales. We now handle 300% more customers with the same team size.",
    },
    {
      name: "Ama Osei",
      company: "BeautyHub Ghana",
      text: "The chatbot feels so natural! Our customers love the instant responses, day or night.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="AI Technology Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="glass px-6 py-2 rounded-full text-sm font-medium gradient-text">
                Powered by AI • Built for Africa
              </span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Powering Conversations{" "}
              <span className="gradient-text">Beyond Human Limits</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              AI automation for WhatsApp, Voice & SMS that feels magical — and works.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="neon-glow bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
                  Request a Demo
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="glass text-lg px-8 hover:border-primary">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Services Overview */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end AI automation solutions tailored for African businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass p-6 h-full hover:border-primary transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary neon-glow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon size={28} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to transform your business communications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="text-6xl font-heading font-bold gradient-text mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-heading text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass p-8">
                  <CheckCircle2 className="text-primary mb-4" size={32} />
                  <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-heading font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-12 text-center max-w-4xl mx-auto gradient-border neon-glow"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Ready to <span className="gradient-text">Automate Your Business?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of African businesses already using AI to scale their operations.
            </p>
            <Link to="/contact">
              <Button size="lg" className="neon-glow bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
                Get Started Today
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
