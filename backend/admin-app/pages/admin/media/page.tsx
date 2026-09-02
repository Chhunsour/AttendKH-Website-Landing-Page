"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  Image as ImageIcon,
  Upload,
  Copy,
  Trash2,
  Check,
  Search,
  FileText,
  Sparkles,
} from "lucide-react";
import { useToast } from "@/components/admin/toast";
import { Modal } from "@/components/admin/modal";
import type { MediaItem } from "@/lib/db/schema";

export default function AdminMediaPage() {
  const { toast } = useToast();
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [uploading, setUploading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<MediaItem | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/media");
      if (res.ok) {
        const data = await res.json();
        setMediaList(data.media || []);
      }
    } catch (err) {
      console.error("Failed to load media", err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("alt_text", file.name);

    try {
      const res = await fetch("/api/admin/media", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Upload failed");
        return;
      }

      toast.success("File uploaded successfully");
      fetchMedia();
    } catch {
      toast.error("Upload error");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleCopyUrl = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    toast.success("URL copied to clipboard!");
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      const res = await fetch(`/api/admin/media?id=${deleteTarget.id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Media deleted");
        setDeleteTarget(null);
        fetchMedia();
      } else {
        toast.error("Failed to delete media");
      }
    } catch {
      toast.error("Error deleting media");
    }
  };

  const filteredMedia = mediaList.filter(
    (m) =>
      m.filename.toLowerCase().includes(search.toLowerCase()) ||
      (m.alt_text && m.alt_text.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-[22px] font-bold text-ink">
            Media & Asset Library
          </h2>
          <p className="text-[13.5px] text-slate-500">
            Upload and organize imagery for blog posts, cover banners, and site assets.
          </p>
        </div>

        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
          <button
            type="button"
            disabled={uploading}
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-[13.5px] font-semibold text-white shadow-xs hover:bg-brand-dark transition-all disabled:opacity-50"
          >
            <Upload size={16} />
            <span>{uploading ? "Uploading..." : "Upload New Image"}</span>
          </button>
        </div>
      </div>

      {/* Drag and Drop Uploader Area */}
      <div
        onClick={() => fileInputRef.current?.click()}
        className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-line bg-paper p-8 text-center cursor-pointer transition-colors hover:border-brand hover:bg-mist/50"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand mb-3">
          <Upload size={22} />
        </div>
        <p className="font-semibold text-ink text-[14px]">
          Click or drop an image here to upload
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Supports PNG, JPEG, WebP, SVG, and GIF up to 5MB
        </p>
      </div>

      {/* Search Input */}
      <div className="flex items-center justify-between">
        <div className="relative max-w-sm w-full">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search media by filename or alt text..."
            className="w-full rounded-lg border border-line bg-paper py-2 pl-9 pr-4 text-xs text-ink placeholder:text-slate-400 focus:border-brand focus:outline-none"
          />
        </div>

        <span className="text-xs font-mono text-slate-500">
          {filteredMedia.length} item{filteredMedia.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Media Grid */}
      {loading ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-44 animate-pulse rounded-xl border border-line bg-paper" />
          ))}
        </div>
      ) : filteredMedia.length === 0 ? (
        <div className="rounded-2xl border border-line bg-paper py-14 text-center">
          <ImageIcon size={36} className="mx-auto text-slate-300 mb-2" />
          <h3 className="font-display font-bold text-ink text-sm">No media files found</h3>
          <p className="text-xs text-slate-500 mt-1">Upload images to populate the library.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-line bg-paper shadow-xs transition-all hover:border-slate-300 hover:shadow-sm"
            >
              {/* Image Preview Box */}
              <div className="relative h-32 w-full bg-slate-100 flex items-center justify-center overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.url}
                  alt={item.alt_text || item.filename}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>

              {/* Info & Actions */}
              <div className="p-2.5">
                <p className="truncate text-xs font-semibold text-ink" title={item.filename}>
                  {item.filename}
                </p>
                <p className="text-[11px] text-slate-400 font-mono">
                  {(item.size_bytes / 1024).toFixed(0)} KB
                </p>

                <div className="mt-2.5 flex items-center gap-1.5 pt-2 border-t border-line">
                  <button
                    type="button"
                    onClick={() => handleCopyUrl(item.url, item.id)}
                    title="Copy URL"
                    className="flex-1 flex items-center justify-center gap-1 rounded bg-mist py-1 text-[11px] font-semibold text-slate-700 hover:bg-slate-200"
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check size={12} className="text-emerald-600" />
                        <span className="text-emerald-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy URL</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeleteTarget(item)}
                    title="Delete Media"
                    className="rounded p-1 text-slate-400 hover:bg-rose-50 hover:text-rose-600"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        title="Delete Media"
        maxWidth="max-w-md"
      >
        <p className="text-sm text-slate-600">
          Are you sure you want to delete <strong className="text-ink">{deleteTarget?.filename}</strong>?
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
            Delete File
          </button>
        </div>
      </Modal>
    </div>
  );
}
