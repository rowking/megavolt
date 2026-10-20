// Writes one static HTML file per route (with its own title, description,
// canonical and content), plus 404.html and sitemap.xml.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const server = await import(pathToFileURL(path.join(root, "dist-server", "entry-server.js")).href);
const { render, getSeo, allRoutes, canonical, OG_IMAGE } = server;

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function page(url) {
  const seo = getSeo(url);
  const can = canonical(url);
  let html = template;
  const swap = (re, value) => {
    if (!re.test(html)) throw new Error(`Head tag not found for ${url}: ${re}`);
    html = html.replace(re, value);
  };
  swap(/<title>[\s\S]*?<\/title>/, `<title>${esc(seo.title)}</title>`);
  swap(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${esc(seo.description)}" />`);
  swap(/<meta name="robots" content="[^"]*" \/>/, `<meta name="robots" content="${seo.robots || "index, follow"}" />`);
  swap(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${can}" />`);
  swap(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${esc(seo.title)}" />`);
  swap(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${esc(seo.description)}" />`);
  swap(/<meta property="og:type" content="[^"]*" \/>/, `<meta property="og:type" content="${seo.type || "website"}" />`);
  swap(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${can}" />`);
  swap(/<meta property="og:image" content="[^"]*" \/>/, `<meta property="og:image" content="${OG_IMAGE}" />`);
  swap(/<div id="root"><\/div>/, `<div id="root">${render(url)}</div>`);
  return html;
}

const routes = allRoutes();
for (const url of routes) {
  const file = url === "/" ? path.join(dist, "index.html") : path.join(dist, `${url.slice(1)}.html`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page(url));
}
fs.writeFileSync(
  path.join(dist, "404.html"),
  page("/404").replace(/\s*<link rel="canonical" href="[^"]*" \/>/, "").replace(/\s*<meta property="og:url" content="[^"]*" \/>/, ""),
);

const today = new Date().toISOString().slice(0, 10);
const urls = routes
  .filter((u) => getSeo(u).indexable)
  .map((u) => `  <url><loc>${canonical(u)}</loc><lastmod>${getSeo(u).lastmod || today}</lastmod></url>`);
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
);
fs.rmSync(path.join(root, "dist-server"), { recursive: true, force: true });
console.log(`Prerendered ${routes.length} pages + 404; sitemap has ${urls.length} URLs.`);
