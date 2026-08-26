import bcrypt from "bcryptjs";
import type {
  AdminUser,
  PricingPlan,
  BlogPost,
  LegalDocument,
  WebsiteSettings,
  AnalyticsEvent,
  CookieConsentRecord,
} from "./schema";

export async function getInitialSeedData() {
  // Password hash for 'AttendKH@2026!Admin'
  const defaultPasswordHash = await bcrypt.hash("AttendKH@2026!Admin", 10);
  const now = new Date().toISOString();

  const admins: AdminUser[] = [
    {
      id: "admin-super-01",
      name: "Sopheap Chan",
      email: "admin@attendkh.com",
      password_hash: defaultPasswordHash,
      role: "super_admin",
      is_active: 1,
      last_login_at: now,
      created_at: now,
      updated_at: now,
    },
    {
      id: "admin-editor-01",
      name: "Dara Rith",
      email: "editor@attendkh.com",
      password_hash: defaultPasswordHash,
      role: "editor",
      is_active: 1,
      last_login_at: null,
      created_at: now,
      updated_at: now,
    },
  ];

  const pricingPlans: PricingPlan[] = [
    {
      id: "plan-starter",
      slug: "starter",
      name: "Starter",
      description: "Essential GPS clock-in and attendance roster for boutique stores and single-branch teams.",
      price_monthly: 1.5,
      price_annual: 1.25,
      annual_factor: 0.8333,
      limits_text: "Up to 20 users",
      features: [
        "GPS attendance & geofenced radius",
        "Live selfie verification",
        "Leave tracking & balances",
        "Mobile app for iOS & Android",
        "Basic attendance reports",
        "Telegram notifications",
      ],
      is_popular: 0,
      badge_text: null,
      cta_text: "Start free trial",
      cta_url: "/contact?plan=starter",
      display_order: 1,
      is_active: 1,
      created_at: now,
      updated_at: now,
    },
    {
      id: "plan-growth",
      slug: "growth",
      name: "Growth",
      description: "Complete attendance & automated Cambodian payroll engine for fast-growing businesses.",
      price_monthly: 2.5,
      price_annual: 2.08,
      annual_factor: 0.8333,
      limits_text: "Up to 150 users",
      features: [
        "Everything in Starter",
        "Full Cambodian payroll engine",
        "Overtime multipliers (1.5x, 2.0x)",
        "Grace period late deductions",
        "Bilingual PDF payslips (USD & KHR)",
        "NSSF export-ready reports",
        "Shift planner & split shifts",
        "Multi-branch console",
      ],
      is_popular: 1,
      badge_text: "Most Popular",
      cta_text: "Start free trial",
      cta_url: "/contact?plan=growth",
      display_order: 2,
      is_active: 1,
      created_at: now,
      updated_at: now,
    },
    {
      id: "plan-scale",
      slug: "scale",
      name: "Scale",
      description: "Advanced controls, automated approvals, and custom policies for established retail chains.",
      price_monthly: 3.5,
      price_annual: 2.92,
      annual_factor: 0.8333,
      limits_text: "Up to 500 users",
      features: [
        "Everything in Growth",
        "QR Kiosk mode with tablet lock",
        "Unlimited branch locations",
        "Multi-level approval workflows",
        "Expense claims & reimbursements",
        "Custom holiday calendars",
        "Priority 24/7 Telegram support",
        "Dedicated account manager",
      ],
      is_popular: 0,
      badge_text: "Best for Chains",
      cta_text: "Start free trial",
      cta_url: "/contact?plan=scale",
      display_order: 3,
      is_active: 1,
      created_at: now,
      updated_at: now,
    },
    {
      id: "plan-enterprise",
      slug: "enterprise",
      name: "Enterprise",
      description: "Tailored infrastructure, custom ERP integrations, on-premise sync, and dedicated SLAs.",
      price_monthly: 5.0,
      price_annual: 4.17,
      annual_factor: 0.8333,
      limits_text: "500+ users / Custom",
      features: [
        "Custom staff limits & branches",
        "Custom banking & payroll exports",
        "Biometric hardware integration",
        "Tailored Cambodian labor policies",
        "Single Sign-On (SSO / SAML)",
        "On-premise / private cloud deploy",
        "Custom feature development",
        "99.9% uptime SLA guarantee",
      ],
      is_popular: 0,
      badge_text: "Custom",
      cta_text: "Talk to sales",
      cta_url: "/contact?plan=enterprise",
      display_order: 4,
      is_active: 1,
      created_at: now,
      updated_at: now,
    },
  ];

  const blogPosts: BlogPost[] = [
    {
      id: "post-01",
      slug: "how-gps-geofencing-stops-buddy-punching",
      title: "How GPS Geofencing & Live Selfie Verification Stop Buddy Punching in Cambodia",
      excerpt:
        "Traditional fingerprint scanners and punch cards cost Cambodian retailers millions in unworked hours. Discover how smartphone geofencing modernizes staff verification.",
      content: `## The Hidden Cost of Attendance Fraud

For Cambodian retail chains, coffee shops, and hospitality groups, traditional attendance systems present persistent operational vulnerabilities:

1. **Fingerprint scanners fail** when workers handle moisture, kitchen ingredients, or cleaning chemicals.
2. **Card swiping invites buddy punching**, where one employee clocks in on behalf of late colleagues.
3. **Paper sign-in sheets** require manual transcription by HR managers at the end of each month, consuming days of tedious work.

\`\`\`
Traditional Transcribe: 3 Days/Month
AttendKH Verified GPS: Real-Time Instant Sync
\`\`\`

## How Geofencing Operates in AttendKH

AttendKH allows business owners and HR directors to designate exact physical radius zones (from 50m to 200m) for every branch location:

- **Mock Location Defense**: Prevents Android and iOS GPS spoofing apps from faking attendance coordinates.
- **Biometric Photo Proof**: Staff snap a live selfie at clock-in, attaching cryptographic visual timestamps to each punch record.
- **Offline Resilient Mode**: If cellular connectivity drops, punches are securely cached in local device storage and synchronized as soon as network returns.

> "Buddy punching stopped on our very first week of rollout across 6 coffee shop locations in Phnom Penh." — *Dara Chan, Operations Director*

## Immediate Return on Investment

Implementing tamper-proof GPS clock-in delivers measurable bottom-line improvements:

- **100% elimination** of ghost hours and buddy clock-ins.
- **90% reduction** in manual payroll reconciliation time.
- **Instant visibility** for store managers on late arrivals and unattended shifts.
`,
      cover_image: "/blog/geofence-banner.webp",
      author_name: "Sopheap Chan",
      author_role: "Head of Product",
      author_avatar: "/avatars/sopheap.webp",
      category: "Attendance",
      tags: ["GPS Geofencing", "Security", "Retail Operations", "Cambodia"],
      status: "published",
      published_at: "2026-08-10T08:00:00Z",
      scheduled_at: null,
      seo_title: "How GPS Geofencing Stops Buddy Punching in Cambodian Retail",
      seo_description:
        "Learn how tamper-proof GPS radius geofencing and live selfie checks eliminate time theft in Cambodian businesses.",
      og_image: "/blog/geofence-banner.webp",
      view_count: 1420,
      created_at: now,
      updated_at: now,
    },
    {
      id: "post-02",
      slug: "cambodian-labor-law-overtime-payroll-guide",
      title: "Cambodian Labor Law: Overtime Multipliers, Grace Periods & NSSF Calculations",
      excerpt:
        "A practical handbook for HR managers and business owners calculating overtime (1.5x vs 2.0x), per-minute late penalties, and bilingual payslips in USD & KHR.",
      content: `## Navigating Cambodian Payroll Standards

Under Cambodia's Ministry of Labour and Vocational Training guidelines, payroll calculations require strict adherence to standard formulas:

### 1. Hourly Rate Determination
Standard full-time employment is calculated using either fixed work days (typically 26 days) or actual monthly calendar days:

$$\\text{Hourly Rate} = \\frac{\\text{Base Monthly Salary}}{\\text{Working Days} \\times 8 \\text{ hours}}$$

### 2. Overtime Rate Categories
- **Standard Working Days**: Overtime hours worked beyond normal shift hours are remunerated at **1.5×** the hourly rate.
- **Night Work (22:00 – 06:00)**: Attracts an additional premium.
- **Weekly Rest Days & Official Public Holidays**: Remunerated at **2.0×** the base hourly rate.

### 3. Grace Periods vs. Per-Minute Deductions
Many Cambodian businesses enforce a 15-minute grace window. If an employee arrives beyond 15 minutes, late deductions apply to the entire late duration at the calculated per-minute rate.

\`\`\`
Deduction = (Late Minutes - Grace) × (Hourly Rate / 60) × Rate Multiplier
\`\`\`

## Why Dual-Currency Matters

With transactions occurring in both US Dollars (USD) and Khmer Riel (KHR), AttendKH automatically provides bilingual PDF payslips showing both currencies with custom bank export templates.
`,
      cover_image: "/blog/payroll-law.webp",
      author_name: "Dara Rith",
      author_role: "HR & Legal Advisor",
      author_avatar: "/avatars/dara.webp",
      category: "Payroll",
      tags: ["Payroll", "Labor Law", "NSSF", "Overtime", "USD KHR"],
      status: "published",
      published_at: "2026-08-15T09:30:00Z",
      scheduled_at: null,
      seo_title: "Cambodian Labor Law Overtime & Payroll Guide — AttendKH",
      seo_description:
        "Complete guide to calculating overtime multipliers, late penalties, and dual-currency payslips under Cambodian labor standards.",
      og_image: "/blog/payroll-law.webp",
      view_count: 2180,
      created_at: now,
      updated_at: now,
    },
    {
      id: "post-03",
      slug: "multi-branch-retail-management-cambodia",
      title: "Managing Multi-Branch Operations: Scaling from 1 to 50 Locations",
      excerpt:
        "How multi-unit restaurant and retail operators in Phnom Penh, Siem Reap, and Sihanoukville maintain synchronized labor oversight from a single command console.",
      content: `## The Multi-Branch Management Challenge

As businesses expand across provinces, decentralized operations create information silos. Branch managers struggle with shift scheduling, while headquarters lacks real-time labor cost visibility.

## The Four-Tier Access Model

AttendKH solves this through granular hierarchy:
1. **Super Admin**: System configuration, enterprise integrations, and master billing.
2. **Owner / HR Admin**: Complete cross-branch visibility, policy enforcement, and final payroll sign-off.
3. **Branch Manager**: Local shift approvals, leave validations, and live on-site roster monitoring.
4. **Staff / Employee**: Mobile self-service clock-in, leave requests, and digital payslip downloads.

## Shift Flexibility
- Support for overnight shifts crossing midnight.
- Split shifts for F&B lunch and dinner rushes.
- Branch-specific geofence radii and operating hours.
`,
      cover_image: "/blog/multi-branch.webp",
      author_name: "Sopheap Chan",
      author_role: "Head of Product",
      author_avatar: "/avatars/sopheap.webp",
      category: "Operations",
      tags: ["Multi-Branch", "Retail Management", "Scaling", "Operations"],
      status: "published",
      published_at: "2026-08-20T10:00:00Z",
      scheduled_at: null,
      seo_title: "Multi-Branch Retail Management in Cambodia — AttendKH",
      seo_description:
        "Scale your Cambodian business across multiple locations with synchronized attendance and branch-level shift management.",
      og_image: "/blog/multi-branch.webp",
      view_count: 980,
      created_at: now,
      updated_at: now,
    },
  ];

  const legalDocuments: LegalDocument[] = [
    {
      id: "doc-privacy-v1",
      slug: "privacy",
      title: "Privacy Policy",
      version: "1.0",
      content: `## 1. Introduction

AttendKH ("we", "our", or "us") is dedicated to safeguarding the privacy and confidential information of Cambodian organizations, employees, and website visitors. This Privacy Policy details how we collect, store, utilize, and protect data across our website and services.

## 2. Information We Collect

### A. Website Visitors
- **Usage & Event Data**: Page navigation paths, approximate geographic region (Country/City), referral source, device type, browser, and timestamp.
- **Cookie Consent Choices**: Accepted consent categories (Necessary, Analytics, Functional, Marketing).
- We do **not** collect precise GPS coordinates, invasive browser fingerprints, or sensitive personal data from public website visitors.

### B. Registered Accounts & Inquiries
- Business contact name, company name, corporate email address, phone number, branch count, and estimated team size submitted via demo or contact forms.

## 3. How We Use Information
- To deliver, maintain, and optimize our landing page performance.
- To respond to sales inquiries, product demonstrations, and technical support tickets.
- To analyze aggregated, non-personally identifiable traffic metrics to improve website usability.

## 4. Data Security & Storage
All data is stored in enterprise-grade cloud environments with AES-256 encryption at rest and TLS 1.3 in transit. We maintain strict role-based access control (RBAC).

## 5. Your Rights
You may request access to, correction of, or deletion of your information by contacting our Data Protection Officer at **privacy@attendkh.com**.`,
      is_active: 1,
      changelog: "Initial production release of AttendKH Privacy Policy.",
      created_by: "Sopheap Chan",
      created_at: "2026-08-01T00:00:00Z",
    },
    {
      id: "doc-terms-v1",
      slug: "terms",
      title: "Terms of Service",
      version: "1.0",
      content: `## 1. Acceptance of Terms

By accessing or utilizing the AttendKH website ("Service"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you must not access the Service.

## 2. Permitted Use
You agree to use AttendKH solely for legitimate organizational attendance, payroll estimation, and product evaluation purposes. You shall not:
- Reverse-engineer, decompile, or disassemble any proprietary components of the website.
- Attempt unauthorized access to restricted administrative systems or servers.
- Transmit malicious code, viruses, or disruptive network requests.

## 3. Subscription & Billing Content
Pricing tiers displayed on this website represent standard catalog offerings. Official enterprise service level agreements (SLAs), custom billing cycles, and contractual terms are formalized via mutual service agreements.

## 4. Intellectual Property
All trademarks, logos, system interfaces, visual designs, and copy on AttendKH are the exclusive intellectual property of AttendKH. All rights reserved.

## 5. Governing Law
These Terms are governed by and construed in accordance with the laws of the Kingdom of Cambodia.`,
      is_active: 1,
      changelog: "Initial production release of AttendKH Terms of Service.",
      created_by: "Sopheap Chan",
      created_at: "2026-08-01T00:00:00Z",
    },
    {
      id: "doc-cookies-v1",
      slug: "cookies",
      title: "Cookie & Consent Policy",
      version: "1.0",
      content: `## 1. What Are Cookies?

Cookies are small data files placed on your computer or mobile device when you browse our website. They enable website reliability, security, and preference retention.

## 2. Cookie Categories We Use

- **Necessary Cookies**: Essential for site operation, secure sessions, and recording your cookie preferences. These cannot be disabled.
- **Analytics Cookies**: Collect anonymous aggregate metrics regarding page visits, session duration, and navigation flow to help us improve user experience.
- **Functional Cookies**: Remember user preferences such as your language selection (English vs. Khmer) and currency toggle (USD vs. KHR).
- **Marketing Cookies**: Measure the performance of marketing campaigns and partner referrals.

## 3. Managing Your Preferences
You have full control over non-essential cookie categories. You can modify or revoke your consent at any time by clicking the **"Cookie Settings"** link in our website footer.`,
      is_active: 1,
      changelog: "Initial production release of AttendKH Cookie Policy.",
      created_by: "Sopheap Chan",
      created_at: "2026-08-01T00:00:00Z",
    },
    {
      id: "doc-support-v1",
      slug: "support",
      title: "Support & SLA Policy",
      version: "1.0",
      content: `## 1. Technical Support Overview

AttendKH provides multi-channel customer support for Cambodian businesses via Telegram, Email, and Phone hotline.

## 2. Support Availability
- **Standard Support**: Monday to Saturday, 8:00 AM – 6:00 PM (ICT).
- **Priority Enterprise Support**: 24/7 dedicated Telegram emergency hotline with guaranteed 15-minute response SLA.

## 3. Contact Details
- **Telegram Hotline**: @attendkh
- **Email Support**: support@attendkh.com
- **Phone**: +855 23 999 888`,
      is_active: 1,
      changelog: "Initial release of Support SLA policy.",
      created_by: "Sopheap Chan",
      created_at: "2026-08-01T00:00:00Z",
    },
  ];

  const settings: WebsiteSettings = {
    id: "default",
    site_title: "AttendKH — Smart GPS attendance & automated payroll for Cambodia",
    site_description:
      "GPS-verified attendance and one-click payroll in USD and KHR. Built in Phnom Penh for Cambodian businesses, from one branch to fifty.",
    announcement_enabled: 1,
    announcement_text_en:
      "🚀 New Feature: Offline QR Kiosk mode is now live for all multi-branch stores!",
    announcement_text_km:
      "🚀 មុខងារថ្មី៖ មុខងារ QR Kiosk ក្រៅបណ្តាញដំណើរការហើយ សម្រាប់គ្រប់សាខាទាំងអស់!",
    announcement_link: "/attendance",
    announcement_color: "brand",
    contact_email: "hello@attendkh.com",
    support_phone: "+855 23 999 888",
    telegram_url: "https://t.me/attendkh",
    maintenance_mode: 0,
    analytics_enabled: 1,
    currency_rate_khr: 4100,
    updated_at: now,
  };

  // Generate realistic analytics events across last 14 days for dashboard charts
  const analyticsEvents: AnalyticsEvent[] = [];
  const cookieConsents: CookieConsentRecord[] = [];

  const pages = ["/", "/attendance", "/payroll", "/multi-branch", "/pricing", "/customers", "/faq", "/about", "/contact", "/blog"];
  const referrers = [
    { source: "Google Search", ref: "https://www.google.com/" },
    { source: "Telegram", ref: "https://t.me/" },
    { source: "Facebook", ref: "https://www.facebook.com/" },
    { source: "Direct", ref: null },
    { source: "LinkedIn", ref: "https://www.linkedin.com/" },
  ];
  const devices = [
    { type: "Mobile", os: "iOS", browser: "Safari" },
    { type: "Mobile", os: "Android", browser: "Chrome" },
    { type: "Desktop", os: "macOS", browser: "Chrome" },
    { type: "Desktop", os: "Windows", browser: "Edge" },
    { type: "Desktop", os: "macOS", browser: "Safari" },
  ];
  const cities = ["Phnom Penh", "Siem Reap", "Battambang", "Sihanoukville", "Kampot"];

  // 14 days of realistic traffic data
  for (let dayOffset = 13; dayOffset >= 0; dayOffset--) {
    const dayDate = new Date();
    dayDate.setDate(dayDate.getDate() - dayOffset);

    // 40-70 visitors per day
    const dailyVisitors = Math.floor(45 + Math.sin(dayOffset) * 15 + Math.random() * 15);

    for (let v = 0; v < dailyVisitors; v++) {
      const visitorId = `v_${dayOffset}_${v}_${Math.random().toString(36).substring(2, 7)}`;
      const sessionId = `s_${dayOffset}_${v}_${Math.random().toString(36).substring(2, 7)}`;
      const refObj = referrers[Math.floor(Math.random() * referrers.length)];
      const devObj = devices[Math.floor(Math.random() * devices.length)];
      const city = cities[Math.floor(Math.random() * cities.length)];

      const hour = Math.floor(8 + Math.random() * 14);
      const minute = Math.floor(Math.random() * 60);
      dayDate.setHours(hour, minute, 0);
      const eventTime = dayDate.toISOString();

      // Cookie consent
      const consentChoice = Math.random() > 0.15 ? "accept_all" : Math.random() > 0.5 ? "custom" : "reject_non_essential";
      cookieConsents.push({
        id: `consent_${visitorId}`,
        visitor_id: visitorId,
        choice: consentChoice,
        categories: consentChoice === "accept_all" ? ["necessary", "analytics", "functional", "marketing"] : ["necessary"],
        policy_version: "1.0",
        timestamp: eventTime,
        user_agent: `${devObj.browser} on ${devObj.os}`,
        country: "Cambodia",
      });

      // Page view 1: Landing page
      analyticsEvents.push({
        id: `evt_${visitorId}_0`,
        event_name: "page_view",
        visitor_id: visitorId,
        session_id: sessionId,
        page_path: "/",
        referrer: refObj.ref,
        traffic_source: refObj.source,
        device_type: devObj.type,
        browser: devObj.browser,
        os: devObj.os,
        country: "Cambodia",
        city,
        payload: { path: "/" },
        timestamp: eventTime,
      });

      // Additional pages viewed in session
      const extraPages = Math.floor(1 + Math.random() * 3);
      for (let p = 0; p < extraPages; p++) {
        const nextPath = pages[Math.floor(Math.random() * pages.length)];
        analyticsEvents.push({
          id: `evt_${visitorId}_${p + 1}`,
          event_name: "page_view",
          visitor_id: visitorId,
          session_id: sessionId,
          page_path: nextPath,
          referrer: "/",
          traffic_source: refObj.source,
          device_type: devObj.type,
          browser: devObj.browser,
          os: devObj.os,
          country: "Cambodia",
          city,
          payload: { path: nextPath },
          timestamp: new Date(dayDate.getTime() + (p + 1) * 45000).toISOString(),
        });
      }

      // Conversion events
      if (Math.random() > 0.45) {
        analyticsEvents.push({
          id: `evt_conv_${visitorId}_pricing`,
          event_name: "pricing_view",
          visitor_id: visitorId,
          session_id: sessionId,
          page_path: "/pricing",
          referrer: "/",
          traffic_source: refObj.source,
          device_type: devObj.type,
          browser: devObj.browser,
          os: devObj.os,
          country: "Cambodia",
          city,
          payload: { plan: "growth", currency: "USD" },
          timestamp: new Date(dayDate.getTime() + 120000).toISOString(),
        });

        if (Math.random() > 0.5) {
          analyticsEvents.push({
            id: `evt_conv_${visitorId}_signup`,
            event_name: "signup_clicked",
            visitor_id: visitorId,
            session_id: sessionId,
            page_path: "/contact",
            referrer: "/pricing",
            traffic_source: refObj.source,
            device_type: devObj.type,
            browser: devObj.browser,
            os: devObj.os,
            country: "Cambodia",
            city,
            payload: { cta: "start_free_trial", plan: "growth" },
            timestamp: new Date(dayDate.getTime() + 180000).toISOString(),
          });
        }
      }
    }
  }

  return {
    admins,
    pricingPlans,
    blogPosts,
    legalDocuments,
    settings,
    analyticsEvents,
    cookieConsents,
  };
}
