"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CEO, Elevate Commerce",
      content: "SetuFlow revolutionized our fulfillment process. We cut our manual data entry to zero and our response time by 80%. Worth every penny.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Operations Director, RealTech",
      content: "The custom lead routing system they built for us ensures no client ever falls through the cracks. Our conversion rate jumped 40% in month one.",
      rating: 5,
    },
    {
      name: "David Ross",
      role: "Founder, Peak Agency",
      content: "Working with them was the easiest technical implementation we've ever done. They understood exactly what we needed and delivered it flawlessly.",
      rating: 5,
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-heading font-bold mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Don't just take our word for it. Here's how we've helped businesses like yours scale effortlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl relative border border-white/10 hover:border-primary/30 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />
              
              <div className="flex gap-1 text-yellow-500 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="text-white mb-8 text-lg leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-bold text-white shadow-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <div className="text-sm text-muted">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
