"use client";

import { useState, useRef } from "react";
import {
  Bold,
  Italic,
  Heading1,
  Heading2,
  List,
  Quote,
  Code,
  Link as LinkIcon,
  Image as ImageIcon,
  Eye,
  Edit3,
  Columns,
} from "lucide-react";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

interface RichEditorProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  minHeight?: string;
}

export function RichEditor({
  value,
  onChange,
  placeholder = "Write post content in Markdown...",
  minHeight = "400px",
}: RichEditorProps) {
  const [viewMode, setViewMode] = useState<"edit" | "preview" | "split">("split");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const insertText = (prefix: string, suffix = "") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = value.substring(start, end);
    const replacement = `${prefix}${selected || "text"}${suffix}`;
    const nextVal = value.substring(0, start) + replacement + value.substring(end);

    onChange(nextVal);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + prefix.length,
        start + prefix.length + (selected.length || 4)
      );
    }, 10);
  };

  const getHtmlPreview = () => {
    try {
      const rawHtml = marked.parse(value || "") as string;
      return sanitizeHtml(rawHtml, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([
          "img",
          "h1",
          "h2",
          "h3",
          "h4",
          "span",
        ]),
        allowedAttributes: {
          ...sanitizeHtml.defaults.allowedAttributes,
          img: ["src", "alt", "title", "width", "height"],
          span: ["class"],
          code: ["class"],
        },
      });
    } catch {
      return "<p>Preview error</p>";
    }
  };

  const wordCount = value.trim() ? value.trim().split(/\s+/).length : 0;
  const readTimeMin = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <div className="rounded-xl border border-line bg-paper overflow-hidden shadow-xs">
      {/* Formatting Toolbar */}
      <div className="flex flex-wrap items-center justify-between border-b border-line bg-mist/60 px-3 py-2 gap-2">
        <div className="flex flex-wrap items-center gap-1">
          <button
            type="button"
            onClick={() => insertText("**", "**")}
            title="Bold"
            className="rounded p-1.5 text-slate-600 hover:bg-white hover:text-ink transition-colors"
          >
            <Bold size={15} />
          </button>
          <button
            type="button"
            onClick={() => insertText("*", "*")}
            title="Italic"
            className="rounded p-1.5 text-slate-600 hover:bg-white hover:text-ink transition-colors"
          >
            <Italic size={15} />
          </button>
          <div className="h-4 w-px bg-slate-300 mx-1" />
          <button
            type="button"
            onClick={() => insertText("## ")}
            title="Heading 2"
            className="rounded p-1.5 text-slate-600 hover:bg-white hover:text-ink transition-colors"
          >
            <Heading1 size={15} />
          </button>
          <button
            type="button"
            onClick={() => insertText("### ")}
            title="Heading 3"
            className="rounded p-1.5 text-slate-600 hover:bg-white hover:text-ink transition-colors"
          >
            <Heading2 size={15} />
          </button>
          <div className="h-4 w-px bg-slate-300 mx-1" />
          <button
            type="button"
            onClick={() => insertText("- ")}
            title="Bullet List"
            className="rounded p-1.5 text-slate-600 hover:bg-white hover:text-ink transition-colors"
          >
            <List size={15} />
          </button>
          <button
            type="button"
            onClick={() => insertText("> ")}
            title="Quote"
            className="rounded p-1.5 text-slate-600 hover:bg-white hover:text-ink transition-colors"
          >
            <Quote size={15} />
          </button>
          <button
            type="button"
            onClick={() => insertText("```\n", "\n```")}
            title="Code Block"
            className="rounded p-1.5 text-slate-600 hover:bg-white hover:text-ink transition-colors"
          >
            <Code size={15} />
          </button>
          <div className="h-4 w-px bg-slate-300 mx-1" />
          <button
            type="button"
            onClick={() => insertText("[", "](https://)")}
            title="Link"
            className="rounded p-1.5 text-slate-600 hover:bg-white hover:text-ink transition-colors"
          >
            <LinkIcon size={15} />
          </button>
          <button
            type="button"
            onClick={() => insertText("![alt](", ")")}
            title="Image"
            className="rounded p-1.5 text-slate-600 hover:bg-white hover:text-ink transition-colors"
          >
            <ImageIcon size={15} />
          </button>
        </div>

        {/* View Mode & Word Count */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-500">
            <span>{wordCount} words</span>
            <span>•</span>
            <span>~{readTimeMin} min read</span>
          </div>

          <div className="flex items-center rounded-lg bg-slate-200/80 p-0.5">
            <button
              type="button"
              onClick={() => setViewMode("edit")}
              aria-pressed={viewMode === "edit"}
              className={`rounded px-2 py-1 text-xs font-medium transition-colors ${
                viewMode === "edit" ? "bg-white text-ink shadow-xs" : "text-slate-600"
              }`}
            >
              <Edit3 size={13} className="inline mr-1" />
              Write
            </button>
            <button
              type="button"
              onClick={() => setViewMode("split")}
              aria-pressed={viewMode === "split"}
              className={`hidden md:block rounded px-2 py-1 text-xs font-medium transition-colors ${
                viewMode === "split" ? "bg-white text-ink shadow-xs" : "text-slate-600"
              }`}
            >
              <Columns size={13} className="inline mr-1" />
              Split
            </button>
            <button
              type="button"
              onClick={() => setViewMode("preview")}
              aria-pressed={viewMode === "preview"}
              className={`rounded px-2 py-1 text-xs font-medium transition-colors ${
                viewMode === "preview" ? "bg-white text-ink shadow-xs" : "text-slate-600"
              }`}
            >
              <Eye size={13} className="inline mr-1" />
              Preview
            </button>
          </div>
        </div>
      </div>

      {/* Editor Body */}
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-line" style={{ minHeight }}>
        {/* Write Textarea */}
        {(viewMode === "edit" || viewMode === "split") && (
          <div className={`p-4 ${viewMode === "split" ? "w-full md:w-1/2" : "w-full"}`}>
            <textarea
              ref={textareaRef}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              className="h-full min-h-[350px] w-full resize-none bg-transparent font-mono text-[13.5px] leading-relaxed text-ink outline-none placeholder:text-slate-400"
            />
          </div>
        )}

        {/* Live HTML Preview */}
        {(viewMode === "preview" || viewMode === "split") && (
          <div
            className={`overflow-y-auto bg-slate-50/50 p-6 ${
              viewMode === "split" ? "w-full md:w-1/2" : "w-full"
            }`}
          >
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Visual Preview
            </div>
            <article
              className="prose prose-slate max-w-none text-[15px] leading-relaxed text-body prose-headings:font-display prose-headings:text-ink prose-headings:font-bold prose-a:text-brand prose-code:text-brand prose-code:font-mono"
              dangerouslySetInnerHTML={{ __html: getHtmlPreview() }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
