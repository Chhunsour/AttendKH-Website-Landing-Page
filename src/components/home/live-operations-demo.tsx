"use client";

import { useState } from "react";
import {
  Users,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Building,
  MapPin,
  Camera,
  ShieldCheck,
  Search,
  Filter,
} from "lucide-react";
import { useSite } from "@/lib/i18n";

interface StaffPunch {
  id: string;
  name: string;
  role: string;
  branch: string;
  time: string;
  status: "on_time" | "late" | "on_leave";
  distance: string;
  selfieVerified: boolean;
}

const DEMO_PUNCHES: StaffPunch[] = [
  {
    id: "p1",
    name: "Sreymom Sok",
    role: "Senior Barista",
    branch: "BKK1 Flagship",
    time: "07:54 AM",
    status: "on_time",
    distance: "18m from pin",
    selfieVerified: true,
  },
  {
    id: "p2",
    name: "Dara Rith",
    role: "Store Manager",
    branch: "Tuol Kork HQ",
    time: "07:58 AM",
    status: "on_time",
    distance: "25m from pin",
    selfieVerified: true,
  },
  {
    id: "p3",
    name: "Chantha Vong",
    role: "Retail Associate",
    branch: "Siem Reap Pub Street",
    time: "08:12 AM",
    status: "late",
    distance: "34m from pin",
    selfieVerified: true,
  },
  {
    id: "p4",
    name: "Sophea Ly",
    role: "Warehouse Supervisor",
    branch: "Sihanoukville Port",
    time: "07:45 AM",
    status: "on_time",
    distance: "62m from pin",
    selfieVerified: true,
  },
  {
    id: "p5",
    name: "Piseth Keo",
    role: "Inventory Staff",
    branch: "Tuol Kork HQ",
    time: "08:19 AM",
    status: "late",
    distance: "40m from pin",
    selfieVerified: true,
  },
  {
    id: "p6",
    name: "Bopha Chea",
    role: "Head Chef",
    branch: "BKK1 Flagship",
    time: "Scheduled 08:00 AM",
    status: "on_leave",
    distance: "Approved Annual Leave",
    selfieVerified: false,
  },
];

