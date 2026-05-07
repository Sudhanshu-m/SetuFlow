"use client";

import { motion } from "framer-motion";
import { HardHat, Croissant, PhoneCall, Blocks } from "lucide-react";
import Image from "next/image";

export default function BuildingBlocks() {
  return (
    <section className="py-24 relative overflow-hidden bg-surface/50 border-y border-white/5">
      {/* Background elements */}
      <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] mix-blend-screen" />
      <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] mix-blend-screen" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-secondary mb-6 border border-secondary/30">
            <Blocks className="w-4 h-4" />
            <span>The Building Blocks</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Laying The Foundation For <span className="text-gradient-primary">Every Industry</span>
          </h2>
          <p className="text-lg text-muted">
            Whether you are building the physical world or baking the finest goods, our automation and AI calling systems do the heavy lifting.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Construction/Crane Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="glass-card rounded-3xl overflow-hidden relative border border-white/10">
              <div className="relative h-64 md:h-80 w-full">
                <Image 
                  src="/crane_blocks.png" 
                  alt="Futuristic Crane building blocks" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>
              <div className="p-8 relative -mt-16">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center text-yellow-400 mb-4 border border-yellow-500/30 backdrop-blur-md">
                  <HardHat className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Construction & Logistics</h3>
                <p className="text-muted leading-relaxed">
                  Like a heavy-duty crane placing digital blocks perfectly, our automation builds scalable infrastructures. Manage site tracking, logistics, and resource allocation instantly.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bakery Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="glass-card rounded-3xl overflow-hidden relative border border-white/10">
              <div className="relative h-64 md:h-80 w-full">
                <Image 
                  src="/bakery_automation.png" 
                  alt="Futuristic Bakery Automation" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>
              <div className="p-8 relative -mt-16">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 border border-cyan-500/30 backdrop-blur-md">
                    <Croissant className="w-6 h-6" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4 border border-purple-500/30 backdrop-blur-md">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">Wholesale Bakery & Hospitality</h3>
                <p className="text-muted leading-relaxed">
                  Automate the conveyor belt of your business. Utilize AI voice calling to handle bulk wholesale orders, sort leads for large event catering, and manage daily inventory.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
