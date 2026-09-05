# AttendKH Blog Authoring Guide for AI Assistants & Engineers

> **Audience**: Future AI assistants, content engineers, and developers.  
> **Trigger**: Whenever the user says *"please write a blog post"*, *"create a new blog article"*, or *"add a topic about X"*.  
> **Primary Goal**: Produce publication-ready, deeply researched, visually compelling, and SEO/AEO-optimized blog posts tailored to the Cambodian enterprise landscape with 100% trilingual parity (English, Khmer, Chinese).

---

## 1. Brand Identity & Persona

- **Company**: **AttendKH** (also known as Attend / អាថេន).
- **Domain**: Cloud-first attendance verification (GPS geofencing + live selfie checks, QR door kiosk) and automated statutory payroll software designed specifically for Cambodia.
- **Value Proposition**: **$1 USD per active employee per month**, all features included, zero hardware lock-in, multi-branch enabled, instant Telegram bot alerts, and NBC Bakong KHQR batch salary disbursal.
- **Default Author Persona**:
  ```ts
  author_name: "Chhunsour Seng",
  author_role: "Product Builder",
  author_role_km: "អ្នកបង្កើតផលិតផល",
  author_role_zh: "产品架构师",
  author_avatar: "/avatars/chhunsour.png",
  ```
- **Voice & Tone**: Pragmatic, authoritative, and deeply conversant with Cambodian labor regulations and local business realities. Avoid superficial generic software fluff. Cite specific Cambodian labor codes, ministerial prakas, and statutory formulas.

---

## 2. File Architecture & Data Layer

Blog posts are stored as typed TypeScript objects:

| File | Purpose |
| :--- | :--- |
| `src/lib/site-content.ts` | Houses `BlogPost` & `BlogPostFAQ` interfaces and the base 5 core blog posts. |
| `src/lib/blog-data-extended.ts` | Houses extended high-intent SEO/AEO blog posts (`extendedBlogPosts: BlogPost[]`). |
| `src/app/(site)/blog/page.tsx` | Main blog directory listing with category filtering and search. |
| `src/app/(site)/blog/[slug]/page.tsx` | Individual blog post reader page (Server Component with metadata & JSON-LD). |
| `src/app/(site)/blog/[slug]/blog-post-client.tsx` | Interactive client reader supporting instant EN/KM/ZH switching, word count, read time, and social share. |
| `public/blog/` | Local directory storing all high-resolution 16:9 contextual blog images (`.jpg`). |

### The `BlogPost` TypeScript Schema

Every post object **must** conform to this exact shape:

```typescript
export interface BlogPost {
  id: string;                               // Unique ID, e.g. "post-bakong-payroll"
  slug: string;                             // URL slug, e.g. "bakong-khqr-payroll-bulk-salary-disbursal-cambodia"
  title: string;                            // English title
  title_km: string;                         // Khmer title
  title_zh: string;                         // Chinese title
  excerpt: string;                          // 1-2 sentence English summary
  excerpt_km: string;                       // Khmer summary
  excerpt_zh: string;                       // Chinese summary
  key_takeaways: string[];                  // 4 key bullet points (EN)
  key_takeaways_km: string[];               // 4 key bullet points (KM)
  key_takeaways_zh: string[];               // 4 key bullet points (ZH)
  content: string;                          // Full markdown body (EN)
  content_km: string;                       // Full markdown body (KM)
  content_zh: string;                       // Full markdown body (ZH)
  cover_image: string;                      // Path in public/blog/, e.g. "/blog/bakong-payroll.jpg"
  author_name: string;                      // "Chhunsour Seng"
  author_role: string;                      // "Product Builder"
  author_role_km: string;                   // "អ្នកបង្កើតផលិតផល"
  author_role_zh: string;                   // "产品架构师"
  author_avatar: string;                    // "/avatars/chhunsour.png"
  category: string;                         // "Attendance" | "Payroll" | "Labor Law" | "Operations"
  category_km: string;                      // "វត្តមាន" | "ប្រាក់ខែ" | "ច្បាប់ការងារ" | "ប្រតិបត្តិការ"
  category_zh: string;                      // "考勤管理" | "薪酬核算" | "劳工法规" | "运营管理"
  tags: string[];                           // Array of strings (EN)
  tags_km: string[];                        // Array of strings (KM)
  tags_zh: string[];                        // Array of strings (ZH)
  status: "published" | "draft";
  published_at: string;                     // ISO-8601 string: "2026-08-26T10:00:00Z"
  scheduled_at: null;
  seo_title: string;                        // Under 65 chars, includes keyword & "— AttendKH"
  seo_description: string;                  // Under 160 chars, compelling meta summary
  og_image: string;                         // Same as cover_image
  view_count: number;                       // e.g. 2710
  faqs: BlogPostFAQ[];                      // 3-4 structured Q&As in EN, KM, ZH for FAQPage schema
  created_at: string;
  updated_at: string;
}
```

