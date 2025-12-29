import { MetadataRoute } from "next";
import { profile } from "@/src/content/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://(add-domain)";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

