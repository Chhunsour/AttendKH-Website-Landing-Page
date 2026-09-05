"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  RotateCcw,
  ExternalLink,
  Copy,
  Check,
  ArrowRight,
  Sliders,
  Sparkles,
} from "lucide-react";
import {
  ChatMessage,
  queryChatbot,
  simulateTokenStream,
  calculateLiveQuote,
} from "@/lib/chatbot-engine";
import { playSendSound, playReceiveSound } from "@/lib/chatbot-sound";

function getCurrentTimeStr(): string {
  try {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  } catch {
    return "";
  }
}

// Slim, Ultra-Clean White & Blue Pricing Calculator Card
function SlimQuoteCard({ initialStaff = 20 }: { initialStaff?: number }) {
  const [staff, setStaff] = useState(initialStaff);
  const quote = calculateLiveQuote(staff);

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="mt-3 overflow-hidden rounded-xl border border-blue-100 bg-white p-3.5 text-slate-900 shadow-xs"
    >
      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
        <div className="flex items-center gap-1.5 text-xs font-bold text-brand">
          <Sliders className="h-3.5 w-3.5" />
          <span>Interactive Cost Breakdown</span>
        </div>
        <span className="rounded-md bg-blue-50 px-2 py-0.5 font-mono text-[11px] font-bold text-brand">
          {staff} Staff
        </span>
      </div>

      {/* Range Slider */}
      <div className="mt-2.5 space-y-1">
        <input
          type="range"
          min="2"
          max="150"
          value={staff}
          onChange={(e) => setStaff(parseInt(e.target.value, 10))}
          className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-100 accent-brand focus:outline-none"
        />
        <div className="flex justify-between font-mono text-[9px] text-slate-400">
          <span>2 staff</span>
          <span>150+</span>
        </div>
      </div>

      {/* Numbers Grid */}
      <div className="mt-2.5 grid grid-cols-2 gap-2 text-left">
        <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-2.5">
          <p className="text-[9.5px] font-semibold uppercase tracking-wider text-slate-500">
            Monthly
          </p>
          <p className="mt-0.5 font-mono text-[14px] font-bold text-slate-900">
            ${quote.monthlyUsd.toFixed(2)}
          </p>
          <p className="text-[10px] text-slate-500">
            {quote.monthlyKhr.toLocaleString()} ៛/mo
          </p>
        </div>

        <div className="relative rounded-xl border border-blue-200 bg-blue-50/60 p-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[9.5px] font-semibold uppercase tracking-wider text-brand">
              Annual Plan
            </p>
            <span className="rounded bg-brand/10 px-1.5 py-0.2 text-[8px] font-bold text-brand">
              2 Mo Free
            </span>
          </div>
          <p className="mt-0.5 font-mono text-[14px] font-bold text-brand">
            ${quote.annualUsd.toFixed(2)}
          </p>
          <p className="text-[10px] text-brand/80">
            {quote.annualKhr.toLocaleString()} ៛/yr
          </p>
        </div>
      </div>

      <div className="mt-2.5 flex items-center justify-between border-t border-slate-100 pt-2">
        <span className="text-[10.5px] text-slate-500">
          $1.00/user/mo · No setup fee
        </span>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1 rounded-md bg-brand px-2.5 py-1 text-[11px] font-bold text-white shadow-2xs hover:bg-blue-700 transition"
        >
          <span>Get Started</span>
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </motion.div>
  );
}

