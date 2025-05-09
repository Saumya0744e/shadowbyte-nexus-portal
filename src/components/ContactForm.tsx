
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import GlitchText from './GlitchText';
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    handle: '',
    encryption: 'pgp', // Options: pgp, none
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate encryption and sending process
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "TRANSMISSION COMPLETE",
      description: "Your message has been securely transmitted. Standby for response.",
      variant: "default",
    });
    
    setIsSubmitting(false);
    setFormState({
      handle: '',
      encryption: 'pgp',
      message: ''
    });
  };
  
  return (
    <div className="cyber-panel max-w-xl mx-auto">
      <GlitchText text="SECURE TRANSMISSION" className="text-2xl font-bold mb-6 text-center" />
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-cyber-green">HANDLE</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-cyber-green">&gt;</span>
            <input
              type="text"
              name="handle"
              value={formState.handle}
              onChange={handleChange}
              className="block w-full bg-cyber-darkgray/50 border border-cyber-green/30 text-cyber-green pl-8 pr-4 py-3 focus:outline-none focus:border-cyber-green focus:ring-1 focus:ring-cyber-green placeholder-cyber-green/40"
              placeholder="ANONYMOUS"
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-cyber-green">ENCRYPTION PROTOCOL</label>
          <div className="relative">
            <select
              name="encryption"
              value={formState.encryption}
              onChange={handleChange}
              className="block w-full bg-cyber-darkgray/50 border border-cyber-green/30 text-cyber-green px-4 py-3 focus:outline-none focus:border-cyber-green focus:ring-1 focus:ring-cyber-green"
            >
              <option value="pgp">PGP (RECOMMENDED)</option>
              <option value="none">NONE (INSECURE)</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-cyber-green">MESSAGE</label>
          <div className="relative">
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows={5}
              className="block w-full bg-cyber-darkgray/50 border border-cyber-green/30 text-cyber-green px-4 py-3 focus:outline-none focus:border-cyber-green focus:ring-1 focus:ring-cyber-green placeholder-cyber-green/40"
              placeholder="ENTER YOUR MESSAGE HERE..."
              required
            ></textarea>
            
            <div className={cn(
              "absolute right-2 bottom-2 text-xs text-cyber-green/60",
              formState.encryption === 'pgp' ? "visible" : "invisible"
            )}>
              PGP SECURED
            </div>
          </div>
        </div>
        
        <button 
          type="submit" 
          className={cn(
            "cyber-btn w-full py-3 group",
            isSubmitting ? "opacity-70 pointer-events-none" : ""
          )}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-pulse">ENCRYPTING</span>
              <span className="inline-block w-4 h-4 border-2 border-t-transparent border-cyber-green rounded-full animate-spin"></span>
            </span>
          ) : (
            <span>TRANSMIT SECURELY</span>
          )}
        </button>
      </form>
      
      <div className="mt-6 pt-4 border-t border-cyber-green/20 text-xs text-cyber-green/60 text-center">
        TRANSMISSION ENDPOINT SECURED WITH 4096-BIT ENCRYPTION
      </div>
    </div>
  );
};

export default ContactForm;
