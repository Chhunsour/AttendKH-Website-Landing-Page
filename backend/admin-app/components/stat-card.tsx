import React from "react";
import { ArrowUpRight, ArrowDownRight, type LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  prevValue?: string | number;
  diffPercent?: number | string;
  isPositiveGood?: boolean;
  icon: LucideIcon;
  description?: string;
}

export function StatCard({
  title,
  value,
  diffPercent,
  isPositiveGood = true,
  icon: Icon,
  description,
}: StatCardProps) {
  const isPositive =
    typeof diffPercent === "number"
      ? diffPercent >= 0
      : typeof diffPercent === "string"
      ? !diffPercent.startsWith("-")
      : null;

  const isGood = isPositive !== null ? (isPositiveGood ? isPositive : !isPositive) : true;

  return (
    <div className="rounded-xl border border-line bg-paper p-5 shadow-xs transition-all hover:border-slate-300">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-medium text-slate-500">{title}</span>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
          <Icon size={18} />
        </div>
      </div>

      <div className="mt-3 flex items-baseline gap-3">
        <span className="font-mono text-[28px] font-bold text-ink leading-tight tracking-tight">
          {value}
        </span>

        {diffPercent !== undefined && diffPercent !== null && (
          <span
            className={`inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
              isGood
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                : "bg-rose-50 text-rose-700 border border-rose-200"
            }`}
          >
            {isPositive ? (
              <ArrowUpRight size={13} className="shrink-0" />
            ) : (
              <ArrowDownRight size={13} className="shrink-0" />
            )}
            <span>{diffPercent}%</span>
          </span>
        )}
      </div>

      {description && (
        <p className="mt-2 text-[12px] text-slate-500">{description}</p>
      )}
    </div>
  );
}
