"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  History,
  CheckCircle,
  Plus,
  Eye,
  Save,
  Clock,
  ExternalLink,
} from "lucide-react";
import { RichEditor } from "@/components/admin/rich-editor";
import { useToast } from "@/components/admin/toast";
import { Modal } from "@/components/admin/modal";
import type { LegalDocument } from "@/lib/db/schema";

export default function AdminLegalPage() {
  const { toast } = useToast();
  const [activeSlug, setActiveSlug] = useState<"privacy" | "terms" | "cookies" | "support">(
    "privacy"
  );
  const [activeDoc, setActiveDoc] = useState<LegalDocument | null>(null);
  const [versions, setVersions] = useState<LegalDocument[]>([]);
  const [loading, setLoading] = useState(true);

  // New Version Modal
  const [showNewVersion, setShowNewVersion] = useState(false);
  const [newVersionNum, setNewVersionNum] = useState("1.1");
  const [newContent, setNewContent] = useState("");
  const [newChangelog, setNewChangelog] = useState("");
  const [makeActiveImmediately, setMakeActiveImmediately] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchDocData(activeSlug);
  }, [activeSlug]);

  const fetchDocData = async (slug: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/legal?slug=${slug}`);
      if (res.ok) {
        const data = await res.json();
        setActiveDoc(data.active || null);
        setVersions(data.versions || []);
      }
    } catch (err) {
      console.error("Failed to load legal document", err);
    } finally {
      setLoading(false);
    }
  };

  const handleActivateVersion = async (id: string) => {
    try {
      const res = await fetch("/api/admin/legal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "set_active", id, slug: activeSlug }),
      });
      if (res.ok) {
        toast.success("Active policy version updated");
        fetchDocData(activeSlug);
      } else {
        toast.error("Failed to activate version");
      }
    } catch {
      toast.error("Error activating version");
    }
  };

  const handleCreateVersion = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch("/api/admin/legal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: activeSlug,
          title: activeDoc?.title || `${activeSlug.toUpperCase()} Policy`,
          version: newVersionNum,
          content: newContent,
          changelog: newChangelog || null,
          is_active: makeActiveImmediately ? 1 : 0,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to create policy version");
        return;
      }

      toast.success("New policy version published");
      setShowNewVersion(false);
      fetchDocData(activeSlug);
    } catch {
      toast.error("Network error");
    } finally {
      setSaving(false);
    }
  };

  const publicUrl =
    activeSlug === "privacy"
      ? "/privacy-policy"
      : activeSlug === "terms"
      ? "/terms"
      : activeSlug === "cookies"
      ? "/cookies"
      : "/support";

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-[22px] font-bold text-ink">
            Legal & Consent Policies
          </h2>
          <p className="text-[13.5px] text-slate-500">
            Maintain compliance, version histories, and explicit agreement requirements.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={publicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg border border-line bg-paper px-3.5 py-2 text-[13px] font-medium text-slate-700 hover:bg-mist hover:text-ink transition-colors"
          >
            <ExternalLink size={14} />
            <span>View Public Page</span>
          </Link>

          <button
            type="button"
            onClick={() => {
              setNewVersionNum(`1.${versions.length + 1}`);
              setNewContent(activeDoc?.content || "");
              setNewChangelog("");
              setShowNewVersion(true);
            }}
            className="flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-[13.5px] font-semibold text-white shadow-xs hover:bg-brand-dark transition-colors"
          >
            <Plus size={16} />
            <span>Publish New Version</span>
          </button>
        </div>
      </div>

      {/* Document Type Tabs */}
      <div className="flex items-center gap-1 rounded-xl border border-line bg-paper p-1 shadow-xs overflow-x-auto">
        {[
          { label: "Privacy Policy", val: "privacy" },
          { label: "Terms of Service", val: "terms" },
          { label: "Cookie Policy", val: "cookies" },
          { label: "Support & SLA", val: "support" },
        ].map((tab) => (
          <button
            key={tab.val}
            type="button"
            onClick={() => setActiveSlug(tab.val as any)}
            className={`whitespace-nowrap rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
              activeSlug === tab.val
                ? "bg-brand text-white shadow-xs"
                : "text-slate-600 hover:bg-mist hover:text-ink"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Current Active Version Banner */}
      <div className="rounded-2xl border border-line bg-paper p-6 shadow-xs">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-line pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <ShieldCheck size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-[17px] font-bold text-ink">
                  {activeDoc?.title || "Policy Document"}
                </h3>
                <span className="rounded-full bg-emerald-100 px-2 py-0.2 text-[11px] font-bold text-emerald-800">
                  Version {activeDoc?.version || "1.0"} (Active)
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Created on {activeDoc?.created_at ? new Date(activeDoc.created_at).toLocaleDateString() : "2026"} by {activeDoc?.created_by || "Administrator"}
              </p>
            </div>
          </div>

          <span className="font-mono text-xs text-slate-400">
            Public route: {publicUrl}
          </span>
        </div>

        {/* Content Preview */}
        <div className="rounded-xl bg-mist/50 p-5 border border-line max-h-80 overflow-y-auto">
          <pre className="font-sans text-[13.5px] leading-relaxed text-body whitespace-pre-wrap">
            {activeDoc?.content}
          </pre>
        </div>
      </div>

      {/* Version History Table */}
      <div className="rounded-2xl border border-line bg-paper p-6 shadow-xs">
        <div className="flex items-center gap-2 border-b border-line pb-3 mb-4">
          <History size={17} className="text-slate-500" />
          <h3 className="font-display text-[16px] font-bold text-ink">
            Version History & Audit Log
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-line bg-mist/60 font-semibold text-slate-500 uppercase">
              <tr>
                <th className="p-3">Version</th>
                <th className="p-3">Changelog</th>
                <th className="p-3">Created By</th>
                <th className="p-3">Date</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {versions.map((ver) => (
                <tr key={ver.id} className="hover:bg-mist/30">
                  <td className="p-3 font-mono font-bold text-ink">v{ver.version}</td>
                  <td className="p-3 text-slate-600 max-w-xs truncate">
                    {ver.changelog || "No changelog provided"}
                  </td>
                  <td className="p-3 text-slate-600">{ver.created_by || "Admin"}</td>
                  <td className="p-3 text-slate-500 font-mono">
                    {new Date(ver.created_at).toLocaleDateString()}
                  </td>
                  <td className="p-3">
                    {ver.is_active === 1 ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10.5px] font-semibold text-emerald-700">
                        <CheckCircle size={10} />
                        Active
                      </span>
                    ) : (
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10.5px] text-slate-500">
                        Archived
                      </span>
                    )}
                  </td>
                  <td className="p-3 text-right">
                    {ver.is_active !== 1 && (
                      <button
                        type="button"
                        onClick={() => handleActivateVersion(ver.id)}
                        className="rounded-md border border-line bg-paper px-2.5 py-1 text-xs font-semibold text-brand hover:bg-brand hover:text-white transition-colors"
                      >
                        Activate
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Publish New Version Modal */}
      <Modal
        isOpen={showNewVersion}
        onClose={() => setShowNewVersion(false)}
        title={`Publish New Version for ${activeDoc?.title || "Policy"}`}
        maxWidth="max-w-4xl"
      >
        <form onSubmit={handleCreateVersion} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-ink mb-1">
                Version Number (e.g. 1.1, 2.0)
              </label>
              <input
                type="text"
                required
                value={newVersionNum}
                onChange={(e) => setNewVersionNum(e.target.value)}
                placeholder="1.1"
                className="w-full rounded-lg border border-line bg-paper p-2 text-xs font-mono text-ink"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink mb-1">
                Changelog Note
              </label>
              <input
                type="text"
                value={newChangelog}
                onChange={(e) => setNewChangelog(e.target.value)}
                placeholder="e.g. Clarified cookie categories and retention period"
                className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-ink mb-1">
              Document Content (Markdown)
            </label>
            <RichEditor
              value={newContent}
              onChange={setNewContent}
              minHeight="350px"
              placeholder="Full policy text..."
            />
          </div>

          <label className="flex items-center gap-2 text-xs font-medium text-ink cursor-pointer pt-2">
            <input
              type="checkbox"
              checked={makeActiveImmediately}
              onChange={(e) => setMakeActiveImmediately(e.target.checked)}
              className="rounded text-brand"
            />
            <span>Set as active version immediately upon publishing</span>
          </label>

          <div className="mt-6 flex justify-end gap-2.5 pt-3 border-t border-line">
            <button
              type="button"
              onClick={() => setShowNewVersion(false)}
              className="rounded-lg border border-line px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-mist"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="rounded-lg bg-brand px-5 py-2 text-xs font-semibold text-white hover:bg-brand-dark disabled:opacity-50"
            >
              {saving ? "Publishing..." : "Publish Version"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
