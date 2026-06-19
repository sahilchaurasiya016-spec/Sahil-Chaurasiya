import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, FolderOpen, Mail, ShieldAlert } from "lucide-react";

interface NavbarProps {
  onAdminToggle: () => void;
  isAdminOpen: boolean;
}

export default function Navbar({ onAdminToggle, isAdminOpen }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      // Background blur trigger
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Action Section Spy
      const sections = ["hero", "about", "skills", "services", "portfolio", "experience", "certifications", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Experience", id: "experience" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav
        id="app_navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F2F2EC]/95 backdrop-blur-md border-b border-[#141414]/10 shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Group */}
            <div className="flex flex-col cursor-pointer group" onClick={() => scrollToSection("hero")}>
              <span className="font-display font-black text-lg sm:text-xl tracking-tighter text-[#141414] uppercase leading-none flex items-center gap-1.5">
                Sahil Chaurasiya
                <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#141414] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#141414]/65 italic font-serif mt-0.5">
                Digital Growth Architect
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`nav_link_${link.id}`}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3.5 py-1 text-[11px] uppercase tracking-widest font-semibold transition-all border-b-2 ${
                    activeSection === link.id
                      ? "text-[#141414] border-[#141414]"
                      : "text-[#141414]/60 border-transparent hover:text-[#141414] hover:border-[#141414]/40"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Inbox Trigger */}
              <button
                id="btn_navbar_admin_inbox"
                onClick={onAdminToggle}
                title="Open inquiries simulator"
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-mono border transition-all ${
                  isAdminOpen
                    ? "bg-[#141414] border-[#141414] text-[#F2F2EC] font-bold"
                    : "bg-[#E4E4DF] border-black/10 text-[#141414] hover:bg-white hover:border-[#141414]"
                }`}
              >
                <FolderOpen className="w-3 h-3" />
                <span>Leads ({isAdminOpen ? "Active" : "Simulate"})</span>
              </button>

              <button
                id="btn_navbar_hire_cta"
                onClick={() => scrollToSection("contact")}
                className="flex items-center gap-1.5 bg-[#141414] hover:bg-white hover:text-[#141414] border border-[#141414] text-[#F2F2EC] px-4.5 py-1.5 rounded-full text-[11px] uppercase tracking-widest font-bold transition-all hover:scale-105 active:scale-95 duration-200"
              >
                <span>Hire Sahil</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Navigation controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                id="btn_navbar_mobile_admin_inbox"
                onClick={onAdminToggle}
                className={`p-2 rounded-full border transition-all ${
                  isAdminOpen
                    ? "bg-[#141414] border-[#141414] text-[#F2F2EC]"
                    : "bg-[#E4E4DF] border-black/10 text-[#141414]"
                }`}
                title="Leads simulator"
              >
                <FolderOpen className="w-4 h-4" />
              </button>

              <button
                id="btn_navbar_menu_toggle"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full bg-[#E4E4DF] border border-black/10 text-[#141414] hover:bg-white transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu container */}
        {isOpen && (
          <div id="mobile_navbar_menu" className="lg:hidden absolute top-full left-0 w-full bg-[#F2F2EC] border-b border-black/10 shadow-xl px-4 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
            {/* Glowing chapter alert */}
            <div className="bg-[#E4E4DF]/60 border border-black/5 rounded-xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-[#141414]">Available immediately in Mumbai / Remote</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`nav_link_mobile_${link.id}`}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-4 py-3 text-left rounded-xl text-[#141414]/80 font-medium text-xs uppercase tracking-widest transition-all ${
                    activeSection === link.id ? "bg-[#E4E4DF] text-[#141414] font-black" : "hover:bg-white/50"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="border-t border-black/10 pt-4 flex flex-col gap-2">
              <button
                id="btn_navbar_mobile_contact_cta"
                onClick={() => scrollToSection("contact")}
                className="w-full flex items-center justify-center gap-2 bg-[#141414] text-[#F2F2EC] py-3 rounded-xl text-xs uppercase tracking-widest font-black shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Sahil</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
