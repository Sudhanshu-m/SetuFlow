"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Bot } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ConsultationForm from "./ConsultationForm";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

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
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between relative">
        <a href="/" className="flex items-center gap-2 group z-20">
          <div className="relative w-48 md:w-64 h-12 md:h-16">
            <Image src="/new_logo.png" alt="SetuFlow Logo" fill className="object-contain object-left" priority />
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-12 absolute left-1/2 -translate-x-1/2 z-10">
          <a href="/" className={`group relative text-lg font-bold transition-all duration-300 ${isActive("/") ? "text-white" : "text-muted hover:text-white"}`}>
            Home
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive("/") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </a>
          <a href="/about" className={`group relative text-lg font-bold transition-all duration-300 ${isActive("/about") ? "text-white" : "text-muted hover:text-white"}`}>
            About Us
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive("/about") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </a>
          <a href="/services" className={`group relative text-lg font-bold transition-all duration-300 ${isActive("/services") ? "text-white" : "text-muted hover:text-white"}`}>
            Services
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive("/services") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </a>
          <a href="/contact" className={`group relative text-lg font-bold transition-all duration-300 ${isActive("/contact") ? "text-white" : "text-muted hover:text-white"}`}>
            Contact Us
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive("/contact") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </a>
        </nav>

        <div className="hidden md:flex z-20">
          <button
            onClick={() => setIsFormOpen(true)}
            className="px-10 py-4 rounded-full bg-primary text-white text-lg font-black hover:bg-primary/90 hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_35px_rgba(124,58,237,0.8)]"
          >
            Book Call
          </button>
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
          <a href="/" className={`text-2xl font-bold transition-colors ${isActive("/") ? "text-primary" : "hover:text-primary"}`} onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="/about" className={`text-2xl font-bold transition-colors ${isActive("/about") ? "text-primary" : "hover:text-primary"}`} onClick={() => setMobileMenuOpen(false)}>About Us</a>
          <a href="/services" className={`text-2xl font-bold transition-colors ${isActive("/services") ? "text-primary" : "hover:text-primary"}`} onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="/contact" className={`text-2xl font-bold transition-colors ${isActive("/contact") ? "text-primary" : "hover:text-primary"}`} onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
          <button
            onClick={() => {
              setIsFormOpen(true);
              setMobileMenuOpen(false);
            }}
            className="mt-4 w-full px-6 py-3 text-center rounded-full bg-primary text-white font-semibold"
          >
            Book Call
          </button>
        </motion.div>
      )}

      <ConsultationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </header>
  );
}
