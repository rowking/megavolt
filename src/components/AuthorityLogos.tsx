import { AUTHORITY_LOGOS } from "../data/siteData";

export default function AuthorityLogos({ dark = false }: { dark?: boolean }) {
  return (
    <section className={dark ? "py-14 bg-slate-900" : "py-14 bg-white border-t border-slate-100"}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-2 ${dark ? "text-amber-400" : "text-amber-600"}`}>
            Registered &amp; Approved
          </p>
          <h3 className={`text-xl md:text-2xl font-bold ${dark ? "text-white" : "text-slate-900"}`} style={{ fontFamily: 'Montserrat' }}>
            Authorised by Dubai's Leading Regulatory Bodies
          </h3>
          <p className={`text-sm mt-2 ${dark ? "text-slate-400" : "text-slate-500"}`}>
            We are officially registered, approved, and listed with every major UAE authority.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 md:gap-6 items-center justify-items-center">
          {AUTHORITY_LOGOS.map((auth) => (
            <div key={auth.short} className="flex flex-col items-center gap-2 group w-full max-w-[100px]">
              <div className={`rounded-2xl p-3 w-full aspect-square flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl shadow-sm border ${dark ? "bg-white/10 border-white/10 group-hover:bg-white/20" : "bg-white border-slate-100 group-hover:border-amber-200"}`}>
                <img
                  src={auth.logo}
                  alt={auth.name}
                  title={auth.name}
                  className="max-w-full max-h-full object-contain"
                  style={{ maxHeight: '52px' }}
                />
              </div>
              <span className={`text-xs font-semibold text-center leading-tight ${dark ? "text-slate-400 group-hover:text-amber-400" : "text-slate-500 group-hover:text-amber-600"} transition-colors`}>
                {auth.short}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
