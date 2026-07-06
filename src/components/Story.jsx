import React, { useState } from 'react';

function Story() {
  const [activeTab, setActiveTab] = useState('origins');

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" id="story">
      {/* Decorative Background Star Motif */}
      <div className="absolute inset-0 ajrak-grid opacity-[0.03] dark:opacity-[0.02] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Asymmetrical Overlapping Image Frame */}
          <div className="lg:col-span-6 relative reveal">
            {/* Arched Image Container */}
            <div className="relative overflow-hidden arch-top border border-border bg-surface-container aspect-[5/6] max-w-md mx-auto lg:mx-0">
              <img 
                alt="The architectural beauty of Sukkur" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                src="/assets/images/heritage_story.png"
              />
            </div>
            
            {/* Decorative floating gold card */}
            <div className="absolute -bottom-6 -right-6 md:-right-8 bg-surface border border-border p-6 rounded-2xl shadow-xl max-w-[240px] hidden sm:block transition-colors duration-500">
              <span className="text-[32px] text-gold font-serif">1923</span>
              <h4 className="font-serif font-bold text-text-primary text-sm mt-1 mb-2">Ancestral Craft</h4>
              <p className="text-xs text-text-secondary font-light leading-relaxed">
                Preserving recipes handed down through generations along the old trade routes of Sindh.
              </p>
            </div>
          </div>

          {/* Right: Content & Story Details */}
          <div className="lg:col-span-6 flex flex-col justify-center reveal">
            <span className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">CURATED STORY</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-8 leading-tight">
              The Soul of Sukkur, <br className="hidden sm:inline" />Plated for Today
            </h2>
            
            {/* Story Tabs */}
            <div className="flex border-b border-border mb-6">
              <button 
                onClick={() => setActiveTab('origins')} 
                className={`story-tab border-b-2 pb-3 pr-6 text-sm font-semibold transition-all ${activeTab === 'origins' ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-text-primary'}`}
              >
                Our Origins
              </button>
              <button 
                onClick={() => setActiveTab('craft')} 
                className={`story-tab border-b-2 pb-3 px-6 text-sm font-semibold transition-all ${activeTab === 'craft' ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-text-primary'}`}
              >
                The Kitchen
              </button>
              <button 
                onClick={() => setActiveTab('indus')} 
                className={`story-tab border-b-2 pb-3 pl-6 text-sm font-semibold transition-all ${activeTab === 'indus' ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-text-primary'}`}
              >
                The Indus Table
              </button>
            </div>

            {/* Story Tab Contents */}
            <div className="min-h-[160px] mb-8">
              {activeTab === 'origins' && (
                <div className="story-content space-y-4 animate-fade-in-up">
                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-light">
                    At Lazzati, our hearts beat in rhythm with the flow of the Indus. Inspired by the architectural lines of the Masoom Shah Minaret and the majestic Sukkur Barrage, we design dishes that reflect the geometry and soul of Sindh.
                  </p>
                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-light">
                    We celebrate the convergence of diverse cultures that traveled along these waters, integrating local spices with refined modern cooking to present something completely unique.
                  </p>
                </div>
              )}
              {activeTab === 'craft' && (
                <div className="story-content space-y-4 animate-fade-in-up">
                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-light">
                    Our kitchen is a modern laboratory grounded in ancient brick and clay. We slow-cook our dishes using traditional wood fires, matkas (earthen pots), and signature sand-roasting methods.
                  </p>
                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-light">
                    This slow, ritualistic heat extracts the deep, aromatic oils of hand-ground coriander, cumin, and dry red chilies, resulting in a rich complexity of flavor.
                  </p>
                </div>
              )}
              {activeTab === 'indus' && (
                <div className="story-content space-y-4 animate-fade-in-up">
                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-light">
                    We believe luxury lies in authenticity and traceability. Every grain of basmati rice, every cut of mutton, and all herbs are sourced sustainably from farmers along the Indus riverbanks.
                  </p>
                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-light">
                    By collaborating closely with Sukkur's artisanal producers, we ensure that every bite supports local heritage and preserves ancestral farming crafts.
                  </p>
                </div>
              )}
            </div>

            <div>
              <a href="#reservation" className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-semibold text-xs tracking-wider uppercase transition-all duration-300">
                Book Experience
                <span className="material-symbols-outlined text-[16px]">restaurant</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Story;
