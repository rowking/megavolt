import { useEffect, useRef, useState } from "react";

/**
 * Counts a number up when it scrolls into view. Non-numeric values (e.g. "24/7", "DEWA")
 * render as-is. The final value is in the prerendered HTML, so search engines and
 * visitors without JavaScript always see the real figure.
 */
export default function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const isYear = match ? target > 1900 && target < 2100 : false;
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    if (!match || isYear) return;
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setShown(`${Math.round(target * eased)}${suffix}`);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        setShown(`0${suffix}`);
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {shown}
    </span>
  );
}
