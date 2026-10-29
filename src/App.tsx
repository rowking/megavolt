import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollProgress from "./components/ScrollProgress";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import About from "./pages/About";
import { ServicesOverview, ServiceCategory, ServiceDetail } from "./pages/Services";
import { IndustriesOverview, IndustryDetail } from "./pages/Industries";
import { ProjectsOverview, ProjectDetail } from "./pages/Projects";
import { BlogOverview, BlogDetail } from "./pages/Blog";
import Resources from "./pages/Resources";
import FAQ from "./pages/FAQ";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import { LocationsOverview, LocationDetail } from "./pages/Locations";
import { Privacy, Terms, Cookies, NotFound } from "./pages/Legal";
import Landing from "./pages/Landing";
import { applySeo } from "./seo";

function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    applySeo(pathname);
  }, [pathname]);
  return null;
}

/** The whole site without a router, so the prerenderer can use a static one. */
export function Site() {
  return (
    <>
      <RouteEffects />
      <ScrollProgress />
      <div className="min-h-screen flex flex-col bg-white">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-amber-500 focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold">Skip to main content</a>
        <Header />
        <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesOverview />} />
              <Route path="/services/:category" element={<ServiceCategory />} />
              <Route path="/services/:category/:service" element={<ServiceDetail />} />
              <Route path="/industries" element={<IndustriesOverview />} />
              <Route path="/industries/:slug" element={<IndustryDetail />} />
              <Route path="/projects" element={<ProjectsOverview />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/blog" element={<BlogOverview />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/locations" element={<LocationsOverview />} />
              <Route path="/locations/:slug" element={<LocationDetail />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/electrical-contractor-dubai" element={<Landing />} />
              <Route path="/mep-contractor-dubai" element={<Landing />} />
              <Route path="/ev-charger-installation-dubai" element={<Landing />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Site />
    </BrowserRouter>
  );
}
