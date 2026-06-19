import React, { useState, useEffect } from "react";
import { ContactInquiry } from "./types";

// Component imports
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsGrid from "./components/SkillsGrid";
import ServicesPanel from "./components/ServicesPanel";
import PortfolioGrid from "./components/PortfolioGrid";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Certifications from "./components/Certifications";
import Testimonials from "./components/Testimonials";
import ResumeSection from "./components/ResumeSection";
import ContactForm from "./components/ContactForm";
import CreativeCtaSection from "./components/CreativeCtaSection";
import Footer from "./components/Footer";
import AdminInbox from "./components/AdminInbox";

export default function App() {
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Load inquiries from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("sahil_portfolio_inquiries");
    if (stored) {
      try {
        setInquiries(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse stored inquiries, resetting.", e);
        initializeSampleLeads();
      }
    } else {
      initializeSampleLeads();
    }
  }, []);

  const initializeSampleLeads = () => {
    const samples: ContactInquiry[] = [
      {
        id: "sample-1",
        name: "Arjun Malhotra (Hiring Lead)",
        email: "arjun@growthpioneers.co",
        phone: "+91 98334 11204",
        message: "Hi Sahil! Deployed your SEO Audit case study link in our Slack. Your on-page technical audit diagnostics matched exactly what we look for in digital associates. Let's arrange a brief Google Meet next Tuesday morning to discuss our winter marketing vacancy!",
        timestamp: new Date(Date.now() - 3 * 3600000).toISOString(), // 3 hours ago
        status: "new"
      },
      {
        id: "sample-2",
        name: "Sarah Jenkins (Co-Founder)",
        email: "sarah@shopattire.com",
        phone: "+1 (555) 304-2041",
        message: "Hey Sahil, I saw your Shopify and Klaviyo integrations on Pinterest. We are preparing to re-design our collection template pages to decrease cart abandonment and we loved your conversion case-studies. Are you currently available for immediate freelance consultation?",
        timestamp: new Date(Date.now() - 28 * 3600000).toISOString(), // ~1 day ago
        status: "reviewed"
      }
    ];
    setInquiries(samples);
    localStorage.setItem("sahil_portfolio_inquiries", JSON.stringify(samples));
  };

  const handleNewSubmission = (newInq: ContactInquiry) => {
    const updated = [newInq, ...inquiries];
    setInquiries(updated);
    localStorage.setItem("sahil_portfolio_inquiries", JSON.stringify(updated));
    // Provide delightful micro-alert
    console.log("Registered new client inquiry:", newInq);
  };

  const handleUpdateStatus = (id: string, status: "new" | "reviewed" | "archived") => {
    const updated = inquiries.map((inq) => {
      if (inq.id === id) {
        return { ...inq, status };
      }
      return inq;
    });
    setInquiries(updated);
    localStorage.setItem("sahil_portfolio_inquiries", JSON.stringify(updated));
  };

  const handleClearAllInquiries = () => {
    setInquiries([]);
    localStorage.removeItem("sahil_portfolio_inquiries");
  };

  const handleAddSampleInquiry = () => {
    const names = [
      "Priya Sethi (Digital Director)",
      "Kabir Oberoi (D2C Brand Owner)",
      "Meera Sen (Talent Recruiter)",
      "Siddharth Roy (SEO Partner)"
    ];
    const emails = [
      "priya@dentsu-mumbai.in",
      "founder@oberoibrews.com",
      "meera.recruiting@gmail.com",
      "sid@rankboost.net"
    ];
    const messages = [
      "Hey Sahil, I noticed your B.Com digital business training background. We running a 60-day Meta ad optimization project and would love to contract your design framework skills.",
      "Fantastic portfolio layout and clean interactive grids Sahil. Deployed your resume text document to our marketing panel successfully.",
      "Are you available for hybrid workspace positions in Mumbai or on-site roles? Our analytics group wants to setup tag trigger goals with you.",
      "Hi Sahil, your local espresso café influencer drive metric list looked highly precise. Deployed organic Reels targeting looks great."
    ];

    const idx = Math.floor(Math.random() * names.length);
    const mockInq: ContactInquiry = {
      id: "mock-" + Date.now(),
      name: names[idx],
      email: emails[idx],
      phone: "+91 9" + Math.floor(100000000 + Math.random() * 900000000),
      message: messages[idx],
      timestamp: new Date().toISOString(),
      status: "new"
    };

    const updated = [mockInq, ...inquiries];
    setInquiries(updated);
    localStorage.setItem("sahil_portfolio_inquiries", JSON.stringify(updated));
  };

  // Nav scroll targets helper
  const navigateToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6]/40 flex flex-col justify-between selection:bg-stone-300 selection:text-stone-900 selection:font-semibold">
      {/* Floating Header Navigation Bar */}
      <Navbar
        isAdminOpen={isAdminOpen}
        onAdminToggle={() => setIsAdminOpen(!isAdminOpen)}
      />

      {/* Main Sections Body wrapper */}
      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <Hero
          onContactClick={() => navigateToSection("contact")}
          onWorkClick={() => navigateToSection("portfolio")}
        />

        {/* ABOUT PROFILE SECTION */}
        <About />

        {/* INTERACTIVE SKILLS GRID */}
        <SkillsGrid />

        {/* SERVICES OFFERED BENTO */}
        <ServicesPanel />

        {/* CASE STUDIES PORTFOLIO */}
        <PortfolioGrid />

        {/* PROFESSIONAL WORK TIMELINE */}
        <ExperienceTimeline />

        {/* INDUSTRY ACCREDITATIONS SUMMARY */}
        <Certifications />

        {/* CLIENT TESTIMONIALS SLIDER */}
        <Testimonials />

        {/* ATS REVOLVING RESUME HUB */}
        <ResumeSection />

        {/* LEAD ACQUISITION PORTAL CONTACT FORM */}
        <ContactForm onNewSubmission={handleNewSubmission} />

        {/* PINTEREST INSPIRED EXTRAORDINARY CTA WRAP */}
        <CreativeCtaSection
          onContactClick={() => navigateToSection("contact")}
          onDownloadResume={() => {
            const el = document.getElementById("resume");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

      </main>

      {/* DETAILED FOOTER PANEL */}
      <Footer />

      {/* Off-canvas client inquiries side drawer list */}
      <AdminInbox
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        inquiries={inquiries}
        onUpdateStatus={handleUpdateStatus}
        onClearAll={handleClearAllInquiries}
        onAddSampleLead={handleAddSampleInquiry}
      />
    </div>
  );
}
