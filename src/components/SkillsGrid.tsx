import React, { useState } from "react";
import { skillsData } from "../data";
import * as LucideIcons from "lucide-react";
import { Search, ChevronRight, SlidersHorizontal } from "lucide-react";

export default function SkillsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Marketing" | "Design & Tech" | "Strategy & Analytics">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const getIcon = (name: string) => {
    const IconComponent = (LucideIcons as any)[name];
    if (IconComponent) {
      return <IconComponent className="w-5 h-5" />;
    }
    return <LucideIcons.CheckCircle className="w-5 h-5" />;
  };

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = selectedCategory === "All" || skill.category === selectedCategory;
    const matchesQuery = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const categories = [
    { label: "All Skills", value: "All" },
    { label: "Digital Marketing", value: "Marketing" },
    { label: "Design & Technology", value: "Design & Tech" },
    { label: "Strategy & Analytics", value: "Strategy & Analytics" },
  ] as const;

  return (
    <section id="skills" className="py-24 bg-[#F2F2EC] border-b border-[#141414]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-[#F2F2EC] bg-[#141414] border border-[#141414] px-3.5 py-1.5 rounded-full inline-block">
              Expertise Meter
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#141414] uppercase tracking-tight font-display">
              Skillsets & Tool Familiarity
            </h2>
            <p className="text-[#141414]/70 text-sm max-w-xl">
              Equipped with theoretical validation, direct training, and implementation experience on real business portals.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" style={{ top: "50%" }} />
            <input
              id="skill_search_input"
              type="text"
              placeholder="Search skill (e.g. Shopify, SEO)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs font-bold uppercase tracking-wider border-2 border-[#141414] bg-white text-[#141414] rounded-full focus:outline-none shadow-[2px_2px_0px_#141414] placeholder-stone-400"
            />
          </div>
        </div>

        {/* Categories Tab selectors */}
        <div className="flex gap-1.5 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              id={`btn_skills_cat_${cat.value.replace(/\s+/g, "_")}`}
              onClick={() => setSelectedCategory(cat.value)}
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

        {/* Grid of skill cards */}
        {filteredSkills.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border-2 border-[#141414] shadow-[3px_3px_0px_#141414] max-w-md mx-auto">
            <SlidersHorizontal className="w-8 h-8 text-stone-400 mx-auto mb-2" />
            <p className="text-xs uppercase tracking-widest font-bold text-[#141414]">No matching skills found</p>
            <p className="text-xs text-stone-500 mt-1">Try searching with a different term.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                id={`skill_card_${skill.name.toLowerCase().replace(/\s+/g, "_")}`}
                className="bg-white border-2 border-[#141414] rounded-xl p-5 shadow-[3px_3px_0px_#141414] hover:shadow-[5px_5px_0px_#141414] transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-[#E4E4DF] border border-black/10 text-[#141414] shadow-sm">
                        {getIcon(skill.iconName)}
                      </div>
                      <div>
                        <h4 className="font-display font-black text-sm uppercase tracking-tight text-[#141414]">
                          {skill.name}
                        </h4>
                        <span className="text-[9px] font-mono uppercase text-[#141414]/60 tracking-widest font-black">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                    {/* Proficiency percentage label */}
                    <span className="text-xs font-mono font-black text-[#141414]">
                      {skill.level}%
                    </span>
                  </div>

                  <p className="text-xs leading-relaxed text-[#141414]/80 font-sans">
                    {skill.description}
                  </p>
                </div>

                {/* Animated bar tracker container */}
                <div className="w-full bg-[#E4E4DF] h-2 rounded-full overflow-hidden mt-5 border border-[#141414]/10">
                  <div
                    id={`skill_bar_${skill.name.toLowerCase().replace(/\s+/g, "_")}`}
                    className="bg-[#141414] h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer recommendation tag */}
        <div className="mt-8 bg-white rounded-xl p-5 border-2 border-[#141414] shadow-[4px_4px_0px_#141414] max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="h-2 w-2 rounded-full bg-[#141414] animate-ping shrink-0" />
            <p className="text-xs text-[#141414]/80 font-medium leading-relaxed">
              <strong>Need a highly custom WordPress or Shopify build?</strong> Sahil combines landing page copy psychology directly with search metadata setups.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-xs font-black uppercase tracking-widest text-[#141414] hover:underline flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>Ask for a Quote</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
