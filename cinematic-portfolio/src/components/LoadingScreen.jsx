import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [showName, setShowName] = useState(false);
  
  useEffect(() => {
    // Show name after brief delay
    const nameTimer = setTimeout(() => setShowName(true), 300);
    
    // Complete loading after animation
    const completeTimer = setTimeout(() => {
      onLoadingComplete();
    }, 2800);
    
    return () => {
      clearTimeout(nameTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  // Split name into letters for reveal
  const name = "ANMOL PRADHAN";
  const letters = name.split('');

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-deep-charcoal flex items-center justify-center"
    >
      {/* Grain texture */}
      <div className="grain" />
      
      {/* Centered name with letter-by-letter reveal - NO WRAP */}
      {showName && (
        <div className="relative z-10 px-4">
          <motion.h1 className="font-serif text-[clamp(1.75rem,7vw,6rem)] font-light tracking-tight text-white whitespace-nowrap">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.33, 1, 0.68, 1]
                }}
                className="inline-block"
                style={{ marginRight: letter === ' ' ? '0.5em' : '0' }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h1>
          
          {/* Subtle line animation below */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
            className="h-[1px] bg-white/20 mt-8 origin-center"
          />
        </div>
      )}
    </motion.div>
  );
};

export default LoadingScreen;
