import React, { useState } from "react";
import { testimonialsData } from "../data";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const activeTest = testimonialsData[activeIndex];

  return (
    <section id="testimonials" className="py-24 bg-[#F2F2EC] border-b border-[#141414]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12 text-center max-w-2xl mx-auto">
          <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-[#F2F2EC] bg-[#141414] border border-[#141414] px-3.5 py-1.5 rounded-full inline-block">
            Client Success
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#141414] uppercase tracking-tight font-display">
            Kind Words From Clients
          </h2>
          <p className="text-[#141414]/70 text-sm">
            What founders, marketing leads, and agency managers say about working with Sahil.
          </p>
        </div>

        {/* Carousel/Spotlight layout - extremely sleek and high impact */}
        <div className="max-w-4xl mx-auto bg-white border-2 border-[#141414] shadow-[6px_6px_0px_#141414] rounded-xl p-6 sm:p-10 relative overflow-hidden">
          {/* Quote icon watermark decoration */}
          <Quote className="absolute top-6 right-8 w-24 h-24 text-stone-200/30 -z-10 pointer-events-none" />

          <div className="space-y-6 text-left">
            {/* Visual Stars */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Testimonial text block */}
            <p className="text-[#141414] text-base sm:text-lg italic font-serif leading-relaxed">
              "{activeTest.feedback}"
            </p>

            {/* Client profile indicators */}
            <div className="flex items-center justify-between pt-6 border-t border-black/10">
              <div className="flex items-center gap-3.5">
                {/* Custom Monogram Avatar circles */}
                <div className="h-12 w-12 bg-[#141414] border border-[#141414] text-[#F2F2EC] flex items-center justify-center font-extrabold text-sm tracking-widest rounded shadow-sm shrink-0">
                  {activeTest.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="font-display font-black text-sm sm:text-base leading-snug uppercase tracking-tight text-[#141414]">
                    {activeTest.name}
                  </h4>
                  <p className="text-xs font-bold text-[#141414]/60 uppercase tracking-widest">
                    {activeTest.designation}, <span className="font-black text-[#141414]">{activeTest.company}</span>
                  </p>
                </div>
              </div>

              {/* Slider Controller buttons */}
              <div className="flex gap-1.5 shrink-0">
                <button
                  id="btn_testimonial_prev"
                  onClick={prevTestimonial}
                  className="p-2 sm:p-3 hover:bg-[#F2F2EC] rounded-full border-2 border-[#141414] bg-white text-[#141414] transition-all cursor-pointer shadow-[1px_1px_0px_#141414] hover:shadow-[2px_2px_0px_#141414]"
                  aria-label="Previous client testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  id="btn_testimonial_next"
                  onClick={nextTestimonial}
                  className="p-2 sm:p-3 hover:bg-[#F2F2EC] rounded-full border-2 border-[#141414] bg-white text-[#141414] transition-all cursor-pointer shadow-[1px_1px_0px_#141414] hover:shadow-[2px_2px_0px_#141414]"
                  aria-label="Next client testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Client logo grid simulator */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-40 hover:opacity-85 transition-all text-[#141414]">
          <div className="font-mono font-black text-xs uppercase tracking-widest">
            ATTIRE CO
          </div>
          <div className="font-mono font-black text-xs uppercase tracking-widest">
            HEALTHROUTE
          </div>
          <div className="font-mono font-black text-xs uppercase tracking-widest">
            COZYCAFE ROASTERS
          </div>
          <div className="font-mono font-black text-xs uppercase tracking-widest">
            IIDE NETWORKS
          </div>
        </div>

      </div>
    </section>
  );
}
