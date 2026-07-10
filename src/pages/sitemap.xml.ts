import { getAbsoluteUrl } from "../config/site-url";

const pages = [
  "/",
  "/sobre/",
  "/servicios/",
  "/contacto/",
  "/legal/aviso-legal/",
  "/legal/privacidad/",
  "/legal/cookies/",
];

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function GET() {
  const urls = pages
    .map(
      (page) => `  <url>
    <loc>${escapeXml(getAbsoluteUrl(page))}</loc>
  </url>`,
    )
    .join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
