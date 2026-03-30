import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, BookOpen, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-20 bg-space-black relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neon-cyan mb-4">About Me</h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-neon-blue/50 transition-colors duration-500"
          >
            <div className="flex items-center gap-4 mb-6 text-neon-blue">
               <BrainCircuit size={32} />
               <h3 className="text-2xl font-semibold text-white">Professional Summary</h3>
            </div>
            <p className="text-gray-text leading-relaxed text-lg">
              I am a Data Scientist and Machine Learning Engineer specializing in <span className="text-neon-cyan/90 font-medium">end-to-end model development</span>, <span className="text-neon-cyan/90 font-medium">OCR pipelines</span>, and <span className="text-neon-cyan/90 font-medium">applied analytics</span>. With a deep passion for natural language processing and computer vision, I transform complex data into impactful automated systems. My approach combines rigorous mathematics with modern scalable cloud architectures to deliver robust intelligence products.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="space-y-6"
          >
            <div className="bg-gradient-to-r from-neon-blue/10 to-transparent p-6 border-l-4 border-neon-blue rounded-r-xl">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="text-neon-blue" size={24} />
                <h4 className="text-xl font-bold text-white">MSc in Data Science</h4>
              </div>
              <p className="text-neon-cyan/80">University of East London</p>
              <p className="text-gray-text text-sm mt-2">Advanced specialization in Machine Learning, Statistical Modeling, and Big Data Analytics.</p>
            </div>

            <div className="bg-gradient-to-r from-white/5 to-transparent p-6 border-l-4 border-white/20 rounded-r-xl">
              <div className="flex items-center gap-3 mb-2">
                <Cpu className="text-gray-400" size={24} />
                <h4 className="text-xl font-bold text-white">BTech in Computer Science & Engineering</h4>
              </div>
              <p className="text-gray-400">Core Foundations</p>
              <p className="text-sm text-gray-text mt-2">Strong grounding in Algorithms, Data Structures, and Software Engineering.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
