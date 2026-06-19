import React, { useState, useEffect } from "react";
import { ArrowDown, Award, Sparkles, Send, Download, ExternalLink } from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
  onWorkClick: () => void;
}

export default function Hero({ onContactClick, onWorkClick }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Digital Marketer",
    "SEO Specialist",
    "WordPress & Shopify Designer",
    "Creative Copywriter",
    "E-commerce Strategist"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-12 overflow-hidden bg-[#F2F2EC] text-[#141414] border-b border-[#141414]/10"
    >
      {/* Decorative Subtle Geometric Grid Background (No tacky logs) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#14141407_1px,transparent_1px),linear-gradient(to_bottom,#14141407_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)]" />

      {/* Floating abstract structural circles */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-[#141414]/5 rounded-full pointer-events-none select-none z-0" />
      <div className="absolute -top-12 -left-12 w-48 h-48 border border-[#141414]/10 rounded-full animate-pulse pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Pitch */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-[#E4E4DF] border border-black/10 rounded-full px-4 py-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#141414]" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#141414] uppercase font-mono">
                Open for Agency Internships & Freelance
              </span>
            </div>

            {/* Title / Name */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[0.85] font-black tracking-tighter text-[#141414] uppercase font-display">
                Transforming <br />
                <span className="text-stroke" style={{ WebkitTextStroke: "1.5px #141414" }}>Digital</span> <br />
                Presence.
              </h1>
              
              {/* Cycling animated header text */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <p className="text-lg sm:text-xl font-mono uppercase tracking-widest text-[#141414]/75 bg-white border border-[#141414]/10 rounded-md px-3.5 py-1 box-content font-bold shadow-sm">
                  ⚡ {roles[roleIndex]}
                </p>
              </div>
            </div>

            <p className="text-[#141414]/80 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed border-l-2 border-[#141414] pl-4">
              Expertise in SEO, E-commerce, and Web Design to scale brands. Based in Mumbai, working globally with high-impact startups. Passionate digital business practitioner.
            </p>

            {/* Quick Metrics display - highly relevant to digital marketing */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-3 max-w-md mx-auto lg:mx-0 border-t border-[#141414]/10 mt-6 bg-[#E4E4DF]/20 p-4 rounded-xl">
              <div className="text-center lg:text-left">
                <span className="block font-display text-2xl sm:text-3xl font-black text-[#141414]">
                  15+
                </span>
                <span className="block text-[9px] font-mono tracking-widest text-[#141414]/60 uppercase mt-0.5">
                  Web Projects
                </span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block font-display text-2xl sm:text-3xl font-black text-[#141414]">
                  3.2x
                </span>
                <span className="block text-[9px] font-mono tracking-widest text-[#141414]/60 uppercase mt-0.5">
                  Avg SEO Lift
                </span>
              </div>
              <div className="text-center lg:text-left flex flex-col justify-start items-center lg:items-start">
                <span className="block font-display text-2xl sm:text-3xl font-black text-[#141414] flex items-center gap-1">
                  100%
                </span>
                <span className="block text-[9px] font-mono tracking-widest text-[#141414]/60 uppercase mt-0.5">
                  IIDE Student
                </span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <button
                id="hero_view_work"
                onClick={onWorkClick}
                className="w-full sm:w-auto bg-[#141414] hover:bg-white text-[#F2F2EC] hover:text-[#141414] border border-[#141414] font-bold px-7 py-4 rounded-full text-xs uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-2 cursor-pointer duration-200"
              >
                <span>View Portfolio Projects</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              <button
                id="hero_contact"
                onClick={onContactClick}
                className="w-full sm:w-auto bg-[#E4E4DF] hover:bg-white border border-black/10 text-[#141414] font-bold px-6 py-4 rounded-full text-xs uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-2 cursor-pointer duration-200"
              >
                <Send className="w-3.5 h-3.5 text-[#141414]/70" />
                <span>Contact Details</span>
              </button>

              {/* Resume Quick Trigger */}
              <a
                id="hero_dl_resume"
                href="#resume"
                className="w-full sm:w-auto text-[#141414]/70 hover:text-[#141414] border border-transparent hover:border-black/10 hover:bg-white/50 px-5 py-4 rounded-full text-[11px] uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Get CV</span>
              </a>
            </div>
          </div>

          {/* Right Column: Premium Interactive Badge-Style Image Mockup frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl bg-white border-2 border-[#141414]/90 shadow-[4px_4px_0px_#141414] overflow-hidden flex items-center justify-center group transition-transform duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#141414]">
              {/* Dynamic decorative grids */}
              <div className="absolute inset-0 bg-[#E4E4DF]/25" />

              {/* Modern geometric structure resembling Bento grid column */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 bg-[#141414] text-[#F2F2EC] z-20">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase font-mono tracking-widest text-[#C8C8BE] font-bold">
                      Digital Native
                    </span>
                    <h3 className="font-display font-black text-xl sm:text-2xl tracking-tighter uppercase text-white">
                      Sahil Chaurasiya
                    </h3>
                  </div>
                  <div className="h-9 w-9 rounded-full border border-stone-700 bg-stone-900 flex items-center justify-center">
                    <Award className="w-4 h-4 text-amber-300" />
                  </div>
                </div>

                <div className="space-y-3.5">
                  {/* Digital Canvas layout snippet mock */}
                  <div className="space-y-1.5">
                    <div className="h-1 w-2/3 bg-stone-600 rounded-full" />
                    <div className="h-1 w-5/6 bg-stone-700 rounded-full" />
                    <div className="h-1 w-1/2 bg-[#C8C8BE] rounded-full" />
                  </div>

                  <div className="p-3 bg-stone-900 border border-stone-850 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[9px] font-mono tracking-wider text-stone-400">
                        MUTED ORGANIC CROWDS
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-white font-mono bg-stone-800 px-1.5 py-0.5 rounded">
                      CTR +124%
                    </span>
                  </div>
                </div>

                <div className="border-t border-stone-800 pt-3 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-stone-400 uppercase tracking-wider">
                    B.Com Digital Business
                  </span>
                  <span className="text-[9px] font-mono text-stone-400 uppercase tracking-wider">
                    IIDE Scholar
                  </span>
                </div>
              </div>

              {/* Float-badge e-commerce */}
              <div className="absolute -bottom-1 -left-1 z-35 bg-white border border-[#141414] rounded-xl p-2.5 flex items-center gap-2 shadow-sm">
                <div className="h-7 w-7 rounded bg-[#E4E4DF] border border-[#141414]/10 flex items-center justify-center text-[#141414] font-black text-xs">
                  S
                </div>
                <div>
                  <span className="block text-[8px] font-mono text-stone-500 font-bold uppercase tracking-wider">SHOPIFY & WP</span>
                  <span className="block text-xs font-black text-[#141414] tracking-tight">Custom Store Expert</span>
                </div>
              </div>

              {/* Float-badge SEO */}
              <div className="absolute top-8 -right-2 z-35 bg-white border border-[#141414] rounded-xl p-2.5 flex items-center gap-2 shadow-sm">
                <div className="h-7 w-7 rounded bg-[#E4E4DF] border border-[#141414]/10 flex items-center justify-center text-emerald-600 font-extrabold text-xs">
                  G
                </div>
                <div>
                  <span className="block text-[8px] font-mono text-stone-500 font-semibold uppercase tracking-wider">ORGANIC GOALS</span>
                  <span className="block text-xs font-black text-[#141414] tracking-tight">SEO Audit Pro</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => {
              const el = document.getElementById("about");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center gap-1 text-stone-500 hover:text-[#141414] transition-colors"
            aria-label="Scroll down to About section"
          >
            <span className="text-[9px] font-mono tracking-widest uppercase font-bold">Explore Journey</span>
            <div className="p-1.5 border border-[#141414]/10 rounded-full bg-[#E4E4DF] flex items-center justify-center animate-bounce">
              <ArrowDown className="w-3 h-3 text-[#141414]" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
