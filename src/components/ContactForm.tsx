import React, { useState } from "react";
import { ContactInquiry } from "../types";
import { Send, CheckCircle2, Phone, Mail, Linkedin, Instagram, ArrowUpRight, MessageSquareCode } from "lucide-react";

interface ContactFormProps {
  onNewSubmission: (inquiry: ContactInquiry) => void;
}

export default function ContactForm({ onNewSubmission }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  
  const [formError, setFormError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!name.trim()) {
      setFormError("Please provide your name.");
      return;
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }
    if (!message.trim()) {
      setFormError("Please write a small message detailing your inquiry.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Send form data to FormSubmit.co
      const response = await fetch("https://formsubmit.co/ajax/sahilchaurasiya016@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || "N/A",
          message: message.trim(),
          _subject: `New Portfolio Message from ${name.trim()}`,
          _replyto: email.trim(),
          _honey: "" // anti-spam bot field
        })
      });

      if (!response.ok) {
        throw new Error("Unable to forward the email. Please try direct email Instead!");
      }

      // Live client storage logging
      const newInq: ContactInquiry = {
        id: "inq-" + Date.now(),
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim() || "N/A",
        message: message.trim(),
        timestamp: new Date().toISOString(),
        status: "new",
      };

      onNewSubmission(newInq);
      setSubmitted(true);

      // Reset inputs
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

      setTimeout(() => {
        setSubmitted(false);
      }, 7000);
    } catch (err: any) {
      console.error("Form transmission failed:", err);
      setFormError(err.message || "An unexpected error occurred. Please try sending directly to sahilchaurasiya016@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#F2F2EC] border-b border-[#141414]/10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic call out info banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column info details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-[#F2F2EC] bg-[#141414] border border-[#141414] px-3.5 py-1.5 rounded-full inline-block">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#141414] font-display uppercase tracking-tight leading-tight">
                Let's Build Something Amazing.
              </h2>
              <p className="text-[#141414]/75 text-sm leading-relaxed font-bold">
                Seeking a proactive digital marketing intern, e-commerce site architect, or creative freelance content writer? Submit an inquiry details, or reach out directly on social networks.
              </p>
            </div>

            {/* Direct contact info cards */}
            <div className="space-y-4">
              
              {/* Email Address */}
              <a
                href="mailto:sahilchaurasiya016@gmail.com"
                id="contact_email_card"
                className="flex items-center gap-4 p-4 bg-white border-2 border-[#141414] rounded-xl shadow-[3px_3px_0px_#141414] hover:shadow-[5px_5px_0px_#141414] transition-all group"
              >
                <div className="p-3 bg-[#F2F2EC] text-[#141414] border border-black/10 rounded group-hover:bg-[#141414] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase font-mono tracking-widest font-black text-[#141414]/60">
                    Direct Email
                  </span>
                  <p className="text-sm font-black text-[#141414] group-hover:underline transition-all">
                    sahilchaurasiya016@gmail.com
                  </p>
                </div>
              </a>

              {/* Whatsapp Chat API */}
              <a
                href="https://wa.me/919999999999?text=Hi%20Sahil,%20I%20viewed%20your%25portfolio" 
                target="_blank"
                rel="noopener noreferrer"
                id="contact_whatsapp_card"
                className="flex items-center gap-4 p-4 bg-white border-2 border-[#141414] rounded-xl shadow-[3px_3px_0px_#141414] hover:shadow-[5px_5px_0px_#141414] transition-all group"
              >
                <div className="p-3 bg-[#F2F2EC] text-[#141414] border border-black/10 rounded group-hover:bg-[#141414] group-hover:text-white transition-colors">
                  <MessageSquareCode className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase font-mono tracking-widest font-black text-[#141414]/60">
                    WhatsApp Chat
                  </span>
                  <p className="text-sm font-black text-[#141414] group-hover:underline transition-all flex items-center gap-1">
                    <span>Chat With Sahil Offline</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                  </p>
                </div>
              </a>

              {/* Social grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="https://linkedin.com/in/sahil-chaurasiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3.5 border-2 border-[#141414] bg-white rounded-xl text-[#141414] shadow-[3px_3px_0px_#141414] hover:shadow-[1px_1px_0px_#141414] hover:translate-x-[2px] hover:translate-y-[2px] font-black uppercase tracking-widest text-[10px] transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Link</span>
                </a>
                <a
                  href="https://instagram.com/sahil_chaurasiya" // matching portfolio schema
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3.5 border-2 border-[#141414] bg-white rounded-xl text-[#141414] shadow-[3px_3px_0px_#141414] hover:shadow-[1px_1px_0px_#141414] hover:translate-x-[2px] hover:translate-y-[2px] font-black uppercase tracking-widest text-[10px] transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram Hook</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column Form Block */}
          <div className="lg:col-span-7 bg-white border-2 border-[#141414] shadow-[5px_5px_0px_#141414] rounded-xl p-6 sm:p-9 text-[#141414]">
            
            {submitted ? (
              <div id="contact_form_success" className="py-12 text-center space-y-4 animate-fade-in">
                <div className="h-16 w-16 bg-emerald-50 border-2 border-emerald-500 rounded-lg flex items-center justify-center text-emerald-700 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-display font-black uppercase tracking-tight text-stone-900 text-xl">
                    Inquiry Received!
                  </h4>
                  <p className="text-[#141414]/80 text-xs sm:text-sm max-w-sm mx-auto font-medium">
                    Thanks for connecting. Sahil stores your submission directly in your browser's Local Storage context.
                  </p>
                </div>
                
                {/* Visual reminder to see their submission in the top dashboard panel */}
                <div className="bg-[#F2F2EC] border-2 border-[#141414] p-4.5 rounded text-xs text-[#141414] font-semibold leading-relaxed">
                  💡 <strong>Tip for recruiters:</strong> Click the <strong>"Client Leads"</strong> button in the floating top navigation bar right now to see and review your test message live!
                </div>
              </div>
            ) : (
              <form id="contact_form" onSubmit={handleSubmit} className="space-y-5">
                
                <h3 className="font-display font-black text-xl uppercase tracking-tight text-[#141414]">
                  Inquire Now
                </h3>

                {formError && (
                  <div className="p-3 bg-red-55 border-2 border-red-500 text-red-700 text-xs rounded font-bold uppercase tracking-wide">
                    ⚠️ {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form_name_input" className="text-[10px] font-black font-mono text-[#141414]/70 uppercase tracking-widest block">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="form_name_input"
                      type="text"
                      required
                      placeholder="e.g. Recruiters / Brand Owner"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-white border-2 border-[#141414] rounded font-bold text-[#141414] focus:outline-none focus:bg-[#F2F2EC]/20 text-sm"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form_email_input" className="text-[10px] font-black font-mono text-[#141414]/70 uppercase tracking-widest block">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="form_email_input"
                      type="email"
                      required
                      placeholder="e.g. business@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-white border-2 border-[#141414] rounded font-bold text-[#141414] focus:outline-none focus:bg-[#F2F2EC]/20 text-sm"
                    />
                  </div>
                </div>

                {/* Phone key field */}
                <div className="space-y-1.5">
                  <label htmlFor="form_phone_input" className="text-[10px] font-black font-mono text-[#141414]/70 uppercase tracking-widest block">
                    Phone digits (Optional)
                  </label>
                  <input
                    id="form_phone_input"
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-white border-2 border-[#141414] rounded font-bold text-[#141414] focus:outline-none focus:bg-[#F2F2EC]/20 text-sm"
                  />
                </div>

                {/* Message text area */}
                <div className="space-y-1.5">
                  <label htmlFor="form_message_input" className="text-[10px] font-black font-mono text-[#141414]/70 uppercase tracking-widest block">
                    Project Goals / Message Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="form_message_input"
                    rows={4}
                    required
                    placeholder="Describe your internship opportunity or custom SEO/WordPress freelance project guidelines..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-white border-2 border-[#141414] rounded font-bold text-[#141414] focus:outline-none focus:bg-[#F2F2EC]/20 text-sm resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  id="btn_contact_submit"
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#141414] hover:bg-[#141414]/90 text-[#F2F2EC] font-black uppercase tracking-widest py-4 rounded border-2 border-[#141414] shadow-[3px_3px_0px_#141414] hover:shadow-[5px_5px_0px_#141414] transition-all flex items-center justify-center gap-2 text-xs ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : "cursor-pointer"
                  }`}
                >
                  <Send className={`w-4 h-4 ${isSubmitting ? "animate-spin" : "animate-bounce"}`} />
                  <span>{isSubmitting ? "Sending..." : "Submit Client Proposal"}</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
