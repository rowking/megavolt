import type { LucideIcon } from "lucide-react";

/*
 * Original, in-house artwork for Megavolt.
 * Everything here is drawn in code (SVG), so there are no third-party
 * photos, no licences to track and almost nothing to download.
 * Output is deterministic (seeded), so prerendered HTML and the browser match.
 */

function rng(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h += 0x6d2b79f5;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const TONES = [
  ["#0f172a", "#1e3a5f"],
  ["#111827", "#3b2a12"],
  ["#0f172a", "#134e4a"],
  ["#1e1b4b", "#0f172a"],
  ["#0c1a2b", "#28324a"],
  ["#1c1917", "#422006"],
];

function toneFor(seed: string) {
  const r = rng(seed);
  return TONES[Math.floor(r() * TONES.length)];
}

/** Circuit-board style traces, snapped to a grid. */
function traces(seed: string, w: number, h: number, count: number) {
  const r = rng(seed + ":t");
  const step = 40;
  const paths: { d: string; nodes: [number, number][] }[] = [];
  for (let i = 0; i < count; i++) {
    let x = Math.round((r() * w) / step) * step;
    let y = Math.round((r() * h) / step) * step;
    let d = `M${x} ${y}`;
    const nodes: [number, number][] = [[x, y]];
    const segs = 3 + Math.floor(r() * 4);
    for (let s = 0; s < segs; s++) {
      const len = (1 + Math.floor(r() * 4)) * step;
      const dir = Math.floor(r() * 4);
      if (dir === 0) x += len;
      else if (dir === 1) x -= len;
      else if (dir === 2) y += len;
      else y -= len;
      d += ` L${x} ${y}`;
    }
    nodes.push([x, y]);
    paths.push({ d, nodes });
  }
  return paths;
}

function skyline(seed: string, w: number, h: number) {
  const r = rng(seed + ":s");
  const buildings: { x: number; y: number; bw: number; bh: number }[] = [];
  let x = 0;
  while (x < w) {
    const bw = 40 + Math.floor(r() * 70);
    const bh = 60 + Math.floor(r() * (h * 0.38));
    buildings.push({ x, y: h - bh, bw, bh });
    x += bw + 6;
  }
  return buildings;
}

/** Full-bleed background for page heroes. */
export function HeroBackdrop({ variant = "home", skylineOn = true }: { variant?: string; skylineOn?: boolean }) {
  const W = 1600;
  const H = 800;
  const [c1, c2] = toneFor(variant);
  const id = `hb-${variant.replace(/[^a-z0-9]/gi, "")}`;
  const t = traces(variant, W, H, 14);
  const b = skylineOn ? skyline(variant, W, H) : [];
  const r = rng(variant + ":w");
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c1} />
          <stop offset="1" stopColor={c2} />
        </linearGradient>
        <pattern id={`${id}-grid`} width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#94a3b8" strokeOpacity="0.08" strokeWidth="1" />
        </pattern>
        <radialGradient id={`${id}-glow`} cx="0.8" cy="0.2" r="0.6">
          <stop offset="0" stopColor="#f59e0b" stopOpacity="0.28" />
          <stop offset="1" stopColor="#f59e0b" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width={W} height={H} fill={`url(#${id}-bg)`} />
      <rect width={W} height={H} fill={`url(#${id}-grid)`} />
      <rect width={W} height={H} fill={`url(#${id}-glow)`} />
      <g fill="none" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.35" strokeLinejoin="round">
        {t.map((p, i) => (
          <path key={i} d={p.d} />
        ))}
      </g>
      <g fill="#fbbf24">
        {t.flatMap((p, i) =>
          p.nodes.map(([x, y], j) => <circle key={`${i}-${j}`} cx={x} cy={y} r="4" fillOpacity="0.7" />),
        )}
      </g>
      {skylineOn && (
        <g>
          {b.map((bd, i) => (
            <g key={i}>
              <rect x={bd.x} y={bd.y} width={bd.bw} height={bd.bh} fill="#020617" fillOpacity="0.55" />
              {Array.from({ length: Math.floor(bd.bh / 28) }).map((_, row) =>
                Array.from({ length: Math.floor(bd.bw / 18) }).map((__, col) =>
                  r() > 0.72 ? (
                    <rect
                      key={`${row}-${col}`}
                      x={bd.x + 6 + col * 18}
                      y={bd.y + 10 + row * 28}
                      width="7"
                      height="10"
                      fill="#fcd34d"
                      fillOpacity="0.35"
                    />
                  ) : null,
                ),
              )}
            </g>
          ))}
        </g>
      )}
    </svg>
  );
}

