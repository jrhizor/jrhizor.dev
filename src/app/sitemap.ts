import { MetadataRoute } from "next";
import { getAllPosts } from "~/lib/api";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticPages = ["", "projects", "posts"];

  const staticPageEntries: MetadataRoute.Sitemap = staticPages.map((p) => {
    return {
      url: `https://www.jrhizor.dev/${p}`,
      changeFrequency: "monthly",
      priority: p === "" ? 1.0 : 0.8,
    };
  });

  const postUrls: MetadataRoute.Sitemap = posts.map((p) => {
    return {
      url: `https://www.jrhizor.dev/posts/${p.slug}`,
      changeFrequency: "monthly",
      lastModified: new Date(p.date),
      priority: 0.6,
    };
  });

  return [...staticPageEntries, ...postUrls];
}