---

## 3. Mandatory Formatting & Writing Rules

When writing `content`, `content_km`, and `content_zh`, you **must** apply all of the following elements:

### A. Numbered Section Headings
Organize every post into 5 to 6 numbered sections for high scannability:
- EN: `## 1. Title`, `## 2. Title`, ..., `## 6. Conclusion & CTA`
- KM: `## ១. ចំណងជើង`, `## ២. ចំណងជើង`, ..., `## ៦. សេចក្តីសន្និដ្ឋាន`
- ZH: `## 1. 标题`, `## 2. 标题`, ..., `## 6. 总结与行动指南`

### B. In-Content Contextual Blog Image
Every post **must** embed its contextual image at the very top of `content`, `content_km`, and `content_zh` using standard markdown:
```markdown
![Descriptive keyword-rich image caption](/blog/image-name.jpg)
```
- For Khmer: `![ការពិពណ៌នារូបភាពជាភាសាខ្មែរ](/blog/image-name.jpg)`
- For Chinese: `![包含核心关键词的中文图片描述](/blog/image-name.jpg)`

### C. Rich Internal Linking (Mandatory 4–6 Links per Post)
Never let an article become an SEO dead-end. Weave natural internal hyperlinks into the text:
1. **Core Feature Pages**:
   - `/attendance` — GPS geofencing, selfie anti-tamper, shared tablet QR kiosk.
   - `/payroll` — Automated salary engine, overtime calculations, bilingual payslips.
   - `/multi-branch` — Centralized branch management, shift rostering, regional oversight.
2. **Conversion & Onboarding Pages**:
   - `/pricing` — Transparent $1/employee/month pricing.
   - `/downloads` — iOS & Android mobile apps.
   - `/contact` — Schedule live demonstration with Phnom Penh engineers.
   - `/customers` — Real Cambodian case studies and testimonials.
3. **Industry Vertical Pages**:
   - `/solutions/construction-logistics` — Field teams, offline syncing, dispersed workers.
   - `/solutions/retail-hospitality` — Restaurants, cafes, retail chains.
4. **Cross-Linking Related Blog Posts**:
   - `/blog/cambodian-labor-law-overtime-payroll-and-nssf-guide`
   - `/blog/how-gps-geofencing-and-selfie-checks-stop-buddy-punching`
   - `/blog/multi-branch-shift-rostering-restaurants-cafes`
   - `/blog/cambodian-public-holidays-and-leave-entitlements-guide`
   - `/blog/remote-workforce-attendance-construction-logistics-cambodia`
   - `/blog/best-attendance-payroll-software-cambodia-industry-guide`
   - `/blog/cambodian-seniority-indemnity-calculation-guide-udc-fdc`
   - `/blog/cambodia-tax-on-salary-brackets-gdt-payroll-handbook`
   - `/blog/bakong-khqr-payroll-bulk-salary-disbursal-cambodia`
   - `/blog/garment-manufacturing-attendance-overtime-compliance-cambodia-sez`
   - `/blog/fdc-vs-udc-employment-contracts-cambodian-labor-law`

