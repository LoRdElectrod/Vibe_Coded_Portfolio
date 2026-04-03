import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Database, Cloud, LineChart, Code2, FolderOpen } from 'lucide-react';

const GithubIcon = ({ className = "", size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const projects = [
  {
    id: 1,
    title: 'Youth Employment Forecaster',
    type: '.pbix',
    summary: 'A predictive tool forecasting youth unemployment trends.',
    description: 'Built with Power BI integration for dynamic dashboarding. Achieved significant real-world impact and recognition by providing actionable visualizations to stakeholders.',
    tags: ['Power BI', 'Analytics', 'Predictive Modeling'],
    icon: <LineChart size={16} />,
    repo: 'https://github.com/LoRdElectrod/Unemployement_Forecaster',
  },
  {
    id: 2,
    title: 'Local RAG Coding Assistant',
    type: '.py',
    summary: 'Offline AI assistant built with a complete RAG pipeline.',
    description: 'Seamless integration with ChromaDB for vector retrieval and Streamlit for an interactive chat interface. Allows querying local codebases privately.',
    tags: ['NLP', 'ChromaDB', 'Streamlit', 'RAG'],
    icon: <Code2 size={16} />,
    repo: 'https://github.com/LoRdElectrod',
  },
  {
    id: 3,
    title: 'AWS Stock Market Pipeline',
    type: '.config',
    summary: 'End-to-End ETL pipeline optimized for the cloud.',
    description: 'Developed an automated data ingestion and prediction system deployed on AWS cloud architecture, ensuring scalable and resilient machine learning inference.',
    tags: ['AWS', 'ETL', 'Stock Prediction', 'Python'],
    icon: <Cloud size={16} />,
    repo: 'https://github.com/LoRdElectrod/stock_prediction_app',
  },
  {
    id: 4,
    title: 'Smart India Hackathon 2023',
    type: '.exe',
    summary: 'National-Level AI Challenge',
    description: 'Conceptualized and built an innovative solution under high pressure, leading the team to a Top 20% national finish among thousands of entries.',
    tags: ['Hackathon', 'AI', 'Innovation'],
    icon: <Database size={16} />,
    repo: 'https://github.com/LoRdElectrod',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="font-mono text-sm border border-border-grid bg-primary rounded-lg overflow-hidden relative">
      {/* Header tab */}
      <div className="flex border-b border-border-grid bg-secondary/50 items-center px-4 py-2 text-text-muted">
        <FolderOpen size={16} className="mr-2 text-accent" />
        <span>workspaces/projects.json</span>
      </div>

      <div className="p-4 md:p-6 overflow-x-auto">
        <div className="min-w-[700px]">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 pb-2 border-b border-border-grid text-text-muted mb-4 font-bold uppercase tracking-wider text-xs">
            <div className="col-span-1">ID</div>
            <div className="col-span-3">Name</div>
            <div className="col-span-4">Description</div>
            <div className="col-span-3">Stack</div>
            <div className="col-span-1 text-right">Link</div>
          </div>

          {/* Table Body */}
          <div className="space-y-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="grid grid-cols-12 gap-4 py-3 border-b border-border-grid/50 hover:bg-secondary/40 transition-colors group cursor-default"
              >
                <div className="col-span-1 text-text-muted">0{project.id}</div>
                <div className="col-span-3 font-semibold text-text-primary flex items-center gap-2">
                  <span className="text-accent">{project.icon}</span>
                  <span>{project.title}</span>
                  <span className="text-xs text-text-muted font-normal">{project.type}</span>
                </div>
                <div className="col-span-4 text-text-secondary leading-tight">
                  <span className="font-bold text-text-primary">{project.summary}</span><br />
                  <span className="text-xs">{project.description}</span>
                </div>
                <div className="col-span-3 flex flex-wrap gap-1 content-start">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 border border-border-grid rounded text-text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="col-span-1 flex justify-end">
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors p-1">
                     <GithubIcon />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
