import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BuildingBlocks from "@/components/BuildingBlocks";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col selection:bg-primary/30 selection:text-white">
      <Header />
      <Hero />
      <Services />
      <BuildingBlocks />
      <Process />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
