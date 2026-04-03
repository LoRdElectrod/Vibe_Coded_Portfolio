import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 border-b border-border-grid bg-primary/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between font-mono text-sm">
        <div className="flex items-center gap-2 text-text-primary font-bold">
          <Terminal size={18} className="text-accent" />
          <span>suyash_sharma<span className="text-accent animate-pulse">_</span></span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-text-secondary">
            <a href="#about" className="hover:text-accent transition-colors">./about</a>
            <a href="#projects" className="hover:text-accent transition-colors">./projects</a>
            <a href="#experience" className="hover:text-accent transition-colors">./experience</a>
            <a href="#contact" className="hover:text-accent transition-colors">./contact</a>
          </div>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-secondary border border-transparent hover:border-border-grid transition-all text-text-secondary hover:text-accent"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
