
import React, { createContext, useState, useContext, useEffect } from 'react';

type Persona = 'math' | 'corporate';

interface PersonaContextType {
  persona: Persona;
  setPersona: (persona: Persona) => void;
  togglePersona: () => void;
}

const PersonaContext = createContext<PersonaContextType | undefined>(undefined);

export const PersonaProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [persona, setPersona] = useState<Persona>('math');
  
  // Load saved persona from localStorage on initial render
  useEffect(() => {
    const savedPersona = localStorage.getItem('persona') as Persona;
    if (savedPersona === 'math' || savedPersona === 'corporate') {
      setPersona(savedPersona);
      
      // Set the theme class based on the persona
      if (savedPersona === 'corporate') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);
  
  // Toggle between personas
  const togglePersona = () => {
    const newPersona = persona === 'math' ? 'corporate' : 'math';
    setPersona(newPersona);
    
    // Save to localStorage
    localStorage.setItem('persona', newPersona);
    
    // Apply dark mode if corporate persona
    if (newPersona === 'corporate') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  
  return (
    <PersonaContext.Provider value={{ persona, setPersona, togglePersona }}>
      {children}
    </PersonaContext.Provider>
  );
};

export const usePersona = () => {
  const context = useContext(PersonaContext);
  if (context === undefined) {
    throw new Error('usePersona must be used within a PersonaProvider');
  }
  return context;
};
