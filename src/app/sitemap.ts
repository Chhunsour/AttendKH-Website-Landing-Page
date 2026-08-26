import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/db";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://attendkh.com";

  // Core Static Routes
  const staticRoutes = [
    "",
    "/attendance",
    "/payroll",
    "/multi-branch",
    "/pricing",
    "/customers",
    "/about",
    "/contact",
    "/faq",
    "/support",
    "/blog",
    "/trust",
    "/privacy-policy",
    "/terms",
    "/cookies",
    "/solutions/restaurants-cafes",
    "/solutions/retail",
    "/solutions/hospitality",
    "/solutions/construction-logistics",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" || route === "/blog" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/solutions") || route === "/pricing" ? 0.9 : 0.7,
  }));

  // Dynamic Blog Articles
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const { posts } = await getBlogPosts({ status: "published", limit: 100 });
    blogRoutes = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.published_at || post.created_at),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  } catch (e) {
    console.error("Error fetching blog posts for sitemap:", e);
  }

  return [...staticRoutes, ...blogRoutes];
}
