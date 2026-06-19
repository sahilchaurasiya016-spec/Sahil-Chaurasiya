import React from "react";
import { GraduationCap, Award, MapPin, Sparkles, BookOpen } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[#F2F2EC] border-b border-[#141414]/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Graphic representation */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Visual background frames */}
            <div className="absolute inset-0 bg-[#E4E4DF] rounded-2xl transform rotate-3 -z-10" />
            
            <div className="w-full max-w-sm bg-white border-2 border-[#141414]/90 rounded-2xl p-6 shadow-[4px_4px_0px_#141414] space-y-6 relative">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded bg-[#141414] flex items-center justify-center text-[#F2F2EC] font-extrabold text-sm">
                  SC
                </div>
                <div>
                  <h4 className="font-display font-black text-[#141414] uppercase tracking-tight text-base">Sahil Chaurasiya</h4>
                  <span className="text-[9px] font-mono tracking-widest uppercase text-stone-500">EST. MUMBAI, INDIA</span>
                </div>
              </div>

              {/* Bio snippet */}
              <div className="p-4 bg-[#F2F2EC]/60 border border-black/10 rounded-xl text-[13px] leading-relaxed text-[#141414]/90 space-y-3">
                <p className="italic font-serif">
                  "I don't just build pages; I build business conversions. Combining search engine indexing science with creative layout visual cues."
                </p>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#141414]/75 uppercase tracking-wide font-bold">
                  <MapPin className="w-3 h-3 text-[#141414]/60" />
                  <span>Mumbai • Open to Relocation</span>
                </div>
              </div>

              {/* Core focus widgets */}
              <div className="space-y-2">
                <h5 className="text-[9px] uppercase font-mono tracking-wider text-[#141414]/50 font-black px-1">
                  Primary Specializations
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {["Organic SEO Traffic", "WordPress Design", "E-commerce Optimization", "Brand Persona Campaigns"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold bg-[#E4E4DF] border border-black/10 text-[#141414] px-2.5 py-1 rounded shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative section */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold font-mono uppercase tracking-widest text-[#2563eb] bg-blue-50/70 border border-blue-100 px-3 py-1 rounded-full inline-block">
                My Background
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-950 font-display">
                Passionate Digital Marketer & Site Designer
              </h2>
            </div>

            <div className="space-y-4 text-stone-650 text-sm sm:text-base leading-relaxed font-[300]">
              <p>
                I am a business-first practitioner who loves creating scalable digital experiences. With a rigorous background studying the mechanics of contemporary e-commerce and full-funnel digital marketing pipelines, I bridge the gap between what looks good and what drives traffic.
              </p>
              <p>
                Whether it's re-building a stale Shopify theme to decrease visual clutter and boost checkouts or diving into on-page SEO audits to recover lost ranking authority—I love finding solutions that yield measurable client returns.
              </p>
            </div>

            {/* Education Split cards */}
            <div className="space-y-4 pt-4 border-t border-stone-200/60">
              <h4 className="font-display font-bold text-lg text-stone-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-stone-500" />
                Academic Timeline
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Education Card 1 */}
                <div className="bg-white border border-stone-200/80 rounded-2xl p-5 hover:border-stone-405 hover:shadow-md transition-all">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold font-mono text-blue-650 uppercase">
                        Current Undergraduate
                      </span>
                      <h4 className="font-display font-bold text-base text-stone-900 mt-1">
                        B.Com Digital Business
                      </h4>
                      <p className="text-xs text-stone-500 mt-1">
                        Specializing in modern tech enterprise operations, direct consumer channels, and financial literacy.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education Card 2 */}
                <div className="bg-white border-2 border-[#141414] rounded-xl p-5 shadow-[3px_3px_0px_#141414] hover:shadow-[5px_5px_0px_#141414] transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-[#E4E4DF] text-[#141414] rounded-lg">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold font-mono text-[#141414]/60 uppercase tracking-widest">
                        Professional Program
                      </span>
                      <h4 className="font-display font-black text-sm uppercase tracking-tight text-[#141414] mt-1">
                        IIDE Digital Marketing
                      </h4>
                      <p className="text-xs text-[#141414]/75 mt-1 leading-relaxed">
                        Comprehensive agency curriculum focusing on SEM keyword optimization, web metrics, and conversion psychology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
