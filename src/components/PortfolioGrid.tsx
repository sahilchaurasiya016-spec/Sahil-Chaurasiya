import React, { useState } from "react";
import { projectsData } from "../data";
import { Project } from "../types";
import { ExternalLink, Tag, Briefcase, Award, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Web Design" | "SEO" | "Digital Marketing" | "E-commerce" | "Social Media" | "Branding">("All");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>("proj-1"); // First one open by default as a teaser!

  const categories = [
    { label: "All Projects", value: "All" },
    { label: "SEO Projects", value: "SEO" },
    { label: "E-Commerce", value: "E-commerce" },
    { label: "Web Design", value: "Web Design" },
    { label: "Social Media", value: "Social Media" },
    { label: "Branding", value: "Branding" },
  ] as const;

  const filteredProjects = projectsData.filter((proj) => {
    return selectedCategory === "All" || proj.category === selectedCategory;
  });

  const toggleExpand = (id: string) => {
    if (expandedProjectId === id) {
      setExpandedProjectId(null);
    } else {
      setExpandedProjectId(id);
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-[#F2F2EC] border-b border-[#141414]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-[#F2F2EC] bg-[#141414] border border-[#141414] px-3.5 py-1.5 rounded-full inline-block">
              Case Studies & Works
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#141414] uppercase tracking-tight font-display">
              My Portfolio
            </h2>
            <p className="text-[#141414]/70 text-sm max-w-xl">
              Concrete marketing implementations, audits, web rebuilds, and ROI metrics explaining exactly how Sahil drives client growth.
            </p>
          </div>
        </div>

        {/* Categories Tab selectors */}
        <div className="flex gap-1.5 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              id={`btn_port_cat_${cat.value.replace(/\s+/g, "_")}`}
              onClick={() => {
                setSelectedCategory(cat.value);
                // Reset expanded so it doesn't try to highlight something filtered out
                setExpandedProjectId(null);
              }}
              className={`px-4.5 py-2 text-[10px] uppercase tracking-widest rounded-full border-2 font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat.value
                  ? "bg-[#141414] border-[#141414] text-[#F2F2EC]"
                  : "bg-[#E4E4DF] border-black/10 text-[#141414]/80 hover:bg-white hover:border-[#141414]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => {
            const isExpanded = expandedProjectId === proj.id;
            return (
              <div
                key={proj.id}
                id={`project_card_${proj.id}`}
                className={`bg-white border-2 border-[#141414] rounded-xl overflow-hidden hover:shadow-[6px_6px_0px_#141414] transition-all flex flex-col justify-between ${
                  isExpanded ? "shadow-[6px_6px_0px_#141414]" : "shadow-[3px_3px_0px_#141414]"
                }`}
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden border-b-2 border-[#141414]">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform duration-700 ease-out hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-[#141414]/95 text-[#F2F2EC] border border-[#141414] font-mono text-[9px] tracking-widest font-black uppercase px-3 py-1.5 rounded shadow-sm">
                      {proj.category}
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="p-6 sm:p-8 space-y-4 text-left">
                    <div className="space-y-1.5">
                      <h4 className="font-display font-black text-lg sm:text-xl uppercase tracking-tight text-[#141414]">
                        {proj.title}
                      </h4>
                      <p className="text-[#141414]/80 text-xs sm:text-sm leading-relaxed">
                        {proj.description}
                      </p>
                    </div>

                    {/* Collapsible advanced Case Study details */}
                    {isExpanded && (
                      <div className="pt-4 border-t border-black/10 mt-4 space-y-5 animate-slide-in">
                        
                        {/* Long description explanation */}
                        {proj.longDescription && (
                          <div className="space-y-2">
                            <span className="text-[9px] uppercase font-mono tracking-widest font-black text-[#141414]/55">
                              The Client Problem
                            </span>
                            <p className="text-[#141414]/90 text-xs leading-relaxed">
                              {proj.longDescription}
                            </p>
                          </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Role specification */}
                          <div className="p-4 bg-[#F2F2EC]/50 border border-black/10 rounded-xl space-y-1">
                            <div className="flex items-center gap-1.5 text-[#141414]/60 text-[9px] uppercase font-mono tracking-wider font-bold">
                              <Briefcase className="w-3.5 h-3.5 text-[#141414]" />
                              <span>My Ownership</span>
                            </div>
                            <p className="text-[#141414] text-xs font-bold uppercase tracking-tight">
                              {proj.role}
                            </p>
                          </div>

                          {/* Tools specifications */}
                          <div className="p-4 bg-[#F2F2EC]/50 border border-black/10 rounded-xl space-y-1.5">
                            <span className="block text-[#141414]/60 text-[9px] uppercase font-mono tracking-wider font-bold">
                              Tools Implemented
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {proj.tools.map((tc) => (
                                <span
                                  key={tc}
                                  className="text-[9px] font-mono tracking-wider bg-[#E4E4DF] border border-black/10 px-2.5 py-0.5 rounded text-[#141414] font-bold"
                                >
                                  {tc}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Measurable Results */}
                        <div className="space-y-2">
                          <span className="text-[9px] uppercase font-mono tracking-widest font-bold text-emerald-600 block">
                            Measurable Business Growth
                          </span>
                          <ul className="space-y-2">
                            {proj.results.map((res) => (
                              <li key={res} className="flex items-start gap-2 text-xs text-[#141414]/90">
                                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span className="font-bold">{res}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Buttons row */}
                <div className="px-6 pb-6 pt-2 sm:px-8 sm:pb-8 flex items-center justify-between border-t border-black/10 mt-auto">
                  <button
                    id={`btn_port_expand_${proj.id}`}
                    onClick={() => toggleExpand(proj.id)}
                    className="text-[10px] font-bold uppercase tracking-widest text-[#141414] border-2 border-[#141414] bg-white hover:bg-[#F2F2EC] px-4 py-2.5 rounded shadow-[2px_2px_0px_#141414] transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{isExpanded ? "Hide Details" : "Case Studies Details"}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {proj.link && (
                    <a
                      id={`project_link_${proj.id}`}
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] uppercase font-bold tracking-widest text-[#141414] hover:underline flex items-center gap-1.5"
                    >
                      <span>Live Setup</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
