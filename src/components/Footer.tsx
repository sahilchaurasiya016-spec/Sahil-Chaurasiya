import React from "react";
import { ArrowUp, Mail, Linkedin, Instagram, Phone } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="app_footer" className="bg-[#141414] text-[#F2F2EC] py-16 px-4 sm:px-6 lg:px-8 border-t-2 border-black/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Logo and Copyright Branding Group */}
        <div className="text-center md:text-left space-y-1">
          <h4 className="font-display font-black text-[#F2F2EC] text-xl uppercase tracking-widest">
            Sahil Chaurasiya
          </h4>
          <p className="text-[10px] font-mono tracking-widest text-[#F2F2EC]/60 uppercase font-black">
            Digital Branding Portfolio • © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase font-black tracking-wider">
          <a
            href="mailto:sahilchaurasiya016@gmail.com"
            className="flex items-center gap-1.5 text-[#F2F2EC]/85 hover:text-white hover:underline transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>sahilchaurasiya016@gmail.com</span>
          </a>
          
          <a
            href="https://linkedin.com/in/sahil-chaurasiya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#F2F2EC]/85 hover:text-white hover:underline transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn Direct</span>
          </a>

          <a
            href="https://instagram.com/sahil_chaurasiya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#F2F2EC]/85 hover:text-white hover:underline transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>Instagram Hook</span>
          </a>
        </div>

        {/* Scroll Back to Top Action */}
        <div>
          <button
            id="btn_footer_scroll_top"
            onClick={scrollToTop}
            className="bg-[#F2F2EC] hover:bg-white text-[#141414] p-3 rounded border-2 border-[#141414] shadow-[2px_2px_0px_#F2F2EC] hover:shadow-[3px_3px_0px_#F2F2EC] transition-all flex items-center justify-center cursor-pointer group"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

      </div>
    </footer>
  );
}
