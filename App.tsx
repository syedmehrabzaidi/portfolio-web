
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Skills from './components/Skills.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Footer from './components/Footer.tsx';
import ChatBot from './components/ChatBot.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 underline decoration-blue-600 underline-offset-8">About Me</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  I am a passionate Software Engineer based in Karachi, focused on the intersection of AI and scalable backend systems. 
                  My journey in tech has been driven by a curiosity for how data can be leveraged to create intelligent user experiences.
                </p>
                <p className="text-slate-400 text-lg leading-relaxed">
                  I have built and deployed several production-ready AI services, from multilingual TTS systems to enterprise chatbots using LLMs and RAG. 
                  My goal is to simplify complex AI technologies into usable and efficient software solutions on a global scale.
                </p>
              </div>
              <div className="relative group">
                 <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform opacity-20"></div>
                 <div className="relative aspect-square rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center p-8">
                   <div className="text-center">
                     <div className="text-5xl mb-4">🚀</div>
                     <p className="text-sm font-mono text-blue-400 uppercase tracking-widest">Architecting intelligence</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </section>
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
