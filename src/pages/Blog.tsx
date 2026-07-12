import { Link, useParams } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "../data/siteData";
import Breadcrumbs from "../components/Breadcrumbs";
import CTASection from "../components/CTASection";

export function BlogOverview() {
  return (
    <div>
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/261663/pexels-photo-261663.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Blog"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ label: "Blog" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
            Knowledge Hub
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Expert guides on UAE authority approvals, MEP engineering, fit-out processes,
            EV charging, and solar — written by our licensed engineers.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Featured post */}
          {BLOG_POSTS[0] && (
            <Link
              to={`/blog/${BLOG_POSTS[0].slug}`}
              className="group grid md:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-sm card-hover border border-slate-100 mb-12"
            >
              <div className="relative h-64 md:h-full overflow-hidden">
                <img src={BLOG_POSTS[0].image} alt={BLOG_POSTS[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                  Featured
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                  <span className="bg-amber-100 text-amber-700 px-2.5 py-0.5 rounded-full text-xs font-medium">
                    {BLOG_POSTS[0].category}
                  </span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {BLOG_POSTS[0].readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-3">
                  {BLOG_POSTS[0].title}
                </h2>
                <p className="text-slate-600 leading-relaxed">{BLOG_POSTS[0].excerpt}</p>
                <span className="inline-flex items-center gap-1 text-amber-600 font-semibold text-sm mt-4 group-hover:gap-2 transition-all">
                  Read Article <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(1).map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm card-hover border border-slate-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-white/90 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2">{post.excerpt}</p>
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

export function BlogDetail() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Article not found</h1>
        <Link to="/blog" className="text-amber-600 mt-4 inline-block">← Back to Blog</Link>
      </div>
    );
  }

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div>
      <section className="relative h-[400px] overflow-hidden">
        <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 h-full flex flex-col justify-end pb-12">
          <Breadcrumbs items={[{ label: "Blog", path: "/blog" }, { label: post.title }]} />
          <div className="flex items-center gap-3 text-sm text-slate-300 mb-3">
            <span className="bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Montserrat' }}>
            {post.title}
          </h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-100">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
              UH
            </div>
            <div>
              <div className="font-bold text-slate-900">UAE Approval Hub Team</div>
              <div className="text-sm text-slate-500">Licensed UAE MEP Engineers</div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed">{post.excerpt}</p>

            <p className="text-slate-600 leading-relaxed mt-6">
              In this guide, we'll walk you through everything you need to know about {post.title.toLowerCase()}.
              Our team has years of hands-on experience working with Dubai's regulatory authorities,
              and we've distilled that knowledge into a clear, actionable resource.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why This Matters</h2>
            <p className="text-slate-600 leading-relaxed">
              Navigating UAE authority requirements can be complex and time-consuming. Without the
              right documentation and process, approval can take weeks or even months longer than
              necessary. Understanding the requirements upfront saves time, money, and frustration.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Key Requirements</h2>
            <ul className="space-y-2 text-slate-600">
              <li>Valid UAE trade license and company documents</li>
              <li>Property title deed or lease agreement</li>
              <li>MEP drawings prepared by a UAE-registered engineering firm</li>
              <li>Authority-specific application forms</li>
              <li>Site inspection readiness</li>
              <li>Compliance with UAE building codes and standards</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Process</h2>
            <p className="text-slate-600 leading-relaxed">
              The typical approval process involves several stages: document preparation, submission,
              authority review, site inspection, and final approval. Each authority has its own
              timeline and specific requirements. Working with an experienced team ensures first-submission
              accuracy and minimizes delays.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Common Pitfalls to Avoid</h2>
            <p className="text-slate-600 leading-relaxed">
              The most common reasons for approval delays are incomplete documentation, drawings that
              don't meet authority standards, missing NOCs from other authorities, and failing site
              inspections. Our team has a first-submission approval track record because we address
              these issues before submission.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">How We Can Help</h2>
            <p className="text-slate-600 leading-relaxed">
              UAE Approval Hub handles the entire process end-to-end — from initial assessment and
              engineering design to authority submission, inspection coordination, and final approval.
              Contact us for a free consultation and we'll assess your specific requirements.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-8">
              <h3 className="font-bold text-slate-900 mb-2">Need Professional Help?</h3>
              <p className="text-slate-600 text-sm mb-4">
                Our licensed UAE engineers can handle your entire approval process. Free consultation, response within 24 hours.
              </p>
              <Link to="/contact" className="btn-primary text-sm">
                Get a Free Quote <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related posts */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/blog/${p.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm card-hover border border-slate-100"
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors text-sm">{p.title}</h3>
                  <div className="flex items-center gap-1 text-xs text-slate-500 mt-2">
                    <Clock size={12} /> {p.readTime}
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