// Clean text renderer
function RenderBotText({ text }: { text: string }) {
  const lines = text.split("\n");

  return (
    <div className="space-y-2 text-[13px] leading-[1.65] text-slate-900">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={idx} className="h-1" />;
        }

        const isBullet = trimmed.startsWith("•") || trimmed.startsWith("-");
        const isNumber = /^\d+\.\s/.test(trimmed);

        const renderFormattedLine = (content: string) => {
          const parts: React.ReactNode[] = [];
          const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
          let lastIdx = 0;
          let match;

          while ((match = linkRegex.exec(content)) !== null) {
            if (match.index > lastIdx) {
              parts.push(parseBoldItalics(content.substring(lastIdx, match.index), `${idx}-${lastIdx}`));
            }
            const label = match[1];
            const href = match[2];
            parts.push(
              <Link
                key={`link-${idx}-${match.index}`}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-0.5 font-bold text-brand underline underline-offset-2 hover:text-blue-700"
              >
                {label}
                {href.startsWith("http") && <ExternalLink className="inline h-2.5 w-2.5" />}
              </Link>
            );
            lastIdx = match.index + match[0].length;
          }

          if (lastIdx < content.length) {
            parts.push(parseBoldItalics(content.substring(lastIdx), `${idx}-${lastIdx}`));
          }

          return parts;
        };

        const parseBoldItalics = (str: string, keyPrefix: string) => {
          const segments = str.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
          return segments.map((seg, sIdx) => {
            if (seg.startsWith("**") && seg.endsWith("**")) {
              return (
                <strong key={`${keyPrefix}-${sIdx}`} className="font-semibold text-slate-900">
                  {seg.slice(2, -2)}
                </strong>
              );
            }
            if (seg.startsWith("*") && seg.endsWith("*")) {
              return (
                <em key={`${keyPrefix}-${sIdx}`} className="italic text-slate-600">
                  {seg.slice(1, -1)}
                </em>
              );
            }
            return seg;
          });
        };

        if (isBullet) {
          const bulletContent = trimmed.replace(/^[•-]\s*/, "");
          return (
            <div key={idx} className="flex items-start gap-2 pl-0.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <div className="flex-1">{renderFormattedLine(bulletContent)}</div>
            </div>
          );
        }

        if (isNumber) {
          const match = trimmed.match(/^(\d+\.)\s*(.*)$/);
          if (match) {
            return (
              <div key={idx} className="flex items-start gap-2 pl-0.5">
                <span className="font-mono text-[11.5px] font-bold text-brand">{match[1]}</span>
                <div className="flex-1">{renderFormattedLine(match[2])}</div>
              </div>
            );
          }
        }

        return <p key={idx}>{renderFormattedLine(trimmed)}</p>;
      })}
    </div>
  );
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [thinkingStage, setThinkingStage] = useState<string>("Analyzing question...");
  const [copiedMsgId, setCopiedMsgId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentQuickReplies, setCurrentQuickReplies] = useState<string[]>([]);

  const msgIdCounterRef = useRef(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const widgetRef = useRef<HTMLElement>(null);
  const abortControllerRef = useRef<{ aborted: boolean }>({ aborted: false });
  const hasInitializedRef = useRef(false);

  // Starter English message
  const getStarterMessage = useCallback((): ChatMessage => {
    return {
      id: "starter-en",
      sender: "bot",
      text: `**Welcome to attendkh BOT.**\n\nAsk me anything about **GPS-verified clock-in**, **Cambodian payroll formulas ($ & ៛)**, or **instant pricing quotes ($1/user/mo)**.`,
      timestamp: "Online",
      cardType: "general",
      quickReplies: [
        "Calculate price for my team",
        "How does GPS Geofencing work?",
        "Cambodian Payroll & Overtime",
        "Book a demo",
      ],
    };
  }, []);

  // When user opens the chatbot for the first time, show 2-second realistic loading state before showing starter message
  useEffect(() => {
    if (!isOpen) return;

    if (messages.length === 0 && !hasInitializedRef.current) {
      hasInitializedRef.current = true;
      setIsInitialLoading(true);

      const timer = setTimeout(() => {
        setIsInitialLoading(false);
        const starter = getStarterMessage();
        setMessages([starter]);
        setCurrentQuickReplies(starter.quickReplies || []);
        playReceiveSound(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, messages.length, getStarterMessage]);

  // Click outside to close chat interface
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        widgetRef.current &&
        !widgetRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // Global Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isInitialLoading, thinkingStage]);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard?.writeText(text).then(() => {
      setCopiedMsgId(id);
      setTimeout(() => setCopiedMsgId(null), 2000);
    });
  };

  const handleSend = async (textToSend?: string) => {
    const rawText = textToSend || inputVal;
    const text = rawText.trim();
    if (!text || isTyping || isInitialLoading) return;

    playSendSound(false);

    abortControllerRef.current.aborted = true;
    abortControllerRef.current = { aborted: false };

    setInputVal("");

    msgIdCounterRef.current += 1;
    const userCount = msgIdCounterRef.current;
    const timeNow = getCurrentTimeStr();

    const userMsg: ChatMessage = {
      id: `user-msg-${userCount}`,
      sender: "user",
      text,
      timestamp: timeNow,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);
    setCurrentQuickReplies([]);

    // 1. Calculate realistic AI thinking delay (between 2.1s and 4.6s based on query)
    const baseDelay = 2100;
    const lengthFactor = Math.min(1800, (text.length * 37) % 1800);
    const charCodeJitter = ((text.charCodeAt(0) || 42) * 13) % 600;
    const totalThinkingMs = baseDelay + lengthFactor + charCodeJitter;

    setThinkingStage("Analyzing question...");

    const stage1Timer = setTimeout(() => {
      if (!abortControllerRef.current.aborted) {
        setThinkingStage("Searching documentation...");
      }
    }, 1100);

    const stage2Timer = setTimeout(() => {
      if (!abortControllerRef.current.aborted) {
        setThinkingStage("Formulating answer...");
      }
    }, Math.max(1800, totalThinkingMs - 750));

    await new Promise((res) => setTimeout(res, totalThinkingMs));

    clearTimeout(stage1Timer);
    clearTimeout(stage2Timer);

    if (abortControllerRef.current.aborted) {
      setIsTyping(false);
      return;
    }

    // 2. Query chatbot engine
    const response = queryChatbot(text);

    msgIdCounterRef.current += 1;
    const botCount = msgIdCounterRef.current;
    const botMsgId = `bot-msg-${botCount}`;
    const botMsg: ChatMessage = {
      id: botMsgId,
      sender: "bot",
      text: "",
      timestamp: timeNow,
      cardType: response.cardType,
      quoteData: response.quoteData,
      suggestedAction: response.suggestedAction,
    };

    setMessages((prev) => [...prev, botMsg]);

    // 3. Stream tokens smoothly
    const stream = simulateTokenStream(response.text, abortControllerRef.current);
    for await (const chunk of stream) {
      setMessages((prev) =>
        prev.map((msg) => (msg.id === botMsgId ? { ...msg, text: chunk } : msg))
      );
    }

    if (!abortControllerRef.current.aborted) {
      playReceiveSound(false);
      setCurrentQuickReplies(response.quickReplies || []);
    }

    setIsTyping(false);
  };

  const handleReset = () => {
    abortControllerRef.current.aborted = true;
    abortControllerRef.current = { aborted: false };
    setIsTyping(false);
    setMessages([]);
    setCurrentQuickReplies([]);
    setIsInitialLoading(true);

    setTimeout(() => {
      setIsInitialLoading(false);
      const starter = getStarterMessage();
      setMessages([starter]);
      setCurrentQuickReplies(starter.quickReplies || []);
      playReceiveSound(false);
      if (inputRef.current) inputRef.current.focus();
    }, 1800);
  };

  return (
    <aside ref={widgetRef} aria-label="attendkh BOT" className="fixed bottom-5 right-5 z-50">
      {/* 1. White & Clean Floating Launcher */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="chat-launcher"
            initial={{ scale: 0.92, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 10 }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 420, damping: 24 }}
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open attendkh BOT"
            className="group flex items-center gap-2.5 rounded-full border border-blue-100 bg-white px-4 py-2.5 text-slate-900 shadow-xl shadow-blue-600/12 transition hover:border-brand/40 hover:bg-blue-50/40 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
          >
            <div className="relative flex h-5 w-5 items-center justify-center">
              <Image src="/logo.png" alt="AttendKH (Attend) AI Support Bot" width={20} height={20} className="h-5 w-5 transition-transform duration-200 group-hover:scale-105" />
            </div>
            <span className="text-[13px] font-bold tracking-tight text-slate-900">
              attendkh BOT
            </span>
            <span className="h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-emerald-100" />
            <span className="hidden rounded bg-blue-50 px-1.5 py-0.5 font-mono text-[9px] font-bold text-brand sm:inline">
              ⌘K
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* 2. White Background & Blue Header Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 22, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="flex h-[510px] max-h-[82vh] w-[calc(100vw-32px)] flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/15 sm:w-[360px]"
          >
            {/* Rich AttendKH Brand Blue Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-[#0052FF] to-[#0047E0] px-4 py-3 text-white shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/15 p-1 backdrop-blur-xs">
                  <Image src="/logo.png" alt="AttendKH AI Support Assistant Avatar" width={22} height={22} className="h-5.5 w-5.5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 leading-none">
                    <span className="font-display text-[14px] font-bold tracking-tight text-white">
                      attendkh BOT
                    </span>
                    <span className="rounded-full bg-white/20 px-1.5 py-0.5 text-[9px] font-bold text-white backdrop-blur-xs">
                      AI Assistant
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 ring-2 ring-white/20" />
                    <span className="text-[10px] font-medium text-blue-100">Online • Phnom Penh Support</span>
                  </div>
                </div>
              </div>

              {/* Window Controls */}
              <div className="flex items-center gap-1 text-white">
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-lg p-1 text-white/80 transition hover:bg-white/15 hover:text-white"
                  title="Reset conversation"
                  aria-label="Reset conversation"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-1 text-white/80 transition hover:bg-white/15 hover:text-white"
                  title="Close (Esc)"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Pure White Message Feed Body */}
            <div className="flex-1 space-y-3.5 overflow-y-auto bg-slate-50/50 p-4 select-text">
              {/* 2-Second Realistic AI Initialization Loader */}
              {isInitialLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5 text-slate-500 py-2"
                >
                  <div className="flex items-center gap-1.5 rounded-xl border border-blue-100 bg-white px-3 py-2 shadow-2xs">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-brand [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-brand [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-brand" />
                  </div>
                  <span className="text-[12px] font-medium text-brand animate-pulse">
                    attendkh BOT is connecting...
                  </span>
                </motion.div>
              )}

              {messages.map((msg) => {
                const isUser = msg.sender === "user";
                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={`flex flex-col ${isUser ? "items-end" : "items-start"} group/msg`}
                  >
                    <div
                      className={`relative max-w-[92%] rounded-2xl px-3.5 py-2.5 text-[13px] ${
                        isUser
                          ? "bg-brand text-white rounded-tr-xs shadow-xs shadow-blue-600/15"
                          : "bg-white border border-slate-200/80 text-slate-900 rounded-tl-xs shadow-2xs"
                      }`}
                    >
                      {isUser ? (
                        <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                      ) : (
                        <div>
                          <RenderBotText text={msg.text} />

                          {msg.cardType === "quote" && (
                            <SlimQuoteCard
                              initialStaff={msg.quoteData?.staffCount || 20}
                            />
                          )}

                          {msg.suggestedAction && (
                            <div className="mt-3 border-t border-slate-100 pt-2">
                              <Link
                                href={msg.suggestedAction.href}
                                target={msg.suggestedAction.isExternal ? "_blank" : undefined}
                                rel={msg.suggestedAction.isExternal ? "noopener noreferrer" : undefined}
                                onClick={() => !msg.suggestedAction?.isExternal && setIsOpen(false)}
                                className="inline-flex items-center gap-1 rounded-lg bg-brand px-3 py-1.5 text-xs font-bold text-white transition hover:bg-blue-700 shadow-2xs"
                              >
                                {msg.suggestedAction.label}
                                <ExternalLink className="h-3 w-3" />
                              </Link>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Timestamp & copy */}
                    <div className="mt-1 flex items-center gap-1.5 px-1 font-mono text-[9px] text-slate-400">
                      <span>{msg.timestamp}</span>
                      {!isUser && (
                        <button
                          type="button"
                          onClick={() => handleCopy(msg.id, msg.text)}
                          className="opacity-0 group-hover/msg:opacity-100 transition hover:text-brand"
                          title="Copy text"
                        >
                          {copiedMsgId === msg.id ? (
                            <Check className="h-2.5 w-2.5 text-emerald-500 inline" />
                          ) : (
                            <Copy className="h-2.5 w-2.5 inline" />
                          )}
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              })}

              {/* Realistic AI Thinking Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-slate-500"
                >
                  <div className="flex items-center gap-1 rounded-xl border border-blue-100 bg-white px-2.5 py-1.5 shadow-2xs">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand" />
                  </div>
                  <span className="text-[11px] font-medium text-brand animate-pulse">
                    {thinkingStage}
                  </span>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Action Suggestion Chips on Clean Base */}
            {currentQuickReplies.length > 0 && !isTyping && !isInitialLoading && (
              <div className="no-scrollbar flex gap-1.5 overflow-x-auto border-t border-slate-100 bg-white px-3 py-2">
                {currentQuickReplies.map((reply, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => handleSend(reply)}
                    className="shrink-0 rounded-full border border-blue-200/90 bg-blue-50/40 px-3 py-1 text-[11px] font-semibold text-brand shadow-2xs transition-colors hover:bg-brand hover:text-white"
                  >
                    {reply}
                  </motion.button>
                ))}
              </div>
            )}

            {/* Clean White Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="border-t border-slate-100 bg-white p-3"
            >
              <div className="relative flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Ask anything... (e.g. '50 staff', 'GPS')"
                  disabled={isInitialLoading}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/80 py-2.5 pl-3.5 pr-10 text-[13px] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/10 focus:outline-none transition disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!inputVal.trim() || isTyping || isInitialLoading}
                  aria-label="Send"
                  className="absolute right-1.5 flex h-7 w-7 items-center justify-center rounded-lg bg-brand text-white transition hover:bg-blue-700 active:scale-95 disabled:opacity-30 shadow-2xs"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
              <div className="mt-1.5 flex items-center justify-between px-0.5 text-[9.5px] text-slate-400">
                <span className="flex items-center gap-1 text-slate-500 font-medium">
                  <Sparkles className="h-2.5 w-2.5 text-brand" />
                  <span>attendkh BOT • Phnom Penh</span>
                </span>
                <Link
                  href="/contact"
                  className="font-semibold text-brand hover:underline"
                >
                  Contact Support
                </Link>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}
