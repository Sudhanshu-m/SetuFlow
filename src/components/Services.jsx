"use client";

import { motion } from "framer-motion";
import { Bot, MessageCircle, Network, Filter, Settings, HeadphonesIcon } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI Automation",
      description: "Automate repetitive workflows using AI-powered systems that learn and adapt.",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp Automation",
      description: "Instant notifications, support systems, and proactive client communication.",
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "CRM Integration",
      description: "Connect your tools, sync data, and centralize operations seamlessly.",
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: "AI Voice Calling",
      description: "Smart voice agents for lead sorting, qualification, and automated follow-ups.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Custom Workflows",
      description: "Tailor-made automations perfectly adapted for your unique business needs.",
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6" />,
      title: "AI Chatbots",
      description: "Smart 24/7 assistants for your website and comprehensive customer support.",
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Intelligent Systems That <span className="text-gradient-primary">Scale</span>
          </h2>
          <p className="text-lg text-muted">
            We build modular automation solutions designed to eliminate manual tasks and drive revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-14 h-14 rounded-xl bg-surface flex items-center justify-center text-primary mb-6 border border-white/5 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
