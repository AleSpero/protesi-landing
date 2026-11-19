import { appStoreHref, playStoreHref } from "@/lib/links";

/**
 * /scarica — the address the printed QR codes encode. It sends each phone to
 * its own store, so one code serves both, and the code never needs reprinting
 * when a listing moves: change the links in lib/links.ts instead.
 *
 *   iPhone, iPod, iPad (old UA) → App Store
 *   Android                     → Google Play
 *   Mac                         → a stub page: an iPad on iPadOS 13+ claims to
 *                                 be a Mac, which only the browser can unmask
 *   anything else               → the badges on the home page
 */
export function GET(request: Request) {
  const ua = request.headers.get("user-agent") ?? "";

  if (/iPhone|iPad|iPod/.test(ua)) return redirect(appStoreHref);
  if (/Android/.test(ua)) return redirect(playStoreHref);
  if (/Macintosh/.test(ua)) return macStub();
  return redirect(new URL(homeBadges, request.url));
}

/** The badges card on `/` (AudienceSection). */
const homeBadges = "/#scarica";

/* The answer depends on the User-Agent, so no cache may hand one phone's
   redirect to another. */
const noStore = { "cache-control": "no-store", vary: "user-agent" };

function redirect(to: string | URL) {
  return new Response(null, { status: 307, headers: { ...noStore, location: String(to) } });
}

/** A real Mac goes to the badges; an iPad (a "Mac" with a touchscreen) to the
 *  App Store. */
function macStub() {
  const html = `<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Scarica ProteSì</title>
<script>
location.replace(navigator.maxTouchPoints > 1 ? ${JSON.stringify(appStoreHref)} : ${JSON.stringify(homeBadges)});
</script>
</head>
<body>
<noscript><a href="${homeBadges}">Scarica ProteSì</a></noscript>
</body>
</html>`;

  return new Response(html, {
    headers: { ...noStore, "content-type": "text/html; charset=utf-8" },
  });
}
