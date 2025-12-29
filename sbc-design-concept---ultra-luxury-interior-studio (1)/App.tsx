import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import FounderSection from './components/FounderSection';
import PhilosophySection from './components/PhilosophySection';
import FeaturedVideo from './components/FeaturedVideo';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import InstagramSection from './components/InstagramSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // For line animations specifically
          if (entry.target.classList.contains('draw-line')) {
            entry.target.classList.add('visible');
          }
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll, .draw-line, .text-reveal-up');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <FounderSection />
      <PhilosophySection />
      <FeaturedVideo />
      <ProjectsSection />
      <ServicesSection />
      <TestimonialsSection />
      <InstagramSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;