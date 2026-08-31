"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CreditCard,
  Plus,
  Trash2,
  Check,
  Star,
  DollarSign,
  ArrowUpDown,
  Save,
  Eye,
  Sparkles,
} from "lucide-react";
import { useToast } from "@/components/admin/toast";
import { Modal } from "@/components/admin/modal";
import { formatUSD, formatKHR, usdToKhr } from "@/lib/currency";
import type { PricingPlan } from "@/lib/db/schema";

export default function AdminPricingPage() {
  const { toast } = useToast();
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [currencyPreview, setCurrencyPreview] = useState<"USD" | "KHR">("USD");
  const [isAnnual, setIsAnnual] = useState(true);

  // Edit / Create plan modal state
  const [editingPlan, setEditingPlan] = useState<Partial<PricingPlan> | null>(null);
  const [featureInput, setFeatureInput] = useState("");
  const [saveLoading, setSaveLoading] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<PricingPlan | null>(null);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/pricing");
      if (res.ok) {
        const data = await res.json();
        setPlans(data.plans || []);
      }
    } catch (err) {
      console.error("Failed to load pricing plans", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSavePlan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPlan) return;
    setSaveLoading(true);

    try {
      const isNew = !editingPlan.id || editingPlan.id.startsWith("new_");
      const url = "/api/admin/pricing";
      const method = isNew ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingPlan),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to save pricing plan");
        return;
      }

      toast.success("Pricing plan saved successfully");
      setEditingPlan(null);
      fetchPlans();
    } catch {
      toast.error("Network error");
    } finally {
      setSaveLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      const res = await fetch(`/api/admin/pricing?id=${deleteTarget.id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Plan deleted");
        setDeleteTarget(null);
        fetchPlans();
      } else {
        toast.error("Failed to delete plan");
      }
    } catch {
      toast.error("Error deleting plan");
    }
  };

  const addFeature = () => {
    if (!featureInput.trim() || !editingPlan) return;
    const current = editingPlan.features || [];
    setEditingPlan({ ...editingPlan, features: [...current, featureInput.trim()] });
    setFeatureInput("");
  };

  const removeFeature = (idx: number) => {
    if (!editingPlan) return;
    const current = [...(editingPlan.features || [])];
    current.splice(idx, 1);
    setEditingPlan({ ...editingPlan, features: current });
  };

  const formatPlanPrice = (plan: PricingPlan) => {
    const rawMonthly = Number(plan.price_monthly);
    const amount = isAnnual ? rawMonthly * (plan.annual_factor || 0.8333) : rawMonthly;
    return currencyPreview === "KHR"
      ? formatKHR(usdToKhr(amount))
      : formatUSD(amount, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-[22px] font-bold text-ink">
            Subscription Pricing Management
          </h2>
          <p className="text-[13.5px] text-slate-500">
            Control tiers, monthly & annual rates, limits, and public features in USD & KHR.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg border border-line bg-paper px-3.5 py-2 text-[13px] font-medium text-slate-700 hover:bg-mist hover:text-ink transition-colors"
          >
            <Eye size={14} />
            <span>View Public /pricing</span>
          </Link>

          <button
            type="button"
            onClick={() => {
              setEditingPlan({
                id: `new_${Date.now()}`,
                slug: "custom",
                name: "New Tier",
                description: "Custom organizational tier tailored for specific needs.",
                price_monthly: 3.0,
                price_annual: 2.5,
                annual_factor: 0.8333,
                limits_text: "Up to 50 users",
                features: ["GPS attendance", "Full payroll engine", "Mobile self-service"],
                is_popular: 0,
                badge_text: null,
                cta_text: "Start free trial",
                cta_url: "/contact",
                display_order: plans.length + 1,
                is_active: 1,
              });
            }}
            className="flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-[13.5px] font-semibold text-white shadow-xs hover:bg-brand-dark transition-colors"
          >
            <Plus size={16} />
            <span>Add Plan Tier</span>
          </button>
        </div>
      </div>

      {/* Live Preview Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-paper p-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
          <Sparkles size={15} className="text-brand" />
          <span>Public Presentation Preview:</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Annual vs Monthly toggle */}
          <div className="flex items-center rounded-lg bg-mist p-1 text-xs">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`rounded px-3 py-1 font-semibold transition-colors ${
                !isAnnual ? "bg-white text-ink shadow-xs" : "text-slate-600 hover:text-ink"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-1.5 rounded px-3 py-1 font-semibold transition-colors ${
                isAnnual ? "bg-white text-ink shadow-xs" : "text-slate-600 hover:text-ink"
              }`}
            >
              <span>Annual</span>
              <span className="rounded bg-brand/10 px-1 py-0.2 text-[10.5px] text-brand">
                2 months free
              </span>
            </button>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center rounded-lg bg-mist p-1 text-xs">
            <button
              type="button"
              onClick={() => setCurrencyPreview("USD")}
              className={`rounded px-2.5 py-1 font-mono font-semibold transition-colors ${
                currencyPreview === "USD" ? "bg-white text-ink shadow-xs" : "text-slate-600 hover:text-ink"
              }`}
            >
              $ USD
            </button>
            <button
              type="button"
              onClick={() => setCurrencyPreview("KHR")}
              className={`rounded px-2.5 py-1 font-mono font-semibold transition-colors ${
                currencyPreview === "KHR" ? "bg-white text-ink shadow-xs" : "text-slate-600 hover:text-ink"
              }`}
            >
              ៛ KHR
            </button>
          </div>
        </div>
      </div>

      {/* Plans Card Grid */}
      {loading ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-96 animate-pulse rounded-2xl border border-line bg-paper" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => {
            const isPopular = plan.is_popular === 1;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-2xl border p-6 transition-all shadow-xs ${
                  isPopular
                    ? "border-brand bg-brand-soft/40 ring-1 ring-brand"
                    : "border-line bg-paper hover:border-slate-300"
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-0.5 text-[11px] font-bold text-white shadow-xs">
                    {plan.badge_text || "Most Popular"}
                  </span>
                )}

                <div>
                  {/* Title & Active Status */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-[18px] font-bold text-ink">
                        {plan.name}
                      </h3>
                      <span className="font-mono text-[11px] text-slate-400">
                        slug: {plan.slug}
                      </span>
                    </div>

                    <span
                      className={`rounded-full px-2 py-0.5 text-[10.5px] font-semibold ${
                        plan.is_active === 1
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {plan.is_active === 1 ? "Active" : "Inactive"}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mt-4">
                    <span className="font-mono text-3xl font-bold text-ink">
                      {formatPlanPrice(plan)}
                    </span>
                    <span className="text-xs text-slate-500 ml-1.5">/user/month</span>
                    <p className="mt-0.5 text-[11.5px] text-slate-400">
                      {isAnnual ? "billed annually" : "billed monthly"}
                    </p>
                  </div>

                  {/* Limits */}
                  <div className="mt-4 rounded-lg bg-mist px-3 py-2 text-xs font-semibold text-ink">
                    {plan.limits_text}
                  </div>

                  {/* Features List */}
                  <ul className="mt-4 space-y-2 text-xs text-body">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check size={14} className="shrink-0 text-brand mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="mt-6 pt-4 border-t border-line space-y-2">
                  <button
                    type="button"
                    onClick={() => setEditingPlan(plan)}
                    className="w-full rounded-lg bg-brand py-2 text-xs font-semibold text-white hover:bg-brand-dark transition-colors"
                  >
                    Edit Tier & Features
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeleteTarget(plan)}
                    className="w-full rounded-lg border border-line py-1.5 text-xs font-medium text-rose-600 hover:bg-rose-50 transition-colors"
                  >
                    Delete Plan
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Edit / Create Modal */}
      <Modal
        isOpen={!!editingPlan}
        onClose={() => setEditingPlan(null)}
        title={editingPlan?.id?.startsWith("new_") ? "Create Pricing Tier" : `Edit ${editingPlan?.name} Plan`}
        maxWidth="max-w-xl"
      >
        {editingPlan && (
          <form onSubmit={handleSavePlan} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-ink mb-1">
                  Plan Name
                </label>
                <input
                  type="text"
                  required
                  value={editingPlan.name || ""}
                  onChange={(e) => setEditingPlan({ ...editingPlan, name: e.target.value })}
                  placeholder="e.g. Growth"
                  className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink mb-1">
                  Slug ID
                </label>
                <input
                  type="text"
                  required
                  value={editingPlan.slug || ""}
                  onChange={(e) => setEditingPlan({ ...editingPlan, slug: e.target.value.toLowerCase() })}
                  placeholder="e.g. growth"
                  className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-ink mb-1">
                  Monthly Price ($ USD)
                </label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={editingPlan.price_monthly ?? 0}
                  onChange={(e) =>
                    setEditingPlan({ ...editingPlan, price_monthly: parseFloat(e.target.value) || 0 })
                  }
                  className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink mb-1">
                  Annual Discount Factor
                </label>
                <input
                  type="number"
                  step="0.0001"
                  value={editingPlan.annual_factor ?? 0.8333}
                  onChange={(e) =>
                    setEditingPlan({ ...editingPlan, annual_factor: parseFloat(e.target.value) || 0.8333 })
                  }
                  className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink mb-1">
                  Display Order
                </label>
                <input
                  type="number"
                  value={editingPlan.display_order ?? 1}
                  onChange={(e) =>
                    setEditingPlan({ ...editingPlan, display_order: parseInt(e.target.value, 10) || 1 })
                  }
                  className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink mb-1">
                Limits Description
              </label>
              <input
                type="text"
                required
                value={editingPlan.limits_text || ""}
                onChange={(e) => setEditingPlan({ ...editingPlan, limits_text: e.target.value })}
                placeholder="e.g. Up to 150 users"
                className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink mb-1">
                Short Description
              </label>
              <input
                type="text"
                value={editingPlan.description || ""}
                onChange={(e) => setEditingPlan({ ...editingPlan, description: e.target.value })}
                placeholder="Brief plan description..."
                className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink"
              />
            </div>

            {/* Features Editor */}
            <div>
              <label className="block text-xs font-semibold text-ink mb-1">
                Features List ({editingPlan.features?.length || 0})
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={featureInput}
                  onChange={(e) => setFeatureInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addFeature();
                    }
                  }}
                  placeholder="Type feature and press Enter or Add..."
                  className="flex-1 rounded-lg border border-line bg-paper p-2 text-xs text-ink"
                />
                <button
                  type="button"
                  onClick={addFeature}
                  className="rounded-lg bg-mist border border-line px-3 text-xs font-semibold text-ink hover:bg-slate-200"
                >
                  Add
                </button>
              </div>

              <div className="max-h-36 overflow-y-auto space-y-1 rounded-lg border border-line p-2 bg-mist/50">
                {(editingPlan.features || []).map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded bg-white px-2.5 py-1 text-xs border border-line"
                  >
                    <span>{feat}</span>
                    <button
                      type="button"
                      onClick={() => removeFeature(idx)}
                      className="text-slate-400 hover:text-rose-600 font-bold"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlight / Popular Toggle */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <label className="flex items-center gap-2 text-xs font-medium text-ink cursor-pointer">
                <input
                  type="checkbox"
                  checked={editingPlan.is_popular === 1}
                  onChange={(e) =>
                    setEditingPlan({ ...editingPlan, is_popular: e.target.checked ? 1 : 0 })
                  }
                  className="rounded text-brand"
                />
                <span>Highlight as Popular</span>
              </label>

              <label className="flex items-center gap-2 text-xs font-medium text-ink cursor-pointer">
                <input
                  type="checkbox"
                  checked={editingPlan.is_active === 1}
                  onChange={(e) =>
                    setEditingPlan({ ...editingPlan, is_active: e.target.checked ? 1 : 0 })
                  }
                  className="rounded text-brand"
                />
                <span>Active on Website</span>
              </label>
            </div>

            {editingPlan.is_popular === 1 && (
              <div>
                <label className="block text-xs font-semibold text-ink mb-1">
                  Popular Badge Label
                </label>
                <input
                  type="text"
                  value={editingPlan.badge_text || ""}
                  onChange={(e) => setEditingPlan({ ...editingPlan, badge_text: e.target.value })}
                  placeholder="e.g. Most Popular / Best for Chains"
                  className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink"
                />
              </div>
            )}

            <div className="mt-6 flex justify-end gap-2.5 pt-3 border-t border-line">
              <button
                type="button"
                onClick={() => setEditingPlan(null)}
                className="rounded-lg border border-line px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-mist"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saveLoading}
                className="rounded-lg bg-brand px-5 py-2 text-xs font-semibold text-white hover:bg-brand-dark disabled:opacity-50"
              >
                {saveLoading ? "Saving..." : "Save Pricing Tier"}
              </button>
            </div>
          </form>
        )}
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        title="Delete Pricing Tier"
        maxWidth="max-w-md"
      >
        <p className="text-sm text-slate-600">
          Are you sure you want to delete the{" "}
          <strong className="text-ink">&ldquo;{deleteTarget?.name}&rdquo;</strong> tier?
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
            Delete Plan
          </button>
        </div>
      </Modal>
    </div>
  );
}
