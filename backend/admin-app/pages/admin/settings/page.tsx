"use client";

import { useEffect, useState } from "react";
import { Sliders, Save, Megaphone, ShieldAlert, Phone, Mail, DollarSign, Sparkles } from "lucide-react";
import { useToast } from "@/components/admin/toast";
import type { WebsiteSettings } from "@/lib/db/schema";

export default function AdminSettingsPage() {
  const { toast } = useToast();
  const [settings, setSettings] = useState<Partial<WebsiteSettings>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/settings");
      if (res.ok) {
        const data = await res.json();
        setSettings(data.settings || {});
      }
    } catch (err) {
      console.error("Failed to load website settings", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to update settings");
        return;
      }

      toast.success("Website settings updated successfully");
    } catch {
      toast.error("Network error saving settings");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-4 animate-pulse">
        <div className="h-8 w-64 rounded-lg bg-slate-200" />
        <div className="h-96 rounded-2xl border border-line bg-paper" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-[22px] font-bold text-ink">
            Website & System Settings
          </h2>
          <p className="text-[13.5px] text-slate-500">
            Configure site metadata, announcement banners, contact hotlines, and maintenance state.
          </p>
        </div>

        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-xs hover:bg-brand-dark transition-all disabled:opacity-50"
        >
          <Save size={16} />
          <span>{saving ? "Saving..." : "Save All Settings"}</span>
        </button>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Top Announcement Bar Banner */}
        <div className="rounded-2xl border border-line bg-paper p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <div className="flex items-center gap-2">
              <Megaphone size={18} className="text-brand" />
              <h3 className="font-display text-[16px] font-bold text-ink">
                Top Announcement Bar
              </h3>
            </div>
            <label className="flex items-center gap-2 text-xs font-semibold text-ink cursor-pointer">
              <input
                type="checkbox"
                checked={settings.announcement_enabled === 1}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    announcement_enabled: e.target.checked ? 1 : 0,
                  })
                }
                className="rounded text-brand"
              />
              <span>Display Announcement on Site</span>
            </label>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-ink mb-1">
                Announcement Text (English)
              </label>
              <input
                type="text"
                value={settings.announcement_text_en || ""}
                onChange={(e) =>
                  setSettings({ ...settings, announcement_text_en: e.target.value })
                }
                placeholder="New Feature Announcement..."
                className="w-full rounded-lg border border-line bg-paper p-2.5 text-xs text-ink focus:border-brand focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink mb-1">
                Announcement Text (Khmer ខ្មែរ)
              </label>
              <input
                type="text"
                value={settings.announcement_text_km || ""}
                onChange={(e) =>
                  setSettings({ ...settings, announcement_text_km: e.target.value })
                }
                placeholder="មុខងារថ្មី..."
                className="w-full rounded-lg border border-line bg-paper p-2.5 text-xs text-ink font-khmer focus:border-brand focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-ink mb-1">
                Link Target URL
              </label>
              <input
                type="text"
                value={settings.announcement_link || ""}
                onChange={(e) =>
                  setSettings({ ...settings, announcement_link: e.target.value })
                }
                placeholder="/attendance or https://..."
                className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink font-mono focus:border-brand focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink mb-1">
                Color Theme
              </label>
              <select
                value={settings.announcement_color || "brand"}
                onChange={(e) =>
                  setSettings({ ...settings, announcement_color: e.target.value })
                }
                className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink focus:border-brand focus:outline-none"
              >
                <option value="brand">Brand Blue (#0052FF)</option>
                <option value="emerald">Emerald Green</option>
                <option value="amber">Warm Amber</option>
                <option value="dark">Charcoal Ink</option>
              </select>
            </div>
          </div>
        </div>

        {/* Brand & Meta Information */}
        <div className="rounded-2xl border border-line bg-paper p-6 shadow-xs space-y-4">
          <h3 className="font-display text-[16px] font-bold text-ink border-b border-line pb-3">
            General Website Metadata
          </h3>

          <div>
            <label className="block text-xs font-semibold text-ink mb-1">
              Global Site Title
            </label>
            <input
              type="text"
              required
              value={settings.site_title || ""}
              onChange={(e) =>
                setSettings({ ...settings, site_title: e.target.value })
              }
              className="w-full rounded-lg border border-line bg-paper p-2.5 text-xs font-medium text-ink focus:border-brand focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-ink mb-1">
              Global Meta Description
            </label>
            <textarea
              rows={2}
              required
              value={settings.site_description || ""}
              onChange={(e) =>
                setSettings({ ...settings, site_description: e.target.value })
              }
              className="w-full rounded-lg border border-line bg-paper p-2.5 text-xs text-ink focus:border-brand focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label className="block text-xs font-semibold text-ink mb-1">
                USD to KHR Conversion Rate
              </label>
              <input
                type="number"
                value={settings.currency_rate_khr || 4100}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    currency_rate_khr: parseInt(e.target.value, 10) || 4100,
                  })
                }
                className="w-full rounded-lg border border-line bg-paper p-2 text-xs font-mono text-ink"
              />
            </div>
          </div>
        </div>

        {/* Contact & Support Hotline */}
        <div className="rounded-2xl border border-line bg-paper p-6 shadow-xs space-y-4">
          <h3 className="font-display text-[16px] font-bold text-ink border-b border-line pb-3">
            Contact & Support Channels
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label className="block text-xs font-semibold text-ink mb-1">
                Support Email
              </label>
              <input
                type="email"
                required
                value={settings.contact_email || ""}
                onChange={(e) =>
                  setSettings({ ...settings, contact_email: e.target.value })
                }
                className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink mb-1">
                Phone Hotline
              </label>
              <input
                type="text"
                required
                value={settings.support_phone || ""}
                onChange={(e) =>
                  setSettings({ ...settings, support_phone: e.target.value })
                }
                className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink mb-1">
                Telegram Link
              </label>
              <input
                type="text"
                required
                value={settings.telegram_url || ""}
                onChange={(e) =>
                  setSettings({ ...settings, telegram_url: e.target.value })
                }
                className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink font-mono"
              />
            </div>
          </div>
        </div>

        {/* System Safeguards */}
        <div className="rounded-2xl border border-line bg-paper p-6 shadow-xs space-y-4">
          <h3 className="font-display text-[16px] font-bold text-ink border-b border-line pb-3 flex items-center gap-2">
            <ShieldAlert size={17} className="text-amber-600" />
            <span>System Safeguards</span>
          </h3>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-ink text-xs">
                Internal Analytics Telemetry
              </p>
              <p className="text-[11.5px] text-slate-500">
                Log privacy-conscious events, page views, and consent telemetry
              </p>
            </div>
            <input
              type="checkbox"
              checked={settings.analytics_enabled === 1}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  analytics_enabled: e.target.checked ? 1 : 0,
                })
              }
              className="rounded text-brand"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
