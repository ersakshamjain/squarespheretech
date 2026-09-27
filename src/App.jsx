import React, { useState, useEffect } from 'react';
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
import ProjectsPage from './pages/ProjectsPage';
// === DEDICATED ABOUT PAGE (Uncomment when needed) ===
// import AboutPage from './pages/AboutPage';

export default function App() {
  const getPage = () => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    if (path === '/projects' || path.startsWith('/projects/') || hash === '#/projects' || hash === '#projects-page') {
      return 'projects';
    }
    /* === DEDICATED ABOUT PAGE ROUTING (Uncomment when needed) ===
    if (path === '/about' || path.startsWith('/about/') || hash === '#/about' || hash === '#about-page') {
      return 'about';
    }
    ============================================================= */
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getPage);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPage(getPage());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  /* === DEDICATED ABOUT PAGE VIEW (Uncomment when needed) ===
  if (currentPage === 'about') {
    return (
      <div className="min-h-screen bg-[#030712] text-white selection:bg-cyan-500 selection:text-white relative">
        <Navbar currentPage="about" />
        <main>
          <AboutPage />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }
  ============================================================= */

  if (currentPage === 'projects') {
    return (
      <div className="min-h-screen bg-[#F8FAFC] text-gray-900 selection:bg-cyan-500 selection:text-white relative">
        <Navbar currentPage="projects" />
        <main>
          <ProjectsPage />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 selection:bg-cyan-500 selection:text-white relative">
      <Navbar currentPage="home" />
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
