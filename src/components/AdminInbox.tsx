import React, { useState, useEffect } from "react";
import { ContactInquiry } from "../types";
import { Mail, CheckCircle, Trash2, RotateCcw, HelpCircle, Archive, Plus, ShieldCheck, X } from "lucide-react";

interface AdminInboxProps {
  isOpen: boolean;
  onClose: () => void;
  inquiries: ContactInquiry[];
  onUpdateStatus: (id: string, status: "new" | "reviewed" | "archived") => void;
  onClearAll: () => void;
  onAddSampleLead: () => void;
}

export default function AdminInbox({
  isOpen,
  onClose,
  inquiries,
  onUpdateStatus,
  onClearAll,
  onAddSampleLead,
}: AdminInboxProps) {
  const [filter, setFilter] = useState<"all" | "new" | "reviewed" | "archived">("all");
  const [activeMessageId, setActiveMessageId] = useState<string | null>(null);

  if (!isOpen) return null;

  const filteredInquiries = inquiries.filter((inq) => {
    if (filter === "all") return true;
    return inq.status === filter;
  });

  const activeInquiry = inquiries.find((i) => i.id === activeMessageId) || filteredInquiries[0];

  return (
    <div
      id="admin_leads_panel"
      className="fixed inset-0 z-50 overflow-hidden flex items-center justify-end bg-[#141414]/60 backdrop-blur-sm animate-fade-in"
    >
      <div className="w-full max-w-4xl h-full bg-[#F2F2EC] border-l-4 border-[#141414] shadow-2xl flex flex-col relative text-[#141414]">
        {/* Header bar */}
        <div className="p-5 border-b-2 border-[#141414] bg-[#E4E4DF] flex items-center justify-between">
          <div>
            <h3 className="font-display font-black text-base sm:text-lg text-[#141414] uppercase tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
              Recruiter Hub: Client Leads Simulator
            </h3>
            <p className="text-[10px] sm:text-xs text-[#141414]/70 font-mono mt-0.5 font-bold uppercase tracking-wider">
              Live storage engine logs all submissions instantly to test form operations offline.
            </p>
          </div>
          <button
            id="btn_admin_close"
            onClick={onClose}
            className="px-3.5 py-1.5 text-xs border-2 border-[#141414] rounded bg-white hover:bg-[#F2F2EC] font-black uppercase tracking-widest text-[#141414] cursor-pointer shadow-[2px_2px_0px_#141414] transition-all"
          >
            Close Panel
          </button>
        </div>

        {/* Dashboard Actions */}
        <div className="p-4 bg-[#F2F2EC] border-b-2 border-[#141414]/10 flex flex-wrap gap-2.5 items-center justify-between">
          <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {(["all", "new", "reviewed", "archived"] as const).map((opt) => (
              <button
                key={opt}
                id={`btn_admin_filter_${opt}`}
                onClick={() => setFilter(opt)}
                className={`px-3 py-1.5 text-[10px] rounded border-2 border-[#141414] uppercase tracking-wider font-extrabold transition-all cursor-pointer ${
                  filter === opt
                    ? "bg-[#141414] text-[#F2F2EC]"
                    : "bg-white text-[#141414] hover:bg-[#E4E4DF]"
                }`}
              >
                {opt} ({opt === "all" ? inquiries.length : inquiries.filter((i) => i.status === opt).length})
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              id="btn_admin_add_sample"
              onClick={onAddSampleLead}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-black uppercase tracking-widest rounded border-2 border-[#141414] cursor-pointer shadow-[2px_2px_0px_#141414]"
            >
              <Plus className="w-3 h-3" />
              <span>Simulate Lead</span>
            </button>
            {inquiries.length > 0 && (
              <button
                id="btn_admin_clear_all"
                onClick={onClearAll}
                className="flex items-center gap-1 px-3 py-1.5 text-[10px] border-2 border-[#141414] bg-red-50 text-red-700 hover:bg-red-100 font-black uppercase tracking-widest rounded cursor-pointer shadow-[2px_2px_0px_#141414]"
              >
                <Trash2 className="w-3" />
                <span>Reset Data</span>
              </button>
            )}
          </div>
        </div>

        {/* Outer Split Pane Layout */}
        <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
          {/* Left panel: Message List */}
          <div className="w-full md:w-5/12 border-b md:border-b-0 md:border-r-2 border-[#141414]/15 overflow-y-auto h-1/2 md:h-full bg-[#F2F2EC]">
            {filteredInquiries.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
                <Mail className="w-8 h-8 text-[#141414]/30 mb-2" />
                <p className="text-xs font-black uppercase tracking-wider text-[#141414]">No leads found</p>
                <p className="text-[11px] text-[#141414]/60 font-semibold mt-1 leading-relaxed">
                  Fill out the contact form below or hit "Simulate Lead" above to register a test message instantly.
                </p>
              </div>
            ) : (
              <div className="divide-y divide-[#141414]/10 bg-[#F2F2EC]">
                {filteredInquiries.map((inq) => {
                  const isActive = activeInquiry && activeInquiry.id === inq.id;
                  return (
                    <div
                      key={inq.id}
                      onClick={() => setActiveMessageId(inq.id)}
                      className={`p-4 text-left cursor-pointer transition-all relative select-none ${
                        isActive ? "bg-[#E4E4DF] border-l-4 border-[#141414]" : "hover:bg-[#E4E4DF]/40"
                      }`}
                    >
                      {/* Status indicator pill */}
                      <span
                        className={`absolute top-4 right-3.5 w-2 h-2 rounded-full ${
                          inq.status === "new"
                            ? "bg-blue-600"
                            : inq.status === "reviewed"
                            ? "bg-emerald-600"
                            : "bg-stone-400"
                        }`}
                      />

                      <div className="font-extrabold text-xs uppercase tracking-wider text-[#141414] pr-5 truncate">{inq.name}</div>
                      <div className="text-[10px] font-mono font-bold text-[#141414]/65 mt-0.5 truncate">{inq.email}</div>
                      <p className="text-xs font-medium text-[#141414]/80 mt-2 line-clamp-2 leading-relaxed">
                        {inq.message}
                      </p>
                      <div className="flex items-center justify-between mt-2.5">
                        <span className="text-[9px] font-mono font-bold text-stone-500">
                          {new Date(inq.timestamp).toLocaleString([], {
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                        <span className="text-[8.5px] font-black uppercase tracking-widest px-2 py-0.5 rounded border border-black/10 bg-white text-[#141414]">
                          {inq.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right panel: Active Message Details */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col justify-between bg-white h-1/2 md:h-full text-[#141414]">
            {activeInquiry ? (
              <div className="space-y-6">
                {/* Contact main detail header */}
                <div className="border-b-2 border-black/10 pb-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-display font-black text-xl uppercase tracking-tight text-[#141414]">{activeInquiry.name}</h4>
                    <div className="flex items-center gap-1.5">
                      <button
                        title="Mark New"
                        onClick={() => onUpdateStatus(activeInquiry.id, "new")}
                        className={`p-2 rounded border-2 transition-all cursor-pointer ${
                          activeInquiry.status === "new" ? "bg-white border-[#141414] text-[#141414] shadow-[1px_1px_0px_#141414]" : "bg-white border-[#141414]/15 text-[#141414]/65 hover:bg-[#F2F2EC]"
                        }`}
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                      <button
                        title="Mark Reviewed"
                        onClick={() => onUpdateStatus(activeInquiry.id, "reviewed")}
                        className={`p-2 rounded border-2 transition-all cursor-pointer ${
                          activeInquiry.status === "reviewed" ? "bg-white border-[#141414] text-emerald-700 shadow-[1px_1px_0px_#141414]" : "bg-white border-[#141414]/15 text-[#141414]/65 hover:bg-[#F2F2EC]"
                        }`}
                      >
                        <CheckCircle className="w-4 h-4" />
                      </button>
                      <button
                        title="Move to Archives"
                        onClick={() => onUpdateStatus(activeInquiry.id, "archived")}
                        className={`p-2 rounded border-2 transition-all cursor-pointer ${
                          activeInquiry.status === "archived" ? "bg-white border-[#141414] text-neutral-500 shadow-[1px_1px_0px_#141414]" : "bg-white border-[#141414]/15 text-[#141414]/65 hover:bg-[#F2F2EC]"
                        }`}
                      >
                        <Archive className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-[13px]">
                    <div className="p-3 bg-[#F2F2EC] rounded border-2 border-[#141414]">
                      <span className="block text-[8.5px] uppercase font-mono tracking-widest text-[#141414]/60 font-black">EMAIL ADDRESS</span>
                      <a href={`mailto:${activeInquiry.email}`} className="font-extrabold text-[#141414] hover:underline">
                        {activeInquiry.email}
                      </a>
                    </div>
                    {activeInquiry.phone && (
                      <div className="p-3 bg-[#F2F2EC] rounded border-2 border-[#141414]">
                        <span className="block text-[8.5px] uppercase font-mono tracking-widest text-[#141414]/60 font-black">PHONE NUMBER</span>
                        <span className="font-extrabold text-[#141414]">{activeInquiry.phone}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Message body section */}
                <div className="bg-[#F2F2EC] border-2 border-[#141414] rounded p-5 relative">
                  <span className="absolute top-3 right-4 font-mono text-[9px] text-[#141414]/60 font-bold uppercase tracking-widest">MESSAGE TEXT</span>
                  <p className="text-[#141414] text-sm whitespace-pre-wrap leading-relaxed mt-2 font-medium">
                    {activeInquiry.message}
                  </p>
                </div>

                {/* AI / Reply simulator helper */}
                <div className="mt-8 border-t border-black/10 pt-5">
                  <h5 className="text-[10px] font-black uppercase tracking-widest font-mono text-[#141414]/60 mb-2.5">
                    Suggested Quick Replies (Interactive Demo)
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={`mailto:${activeInquiry.email}?subject=Hi ${activeInquiry.name} - Sahil Chaurasiya&body=Hi ${activeInquiry.name}, thank you for reaching out via my portfolio. I'd love to discuss this further!`}
                      className="text-[#141414] hover:text-[#141414] bg-white hover:bg-[#F2F2EC] border-2 border-[#141414] p-3 rounded text-xs text-left transition-all font-black uppercase tracking-wider flex flex-col justify-between shadow-[2px_2px_0px_#141414] hover:shadow-[3px_3px_0px_#141414] select-none"
                    >
                      <span className="block">Offer Internship</span>
                      <span className="block text-[9.5px] text-[#141414]/60 mt-1 truncate lowercase normal-case font-semibold">Draft response to arrange introductory meeting...</span>
                    </a>
                    <a
                      href={`mailto:${activeInquiry.email}?subject=Re: Freelance Quote inquiry&body=Hi ${activeInquiry.name}, I reviewed your guidelines and would be thrilled to audit and execute this.`}
                      className="text-[#141414] hover:text-[#141414] bg-white hover:bg-[#F2F2EC] border-2 border-[#141414] p-3 rounded text-xs text-left transition-all font-black uppercase tracking-wider flex flex-col justify-between shadow-[2px_2px_0px_#141414] hover:shadow-[3px_3px_0px_#141414] select-none"
                    >
                      <span className="block">Discuss Projects</span>
                      <span className="block text-[9.5px] text-[#141414]/60 mt-1 truncate lowercase normal-case font-semibold">Draft pricing and timelines options...</span>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center h-full text-[#141414]/50 py-16">
                <HelpCircle className="w-10 h-10 text-[#141414]/30 mb-2" />
                <p className="text-xs font-black uppercase tracking-widest">Select message to read</p>
                <p className="text-[11px] text-[#141414]/60 mt-1 font-semibold leading-relaxed">Submit your own in the Contact form to test it instantly!</p>
              </div>
            )}

            {/* Simulated server uptime tag */}
            <div className="mt-6 border-t border-black/10 pt-4 flex flex-wrap gap-2 items-center justify-between text-[10px] text-[#141414]/50 font-mono font-bold uppercase tracking-wide">
              <span className="flex items-center gap-1.5 bg-emerald-55 text-emerald-800 px-2.5 py-1 rounded border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Simulated Offline Sandbox</span>
              </span>
              <span>100% Client-Side State</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
