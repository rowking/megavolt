import { Link, useParams } from "react-router-dom";
import { MapPin, CheckCircle } from "lucide-react";
import { PROJECTS } from "../data/siteData";
import Breadcrumbs from "../components/Breadcrumbs";
import CTASection from "../components/CTASection";

export function ProjectsOverview() {
  return (
    <div>
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Projects"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ label: "Projects" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
            Our Projects
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            500+ projects delivered across Dubai. From DEWA approvals to full MEP fit-outs,
            see how we've helped businesses get compliant and stay operational.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <Link
                key={p.id}
                to={`/projects/${p.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm card-hover border border-slate-100"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                    {p.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm text-slate-500 mb-3">
                    <MapPin size={14} /> {p.location}
                  </div>
                  <p className="text-sm text-slate-600 line-clamp-2">{p.scope}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {p.authorities.map((a) => (
                      <span key={a} className="authority-badge">{a}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

export function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Project not found</h1>
        <Link to="/projects" className="text-amber-600 mt-4 inline-block">← Back to Projects</Link>
      </div>
    );
  }

  const related = PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div>
      <section className="relative h-[400px] overflow-hidden">
        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 h-full flex flex-col justify-end pb-12">
          <Breadcrumbs items={[{ label: "Projects", path: "/projects" }, { label: project.title }]} />
          <div className="bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full inline-block w-fit mb-3">
            {project.category}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl" style={{ fontFamily: 'Montserrat' }}>
            {project.title}
          </h1>
          <div className="flex items-center gap-4 text-slate-300 mt-3">
            <span className="flex items-center gap-1.5"><MapPin size={16} /> {project.location}</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <div className="bg-slate-50 rounded-xl p-5">
              <div className="text-sm text-slate-500">Location</div>
              <div className="font-bold text-slate-900 mt-1">{project.location}</div>
            </div>
            <div className="bg-slate-50 rounded-xl p-5">
              <div className="text-sm text-slate-500">Category</div>
              <div className="font-bold text-slate-900 mt-1">{project.category}</div>
            </div>
            <div className="bg-slate-50 rounded-xl p-5">
              <div className="text-sm text-slate-500">Authorities</div>
              <div className="font-bold text-slate-900 mt-1">{project.authorities.join(", ")}</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Project Scope</h2>
          <p className="text-slate-600 text-lg leading-relaxed">{project.scope}</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Authority Approvals</h2>
          <div className="flex flex-wrap gap-2">
            {project.authorities.map((a) => (
              <span key={a} className="authority-badge">{a}</span>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Results</h2>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <CheckCircle size={24} className="text-green-500 mb-2" />
            <p className="text-slate-700 text-lg">{project.results}</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {project.tags.map((t) => (
              <span key={t} className="bg-amber-100 text-amber-700 text-sm px-3 py-1 rounded-full">
                #{t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related projects */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/projects/${p.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm card-hover border border-slate-100"
              >
                <div className="relative overflow-hidden h-40">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors text-sm">{p.title}</h3>
                  <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                    <MapPin size={12} /> {p.location}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
