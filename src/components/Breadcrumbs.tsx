import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface Breadcrumb {
  label: string;
  path?: string;
}

export default function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-slate-300 mb-6">
      <Link to="/" className="hover:text-amber-400 transition-colors flex items-center gap-1">
        <Home size={14} /> Home
      </Link>
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <ChevronRight size={14} className="text-slate-400" aria-hidden="true" />
          {item.path && i < items.length - 1 ? (
            <Link to={item.path} className="hover:text-amber-400 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span aria-current="page" className="text-white font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
