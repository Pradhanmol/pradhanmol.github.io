import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsVisible(latest > 300);
    });
    
    return () => unsubscribe();
  }, [scrollY]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 py-6 sm:py-8"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center backdrop-blur-sm bg-black/20 px-4 sm:px-6 py-3 sm:py-4 rounded-full">
        <motion.button
          onClick={() => scrollToSection('hero')}
          whileHover={{ scale: 1.05 }}
          className="font-serif text-lg sm:text-xl font-light"
        >
          AP
        </motion.button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 lg:gap-12 font-sans text-xs tracking-[0.3em] uppercase">
          <motion.button
            onClick={() => scrollToSection('work')}
            whileHover={{ color: '#ffffff' }}
            className="text-gray-500 transition-colors duration-300"
          >
            Work
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('experience')}
            whileHover={{ color: '#ffffff' }}
            className="text-gray-500 transition-colors duration-300"
          >
            Experience
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ color: '#ffffff' }}
            className="text-gray-500 transition-colors duration-300"
          >
            Contact
          </motion.button>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-500 hover:text-white transition-colors"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-4 right-4 sm:left-6 sm:right-6 bg-deep-charcoal/95 backdrop-blur-lg border border-gray-900 mt-2 sm:mt-4 rounded-2xl overflow-hidden"
        >
          <div className="flex flex-col gap-4 sm:gap-6 p-6 sm:p-8 font-sans text-xs tracking-[0.3em] uppercase">
            <button
              onClick={() => scrollToSection('work')}
              className="text-gray-500 hover:text-white transition-colors text-left py-2"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-500 hover:text-white transition-colors text-left py-2"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-500 hover:text-white transition-colors text-left py-2"
            >
              Contact
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
