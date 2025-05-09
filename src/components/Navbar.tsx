
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import GlitchText from './GlitchText';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed w-full z-50 bg-cyber-black bg-opacity-80 backdrop-blur-md border-b border-cyber-green/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <GlitchText text="SHADOWBYTE" className="text-xl font-bold tracking-wider" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#mission">Mission</NavLink>
              <NavLink href="#operations">Operations</NavLink>
              <NavLink href="#team">Team</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="cyber-btn inline-flex items-center justify-center p-2 rounded-md"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cyber-darkgray border-b border-cyber-green/30">
          <MobileNavLink href="#home">Home</MobileNavLink>
          <MobileNavLink href="#mission">Mission</MobileNavLink>
          <MobileNavLink href="#operations">Operations</MobileNavLink>
          <MobileNavLink href="#team">Team</MobileNavLink>
          <MobileNavLink href="#contact">Contact</MobileNavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href}
    className="text-cyber-green hover:text-white hover:bg-cyber-green/10 px-3 py-2 rounded-md text-sm font-medium tracking-wider transition-colors duration-200 hover:animate-pulse"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-cyber-green hover:text-white block px-3 py-2 rounded-md text-base font-medium tracking-wider hover:bg-cyber-green/10 transition-colors duration-200"
  >
    {children}
  </a>
);

export default Navbar;
