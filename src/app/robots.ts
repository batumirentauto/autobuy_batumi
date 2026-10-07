import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://autobuybatumi-production.up.railway.app'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api'],
      },
    ],
    sitemap: `${serverUrl}/sitemap.xml`,
  }
}
