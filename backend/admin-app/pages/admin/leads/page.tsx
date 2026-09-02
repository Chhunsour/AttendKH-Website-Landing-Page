"use client";

import { useEffect, useState } from "react";
import {
  Inbox,
  Search,
  Filter,
  Send,
  Mail,
  Building,
  Users,
  CheckCircle,
  Clock,
  Trash2,
  Edit,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { DataTable, type Column } from "@/components/admin/data-table";
import { Modal } from "@/components/admin/modal";
import { useToast } from "@/components/admin/toast";
import type { Lead } from "@/lib/db/schema";

export default function AdminLeadsPage() {
  const { toast } = useToast();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [industryFilter, setIndustryFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  // Inspector / Edit Modal
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [editStatus, setEditStatus] = useState<Lead["status"]>("new");
  const [editNotes, setEditNotes] = useState("");
  const [saving, setSaving] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Lead | null>(null);

  const fetchLeads = async (
    pageNum: number,
    searchStr: string,
    stat: string,
    ind: string
  ) => {
    setLoading(true);
    try {
      const offset = (pageNum - 1) * 20;
      const res = await fetch(
        `/api/admin/leads?limit=20&offset=${offset}&search=${encodeURIComponent(
          searchStr
        )}&status=${stat}&industry=${ind}`
      );
      if (res.ok) {
        const data = await res.json();
        setLeads(data.leads || []);
        setTotal(data.total || 0);
      }
    } catch (err) {
      console.error("Failed to load leads", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads(page, search, statusFilter, industryFilter);
  }, [page, search, statusFilter, industryFilter]);

  const handleOpenInspector = (lead: Lead) => {
    setSelectedLead(lead);
    setEditStatus(lead.status);
    setEditNotes(lead.admin_notes || "");
  };

  const handleUpdateStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLead) return;
    setSaving(true);

    try {
      const res = await fetch("/api/admin/leads", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: selectedLead.id,
          status: editStatus,
          admin_notes: editNotes,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to update lead");
        return;
      }

      toast.success("Lead status updated");
      setSelectedLead(null);
      fetchLeads(page, search, statusFilter, industryFilter);
    } catch {
      toast.error("Network error updating lead");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      const res = await fetch(`/api/admin/leads?id=${deleteTarget.id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to delete lead");
        return;
      }

      toast.success("Lead removed");
      setDeleteTarget(null);
      fetchLeads(page, search, statusFilter, industryFilter);
    } catch {
      toast.error("Network error deleting lead");
    }
  };

  const statusBadge = (s: Lead["status"]) => {
    const map = {
      new: "bg-blue-50 text-brand border-blue-200",
      contacted: "bg-amber-50 text-amber-700 border-amber-200",
      qualified: "bg-purple-50 text-purple-700 border-purple-200",
      won: "bg-emerald-50 text-emerald-700 border-emerald-200",
      lost: "bg-slate-100 text-slate-600 border-slate-200",
    };
    return (
      <span
        className={`inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider ${
          map[s] || map.new
        }`}
      >
        {s}
      </span>
    );
  };

  const columns: Column<Lead>[] = [
    {
      header: "Submission Date",
      cell: (l) => (
        <span className="font-mono text-xs text-slate-500">
          {new Date(l.created_at).toLocaleDateString()} {new Date(l.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      ),
    },
    {
      header: "Prospect & Company",
      cell: (l) => (
        <div>
          <p className="font-semibold text-ink text-xs">{l.name}</p>
          <p className="text-[11.5px] text-slate-500 font-medium">{l.company}</p>
        </div>
      ),
    },
    {
      header: "Industry & Size",
      cell: (l) => (
        <div className="text-xs">
          <span className="rounded bg-mist px-2 py-0.5 font-semibold text-slate-700 text-[11px]">
            {l.industry}
          </span>
          <p className="text-[11px] text-slate-400 mt-1">
            {l.employees_count} staff • {l.branches_count} branch(es)
          </p>
        </div>
      ),
    },
    {
      header: "Contact Channels",
      cell: (l) => (
        <div className="space-y-0.5 text-xs">
          <div className="flex items-center gap-1.5 font-mono text-[11.5px] text-slate-700">
            <Mail size={12} className="text-slate-400" />
            <a href={`mailto:${l.email}`} className="hover:text-brand hover:underline">
              {l.email}
            </a>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[11.5px] text-slate-700">
            <Send size={12} className="text-sky-500" />
            <span>{l.phone_telegram}</span>
          </div>
        </div>
      ),
    },
    {
      header: "Status",
      cell: (l) => statusBadge(l.status),
    },
    {
      header: "Actions",
      cell: (l) => (
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => handleOpenInspector(l)}
            className="rounded p-1.5 text-brand hover:bg-brand-soft"
            title="Inspect & Edit Lead"
          >
            <Edit size={14} />
          </button>
          <button
            type="button"
            onClick={() => setDeleteTarget(l)}
            className="rounded p-1.5 text-rose-500 hover:bg-rose-50 hover:text-rose-700"
            title="Delete Lead"
          >
            <Trash2 size={14} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-[22px] font-bold text-ink">
            Inbound Leads & Demo Inquiries
          </h2>
          <p className="text-[13.5px] text-slate-500">
            Track, qualify, and manage sales inquiries from Cambodian businesses.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-semibold text-slate-500">Status:</span>
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setPage(1);
            }}
            className="rounded-lg border border-line bg-paper px-3 py-1.5 text-xs text-ink focus:border-brand focus:outline-none"
          >
            <option value="all">All Statuses</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="qualified">Qualified</option>
            <option value="won">Won / Converted</option>
            <option value="lost">Lost</option>
          </select>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-xs font-semibold text-slate-500">Industry:</span>
          <select
            value={industryFilter}
            onChange={(e) => {
              setIndustryFilter(e.target.value);
              setPage(1);
            }}
            className="rounded-lg border border-line bg-paper px-3 py-1.5 text-xs text-ink focus:border-brand focus:outline-none"
          >
            <option value="all">All Industries</option>
            <option value="Restaurants & Cafes">Restaurants & Cafes</option>
            <option value="Retail & Boutiques">Retail & Boutiques</option>
            <option value="Hospitality & Hotels">Hospitality & Hotels</option>
            <option value="Construction & Logistics">Construction & Logistics</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={leads}
        searchPlaceholder="Search leads by contact name, company, email, or phone..."
        onSearchChange={(s) => {
          setSearch(s);
          setPage(1);
        }}
        totalCount={total}
        pageSize={20}
        currentPage={page}
        onPageChange={setPage}
        isLoading={loading}
        emptyMessage="No inbound leads recorded yet."
      />

      {/* Lead Inspector Modal */}
      <Modal
        isOpen={!!selectedLead}
        onClose={() => setSelectedLead(null)}
        title="Lead Inspection & Status Pipeline"
        subtitle={selectedLead ? `${selectedLead.name} (${selectedLead.company})` : ""}
        maxWidth="max-w-xl"
      >
        {selectedLead && (
          <form onSubmit={handleUpdateStatus} className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-3 rounded-xl bg-mist p-3.5">
              <div>
                <span className="text-slate-500 block text-[11px]">Full Name</span>
                <strong className="text-ink text-[13px]">{selectedLead.name}</strong>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Company / Organization</span>
                <strong className="text-ink text-[13px]">{selectedLead.company}</strong>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Industry</span>
                <span className="font-semibold text-slate-700">{selectedLead.industry}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Team & Branches</span>
                <span className="font-semibold text-slate-700">
                  {selectedLead.employees_count} staff • {selectedLead.branches_count} location(s)
                </span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Corporate Email</span>
                <a
                  href={`mailto:${selectedLead.email}`}
                  className="font-mono text-brand underline font-medium"
                >
                  {selectedLead.email}
                </a>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Phone / Telegram</span>
                <span className="font-mono font-semibold text-slate-800">
                  {selectedLead.phone_telegram}
                </span>
              </div>
            </div>

            {/* Message payload */}
            {selectedLead.message && (
              <div>
                <label className="block text-xs font-semibold text-ink mb-1">
                  Prospect Operational Requirement / Note
                </label>
                <div className="rounded-xl border border-line bg-paper p-3 text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {selectedLead.message}
                </div>
              </div>
            )}

            {/* Pipeline Status Selector */}
            <div>
              <label className="block text-xs font-semibold text-ink mb-1">
                Pipeline Status
              </label>
              <select
                value={editStatus}
                onChange={(e) => setEditStatus(e.target.value as any)}
                className="w-full rounded-lg border border-line bg-paper p-2 text-xs font-semibold text-ink"
              >
                <option value="new">New (Needs Outreach)</option>
                <option value="contacted">Contacted (In Discussion / Demo Scheduled)</option>
                <option value="qualified">Qualified (Evaluating AttendKH)</option>
                <option value="won">Won / Converted to Customer</option>
                <option value="lost">Lost / Not Interested</option>
              </select>
            </div>

            {/* Admin Internal Notes */}
            <div>
              <label className="block text-xs font-semibold text-ink mb-1">
                Internal Administrative Notes & Follow-up Log
              </label>
              <textarea
                rows={3}
                value={editNotes}
                onChange={(e) => setEditNotes(e.target.value)}
                placeholder="Log demo feedback, pricing negotiated, branch setup details..."
                className="w-full rounded-lg border border-line bg-paper p-2.5 text-xs text-ink focus:border-brand focus:outline-none"
              />
            </div>

            <div className="mt-6 flex justify-end gap-2.5 pt-3 border-t border-line">
              <button
                type="button"
                onClick={() => setSelectedLead(null)}
                className="rounded-lg border border-line px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-mist"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="rounded-lg bg-brand px-5 py-2 text-xs font-semibold text-white hover:bg-brand-dark disabled:opacity-50"
              >
                {saving ? "Saving..." : "Update Lead"}
              </button>
            </div>
          </form>
        )}
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        title="Delete Lead Record"
        maxWidth="max-w-md"
      >
        <p className="text-sm text-slate-600">
          Are you sure you want to delete lead from{" "}
          <strong className="text-ink">{deleteTarget?.name}</strong> (
          {deleteTarget?.company})?
        </p>
        <div className="mt-6 flex justify-end gap-2.5">
          <button
            type="button"
            onClick={() => setDeleteTarget(null)}
            className="rounded-lg border border-line px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-mist"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="rounded-lg bg-rose-600 px-4 py-2 text-xs font-semibold text-white hover:bg-rose-700"
          >
            Delete Lead
          </button>
        </div>
      </Modal>
    </div>
  );
}