/** Card / thumbnail artwork with the topic's icon. */
export function CardArt({
  seed,
  icon: Icon,
  label,
  className = "",
}: {
  seed: string;
  icon?: LucideIcon;
  label?: string;
  className?: string;
}) {
  const W = 800;
  const H = 600;
  const [c1, c2] = toneFor(seed);
  const id = `ca-${seed.replace(/[^a-z0-9]/gi, "")}`;
  const t = traces(seed, W, H, 8);
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`} role={label ? "img" : undefined} aria-label={label}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={c2} />
            <stop offset="1" stopColor={c1} />
          </linearGradient>
          <pattern id={`${id}-grid`} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" fill="none" stroke="#cbd5e1" strokeOpacity="0.09" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width={W} height={H} fill={`url(#${id}-bg)`} />
        <rect width={W} height={H} fill={`url(#${id}-grid)`} />
        <g fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeOpacity="0.4" strokeLinejoin="round">
          {t.map((p, i) => (
            <path key={i} d={p.d} />
          ))}
        </g>
        <g fill="#fbbf24" fillOpacity="0.75">
          {t.flatMap((p, i) => p.nodes.map(([x, y], j) => <circle key={`${i}-${j}`} cx={x} cy={y} r="5" />))}
        </g>
      </svg>
      {Icon && (
        <Icon
          aria-hidden="true"
          strokeWidth={1}
          className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[42%] h-[60%] text-amber-300/30 transition-transform duration-500 group-hover:scale-105"
        />
      )}
    </div>
  );
}

/** Illustration of a distribution board and meter, used beside "Who we are". */
export function PanelArt({ className = "" }: { className?: string }) {
  const breakers = Array.from({ length: 3 }).map((_, row) =>
    Array.from({ length: 8 }).map((__, col) => ({ row, col })),
  );
  return (
    <svg
      viewBox="0 0 640 480"
      className={className}
      role="img"
      aria-label="Illustration of an electrical distribution board with a sub-meter"
    >
      <defs>
        <linearGradient id="pa-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0f172a" />
          <stop offset="1" stopColor="#1e3a5f" />
        </linearGradient>
        <pattern id="pa-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="#94a3b8" strokeOpacity="0.1" />
        </pattern>
      </defs>
      <rect width="640" height="480" rx="24" fill="url(#pa-bg)" />
      <rect width="640" height="480" rx="24" fill="url(#pa-grid)" />

      {/* Cables */}
      <g fill="none" strokeWidth="8" strokeLinecap="round">
        <path d="M150 40 V90" stroke="#dc2626" />
        <path d="M180 40 V90" stroke="#eab308" />
        <path d="M210 40 V90" stroke="#2563eb" />
        <path d="M240 40 V90" stroke="#111827" />
        <path d="M400 430 V470" stroke="#16a34a" />
      </g>

      {/* Board */}
      <rect x="90" y="90" width="300" height="340" rx="14" fill="#e2e8f0" />
      <rect x="104" y="104" width="272" height="312" rx="8" fill="#cbd5e1" />
      <rect x="120" y="118" width="240" height="36" rx="6" fill="#334155" />
      <text x="240" y="142" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700" fill="#fbbf24">
        SMDB-01
      </text>
      {breakers.map((row, ri) =>
        row.map(({ col }) => (
          <g key={`${ri}-${col}`}>
            <rect x={124 + col * 29} y={174 + ri * 78} width="24" height="58" rx="3" fill="#f8fafc" stroke="#94a3b8" />
            <rect x={130 + col * 29} y={(col + ri) % 3 === 0 ? 182 + ri * 78 : 200 + ri * 78} width="12" height="16" rx="2" fill={(col + ri) % 5 === 0 ? "#f59e0b" : "#475569"} />
          </g>
        )),
      )}

      {/* Meter */}
      <rect x="430" y="140" width="140" height="190" rx="14" fill="#f8fafc" />
      <rect x="448" y="162" width="104" height="44" rx="6" fill="#0f172a" />
      <text x="500" y="192" textAnchor="middle" fontFamily="monospace" fontSize="20" fill="#4ade80">
        0482.7
      </text>
      <text x="500" y="230" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fill="#475569">
        kWh
      </text>
      <circle cx="500" cy="280" r="22" fill="none" stroke="#f59e0b" strokeWidth="5" />
      <path d="M496 266 l-8 16 h10 l-4 14 l14 -20 h-10 l6 -10z" fill="#f59e0b" />
      <path d="M390 260 H430" stroke="#475569" strokeWidth="6" />

      {/* Bolt badge */}
      <circle cx="560" cy="400" r="40" fill="#f59e0b" />
      <path d="M566 372 l-26 36 h18 l-8 26 l28 -38 h-18 l10 -24z" fill="#0f172a" />
    </svg>
  );
}
