import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { SERVICES, COMPANY } from "../data/siteData";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServiceCategory, setMobileServiceCategory] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaMenuOpen(null);
    setMobileServiceCategory(null);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top bar */}
      <div className="bg-slate-900 text-slate-300 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Phone size={14} /> {COMPANY.phone}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Mail size={14} /> {COMPANY.email}
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> Deira, Dubai
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-amber-400 font-medium">{COMPANY.authorities} Authorities Approved</span>
            <span className="text-slate-600">|</span>
            <span>Dubai Licensed</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/assets/images/Mega_Volt_logo250.png"
                alt="Megavolt Technical Services"
                className="h-14 w-auto object-contain"
              />
              <div>
                <div className="font-bold text-slate-900 text-lg leading-none" style={{ fontFamily: 'Montserrat' }}>
                  UAE Approval Hub
                </div>
                <div className="text-xs text-slate-500 mt-0.5 leading-tight">
                  Powered by {COMPANY.legal}
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link to="/" className={`nav-link px-3 py-2 ${isActive("/") ? "text-amber-600" : ""}`}>
                Home
              </Link>
              <Link to="/about" className={`nav-link px-3 py-2 ${isActive("/about") ? "text-amber-600" : ""}`}>
                About
              </Link>

              {/* Services mega menu */}
              <div
                className="relative"
                onMouseEnter={() => setMegaMenuOpen("services")}
                onMouseLeave={() => setMegaMenuOpen(null)}
              >
                <button className={`nav-link px-3 py-2 flex items-center gap-1 ${location.pathname.startsWith("/services") ? "text-amber-600" : ""}`}>
                  Services <ChevronDown size={16} className={`transition-transform ${megaMenuOpen === "services" ? "rotate-180" : ""}`} />
                </button>
                {megaMenuOpen === "services" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 w-[900px] grid grid-cols-3 gap-1 p-6">
                      {SERVICES.map((cat) => (
                        <div key={cat.slug}>
                          <Link
                            to={`/services/${cat.slug}`}
                            className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-amber-600 mb-2 px-3"
                          >
                            {cat.category}
                          </Link>
                          <div className="space-y-0.5">
                            {cat.items.slice(0, 7).map((item) => (
                              <Link
                                key={item.slug}
                                to={`/services/${cat.slug}/${item.slug}`}
                                className="mega-menu-item"
                              >
                                {item.name}
                              </Link>
                            ))}
                            {cat.items.length > 7 && (
                              <Link
                                to={`/services/${cat.slug}`}
                                className="mega-menu-item text-amber-600 font-medium"
                              >
                                View all ({cat.items.length})
                              </Link>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/industries" className={`nav-link px-3 py-2 ${location.pathname.startsWith("/industries") ? "text-amber-600" : ""}`}>
                Industries
              </Link>
              <Link to="/projects" className={`nav-link px-3 py-2 ${location.pathname.startsWith("/projects") ? "text-amber-600" : ""}`}>
                Projects
              </Link>
              <Link to="/blog" className={`nav-link px-3 py-2 ${location.pathname.startsWith("/blog") ? "text-amber-600" : ""}`}>
                Blog
              </Link>
              <Link to="/resources" className={`nav-link px-3 py-2 ${isActive("/resources") ? "text-amber-600" : ""}`}>
                Resources
              </Link>
              <Link to="/faq" className={`nav-link px-3 py-2 ${isActive("/faq") ? "text-amber-600" : ""}`}>
                FAQ
              </Link>
              <Link to="/contact" className={`nav-link px-3 py-2 ${isActive("/contact") ? "text-amber-600" : ""}`}>
                Contact
              </Link>
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <Link to="/contact" className="btn-primary text-sm">
                Get a Free Quote
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-slate-700"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 max-h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="px-4 py-4 space-y-1">
              <Link to="/" className="block py-2 text-slate-700 font-medium">Home</Link>
              <Link to="/about" className="block py-2 text-slate-700 font-medium">About</Link>

              <div>
                <button
                  className="flex items-center justify-between w-full py-2 text-slate-700 font-medium"
                  onClick={() => setMobileServiceCategory(mobileServiceCategory === "services" ? null : "services")}
                >
                  Services <ChevronDown size={16} className={`transition-transform ${mobileServiceCategory === "services" ? "rotate-180" : ""}`} />
                </button>
                {mobileServiceCategory === "services" && (
                  <div className="pl-4 space-y-3 pb-2">
                    {SERVICES.map((cat) => (
                      <div key={cat.slug}>
                        <Link to={`/services/${cat.slug}`} className="block py-1.5 text-sm font-semibold text-slate-900">
                          {cat.category}
                        </Link>
                        <div className="pl-3 space-y-1">
                          {cat.items.map((item) => (
                            <Link
                              key={item.slug}
                              to={`/services/${cat.slug}/${item.slug}`}
                              className="block py-1 text-sm text-slate-600"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/industries" className="block py-2 text-slate-700 font-medium">Industries</Link>
              <Link to="/projects" className="block py-2 text-slate-700 font-medium">Projects</Link>
              <Link to="/blog" className="block py-2 text-slate-700 font-medium">Blog</Link>
              <Link to="/resources" className="block py-2 text-slate-700 font-medium">Resources</Link>
              <Link to="/faq" className="block py-2 text-slate-700 font-medium">FAQ</Link>
              <Link to="/careers" className="block py-2 text-slate-700 font-medium">Careers</Link>
              <Link to="/contact" className="block py-2 text-slate-700 font-medium">Contact</Link>
              <Link to="/contact" className="btn-primary w-full justify-center mt-4">
                Get a Free Quote
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
