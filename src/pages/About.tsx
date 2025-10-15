import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Target, Eye, Users } from "lucide-react";

const About = () => {
  const founders = [
    {
      name: "Solomon Onokeror",
      role: "Co-Founder & CEO",
      bio: "Visionary leader with expertise in AI technology and business automation.",
    },
    {
      name: "Leslie Maccarthy",
      role: "Co-Founder & CTO",
      bio: "Technical architect specializing in conversational AI and integration systems.",
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
            About <span className="gradient-text">Sole AI Agency</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to empower African businesses with intelligent automation
            that drives growth and enhances customer experiences.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass p-8 h-full gradient-border">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary neon-glow flex items-center justify-center mb-6">
                <Target size={28} />
              </div>
              <h2 className="font-heading text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                To empower African businesses with smart automation solutions that are
                accessible, affordable, and profitable. We believe every small business
                deserves enterprise-level AI capabilities.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass p-8 h-full gradient-border">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary neon-glow flex items-center justify-center mb-6">
                <Eye size={28} />
              </div>
              <h2 className="font-heading text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                To make AI automation accessible and profitable for every small business
                across Africa, transforming how companies communicate with their customers
                and operate at scale.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Founders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="gradient-text">Founders</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The visionaries behind Sole AI Agency
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass p-8 text-center h-full hover:border-primary transition-all">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary neon-glow flex items-center justify-center mx-auto mb-6">
                    <Users size={40} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-2">{founder.name}</h3>
                  <p className="text-primary font-medium mb-4">{founder.role}</p>
                  <p className="text-muted-foreground">{founder.bio}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-12 gradient-border neon-glow"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
            Why <span className="gradient-text">Choose Us?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-heading text-xl font-semibold mb-3">African-First Approach</h3>
              <p className="text-muted-foreground">
                Built specifically for African businesses with local payment integrations and understanding.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-heading text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-muted-foreground">
                Our clients see 300% increase in customer engagement and 24/7 availability.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-heading text-xl font-semibold mb-3">Full Support</h3>
              <p className="text-muted-foreground">
                Dedicated team providing implementation, training, and ongoing optimization.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
