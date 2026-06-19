import React, { useState } from "react";
import { servicesData } from "../data";
import * as LucideIcons from "lucide-react";
import { Check, ArrowRight } from "lucide-react";

export default function ServicesPanel() {
  const [activeServiceId, setActiveServiceId] = useState<string>(servicesData[0].id);

  const getIcon = (name: string) => {
    const IconComponent = (LucideIcons as any)[name];
    if (IconComponent) {
      return <IconComponent className="w-6 h-6 text-stone-900" />;
    }
    return <LucideIcons.Layers className="w-6 h-6 text-stone-900" />;
  };

  const activeService = servicesData.find((s) => s.id === activeServiceId) || servicesData[0];

  return (
    <section id="services" className="py-24 bg-[#F2F2EC] border-b border-[#141414]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12 text-center max-w-2xl mx-auto">
          <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-[#F2F2EC] bg-[#141414] border border-[#141414] px-3.5 py-1.5 rounded-full inline-block">
            Professional Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#141414] uppercase tracking-tight font-display">
            Services Deployed
          </h2>
          <p className="text-[#141414]/75 text-sm">
            Comprehensive marketing consultation and technical asset building designed to generate conversions, build traffic, and create professional value.
          </p>
        </div>

        {/* Split Screen interactive view */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Layout List of Service Toggles */}
          <div className="lg:col-span-5 space-y-3.5">
            {servicesData.map((svc) => {
              const isSelected = svc.id === activeServiceId;
              return (
                <button
                  key={svc.id}
                  id={`btn_svc_${svc.id}`}
                  onClick={() => setActiveServiceId(svc.id)}
                  className={`w-full text-left p-5 rounded-xl border-2 transition-all flex items-start justify-between group cursor-pointer ${
                    isSelected
                      ? "bg-white border-[#141414] shadow-[4px_4px_0px_#141414]"
                      : "bg-[#E4E4DF] border-black/10 hover:bg-white"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-lg border transition-colors ${
                      isSelected ? "bg-[#141414] border-[#141414] text-[#F2F2EC]" : "bg-white border-black/10 text-stone-900"
                    }`}>
                      {/* Apply styled icons */}
                      <div className={isSelected ? "text-white" : "text-stone-900"}>
                        {getIcon(svc.iconName)}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display font-black text-sm uppercase tracking-tight text-[#141414]">
                        {svc.title}
                      </h4>
                      <p className="text-xs text-stone-650 line-clamp-1">
                        {svc.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 text-[#141414]/40 mt-2.5 transition-transform group-hover:translate-x-1 ${
                    isSelected ? "text-[#141414] font-black" : ""
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Layout Active Panel Detail Card */}
          <div 
            id="active_service_details_panel"
            className="lg:col-span-7 bg-white border-2 border-[#141414] shadow-[6px_6px_0px_#141414] rounded-xl p-7 sm:p-9 space-y-6 animate-fade-in relative overflow-hidden"
          >
            {/* Soft decorative background patch */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F2F2EC]/40 rounded-bl-[4rem] border-l border-b border-black/5 -z-10" />

            <div className="space-y-3">
              <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-[#141414]">
                {activeService.title}
              </h3>
              <p className="text-[#141414]/90 text-sm sm:text-base leading-relaxed">
                {activeService.description}
              </p>
            </div>

            {/* Split specifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-5 border-t border-black/10">
              
              {/* Features List */}
              <div className="space-y-3.5">
                <span className="text-[9px] uppercase font-mono tracking-widest font-black text-[#141414]/50">
                  Included Focus Areas
                </span>
                <ul className="space-y-2">
                  {activeService.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs text-[#141414]/90">
                      <div className="p-0.5 rounded bg-[#E4E4DF] border border-black/15 mt-0.5">
                        <Check className="w-3 h-3 text-[#141414]" />
                      </div>
                      <span className="font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables list */}
              <div className="space-y-3.5">
                <span className="text-[9px] uppercase font-mono tracking-widest font-black text-[#141414]/50">
                  Concrete Deliverables
                </span>
                <ul className="space-y-2">
                  {activeService.deliverables.map((deliv) => (
                    <li key={deliv} className="flex items-start gap-2.5 text-xs text-[#141414]/90">
                      <div className="p-0.5 rounded bg-[#E4E4DF] border border-black/15 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-700" />
                      </div>
                      <span className="font-bold">{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Service CTA footer */}
            <div className="border-t border-black/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#141414]/55">
                  Fixed pricing and milestone models available
                </p>
              </div>
              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto bg-[#141414] hover:bg-white text-[#F2F2EC] hover:text-[#141414] font-bold text-[10px] uppercase tracking-widest px-6 py-3.5 rounded-full border border-[#141414] transition-all duration-200 hover:scale-105 cursor-pointer"
              >
                Inquire About Service
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