### D. Typography Formatting: Bold, Italics, Quotes & Math
- **Bold (`**text**`)**: Highlight metrics, key currencies (**USD ($)**, **KHR (៛)**), time limits (**2 hours/day**, **48 hours/week**), and critical takeaways.
- **Italics (`*text*`)**: Use for statutory citations (*Article 139*, *Prakas 443/18*, *Prakas 442*), Khmer legal terms (*ប្រាក់បំណាច់បញ្ចប់កិច្ចសន្យា*), and book/law names (*Cambodian Labour Law*).
- **Blockquotes (`>`)**: Use for audit warnings, regulatory cautions, or client quotes:
  ```markdown
  > **Critical Audit Warning**: Overtime must always remain strictly **voluntary**. Forcing employees to perform overtime without documented written consent constitutes a *Zero Tolerance* violation under BFC guidelines.
  ```
- **Comparison & Statutory Tables**: Include a Markdown table in Section 2 or 3 comparing options, statutory brackets, or penalty tiers.
- **Mathematical Formulas**: When discussing payroll, severance, or taxes, present formulas clearly:
  ```markdown
- **Zero Raw Code Blocks (Banned)**: Never wrap calculations, financial ROI breakdowns, shift schedules, timelines, or workflows in triple backtick code blocks (` ``` `). They generate ugly `<pre>` terminal boxes with horizontal scrollbars. Instead, format all calculations, ROI breakdowns, and step-by-step workflows as styled blockquotes (`>`), bold bulleted lists, or Markdown tables.

---

## 4. Cambodian Regulatory & Industrial Knowledge Base

You must ground every article in authentic Cambodian business and legal context. Use these official references:

### A. Ministry of Labour and Vocational Training (MoLVT)
- **Standard Workweek**: 48 hours maximum (8 hours/day × 6 days) under *Article 137*.
- **Overtime Limits**: Strictly capped at **maximum 2 hours per day** (*Article 139*), voluntary, with prior employee consent.
- **Overtime Pay Multipliers**:
  - Regular day shift overtime: **150% (1.5×)** of base hourly rate.
  - Night shift overtime (22:00–06:00): **200% (2.0×)** of base hourly rate.
  - Sunday / weekly rest day: **200% (2.0× / Double Pay)**.
  - Official Public Holidays: **200% (2.0×)** plus regular holiday compensation.
- **Hourly Wage Conversion**: Standard benchmark is monthly base salary divided by 26 working days, divided by 8 hours (`Hourly Rate = Base Salary / 26 / 8`).
- **Employment Contracts (FDC vs. UDC)**:
  - Fixed Duration Contracts (FDC) cannot exceed a **cumulative total of 2 years** (24 months) across all renewals (*Articles 67, 73*).
  - Exceeding 2 cumulative years automatically converts the contract into an Undetermined Duration Contract (UDC) by law.
  - FDC completion requires a mandatory **5% severance indemnity** on all gross wages paid throughout the contract (*Article 73*).
  - UDC termination requires written notice from 7 days (service < 6 mos) up to 3 months (service > 10 yrs) under *Article 75*.
  - Statutory probation caps: **1 month** (unskilled), **2 months** (specialized), **3 months** (managers/technical) under *Article 68*.
- **Seniority Indemnity (UDC)**: Under *Prakas 443/18*, permanent employees receive **15 days of wages per year**, disbursed semi-annually (7.5 days in June, 7.5 days in December).
- **Annual Leave**: 18 working days per year for full-time staff (*Article 166*), increasing by +1 additional day for every 3 years of continuous tenure.

### B. General Department of Taxation (GDT)
- **Monthly Tax on Salary (ToS)** progressive brackets (resident employees):
  - ៛0 to ៛1,500,000 (~$375): **0%** (tax-exempt floor)
  - ៛1,500,001 to ៛2,000,000: **5%** (quick deduction: ៛75,000)
  - ៛2,000,001 to ៛8,500,000: **10%** (quick deduction: ៛175,000)
  - ៛8,500,001 to ៛12,500,000: **15%** (quick deduction: ៛600,000)
  - Above ៛12,500,000: **20%** (quick deduction: ៛1,225,000)
