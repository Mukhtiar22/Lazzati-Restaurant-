import React, { useState } from 'react';
import { menuCategories, menuItems } from '../data/menu';

function Menu() {
  const [activeCategory, setActiveCategory] = useState('sajji');
  const [fade, setFade] = useState(false);

  const handleCategoryChange = (categoryId) => {
    if (categoryId === activeCategory) return;
    setFade(true);
    // Timeout matches transition speeds
    setTimeout(() => {
      setActiveCategory(categoryId);
      setFade(false);
    }, 150);
  };

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="bg-bg-alt py-24 md:py-32 transition-colors duration-500" id="menu">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-16 gap-6 reveal">
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3 block">CURATED SELECTION</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-tight">
              Signature Creations
            </h2>
          </div>
          {/* Menu Filter Buttons */}
          <div className="flex flex-wrap gap-2 md:gap-3 border-b border-border pb-1 w-full md:w-auto">
            {menuCategories.map((category) => (
              <button 
                key={category.id}
                onClick={() => handleCategoryChange(category.id)} 
                className={`menu-tab px-4 py-2 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all ${activeCategory === category.id ? 'active text-primary border-primary' : 'border-transparent text-text-secondary hover:text-text-primary'}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid Container */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 transition-all duration-300 ${fade ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-item-card group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[16/10] rounded-t-arch-sm border border-border shadow-md transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl">
                <img 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={item.image}
                />
                <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-primary uppercase transition-colors duration-500">
                  {item.tag}
                </div>
              </div>
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="font-serif text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">{item.name}</h3>
                <span className="text-gold font-bold text-sm tracking-wider">{item.price}</span>
              </div>
              <p className="text-text-secondary text-xs sm:text-sm font-light leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="flex items-center gap-2">
                {item.pills.map((pill, idx) => (
                  <span key={idx} className="inline-block px-2.5 py-1 bg-surface border border-border rounded-full text-[9px] font-semibold text-text-secondary uppercase tracking-widest transition-colors duration-500">
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Menu;
