import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Loading Screen - Elegant entrance */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Custom Cursor Glow */}
      <CustomCursor />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      <div className="relative bg-deep-charcoal text-white" style={{ cursor: 'none' }}>
        <Navigation />
      
      <div id="hero">
        <Hero />
      </div>
      
      <div id="about">
        <About />
      </div>
      
      <div id="work">
        <Work />
      </div>
      
      <div id="experience">
        <Experience />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
      
      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-sans text-gray-600 text-xs tracking-[0.2em] uppercase">
            © 2026 Anmol Pradhan
          </p>
          
          <div className="flex gap-8">
            <a
              href="https://www.linkedin.com/in/pradhanmol/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-gray-600 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Pradhanmol/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-gray-600 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/locallensbyanmol/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-gray-600 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}

export default App;
