import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/db";
import { BlogIndexClient } from "./blog-index-client";

const title = "Blog & Practical Guides for Cambodian Operations | AttendKH";
const description =
  "Practical guides on Cambodian labor law overtime (1.5× / 2.0×), NSSF calculations, multi-branch attendance geofencing, and retail rosters.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://attendkh.com/blog" },
  openGraph: {
    title,
    description,
    url: "https://attendkh.com/blog",
    siteName: "AttendKH",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://attendkh.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://attendkh.com/blog",
    },
  ],
};

export default async function BlogPage() {
  const { posts } = await getBlogPosts({ status: "published", limit: 50 });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <BlogIndexClient initialPosts={posts} />
    </>
  );
}
