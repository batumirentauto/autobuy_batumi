import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://autobuybatumi-production.up.railway.app'

  return [
    {
      url: serverUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ]
}
