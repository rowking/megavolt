import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/800.css';
import './index.css';
import { SpeedInsights } from '@vercel/speed-insights/react';

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
    <SpeedInsights />
  </StrictMode>
);

// Pages are prerendered at build time; hydrate them instead of re-rendering.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
