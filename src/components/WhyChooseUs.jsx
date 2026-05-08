"use client";

import { motion } from "framer-motion";
import { Zap, Maximize, Code2, Cpu, Wrench } from "lucide-react";
import Image from "next/image";

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Fast Delivery",
      desc: "Rapid development and deployment in weeks, not months."
    },
    {
      icon: <Maximize className="w-5 h-5" />,
      title: "Scalable Systems",
      desc: "Automations built to grow alongside your expanding business operations."
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Custom Solutions",
      desc: "No generic templates. Everything is tailored specifically to you."
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Modern Tech Stack",
      desc: "AI-powered workflows utilizing the latest, most reliable tools."
    },
    {
      icon: <Wrench className="w-5 h-5" />,
      title: "Long-Term Support",
      desc: "Continuous optimization, maintenance, and expert support."
    }
  ];

  return (
    <section className="py-24 border-y border-white/5 bg-surface/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Why Partner With <span className="text-gradient-primary">Us?</span>
            </h2>
            <p className="text-lg text-muted mb-8">
              We don't just set up software. We build robust, intelligent systems that function as your top-performing digital employees.
            </p>
            
            <div className="space-y-6">
              {points.map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{point.title}</h4>
                    <p className="text-sm text-muted leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[2rem] blur-3xl" />
            <div className="relative h-[400px] md:h-[600px] w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
                alt="Our Team collaborating" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
