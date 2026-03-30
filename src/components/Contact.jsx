import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const GithubIcon = ({ className = "", size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const LinkedinIcon = ({ className = "", size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  return (
    <footer id="contact" className="py-20 px-4 md:px-20 bg-space-black relative border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's <span className="text-neon-cyan">Connect</span></h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full shadow-[0_0_10px_rgba(0,240,255,0.8)] mb-8"></div>
          <p className="text-gray-text text-lg">Open to new opportunities in Data Science & Machine Learning.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="space-y-8"
          >
             <a href="mailto:sharmasuyash135@gmail.com" className="flex items-center gap-4 text-gray-text hover:text-neon-cyan transition-colors group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-neon-cyan group-hover:bg-neon-blue/10 transition-all">
                  <Mail size={20} />
                </div>
                <span className="text-lg">sharmasuyash135@gmail.com</span>
             </a>
             <a href="https://www.linkedin.com/in/suyash-sharma-6853282a4/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-text hover:text-neon-cyan transition-colors group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-neon-cyan group-hover:bg-neon-blue/10 transition-all">
                  <LinkedinIcon size={20} />
                </div>
                <span className="text-lg">LinkedIn Profile</span>
             </a>
             <a href="https://github.com/LoRdElectrod" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-text hover:text-neon-cyan transition-colors group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-neon-cyan group-hover:bg-neon-blue/10 transition-all">
                  <GithubIcon size={20} />
                </div>
                <span className="text-lg">github.com/LoRdElectrod</span>
             </a>
          </motion.div>

          {/* Form */}
          <motion.form
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="space-y-4"
          >
            <div>
              <input type="text" placeholder="Your Name" className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors" />
            </div>
            <div>
              <input type="email" placeholder="Your Email" className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors" />
            </div>
            <div>
              <textarea placeholder="Your Message" rows="4" className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors resize-none"></textarea>
            </div>
            <button type="button" className="w-full bg-neon-blue/10 border border-neon-blue text-neon-blue py-3 rounded-lg font-semibold hover:bg-neon-blue hover:text-space-black transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] flex items-center justify-center gap-2">
               <Send size={18} />
               Send Message
            </button>
          </motion.form>
        </div>
        
        <div className="mt-20 text-center text-gray-text/50 text-sm">
           © {new Date().getFullYear()} Suyash Sharma. All rights reserved. 
        </div>
      </div>
    </footer>
  );
};

export default Contact;
