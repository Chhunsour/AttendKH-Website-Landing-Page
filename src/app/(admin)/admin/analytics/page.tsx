"use client";

import { useEffect, useState } from "react";
import {
  BarChart3,
  TrendingUp,
  Filter,
  Layers,
  ArrowRight,
  Globe2,
  Calendar,
} from "lucide-react";
import { TimeSeriesChart, RankingBarChart } from "@/components/admin/chart-widget";

export default function AdminAnalyticsPage() {
  const [days, setDays] = useState(30);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

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
      console.error("Failed to load analytics stats", err);
    } finally {
      setLoading(false);
    }
  };

  const uniqueVisitors = stats?.kpis?.uniqueVisitors || 1;
  const pageViews = stats?.kpis?.pageViews || 1;
  const pricingViews = stats?.kpis?.pricingViews || 0;
  const signupClicks = stats?.kpis?.signupClicks || 0;
  const leadSubmissions = stats?.kpis?.leadSubmissions || 0;

  const funnelSteps = [
    {
      label: "1. Website Landing Visits",
      count: uniqueVisitors,
      pct: 100,
      color: "bg-blue-600",
    },
    {
      label: "2. Explored Features & Pricing",
      count: pricingViews,
      pct: Math.round((pricingViews / uniqueVisitors) * 100),
      color: "bg-indigo-600",
    },
    {
      label: "3. Clicked Trial / Signup CTA",
      count: signupClicks,
      pct: Math.round((signupClicks / uniqueVisitors) * 100),
      color: "bg-emerald-600",
    },
    {
      label: "4. Submitted Lead Form",
      count: leadSubmissions,
      pct: Math.round((leadSubmissions / uniqueVisitors) * 100),
      color: "bg-teal-600",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header & Filter */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-[22px] font-bold text-ink">
            Analytics & Conversion Funnels
          </h2>
          <p className="text-[13.5px] text-slate-500">
            Understand visitor acquisition paths, retention, and conversion drop-offs.
          </p>
        </div>

        <div className="flex items-center gap-1 rounded-xl border border-line bg-paper p-1 shadow-xs">
          {[
            { label: "7 Days", val: 7 },
            { label: "30 Days", val: 30 },
            { label: "90 Days", val: 90 },
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

      {/* Conversion Funnel Section */}
      <div className="rounded-2xl border border-line bg-paper p-6 shadow-xs">
        <div className="flex items-center justify-between border-b border-line pb-4 mb-6">
          <div>
            <h3 className="font-display text-[17px] font-bold text-ink flex items-center gap-2">
              <Layers size={18} className="text-brand" />
              <span>Full Conversion Funnel</span>
            </h3>
            <p className="text-[12.5px] text-slate-500">
              Progression from first landing page impression to lead capture
            </p>
          </div>
          <span className="rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
            {stats?.kpis?.conversionRate || 0}% Total Conversion
          </span>
        </div>

        <div className="space-y-5">
          {funnelSteps.map((step, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center justify-between text-[13.5px]">
                <span className="font-semibold text-ink">{step.label}</span>
                <div className="flex items-center gap-3 font-mono">
                  <span className="font-bold text-ink">{step.count.toLocaleString()}</span>
                  <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                    {step.pct}%
                  </span>
                </div>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full ${step.color} transition-all duration-700`}
                  style={{ width: `${Math.max(step.pct, 4)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trajectory TimeSeries Chart */}
      <div className="rounded-2xl border border-line bg-paper p-6 shadow-xs">
        <div className="border-b border-line pb-4 mb-4">
          <h3 className="font-display text-[17px] font-bold text-ink">
            Page Views & Unique Visitor Trajectory
          </h3>
          <p className="text-[12.5px] text-slate-500">
            Daily historical volume over {days} days
          </p>
        </div>

        <TimeSeriesChart data={stats?.timeSeries || []} metric="page_views" color="#0052FF" />
      </div>

      {/* Two Column Grid: Top Browsers & Operating Systems */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-line bg-paper p-6 shadow-xs">
          <h3 className="font-display text-[16px] font-bold text-ink mb-1">
            Top Browsers
          </h3>
          <p className="text-[12px] text-slate-500 mb-4">Clients used by visitors</p>

          <RankingBarChart
            items={(stats?.browsers || []).map((b: any) => ({
              label: b.browser,
              value: b.count,
            }))}
            unit="users"
          />
        </div>

        <div className="rounded-2xl border border-line bg-paper p-6 shadow-xs">
          <h3 className="font-display text-[16px] font-bold text-ink mb-1">
            Operating Systems
          </h3>
          <p className="text-[12px] text-slate-500 mb-4">Platforms browsing AttendKH</p>

          <RankingBarChart
            items={(stats?.osList || []).map((o: any) => ({
              label: o.os,
              value: o.count,
            }))}
            unit="users"
          />
        </div>
      </div>
    </div>
  );
}
