import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    year: '2025',
    company: 'Deutsche Telekom Digital Labs',
    role: 'SDET I',
    location: 'Gurugram',
    highlights: ['Backend validation for One Broadband DPS microservices (RDK + legacy)', 'Service mocking/simulation for isolated, faster backend testing', 'ML pipeline & model testing (drift, robustness, metrics) for HR platform']
  },
  {
    year: '2023',
    company: 'Credgenics',
    role: 'SDET I',
    location: 'Noida',
    highlights: ['Built mobile automation framework from scratch (UI + API)', '+40% transparency in agent activity monitoring dashboards', '+20% deposit accuracy via automated deposit tracking']
  },
  {
    year: '2022',
    company: 'Rivigo / Mahindra Logistics',
    role: 'SDET I',
    location: 'Gurgaon',
    highlights: ['Validated routing/cost optimization (Dijkstra, Hungarian) → 15% cost reduction', 'API automation: +30% coverage, -40% execution time', 'WMS workflows: shipment accuracy +20%, order time -25%']
  },
  {
    year: '2021',
    company: 'Rivigo',
    role: 'Intern',
    location: 'Gurgaon',
    highlights: ['B2B Express automation → -40% manual testing effort', 'RAAS vehicle-matching algorithm validation', 'Python bulk uploads Excel → SQL → -30% manual errors']
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Desktop: horizontal scroll, Mobile: vertical stack
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={containerRef} className="relative min-h-screen py-20 sm:py-32 overflow-hidden">
      <div className="px-4 sm:px-6 md:px-8 mb-16 sm:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-serif text-[clamp(2rem,6vw,4rem)] font-light mb-4 sm:mb-6">
            Experience
          </h2>
          <p className="font-sans text-gray-500 tracking-[0.15em] sm:tracking-[0.2em] uppercase text-xs sm:text-sm">
            Building quality at scale
          </p>
        </motion.div>
      </div>
      
      {/* Horizontal scrolling timeline - Desktop only, stacked on mobile */}
      <div className="relative">
        {/* Desktop: Horizontal scroll */}
        <motion.div
          style={{ x }}
          className="hidden md:flex gap-32 px-6"
        >
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </motion.div>
        
        {/* Mobile: Vertical stack */}
        <div className="flex flex-col md:hidden gap-12 px-4 sm:px-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ exp, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="flex-shrink-0 w-full md:w-[400px] space-y-4 sm:space-y-6 relative"
  >
    {/* Vertical line */}
    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
    
    <div className="pl-6 sm:pl-8">
      <p className="font-serif text-4xl sm:text-6xl font-light text-gray-800 mb-2">
        {exp.year}
      </p>
      
      <h3 className="font-sans text-xl sm:text-2xl font-light mb-2">
        {exp.company}
      </h3>
      
      <p className="font-sans text-gray-500 text-xs sm:text-sm tracking-wider uppercase mb-1">
        {exp.role}
      </p>
      
      <p className="font-sans text-gray-600 text-xs tracking-wider uppercase mb-4 sm:mb-6">
        {exp.location}
      </p>
      
      <ul className="space-y-2">
        {exp.highlights.map((highlight, i) => (
          <li key={i} className="font-sans text-gray-400 text-xs sm:text-sm leading-relaxed">
            — {highlight}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default Experience;
