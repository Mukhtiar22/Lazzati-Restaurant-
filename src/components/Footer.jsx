import React from 'react';

function Footer() {
  return (
    <footer className="bg-surface-container border-t border-border pt-16 pb-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="font-serif text-2xl font-bold tracking-tight text-primary select-none flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 bg-primary rounded-full"></span>
              LAZZATI
            </a>
            <p className="text-text-secondary text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Honoring the heritage of Sukkur through bespoke gastronomy. Experience fine dining along the Indus.
            </p>
          </div>

          {/* Col 2: Hours */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-text-primary uppercase mb-4">Hours</h4>
            <ul className="text-text-secondary text-xs space-y-2 font-light">
              <li>Monday - Friday: 06:00 PM - 11:30 PM</li>
              <li>Saturday - Sunday: 05:00 PM - 12:00 AM</li>
              <li className="text-primary font-medium">Tuesday: Closed for Culinary Lab</li>
            </ul>
          </div>

          {/* Col 3: Find Us */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-text-primary uppercase mb-4">Location</h4>
            <ul className="text-text-secondary text-xs space-y-2 font-light">
              <li>Lab-e-Mehran Road, Bypass Road</li>
              <li>Sukkur, Sindh, Pakistan</li>
              <li className="mt-2 text-text-primary font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-primary">phone</span>
                +92 71 5612345
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-border/60 pt-8 gap-4">
          <p className="text-[11px] text-text-secondary font-light">
            &copy; {new Date().getFullYear()} Lazzati Restaurant. All rights reserved. Designed for Sukkur.
          </p>
          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all duration-300">
              <span className="material-symbols-outlined text-[16px] fill-icon">public</span>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all duration-300">
              <span className="material-symbols-outlined text-[16px] fill-icon">restaurant</span>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all duration-300">
              <span className="material-symbols-outlined text-[16px] fill-icon">photo_camera</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
