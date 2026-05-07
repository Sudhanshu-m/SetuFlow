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
      q: "Do you provide support after launch?",
      a: "Yes! We offer ongoing maintenance and optimization packages to ensure your automation scales smoothly as your business grows."
    }
  ];

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted">
            Everything you need to know about our automation services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass-card border border-white/10 rounded-2xl overflow-hidden transition-all hover:border-white/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className="font-semibold text-lg">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-muted transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
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
    </section>
  );
}
