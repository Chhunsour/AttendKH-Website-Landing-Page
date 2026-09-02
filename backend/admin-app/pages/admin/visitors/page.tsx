"use client";

import { useEffect, useState } from "react";
import { Users, Eye, ShieldCheck, Clock, ArrowRight, ExternalLink, MapPin } from "lucide-react";
import { DataTable, type Column } from "@/components/admin/data-table";
import { Modal } from "@/components/admin/modal";

export default function AdminVisitorsPage() {
  const [visitors, setVisitors] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Selected visitor modal
  const [selectedVisitor, setSelectedVisitor] = useState<any | null>(null);
  const [modalLoading, setModalLoading] = useState(false);

  useEffect(() => {
    fetchVisitors(page, search);
  }, [page, search]);

  const fetchVisitors = async (pageNum: number, searchStr: string) => {
    setLoading(true);
    try {
      const offset = (pageNum - 1) * 20;
      const res = await fetch(
        `/api/admin/visitors?limit=20&offset=${offset}&search=${encodeURIComponent(searchStr)}`
      );
      if (res.ok) {
        const data = await res.json();
        setVisitors(data.visitors || []);
        setTotal(data.total || 0);
      }
    } catch (err) {
      console.error("Failed to load visitors", err);
    } finally {
      setLoading(false);
    }
  };

  const handleInspectVisitor = async (visitorId: string) => {
    setModalLoading(true);
    try {
      const res = await fetch(`/api/admin/visitors?visitor_id=${visitorId}`);
      if (res.ok) {
        const data = await res.json();
        setSelectedVisitor(data);
      }
    } catch (err) {
      console.error("Failed to load visitor details", err);
    } finally {
      setModalLoading(false);
    }
  };

  const columns: Column<any>[] = [
    {
      header: "Visitor ID",
      cell: (v) => (
        <div>
          <span className="font-mono text-xs font-semibold text-brand">
            {v.visitor_id.substring(0, 16)}...
          </span>
          <p className="text-[11px] text-slate-400 font-mono">
            {v.session_count} session{v.session_count > 1 ? "s" : ""}
          </p>
        </div>
      ),
    },
    {
      header: "Location & Tech",
      cell: (v) => (
        <div>
          <p className="font-medium text-ink text-xs flex items-center gap-1">
            <MapPin size={12} className="text-brand shrink-0" />
            <span>{v.city || "Phnom Penh"}, {v.country || "Cambodia"}</span>
          </p>
          <p className="text-[11.5px] text-slate-500">
            {v.browser} on {v.os} ({v.device_type})
          </p>
        </div>
      ),
    },
    {
      header: "Source / Referrer",
      cell: (v) => (
        <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
          {v.traffic_source || "Direct"}
        </span>
      ),
    },
    {
      header: "Cookie Consent",
      cell: (v) => {
        const choice = v.consent_choice;
        return (
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
              choice === "accept_all"
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                : choice === "custom"
                ? "bg-blue-50 text-blue-700 border border-blue-200"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            <ShieldCheck size={11} />
            <span>
              {choice === "accept_all"
                ? "Accepted All"
                : choice === "custom"
                ? "Customized"
                : "Non-Essential Rejected"}
            </span>
          </span>
        );
      },
    },
    {
      header: "Last Seen",
      cell: (v) => (
        <span className="font-mono text-xs text-slate-500">
          {new Date(v.last_seen).toLocaleDateString()} {new Date(v.last_seen).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      ),
    },
    {
      header: "Action",
      cell: (v) => (
        <button
          type="button"
          onClick={() => handleInspectVisitor(v.visitor_id)}
          className="rounded-lg border border-line bg-paper px-2.5 py-1 text-xs font-semibold text-brand hover:bg-brand hover:text-white transition-colors"
        >
          Inspect
        </button>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-[22px] font-bold text-ink">
          Visitor & Session Explorer
        </h2>
        <p className="text-[13.5px] text-slate-500">
          Inspect anonymous visitor journeys, telemetry, and privacy preferences.
        </p>
      </div>

      <DataTable
        columns={columns}
        data={visitors}
        searchPlaceholder="Search visitor ID, source, or location..."
        onSearchChange={(s) => {
          setSearch(s);
          setPage(1);
        }}
        totalCount={total}
        pageSize={20}
        currentPage={page}
        onPageChange={setPage}
        isLoading={loading}
        emptyMessage="No visitors recorded yet."
      />

      {/* Visitor Journey Detail Modal */}
      <Modal
        isOpen={!!selectedVisitor}
        onClose={() => setSelectedVisitor(null)}
        title="Visitor Journey & Telemetry"
        subtitle={`Visitor ID: ${selectedVisitor?.visitor_id}`}
        maxWidth="max-w-2xl"
      >
        {selectedVisitor && (
          <div className="space-y-6">
            {/* Consent Info */}
            <div className="rounded-xl border border-line bg-mist p-4">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-semibold text-ink">Cookie Consent Status</span>
                <span className="font-mono text-slate-500">Policy v{selectedVisitor.consent?.policy_version || "1.0"}</span>
              </div>
              <p className="text-xs text-slate-600">
                Choice: <strong className="text-ink">{selectedVisitor.consent?.choice || "Not Recorded"}</strong>
              </p>
              {selectedVisitor.consent?.categories && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {selectedVisitor.consent.categories.map((cat: string) => (
                    <span key={cat} className="rounded bg-white border border-line px-2 py-0.5 text-[11px] font-mono text-slate-700">
                      {cat}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Chronological Event Trail */}
            <div>
              <h3 className="font-display text-[15px] font-bold text-ink mb-3">
                Chronological Events ({selectedVisitor.events.length})
              </h3>

              <div className="space-y-3 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                {selectedVisitor.events.map((evt: any, i: number) => {
                  const date = new Date(evt.timestamp);
                  return (
                    <div key={i} className="flex items-start gap-4 relative pl-8">
                      <div className="absolute left-2.5 top-1.5 h-2.5 w-2.5 rounded-full bg-brand ring-4 ring-white" />
                      <div className="flex-1 rounded-xl border border-line bg-paper p-3 shadow-xs">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-ink">{evt.event_name}</span>
                          <span className="font-mono text-slate-400">
                            {date.toLocaleTimeString()}
                          </span>
                        </div>
                        <p className="mt-1 font-mono text-[12px] text-slate-600">
                          Route: <strong className="text-brand">{evt.page_path}</strong>
                        </p>
                        {evt.traffic_source && (
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            Source: {evt.traffic_source}
                          </p>
                        )}
                        {evt.payload && Object.keys(evt.payload).length > 0 && (
                          <pre className="mt-2 rounded bg-mist p-2 font-mono text-[10.5px] text-slate-600 overflow-x-auto">
                            {JSON.stringify(evt.payload, null, 2)}
                          </pre>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
