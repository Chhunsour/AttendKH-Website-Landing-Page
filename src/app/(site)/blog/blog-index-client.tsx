"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, Clock, ArrowRight, Eye, Calendar, Search } from "lucide-react";
import { PageHero, Section, CtaBand } from "@/components/site/ui";
import type { BlogPost } from "@/lib/site-content";

export function BlogIndexClient({ initialPosts }: { initialPosts: BlogPost[] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", "Attendance", "Payroll", "Operations", "Labor Law"];

  const filteredPosts = initialPosts.filter((p) => {
    const matchesCat = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      p.tags?.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <>
      <PageHero
        title="Insights, Guides & Labor Law"
        sub="Best practices for modern Cambodian organizations scaling attendance and payroll."
      />

      <Section tone="white">
        {/* Search & Category Filter Bar */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-10">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap rounded-lg px-3.5 py-2 text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-brand text-white shadow-xs"
                    : "bg-mist text-slate-600 hover:bg-slate-200 hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative max-w-sm w-full">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <label htmlFor="blog-search" className="sr-only">
              Search blog guides
            </label>
            <input
              id="blog-search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search guides, labor law, GPS..."
              className="w-full rounded-xl border border-line bg-mist/40 py-2.5 pl-10 pr-4 text-xs text-ink placeholder:text-slate-400 focus:border-brand focus:bg-white focus:outline-none"
            />
          </div>
        </div>

        {/* Featured Post Card */}
        {featuredPost && (
          <article className="group mb-12 overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xs transition-all hover:border-brand/40 hover:shadow-lg">
            <Link href={`/blog/${featuredPost.slug}`} className="grid gap-6 md:grid-cols-12 p-6 sm:p-8 items-center">
              <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand uppercase tracking-wider border border-blue-200/60">
                      Featured • {featuredPost.category}
                    </span>
                    <span className="text-xs text-slate-300">•</span>
                    <span className="text-xs font-medium text-slate-500">
                      {featuredPost.published_at
                        ? new Date(featuredPost.published_at).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })
                        : "Recent"}
                    </span>
                  </div>

                  <h2 className="font-display mt-3 text-2xl font-bold text-slate-900 sm:text-3xl group-hover:text-brand transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs">
                  <div className="flex items-center gap-2.5 font-medium text-slate-700">
                    {featuredPost.author_avatar ? (
                      <img
                        src={featuredPost.author_avatar}
                        alt={featuredPost.author_name}
                        className="h-8 w-8 rounded-full object-cover object-top border border-slate-200 shadow-2xs"
                      />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-brand font-display text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                        {featuredPost.author_name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <span className="font-semibold text-slate-900 block leading-tight">{featuredPost.author_name}</span>
                      <span className="text-[11px] text-slate-400">{featuredPost.author_role || "Product Builder"}</span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-xl bg-brand-soft px-3 py-1.5 font-semibold text-brand transition-transform group-hover:translate-x-0.5">
                    <span>Read guide</span>
                    <ArrowRight size={13} />
                  </span>
                </div>
              </div>

              {/* Cover Image Frame */}
              <div className="md:col-span-5 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm aspect-video md:aspect-[4/3] relative">
                {featuredPost.cover_image ? (
                  <img
                    src={featuredPost.cover_image}
                    alt={featuredPost.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-brand/10 to-indigo-50 flex flex-col justify-center items-center text-center p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white shadow-md mb-2">
                      <FileText size={24} />
                    </div>
                    <p className="font-display text-xs font-bold text-slate-900">
                      AttendKH Operations Guide
                    </p>
                  </div>
                )}
              </div>
            </Link>
          </article>
        )}

        {/* Grid of Remaining Posts */}
        {gridPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {gridPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xs transition-all hover:border-brand/40 hover:shadow-lg"
              >
                <div>
                  {/* Card Cover Image */}
                  <Link href={`/blog/${post.slug}`} className="block overflow-hidden aspect-video bg-slate-100 relative border-b border-slate-100">
                    {post.cover_image ? (
                      <img
                        src={post.cover_image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-slate-50 to-blue-50/40 flex items-center justify-center">
                        <FileText size={28} className="text-slate-300" />
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-white/95 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-brand shadow-xs backdrop-blur-xs border border-white/60">
                        {post.category}
                      </span>
                    </div>
                  </Link>

                  <div className="p-5 sm:p-6 pb-2">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                      <Calendar size={12} className="text-slate-400" />
                      <span>
                        {post.published_at
                          ? new Date(post.published_at).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })
                          : "Recent"}
                      </span>
                    </div>

                    <h3 className="font-display text-[16.5px] font-bold text-slate-900 group-hover:text-brand transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-600">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-3 mt-2 flex items-center justify-between border-t border-slate-100 text-xs">
                  <div className="flex items-center gap-2 font-medium text-slate-600">
                    {post.author_avatar ? (
                      <img
                        src={post.author_avatar}
                        alt={post.author_name}
                        className="h-6 w-6 rounded-full object-cover object-top border border-slate-200"
                      />
                    ) : (
                      <div className="h-6 w-6 rounded-full bg-brand-soft text-brand flex items-center justify-center font-bold text-[9px]">
                        {post.author_name.charAt(0)}
                      </div>
                    )}
                    <span className="truncate max-w-[120px] font-semibold text-slate-800">{post.author_name}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-brand hover:underline"
                  >
                    <span>Read guide</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : !featuredPost ? (
          <div className="rounded-2xl border border-line bg-paper py-16 text-center">
            <FileText size={36} className="mx-auto text-slate-300 mb-2" />
            <h3 className="font-display font-bold text-ink">No matching articles found</h3>
            <p className="text-xs text-slate-500 mt-1">Try adjusting your category or search query.</p>
          </div>
        ) : null}

        {/* Cambodian Operations & HR Toolkit Cards */}
        <div className="mt-16 rounded-3xl border border-line bg-gradient-to-br from-mist via-white to-white p-6 sm:p-10">
          <div className="max-w-2xl">
            <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand uppercase tracking-wider">
              Free Operational Resources
            </span>
            <h3 className="font-display mt-3 text-2xl font-bold text-ink sm:text-3xl">
              Cambodian HR & Operations Toolkits
            </h3>
            <p className="mt-2 text-sm text-body">
              Practical calculators, compliance summaries, and operational checklists curated for Cambodian business leaders.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/payroll"
              className="group rounded-2xl border border-line bg-paper p-5 shadow-xs hover:border-brand hover:shadow-md transition-all"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white text-xs font-bold mb-3 shadow-xs">
                ៛/$
              </span>
              <h4 className="font-display font-bold text-ink text-sm group-hover:text-brand transition-colors">
                Interactive Cambodia Payroll Simulator
              </h4>
              <p className="mt-1.5 text-xs text-body">
                Calculate base hourly rates, late deductions, and overtime bonuses live in USD and KHR.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand">
                <span>Open Calculator</span>
                <ArrowRight size={12} />
              </span>
            </Link>

            <Link
              href="/attendance"
              className="group rounded-2xl border border-line bg-paper p-5 shadow-xs hover:border-brand hover:shadow-md transition-all"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white text-xs font-bold mb-3 shadow-xs">
                GPS
              </span>
              <h4 className="font-display font-bold text-ink text-sm group-hover:text-brand transition-colors">
                Anti-Buddy Punching Field Guide
              </h4>
              <p className="mt-1.5 text-xs text-body">
                How geofencing, selfie records, and location checks can reduce attendance disputes in retail and F&B.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand">
                <span>View Guide</span>
                <ArrowRight size={12} />
              </span>
            </Link>

            <Link
              href="/multi-branch"
              className="group rounded-2xl border border-line bg-paper p-5 shadow-xs hover:border-brand hover:shadow-md transition-all"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-600 text-white text-xs font-bold mb-3 shadow-xs">
                HQ
              </span>
              <h4 className="font-display font-bold text-ink text-sm group-hover:text-brand transition-colors">
                Multi-Branch Roster Framework
              </h4>
              <p className="mt-1.5 text-xs text-body">
                Setup guide for 4-tier access levels: Owner, HR Admin, Branch Manager, and frontline Employee.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand">
                <span>Explore Framework</span>
                <ArrowRight size={12} />
              </span>
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Ready to automate attendance & payroll?"
        sub="Get started with AttendKH for your entire team at just $1 per employee."
        cta="Book a Demo"
        href="/contact"
      />
    </>
  );
}
