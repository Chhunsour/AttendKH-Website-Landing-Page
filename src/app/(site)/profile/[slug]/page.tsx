import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { absoluteUrl } from "@/lib/site";
import { getBlogPosts } from "@/lib/site-content";
import { chhunsourProfile } from "@/lib/profile-data";
import { ProfileView } from "./profile-view";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "chhunsour-seng" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (slug !== chhunsourProfile.slug) {
    return {
      title: "Profile Not Found — AttendKH",
      robots: { index: false, follow: false },
    };
  }

  const title = `${chhunsourProfile.name} — ${chhunsourProfile.role.en} | AttendKH`;
  const description =
    "Professional background, product engineering journey, and technical writing portfolio of Chhunsour Seng — Product Builder at AttendKH.";
  const url = absoluteUrl(`/profile/${slug}`);
  const ogImage = absoluteUrl(chhunsourProfile.avatar);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "profile",
      firstName: "Chhunsour",
      lastName: "Seng",
      images: [
        {
          url: ogImage,
          width: 800,
          height: 800,
          alt: `${chhunsourProfile.name} — ${chhunsourProfile.role.en}`,
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function ProfilePage({ params }: PageProps) {
  const { slug } = await params;

  if (slug !== chhunsourProfile.slug) {
    notFound();
  }

  // Fetch all published articles authored by Chhunsour Seng
  const { posts } = await getBlogPosts();
  const authorPosts = posts.filter(
    (post) =>
      post.author_name.toLowerCase() === chhunsourProfile.name.toLowerCase()
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": absoluteUrl(`/profile/${slug}`),
        url: absoluteUrl(`/profile/${slug}`),
        name: `${chhunsourProfile.name} Profile`,
        mainEntity: {
          "@type": "Person",
          "@id": absoluteUrl(`/profile/${slug}#person`),
          name: chhunsourProfile.name,
          givenName: "Chhunsour",
          familyName: "Seng",
          jobTitle: chhunsourProfile.role.en,
          description: chhunsourProfile.heroBio.en,
          image: absoluteUrl(chhunsourProfile.avatar),
          url: absoluteUrl(`/profile/${slug}`),
          worksFor: {
            "@type": "Organization",
            name: "AttendKH Co., Ltd.",
            url: absoluteUrl("/"),
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Phnom Penh",
            addressCountry: "KH",
          },
          knowsAbout: chhunsourProfile.tags.en,
          sameAs: [chhunsourProfile.telegramUrl],
        },
      },
      {
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
            name: chhunsourProfile.name,
            item: absoluteUrl(`/profile/${slug}`),
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ProfileView profile={chhunsourProfile} articles={authorPosts} />
    </>
  );
}
