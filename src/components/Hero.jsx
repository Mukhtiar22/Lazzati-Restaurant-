import React, { useEffect, useState } from 'react';

function Hero({ bookingDetails, setBookingDetails }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHeroBooking = () => {
    const reservationSection = document.getElementById('reservation');
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFieldChange = (field, value) => {
    setBookingDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Parallax Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="Lazzati Restaurant Ambient Interior" 
          className="w-full h-full object-cover scale-105" 
          src="/assets/images/hero_bg.png" 
          style={{ transform: `translateY(${scrollY * 0.25}px) scale(1.05)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-bg transition-colors duration-500"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center mt-8">
        <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase mb-4 opacity-0 translate-y-4 animate-fade-in-up">SUKKUR, SINDH</span>
        
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-5xl leading-[1.1] opacity-0 translate-y-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          A Taste of Indus Heritage, <br className="hidden md:inline" /><span class="text-primary italic font-normal">Redefined</span>
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mb-12 font-light leading-relaxed opacity-0 translate-y-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          Experience the soulful fusion of ancient Sindhi culinary techniques and modern minimalist gastronomy on the historic riverbanks of the Indus.
        </p>

        {/* Floating Booking Widget */}
        <div className="w-full max-w-4xl bg-surface/90 backdrop-blur-md border border-border p-6 rounded-3xl premium-shadow flex flex-col md:flex-row gap-4 items-center justify-between opacity-0 translate-y-8 animate-fade-in-up transition-colors duration-500" style={{ animationDelay: '600ms' }}>
          {/* Date Picker */}
          <div className="w-full flex-1 text-left px-4 border-b md:border-b-0 md:border-r border-border pb-4 md:pb-0">
            <label className="block text-[10px] font-bold tracking-widest text-text-secondary uppercase mb-1">Select Date</label>
            <div className="flex items-center gap-2 text-text-primary">
              <span className="material-symbols-outlined text-text-secondary text-[20px]">calendar_today</span>
              <input 
                type="date" 
                value={bookingDetails.date}
                onChange={(e) => handleFieldChange('date', e.target.value)}
                className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm font-semibold cursor-pointer" 
              />
            </div>
          </div>

          {/* Time Picker */}
          <div className="w-full flex-1 text-left px-4 border-b md:border-b-0 md:border-r border-border pb-4 md:pb-0">
            <label className="block text-[10px] font-bold tracking-widest text-text-secondary uppercase mb-1">Select Time</label>
            <div className="flex items-center gap-2 text-text-primary">
              <span className="material-symbols-outlined text-text-secondary text-[20px]">schedule</span>
              <select 
                value={bookingDetails.time}
                onChange={(e) => handleFieldChange('time', e.target.value)}
                className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm font-semibold cursor-pointer"
              >
                <option value="19:00" class="text-black">07:00 PM</option>
                <option value="20:00" class="text-black">08:00 PM</option>
                <option value="21:00" class="text-black">09:00 PM</option>
                <option value="22:00" class="text-black">10:00 PM</option>
              </select>
            </div>
          </div>

          {/* Guest Picker */}
          <div class="w-full flex-1 text-left px-4 pb-4 md:pb-0">
            <label className="block text-[10px] font-bold tracking-widest text-text-secondary uppercase mb-1">Guests</label>
            <div className="flex items-center gap-2 text-text-primary">
              <span className="material-symbols-outlined text-text-secondary text-[20px]">group</span>
              <select 
                value={bookingDetails.guests}
                onChange={(e) => handleFieldChange('guests', e.target.value)}
                className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm font-semibold cursor-pointer"
              >
                <option value="2 Guests" class="text-black">2 Guests</option>
                <option value="4 Guests" class="text-black">4 Guests</option>
                <option value="6 Guests" class="text-black">6 Guests</option>
                <option value="8 Guests" class="text-black">8 Guests</option>
              </select>
            </div>
          </div>

          {/* Action Button */}
          <button onClick={handleHeroBooking} className="w-full md:w-auto bg-primary hover:bg-primary-hover text-white text-xs font-semibold tracking-wider uppercase px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shrink-0 flex items-center justify-center gap-2">
            Check Table
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Animated Down Arrow Indicator */}
      <a href="#story" className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white transition-colors duration-300 animate-bounce">
        <span className="material-symbols-outlined text-3xl">keyboard_double_arrow_down</span>
      </a>
    </section>
  );
}

export default Hero;
