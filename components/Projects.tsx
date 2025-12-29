
import React from 'react';
import { PROJECTS } from '../data.ts';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Selected Projects</h2>
          <div className="h-1 w-20 bg-blue-600"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((proj, idx) => (
            <div key={idx} className="group flex flex-col rounded-3xl overflow-hidden bg-slate-900 border border-white/5 hover:border-blue-500/50 transition-all shadow-xl">
              <div className="relative h-48 bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center overflow-hidden">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                 <span className="text-4xl font-black text-white/10 select-none group-hover:scale-110 transition-transform">{proj.title.split(' ')[0]}</span>
                 {proj.link && (
                    <a 
                      href={proj.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600/20 backdrop-blur-sm"
                    >
                      <span className="px-6 py-2 bg-blue-600 text-white rounded-full font-bold shadow-lg">View Project Details</span>
                    </a>
                 )}
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-white">{proj.title}</h3>
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                  )}
                </div>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">{proj.description}</p>
                
                <div className="mb-8 space-y-2 flex-1">
                   {proj.points.map((pt, pIdx) => (
                     <div key={pIdx} className="flex gap-2 text-xs text-slate-500 italic">
                        <span className="text-blue-500">•</span>
                        <span>{pt}</span>
                     </div>
                   ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.tech.map((t, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-blue-500/10 text-blue-400 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
