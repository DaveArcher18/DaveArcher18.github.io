
import { useEffect, useState } from "react";
import { usePersona } from "@/contexts/PersonaContext";
import Navbar from "@/components/Navbar";

const mathBackground = "/lovable-uploads/7b121684-7293-439d-b4ce-ce4240f2eddd.png";
const corporateBackground = "/lovable-uploads/150d84a7-a738-4079-838f-eee297889e81.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { persona } = usePersona();
  const [backgroundTransition, setBackgroundTransition] = useState(false);
  
  useEffect(() => {
    setBackgroundTransition(true);
    const timer = setTimeout(() => {
      setBackgroundTransition(false);
    }, 1000); // Increased duration
    
    return () => clearTimeout(timer);
  }, [persona]);
  
  return (
    <>
      {/* Math background */}
      <div 
        className={`fixed inset-0 -z-20 bg-cover bg-center transition-all duration-1000 ease-in-out transform ${
          persona === 'math' ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
        }`}
        style={{ backgroundImage: `url(${mathBackground})` }}
      />
      
      {/* Corporate background */}
      <div 
        className={`fixed inset-0 -z-20 bg-cover bg-center transition-all duration-1000 ease-in-out transform ${
          persona === 'corporate' ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
        }`}
        style={{ backgroundImage: `url(${corporateBackground})` }}
      />
      
      {/* Dark overlay with transition */}
      <div className={`fixed inset-0 -z-10 transition-all duration-1000 ease-in-out ${
        persona === 'corporate' ? 'bg-black/60' : 'bg-black/40'
      }`} />
    
      <Navbar />
      
      <main className="container min-h-screen pt-20 pb-12 px-4 relative">
        {children}
      </main>
    </>
  );
};

export default Layout;
