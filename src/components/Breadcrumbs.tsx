import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface Breadcrumb {
  label: string;
  path?: string;
}

export default function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav className="flex items-center gap-1.5 text-sm text-slate-500 mb-6">
      <Link to="/" className="hover:text-amber-600 transition-colors flex items-center gap-1">
        <Home size={14} /> Home
      </Link>
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <ChevronRight size={14} className="text-slate-300" />
          {item.path && i < items.length - 1 ? (
            <Link to={item.path} className="hover:text-amber-600 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-700 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
