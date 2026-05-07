"use client";

import { motion } from "framer-motion";

export default function SocialProof() {
  const stats = [
    { value: "50+", label: "Workflows Built" },
    { value: "80%", label: "Manual Tasks Reduced" },
    { value: "24/7", label: "AI Assistance" },
    { value: "10x", label: "Faster Operations" },
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-center text-sm font-medium text-muted mb-10 uppercase tracking-widest">
          Trusted by forward-thinking businesses
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Logo Marquee */}
        <div className="relative flex overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap items-center gap-16 md:gap-32">
            {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((item, i) => (
              <div key={i} className="text-2xl font-heading font-bold text-white/20 uppercase tracking-wider">
                Partner {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
