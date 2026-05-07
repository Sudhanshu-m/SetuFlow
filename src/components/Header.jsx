"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Bot } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-background/80 backdrop-blur-md border-b border-white/10" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors border border-primary/50">
            <Bot className="w-6 h-6 text-primary" />
          </div>
          <span className="text-xl font-heading font-bold tracking-tight">Setu<span className="text-primary">Flow</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-muted hover:text-white transition-colors">Services</a>
          <a href="#process" className="text-sm font-medium text-muted hover:text-white transition-colors">Process</a>
          <a href="#portfolio" className="text-sm font-medium text-muted hover:text-white transition-colors">Case Studies</a>
          <a href="#faq" className="text-sm font-medium text-muted hover:text-white transition-colors">FAQ</a>
        </nav>

        <div className="hidden md:flex">
          <a href="#contact" className="px-6 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(124,58,237,0.5)] hover:shadow-[0_0_25px_rgba(124,58,237,0.7)]">
            Book Call
          </a>
        </div>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-surface border-b border-white/10 p-6 flex flex-col gap-4 shadow-xl md:hidden"
        >
          <a href="#services" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#process" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Process</a>
          <a href="#portfolio" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Case Studies</a>
          <a href="#faq" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <a href="#contact" className="mt-4 px-6 py-3 text-center rounded-full bg-primary text-white font-semibold" onClick={() => setMobileMenuOpen(false)}>
            Book Call
          </a>
        </motion.div>
      )}
    </header>
  );
}
