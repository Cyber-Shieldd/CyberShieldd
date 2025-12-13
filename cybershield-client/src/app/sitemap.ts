import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cybershieldd.online";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2025-12-13T14:43:35+00:00"),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date("2025-12-13T14:43:35+00:00"),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2025-12-13T14:43:35+00:00"),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2025-12-13T14:43:35+00:00"),
      priority: 0.8,
    },
  ];
}
