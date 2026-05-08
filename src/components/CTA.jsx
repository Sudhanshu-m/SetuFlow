"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import ConsultationForm from "./ConsultationForm";

export default function CTA() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto glass-card rounded-[3rem] p-8 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden"
        >
          {/* Animated background particles effect can go here, using a simple CSS gradient for now */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-white mb-8 backdrop-blur-md border border-white/20">
              <Sparkles className="w-8 h-8" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Ready To Automate Your <span className="text-gradient">Business?</span>
            </h2>
            
            <p className="text-xl text-muted mb-10 max-w-xl mx-auto">
              Book a free strategy call and discover exactly how automation can save you hundreds of hours and increase revenue.
            </p>
            
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-10 py-5 rounded-full bg-primary text-white text-lg font-bold flex items-center justify-center gap-3 mx-auto hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:shadow-[0_0_50px_rgba(124,58,237,0.8)] hover:-translate-y-1"
            >
              Schedule A Call
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <p className="mt-6 text-sm text-muted">
              No commitment required. We'll outline a custom automation plan for free.
            </p>
          </div>
        </motion.div>
      </div>

      <ConsultationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
}
