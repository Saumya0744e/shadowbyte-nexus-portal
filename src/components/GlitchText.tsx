
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const GlitchText = ({ text, className, tag = 'div' }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    if (!isTyping) return;
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, [text, isTyping]);
  
  const TagName = tag as keyof JSX.IntrinsicElements;
  
  return (
    <TagName 
      className={cn("glitch-container terminal-text", className)} 
      data-text={displayText}
    >
      {displayText}<span className={isTyping ? "cursor" : ""}></span>
    </TagName>
  );
};

export default GlitchText;
