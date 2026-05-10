"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Zap, Cpu, MessageSquare } from "lucide-react";
import ConsultationForm from "./ConsultationForm";

export default function Hero() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[150px] animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-secondary mb-6 border border-secondary/30">
              <Zap className="w-4 h-4" />
              <span>Next-Gen Automation Agency</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Automate The Boring. <span className="text-gradient-primary">Dominate Your Market.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted mb-8 leading-relaxed">
              We build intelligent automation systems for businesses using AI, workflows, WhatsApp, CRM integrations, lead systems, and custom automations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsFormOpen(true)}
                className="px-8 py-4 rounded-full bg-primary text-white font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] group"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#portfolio" className="px-8 py-4 rounded-full glass-card text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
                <Play className="w-5 h-5" />
                View Our Work
              </a>
            </div>
          </motion.div>

          {/* Right Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-12 lg:mt-0 min-h-[400px] lg:min-h-0 lg:h-[600px] w-full flex items-center justify-center"
          >
            {/* Main Dashboard Card */}
            <div className="absolute z-20 w-full max-w-md glass-card rounded-2xl p-6 border border-white/10 shadow-2xl animate-float">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs text-muted font-mono">Workflow Active</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">New Lead Captured</div>
                    <div className="text-xs text-muted">Via WhatsApp Bot</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center py-2 text-primary">
                  <ArrowRight className="w-5 h-5 rotate-90" />
                </div>
                
                <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">AI Qualification</div>
                    <div className="text-xs text-muted">Analyzed intent & scored</div>
                  </div>
                </div>

                <div className="flex items-center justify-center py-2 text-primary">
                  <ArrowRight className="w-5 h-5 rotate-90" />
                </div>
                
                <div className="flex items-center gap-4 p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-green-400">CRM Updated</div>
                    <div className="text-xs text-green-400/70">Meeting scheduled automatically</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute top-10 right-0 w-32 h-32 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-10 left-0 w-40 h-40 bg-gradient-to-tr from-secondary/30 to-transparent rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>

      <ConsultationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
}
