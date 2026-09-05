import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts, incrementBlogPostViews, blogPosts } from "@/lib/site-content";
import { BlogPostClient } from "./blog-post-client";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found — AttendKH", robots: { index: false, follow: false } };
  }

  const title = post.seo_title || post.title;
  const pageTitle = title.endsWith("AttendKH") ? title : `${title} — AttendKH`;
  const description = post.seo_description || post.excerpt;
  const url = absoluteUrl(`/blog/${post.slug}`);
  const ogImage = absoluteUrl(post.og_image || post.cover_image || "/opengraph-image");

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: post.published_at || post.created_at,
      authors: [post.author_name],
      images: [
        {
          url: ogImage,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post || post.status !== "published") {
    notFound();
  }

  // Increment view counter (non-blocking)
  incrementBlogPostViews(post.id).catch(() => {});

  // Fetch related posts in the same category
  const { posts: categoryPosts } = await getBlogPosts({
    category: post.category,
    status: "published",
    limit: 4,
  });

  const relatedPosts = categoryPosts.filter((p) => p.id !== post.id).slice(0, 3);

  // JSON-LD structured data for Article schema SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [absoluteUrl(post.cover_image || "/opengraph-image")],
    datePublished: post.published_at || post.created_at,
    dateModified: post.updated_at || post.published_at || post.created_at,
    author: [
      {
        "@type": "Person",
        name: post.author_name,
        jobTitle: post.author_role,
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "AttendKH",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/attendkh_logo.png"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
    keywords: post.tags.join(", "),
    inLanguage: ["en", "km", "zh"],
    articleSection: post.category,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".blog-excerpt", ".aeo-key-takeaways"],
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
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: absoluteUrl("/blog"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.category,
        item: absoluteUrl(`/blog?category=${encodeURIComponent(post.category)}`),
      },
      {
        "@type": "ListItem",
        position: 4,
        name: post.title,
        item: absoluteUrl(`/blog/${post.slug}`),
      },
    ],
  };

  const faqSchema =
    post.faqs && post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
          }}
        />
      )}

      <BlogPostClient post={post} relatedPosts={relatedPosts} />
    </>
  );
}
