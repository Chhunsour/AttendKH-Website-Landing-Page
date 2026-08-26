"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Users,
  Eye,
  MousePointerClick,
  Sparkles,
  CreditCard,
  ShieldCheck,
  TrendingUp,
  Globe,
  Smartphone,
  Calendar,
  ArrowRight,
  FileText,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { StatCard } from "@/components/admin/stat-card";
import {
  TimeSeriesChart,
  RankingBarChart,
  DonutMeter,
} from "@/components/admin/chart-widget";

export default function AdminDashboardPage() {
  const [days, setDays] = useState(14);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [chartMetric, setChartMetric] = useState<"visitors" | "page_views" | "conversions">(
    "visitors"
  );

  useEffect(() => {
    fetchStats(days);
  }, [days]);

  const fetchStats = async (rangeDays: number) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/stats?days=${rangeDays}`);
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    } catch (err) {
      console.error("Failed to load admin stats", err);
    } finally {
      setLoading(false);
    }
  };

  const getDiffPercent = (curr: number, prev: number) => {
    if (!prev || prev === 0) return curr > 0 ? "+100" : "0";
    const diff = ((curr - prev) / prev) * 100;
    return (diff > 0 ? "+" : "") + diff.toFixed(1);
  };

  return (
    <div className="space-y-8">
      {/* Top Banner & Date Filter */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-[22px] font-bold text-ink">
            Website Performance Dashboard
          </h2>
          <p className="text-[13.5px] text-slate-500">
            Privacy-conscious analytics and content telemetry for AttendKH landing page.
          </p>
        </div>

        {/* Date Filter Buttons */}
        <div className="flex items-center gap-1 rounded-xl border border-line bg-paper p-1 shadow-xs">
          {[
            { label: "24h", val: 1 },
            { label: "7d", val: 7 },
            { label: "14d", val: 14 },
            { label: "30d", val: 30 },
            { label: "90d", val: 90 },
          ].map((item) => (
            <button
              key={item.val}
              type="button"
              onClick={() => setDays(item.val)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                days === item.val
                  ? "bg-brand text-white shadow-xs"
                  : "text-slate-600 hover:bg-mist hover:text-ink"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards Grid */}
      {loading && !stats ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-32 animate-pulse rounded-xl border border-line bg-paper"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Unique Visitors"
            value={stats?.kpis?.uniqueVisitors?.toLocaleString() || "0"}
            diffPercent={getDiffPercent(
              stats?.kpis?.uniqueVisitors || 0,
              stats?.kpis?.prevUniqueVisitors || 0
            )}
            icon={Users}
            description={`In the last ${days} days`}
          />
          <StatCard
            title="Total Page Views"
            value={stats?.kpis?.pageViews?.toLocaleString() || "0"}
            diffPercent={getDiffPercent(
              stats?.kpis?.pageViews || 0,
              stats?.kpis?.prevPageViews || 0
            )}
            icon={Eye}
            description="Aggregated landing page reads"
          />
          <StatCard
            title="Signup / Trial Clicks"
            value={stats?.kpis?.signupClicks?.toLocaleString() || "0"}
            icon={MousePointerClick}
            description="Primary CTA conversion events"
          />
          <StatCard
            title="Conversion Rate"
            value={`${stats?.kpis?.conversionRate || "0.0"}%`}
            icon={TrendingUp}
            description="Visitors converting to leads"
          />
        </div>
      )}

      {/* Main Interactive Chart Section */}
      <div className="rounded-2xl border border-line bg-paper p-6 shadow-xs">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-line pb-4">
          <div>
            <h3 className="font-display text-[17px] font-bold text-ink">
              Traffic & Engagement Trends
            </h3>
            <p className="text-[12.5px] text-slate-500">
              Daily trajectory over selected time window
            </p>
          </div>

          <div className="flex items-center gap-1 rounded-lg bg-mist p-1">
            <button
              type="button"
              onClick={() => setChartMetric("visitors")}
              aria-pressed={chartMetric === "visitors"}
              className={`rounded px-3 py-1 text-xs font-semibold transition-colors ${
                chartMetric === "visitors"
                  ? "bg-white text-ink shadow-xs"
                  : "text-slate-600 hover:text-ink"
              }`}
            >
              Unique Visitors
            </button>
            <button
              type="button"
              onClick={() => setChartMetric("page_views")}
              aria-pressed={chartMetric === "page_views"}
              className={`rounded px-3 py-1 text-xs font-semibold transition-colors ${
                chartMetric === "page_views"
                  ? "bg-white text-ink shadow-xs"
                  : "text-slate-600 hover:text-ink"
              }`}
            >
              Page Views
            </button>
            <button
              type="button"
              onClick={() => setChartMetric("conversions")}
              aria-pressed={chartMetric === "conversions"}
              className={`rounded px-3 py-1 text-xs font-semibold transition-colors ${
                chartMetric === "conversions"
                  ? "bg-white text-ink shadow-xs"
                  : "text-slate-600 hover:text-ink"
              }`}
            >
              Conversions
            </button>
          </div>
        </div>

        <div className="pt-4">
          <TimeSeriesChart
            data={stats?.timeSeries || []}
            metric={chartMetric}
            color={
              chartMetric === "visitors"
                ? "#0052FF"
                : chartMetric === "page_views"
                ? "#0284C7"
                : "#10B981"
            }
          />
        </div>
      </div>

      {/* Two Column Grid: Top Pages & Traffic Sources */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Most Visited Pages */}
        <div className="rounded-2xl border border-line bg-paper p-6 shadow-xs">
          <div className="flex items-center justify-between border-b border-line pb-3.5 mb-4">
            <div>
              <h3 className="font-display text-[16px] font-bold text-ink">
                Most Visited Pages
              </h3>
              <p className="text-[12px] text-slate-500">
                Top requested marketing routes
              </p>
            </div>
            <Link
              href="/admin/analytics"
              className="text-[12.5px] font-semibold text-brand hover:text-brand-dark flex items-center gap-1"
            >
              <span>Full report</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <RankingBarChart
            items={(stats?.topPages || []).map((p: any) => ({
              label: p.page_path,
              value: p.views,
            }))}
            unit="views"
          />
        </div>

        {/* Traffic Sources & Referrers */}
        <div className="rounded-2xl border border-line bg-paper p-6 shadow-xs">
          <div className="flex items-center justify-between border-b border-line pb-3.5 mb-4">
            <div>
              <h3 className="font-display text-[16px] font-bold text-ink">
                Traffic Sources
              </h3>
              <p className="text-[12px] text-slate-500">
                Visitor attribution & referrers
              </p>
            </div>
            <Link
              href="/admin/visitors"
              className="text-[12.5px] font-semibold text-brand hover:text-brand-dark flex items-center gap-1"
            >
              <span>Explore visitors</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <RankingBarChart
            items={(stats?.trafficSources || []).map((s: any) => ({
              label: s.source,
              value: s.visitors,
            }))}
            unit="visitors"
          />
        </div>
      </div>

      {/* Technology, Location & Cookie Consent Row */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Devices */}
        <div className="rounded-2xl border border-line bg-paper p-5 shadow-xs">
          <h3 className="font-display text-[15px] font-bold text-ink mb-1">
            Device Distribution
          </h3>
          <p className="text-[12px] text-slate-500 mb-4">Mobile vs Desktop share</p>

          <DonutMeter
            slices={(stats?.devices || []).map((d: any, i: number) => ({
              label: d.device,
              count: d.count,
              color: i === 0 ? "#0052FF" : i === 1 ? "#06B6D4" : "#8B5CF6",
            }))}
          />
        </div>

        {/* Top Cities (Cambodia) */}
        <div className="rounded-2xl border border-line bg-paper p-5 shadow-xs">
          <h3 className="font-display text-[15px] font-bold text-ink mb-1">
            Top Locations
          </h3>
          <p className="text-[12px] text-slate-500 mb-4">Approximate city origins</p>

          <div className="space-y-2.5">
            {(stats?.locations || []).slice(0, 4).map((loc: any, i: number) => (
              <div key={i} className="flex items-center justify-between text-[13px]">
                <span className="flex items-center gap-2 text-ink font-medium">
                  <span className="text-slate-400">🇰🇭</span>
                  <span>{loc.city}</span>
                </span>
                <span className="font-mono text-slate-500">{loc.visitors} visitors</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cookie Consent Health */}
        <div className="rounded-2xl border border-line bg-paper p-5 shadow-xs">
          <h3 className="font-display text-[15px] font-bold text-ink mb-1">
            Cookie Consent Status
          </h3>
          <p className="text-[12px] text-slate-500 mb-4">Visitor privacy choices</p>

          <div className="rounded-xl bg-mist p-3.5 mb-3 text-center">
            <span className="font-mono text-2xl font-bold text-brand">
              {stats?.cookieStats?.acceptanceRate ?? 100}%
            </span>
            <p className="text-[11.5px] text-slate-500">Overall Acceptance Rate</p>
          </div>

          <div className="space-y-1.5 text-xs text-slate-600">
            <div className="flex justify-between">
              <span>Accept All:</span>
              <strong className="font-mono">{stats?.cookieStats?.acceptAll || 0}</strong>
            </div>
            <div className="flex justify-between">
              <span>Custom Choices:</span>
              <strong className="font-mono">{stats?.cookieStats?.custom || 0}</strong>
            </div>
            <div className="flex justify-between">
              <span>Reject Non-Essential:</span>
              <strong className="font-mono">
                {stats?.cookieStats?.rejectNonEssential || 0}
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Activity Feed */}
      <div className="rounded-2xl border border-line bg-paper p-6 shadow-xs">
        <div className="flex items-center justify-between border-b border-line pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <h3 className="font-display text-[16px] font-bold text-ink">
              Recent Website Telemetry Stream
            </h3>
          </div>
          <span className="text-xs text-slate-500">Live events</span>
        </div>

        <div className="divide-y divide-line">
          {(stats?.recentEvents || []).map((evt: any) => {
            const timeAgo = new Date(evt.timestamp).toLocaleTimeString();
            return (
              <div key={evt.id} className="flex items-center justify-between py-3 text-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-mist text-slate-600 font-mono text-[10px]">
                    {evt.event_name === "page_view"
                      ? "PV"
                      : evt.event_name === "pricing_view"
                      ? "PR"
                      : "EV"}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-ink">{evt.event_name}</span>
                      <span className="rounded bg-slate-100 px-1.5 py-0.2 font-mono text-[11px] text-slate-600">
                        {evt.page_path}
                      </span>
                    </div>
                    <p className="text-slate-400 mt-0.5">
                      {evt.city}, {evt.country} • {evt.browser} on {evt.os} • {evt.traffic_source || "Direct"}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-slate-400">{timeAgo}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Action Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-2">
        <Link
          href="/admin/blog"
          className="group flex items-center justify-between rounded-xl border border-line bg-paper p-4 transition-all hover:border-brand hover:shadow-xs"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-brand">
              <FileText size={20} />
            </div>
            <div>
              <p className="font-semibold text-ink text-[14px]">Blog CMS</p>
              <p className="text-xs text-slate-500">Manage articles & SEO</p>
            </div>
          </div>
          <ArrowRight size={16} className="text-slate-400 group-hover:text-brand transition-colors" />
        </Link>

        <Link
          href="/admin/pricing"
          className="group flex items-center justify-between rounded-xl border border-line bg-paper p-4 transition-all hover:border-brand hover:shadow-xs"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <CreditCard size={20} />
            </div>
            <div>
              <p className="font-semibold text-ink text-[14px]">Pricing Plans</p>
              <p className="text-xs text-slate-500">Edit tiers & features</p>
            </div>
          </div>
          <ArrowRight size={16} className="text-slate-400 group-hover:text-indigo-600 transition-colors" />
        </Link>

        <Link
          href="/admin/legal"
          className="group flex items-center justify-between rounded-xl border border-line bg-paper p-4 transition-all hover:border-brand hover:shadow-xs"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="font-semibold text-ink text-[14px]">Legal Policies</p>
              <p className="text-xs text-slate-500">Privacy & Terms versions</p>
            </div>
          </div>
          <ArrowRight size={16} className="text-slate-400 group-hover:text-emerald-600 transition-colors" />
        </Link>

        <Link
          href="/admin/visitors"
          className="group flex items-center justify-between rounded-xl border border-line bg-paper p-4 transition-all hover:border-brand hover:shadow-xs"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
              <Users size={20} />
            </div>
            <div>
              <p className="font-semibold text-ink text-[14px]">Visitor Explorer</p>
              <p className="text-xs text-slate-500">Journeys & consent</p>
            </div>
          </div>
          <ArrowRight size={16} className="text-slate-400 group-hover:text-amber-600 transition-colors" />
        </Link>
      </div>
    </div>
  );
}
