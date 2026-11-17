import { track } from "@vercel/analytics";

/**
 * Counts enquiry actions (phone, WhatsApp, email) with Vercel Web Analytics custom events.
 * Cookieless and anonymous, so the Privacy and Cookie policies stay accurate.
 * One delegated listener covers every contact link on every page, including ones added later.
 */
function kindOf(href: string): "call_click" | "whatsapp_click" | "email_click" | null {
  const h = href.toLowerCase();
  if (h.startsWith("tel:")) return "call_click";
  if (h.startsWith("mailto:")) return "email_click";
  if (h.includes("wa.me/") || h.includes("api.whatsapp.com") || h.includes("whatsapp://")) return "whatsapp_click";
  return null;
}

export function trackLead(event: string, place: string) {
  try {
    track(event, { page: window.location.pathname, place });
  } catch {
    /* analytics must never break the page */
  }
}

export function initLeadTracking() {
  if (typeof document === "undefined") return;
  document.addEventListener(
    "click",
    (e) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const event = kindOf(a.getAttribute("href") || "");
      if (!event) return;
      const place = a.closest("header") ? "header" : a.closest("footer") ? "footer" : "page";
      trackLead(event, place);
    },
    { capture: true },
  );
}
