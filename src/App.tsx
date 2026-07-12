import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import CustomCursor from "./components/CustomCursor";
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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CustomCursor />
      <ScrollProgress />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
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
              <Route path="*" element={<Home />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
      <Analytics />
    </BrowserRouter>
  );
}
