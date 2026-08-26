import { z } from "zod";

// 1. Admin Model
export interface AdminUser {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  role: "super_admin" | "editor";
  is_active: number;
  last_login_at?: string | null;
  created_at: string;
  updated_at: string;
}

export const AdminLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const AdminCreateSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.enum(["super_admin", "editor"]),
  is_active: z.number().default(1),
});

export const AdminUpdateSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email().optional(),
  password: z.string().min(8).optional(),
  role: z.enum(["super_admin", "editor"]).optional(),
  is_active: z.number().optional(),
});

// 2. Pricing Plan Model
export interface PricingPlan {
  id: string;
  slug: string;
  name: string;
  description?: string | null;
  price_monthly: number;
  price_annual: number;
  annual_factor: number;
  limits_text: string;
  features: string[];
  is_popular: number;
  badge_text?: string | null;
  cta_text: string;
  cta_url: string;
  display_order: number;
  is_active: number;
  created_at?: string;
  updated_at?: string;
}

export const PricingPlanSchema = z.object({
  id: z.string().optional(),
  slug: z.string().min(2, "Slug is required"),
  name: z.string().min(2, "Name is required"),
  description: z.string().optional().nullable(),
  price_monthly: z.number().min(0, "Monthly price must be non-negative"),
  price_annual: z.number().min(0, "Annual price must be non-negative"),
  annual_factor: z.number().min(0).max(1).default(0.8333),
  limits_text: z.string().min(1, "Limits description is required"),
  features: z.array(z.string()).min(1, "At least one feature required"),
  is_popular: z.number().default(0),
  badge_text: z.string().optional().nullable(),
  cta_text: z.string().default("Start free trial"),
  cta_url: z.string().default("/contact"),
  display_order: z.number().default(0),
  is_active: z.number().default(1),
});

// 3. Blog Post Model
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image?: string | null;
  author_name: string;
  author_role?: string | null;
  author_avatar?: string | null;
  category: string;
  tags: string[];
  status: "draft" | "published" | "scheduled" | "archived";
  published_at?: string | null;
  scheduled_at?: string | null;
  seo_title?: string | null;
  seo_description?: string | null;
  og_image?: string | null;
  view_count: number;
  created_at: string;
  updated_at: string;
}

export const BlogPostSchema = z.object({
  id: z.string().optional(),
  slug: z.string().min(2, "Slug is required"),
  title: z.string().min(3, "Title must be at least 3 characters"),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters"),
  content: z.string().min(20, "Content must be at least 20 characters"),
  cover_image: z.string().optional().nullable(),
  author_name: z.string().default("AttendKH Team"),
  author_role: z.string().default("Product & Operations"),
  author_avatar: z.string().optional().nullable(),
  category: z.string().default("Product"),
  tags: z.array(z.string()).default([]),
  status: z.enum(["draft", "published", "scheduled", "archived"]).default("draft"),
  published_at: z.string().optional().nullable(),
  scheduled_at: z.string().optional().nullable(),
  seo_title: z.string().optional().nullable(),
  seo_description: z.string().optional().nullable(),
  og_image: z.string().optional().nullable(),
});

// 4. Legal Documents Model
export interface LegalDocument {
  id: string;
  slug: "privacy" | "terms" | "cookies" | "support";
  title: string;
  version: string;
  content: string;
  is_active: number;
  changelog?: string | null;
  created_by?: string | null;
  created_at: string;
}

export const LegalDocumentSchema = z.object({
  slug: z.enum(["privacy", "terms", "cookies", "support"]),
  title: z.string().min(3),
  version: z.string().min(1),
  content: z.string().min(20),
  is_active: z.number().default(1),
  changelog: z.string().optional().nullable(),
});

// 5. Legal Agreement Record
export interface LegalAgreementRecord {
  id: string;
  document_slug: string;
  document_version: string;
  visitor_id?: string | null;
  user_id?: string | null;
  ip_hash?: string | null;
  agreed_at: string;
  metadata?: Record<string, unknown> | null;
}

// 6. Cookie Consent Model
export interface CookieConsentRecord {
  id: string;
  visitor_id: string;
  choice: "accept_all" | "reject_non_essential" | "custom";
  categories: string[];
  policy_version: string;
  timestamp: string;
  user_agent?: string | null;
  country?: string | null;
}

