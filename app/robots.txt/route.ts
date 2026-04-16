export const dynamic = 'force-static'

export function GET() {
  const content = `User-agent: *
Allow: /
Sitemap: https://www.monasmona.com/sitemap.xml`

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
    },
  })
}
