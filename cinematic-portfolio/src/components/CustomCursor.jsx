import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Add spring physics for smooth following
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
    };
    
    window.addEventListener('mousemove', moveCursor);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer glow */}
      <motion.div
        className="hidden md:block fixed w-10 h-10 pointer-events-none z-[70] mix-blend-screen"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
      >
        <div className="w-full h-full rounded-full bg-electric-blue/10 blur-xl" />
      </motion.div>
      
      {/* Inner dot */}
      <motion.div
        className="hidden md:block fixed w-1 h-1 pointer-events-none z-[70]"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: 19.5,
          y: 19.5,
        }}
      >
        <div className="w-full h-full rounded-full bg-white/40" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
