"use client";

import { useState } from "react";

// --- Interactive Time-Series Area Chart ---
export function TimeSeriesChart({
  data,
  metric = "visitors",
  color = "#0052FF",
  height = 240,
}: {
  data: Array<{ date: string; visitors: number; page_views: number; conversions: number }>;
  metric?: "visitors" | "page_views" | "conversions";
  color?: string;
  height?: number;
}) {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  if (!data || data.length === 0) {
    return (
      <div className="flex h-48 items-center justify-center text-sm text-slate-500">
        No time-series data available
      </div>
    );
  }

  const values = data.map((d) => d[metric] || 0);
  const maxVal = Math.max(...values, 10);
  const minVal = 0;
  const range = maxVal - minVal;

  const width = 800;
  const paddingX = 40;
  const paddingY = 30;
  const graphWidth = width - paddingX * 2;
  const graphHeight = height - paddingY * 2;

  const points = data.map((d, i) => {
    const x = paddingX + (i / Math.max(data.length - 1, 1)) * graphWidth;
    const y = paddingY + graphHeight - ((d[metric] - minVal) / range) * graphHeight;
    return { x, y, data: d };
  });

  const pathD = points.reduce((acc, pt, i) => {
    return i === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
  }, "");

  const areaD = `${pathD} L ${points[points.length - 1].x} ${
    paddingY + graphHeight
  } L ${points[0].x} ${paddingY + graphHeight} Z`;

  const activePoint = hoverIdx !== null ? points[hoverIdx] : null;

  return (
    <div className="relative w-full overflow-hidden">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto select-none"
        onMouseLeave={() => setHoverIdx(null)}
      >
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.22" />
            <stop offset="100%" stopColor={color} stopOpacity="0.00" />
          </linearGradient>
        </defs>

        {/* Horizontal grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((pct, i) => {
          const y = paddingY + graphHeight * (1 - pct);
          const val = Math.round(minVal + range * pct);
          return (
            <g key={i}>
              <line
                x1={paddingX}
                y1={y}
                x2={width - paddingX}
                y2={y}
                stroke="#e2e8f0"
                strokeDasharray="4 4"
                strokeWidth="1"
              />
              <text
                x={paddingX - 10}
                y={y + 4}
                textAnchor="end"
                className="fill-slate-500 font-mono text-[10.5px]"
              >
                {val}
              </text>
            </g>
          );
        })}

        {/* Area fill */}
        <path d={areaD} fill="url(#chartGradient)" />

        {/* Line stroke */}
        <path
          d={pathD}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Interactive points & vertical hover line */}
        {activePoint && (
          <line
            x1={activePoint.x}
            y1={paddingY}
            x2={activePoint.x}
            y2={paddingY + graphHeight}
            stroke="#94a3b8"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
        )}

        {points.map((pt, i) => (
          <circle
            key={i}
            cx={pt.x}
            cy={pt.y}
            r={hoverIdx === i ? 6 : 3.5}
            fill={hoverIdx === i ? color : "#ffffff"}
            stroke={color}
            strokeWidth="2"
            className="cursor-pointer transition-all"
            onMouseEnter={() => setHoverIdx(i)}
          />
        ))}

        {/* Date labels at bottom */}
        {points
          .filter((_, i) => i % Math.ceil(points.length / 7) === 0 || i === points.length - 1)
          .map((pt, i) => {
            const d = new Date(pt.data.date);
            const formatted = `${d.getMonth() + 1}/${d.getDate()}`;
            return (
              <text
                key={i}
                x={pt.x}
                y={height - 8}
                textAnchor="middle"
                className="fill-slate-500 font-mono text-[10.5px]"
              >
                {formatted}
              </text>
            );
          })}
      </svg>

      {/* Floating Hover Card */}
      {activePoint && (
        <div
          className="pointer-events-none absolute -top-1 rounded-lg border border-slate-200 bg-ink p-2.5 text-xs text-white shadow-xl"
          style={{
            left: `${(activePoint.x / width) * 100}%`,
            transform: "translate(-50%, -100%)",
          }}
        >
          <p className="font-mono text-[11px] text-slate-300">
            {activePoint.data.date}
          </p>
          <p className="mt-1 font-semibold text-[13px] text-white">
            {activePoint.data[metric]} {metric.replace("_", " ")}
          </p>
        </div>
      )}
    </div>
  );
}

// --- Horizontal Ranking Bar Chart ---
export function RankingBarChart({
  items,
  total,
  unit = "",
}: {
  items: Array<{ label: string; value: number; secondary?: string }>;
  total?: number;
  unit?: string;
}) {
  const maxVal = Math.max(...items.map((i) => i.value), 1);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const pct = Math.round((item.value / maxVal) * 100);
        return (
          <div key={i} className="group">
            <div className="flex items-center justify-between text-[13px] mb-1">
              <span className="truncate font-medium text-ink max-w-[70%]">
                {item.label}
              </span>
              <div className="flex items-center gap-1.5 font-mono text-slate-500">
                <span className="font-semibold text-ink">{item.value.toLocaleString()}</span>
                {unit && <span>{unit}</span>}
              </div>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-brand transition-all duration-500 group-hover:bg-brand-dark"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// --- Donut Meter Breakdown ---
export function DonutMeter({
  slices,
  totalLabel = "Total",
}: {
  slices: Array<{ label: string; count: number; color: string }>;
  totalLabel?: string;
}) {
  const total = slices.reduce((acc, s) => acc + s.count, 0);

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-around">
      {/* Visual meter bar */}
      <div className="w-full sm:w-1/2">
        <div className="flex h-3.5 w-full overflow-hidden rounded-full bg-slate-100 p-0.5">
          {slices.map((slice, i) => {
            const pct = total > 0 ? (slice.count / total) * 100 : 0;
            return (
              <div
                key={i}
                className="h-full first:rounded-l-full last:rounded-r-full transition-all"
                style={{ width: `${pct}%`, backgroundColor: slice.color }}
                title={`${slice.label}: ${slice.count} (${pct.toFixed(1)}%)`}
              />
            );
          })}
        </div>
      </div>

      {/* Legend list */}
      <div className="w-full sm:w-1/2 space-y-2">
        {slices.map((slice, i) => {
          const pct = total > 0 ? ((slice.count / total) * 100).toFixed(1) : "0.0";
          return (
            <div key={i} className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: slice.color }}
                />
                <span className="font-medium text-slate-700">{slice.label}</span>
              </div>
              <span className="font-mono text-slate-500">
                {slice.count} ({pct}%)
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
