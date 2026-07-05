import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Menu from './components/Menu'
import ReservationForm from './components/ReservationForm'
import Footer from './components/Footer'

function App() {
  // Theme State
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPrefersDark ? 'dark' : 'light';
  });

  // Sync state between Hero quick-booking and Main Reservation form
  const [bookingDetails, setBookingDetails] = useState({
    date: '',
    time: '19:00',
    guests: '2 Guests'
  });

  // Initialize Tomorrow's Date
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setBookingDetails(prev => ({ ...prev, date: dateStr }));
  }, []);

  // Theme Class Toggle
  useEffect(() => {
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Timeout to ensure initial component render finishes
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-bg text-text-primary transition-colors duration-500">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero bookingDetails={bookingDetails} setBookingDetails={setBookingDetails} />
      <Story />
      <Menu />
      <ReservationForm bookingDetails={bookingDetails} setBookingDetails={setBookingDetails} />
      <Footer />
    </div>
  );
}

export default App;
