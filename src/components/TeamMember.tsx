
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import GlitchText from './GlitchText';

interface TeamMemberProps {
  codename: string;
  role: string;
  skills: string[];
}

const TeamMember = ({ codename, role, skills }: TeamMemberProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "cyber-panel relative group cursor-pointer transition-all duration-300",
        isHovered ? "border-cyber-blue shadow-[0_0_15px_rgba(0,153,255,0.5)]" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Anonymous silhouette */}
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 mb-6 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center bg-cyber-darkgray border border-cyber-green rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-cyber-green opacity-70" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <div className={cn(
            "absolute inset-0 bg-cyber-blue/20 rounded-full backdrop-blur-sm opacity-0 transition-opacity duration-300",
            isHovered ? "opacity-50" : ""
          )}></div>
        </div>
        
        <GlitchText text={codename} className="text-xl font-bold tracking-wide mb-2" />
        <span className="text-cyber-blue text-sm uppercase tracking-wider">{role}</span>
        
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs bg-cyber-green bg-opacity-10 text-cyber-green rounded-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      {/* Animated access code effect */}
      <div className={cn(
        "absolute bottom-2 left-2 text-[8px] font-mono text-cyber-green/60 transition-opacity duration-300",
        isHovered ? "opacity-100" : "opacity-0"
      )}>
        ACCESS_LEVEL: CLASSIFIED
      </div>
      
      {/* Animated scan effect */}
      <div className={cn(
        "absolute inset-0 pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-cyber-blue/50 before:animate-[digital-rain_2s_linear_infinite] before:opacity-0",
        isHovered ? "before:opacity-100" : ""
      )}></div>
    </div>
  );
};

export default TeamMember;
