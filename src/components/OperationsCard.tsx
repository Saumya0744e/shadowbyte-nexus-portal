
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import GlitchText from './GlitchText';

interface OperationCardProps {
  title: string;
  date: string;
  description: string;
  targetName: string;
  successRate: number;
}

const OperationsCard = ({ title, date, description, targetName, successRate }: OperationCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "cyber-panel transition-all duration-300 overflow-hidden",
        isHovered ? "border-cyber-blue shadow-[0_0_15px_rgba(0,153,255,0.5)]" : "",
        isExpanded ? "h-auto" : "h-64"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start mb-4">
        <GlitchText text={title} className="text-xl font-bold" />
        <span className="text-xs text-cyber-green opacity-80">{date}</span>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">Target:</span>
          <span className="text-cyber-blue">{targetName}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">Success Rate:</span>
          <div className="w-1/2 bg-gray-700 rounded-full h-2.5">
            <div 
              className="bg-cyber-green h-2.5 rounded-full" 
              style={{ width: `${successRate}%` }}
            ></div>
          </div>
        </div>
        
        <div className={cn("transition-opacity duration-300", 
          isExpanded ? "opacity-100" : "opacity-70 line-clamp-3"
        )}>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </div>
      
      <button 
        className="mt-4 text-cyber-blue underline text-sm hover:text-cyber-green transition-colors duration-200"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Hide Details" : "View Details"}
      </button>
      
      {/* Animated glitch effect on hover */}
      <div className={cn(
        "absolute inset-x-0 top-0 h-0.5 bg-cyber-blue",
        isHovered ? "animate-pulse" : ""
      )} />
    </div>
  );
};

export default OperationsCard;
