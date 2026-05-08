"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Bot, MessageCircle, Network, Filter, CheckCircle2, ArrowRight, Share2 } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      id: "ai-calling",
      icon: <Filter className="w-12 h-12" />,
      title: "AI Calling Agent Development",
      description: "We build smart voice agents for lead sorting, qualification, and automated follow-ups. Our AI callers sound human, understand context, and can schedule meetings directly into your calendar.",
      features: ["Human-like voices", "Intent recognition", "Calendar integration", "Live call transfers"]
    },
    {
      id: "automation",
      icon: <Bot className="w-12 h-12" />,
      title: "Automation",
      description: "Make your work easy and streamline your daily operations. We create intelligent automation workflows that learn from your processes and adapt to save you hours of manual work every single day.",
      features: ["Custom workflow design", "Multi-platform syncing", "Error reduction", "Scalable systems"]
    },
    {
      id: "ai-infrastructures",
      icon: <Network className="w-12 h-12" />,
      title: "AI Infrastructures",
      description: "Build a solid foundation for your business with custom AI infrastructures. We centralize your operations, connect your CRM, and make your data work for you proactively.",
      features: ["CRM integration", "Centralized databases", "Custom dashboards", "Secure data pipelines"]
    },
    {
      id: "messaging-automation",
      icon: <MessageCircle className="w-12 h-12" />,
      title: "Messaging Automation",
      description: "Engage with your clients instantly via WhatsApp and SMS. From automated onboarding to smart customer support, we ensure your business never misses a message.",
      features: ["WhatsApp business API", "Auto-responders", "Support ticketing", "Broadcast campaigns"]
    },
    {
      id: "social-automation",
      icon: <Share2 className="w-12 h-12" />,
      title: "Content & Social Automation",
      description: "Put your social media presence on autopilot. We build systems that automatically generate engaging content and trigger coordinated posts across all platforms without lifting a finger.",
      features: ["AI content generation", "Cross-platform auto-posting", "Trigger-based scheduling", "Analytics tracking"]
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-32 pb-24 min-h-screen relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-8">
                We Are Not Replacing, We Are <span className="text-gradient-primary">Making Work Easy</span>
              </h1>
              <p className="text-xl text-muted leading-relaxed max-w-3xl mx-auto">
                We create AI systems that sound incredibly human and naturally conversational. They don't replace your team—they simply make your work easy, handle the heavy lifting, and let humans focus on building real relationships.
              </p>
            </motion.div>
          </div>

          {/* Services List */}
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`order-2 ${index % 2 !== 0 ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="w-20 h-20 rounded-2xl bg-surface border border-white/10 flex items-center justify-center text-primary mb-8 shadow-xl">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
                  <p className="text-lg text-muted mb-10 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-5 mb-10">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                        <span className="font-medium text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors font-semibold text-sm">
                    Discuss this service <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`order-1 ${index % 2 !== 0 ? "lg:order-1" : "lg:order-2"} relative`}
                >
                  <div className="aspect-square w-full max-w-lg mx-auto relative rounded-[2.5rem] overflow-hidden glass-card border border-white/10 p-2 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50" />
                    {/* Abstract Representation of the Service */}
                    <div className="relative z-10 w-full h-full rounded-[2.25rem] bg-black/40 flex items-center justify-center overflow-hidden border border-white/5">
                       <div className="text-primary/50 transform scale-150 relative z-10">
                         {service.icon}
                       </div>
                       <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
                    </div>
                  </div>
                </motion.div>

              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
