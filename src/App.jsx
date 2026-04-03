import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  // Generate random line numbers array for decorative IDE effect
  const lineNumbers = Array.from({ length: 150 }, (_, i) => i + 1);

  return (
    <div className="bg-primary min-h-screen text-text-primary font-sans transition-colors duration-300 relative bg-grid-pattern selection:bg-accent/20">
      <Navbar />
      
      {/* IDE Editor view structure */}
      <div className="flex pt-14 min-h-screen max-w-7xl mx-auto">
        
        {/* Left 'Line Numbers' Gutter */}
        <div className="hidden md:flex flex-col w-12 border-r border-border-grid bg-secondary/50 pt-8 items-end pr-2 text-text-secondary font-mono text-xs select-none">
          {lineNumbers.map(n => (
            <div key={n} className="h-6 opacity-30 leading-6">{n}</div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-x-hidden p-4 md:p-8 relative">
          {/* Breadcrumb / File Path */}
          <div className="mb-4 text-xs font-mono text-text-secondary border-b border-border-grid pb-2">
            workspace <span className="text-accent">&gt;</span> src <span className="text-accent">&gt;</span> index.tsx
          </div>

          <div className="space-y-24">
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
