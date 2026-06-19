import React from "react";
import { certificationsData } from "../data";
import { Award, Check, ExternalLink } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-[#F2F2EC] border-b border-[#141414]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12 text-center max-w-2xl mx-auto">
          <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-[#F2F2EC] bg-[#141414] border border-[#141414] px-3.5 py-1.5 rounded-full inline-block">
            Professional Verification
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#141414] uppercase tracking-tight font-display">
            Certifications & Training
          </h2>
          <p className="text-[#141414]/70 text-sm">
            Rigorous technical assessments and platform certifications proving knowledge across marketing channels, analytics, and store engines.
          </p>
        </div>

        {/* Certifications row card list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              id={`cert_card_${cert.id}`}
              className="bg-white border-2 border-[#141414] rounded-xl p-6 shadow-[3px_3px_0px_#141414] hover:shadow-[5px_5px_0px_#141414] transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 text-left">
                    <div className="p-3 rounded-lg bg-[#E4E4DF] border border-black/10 text-[#141414] shadow-sm shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-display font-black text-base uppercase tracking-tight text-[#141414] leading-tight">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-[#141414]/70 font-bold uppercase tracking-wider mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Issuing Date Pill */}
                  <span className="text-[9px] font-bold font-mono text-[#141414] uppercase tracking-widest px-3 py-1 bg-[#E4E4DF] border border-black/10 rounded shadow-sm shrink-0">
                    {cert.date}
                  </span>
                </div>

                {/* Verified Skills tags inside */}
                <div className="space-y-2 pt-3 border-t border-black/10">
                  <span className="text-[9px] uppercase font-mono tracking-widest font-black text-[#141414]/55 block text-left">
                    Verified Competencies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsVerified.map((sk) => (
                      <span
                        key={sk}
                        className="inline-flex items-center gap-1 text-[10px] font-bold bg-[#E4E4DF] text-[#141414] px-2.5 py-1 rounded border border-black/10 shadow-sm"
                      >
                        <Check className="w-3 h-3 text-emerald-700 shrink-0" />
                        <span>{sk}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dynamic verified links */}
              <div className="mt-5 pt-4 border-t border-black/10 flex justify-end">
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-emerald-805 flex items-center gap-1.5 bg-[#F2F2EC] border border-black/10 px-3 py-1.5 rounded">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Credential Verified by Employer</span>
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
