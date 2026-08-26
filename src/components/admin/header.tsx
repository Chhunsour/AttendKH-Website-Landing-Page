"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ExternalLink, RefreshCw, Shield, Globe } from "lucide-react";
import type { AdminSession } from "@/lib/auth";

interface HeaderProps {
  user: AdminSession;
  title: string;
  subtitle?: string;
  onOpenMobile?: () => void;
  onRefresh?: () => void;
}

export function AdminHeader({
  user,
  title,
  subtitle,
  onOpenMobile,
  onRefresh,
}: HeaderProps) {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefreshClick = async () => {
    if (!onRefresh) return;
    setRefreshing(true);
    try {
      await onRefresh();
    } finally {
      setTimeout(() => setRefreshing(false), 400);
    }
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-line bg-paper/90 px-5 backdrop-blur-md sm:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenMobile}
          className="rounded-lg border border-line p-2 text-ink lg:hidden hover:bg-mist"
          aria-label="Open navigation menu"
        >
          <Menu size={19} />
        </button>

        <div>
          <h1 className="font-display text-[18px] font-bold text-ink sm:text-[20px]">
            {title}
          </h1>
          {subtitle && (
            <p className="hidden text-[12.5px] text-slate-500 sm:block">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        {onRefresh && (
          <button
            type="button"
            onClick={handleRefreshClick}
            disabled={refreshing}
            title="Refresh Data"
            className="flex items-center gap-1.5 rounded-lg border border-line bg-paper px-3 py-1.5 text-[13px] font-medium text-body transition-colors hover:bg-mist hover:text-ink disabled:opacity-50"
          >
            <RefreshCw size={14} className={refreshing ? "animate-spin text-brand" : ""} />
            <span className="hidden sm:inline">Refresh</span>
          </button>
        )}

        <div className="hidden items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11.5px] font-medium text-emerald-700 md:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>System Online</span>
        </div>

        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-lg bg-brand px-3.5 py-1.5 text-[13px] font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          <Globe size={14} />
          <span>Public Site</span>
        </a>
      </div>
    </header>
  );
}
