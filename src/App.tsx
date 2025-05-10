
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PersonaProvider } from "@/contexts/PersonaContext";
import { usePersona } from "@/contexts/PersonaContext"; 
import Layout from "@/components/Layout";
import Home from "./pages/Home";
import Writing from "./pages/Writing";
import Organization from "./pages/Organization";
import WorkshopsAttended from "./pages/WorkshopsAttended";
import Tools from "./pages/Tools";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Create a wrapper component that handles persona-specific routes
const PersonaRoutes = () => {
  const { persona } = usePersona();
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* Math persona routes */}
      {persona === 'math' && (
        <>
          <Route path="/writing" element={<Writing />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/workshops" element={<WorkshopsAttended />} />
        </>
      )}
      
      {/* Corporate persona routes */}
      {persona === 'corporate' && (
        <Route path="/tools" element={<Tools />} />
      )}
      
      {/* Redirect if trying to access routes from the wrong persona */}
      {persona === 'math' && <Route path="/tools" element={<Navigate to="/" replace />} />}
      {persona === 'corporate' && (
        <>
          <Route path="/writing" element={<Navigate to="/" replace />} />
          <Route path="/organization" element={<Navigate to="/" replace />} />
          <Route path="/workshops" element={<Navigate to="/" replace />} />
        </>
      )}
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <PersonaProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <PersonaRoutes />
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </PersonaProvider>
  </QueryClientProvider>
);

export default App;
