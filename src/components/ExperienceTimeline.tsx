import React from "react";
import { experienceData } from "../data";
import { Briefcase, MapPin, Calendar, CheckSquare, Sparkles } from "lucide-react";

export default function ExperienceTimeline() {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship":
        return "bg-blue-105 border-blue-200 text-blue-700";
      case "Freelance":
        return "bg-amber-105 border-amber-200 text-amber-700";
      case "Leadership":
        return "bg-emerald-105 border-emerald-200 text-emerald-700";
      default:
        return "bg-stone-105 border-stone-200 text-stone-700";
    }
  };

  return (
    <section id="experience" className="py-24 bg-[#F2F2EC] border-b border-[#141414]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-[#F2F2EC] bg-[#141414] border border-[#141414] px-3.5 py-1.5 rounded-full inline-block">
            Professional Growth
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#141414] uppercase tracking-tight font-display">
            Experience Timeline
          </h2>
          <p className="text-[#141414]/70 text-sm">
            Proven tracking of digital marketing, e-commerce management, leadership coordination, and collaborative client growth projects.
          </p>
        </div>

        {/* Timeline Line container */}
        <div className="relative max-w-3xl mx-auto pl-6 sm:pl-8 border-l-2 border-[#141414]/90 space-y-12">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              id={`experience_block_${exp.id}`}
              className="relative group text-left"
            >
              {/* Timeline bubble bullet custom decoration */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-6 w-6 rounded-full bg-white border-2 border-[#141414] group-hover:bg-[#141414] transition-colors flex items-center justify-center shadow-sm">
                <Briefcase className="w-3 h-3 text-[#141414] group-hover:text-[#F2F2EC] transition-colors" />
              </div>

              {/* Card Container */}
              <div className="bg-white border-2 border-[#141414] p-6 sm:p-8 rounded-xl shadow-[3px_3px_0px_#141414] hover:shadow-[5px_5px_0px_#141414] transition-all space-y-4">
                
                {/* Heading details */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-1.5">
                    <span className="inline-block text-[9px] font-bold font-mono uppercase px-2.5 py-0.5 rounded border border-[#141414] bg-[#E4E4DF] text-[#141414]">
                      {exp.type}
                    </span>
                    <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-tight text-[#141414]">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-[#141414]/70 font-bold">
                      <span>{exp.company}</span>
                      <span className="text-[#141414]/40">•</span>
                      <span className="flex items-center gap-1 font-mono text-[11px]">
                        <MapPin className="w-3 h-3 text-[#141414]/60" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Calendar tag */}
                  <span className="flex items-center gap-1.5 text-[9px] font-bold font-mono uppercase tracking-widest bg-[#E4E4DF] border border-black/10 px-3.5 py-1.5 rounded text-[#141414] shadow-sm">
                    <Calendar className="w-3.5 h-3.5 text-[#141414]/60" />
                    {exp.period}
                  </span>
                </div>

                {/* Bullets List */}
                <div className="space-y-3 font-sans text-xs sm:text-sm text-[#141414]/85 pt-2 border-t border-black/10">
                  {exp.description.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="p-0.5 rounded bg-[#E4E4DF] border border-black/15 mt-1 shrink-0">
                        <CheckSquare className="w-3 h-3 text-[#141414]" />
                      </div>
                      <p className="leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Skills practicing */}
                <div className="space-y-2 pt-3 border-t border-black/10">
                  <span className="text-[9px] uppercase font-mono tracking-widest font-black text-[#141414]/55 block">
                    Core Skills Exercised
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skillsAquired.map((ski) => (
                      <span
                        key={ski}
                        className="text-[10px] font-bold bg-[#E4E4DF] border border-black/10 text-[#141414] px-2.5 py-1 rounded shadow-sm"
                      >
                        {ski}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
