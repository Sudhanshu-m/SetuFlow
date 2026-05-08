"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const caseStudies = [
    {
      title: "E-commerce Automation",
      metrics: ["70% reduction in manual workload", "3x faster response time", "99% order accuracy"],
      features: ["Automated order tracking", "WhatsApp updates", "CRM integration"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Real Estate Lead Routing",
      metrics: ["500+ hours saved monthly", "Zero missed leads", "40% conversion bump"],
      features: ["Instant qualification", "Automated scheduling", "Follow-up sequences"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Proven <span className="text-gradient">Results</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            See how our automation systems have transformed businesses.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden group border border-white/5"
            >
              <div className="h-64 w-full relative overflow-hidden">
                <Image src={study.image} alt={study.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">{study.title}</h3>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Impact</h4>
                    <ul className="space-y-2">
                      {study.metrics.map((metric, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-secondary mb-3 uppercase tracking-wider">Features</h4>
                    <ul className="space-y-2">
                      {study.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted">
                          <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <button className="mt-8 flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors group/btn">
                  Read full case study
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
