"use client";

import React, { useState } from "react";
import { Search, ChevronLeft, ChevronRight, Inbox } from "lucide-react";

export interface Column<T> {
  header: string;
  accessorKey?: keyof T;
  cell?: (item: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  searchPlaceholder?: string;
  onSearchChange?: (val: string) => void;
  totalCount?: number;
  pageSize?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  isLoading?: boolean;
  emptyMessage?: string;
}

export function DataTable<T extends { id?: string | number }>({
  columns,
  data,
  searchPlaceholder = "Search...",
  onSearchChange,
  totalCount,
  pageSize = 15,
  currentPage = 1,
  onPageChange,
  isLoading = false,
  emptyMessage = "No records found.",
}: DataTableProps<T>) {
  const [localSearch, setLocalSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setLocalSearch(v);
    if (onSearchChange) {
      onSearchChange(v);
    }
  };

  const totalPages = totalCount ? Math.ceil(totalCount / pageSize) : 1;

  return (
    <div className="rounded-xl border border-line bg-paper shadow-xs overflow-hidden">
      {/* Search Header */}
      {onSearchChange && (
        <div className="border-b border-line p-4">
          <div className="relative max-w-sm">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
            />
            <input
              type="text"
              value={localSearch}
              onChange={handleSearch}
              placeholder={searchPlaceholder}
              className="w-full rounded-lg border border-line bg-mist/50 py-2 pl-9 pr-4 text-[13.5px] text-ink placeholder:text-slate-400 focus:border-brand focus:bg-white focus:outline-none"
            />
          </div>
        </div>
      )}

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-[13.5px]">
          <thead className="border-b border-line bg-mist/60 text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
            <tr>
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  className={`px-5 py-3.5 ${col.className || ""}`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {isLoading ? (
              <tr>
                <td colSpan={columns.length} className="py-12 text-center text-slate-500">
                  <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-brand border-t-transparent" />
                  <p className="mt-2 text-xs">Loading data...</p>
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="py-12 text-center text-slate-500">
                  <Inbox size={32} className="mx-auto text-slate-300 mb-2" />
                  <p className="font-medium text-ink">{emptyMessage}</p>
                </td>
              </tr>
            ) : (
              data.map((item, rowIdx) => (
                <tr
                  key={item.id ? String(item.id) : rowIdx}
                  className="transition-colors hover:bg-mist/40"
                >
                  {columns.map((col, colIdx) => (
                    <td
                      key={colIdx}
                      className={`px-5 py-3.5 text-body ${col.className || ""}`}
                    >
                      {col.cell
                        ? col.cell(item)
                        : col.accessorKey
                        ? String(item[col.accessorKey] ?? "-")
                        : null}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      {totalPages > 1 && onPageChange && (
        <div className="flex items-center justify-between border-t border-line px-5 py-3 text-xs text-slate-500">
          <span>
            Showing page <strong className="text-ink">{currentPage}</strong> of{" "}
            <strong className="text-ink">{totalPages}</strong>
            {totalCount ? ` (${totalCount} total)` : ""}
          </span>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              disabled={currentPage <= 1}
              onClick={() => onPageChange(currentPage - 1)}
              className="flex items-center gap-1 rounded-md border border-line bg-paper px-2.5 py-1 font-medium text-body transition-colors hover:bg-mist disabled:opacity-40"
            >
              <ChevronLeft size={14} />
              <span>Prev</span>
            </button>
            <button
              type="button"
              disabled={currentPage >= totalPages}
              onClick={() => onPageChange(currentPage + 1)}
              className="flex items-center gap-1 rounded-md border border-line bg-paper px-2.5 py-1 font-medium text-body transition-colors hover:bg-mist disabled:opacity-40"
            >
              <span>Next</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
