
import React, { useEffect, useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import GlitchText from '@/components/GlitchText';
import OperationsCard from '@/components/OperationsCard';
import TeamMember from '@/components/TeamMember';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const rainRef = useRef<HTMLDivElement>(null);
  
  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Generate digital rain effect
  useEffect(() => {
    if (!rainRef.current) return;
    
    const container = rainRef.current;
    const chars = "01010101010101010101010101";
    const columns = Math.floor(container.offsetWidth / 20);
    
    // Clear previous characters
    container.innerHTML = '';
    
    for (let i = 0; i < columns; i++) {
      const character = document.createElement('div');
      character.className = 'digital-rain-character';
      character.style.left = `${i * 20}px`;
      character.style.animationDuration = `${Math.random() * 20 + 5}s`;
      character.style.animationDelay = `${Math.random() * 5}s`;
      character.textContent = chars[Math.floor(Math.random() * chars.length)];
      container.appendChild(character);
    }
  }, [rainRef]);
  
  // Sample operations data
  const operations = [
    {
      title: "OPERATION PHOENIX",
      date: "2024-03-15",
      description: "Infiltration of banking network vulnerabilities. Multiple financial institutions were notified of critical security flaws in their infrastructure that could potentially expose customer data. Details were responsibly disclosed following security protocols.",
      targetName: "GLOBAL FINANCIAL SYSTEMS",
      successRate: 92
    },
    {
      title: "OPERATION BLACKOUT",
      date: "2024-01-22",
      description: "Exposed critical infrastructure vulnerabilities in power grid systems. Demonstrated potential weaknesses in security protocols that could be exploited. All findings were reported to appropriate authorities to prevent actual harm.",
      targetName: "ENERGY SECTOR",
      successRate: 85
    },
    {
      title: "OPERATION WHISPERGATE",
      date: "2023-11-05",
      description: "Uncovered backdoor access in popular communication platforms. Security audit revealed multiple ways user privacy could be compromised. Responsible disclosure was made to developers who patched the issues.",
      targetName: "COMMUNICATION NETWORKS",
      successRate: 78
    },
    {
      title: "OPERATION DATAMINER",
      date: "2023-09-18",
      description: "Analysis of data broker practices and exposure of unethical data collection methods. This operation highlighted how personal information is gathered and sold without proper consent or knowledge.",
      targetName: "DATA AGGREGATORS",
      successRate: 96
    }
  ];
  
  // Sample team data
  const team = [
    {
      codename: "CIPHER",
      role: "NETWORK SPECIALIST",
      skills: ["NETWORK PENETRATION", "INFRASTRUCTURE", "SOCIAL ENGINEERING"]
    },
    {
      codename: "PHANTOM",
      role: "ZERO-DAY HUNTER",
      skills: ["VULNERABILITY RESEARCH", "REVERSE ENGINEERING", "EXPLOIT DEVELOPMENT"]
    },
    {
      codename: "ORACLE",
      role: "DATA ANALYST",
      skills: ["CRYPTOGRAPHY", "DATA MINING", "PATTERN RECOGNITION"]
    },
    {
      codename: "SPECTER",
      role: "PHYSICAL SECURITY",
      skills: ["ACCESS SYSTEMS", "HARDWARE HACKING", "SURVEILLANCE"]
    }
  ];
  
  return (
    <div className="min-h-screen bg-cyber-black text-foreground">
      {/* Digital Rain Background */}
      <div ref={rainRef} className="digital-rain-container"></div>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <GlitchText 
              text="SHADOWBYTE" 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-flicker" 
              tag="h1"
            />
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-cyber-green mb-8">
              <span className="animate-text-glitch">EXPOSING THE CRACKS IN THE SYSTEM</span>
            </h2>
            <div className="flex justify-center gap-4 mt-10">
              <a href="#mission" className="cyber-btn">Our Mission</a>
              <a href="#operations" className="cyber-btn">Operations</a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.1)_0%,rgba(0,0,0,0)_70%)]"></div>
      </section>
      
      {/* Mission Section */}
      <section id="mission" className="py-16 relative bg-cyber-darkgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <GlitchText text="MISSION" className="text-4xl font-bold mb-6" tag="h2" />
            <div className="h-1 w-20 bg-cyber-green mx-auto"></div>
          </div>
          
          <div className="cyber-panel max-w-3xl mx-auto">
            <p className="text-lg text-cyber-green mb-6">
              We are SHADOWBYTE, a collective dedicated to exposing vulnerabilities in digital systems that impact public safety and privacy.
            </p>
            <p className="text-gray-300 mb-6">
              Our operations focus on ethical system testing, responsible disclosure, and raising awareness about critical security issues in infrastructure that affects everyday citizens.
            </p>
            <p className="text-gray-300 mb-6">
              We believe that security through obscurity is a flawed model. Only by bringing vulnerabilities to light can we create truly secure systems that protect user privacy and safety.
            </p>
            <p className="text-lg text-cyber-green">
              Every system has cracks. We find them before the wrong people do.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0)_100%)]"></div>
      </section>
      
      {/* Operations Section */}
      <section id="operations" className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <GlitchText text="OPERATIONS" className="text-4xl font-bold mb-6" tag="h2" />
            <div className="h-1 w-20 bg-cyber-green mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {operations.map((operation, index) => (
              <OperationsCard key={index} {...operation} />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,153,255,0.1)_0%,rgba(0,0,0,0)_70%)]"></div>
      </section>
      
      {/* Team Section */}
      <section id="team" className="py-16 relative bg-cyber-darkgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <GlitchText text="OPERATIVES" className="text-4xl font-bold mb-6" tag="h2" />
            <div className="h-1 w-20 bg-cyber-green mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0)_100%)]"></div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <GlitchText text="CONTACT" className="text-4xl font-bold mb-6" tag="h2" />
            <div className="h-1 w-20 bg-cyber-green mx-auto"></div>
          </div>
          
          <ContactForm />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,255,65,0.1)_0%,rgba(0,0,0,0)_70%)]"></div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
