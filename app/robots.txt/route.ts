export const dynamic = 'force-static'

export function GET() {
  const content = `User-agent: *\nAllow: /\nSitemap: https://www.monasmona.com/sitemap.xml`

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}