export const CookieConsentSchema = z.object({
  visitor_id: z.string().min(1),
  choice: z.enum(["accept_all", "reject_non_essential", "custom"]),
  categories: z.array(z.string()).min(1),
  policy_version: z.string().default("1.0"),
  user_agent: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
});

// 7. Analytics Event Model
export interface AnalyticsEvent {
  id: string;
  event_name: string;
  visitor_id: string;
  session_id: string;
  page_path: string;
  referrer?: string | null;
  traffic_source?: string | null;
  device_type?: string | null;
  browser?: string | null;
  os?: string | null;
  country?: string | null;
  city?: string | null;
  payload?: Record<string, unknown> | null;
  timestamp: string;
}

export const AnalyticsEventSchema = z.object({
  event_name: z.string().min(1),
  visitor_id: z.string().min(1),
  session_id: z.string().min(1),
  page_path: z.string().min(1),
  referrer: z.string().optional().nullable(),
  traffic_source: z.string().optional().nullable(),
  device_type: z.string().optional().nullable(),
  browser: z.string().optional().nullable(),
  os: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  payload: z.record(z.string(), z.any()).optional().nullable(),
});

// 8. Media Model
export interface MediaItem {
  id: string;
  filename: string;
  url: string;
  size_bytes: number;
  mime_type: string;
  alt_text?: string | null;
  uploaded_by?: string | null;
  created_at: string;
}

// 9. Website Settings Model
export interface WebsiteSettings {
  id: string;
  site_title: string;
  site_description: string;
  announcement_enabled: number;
  announcement_text_en: string;
  announcement_text_km: string;
  announcement_link?: string | null;
  announcement_color: string;
  contact_email: string;
  support_phone: string;
  telegram_url: string;
  maintenance_mode: number;
  analytics_enabled: number;
  currency_rate_khr: number;
  updated_at: string;
}

export const WebsiteSettingsSchema = z.object({
  site_title: z.string().min(3),
  site_description: z.string().min(10),
  announcement_enabled: z.number().min(0).max(1),
  announcement_text_en: z.string(),
  announcement_text_km: z.string(),
  announcement_link: z.string().optional().nullable(),
  announcement_color: z.string().default("brand"),
  contact_email: z.string().email(),
  support_phone: z.string(),
  telegram_url: z.string(),
  maintenance_mode: z.number().min(0).max(1),
  analytics_enabled: z.number().min(0).max(1),
  currency_rate_khr: z.number().min(1000).max(10000).default(4100),
});

// 10. System Audit Log Model
export interface AuditLog {
  id: string;
  actor_id: string;
  actor_name: string;
  actor_email: string;
  action: string;
  target_entity: string;
  target_id?: string | null;
  before_state?: Record<string, unknown> | null;
  after_state?: Record<string, unknown> | null;
  ip_address?: string | null;
  timestamp: string;
}

// 11. Leads & Demo Requests Model
export interface Lead {
  id: string;
  name: string;
  company: string;
  industry: string;
  employees_count: string;
  branches_count: string;
  email: string;
  phone_telegram: string;
  preferred_language: "km" | "en";
  message?: string | null;
  source_page?: string | null;
  status: "new" | "contacted" | "qualified" | "won" | "lost";
  admin_notes?: string | null;
  created_at: string;
  updated_at: string;
}

export const LeadCreateSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  company: z.string().min(2, "Please enter your company or business name"),
  industry: z.string().min(2, "Please select your industry"),
  employees_count: z.string().min(1, "Please select team size"),
  branches_count: z.string().default("1"),
  email: z.string().email("Please enter a valid email address"),
  phone_telegram: z.string().min(6, "Please enter your phone or Telegram contact"),
  preferred_language: z.enum(["km", "en"]).default("km"),
  message: z.string().optional().nullable(),
  source_page: z.string().optional().nullable(),
});

export const LeadStatusUpdateSchema = z.object({
  id: z.string().min(1),
  status: z.enum(["new", "contacted", "qualified", "won", "lost"]),
  admin_notes: z.string().optional().nullable(),
});

// 12. Newsletter Subscribers Model
export interface NewsletterSubscriber {
  id: string;
  email: string;
  source_page?: string | null;
  created_at: string;
}

export const NewsletterSubscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  source_page: z.string().optional().nullable(),
});
