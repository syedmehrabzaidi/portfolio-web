
import React from 'react';
import { EXPERIENCES } from '../data';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-blue-600"></div>
        </div>

        <div className="space-y-12 relative before:absolute before:left-4 md:before:left-1/2 before:w-[1px] before:h-full before:bg-white/10">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.8)] z-10 border-4 border-slate-950"></div>
              
              <div className="w-full md:w-1/2 flex flex-col items-start md:items-end px-12 text-left md:text-right">
                <span className="text-blue-400 font-semibold mb-1">{exp.period}</span>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <p className="text-slate-400 text-sm">{exp.company} • {exp.location}</p>
              </div>

              <div className="w-full md:w-1/2 px-12">
                <div className="p-6 rounded-xl bg-slate-900/50 border border-white/5 hover:bg-slate-900/80 transition-all">
                  <ul className="space-y-2 text-sm text-slate-400 leading-relaxed list-disc list-inside">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
