"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showThankYou, setShowThankYou] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Simulate form submission
    console.log("Form submitted:", formData);

    // Show thank you message
    setShowThankYou(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setShowThankYou(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <>
      <Header />
      <main className="pt-32 pb-24 min-h-screen relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[150px] animate-blob" style={{ animationDelay: "2s" }} />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Let's <span className="text-gradient-primary">Connect</span>
              </h1>
              <p className="text-lg text-muted mb-12 leading-relaxed">
                Whether you're looking to automate workflows, build an AI calling agent, or integrate smart CRM systems, our team is here to help you scale efficiently.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted mb-1">Email Us At</div>
                    <a href="mailto:sudhanshu1439@gmail.com" className="text-xl font-semibold hover:text-primary transition-colors">
                      sudhanshu1439@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted mb-1">Call or WhatsApp Us At</div>
                    <a href="https://wa.me/919372745434" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold hover:text-secondary transition-colors">
                      +91 9372745434
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass-card border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                {showThankYou ? (
                  <div className="text-center py-12">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mb-4">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20">
                        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-3">Thank You!</h3>
                    <p className="text-muted text-lg">We've received your message and will get back to you shortly.</p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-2">Schedule a Consultation</h2>
                    <p className="text-muted mb-6">Let's discuss how we can help your business grow.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary transition-colors ${errors.name ? "border-red-500" : "border-white/10"}`}
                          placeholder="Your name"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary transition-colors ${errors.email ? "border-red-500" : "border-white/10"}`}
                          placeholder="your@email.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary transition-colors ${errors.phone ? "border-red-500" : "border-white/10"}`}
                          placeholder="+91 XXXXX XXXXX"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Message *</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows="4"
                          className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none ${errors.message ? "border-red-500" : "border-white/10"}`}
                          placeholder="Tell us about your project..."
                        />
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                      </div>

                      <button
                        type="submit"
                        className="w-full mt-2 px-6 py-3.5 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(124,58,237,0.5)] hover:shadow-[0_0_25px_rgba(124,58,237,0.7)]"
                      >
                        Submit Request
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
