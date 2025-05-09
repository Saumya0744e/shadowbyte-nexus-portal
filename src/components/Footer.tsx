
import React from 'react';
import GlitchText from './GlitchText';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cyber-black border-t border-cyber-green/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <GlitchText text="SHADOWBYTE" className="text-xl font-bold mb-4" />
          
          <p className="text-cyber-green/70 text-sm mb-4 text-center">
            Operating in the shadows since 2019.
            <br />
            All systems vulnerable in time.
          </p>
          
          <div className="flex space-x-6 mb-6">
            <FooterLink href="#">IRC</FooterLink>
            <FooterLink href="#">MATRIX</FooterLink>
            <FooterLink href="#">TOR</FooterLink>
            <FooterLink href="#">SIGNAL</FooterLink>
          </div>
          
          <div className="text-xs text-cyber-green/50 font-mono">
            <span>© {currentYear} SHADOWBYTE // </span>
            <span className="animate-pulse inline-block">■</span>
            <span> SYSTEMS ACTIVE</span>
          </div>
          
          <div className="mt-4 text-[10px] text-center text-cyber-green/30 max-w-lg">
            THIS IS A FICTIONAL WEBSITE. ALL OPERATIONS, ACTIVITIES, AND CONTENT ARE FICTIONAL AND FOR ENTERTAINMENT PURPOSES ONLY. NO ACTUAL HACKING OR ILLEGAL ACTIVITIES ARE PERFORMED OR ENDORSED.
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-cyber-green/70 hover:text-cyber-green transition-colors duration-200 text-sm"
  >
    {children}
  </a>
);

export default Footer;
