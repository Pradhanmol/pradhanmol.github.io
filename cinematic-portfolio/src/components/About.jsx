import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  return (
    <section ref={ref} className="relative min-h-screen w-full flex items-center justify-center px-6 py-32">
      <motion.div
        style={{ opacity, y }}
        className="max-w-4xl text-center space-y-12"
      >
        <motion.p
          className="font-serif text-[clamp(1.5rem,4vw,3rem)] leading-relaxed text-gray-300"
        >
          I build test systems—and AI systems—that don't break under pressure.
        </motion.p>
        
        <motion.p
          className="font-sans text-[clamp(1rem,2vw,1.25rem)] text-gray-500 leading-relaxed"
        >
          SDET at Deutsche Telekom Digital Labs, owning backend validation for One Broadband microservices across RDK and legacy stacks.
        </motion.p>
        
        <motion.p
          className="font-sans text-[clamp(0.875rem,1.5vw,1rem)] text-gray-600 uppercase tracking-[0.2em]"
        >
          TEST AUTOMATION • BACKEND QUALITY • GENAI / ML VALIDATION
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-serif text-[clamp(0.875rem,1.5vw,1.125rem)] text-gray-700 italic leading-relaxed pt-8"
        >
          — "A bird doesn't trust the branch it sits on — it trusts its own wings."
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
