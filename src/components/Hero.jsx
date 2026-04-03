import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import DataNodes from './canvas/DataNodes';
import { Download, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[80vh] w-full flex flex-col justify-center overflow-hidden border border-border-grid bg-secondary/30 rounded-lg p-6">
      {/* Subtle 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <DataNodes />
        </Canvas>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-start font-mono text-sm max-w-3xl">
        
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.5 }}
           className="text-text-muted mb-4"
        >
          <span className="text-accent italic">/**</span>
          <br/>
          <span className="text-accent italic"> * @developer Suyash Sharma</span>
          <br/>
          <span className="text-accent italic"> * @role Data Science Postgraduate | Machine Learning | NLP</span>
          <br/>
          <span className="text-accent italic"> */</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-text-primary mt-2 font-sans"
        >
          Building Intelligent <br />
          <span className="text-accent relative inline-block">
            Systems
            <span className="absolute bottom-0 left-0 w-full h-1 bg-accent/30"></span>
          </span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <a href="#projects" className="px-6 py-2.5 bg-accent/10 border border-accent text-accent hover:bg-accent hover:text-bg transition-all duration-300 flex items-center justify-center gap-2 group">
            <Terminal size={16} />
            <span className="group-hover:text-bg">execute_projects()</span>
          </a>
          <a href="/Resume_Main.pdf" download className="px-6 py-2.5 border border-border-grid hover:border-text-primary hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2 text-text-primary">
            <Download size={16} />
            <span>download_cv.pdf</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
