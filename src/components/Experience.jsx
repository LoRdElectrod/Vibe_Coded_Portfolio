import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Machine Learning Intern',
    company: 'ListApps',
    date: 'Recent',
    description: 'Developed an OCR-based order automation system, significantly reducing manual entry. Designed and integrated multilingual speech-to-text achievements to expand accessibility and usability.',
    icon: <Briefcase size={20} className="text-space-black" />
  },
  {
    title: 'Energy Sales Executive',
    company: 'Remote',
    date: 'Previous',
    description: 'Specialized in procurement analytics and reporting. Streamlined sales pipelines through data-driven insights, improving overall operational efficiency and strategic outreach.',
    icon: <Briefcase size={20} className="text-space-black" />
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-20 bg-space-black relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience & <span className="text-neon-cyan">Timeline</span></h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
        </motion.div>

        <div className="relative border-l-2 border-neon-blue/30 ml-3 md:ml-0 md:left-1/2 md:-translate-x-1/2">
          {experiences.map((exp, index) => (
            <motion.div 
               key={index}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 * index }}
               className={`mb-12 relative flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-29px] md:left-1/2 md:-translate-x-1/2 w-14 h-14 bg-neon-blue rounded-full border-4 border-space-black flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.6)] z-10">
                 {exp.icon}
              </div>

              {/* Content box */}
              <div className="w-full md:w-5/12 pl-8 md:pl-0">
                 <div className="bg-[#0a0a0f] p-6 rounded-2xl border border-white/10 hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] transition-all duration-300">
                   <span className="text-neon-blue text-sm font-bold tracking-wider mb-2 block">{exp.date}</span>
                   <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                   <h4 className="text-lg text-gray-400 mb-4">{exp.company}</h4>
                   <p className="text-gray-text leading-relaxed">
                     {exp.description}
                   </p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
