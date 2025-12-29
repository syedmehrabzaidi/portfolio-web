
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-effect border-b border-white/10' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold gradient-text">SM.</a>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-blue-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <a 
          href="mailto:syedmehrab2288@gmail.com"
          className="px-5 py-2 rounded-full border border-blue-500/50 hover:bg-blue-500/10 transition-all text-sm font-semibold"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
