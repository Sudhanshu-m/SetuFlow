import { Bot } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-surface pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <a href="/" className="flex items-center gap-2 group mb-6">
              <div className="relative w-64 h-20">
                <Image src="/new_logo.png" alt="SetuFlow Logo" fill className="object-contain object-left" />
              </div>
            </a>
            <p className="text-muted mb-4 max-w-sm">
              We build intelligent automation systems designed to make your work easy, not to replace humans. Save time, reduce costs, and scale faster.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><a href="/services#ai-calling" className="hover:text-white transition-colors">AI Calling Agents</a></li>
              <li><a href="/services#automation" className="hover:text-white transition-colors">Workflow Automation</a></li>
              <li><a href="/services#ai-infrastructures" className="hover:text-white transition-colors">AI Infrastructures</a></li>
              <li><a href="/services#messaging-automation" className="hover:text-white transition-colors">Messaging Bots</a></li>
              <li><a href="/services#social-automation" className="hover:text-white transition-colors">Social Automation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
          <p>© {new Date().getFullYear()} SetuFlow. All rights reserved.</p>
          <p>Designed for scale.</p>
        </div>
      </div>
    </footer>
  );
}
