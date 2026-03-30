import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming',
    skills: ['Python', 'R', 'SQL'],
    color: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'ML & AI',
    skills: ['Scikit-learn', 'PyTorch', 'TensorFlow', 'NLP', 'Transformers'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Tools & Data',
    skills: ['Power BI', 'AWS', 'Docker', 'Flask', 'Git'],
    color: 'from-green-400 to-emerald-600'
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-20 bg-[#07070a] relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Core <span className="text-neon-cyan">Skills</span></h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, index) => (
             <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-[#0a0a0f] rounded-2xl p-8 border border-white/5 hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
             >
                {/* Background gradient orb */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r ${cat.color} rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                <h3 className="text-2xl font-bold text-white mb-6 relative z-10">{cat.title}</h3>
                <div className="flex flex-wrap gap-3 relative z-10">
                   {cat.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 font-medium hover:text-neon-cyan hover:border-neon-cyan/50 hover:bg-neon-blue/10 transition-colors shadow-sm">
                        {skill}
                      </span>
                   ))}
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
