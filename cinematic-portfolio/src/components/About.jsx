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
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section ref={ref} className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 sm:py-32">
      <motion.div
        style={{ opacity, y, scale }}
        className="max-w-4xl text-center space-y-8 sm:space-y-12"
      >
        <motion.p
          className="font-serif text-[clamp(1.25rem,3.5vw,3rem)] leading-[1.4] text-gray-300 px-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I build test systems—and AI systems—that don't break under pressure.
        </motion.p>
        
        <motion.p
          className="font-sans text-[clamp(0.95rem,1.8vw,1.25rem)] text-gray-500 leading-[1.7] px-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: true }}
        >
          SDET at Deutsche Telekom Digital Labs, owning backend validation for One Broadband microservices across RDK and legacy stacks.
        </motion.p>
        
        <motion.p
          className="font-sans text-[clamp(0.75rem,1.3vw,1rem)] text-gray-600 uppercase tracking-[0.15em] sm:tracking-[0.2em] px-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          viewport={{ once: true }}
        >
          TEST AUTOMATION • BACKEND QUALITY • GENAI / ML VALIDATION
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
