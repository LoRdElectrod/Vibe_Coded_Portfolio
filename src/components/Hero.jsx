import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import DataNodes from './canvas/DataNodes';
import { Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <DataNodes />
        </Canvas>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter"
        >
          Suyash Sharma
        </motion.h1>
        
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.4 }}
           className="text-xl md:text-2xl text-neon-blue mb-8 font-mono"
        >
          Data Science Postgraduate | Machine Learning | NLP
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#projects" className="px-8 py-3 rounded-full bg-neon-blue/10 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-space-black transition-all duration-300 font-semibold shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] flex items-center justify-center gap-2">
            Explore My Work
            <ChevronDown size={18} />
          </a>
          <a href="/Resume_Main.pdf" download className="px-8 py-3 rounded-full bg-white/5 border border-white/20 hover:bg-white/10 transition-all duration-300 font-semibold flex items-center justify-center gap-2 text-white">
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
