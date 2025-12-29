
import React from 'react';
import { PERSONAL_INFO } from '../data';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold mb-6">Let's build the <span className="gradient-text">next big thing</span> together.</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Open for worldwide opportunities in Software Engineering, AI Development, and Backend Systems.
            </p>
            <div className="space-y-4">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 hover:text-blue-400 transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 hover:text-blue-400 transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <span>{PERSONAL_INFO.phone}</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-end gap-6">
            <div className="flex gap-4">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-slate-900 border border-white/10 hover:border-blue-500 transition-all">
                LinkedIn
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-slate-900 border border-white/10 hover:border-blue-500 transition-all">
                GitHub
              </a>
            </div>
            <p className="text-sm text-slate-500 italic">Built with React, TypeScript & Tailwind CSS</p>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex justify-between text-xs text-slate-600 uppercase tracking-widest">
           <span>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}</span>
           <span>Available for Remote / Relocation</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
