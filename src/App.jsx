import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Stats from './components/Stats';
import About from './components/About';
import Pipeline from './components/Pipeline';
import Services from './components/Services';
import Industries from './components/Industries';
import TechStack from './components/TechStack';
import Comparison from './components/Comparison';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Faq from './components/Faq';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 selection:bg-cyan-500 selection:text-white relative">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Stats />
        <About />
        <Pipeline />
        <Services />
        <Industries />
        <TechStack />
        <Comparison />
        <Projects />
        <Testimonials />
        <Team />
        <Faq />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
