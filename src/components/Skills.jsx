import React from 'react';
import { motion } from 'framer-motion';
import { Settings2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    skills: ['Python', 'R', 'SQL', 'JavaScript'],
  },
  {
    title: 'ML & AI',
    skills: ['Scikit-learn', 'PyTorch', 'TensorFlow', 'NLP', 'Transformers'],
  },
  {
    title: 'Tools & Data',
    skills: ['Power BI', 'AWS', 'Docker', 'Flask', 'Git'],
  }
];

const Skills = () => {
  return (
    <section id="skills" className="font-mono text-sm mt-12 bg-primary border border-border-grid rounded-lg overflow-hidden">
      <div className="flex border-b border-border-grid bg-secondary/50 items-center px-4 py-2 text-text-muted">
        <Settings2 size={16} className="mr-2 text-accent" />
        <span>settings.json</span>
      </div>

      <div className="p-4 md:p-8 overflow-x-auto text-text-primary">
        <div className="min-w-[400px]">
          <span className="text-text-muted">{"{"}</span>
          <br/>
          <span className="text-accent ml-4">"skills"</span><span className="text-text-primary">:</span> <span className="text-text-muted">{"{"}</span>
          
          {skillCategories.map((cat, index) => (
             <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="ml-8 my-2"
             >
                <span className="text-accent">"{cat.title.toLowerCase().replace(/ /g, '_')}"</span><span className="text-text-primary">:</span> <span className="text-text-muted">[</span>
                <div className="ml-4 flex flex-wrap gap-2 py-1">
                   {cat.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-text-secondary">
                        "{skill}"{sIdx < cat.skills.length - 1 ? <span className="text-text-primary">,</span> : ''}
                      </span>
                   ))}
                </div>
                <span className="text-text-muted">]</span>{index < skillCategories.length - 1 ? <span className="text-text-primary">,</span> : ''}
             </motion.div>
          ))}
          <span className="text-text-muted ml-4">{"}"}</span>
          <br/>
          <span className="text-text-muted">{"}"}</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