- **Family Relief Deductions**: **៛150,000 KHR (~$37.50)** per dependent minor child (under 18 or under 25 in school) and homemaker spouse.
- **Currency Conversion**: Under GDT rules, monthly salary tax calculation must use the **official NBC market exchange rate issued on the 15th of the taxable month**.
- **Non-Residents**: Subject to a **flat 20%** withholding tax on gross Cambodian-source income.
- **Fringe Benefit Tax (FBT)**: Flat 20% on fair market value of employer-provided housing, private vehicles, utilities, etc.

### C. National Social Security Fund (NSSF / ប.ស.ស.)
- **Occupational Risk (Work Injury)**: 0.8% of gross wages (100% employer paid).
- **Health Care**: 2.6% employer + 2.6% employee (5.2% total).
- **Pension Scheme**: 2.0% employer + 2.0% employee (4.0% total).
- Statutory wage calculation ceiling is capped at approximately 1,200,000 KHR.

### D. Banking & Fintech Infrastructure
- **National Bank of Cambodia (NBC) Bakong**: National blockchain-powered settlement network enabling real-time, zero-fee interbank salary payments via **KHQR**.
- Supported banks: ABA Bank (ABA PayWay / corporate batch), ACLEDA Bank (ACLEDA Corporate / Mobile), Canadia Bank, Sathapana Bank, J Trust Royal, Wing Bank, AMK, KB Prasac, TrueMoney.
- Dual-currency: Seamless salary disbursal in **US Dollars ($)** or **Khmer Riel (៛)**.

---

## 5. Workflow: Creating a New Blog Post Step-by-Step

When the user asks you to create or write a blog post:

1. **Check Existing Posts & Select Topic**:
   - Inspect `src/lib/blog-data-extended.ts` and `src/lib/site-content.ts` to avoid duplicating existing slugs.
   - Choose a high-intent topic (e.g., labor dispute resolution, retail shift roster tips, multi-currency accounting, NSSF pension filing).

2. **Select or Create the Cover Image**:
   - Verify if a suitable image exists in `public/blog/`.
   - If a new image is needed, generate or place a high-definition 16:9 photo in `public/blog/<slug>.jpg` depicting real Cambodian commercial environments (Phnom Penh office, coffee shop, garment factory, construction site, bank app).

3. **Draft the Post Object in `src/lib/blog-data-extended.ts`**:
   - Add the new object to `extendedBlogPosts`.
   - Fill all fields: `title`, `title_km`, `title_zh`, `excerpt`, `key_takeaways`, `content`, `cover_image`, `faqs`, `tags`, etc.
   - Ensure the embedded image is placed at line 1 of `content`, `content_km`, and `content_zh`.
   - Include 4–6 internal links to `/attendance`, `/payroll`, `/pricing`, `/downloads`, `/contact`, and related blog slugs.

4. **Syntax Pre-Flight Check**:
   - **CRITICAL**: Check the closing of template literals. Ensure you write `\`,`, not `\`,,\`. A double comma breaks TypeScript compilation!
   - Ensure all markdown backticks inside code blocks are escaped if inside template literals (` \`\`\` `).

5. **Typecheck & Verification**:
   - Run `npx tsc --noEmit`. Must exit with code 0.
   - Test the route with curl: `curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/blog/<new-slug>`. Must return `200`.
   - View in browser or snapshot with `chrome-devtools` to confirm headers, images, and language toggles work.

---

## 6. Pre-Submission Checklist

Before telling the user the blog post is complete, verify:
- [ ] Unique `id` and clean URL `slug`
- [ ] Compelling `seo_title` (< 65 chars) and `seo_description` (< 160 chars)
- [ ] 100% complete translations in English, Khmer (`_km`), and Chinese (`_zh`)
- [ ] Embedded image tag `![...](/blog/...)` at the top of all 3 language content fields
- [ ] Minimum 4 internal links to AttendKH site pages and cross-blog posts
- [ ] Clear numbered headings (`## 1.`, `## 2.`, etc.)
- [ ] Relevant statutory citations (*Article X of the Cambodian Labour Law*)
- [ ] 3–4 FAQs with question and answer in EN, KM, and ZH
- [ ] Closing call-to-action linking to `/pricing`, `/downloads`, and `/contact`
- [ ] `npx tsc --noEmit` passes with 0 errors
