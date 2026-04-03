import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, GitBranch } from 'lucide-react';

const experiences = [
  {
    hash: 'a1b2c3d',
    title: 'Machine Learning Intern',
    company: 'ListApps',
    date: 'Jan 2025 - August 2025',
    description: 'Developed an OCR-based order automation system, significantly reducing manual entry. Designed and integrated multilingual speech-to-text achievements to expand accessibility and usability.',
  },
  {
    hash: 'e4f5g6h',
    title: 'Energy Sales Executive',
    company: 'Beyond Tech Info Solutions',
    date: 'April 2025 - July 2025',
    description: 'Specialized in procurement analytics and reporting. Streamlined sales pipelines through data-driven insights, improving overall operational efficiency and strategic outreach.',
  }
];

const Experience = () => {
  return (
    <section id="experience" className="font-mono text-sm mt-12 bg-primary border border-border-grid rounded-lg overflow-hidden">
      {/* Tab Header */}
      <div className="flex border-b border-border-grid bg-secondary/50 items-center px-4 py-2 text-text-muted">
        <GitBranch size={16} className="mr-2 text-accent" />
        <span>git log --oneline</span>
      </div>

      <div className="p-4 md:p-8 space-y-8 relative">
        <div className="absolute top-0 bottom-0 left-8 md:left-12 w-px bg-border-grid"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="relative pl-12 md:pl-16 group"
          >
            {/* Commit Dot */}
            <div className="absolute left-[11px] md:left-[27px] top-1.5 p-1 bg-primary border border-accent rounded-full group-hover:bg-accent/20 transition-colors">
              <GitCommit size={14} className="text-accent" />
            </div>

            <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
              <span className="text-accent text-xs">commit {exp.hash}</span>
              <h3 className="text-lg font-bold text-text-primary">{exp.title}</h3>
              <span className="text-text-muted">@ {exp.company}</span>
              <span className="text-text-secondary text-xs ml-auto border border-border-grid px-2 py-0.5 rounded bg-secondary/30">{exp.date}</span>
            </div>

            <p className="text-text-secondary text-sm leading-relaxed max-w-3xl">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
