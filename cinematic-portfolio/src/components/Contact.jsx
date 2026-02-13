import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl w-full text-center space-y-12 sm:space-y-16"
      >
        <h2 className="font-serif text-[clamp(1.75rem,7vw,5rem)] font-light leading-tight px-2">
          Let's build something meaningful.
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 text-left">
          <div className="space-y-2">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused(null)}
              required
              className="w-full bg-transparent border-b border-gray-800 focus:border-white transition-colors duration-300 py-3 sm:py-4 px-0 text-lg sm:text-xl font-light outline-none placeholder:text-gray-700"
            />
          </div>
          
          <div className="space-y-2">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused(null)}
              required
              className="w-full bg-transparent border-b border-gray-800 focus:border-white transition-colors duration-300 py-3 sm:py-4 px-0 text-lg sm:text-xl font-light outline-none placeholder:text-gray-700"
            />
          </div>
          
          <div className="space-y-2">
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused(null)}
              required
              rows="4"
              className="w-full bg-transparent border-b border-gray-800 focus:border-white transition-colors duration-300 py-3 sm:py-4 px-0 text-lg sm:text-xl font-light outline-none resize-none placeholder:text-gray-700"
            />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-5 sm:py-6 border border-white/20 hover:border-white/40 transition-colors duration-300 font-sans tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm"
          >
            Send Message
          </motion.button>
        </form>
        
        <div className="pt-12 sm:pt-16 space-y-4">
          <p className="font-sans text-gray-600 text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase">
            Or reach me at
          </p>
          <a
            href="mailto:pradhanmol30@gmail.com"
            className="font-sans text-gray-400 hover:text-white transition-colors duration-300 text-base sm:text-lg break-all"
          >
            pradhanmol30@gmail.com
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
