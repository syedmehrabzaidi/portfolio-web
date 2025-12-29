
import React from 'react';
import { PERSONAL_INFO } from '../data.ts';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px]"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-3xl">
          <p className="text-blue-400 font-medium mb-4 tracking-wider uppercase text-sm">Worldwide Software Engineer</p>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
            I build <span className="gradient-text">intelligent</span> AI systems.
          </h1>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
            Hi, I'm <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>. 
            I specialize in architecting production-ready LLM solutions, RAG pipelines, and high-performance backend microservices.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all shadow-lg shadow-blue-500/20"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-bold transition-all"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-16 flex items-center space-x-8 opacity-50">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">3+</span>
              <span className="text-xs uppercase tracking-tighter">Years Exp.</span>
            </div>
            <div className="h-10 w-[1px] bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">10+</span>
              <span className="text-xs uppercase tracking-tighter">Projects</span>
            </div>
            <div className="h-10 w-[1px] bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">AI/ML</span>
              <span className="text-xs uppercase tracking-tighter">Specialist</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
