import { Link, useParams } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "../data/siteData";
import { BLOG_CONTENT } from "../data/content";
import { blogIcon } from "../components/icons";

const fmt = (d: string) =>
  new Date(d + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
import { HeroBackdrop, CardArt } from "../components/Artwork";
import Breadcrumbs from "../components/Breadcrumbs";
import CTASection from "../components/CTASection";

export function BlogOverview() {
  return (
    <div>
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <HeroBackdrop variant="blog-1" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ label: "Blog" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
            Knowledge Hub
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Practical guides on DEWA approvals, Civil Defence, fit-out approvals and EV chargers
            in Dubai, written by our team.
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
                <CardArt seed={BLOG_POSTS[0].slug} icon={blogIcon(BLOG_POSTS[0].category)} />
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
                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-3">
                  {BLOG_POSTS[0].title}
                </h2>
                <p className="text-slate-600 leading-relaxed">{BLOG_POSTS[0].excerpt}</p>
                <span className="inline-flex items-center gap-1 text-amber-700 font-semibold text-sm mt-4 group-hover:gap-2 transition-all">
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
                  <CardArt seed={post.slug} icon={blogIcon(post.category)} />
                  <div className="absolute top-3 left-3 bg-white/90 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                    <span className="flex items-center gap-1"><Calendar size={12} /> Updated {fmt(post.updated)}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
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
        <Link to="/blog" className="text-amber-700 mt-4 inline-block">← Back to Blog</Link>
      </div>
    );
  }

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div>
      <section className="relative h-[400px] overflow-hidden">
        <HeroBackdrop variant={`blog-${post.slug}`} />
        <div className="max-w-4xl mx-auto px-4 relative z-10 h-full flex flex-col justify-end pb-12">
          <Breadcrumbs items={[{ label: "Blog", path: "/blog" }, { label: post.title }]} />
          <div className="flex items-center gap-3 text-sm text-slate-300 mb-3">
            <span className="bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-1"><Calendar size={14} /> Updated {fmt(post.updated)}</span>
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
              MV
            </div>
            <div>
              <div className="font-bold text-slate-900">Megavolt Engineering Team</div>
              <div className="text-sm text-slate-500">Megavolt Technical Services Co. LLC</div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed">{post.excerpt}</p>

            {(BLOG_CONTENT[post.slug] || []).map((sec) => (
              <div key={sec.h}>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">{sec.h}</h2>
                {sec.p?.map((para, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed mb-4">{para}</p>
                ))}
                {sec.list && (
                  <ul className="space-y-2 text-slate-600 list-disc pl-5">
                    {sec.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <p className="text-sm text-slate-500 mt-8">
              Authority requirements and fees change. Confirm the current requirements for your
              project before you plan around them, or ask us to check for you.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-8">
              <h3 className="font-bold text-slate-900 mb-2">Need Professional Help?</h3>
              <p className="text-slate-600 text-sm mb-4">
                We prepare the drawings, submit to the authorities and follow up until the approval is issued. Free consultation, response within 24 hours.
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
                  <CardArt seed={p.slug} icon={blogIcon(p.category)} />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors text-sm">{p.title}</h3>
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
