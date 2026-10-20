import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitioning, setTransitioning] = useState(false);
  const firstPath = useRef(pathname);

  useEffect(() => {
    // No fade on the first page load, so prerendered content shows immediately.
    if (pathname === firstPath.current) {
      setDisplayChildren(children);
      return;
    }
    firstPath.current = "";
    setTransitioning(true);
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setTransitioning(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [pathname, children]);

  return (
    <div
      className={`transition-all duration-300 ${
        transitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
      }`}
    >
      {displayChildren}
    </div>
  );
}
