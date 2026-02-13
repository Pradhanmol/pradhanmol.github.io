import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  // Hero background images
  const heroImages = [
    '/images/DAR01010-EDIT-da7e06d3-c7b0-470b-b8dd-a0e7626cb042.png',
    '/images/DAR00603-358074ce-99e7-4d25-9ad5-1075e5a84ed3.png',
    '/images/DAR01003-EDIT-03a9d259-5422-4e19-a788-47364dabc73e.png',
    '/images/20250801_210500-EDIT-850ae5f3-63c5-4c16-952c-492e7b0ea270.png',
    '/images/2-59e6dee2-8e7e-4efd-a27d-fed532c3da52.png',
    '/images/3-eba19ae4-fcdd-478c-a5f5-e39459dabc48.png',
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Smooth crossfade images - NO BLINKING */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImages[currentImageIndex]})`,
            filter: 'grayscale(40%) brightness(0.55)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </AnimatePresence>
      
      {/* Cinematic overlay - balanced for visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" />
      
      {/* Subtle cinematic smoke/haze effect */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 20% 30%, rgba(0, 102, 255, 0.06) 0%, transparent 60%)',
          }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 80% 70%, rgba(0, 102, 255, 0.04) 0%, transparent 60%)',
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3
          }}
        />
      </div>
      
      {/* Grain texture for film quality */}
      <div className="grain" />
      
      {/* Slide indicators */}
      <div className="absolute bottom-24 sm:bottom-32 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-500 ${
              index === currentImageIndex 
                ? 'bg-white w-6 sm:w-8' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
          className="font-serif text-[clamp(2.5rem,10vw,10rem)] font-light tracking-tight leading-[0.9] mb-6 sm:mb-8 drop-shadow-2xl"
        >
          ANMOL PRADHAN
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.33, 1, 0.68, 1] }}
          className="font-sans text-[clamp(0.75rem,2vw,1.5rem)] text-gray-200 tracking-[0.15em] sm:tracking-[0.3em] uppercase drop-shadow-lg mb-8 sm:mb-12"
        >
          Engineering systems that ship with confidence.
        </motion.p>
        
        {/* Life Quote - Prominent on Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.8, ease: [0.33, 1, 0.68, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            {/* Decorative line before quote */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 2.2 }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 h-[1px] w-16 sm:w-24 bg-white/30"
            />
            
            <p className="font-serif text-[clamp(1rem,2.5vw,1.5rem)] text-white/90 italic leading-relaxed px-4 py-6 sm:py-8">
              "A bird doesn't trust the branch it sits on — it trusts its own wings."
            </p>
            
            {/* Decorative line after quote */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 2.4 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-[1px] w-16 sm:w-24 bg-white/30"
            />
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.6 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 sm:h-16 bg-gradient-to-b from-transparent via-white to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