export function LiveOperationsDemo() {
  const { lang } = useSite();
  const isKm = lang === "km";
  const [selectedBranch, setSelectedBranch] = useState("all");
  const [filterStatus, setFilterStatus] = useState<"all" | "late">("all");

  const branches = [
    { id: "all", label: isKm ? "គ្រប់សាខាទាំងអស់ (4)" : "All Branches (4)" },
    { id: "Tuol Kork HQ", label: "Tuol Kork HQ" },
    { id: "BKK1 Flagship", label: "BKK1 Flagship" },
    { id: "Siem Reap Pub Street", label: "Siem Reap" },
    { id: "Sihanoukville Port", label: "Sihanoukville" },
  ];

  const filteredPunches = DEMO_PUNCHES.filter((p) => {
    const matchesBranch = selectedBranch === "all" || p.branch === selectedBranch;
    const matchesStatus = filterStatus === "all" || p.status === "late";
    return matchesBranch && matchesStatus;
  });

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-paper shadow-2xl">
      {/* Top Console Bar */}
      <div className="border-b border-line bg-slate-900 px-6 py-4 text-white sm:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <h3 className="font-display text-[16px] font-bold text-white">
              {isKm ? "ទិដ្ឋភាពប្រតិបត្តិការផ្ទាល់ (Today at your company)" : "Live Operations Dashboard — Today"}
            </h3>
          </div>
          <p className="text-[11.5px] text-slate-400 mt-0.5">
            {isKm ? "ទិន្នន័យជាក់ស្តែងពីគ្រប់សាខានៅកម្ពុជា • ធ្វើសមកាលកម្មភ្លាមៗ" : "Real-time presence across Cambodian branches • Live Demonstration"}
          </p>
        </div>

        {/* Branch Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {branches.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => setSelectedBranch(b.id)}
              className={`whitespace-nowrap rounded-lg px-2.5 py-1 text-xs font-semibold transition-all ${
                selectedBranch === b.id
                  ? "bg-brand text-white shadow-xs"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards Strip */}
      <div className="grid grid-cols-2 gap-4 border-b border-line bg-mist/50 p-6 sm:grid-cols-4 sm:p-8">
        <div className="rounded-2xl border border-line bg-paper p-4 shadow-xs">
          <span className="text-[11.5px] font-semibold text-slate-500 block">
            {isKm ? "បុគ្គលិកតាមវេន" : "Scheduled Today"}
          </span>
          <p className="font-mono text-2xl font-extrabold text-ink mt-1">48 Staff</p>
          <span className="text-[10.5px] text-slate-400">Across 4 Branches</span>
        </div>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4 shadow-xs">
          <span className="text-[11.5px] font-semibold text-emerald-800 block">
            {isKm ? "បានចូលធ្វើការត្រឹមត្រូវ" : "Present On-Time"}
          </span>
          <p className="font-mono text-2xl font-extrabold text-emerald-700 mt-1">44 Staff</p>
          <span className="text-[10.5px] text-emerald-700 font-medium">92% punctuality</span>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-4 shadow-xs">
          <span className="text-[11.5px] font-semibold text-amber-800 block">
            {isKm ? "មកយឺត" : "Late Check-Ins"}
          </span>
          <p className="font-mono text-2xl font-extrabold text-amber-700 mt-1">3 Staff</p>
          <span className="text-[10.5px] text-amber-700 font-medium">Auto-grace applied</span>
        </div>

        <div className="rounded-2xl border border-line bg-paper p-4 shadow-xs">
          <span className="text-[11.5px] font-semibold text-slate-500 block">
            {isKm ? "ច្បាប់សម្រាក" : "Approved Leave"}
          </span>
          <p className="font-mono text-2xl font-extrabold text-slate-700 mt-1">1 Staff</p>
          <span className="text-[10.5px] text-slate-400">Annual Leave</span>
        </div>
      </div>

      {/* Live Activity Feed Table */}
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between mb-4 text-xs">
          <h4 className="font-display font-bold text-ink text-sm">
            {isKm ? "កំណត់ត្រាចូលធ្វើការចុងក្រោយ" : "Recent Clock-In Activity Stream"}
          </h4>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setFilterStatus(filterStatus === "all" ? "late" : "all")}
              className={`rounded-lg border px-2.5 py-1 font-semibold transition-colors ${
                filterStatus === "late"
                  ? "border-amber-400 bg-amber-50 text-amber-800"
                  : "border-line bg-paper text-slate-600 hover:bg-mist"
              }`}
            >
              {filterStatus === "late" ? "Showing Late Only" : "Show All"}
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {filteredPunches.map((punch) => (
            <div
              key={punch.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl border border-line bg-paper p-3.5 transition-all hover:border-brand hover:shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft font-bold text-brand text-xs">
                  {punch.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-ink text-xs">{punch.name}</p>
                    <span className="text-[11px] text-slate-400">•</span>
                    <span className="text-[11px] text-slate-500 font-medium">{punch.role}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-0.5">
                    <Building size={11} />
                    <span>{punch.branch}</span>
                    <span>•</span>
                    <span className="font-mono text-emerald-600">{punch.distance}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 text-xs">
                {punch.selfieVerified && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[10.5px] font-mono text-slate-600">
                    <Camera size={11} className="text-emerald-600" />
                    <span>Selfie Verified</span>
                  </span>
                )}

                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                    punch.status === "on_time"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : punch.status === "late"
                      ? "bg-amber-50 text-amber-700 border border-amber-200"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {punch.status === "on_time" ? (
                    <CheckCircle2 size={12} />
                  ) : punch.status === "late" ? (
                    <Clock size={12} />
                  ) : null}
                  <span>{punch.time}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
