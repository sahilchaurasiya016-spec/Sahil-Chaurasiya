import React, { useState } from "react";
import { Download, Calendar, Mail, FileCheck2, ArrowUpRight, Sparkles, X, HeartHandshake } from "lucide-react";

interface CreativeCtaSectionProps {
  onContactClick: () => void;
  onDownloadResume: () => void;
}

export default function CreativeCtaSection({ onContactClick, onDownloadResume }: CreativeCtaSectionProps) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [bookedSuccess, setBookedSuccess] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingDate || !bookingTime) return;

    setBookedSuccess(true);
    setTimeout(() => {
      setBookedSuccess(false);
      setIsCalendarOpen(false);
      setBookingDate("");
      setBookingTime("");
    }, 3200);
  };

  return (
    <section className="relative py-28 bg-[#141414] overflow-hidden text-white border-b-4 border-[#141414]">
      
      {/* Dynamic graphic patterns mimicking Pinterest reference */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,242,236,0.08),transparent)]" />
      
      {/* Soft abstract floating shapes */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Visual Badge icon */}
        <div className="inline-flex items-center gap-1.5 bg-white/10 border-2 border-white/20 rounded-full px-4 py-2">
          <Sparkles className="w-4 h-4 text-[#F2F2EC]" />
          <span className="text-[10px] sm:text-xs font-bold font-mono uppercase tracking-widest text-[#F2F2EC]">
            REACH THE LIMITLESS HIGHS
          </span>
        </div>

        {/* Major Headline typography */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight font-display leading-[1.05] text-[#F2F2EC]">
            Ready to Grow <br />
            <span className="text-transparent text-stroke-white select-none">Your Brand?</span>
          </h2>
          <p className="text-[#F2F2EC]/80 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed font-bold uppercase tracking-wide">
            I combine SEO architecture rankings, high conversion Shopify layouts, and micro influencer growth budgets. Grab his CV below or schedule a call.
          </p>
        </div>

        {/* Pinterest style stacked actions buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-5 max-w-md sm:max-w-2xl mx-auto">
          
          <button
            id="creative_cta_contact"
            onClick={onContactClick}
            className="w-full sm:w-auto bg-[#F2F2EC] hover:bg-white text-[#141414] font-black uppercase tracking-widest px-8 py-4.5 rounded border-2 border-[#141414] shadow-[4px_4px_0px_#141414] hover:shadow-[6px_6px_0px_#141414] transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Mail className="w-4 h-4 text-[#141414]" />
            <span>Contact Sahil</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            id="creative_cta_book"
            onClick={() => setIsCalendarOpen(true)}
            className="w-full sm:w-auto bg-[#141414] hover:bg-[#141414]/90 border-2 border-white text-white font-black uppercase tracking-widest px-7 py-4.5 rounded shadow-[4px_4px_0px_white] hover:shadow-[6px_6px_0px_white] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-white" />
            <span>Book Direct Call</span>
          </button>

          <button
            id="creative_cta_download"
            onClick={onDownloadResume}
            className="w-full sm:w-auto text-[#F2F2EC]/80 hover:text-white uppercase tracking-widest px-5 py-4 rounded text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer hover:underline"
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </button>

        </div>

      </div>

      {/* Floating Interactive Schedule Booking Modal */}
      {isCalendarOpen && (
        <div className="fixed inset-0 z-55 overflow-hidden flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#F2F2EC] border-4 border-[#141414] text-[#141414] max-w-md w-full rounded-xl p-6 relative shadow-[6px_6px_0px_rgba(20,20,20,0.5)] text-left">
            
            <button
              id="btn_booking_close"
              onClick={() => setIsCalendarOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded border border-black/10 hover:bg-[#E4E4DF] text-[#141414] transition-colors"
              aria-label="Close scheduling modal"
            >
              <X className="w-4 h-4" />
            </button>

            {bookedSuccess ? (
              <div id="booking_success" className="py-8 text-center space-y-4 animate-fade-in">
                <div className="h-14 w-14 bg-emerald-50 border-2 border-emerald-500 rounded-lg flex items-center justify-center text-emerald-700 mx-auto">
                  <HeartHandshake className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-black uppercase tracking-tight text-stone-900 text-lg">
                    Meeting Confirmed!
                  </h4>
                  <p className="text-xs text-stone-500 max-w-xs mx-auto font-medium">
                    We booked your consultation for <strong>{bookingDate}</strong> at <strong>{bookingTime}</strong>. Sahil's dynamic calendar has logged your slot!
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4.5">
                <div className="space-y-1">
                  <span className="text-[9px] uppercase font-mono font-black tracking-widest text-[#141414]/55 block">
                    BOUTIQUE CONSULTATION
                  </span>
                  <h3 className="font-display font-black text-xl uppercase tracking-tight text-[#141414]">
                    Reserve 1:1 Strategy Call
                  </h3>
                  <p className="text-[#141414]/80 text-xs font-semibold leading-relaxed">
                    Plan an assessment on technical SEO schema errors, Shopify conversion redesign scope, or social grid schedules.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Date Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="booking_date_input" className="text-[9px] font-black font-mono uppercase text-[#141414]/60 block">
                      Target Date
                    </label>
                    <input
                      id="booking_date_input"
                      type="date"
                      required
                      min="2026-06-18"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full p-2.5 bg-white border-2 border-[#141414] rounded text-xs font-bold focus:outline-none"
                    />
                  </div>

                  {/* Time Select */}
                  <div className="space-y-1.5">
                    <label htmlFor="booking_time_select" className="text-[9px] font-black font-mono uppercase text-[#141414]/60 block">
                      Target Hour (IST)
                    </label>
                    <select
                      id="booking_time_select"
                      required
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="w-full p-2.5 bg-white border-2 border-[#141414] rounded text-xs font-bold focus:outline-none"
                    >
                      <option value="">Choose slot...</option>
                      <option value="10:00 AM">10:00 AM IST</option>
                      <option value="12:00 PM">12:00 PM IST</option>
                      <option value="02:30 PM">02:30 PM IST</option>
                      <option value="04:00 PM">04:00 PM IST</option>
                      <option value="06:00 PM">06:00 PM IST</option>
                    </select>
                  </div>
                </div>

                <div className="bg-[#E4E4DF] border border-black/10 p-3.5 rounded flex items-start gap-2.5">
                  <div className="p-1 rounded bg-[#F2F2EC] border border-black/10 mt-0.5">
                    <FileCheck2 className="w-3.5 h-3.5 text-[#141414]" />
                  </div>
                  <p className="text-[11px] text-[#141414]/85 font-medium leading-relaxed">
                    <strong>100% Free Consultation strategy call.</strong> No financial credit requirements needed for this offline sandbox reservation demo.
                  </p>
                </div>

                <button
                  id="btn_booking_submit"
                  type="submit"
                  className="w-full bg-[#141414] hover:bg-[#141414]/90 text-[#F2F2EC] font-black uppercase tracking-widest py-3 border-2 border-[#141414] rounded shadow-[2px_2px_0px_#141414] hover:shadow-[4px_4px_0px_#141414] transition-all text-xs cursor-pointer animate-pulse"
                >
                  Confirm Reservation Schedule
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
