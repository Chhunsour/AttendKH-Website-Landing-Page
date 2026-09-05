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

  const title = `Chhunsour (Chhunsour Seng) — Product Builder & Author | AttendKH`;
  const description =
    "Official profile of Chhunsour (Chhunsour Seng) — Product Builder, web engineer, and author at AttendKH Cambodia. Explore operational guides, software engineering articles, and background by Chhunsour Seng.";
  const url = absoluteUrl(`/profile/${slug}`);
  const ogImage = absoluteUrl(chhunsourProfile.avatar);

  return {
    title,
    description,
    keywords: [
      "Chhunsour",
      "Chhunsour Seng",
      "Seng Chhunsour",
      "ឈុនសួរ",
      "សេង ឈុនសួរ",
      "Chhunsour AttendKH",
      "Chhunsour Attend",
      "Chhunsour profile",
      "Chhunsour author",
      "Chhunsour blog",
      "Chhunsour developer",
      "Chhunsour engineer",
      "Chhunsour portfolio",
      "Chhunsour Cambodia",
      "Chhunsour Phnom Penh",
      "Product Builder Chhunsour",
      "AttendKH Chhunsour",
      "AttendKH Chhunsour Seng",
      "AttendKH builder",
      "AttendKH author",
    ],
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
      username: "chhunsour",
      images: [
        {
          url: ogImage,
          width: 800,
          height: 800,
          alt: `Chhunsour (Chhunsour Seng) — ${chhunsourProfile.role.en} at AttendKH`,
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
        name: `Chhunsour (Chhunsour Seng) Profile — AttendKH`,
        description: `Official profile and publication library of Chhunsour (Chhunsour Seng) at AttendKH.`,
        mainEntity: {
          "@type": "Person",
          "@id": absoluteUrl(`/profile/${slug}#person`),
          name: "Chhunsour Seng",
          alternateName: ["Chhunsour", "Seng Chhunsour", "ឈុនសួរ", "សេង ឈុនសួរ", "Chhunsour AttendKH"],
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
          knowsAbout: [
            "Chhunsour",
            "Chhunsour Seng",
            "Product Development",
            "Blog Writing",
            "Web Development",
            "SEO Strategy",
            "Cambodian Labor Law Compliance",
            "Attendance Tracking Systems",
            ...chhunsourProfile.tags.en,
          ],
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
