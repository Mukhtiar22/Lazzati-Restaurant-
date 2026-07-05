import React, { useState } from 'react';

function ReservationForm({ bookingDetails, setBookingDetails }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  const handleFieldChange = (field, value) => {
    setBookingDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const submitReservation = (e) => {
    e.preventDefault();
    
    // Construct pre-filled message text
    const whatsappNumber = "923001234567"; // Concierge Direct WhatsApp
    const message = `*Lazzati Restaurant Booking Request*\n\n` +
                    `• *Name:* ${name}\n` +
                    `• *Phone:* ${phone}\n` +
                    `• *Date:* ${bookingDetails.date}\n` +
                    `• *Time:* ${bookingDetails.time}\n` +
                    `• *Guests:* ${bookingDetails.guests}\n` +
                    `• *Notes:* ${notes || 'No special requests'}`;
    
    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" id="reservation">
      {/* Background elements */}
      <div className="absolute inset-0 ajrak-grid opacity-[0.03] dark:opacity-[0.02] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left: Dining information */}
          <div className="lg:col-span-5 flex flex-col justify-between reveal">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3 block">RESERVATIONS</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-tight mb-6">
                Secure Your Evening <br className="hidden sm:inline" />at Lazzati
              </h2>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-light mb-8">
                Due to our intimate seating arrangements and focus on slow clay-pot cooking, tables are limited. We highly encourage booking your dining experience in advance.
              </p>
            </div>

            {/* Ambient status card */}
            <div className="bg-surface-container border border-border p-6 rounded-2xl mb-8 lg:mb-0 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold tracking-wider text-text-primary uppercase">Tonight's Seating Status</span>
              </div>
              <p className="text-xs text-text-secondary font-light leading-relaxed">
                Outdoor riverfront deck is 90% booked. Limited indoor salon tables are available starting from 08:30 PM.
              </p>
            </div>
          </div>

          {/* Right: Booking Form */}
          <div className="lg:col-span-7 reveal" id="contact">
            <div className="bg-surface border border-border p-6 sm:p-10 rounded-3xl premium-shadow transition-colors duration-500">
              <h3 className="font-serif text-2xl font-bold text-text-primary mb-8">Reservation Details</h3>
              
              <form onSubmit={submitReservation} className="space-y-6">
                {/* Name & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="text-[10px] font-bold tracking-widest text-text-secondary uppercase block mb-1">Full Name</label>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required 
                      className="w-full bg-transparent border-0 border-b border-border focus:border-primary focus:ring-0 px-0 py-2.5 text-text-primary placeholder-text-secondary/40 text-sm transition-colors" 
                      placeholder="e.g. Ali Khan"
                    />
                  </div>
                  <div className="relative">
                    <label className="text-[10px] font-bold tracking-widest text-text-secondary uppercase block mb-1">WhatsApp Phone Number</label>
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required 
                      className="w-full bg-transparent border-0 border-b border-border focus:border-primary focus:ring-0 px-0 py-2.5 text-text-primary placeholder-text-secondary/40 text-sm transition-colors" 
                      placeholder="e.g. +92 300 1234567"
                    />
                  </div>
                </div>

                {/* Date, Time & Guests Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="relative">
                    <label className="text-[10px] font-bold tracking-widest text-text-secondary uppercase block mb-1">Date</label>
                    <input 
                      type="date" 
                      value={bookingDetails.date}
                      onChange={(e) => handleFieldChange('date', e.target.value)}
                      required 
                      className="w-full bg-transparent border-0 border-b border-border focus:border-primary focus:ring-0 px-0 py-2.5 text-text-primary text-sm transition-colors cursor-pointer"
                    />
                  </div>
                  <div className="relative">
                    <label className="text-[10px] font-bold tracking-widest text-text-secondary uppercase block mb-1">Time</label>
                    <select 
                      value={bookingDetails.time}
                      onChange={(e) => handleFieldChange('time', e.target.value)}
                      required 
                      className="w-full bg-transparent border-0 border-b border-border focus:border-primary focus:ring-0 px-0 py-2.5 text-text-primary text-sm transition-colors cursor-pointer"
                    >
                      <option value="19:00" className="text-black">07:00 PM</option>
                      <option value="19:30" className="text-black">07:30 PM</option>
                      <option value="20:00" className="text-black">08:00 PM</option>
                      <option value="20:30" className="text-black">08:30 PM</option>
                      <option value="21:00" className="text-black">09:00 PM</option>
                      <option value="21:30" className="text-black">09:30 PM</option>
                      <option value="22:00" className="text-black">10:00 PM</option>
                    </select>
                  </div>
                  <div className="relative">
                    <label className="text-[10px] font-bold tracking-widest text-text-secondary uppercase block mb-1">Party Size</label>
                    <select 
                      value={bookingDetails.guests}
                      onChange={(e) => handleFieldChange('guests', e.target.value)}
                      required 
                      className="w-full bg-transparent border-0 border-b border-border focus:border-primary focus:ring-0 px-0 py-2.5 text-text-primary text-sm transition-colors cursor-pointer"
                    >
                      <option value="1 Guest" className="text-black">1 Guest</option>
                      <option value="2 Guests" className="text-black">2 Guests</option>
                      <option value="3 Guests" className="text-black">3 Guests</option>
                      <option value="4 Guests" className="text-black">4 Guests</option>
                      <option value="5 Guests" className="text-black">5 Guests</option>
                      <option value="6+ Guests" className="text-black">6+ Guests (Private Area)</option>
                    </select>
                  </div>
                </div>

                {/* Special Notes */}
                <div className="relative">
                  <label className="text-[10px] font-bold tracking-widest text-text-secondary uppercase block mb-1">Dietary Requests / Notes</label>
                  <textarea 
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows="2" 
                    className="w-full bg-transparent border-0 border-b border-border focus:border-primary focus:ring-0 px-0 py-2.5 text-text-primary placeholder-text-secondary/40 text-sm transition-colors resize-none" 
                    placeholder="e.g. Allergies, high chair, birthday decoration..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold tracking-wider uppercase py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    Confirm Reservation via WhatsApp
                  </button>
                  <p className="text-[10px] text-text-secondary text-center mt-3 font-light leading-relaxed">
                    Clicking confirms your details and generates a pre-filled direct WhatsApp message to our concierge.
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ReservationForm;
