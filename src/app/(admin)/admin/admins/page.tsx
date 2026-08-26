"use client";

import { useEffect, useState } from "react";
import { UserCheck, Plus, Shield, UserX, Edit2, Trash2, Key, CheckCircle } from "lucide-react";
import { DataTable, type Column } from "@/components/admin/data-table";
import { Modal } from "@/components/admin/modal";
import { useToast } from "@/components/admin/toast";
import type { AdminUser } from "@/lib/db/schema";

export default function AdminUsersPage() {
  const { toast } = useToast();
  const [admins, setAdmins] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Add / Edit Modal
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState<any | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"super_admin" | "editor">("editor");
  const [isActive, setIsActive] = useState(1);
  const [saving, setSaving] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<any | null>(null);

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/admins");
      if (res.ok) {
        const data = await res.json();
        setAdmins(data.admins || []);
      }
    } catch (err) {
      console.error("Failed to load admins", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch("/api/admin/admins", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role, is_active: isActive }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to create administrator");
        return;
      }

      toast.success("Administrator created successfully");
      setShowAddModal(false);
      setName("");
      setEmail("");
      setPassword("");
      fetchAdmins();
    } catch {
      toast.error("Network error");
    } finally {
      setSaving(false);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingAdmin) return;
    setSaving(true);

    try {
      const payload: any = {
        id: editingAdmin.id,
        name: editingAdmin.name,
        email: editingAdmin.email,
        role: editingAdmin.role,
        is_active: editingAdmin.is_active,
      };
      if (password) {
        payload.password = password;
      }

      const res = await fetch("/api/admin/admins", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to update administrator");
        return;
      }

      toast.success("Administrator updated successfully");
      setEditingAdmin(null);
      setPassword("");
      fetchAdmins();
    } catch {
      toast.error("Network error");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      const res = await fetch(`/api/admin/admins?id=${deleteTarget.id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to delete administrator");
        return;
      }

      toast.success("Administrator removed");
      setDeleteTarget(null);
      fetchAdmins();
    } catch {
      toast.error("Network error deleting administrator");
    }
  };

  const columns: Column<any>[] = [
    {
      header: "Administrator",
      cell: (a) => (
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-soft font-bold text-brand text-xs">
            {a.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="font-semibold text-ink text-[13.5px]">{a.name}</p>
            <p className="font-mono text-xs text-slate-400">{a.email}</p>
          </div>
        </div>
      ),
    },
    {
      header: "Role",
      cell: (a) => (
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
            a.role === "super_admin"
              ? "bg-brand text-white"
              : "bg-slate-100 text-slate-700"
          }`}
        >
          <Shield size={11} />
          <span>{a.role === "super_admin" ? "Super Admin" : "Editor"}</span>
        </span>
      ),
    },
    {
      header: "Status",
      cell: (a) => (
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
            a.is_active === 1
              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
              : "bg-rose-50 text-rose-700 border border-rose-200"
          }`}
        >
          {a.is_active === 1 ? "Active" : "Deactivated"}
        </span>
      ),
    },
    {
      header: "Last Login",
      cell: (a) => (
        <span className="font-mono text-xs text-slate-500">
          {a.last_login_at
            ? new Date(a.last_login_at).toLocaleString()
            : "Never"}
        </span>
      ),
    },
    {
      header: "Actions",
      cell: (a) => (
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setEditingAdmin(a);
              setPassword("");
            }}
            className="rounded p-1.5 text-slate-500 hover:bg-mist hover:text-ink"
            title="Edit Admin"
          >
            <Edit2 size={14} />
          </button>
          <button
            type="button"
            onClick={() => setDeleteTarget(a)}
            className="rounded p-1.5 text-rose-500 hover:bg-rose-50 hover:text-rose-700"
            title="Delete Admin"
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
            Admin User Management
          </h2>
          <p className="text-[13.5px] text-slate-500">
            Manage authorized administrative accounts, roles, and credential access.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setName("");
            setEmail("");
            setPassword("");
            setRole("editor");
            setIsActive(1);
            setShowAddModal(true);
          }}
          className="flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-[13.5px] font-semibold text-white shadow-xs hover:bg-brand-dark transition-colors"
        >
          <Plus size={16} />
          <span>Add Administrator</span>
        </button>
      </div>

      <DataTable
        columns={columns}
        data={admins}
        isLoading={loading}
        emptyMessage="No administrators configured."
      />

      {/* Add Admin Modal */}
      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Administrator"
        maxWidth="max-w-md"
      >
        <form onSubmit={handleCreate} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-ink mb-1">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Sreymom Sok"
              className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-ink mb-1">Corporate Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@attendkh.com"
              className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-ink mb-1">Password</label>
            <input
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Min 8 characters"
              className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-ink mb-1">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as any)}
              className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink"
            >
              <option value="editor">Editor (Blog, Pricing & Settings)</option>
              <option value="super_admin">Super Admin (Full Access & Admin Management)</option>
            </select>
          </div>

          <div className="mt-6 flex justify-end gap-2.5 pt-3 border-t border-line">
            <button
              type="button"
              onClick={() => setShowAddModal(false)}
              className="rounded-lg border border-line px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-mist"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="rounded-lg bg-brand px-5 py-2 text-xs font-semibold text-white hover:bg-brand-dark disabled:opacity-50"
            >
              {saving ? "Creating..." : "Create Administrator"}
            </button>
          </div>
        </form>
      </Modal>

      {/* Edit Admin Modal */}
      <Modal
        isOpen={!!editingAdmin}
        onClose={() => setEditingAdmin(null)}
        title={`Edit Administrator: ${editingAdmin?.name}`}
        maxWidth="max-w-md"
      >
        {editingAdmin && (
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-ink mb-1">Full Name</label>
              <input
                type="text"
                required
                value={editingAdmin.name || ""}
                onChange={(e) => setEditingAdmin({ ...editingAdmin, name: e.target.value })}
                className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink mb-1">Corporate Email</label>
              <input
                type="email"
                required
                value={editingAdmin.email || ""}
                onChange={(e) => setEditingAdmin({ ...editingAdmin, email: e.target.value })}
                className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink mb-1">
                New Password (leave empty to keep current)
              </label>
              <input
                type="password"
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Leave blank to keep unchanged"
                className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink mb-1">Role</label>
              <select
                value={editingAdmin.role || "editor"}
                onChange={(e) => setEditingAdmin({ ...editingAdmin, role: e.target.value as any })}
                className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink"
              >
                <option value="editor">Editor</option>
                <option value="super_admin">Super Admin</option>
              </select>
            </div>

            <div className="pt-2">
              <label className="flex items-center gap-2 text-xs font-medium text-ink cursor-pointer">
                <input
                  type="checkbox"
                  checked={editingAdmin.is_active === 1}
                  onChange={(e) =>
                    setEditingAdmin({ ...editingAdmin, is_active: e.target.checked ? 1 : 0 })
                  }
                  className="rounded text-brand"
                />
                <span>Account Active & Enabled</span>
              </label>
            </div>

            <div className="mt-6 flex justify-end gap-2.5 pt-3 border-t border-line">
              <button
                type="button"
                onClick={() => setEditingAdmin(null)}
                className="rounded-lg border border-line px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-mist"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="rounded-lg bg-brand px-5 py-2 text-xs font-semibold text-white hover:bg-brand-dark disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        )}
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        title="Delete Administrator"
        maxWidth="max-w-md"
      >
        <p className="text-sm text-slate-600">
          Are you sure you want to remove administrator{" "}
          <strong className="text-ink">{deleteTarget?.name}</strong>? They will immediately lose
          access to the console.
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
            Delete Administrator
          </button>
        </div>
      </Modal>
    </div>
  );
}
