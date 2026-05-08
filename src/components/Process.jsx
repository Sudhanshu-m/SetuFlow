"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery Call",
      description: "We understand your workflow and identify business bottlenecks.",
    },
    {
      num: "02",
      title: "Strategy & Planning",
      description: "We design clear automation systems tailored specifically to your business goals.",
    },
    {
      num: "03",
      title: "Development",
      description: "We build, connect, and thoroughly test the new automation workflows.",
    },
    {
      num: "04",
      title: "Launch & Support",
      description: "We deploy, monitor, optimize, and maintain your systems over time.",
    },
  ];

  return (
    <section id="process" className="py-16 bg-surface/30 relative border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-heading font-bold mb-6">
            Our Simple <span className="text-gradient">4-Step Process</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            From the first call to final deployment, we make working with us effortless.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="w-16 h-16 rounded-2xl bg-background border border-primary/30 flex items-center justify-center text-2xl font-heading font-bold text-primary mb-6 shadow-[0_0_15px_rgba(124,58,237,0.2)] mx-auto md:mx-0">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center md:text-left">{step.title}</h3>
                <p className="text-sm text-muted text-center md:text-left leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
