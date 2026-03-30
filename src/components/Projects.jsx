import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Database, Cloud, LineChart, Code2 } from 'lucide-react';

const GithubIcon = ({ className = "", size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const projects = [
  {
    title: 'Youth Employment Forecaster',
    summary: 'A predictive tool forecasting youth unemployment trends.',
    description: 'Built with Power BI integration for dynamic dashboarding. Achieved significant real-world impact and recognition by providing actionable visualizations to stakeholders.',
    tags: ['Power BI', 'Analytics', 'Predictive Modeling'],
    icon: <LineChart className="text-neon-blue" size={32} />,
    repo: 'https://github.com/LoRdElectrod/Unemployement_Forecaster',
  },
  {
    title: 'Local RAG Coding Assistant',
    summary: 'Offline AI assistant built with a complete RAG pipeline.',
    description: 'Seamless integration with ChromaDB for vector retrieval and Streamlit for an interactive chat interface. Allows querying local codebases privately.',
    tags: ['NLP', 'ChromaDB', 'Streamlit', 'RAG'],
    icon: <Code2 className="text-neon-blue" size={32} />,
    repo: 'https://github.com/LoRdElectrod',
  },
  {
    title: 'AWS Stock Market Pipeline',
    summary: 'End-to-End ETL pipeline optimized for the cloud.',
    description: 'Developed an automated data ingestion and prediction system deployed on AWS cloud architecture, ensuring scalable and resilient machine learning inference.',
    tags: ['AWS', 'ETL', 'Stock Prediction', 'Python'],
    icon: <Cloud className="text-neon-blue" size={32} />,
    repo: 'https://github.com/LoRdElectrod/stock_prediction_app',
  },
  {
    title: 'Smart India Hackathon 2023',
    summary: 'National-Level AI Challenge',
    description: 'Conceptualized and built an innovative solution under high pressure, leading the team to a Top 20% national finish among thousands of entries.',
    tags: ['Hackathon', 'AI', 'Innovation'],
    icon: <Database className="text-neon-blue" size={32} />,
    repo: 'https://github.com/LoRdElectrod',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-20 bg-[#07070a] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-[150px] -z-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-neon-cyan">Projects</span></h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
               key={index}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: index * 0.2 }}
               whileHover={{ scale: 1.02, translateY: -5 }}
               className="group relative bg-[#0a0a0f] border border-white/10 rounded-2xl p-8 hover:border-neon-blue hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                 <div className="p-3 bg-white/5 rounded-xl group-hover:bg-neon-blue/10 transition-colors">
                   {project.icon}
                 </div>
                 <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-gray-text hover:text-neon-cyan transition-colors">
                   <GithubIcon size={24} />
                 </a>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-neon-blue/80 font-medium mb-4">{project.summary}</p>
              <p className="text-gray-text text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/70 group-hover:border-neon-blue/30 group-hover:text-neon-cyan transition-colors">
                    {tag}
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

export default Projects;
