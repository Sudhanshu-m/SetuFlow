"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, Users, Target, Zap, User } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 min-h-screen relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-blob" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          {/* Hero Section */}
          <div className="max-w-3xl mx-auto text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                We Build The <span className="text-gradient-primary">Future of Work</span>
              </h1>
              <p className="text-xl text-muted leading-relaxed">
                We are a team of AI engineers, automation specialists, and workflow architects dedicated to making your work easy. We build systems that elevate human potential, never replace it.
              </p>
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-3xl border border-white/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-8">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted text-lg leading-relaxed">
                To democratize enterprise-grade automation. We believe that every business, regardless of size, deserves access to intelligent systems that streamline operations, qualify leads, and close deals automatically.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-3xl border border-white/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary mb-8">
                <Users className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted text-lg leading-relaxed">
                We envision a world where human potential is liberated from mundane tasks. We create AI that doesn't replace humans; it simply makes your work easy and elevates your team to do more meaningful work.
              </p>
            </motion.div>
          </div>

          {/* Meet The Founders */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-16">
              Meet The <span className="text-gradient-primary">Founders</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Sudhanshu Mishra */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex flex-col xl:flex-row gap-8 items-center xl:items-start relative z-10">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2rem] overflow-hidden border border-white/10 shrink-0 bg-surface flex items-center justify-center shadow-2xl relative">
                    <Image src="/sudhanshu.jpg" alt="Sudhanshu Mishra" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
                  </div>
                  
                  <div className="text-center xl:text-left">
                    <h3 className="text-2xl font-bold mb-1">Sudhanshu Mishra</h3>
                    <div className="text-primary font-medium mb-4">Co-Founder & Technical Architect</div>
                    
                    <div className="flex flex-wrap justify-center xl:justify-start gap-2 mb-6">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium">AI Engineering</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium">System Architecture</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium">Workflow Automation</span>
                    </div>

                    <p className="text-muted leading-relaxed text-sm md:text-base">
                      Sudhanshu is the technical visionary behind SetuFlow. With a deep passion for artificial intelligence and scalable system design, he specializes in building robust, custom automation infrastructures that eliminate manual bottlenecks. He bridges the gap between complex AI models and practical business applications.
                    </p>
                    
                    <a href="https://www.linkedin.com/in/sudhanshu-mishra-749a2126b/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-semibold text-white transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#0077b5]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> Connect
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Disha Jain */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex flex-col xl:flex-row gap-8 items-center xl:items-start relative z-10">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2rem] overflow-hidden border border-white/10 shrink-0 bg-surface flex items-center justify-center shadow-2xl relative">
                    <Image src="/disha.jpg" alt="Disha Jain" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent mix-blend-overlay" />
                  </div>
                  
                  <div className="text-center xl:text-left">
                    <h3 className="text-2xl font-bold mb-1">Disha Jain</h3>
                    <div className="text-secondary font-medium mb-4">Co-Founder & Operations Strategy</div>
                    
                    <div className="flex flex-wrap justify-center xl:justify-start gap-2 mb-6">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium">Business Operations</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium">Client Strategy</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium">Growth Optimization</span>
                    </div>

                    <p className="text-muted leading-relaxed text-sm md:text-base">
                      Disha is the strategic force ensuring our automation solutions align perfectly with our clients' business goals. Her expertise lies in identifying operational inefficiencies and designing streamlined processes that drive revenue. She excels at translating complex needs into clear, actionable automation strategies.
                    </p>
                    
                    <a href="https://www.linkedin.com/in/disha-jain-821a96246/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-semibold text-white transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#0077b5]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> Connect
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Core Values */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Custom AI Solutions Tailored to Your Needs",
                "Seamless Integration with Existing Tools",
                "Focus on Revenue-Generating Workflows",
                "Continuous Optimization & Support",
                "Data Privacy & Security First",
                "Expertise in Voice & Messaging Bots"
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="font-medium">{value}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
