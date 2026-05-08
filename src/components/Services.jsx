"use client";

import { motion } from "framer-motion";
import { Bot, MessageCircle, Network, Filter, Share2 } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: <Filter className="w-6 h-6" />,
      title: "AI Calling Agent Development",
      description: "Smart voice agents for lead sorting, qualification, and automated follow-ups.",
      link: "/services#ai-calling",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Automation",
      description: "Automate repetitive workflows and data entry with intelligent systems that never sleep.",
      link: "/services#automation",
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "AI Infrastructures",
      description: "Connect your tools, sync data, and centralize operations seamlessly with AI.",
      link: "/services#ai-infrastructures",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Messaging Automation",
      description: "Instant notifications, support systems, and proactive client communication via WhatsApp & more.",
      link: "/services#messaging-automation",
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Content & Social Automation",
      description: "Trigger automated content creation and scheduled posting across all your social media platforms seamlessly.",
      link: "/services#social-automation",
    },
  ];

  return (
    <section id="services" className="py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-heading font-bold mb-6">
            Intelligent Systems That <span className="text-gradient-primary">Scale</span>
          </h2>
          <p className="text-lg text-muted">
            We build high-performance AI and automation ecosystems designed to multiply your revenue and eliminate operational bottlenecks.
          </p>
        </div>

        {/* Slider Container */}
        <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar gap-6 -mx-6 px-6 md:mx-0 md:px-0">
          {services.map((service, index) => (
            <Link
              href={service.link}
              key={index}
              className="snap-center shrink-0 w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card h-full p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors group relative overflow-hidden flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-14 h-14 rounded-xl bg-surface flex items-center justify-center text-primary mb-6 border border-white/5 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className="mt-6 text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-2">
                  Learn more &rarr;
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
