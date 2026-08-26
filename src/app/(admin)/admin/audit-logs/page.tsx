"use client";

import { useEffect, useState } from "react";
import { History, Search, Shield, Eye, ArrowRight, User } from "lucide-react";
import { DataTable, type Column } from "@/components/admin/data-table";
import { Modal } from "@/components/admin/modal";
import type { AuditLog } from "@/lib/db/schema";

export default function AdminAuditLogsPage() {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Selected Log Diff Modal
  const [selectedLog, setSelectedLog] = useState<AuditLog | null>(null);

  useEffect(() => {
    fetchLogs(page, search);
  }, [page, search]);

  const fetchLogs = async (pageNum: number, searchStr: string) => {
    setLoading(true);
    try {
      const offset = (pageNum - 1) * 20;
      const res = await fetch(
        `/api/admin/audit-logs?limit=20&offset=${offset}&search=${encodeURIComponent(searchStr)}`
      );
      if (res.ok) {
        const data = await res.json();
        setLogs(data.logs || []);
        setTotal(data.total || 0);
      }
    } catch (err) {
      console.error("Failed to load audit logs", err);
    } finally {
      setLoading(false);
    }
  };

  const columns: Column<AuditLog>[] = [
    {
      header: "Timestamp",
      cell: (l) => (
        <span className="font-mono text-xs text-slate-500">
          {new Date(l.timestamp).toLocaleDateString()} {new Date(l.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
        </span>
      ),
    },
    {
      header: "Administrator",
      cell: (l) => (
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 font-semibold text-ink text-xs">
            {l.actor_name?.charAt(0) || "A"}
          </div>
          <div>
            <p className="font-semibold text-ink text-xs">{l.actor_name}</p>
            <p className="text-[11px] text-slate-400 font-mono">{l.actor_email}</p>
          </div>
        </div>
      ),
    },
    {
      header: "Action",
      cell: (l) => (
        <span className="inline-flex items-center rounded-md bg-brand-soft px-2 py-0.5 font-mono text-[11.5px] font-semibold text-brand">
          {l.action}
        </span>
      ),
    },
    {
      header: "Target Entity",
      cell: (l) => (
        <span className="font-mono text-xs text-slate-600">
          {l.target_entity} {l.target_id ? `(${l.target_id.substring(0, 8)}...)` : ""}
        </span>
      ),
    },
    {
      header: "IP Address",
      cell: (l) => (
        <span className="font-mono text-[11px] text-slate-400">
          {l.ip_address || "Localhost"}
        </span>
      ),
    },
    {
      header: "Details",
      cell: (l) => (
        <button
          type="button"
          onClick={() => setSelectedLog(l)}
          className="rounded-lg border border-line bg-paper px-2.5 py-1 text-xs font-semibold text-brand hover:bg-brand hover:text-white transition-colors"
        >
          View Diff
        </button>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-[22px] font-bold text-ink">
          Administrative Audit Trail
        </h2>
        <p className="text-[13.5px] text-slate-500">
          Immutable chronological ledger tracking all website price adjustments, policy edits, CMS changes, and administrator operations.
        </p>
      </div>

      <DataTable
        columns={columns}
        data={logs}
        searchPlaceholder="Search by administrator, action, or entity..."
        onSearchChange={(s) => {
          setSearch(s);
          setPage(1);
        }}
        totalCount={total}
        pageSize={20}
        currentPage={page}
        onPageChange={setPage}
        isLoading={loading}
        emptyMessage="No audit logs recorded."
      />

      {/* State Diff Comparison Modal */}
      <Modal
        isOpen={!!selectedLog}
        onClose={() => setSelectedLog(null)}
        title="Audit Action State Inspection"
        subtitle={`Action: ${selectedLog?.action} on ${selectedLog?.target_entity}`}
        maxWidth="max-w-2xl"
      >
        {selectedLog && (
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-xl bg-mist p-3 text-xs">
              <div>
                <span className="text-slate-500">Actor:</span>{" "}
                <strong className="text-ink">{selectedLog.actor_name}</strong> ({selectedLog.actor_email})
              </div>
              <div className="font-mono text-slate-500">
                {new Date(selectedLog.timestamp).toLocaleString()}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Before State */}
              <div>
                <h4 className="font-semibold text-slate-700 text-xs mb-1.5">
                  Before State
                </h4>
                <div className="rounded-xl border border-line bg-slate-50 p-3 max-h-60 overflow-y-auto">
                  {selectedLog.before_state ? (
                    <pre className="font-mono text-[11px] text-slate-700 whitespace-pre-wrap">
                      {JSON.stringify(selectedLog.before_state, null, 2)}
                    </pre>
                  ) : (
                    <p className="text-xs text-slate-400 italic">None (Newly Created)</p>
                  )}
                </div>
              </div>

              {/* After State */}
              <div>
                <h4 className="font-semibold text-slate-700 text-xs mb-1.5">
                  After State
                </h4>
                <div className="rounded-xl border border-line bg-slate-50 p-3 max-h-60 overflow-y-auto">
                  {selectedLog.after_state ? (
                    <pre className="font-mono text-[11px] text-slate-700 whitespace-pre-wrap">
                      {JSON.stringify(selectedLog.after_state, null, 2)}
                    </pre>
                  ) : (
                    <p className="text-xs text-slate-400 italic">None (Deleted)</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
