import React, { useState } from "react";
import { Download, FileText, CheckCircle, Mail, MapPin, Phone, Linkedin, ExternalLink } from "lucide-react";

export default function ResumeSection() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Generates and downloads a real .txt file of Sahil's resume dynamically.
  const handleDownload = () => {
    const resumeText = `
SAHIL CHAURASIYA
Digital Marketer | SEO Specialist | Website Designer
Email: sahilchaurasiya016@gmail.com
Phone: [Available upon request]
Location: Mumbai, India
LinkedIn: linkedin.com/in/sahil-chaurasiya
Instagram: instagram.com/sahil_chaurasiya

=========================================
PROFESSIONAL OBJECTIVE
=========================================
Dynamic, business-first marketing professional trained under IIDE's comprehensive curriculum, specializing in Technical Google SEO ranks, custom Shopify & WordPress storefronts conversion layouts, and viral organic social campaign funnels. Seeking exciting internships, freelance partnerships, and digital growth agency roles.

=========================================
ACADEMIC TIMELINE & CREDENTIALS
=========================================
* B.Com in Digital Business (Undergraduate Program)
  Focused on tech enterprises, consumer purchase psychology, and database strategies.

* Certification in Digital Marketing Program - IIDE
  Authorized training in Google GA4 tags, programmatic SEO indexing, Meta Ads, and direct copywriting.

=========================================
KEY PROJECT EXPERIENCE
=========================================
* LuxApparel Shopify Transformation (Lead CRO & Web Specialist)
  - Re-arranged storefront navigation pathways and deployed custom mobile-first layout triggers.
  - Slashed shopping cart abandonment rate by 34%.
  - Escalated direct e-commerce conversion rates from 1.4% to 3.2% in 45 days.

* Organic Scale-up: HyperGrowth SaaS (Technical SEO Auditor)
  - Resolved canonical errors, structured indexing schema, and formulated 15 content hubs.
  - Propelled monthly search engine traffic clicks by 320% in 12 weeks.
  - Ranked #1 for 18 primary high-commercial intent keywords.

* The Urban Roast Café Drive (SMM & Local Buzz Partner)
  - Directed localized influencer coordination briefs and aesthetic feed relaunch.
  - Garnered 4,200+ organic Instagram followers in 30 days.
  - Weekend walk-in volumes increased by 48%.

=========================================
SKILLSETS & TOOLS
=========================================
- Strategy & Traffic: SEO auditing, Meta Ads Manager, Google Tag Manager, GA4 Analytics.
- Design & Tech: Custom WordPress building, Elementor, Shopify configurations, Figma, Canva.
- Creative Mastery: Content copywriting, email sequence triggers, influencer briefs coordination.

=========================================
VERIFIED CREDENTIALS
=========================================
* IIDE Professional Digital Marketing Certification
* Google Analytics (GA4) Individual Qualification
* Google Search Ads Professional Certified
* Shopify Foundations Specialist Certificate
`;

    const blob = new Blob([resumeText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Sahil_Chaurasiya_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (    <section id="resume" className="py-24 bg-[#F2F2EC] border-b border-[#141414]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12 text-center max-w-2xl mx-auto">
          <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-[#F2F2EC] bg-[#141414] border border-[#141414] px-3.5 py-1.5 rounded-full inline-block">
            Resume Hub
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#141414] uppercase tracking-tight font-display">
            Curriculum Vitae
          </h2>
          <p className="text-[#141414]/70 text-sm">
            Review Sahil’s professional breakdown, or trigger a clean dynamic `.txt` resume copy instant download directly in your browser.
          </p>
        </div>

        {/* Custom Bento Design showing resume content sheet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Summary and Actions Col */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="bg-white border-2 border-[#141414] p-6 rounded-xl shadow-[3px_3px_0px_#141414] space-y-4">
              <h4 className="font-display font-black text-[#141414] uppercase tracking-tight text-lg">
                Key Recruiting Summary
              </h4>
              <p className="text-xs text-[#141414]/80 leading-relaxed">
                Sahil’s portfolio highlights robust implementation credentials. His training under IIDE Mumbai certifies professional capacity to deploy technical GA4 pixels, optimize WordPress loading speeds, audit Shopify bottlenecks, and drive search target schemas.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-black/10">
                <div className="flex items-center gap-2.5 text-xs text-[#141414]/90 font-bold">
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Available for 3-6 month internships</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#141414]/90 font-bold">
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Fully remote or on-site in Mumbai</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#141414]/90 font-bold">
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Freelance pricing on quote terms</span>
                </div>
              </div>
            </div>

            {/* Live download controller */}
            <div className="space-y-3">
              <button
                id="btn_resume_download"
                onClick={handleDownload}
                className="w-full bg-[#141414] hover:bg-[#141414]/95 text-white font-bold uppercase tracking-widest py-4 rounded border-2 border-[#141414] shadow-[3px_3px_0px_#141414] hover:shadow-[5px_5px_0px_#141414] transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{downloadSuccess ? "Downloaded Successfully!" : "Download Resume (.TXT)"}</span>
              </button>

              <p className="text-[10px] text-[#141414]/50 text-center font-mono font-bold">
                Dynamically generated Blob format matching standard ATS systems layout structure.
              </p>
            </div>
          </div>

          {/* Right Sheet Visual Column */}
          <div className="lg:col-span-8">
            <div className="bg-white text-[#141414] p-6 sm:p-10 border-2 border-[#141414] rounded-xl shadow-[5px_5px_0px_#141414] relative text-left">
              {/* Document Header lines */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-black/10">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#141414]/50 font-black font-mono">
                    SAHIL CHAURASIYA
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#141414]">
                    Digital Marketing & Web Designer
                  </h3>
                  <p className="text-xs text-[#141414]/70 font-bold uppercase tracking-wider">
                    B.Com Digital Business Undergrad • IIDE Trained Strategist
                  </p>
                </div>

                <div className="flex flex-col gap-1 text-[11px] font-mono text-[#141414] bg-[#F2F2EC] p-3 rounded border border-black/10 shrink-0 font-bold">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3 h-3 text-[#141414]" />
                    sahilchaurasiya016@gmail.com
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#141414]" />
                    Mumbai, India
                  </span>
                </div>
              </div>

              {/* Grid content */}
              <div className="py-6 space-y-6">
                {/* Core Focus Block */}
                <div className="space-y-2">
                  <h4 className="text-xs font-black font-mono text-[#141414] uppercase tracking-widest">
                    EDUCATION TIMELINE
                  </h4>
                  <div className="space-y-2.5">
                    <div>
                      <h5 className="text-xs sm:text-sm font-black text-[#141414] uppercase tracking-tight">IIDE — Indian Institute of Digital Education</h5>
                      <p className="text-[11px] text-[#141414]/85 leading-relaxed mt-0.5 font-sans font-medium">
                        Professional Digital Marketing Certification Program • Focus areas: SEO keyword audits, analytics tags, Google AdWords campaign design.
                      </p>
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-black text-[#141414] uppercase tracking-tight">B.Com in Digital Business</h5>
                      <p className="text-[11px] text-[#141414]/85 leading-relaxed mt-0.5 font-sans font-medium">
                        Contemporary undergraduate enterprise model coursework combining business structure setups, conversion models, and strategic digital operations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Core Work history highlight */}
                <div className="space-y-2 pt-4 border-t border-black/10">
                  <h4 className="text-xs font-black font-mono text-[#141414] uppercase tracking-widest">
                    HIGHLIGHT CASE STUDIES
                  </h4>
                  <div className="space-y-3 font-sans">
                    <div>
                      <div className="flex justify-between items-baseline">
                        <h5 className="text-xs sm:text-sm font-extrabold text-[#141414] uppercase tracking-tight">E-Commerce Shop Transformation</h5>
                        <span className="text-[9px] font-mono font-bold text-[#141414]/60 uppercase tracking-widest">Shopify CRO</span>
                      </div>
                      <p className="text-[11px] text-[#141414]/85 font-medium mt-1">
                        Redesigned checkout layouts, reduced cart abandonment by 34%, and scaled overall conversions from 1.4% to 3.2% inside 45 days.
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between items-baseline">
                        <h5 className="text-xs sm:text-sm font-extrabold text-[#141414] uppercase tracking-tight font-display">Technical SEO Scale-Up</h5>
                        <span className="text-[9px] font-mono font-bold text-[#141414]/60 uppercase tracking-widest">Organic Growth</span>
                      </div>
                      <p className="text-[11px] text-[#141414]/85 font-medium mt-1">
                        Executed comprehensive backlink auditing and semantic outlines, driving a 320% traffic surge and grabbing Page #1 indexes for 18 commercial target terms.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Core Skills segment */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-black/10">
                  <div>
                    <h4 className="text-xs font-black font-mono text-[#141414] uppercase tracking-widest mb-2">
                      DESIGN & DEV TOOLS
                    </h4>
                    <p className="text-[11px] text-[#141414]/80 leading-relaxed font-semibold">
                      WordPress element builders, Shopify liquid setup, custom landing pages, Figma canvas, Canva Pro graphics.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-black font-mono text-[#141414] uppercase tracking-widest mb-2">
                      MARKETING & ANALYTICS
                    </h4>
                    <p className="text-[11px] text-[#141414]/80 leading-relaxed font-semibold">
                      Google Analytics 4 setup, GSC crawlers metrics, search keywords auditing, Meta Ads Manager, Klaviyo automated CRM sequences.
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive badge bar */}
              <div className="pt-4 border-t border-black/10 flex items-center justify-between text-[9px] font-mono font-bold text-[#141414]/50 uppercase">
                <span>Printable with System standard styling</span>
                <span className="text-[#141414]">Ready to build amazing things</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
