"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Mail, ArrowRight, AlertCircle } from "lucide-react";
import { useToast } from "@/components/admin/toast";

export default function AdminLoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Authentication failed. Please check your credentials.");
        toast.error(data.error || "Authentication failed");
        return;
      }

      toast.success("Welcome back! Signing in...");
      router.push("/admin");
      router.refresh();
    } catch {
      setError("Network error occurred. Please try again.");
      toast.error("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-5 sm:p-8">
      <div className="w-full max-w-md">
        {/* Logo and Brand */}
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-md shadow-brand/20">
            <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <path
                d="M16 29.5S6 20.4 6 13.3A10 10 0 0 1 26 13.3C26 20.4 16 29.5 16 29.5Z"
                fill="#ffffff"
              />
              <path
                d="M12 13.2l2.9 2.9 5.3-5.5"
                stroke="#0052FF"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="font-display mt-4 text-2xl font-bold text-ink sm:text-3xl">
            AttendKH Admin
          </h1>
          <p className="mt-1.5 text-[14px] text-slate-500">
            Website Content & Performance Console
          </p>
        </div>

        {/* Login Card */}
        <div className="mt-8 rounded-2xl border border-line bg-paper p-7 shadow-sm sm:p-8">
          {error && (
            <div className="mb-5 flex items-center gap-2.5 rounded-xl border border-rose-200 bg-rose-50 p-3.5 text-[13.5px] text-rose-800">
              <AlertCircle size={17} className="shrink-0 text-rose-600" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="admin-email"
                className="block text-[13px] font-semibold text-ink mb-1.5"
              >
                Administrator Email
              </label>
              <div className="relative">
                <Mail
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  id="admin-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@attendkh.com"
                  className="w-full rounded-lg border border-line bg-mist/50 py-2.5 pl-10 pr-4 text-[14px] text-ink outline-none transition-colors focus:border-brand focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="admin-password"
                className="block text-[13px] font-semibold text-ink mb-1.5"
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  id="admin-password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full rounded-lg border border-line bg-mist/50 py-2.5 pl-10 pr-4 text-[14px] text-ink outline-none transition-colors focus:border-brand focus:bg-white"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-brand py-3 text-[14.5px] font-semibold text-white shadow-xs transition-all hover:bg-brand-dark disabled:opacity-60"
            >
              {loading ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <span>Sign in to Dashboard</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

        </div>

        {/* Back to Public Site */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-[13.5px] font-medium text-slate-500 hover:text-ink transition-colors"
          >
            ← Back to public website
          </Link>
        </div>
      </div>
    </div>
  );
}
