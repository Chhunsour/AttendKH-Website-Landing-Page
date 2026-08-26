import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Clock, ArrowRight, Eye, Calendar, Tag } from "lucide-react";
import { getBlogPosts } from "@/lib/db";
import { BlogIndexClient } from "./blog-index-client";

export const metadata: Metadata = {
  title: "Blog & Insights — Smart Attendance & Payroll for Cambodia",
  description:
    "Guides, labor law standards, and retail operations best practices for Cambodian businesses, from one branch to fifty.",
  openGraph: {
    title: "Blog & Insights — AttendKH",
    description:
      "Guides, labor law standards, and retail operations best practices for Cambodian businesses.",
    url: "https://attendkh.com/blog",
    type: "website",
  },
};

export default async function BlogPage() {
  const { posts } = await getBlogPosts({ status: "published", limit: 50 });

  return <BlogIndexClient initialPosts={posts} />;
}
