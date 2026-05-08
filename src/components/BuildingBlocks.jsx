"use client";

import { motion } from "framer-motion";
import { HardHat, Croissant, PhoneCall, Blocks, Building, ShoppingCart, Stethoscope, Landmark, Briefcase } from "lucide-react";
import Image from "next/image";

export default function BuildingBlocks() {
  const industries = [
    {
      title: "Construction & Logistics",
      icon: <HardHat className="w-6 h-6" />,
      desc: "Like a heavy-duty crane placing digital blocks perfectly, our automation builds scalable infrastructures. Manage site tracking, logistics, and resource allocation instantly.",
      bgImage: "/crane_iso.png",
      colors: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/30", iconBg: "bg-yellow-500/20", iconLarge: "text-yellow-500/20" }
    },
    {
      title: "Wholesale Bakery",
      icon: <Croissant className="w-6 h-6" />,
      desc: "Automate the conveyor belt of your business. Utilize AI voice calling to handle bulk wholesale orders, sort leads for large event catering, and manage daily inventory.",
      bgImage: "/bakery_iso.png",
      colors: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/30", iconBg: "bg-cyan-500/20", iconLarge: "text-cyan-500/20" }
    },
    {
      title: "Real Estate & Property",
      icon: <Building className="w-6 h-6" />,
      desc: "Automate property listings, tenant screening, and rent collection. Use AI agents to handle 24/7 inquiry calls and schedule viewings seamlessly.",
      bgImage: "/realestate_iso.png",
      colors: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30", iconBg: "bg-emerald-500/20", iconLarge: "text-emerald-500/20" }
    },
    {
      title: "E-commerce & Retail",
      icon: <ShoppingCart className="w-6 h-6" />,
      desc: "Streamline order fulfillment, inventory syncing, and customer support. Let AI handle return requests, shipping updates, and abandoned cart recovery.",
      bgImage: "/ecommerce_iso.png",
      colors: { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/30", iconBg: "bg-orange-500/20", iconLarge: "text-orange-500/20" }
    },
    {
      title: "Healthcare & Clinics",
      icon: <Stethoscope className="w-6 h-6" />,
      desc: "Automate patient scheduling, appointment reminders, and follow-ups. Ensure seamless communication without burdening your administrative staff.",
      bgImage: "/healthcare_iso.png",
      colors: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30", iconBg: "bg-blue-500/20", iconLarge: "text-blue-500/20" }
    },
    {
      title: "Finance & Accounting",
      icon: <Landmark className="w-6 h-6" />,
      desc: "Automate invoice processing, expense tracking, and client onboarding. Use intelligent workflows to gather documentation and organize financial data effortlessly.",
      bgImage: "/finance_iso.png",
      colors: { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/30", iconBg: "bg-indigo-500/20", iconLarge: "text-indigo-500/20" }
    },
    {
      title: "Legal Services",
      icon: <Briefcase className="w-6 h-6" />,
      desc: "Streamline client intake, document generation, and case updates. Leverage AI to manage initial consultations and qualify prospective clients instantly.",
      bgImage: "/legal_iso.png",
      colors: { bg: "bg-rose-500/10", text: "text-rose-400", border: "border-rose-500/30", iconBg: "bg-rose-500/20", iconLarge: "text-rose-500/20" }
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-surface/50 border-y border-white/5">
      {/* Background elements */}
      <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] mix-blend-screen" />
      <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] mix-blend-screen" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-secondary mb-6 border border-secondary/30">
            <Blocks className="w-4 h-4" />
            <span>The Building Blocks</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-heading font-bold mb-6">
            Laying The Foundation For <span className="text-gradient-primary">Every Industry</span>
          </h2>
          <p className="text-lg text-muted">
            Whether you are building the physical world, baking goods, or managing properties, our automation and AI systems are built to make your work easy across all sectors.
          </p>
        </div>
      </div>

      {/* Continuous Slider */}
      <div className="relative flex overflow-hidden w-full pb-10">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap items-stretch gap-8 hover:[animation-play-state:paused] px-4">
          {[...industries, ...industries].map((ind, i) => (
            <div key={i} className="w-[320px] md:w-[380px] shrink-0 whitespace-normal">
              <div className="glass-card h-full rounded-3xl overflow-hidden relative border border-white/10 group transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-primary/10">
                <div className="relative h-48 w-full bg-surface/50 border-b border-white/5 overflow-hidden">
                  {ind.bgImage ? (
                    <Image 
                      src={ind.bgImage} 
                      alt={ind.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  ) : (
                    <div className={`absolute inset-0 ${ind.colors.bg} flex items-center justify-center`}>
                      <div className={`${ind.colors.iconLarge} transform scale-[4] group-hover:scale-[5] transition-transform duration-700 opacity-50`}>
                        {ind.icon}
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>
                
                <div className="p-8 relative -mt-12 flex flex-col h-[calc(100%-12rem)]">
                  <div className={`w-14 h-14 rounded-xl ${ind.colors.iconBg} flex items-center justify-center ${ind.colors.text} mb-5 border ${ind.colors.border} backdrop-blur-md shrink-0 shadow-lg`}>
                    {ind.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{ind.title}</h3>
                  <p className="text-muted leading-relaxed text-sm flex-grow">
                    {ind.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
      `}</style>
    </section>
  );
}
