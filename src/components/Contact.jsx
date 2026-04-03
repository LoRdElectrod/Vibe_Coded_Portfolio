import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle, Loader2, TerminalSquare } from 'lucide-react';

const GithubIcon = ({ className = "", size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const LinkedinIcon = ({ className = "", size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // '', 'submitting', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://formsubmit.co/ajax/sharmasuyash135@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            ...formData,
            _subject: `New Portfolio Message from ${formData.name}`,
        })
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <footer id="contact" className="font-mono text-sm mt-12 bg-primary border border-border-grid rounded-lg overflow-hidden">
      <div className="flex border-b border-border-grid bg-secondary/50 items-center px-4 py-2 text-text-muted">
        <TerminalSquare size={16} className="mr-2 text-accent" />
        <span>terminal</span>
      </div>

      <div className="p-4 md:p-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="mb-8 text-center"
          >
            <p className="text-text-secondary text-base">Open to new opportunities in Data Science & Machine Learning.</p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.1 }}
               className="flex justify-center gap-6"
            >
               <a href="mailto:sharmasuyash135@gmail.com" className="p-3 border border-border-grid rounded hover:border-accent hover:text-accent bg-secondary/30 transition-all">
                  <Mail size={20} />
               </a>
               <a href="https://www.linkedin.com/in/suyash-sharma-6853282a4/" target="_blank" rel="noopener noreferrer" className="p-3 border border-border-grid rounded hover:border-accent hover:text-accent bg-secondary/30 transition-all">
                  <LinkedinIcon size={20} />
               </a>
               <a href="https://github.com/LoRdElectrod" target="_blank" rel="noopener noreferrer" className="p-3 border border-border-grid rounded hover:border-accent hover:text-accent bg-secondary/30 transition-all">
                  <GithubIcon size={20} />
               </a>
            </motion.div>

            <motion.form
               onSubmit={handleSubmit}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="space-y-4 border border-border-grid p-6 bg-secondary/10 rounded"
            >
              <div className="flex flex-col">
                <label className="text-accent mb-1">$ name =</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder='"John Doe"' className="bg-transparent border-b border-border-grid focus:border-accent outline-none py-1 text-text-primary px-2 transition-colors" />
              </div>
              <div className="flex flex-col">
                <label className="text-accent mb-1">$ email =</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder='"john@example.com"' className="bg-transparent border-b border-border-grid focus:border-accent outline-none py-1 text-text-primary px-2 transition-colors" />
              </div>
              <div className="flex flex-col">
                <label className="text-accent mb-1">$ message =</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} placeholder='"Hello there..."' rows="3" className="bg-transparent border-b border-border-grid focus:border-accent outline-none py-1 text-text-primary px-2 transition-colors resize-none"></textarea>
              </div>
              
              {status === 'success' && (
                  <div className="flex items-center gap-2 text-green-500 bg-green-500/10 p-2 rounded">
                      <CheckCircle size={16} /> <span>Status 200: Message delivered.</span>
                  </div>
              )}
              
              {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-2 rounded">
                      <AlertCircle size={16} /> <span>Error 500: Delivery failed.</span>
                  </div>
              )}

              <button disabled={status === 'submitting'} type="submit" className="w-full mt-4 bg-accent/10 border border-accent text-accent py-2 font-bold hover:bg-accent hover:text-bg transition-all flex items-center justify-center gap-2 disabled:opacity-50">
                 {status === 'submitting' ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                 {status === 'submitting' ? 'executing...' : './send_message.sh'}
              </button>
            </motion.form>
          </div>
          
          <div className="mt-12 text-center text-text-muted/50 text-xs">
             // © {new Date().getFullYear()} Suyash Sharma. 
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
