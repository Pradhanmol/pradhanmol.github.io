import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Aurora AI — Device Test Agent',
    subtitle: 'AI Agents • Natural Language • Network Devices',
    description: 'An AI agent that turns intent into execution: selects the right router, maps test cases, runs them on real devices, and generates human + technical reports with failure analysis. Top 20 out of 80+ submissions.',
    color: '#0066FF',
    image: '/images/DAR00599-e49b48c8-512a-4c98-a247-680b1c9f5e0a.png'
  },
  {
    id: 2,
    title: 'People AI Platform (Beta)',
    subtitle: 'FastAPI • Event-Driven • LLM → SQL • ML Churn',
    description: 'Plug-and-play HR analytics: multi-source connectors + schema-safe unification, churn prediction, and an HR copilot that answers natural-language questions via an LLM-powered SQL engine—secured with role-based access.',
    color: '#1a1a1a',
    image: '/images/2-59e6dee2-8e7e-4efd-a27d-fed532c3da52.png'
  },
  {
    id: 3,
    title: 'OneBB GPT — Knowledge Assistant',
    subtitle: 'RAG • LangChain • Vector DB • Router Ecosystem',
    description: 'Internal plug-and-play RAG-based GPT system for the One Broadband product suite, enabling developers and QA to retrieve technical knowledge, API references, logs, and microservice insights instantly—improving debugging efficiency.',
    color: '#0066FF',
    image: '/images/DAR01003-EDIT-03a9d259-5422-4e19-a788-47364dabc73e.png'
  },
  {
    id: 4,
    title: 'PDF Tools — Privacy-First Utility',
    subtitle: 'Local-First • Python • Automation',
    description: 'Built a safer alternative to cloud PDF tools: merge + compress PDFs locally (or via Colab) to keep sensitive documents off third-party servers—documented end-to-end for easy, repeatable use.',
    color: '#1a1a1a',
    image: '/images/20250801_210500-EDIT-850ae5f3-63c5-4c16-952c-492e7b0ea270.png'
  }
];

const ProjectPanel = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-screen w-full flex items-center justify-center snap-start overflow-hidden"
    >
      {/* Background image with Ken Burns effect */}
      {project.image && (
        <>
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${project.image})`,
              filter: 'grayscale(30%) brightness(0.65)',
              backgroundPosition: 'center',
            }}
            initial={{ scale: 1 }}
            animate={{ 
              scale: isHovered ? 1.08 : 1.02,
            }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
          />
          {/* Overlay with breathing effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"
            animate={{
              opacity: isHovered ? 0.95 : 1,
            }}
            transition={{ duration: 0.6 }}
          />
        </>
      )}
      
      {/* Background with subtle color tint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.15 : 0 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0"
        style={{ backgroundColor: project.color }}
      />
      
      {/* Content - MOBILE RESPONSIVE */}
      <div className="relative z-10 max-w-5xl px-4 sm:px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-6"
        >
          <p className="font-sans text-xs sm:text-sm text-gray-500 tracking-[0.2em] sm:tracking-[0.3em] uppercase">
            {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </p>
          
          <h2 className="font-serif text-[clamp(1.75rem,6vw,6rem)] font-light leading-[0.95] text-white drop-shadow-lg px-2">
            {project.title}
          </h2>
          
          <p className="font-sans text-[clamp(0.7rem,1.5vw,1rem)] text-gray-400 tracking-[0.15em] sm:tracking-[0.2em] uppercase px-2">
            {project.subtitle}
          </p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-[clamp(0.95rem,1.8vw,1.25rem)] text-gray-300 leading-relaxed max-w-3xl mx-auto pt-4 sm:pt-8 px-4"
          >
            {project.description}
          </motion.p>
        </motion.div>
      </div>
      
      {/* Decorative line with pulse */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0.3 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-20 sm:bottom-32 left-1/2 -translate-x-1/2 h-[1px] w-32 sm:w-48 origin-center"
      >
        <motion.div
          className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent"
          animate={{
            opacity: isHovered ? [0.2, 0.5, 0.2] : 0.2,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      {/* Corner accent on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        className="absolute top-12 left-12 w-12 h-12 border-t border-l border-electric-blue/40"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        className="absolute bottom-12 right-12 w-12 h-12 border-b border-r border-electric-blue/40"
      />
    </motion.div>
  );
};

const Work = () => {
  return (
    <section className="relative w-full">
      {/* Section intro */}
      <div className="h-screen flex items-center justify-center px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-serif text-[clamp(2rem,6vw,4rem)] font-light mb-4 sm:mb-6">
            Selected Work
          </h2>
          <p className="font-sans text-gray-500 tracking-[0.15em] sm:tracking-[0.2em] uppercase text-xs sm:text-sm">
            Projects that matter
          </p>
        </motion.div>
      </div>
      
      {/* Project panels */}
      <div className="snap-y snap-mandatory">
        {projects.map((project, index) => (
          <ProjectPanel key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Work;
