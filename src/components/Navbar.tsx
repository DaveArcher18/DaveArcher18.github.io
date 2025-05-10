
import { Link, useLocation, useNavigate } from "react-router-dom";
import { usePersona } from "@/contexts/PersonaContext";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { persona, togglePersona } = usePersona();
  
  const mathNavItems = [
    { path: '/', label: 'Home' },
    { path: '/writing', label: 'Writing' },
    { path: '/organization', label: 'Organization' },
    { path: '/workshops', label: 'Workshops' },
  ];

  const corporateNavItems = [
    { path: '/', label: 'Home' },
    { path: '/tools', label: 'Tools' },
  ];

  const navItems = persona === 'math' ? mathNavItems : corporateNavItems;

  // Handle persona toggle with navigation
  const handlePersonaToggle = () => {
    togglePersona();
    // Navigate to home page after toggling persona
    navigate('/');
  };

  return (
    <nav className="fixed top-0 w-full py-4 px-6 md:px-12 z-50 backdrop-blur-sm bg-background/80 transition-colors duration-300">
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link text-foreground/90 hover:text-foreground ${
                location.pathname === item.path ? 'active' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center">
          <Button 
            onClick={handlePersonaToggle}
            className="bg-primary/80 hover:bg-primary/90 transition-colors duration-300"
            variant="default"
          >
            {persona === 'math' ? (
              <span className="flex items-center">
                <Moon className="h-4 w-4 mr-2" />
                Switch to Corporate Dave
              </span>
            ) : (
              <span className="flex items-center">
                <Sun className="h-4 w-4 mr-2" />
                Switch to Maths Dave
              </span>
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
