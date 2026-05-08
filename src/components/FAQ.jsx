"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What businesses can benefit from automation?",
      a: "Almost every business with repetitive workflows—whether you're an e-commerce store handling orders, an agency managing clients, or a real estate firm routing leads."
    },
    {
      q: "How long does development take?",
      a: "Depending on complexity, most custom automation systems are built, tested, and deployed within 1 to 4 weeks."
    },
    {
      q: "What tools do you work with?",
      a: "We integrate with whatever tools you already use. Common integrations include WhatsApp, CRMs (HubSpot, Salesforce), Stripe, Shopify, Zapier, Make, and custom AI APIs."
    },
    {
      q: "Can you build an AI calling agent?",
      a: "Absolutely. We build human-like AI voice agents that can handle inbound customer support, outbound lead qualification, and complex appointment scheduling natively."
    },
    {
      q: "What is Content & Social Automation?",
      a: "It's a workflow that automatically generates context-aware social media posts, visuals, and handles scheduled posting across all your active platforms without human intervention."
    },
    {
      q: "Do you provide support after launch?",
      a: "Yes! We offer ongoing maintenance and optimization packages to ensure your automation scales smoothly as your business grows."
    },
    {
      q: "Will my data be secure?",
      a: "Yes, we implement enterprise-grade security protocols to ensure your customer data is always encrypted and never exposed."
    }
  ];

  return (
    <section id="faq" className="py-16 relative bg-surface/30 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="lg:col-span-5">
            <h2 className="text-2xl md:text-4xl font-heading font-bold mb-6">
              People <span className="text-gradient">Mostly Ask</span>
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              Deciding to automate your business is a big step. We've compiled the most common questions our clients ask before partnering with us. If you can't find what you're looking for, feel free to reach out directly.
            </p>
            <div className="glass-card p-6 rounded-2xl border border-white/10 inline-block">
              <h4 className="font-bold mb-2">Still have questions?</h4>
              <p className="text-sm text-muted mb-4">Our team is always ready to assist you.</p>
              <a href="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:text-white transition-colors">
                Contact our support team &rarr;
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="glass-card border border-white/10 rounded-2xl overflow-hidden transition-all hover:border-white/20"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                >
                  <span className="font-semibold text-lg pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-muted leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
