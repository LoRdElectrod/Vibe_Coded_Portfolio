import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="font-mono text-sm mt-12 bg-primary border border-border-grid rounded-lg overflow-hidden">
      <div className="flex border-b border-border-grid bg-secondary/50 items-center px-4 py-2 text-text-muted">
        <FileText size={16} className="mr-2 text-accent" />
        <span>README.md</span>
      </div>

      <div className="p-4 md:p-8 text-text-secondary">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <span className="text-xl font-bold text-text-primary border-b border-border-grid pb-2 mb-4 block"># About Me</span>
          <p className="leading-relaxed mb-6 font-sans text-base">
            I am a Data Scientist and Machine Learning Engineer specializing in <span className="text-accent bg-accent/10 px-1 rounded">end-to-end model development</span>, <span className="text-accent bg-accent/10 px-1 rounded">OCR pipelines</span>, and <span className="text-accent bg-accent/10 px-1 rounded">applied analytics</span>. With a deep passion for natural language processing and computer vision, I transform complex data into impactful automated systems. My approach combines rigorous mathematics with modern scalable cloud architectures to deliver robust intelligence products.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-lg font-bold text-text-primary mb-3 block mt-8">## Education</span>
          <div className="space-y-4 pl-4 border-l-2 border-border-grid">
            <div>
              <h4 className="text-accent font-bold">MSc in Data Science</h4>
              <p className="text-text-primary">University of East London</p>
              <p className="text-xs mt-1">Advanced specialization in Machine Learning, Statistical Modeling, and Big Data Analytics.</p>
            </div>
            <div>
              <h4 className="text-accent font-bold">BTech in Computer Science & Engineering</h4>
              <p className="text-text-primary">Core Foundations</p>
              <p className="text-xs mt-1">Strong grounding in Algorithms, Data Structures, and Software Engineering.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
