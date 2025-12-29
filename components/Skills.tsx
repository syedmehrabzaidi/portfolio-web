
import React from 'react';
import { SKILLS } from '../data.ts';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
          <div className="h-1 w-20 bg-blue-600"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((cat, idx) => (
            <div key={idx} className="p-8 rounded-2xl border border-white/5 bg-slate-900/50 hover:border-blue-500/30 transition-all group">
              <h3 className="text-lg font-bold text-blue-400 mb-6 group-hover:text-blue-300">{cat.name}</h3>
              <ul className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
