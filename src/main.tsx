import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// Use HashRouter for GitHub Pages to handle client-side routing
createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <App />
  </HashRouter>
);
