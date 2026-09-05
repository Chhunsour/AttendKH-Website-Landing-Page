import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/site-content";
import { SITE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
    "/downloads",
    "/solutions/restaurants-cafes",
    "/solutions/retail",
    "/solutions/hospitality",
    "/solutions/construction-logistics",
    "/profile/chhunsour-seng",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: (route === "" || route === "/blog" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/solutions") || route === "/pricing" ? 0.9 : 0.7,
  }));

  // Dynamic Blog Articles
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const { posts } = await getBlogPosts({ status: "published", limit: 100 });
    blogRoutes = posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.published_at || post.created_at),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  } catch (e) {
    console.error("Error fetching blog posts for sitemap:", e);
  }

  return [...staticRoutes, ...blogRoutes];
}
