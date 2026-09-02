import type {
  PricingPlan,
  BlogPost,
  LegalDocument,
  WebsiteSettings,
} from "./schema";

export async function getInitialSeedData() {
  const now = new Date().toISOString();

  const pricingPlans: PricingPlan[] = [
    {
      id: "plan-starter",
      slug: "starter",
      name: "Starter",
      description: "Essential GPS clock-in and attendance roster for boutique stores and single-branch teams.",
      price_monthly: 1.0,
      price_annual: 0.83,
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
      price_monthly: 2.0,
      price_annual: 1.67,
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
      price_monthly: 3.0,
      price_annual: 2.50,
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
      price_monthly: 4.0,
      price_annual: 3.33,
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
      id: "post-gps-geofence",
      slug: "how-gps-geofencing-and-selfie-checks-stop-buddy-punching",
      title: "How GPS Geofencing and Selfie Verification Stop Buddy Punching in Cambodia",
      excerpt:
        "Traditional fingerprint scanners and paper punch cards cost Cambodian retailers millions in unworked hours. Discover how smartphone geofencing modernizes staff verification.",
      content: `## The Hidden Cost of Attendance Fraud in Retail

For Cambodian retail chains, coffee shops, and hospitality groups, traditional attendance systems present persistent operational vulnerabilities that directly erode profit margins:

1. **Hardware Scanners Fail Frequently**: Fingerprint readers often fail when staff handle moisture, food preparation, or cleaning chemicals, creating long queues during shift changes.
2. **Card Swiping Enables Buddy Punching**: It is common for staff to hand their RFID card or Telegram login to a colleague to clock them in when they are stuck in Phnom Penh traffic.
3. **Paper Sign-in Sheets Cause Administrative Chaos**: At the end of every month, HR managers spend 3 to 5 full days manually transcribing paper logs into Excel spreadsheets.

\`\`\`
Traditional Manual Reconciliation: ~40 Hours / Month
AttendKH Verified GPS Clock-in: Real-Time Instant Cloud Sync
\`\`\`

## How Geofencing Works with AttendKH

AttendKH creates a virtual perimeter around each authorized branch location using high-accuracy mobile GPS coordinates:

- **Configurable Radius (50m to 300m)**: Set tailored geofence boundaries for boutique stores in BKK1 or sprawling warehouse compounds in Phnom Penh's Special Economic Zone (PPSEZ).
- **Mock Location & GPS Spoofing Detection**: The mobile client actively identifies and blocks fake GPS spoofing software and developer mode overrides on Android and iOS.
- **Biometric Selfie Verification**: Staff capture a live in-app photo upon clocking in. Cryptographic timestamps and location metadata are bound directly to the punch record.
- **Offline Attendance Queuing**: If a branch loses internet connectivity, clock-ins are securely encrypted locally and automatically synced once connection restores.

| Feature | Biometric Scanners | Paper Logbooks | AttendKH GPS + Selfie |
| :--- | :--- | :--- | :--- |
| **Buddy Punching Prevention** | Medium | None | **100% Guaranteed** |
| **Hardware Installation Cost** | $250 - $600/unit | $0 | **$0 (BYOD Mobile App)** |
| **Multi-Branch Visibility** | Manual USB Export | Monthly Pickup | **Real-Time Live Dashboard** |
| **Setup Time** | 2 - 3 Weeks | Immediate | **5 Minutes via Telegram** |

> "Buddy punching stopped on our very first week of rollout across our 6 cafe outlets in Toul Kork and BKK. The ROI was virtually immediate." — *Dara Chan, Operations Director*

## Key Implementation Best Practices

When transitioning your team from hardware scanners to mobile GPS attendance, consider these proven steps:

1. **Clear Radius Calibration**: Walk the perimeter of your store or restaurant with a mobile phone to ensure outdoor patios and parking areas fall within the geofence.
2. **Shift Grace Windows**: Configure a fair 10-to-15 minute grace period before late deduction algorithms trigger automatically.
3. **Manager Telegram Notifications**: Enable instant push alerts on Telegram whenever a frontline worker arrives late or misses a shift.
`,
      cover_image: "/blog/gps-geofence.jpg",
      author_name: "Chhunsour Seng",
      author_role: "Product Builder",
      author_avatar: "/avatars/chhunsour.png",
      category: "Attendance",
      tags: ["Attendance", "GPS Geofencing", "Retail", "Biometrics", "Cambodia"],
      status: "published",
      published_at: "2026-08-28T08:00:00Z",
      scheduled_at: null,
      seo_title: "How GPS Geofencing Stops Buddy Punching in Cambodian Retail — AttendKH",
      seo_description:
        "Learn how tamper-proof GPS radius geofencing and live selfie verification eliminate ghost clock-ins and time theft across Cambodian retail and F&B businesses.",
      og_image: "/blog/gps-geofence.jpg",
      view_count: 1640,
      created_at: now,
      updated_at: now,
    },
    {
      id: "post-payroll-law",
      slug: "cambodian-labor-law-overtime-payroll-and-nssf-guide",
      title: "Cambodian Labor Law: Calculating Overtime Multipliers, Grace Periods & NSSF Contributions",
      excerpt:
        "A practical handbook for HR managers and business owners calculating overtime (1.5x vs 2.0x), per-minute late penalties, and bilingual payslips in USD & KHR.",
      content: `## Navigating Cambodian Payroll Compliance

Under guidelines established by Cambodia's Ministry of Labour and Vocational Training (MoLVT), calculating compliant employee payroll requires strict adherence to statutory formulas.

### 1. Determining Hourly Wage Rates

Standard full-time employment is calculated using either fixed contractual working days (typically 26 days) or actual calendar working days:

$$\\text{Hourly Base Rate} = \\frac{\\text{Monthly Gross Salary}}{\\text{Working Days} \\times 8 \\text{ Hours}}$$

### 2. Statutory Overtime Multipliers

- **Regular Working Days (Day Shift)**: Overtime performed beyond standard shift hours is compensated at **1.5×** the hourly base rate.
- **Night Shifts (22:00 – 06:00)**: Attracts an additional night differential as stipulated by MoLVT prakas.
- **Weekly Rest Days & Official Public Holidays**: Remunerated at **2.0× (Double Pay)** the standard hourly rate.

\`\`\`
Example: Base Hourly Wage = $2.50/hr
Standard Overtime Rate (1.5x) = $3.75/hr
Public Holiday Rate (2.0x) = $5.00/hr
\`\`\`

### 3. Grace Periods vs. Late Deductions

Many Cambodian employers adopt a standard 15-minute grace window. In AttendKH, you can configure whether late penalties apply:
- **Per-minute deduction** from the exact clock-in minute after grace expiration.
- **Tiered deduction brackets** (e.g., 16–30 min late = 30 min pay deduction).

\`\`\`
Late Penalty = (Late Minutes - Grace Minutes) × (Hourly Rate / 60) × Penalty Factor
\`\`\`

## NSSF (National Social Security Fund) Calculations

AttendKH automatically computes statutory NSSF deductions:
- **Occupational Risk & Healthcare Scheme**: Calculated against capped statutory ceilings (currently ~1,200,000 KHR / $300 USD maximum contribution base).
- **Pension Scheme**: Automatically splits mandatory employer (2%) and employee (2%) contributions.

## Dual-Currency (USD & KHR) Payslips

Given Cambodia's dual-currency economy, AttendKH produces bilingual Khmer/English PDF payslips displaying base wages, overtime bonuses, and deductions in both **US Dollars ($)** and **Khmer Riel (៛)** at the official National Bank of Cambodia (NBC) exchange rate.
`,
      cover_image: "/blog/payroll-law.jpg",
      author_name: "Chhunsour Seng",
      author_role: "Product Builder",
      author_avatar: "/avatars/chhunsour.png",
      category: "Payroll",
      tags: ["Payroll", "Labor Law", "NSSF", "Overtime", "USD KHR"],
      status: "published",
      published_at: "2026-08-25T09:30:00Z",
      scheduled_at: null,
      seo_title: "Cambodian Labor Law Overtime & Payroll Guide (2026) — AttendKH",
      seo_description:
        "Step-by-step formulas for calculating overtime rates (1.5x, 2.0x), NSSF caps, and grace-period deductions under Cambodian labor regulations.",
      og_image: "/blog/payroll-law.jpg",
      view_count: 2480,
      created_at: now,
      updated_at: now,
    },
    {
      id: "post-restaurant-shifts",
      slug: "multi-branch-shift-rostering-restaurants-cafes",
      title: "Multi-Branch Shift Rostering: Managing Split Shifts & High Turnover in Cambodian F&B",
      excerpt:
        "From lunch rushes (11:00–14:00) to evening dinner service (17:00–22:00), learn how top Phnom Penh hospitality brands coordinate split shifts and cross-branch replacements.",
      content: `## The Operational Reality of Cambodian F&B

Managing shift work in Phnom Penh and Siem Reap restaurants requires juggling high frontline turnover, split shifts, and sudden absenteeism:

- **Split Shifts**: Staff clock in for lunch service (10:30–14:00), clock out for rest, and return for dinner service (17:00–22:00).
- **Cross-Branch Coverage**: Baristas or service crew moving between a BKK1 flagship and a Toul Tompoung satellite branch during peak hours.
- **Last-Minute Replacements**: If a line cook calls in sick, the head chef needs immediate visibility into who is off-duty and eligible to cover without exceeding overtime limits.

## Structuring the Ideal Shift Roster

\`\`\`
Shift A (Morning/Lunch):  06:30 – 14:30 (Prep + Peak Lunch)
Shift B (Split Service):  10:30 – 14:00 & 17:00 – 21:30 (Peak Rush)
Shift C (Night Closing):  14:00 – 22:30 (Dinner + Daily Closing)
\`\`\`

## How Digital Rostering Eliminates Shift Friction

1. **Real-Time Staff Replacement Alerts**: When an opening shift barista fails to clock in within 15 minutes of store opening, the branch manager receives an automatic Telegram alert.
2. **Direct Shift Swapping with Manager Approval**: Staff propose shift trades directly on the mobile app; managers approve with a single tap.
3. **Automated Split-Shift Pay Calculations**: AttendKH accurately combines multiple punches in a single calendar day without treating intermediate hours as unauthorized leave.

> "Managing rosters across our 4 restaurant locations used to take 12 hours a week on whiteboard photos. Now it takes 15 minutes in AttendKH." — *Vannak Seng, Operations Director*
`,
      cover_image: "/blog/restaurant-shifts.jpg",
      author_name: "Chhunsour Seng",
      author_role: "Product Builder",
      author_avatar: "/avatars/chhunsour.png",
      category: "Operations",
      tags: ["Operations", "Hospitality", "Shift Scheduling", "Restaurants", "Phnom Penh"],
      status: "published",
      published_at: "2026-08-22T10:00:00Z",
      scheduled_at: null,
      seo_title: "Multi-Branch Shift Rostering for Cambodian Restaurants & Cafes — AttendKH",
      seo_description:
        "How multi-outlet restaurant chains in Cambodia optimize split shifts, handle barista absenteeism, and control labor costs with digital rostering.",
      og_image: "/blog/restaurant-shifts.jpg",
      view_count: 1890,
      created_at: now,
      updated_at: now,
    },
    {
      id: "post-cambodia-holidays",
      slug: "cambodian-public-holidays-and-leave-entitlements-guide",
      title: "Cambodian Public Holidays & Paid Leave: Pchum Ben, Khmer New Year & Annual Leave Rules",
      excerpt:
        "Master holiday compensation rules under MoLVT: double pay requirements, compensatory rest days, and how automated payroll rules prevent costly disputes.",
      content: `## Understanding Official Cambodian Public Holidays

Cambodia observes approximately 22 to 24 public holiday days per calendar year. For operating businesses, managing attendance during major festive seasons like **Khmer New Year (Chaoul Chnam Thmey)**, **Pchum Ben Festival**, and **Water Festival (Bon Om Touk)** is crucial for labor compliance.

### 1. The Double-Pay (200%) Requirement

Under the Cambodian Labour Law, employees required to work on an official public holiday must be compensated at **200% (2.0×)** of their regular wage rate for all worked hours.

### 2. Compensatory Time Off (Rest Days)

If a public holiday falls on a worker's scheduled weekly rest day (typically Sunday), employers must grant an alternate day off or compensate the holiday rate in full.

### 3. Annual Leave Accumulation Rules

- **Base Entitlement**: Full-time employees accrue **1.5 days of paid annual leave per month worked** (18 days annually).
- **Seniority Bonus Days**: For every **3 continuous years of service**, the employee earns **+1 additional day** of annual leave per year.

| Years of Service | Annual Leave Days per Year |
| :--- | :--- |
| **1 – 3 Years** | 18 Days |
| **4 – 6 Years** | 19 Days |
| **7 – 9 Years** | 20 Days |
| **10+ Years** | 21+ Days |

## Automating Holiday Pay in AttendKH

Rather than manually marking holiday overtime sheets, AttendKH automatically:
1. Applies the **2.0× multiplier** to any punches recorded on official Cambodian public holidays.
2. Tracks leave balances and seniority bonuses transparently on each employee's mobile profile.
3. Pre-calculates holiday payroll liabilities before the end of the monthly billing cycle.
`,
      cover_image: "/blog/cambodia-holidays.jpg",
      author_name: "Chhunsour Seng",
      author_role: "Product Builder",
      author_avatar: "/avatars/chhunsour.png",
      category: "Labor Law",
      tags: ["Labor Law", "Public Holidays", "Annual Leave", "Pchum Ben", "Khmer New Year"],
      status: "published",
      published_at: "2026-08-18T11:15:00Z",
      scheduled_at: null,
      seo_title: "Cambodian Public Holidays & Paid Leave Regulations — AttendKH",
      seo_description:
        "Complete guide to Cambodian public holidays (Pchum Ben, Khmer New Year, Water Festival), 200% overtime pay, and seniority pay calculations.",
      og_image: "/blog/cambodia-holidays.jpg",
      view_count: 1420,
      created_at: now,
      updated_at: now,
    },
    {
      id: "post-construction-workforce",
      slug: "remote-workforce-attendance-construction-logistics-cambodia",
      title: "Remote Workforce Management: Tracking Attendance on Construction Sites & Logistics Fleets",
      excerpt:
        "How site supervisors and logistics dispatchers verify remote crews across provinces, manage offline clock-ins in low-connectivity areas, and automate equipment operator overtime.",
      content: `## Overcoming Remote Attendance Challenges

Operating construction projects in Siem Reap, coastal infrastructure in Sihanoukville, and national logistics routes between Phnom Penh and Bavet involves distinct operational challenges:

- **Unstable Internet Connectivity**: Remote project sites frequently suffer cellular dropouts.
- **High Workforce Mobility**: Heavy equipment operators and subcontractors shift between job sites throughout the work week.
- **Physical Fingerprint Wear**: Heavy manual labor damages biometric skin ridges, making hardware scanners completely unusable.

\`\`\`
Offline Clock-in: Encrypted Local Cache -> Automatic Sync on Reconnect
Selfie Validation: Front Camera Verification + Reverse Timestamp Signature
\`\`\`

## The AttendKH Offline Construction Protocol

1. **Offline Mode**: Workers clock in on the supervisor's mobile kiosk or their personal smartphone. The timestamp and GPS coordinates are cryptographically cached locally.
2. **Automatic Background Sync**: Once the device enters 4G or Wi-Fi range, punches upload immediately to central headquarters.
3. **Subcontractor Team Check-ins**: Site engineers can use "Kiosk Team Punch" to verify up to 50 workers in under 3 minutes with photo proof.

> "On our infrastructure projects in Kampot, AttendKH eliminated payroll disputes with subcontractors entirely." — *Sopheap Chan, Head of Product*
`,
      cover_image: "/blog/construction-workforce.jpg",
      author_name: "Chhunsour Seng",
      author_role: "Product Builder",
      author_avatar: "/avatars/chhunsour.png",
      category: "Attendance",
      tags: ["Attendance", "Construction", "Logistics", "Offline Mode", "Multi-Branch"],
      status: "published",
      published_at: "2026-08-14T07:45:00Z",
      scheduled_at: null,
      seo_title: "Remote Workforce Attendance for Construction & Logistics in Cambodia — AttendKH",
      seo_description:
        "Streamline time tracking on remote construction sites and delivery fleets across Cambodia with offline GPS logging and selfie verification.",
      og_image: "/blog/construction-workforce.jpg",
      view_count: 1150,
      created_at: now,
      updated_at: now,
    },
  ];

  const legalDocuments: LegalDocument[] = [
    {
      id: "doc-privacy-v2",
      slug: "privacy",
      title: "Privacy Policy & Workforce Data Governance Standards",
      version: "2.0",
      content: `## 1. Introduction & Overview

AttendKH ("we", "our", "us", or "AttendKH") is committed to protecting the privacy, confidentiality, and fundamental data protection rights of organizations, employers, and their employees across Cambodia and international operating regions.

This Privacy Policy explains how AttendKH collects, uses, processes, stores, and safeguards personal data when you:
- Use our mobile applications for iOS (App Store) and Android (Google Play Store);
- Access our shared tablet QR Kiosk hardware modes;
- Log into our web applications, manager consoles, and administrative dashboards;
- Connect to our automated Telegram Bot notifications and webhook integrations;
- Visit our public website and marketing resources at [attendkh.com](https://attendkh.com).

By downloading, accessing, or using the AttendKH Attendance mobile application or web portal, you acknowledge that you have read and understood the practices described in this policy.

---

## 2. Roles & Responsibility: Data Controller vs. Data Processor

To ensure transparency and compliance with global data protection standards (including GDPR principles and Cambodian personal data protections under the Civil Code and E-Commerce Law):

- **Your Employer / Organization (Data Controller)**: The subscribing business or institution that employs you is the Data Controller. Your employer determines the personnel enrolled in AttendKH, sets authorized workplace geofences, configures shift rosters, approves attendance punches, and establishes compensation and payroll rules.
- **AttendKH (Data Processor / Service Provider)**: AttendKH acts strictly as a Data Processor on behalf of and under the contractual instructions of your employer. We provide secure cloud infrastructure, cryptographic check-in verification algorithms, automated Cambodian labor law payroll calculation engines, and encrypted database storage.

If you are an individual employee with questions regarding why specific attendance rules or shift requirements apply to you, please contact your employer's human resources or operations department directly.

---

## 3. Categories of Data Collected by the Attendance App & Platform

### A. Employee Profile & Identification Data
When an employer registers an employee profile on AttendKH, or when you complete your employee mobile onboarding, we process:
- **Full Legal Name & Display Name**
- **Employee Identification Number (Staff ID)**
- **Corporate or Personal Contact Information**: Phone number, corporate email address, and optional Telegram handle
- **Workplace Branch Assignment**: Department, operational team, role/title, and reporting manager
- **Wage & Employment Structure**: Base hourly or monthly salary parameters, overtime eligibility, standard shift templates, and statutory NSSF insurance classification (used exclusively for automated payslip generation)

### B. Point-in-Time GPS Location Data & Geofencing
To verify that frontline staff are physically present at their assigned workplace branch (e.g. boutique store, restaurant, construction site, or office), AttendKH mobile apps query device location services under strict privacy rules:

- **Point-in-Time Capture Only**: Location coordinates (latitude, longitude, horizontal accuracy radius, and server timestamp) are captured **ONLY at the exact millisecond you trigger an active punch event** (Clock In, Clock Out, or Break Start/End).
- **ZERO 24/7 Continuous Background Tracking**: AttendKH **NEVER** monitors your continuous movement, travel routes, off-shift whereabouts, or location outside active clock-in events. When the mobile app is minimized or closed, GPS sensors remain completely inactive.
- **Geofence Radius Verification**: The instantaneous GPS coordinate is mathematically compared against the authorized branch perimeter set by your employer (typically 50 to 300 meters). The system records whether the punch occurred "Inside Radius" or "Outside Radius" along with accuracy confidence metrics.
- **Mock Location & Anti-Spoofing Detection**: The mobile app includes tamper-resistance algorithms that detect simulated GPS positions, third-party mock location apps, and developer-mode spoofing tools to maintain payroll fairness and fraud prevention.

### C. Live Biometric / Selfie Photo Verification
To prevent fraudulent "buddy punching" (where one worker clocks in on behalf of an absent colleague) and verify identity at branch locations:

- **Live Selfie Photo at Punch**: When enabled by your employer, the mobile app or QR Kiosk captures a live front-camera photograph at the exact moment of clock-in.
- **Watermarking & Cryptographic Binding**: The photo is automatically stamped with cryptographic punch metadata (timestamp, branch ID, employee ID, and GPS coordinates) to prevent photo substitution.
- **Restricted Access**: Selfie photographs are accessible **only to authorized managers and HR administrators** of your specific organization for audit and attendance verification purposes.
- **NO Third-Party AI Selling or Public Profiling**: AttendKH does **NOT** sell, rent, monetize, or license your facial imagery to third parties, advertising networks, or external facial recognition training datasets.

### D. Device Telemetry & Technical Diagnostics
To ensure mobile app stability, authenticate authorized devices, and prevent multi-device clock-in fraud, we collect:
- **Device Model & Manufacturer** (e.g., Apple iPhone 14, Samsung Galaxy S23)
- **Operating System & Version** (e.g., iOS 17.4, Android 14)
- **Unique App Instance Identifier (UUID)** and installation token
- **IP Address & Network Connection Type** (Wi-Fi SSID or cellular data connection state)
- **Application Version & Crash Logs**

### E. Offline Punch Queue & Local Device Storage
When employees work at remote project sites or provincial locations with unstable cellular connectivity (e.g., construction sites, agricultural facilities, or underground parking):
- **Encrypted Local Cache**: Attendance punches, timestamps, GPS coordinates, and selfie photos are stored within the mobile app's encrypted local sandbox storage (SQLite/Keychain).
- **Automatic Background Synchronization**: As soon as the mobile device reconnects to a cellular or Wi-Fi network, queued punches are cryptographically verified and uploaded to AttendKH cloud servers.

### F. Payroll, Overtime & Time Records
As attendance data is collected, AttendKH generates and stores statutory workforce records:
- Clock-in and clock-out timestamps, total daily hours, and break durations
- Grace-period late arrivals and early departures calculated against employer shift rules
- Statutory overtime hours categorized into standard overtime (1.5× base rate) and Cambodian public holiday / weekly rest day overtime (2.0× double rate)
- Paid annual leave, sick leave, and special leave accruals and approvals
- Bilingual PDF payslips generated in US Dollars ($) and Khmer Riel (៛) with NSSF statutory contribution breakdowns

### G. Messaging & Automated Notifications
- **Telegram Bot Integration**: If your organization connects AttendKH to Telegram, we store your Telegram User ID and Chat ID to transmit real-time manager alerts (e.g., late arrivals, missed shifts, overtime warnings) and daily attendance summaries.

### H. Website Visitors & Sales Inquiries
- **Marketing Inquiries**: Information submitted through demo requests, pricing inquiries, or contact forms (name, company, business email, phone number, branch count).
- **Cookie Consent**: User preferences saved via our Cookie Consent banner (Necessary, Analytics, Functional, and Marketing cookies).

---

## 4. Mobile Device Permissions Matrix (Apple App Store & Google Play Disclosures)

In compliance with Apple App Store Review Guidelines and Google Play Developer Policies, the table below outlines all mobile permissions requested by the AttendKH application and their exact operational justification:

| Permission (iOS / Android) | Sensitivity Level | Purpose & Operational Justification | User Choice & Control |
| :--- | :--- | :--- | :--- |
| **Location Services** <br/>*(ACCESS_FINE_LOCATION, ACCESS_COARSE_LOCATION)* | Sensitive | Used **strictly at the instant of clocking in/out** to confirm presence within the employer's authorized branch geofence radius. | **Required for GPS punches.** You can set permission to *"While Using the App"*. Background location is never requested or enabled. |
| **Camera** <br/>*(CAMERA)* | Sensitive | Used to capture a live selfie verification photo during clock-in to prevent buddy punching and verify worker identity. | **Required for selfie-verified punches.** Camera is only activated when you tap the punch button. |
| **Local Storage / Files** <br/>*(READ/WRITE_EXTERNAL_STORAGE / Sandbox)* | Normal | Used exclusively to cache encrypted attendance punches locally when working offline in low-connectivity areas. | Managed automatically by the operating system sandbox. |
| **Push Notifications** <br/>*(POST_NOTIFICATIONS)* | Normal | Used to send shift start reminders, schedule updates, leave request approval status, and manager emergency alerts. | **Optional.** Can be enabled or disabled at any time in device settings. |
| **Network & Wi-Fi State** <br/>*(ACCESS_NETWORK_STATE, INTERNET)* | Normal | Used to check internet availability, sync attendance punches to the cloud, and securely transmit payroll data. | Essential for real-time cloud attendance synchronization. |

---

## 5. How We Use Information (Purposes of Processing)

We process attendance, location, biometric photo, and payroll data strictly for lawful operational purposes:

1. **Accurate Attendance Verification**: Confirming employee on-site arrival and departure within authorized geographic workplace perimeters.
2. **Fraud Prevention & Integrity**: Preventing buddy punching, time theft, and clock-in falsification through selfie verification and anti-spoofing checks.
3. **Automated Cambodian Payroll Processing**: Calculating exact gross wages, grace period deductions, overtime multipliers (1.5× and 2.0×), and bilingual payslip generation.
4. **Labor Compliance & Audit Readiness**: Maintaining statutory attendance registers required by the Ministry of Labour and Vocational Training (MoLVT) and the National Social Security Fund (NSSF).
5. **Operational Team Communication**: Delivering real-time Telegram and push notifications for shift swaps, roster schedules, and managerial approvals.
6. **Platform Reliability & Security**: Monitoring system performance, preventing denial-of-service attacks, and diagnosing technical issues.

---

## 6. Legal Bases for Processing

Under applicable Cambodian regulations (including the E-Commerce Law 2019 and Cambodian Labour Law) as well as international data protection principles, we process personal data under the following legal bases:

- **Contractual Necessity**: Processing is necessary to fulfill the SaaS subscription contract with your employer and support the employment relationship between you and your employer.
- **Compliance with Legal Obligations**: Employers must maintain accurate records of working hours, overtime premiums, and social security contributions under Cambodian labor statutes.
- **Legitimate Business Interests**: Employers have a legitimate commercial interest in securing business facilities, verifying workforce presence, and ensuring payroll accuracy.
- **Explicit Consent**: Where required by mobile operating systems (iOS and Android), you provide explicit permission when granting camera, location, and notification access.

---

## 7. Data Security & Storage Architecture

AttendKH implements enterprise-grade technical and organizational security measures to protect workforce and attendance data from unauthorized access, loss, or alteration:

- **Encryption in Transit**: All data transmitted between mobile devices, kiosk hardware, web browsers, and our cloud servers is encrypted using **Transport Layer Security (TLS 1.3 / HTTPS)** with modern cipher suites.
- **Encryption at Rest**: All database tables, selfie photo storage buckets, and automated backups are encrypted using **AES-256 encryption**.
- **Credential Protection**: User passwords are never stored in plaintext and are hashed using salted **Argon2 / bcrypt** algorithms.
- **Role-Based Access Control (RBAC)**: System access is partitioned by role (Super Admin, Organization Owner, HR Manager, Branch Supervisor, Frontline Employee). Managers can view only the branches and staff under their direct operational scope.
- **Audit Trails**: All administrative modifications to punch logs, salary adjustments, and manual time overrides are permanently recorded in immutable audit logs.
- **Isolated Multi-Tenant Databases**: Organizational records are logically segmented to prevent cross-tenant data exposure.

---

## 8. Data Retention & Lifecycle Management

We retain attendance logs and personal information only for as long as necessary to serve operational purposes and fulfill legal obligations:

- **Active Organizational Subscription**: Attendance logs, punch timestamps, and payroll archives are retained throughout the active duration of the employer's subscription to maintain continuity of employment records.
- **Statutory Labor Law Retention**: In compliance with MoLVT guidelines, payroll calculation archives and statutory records are typically retained for up to 3 years to support official labor inspections and tax compliance.
- **Verification Selfie Photos**: Verification photos are retained for an audit window determined by your employer's configuration (standard 90 to 365 days) and subsequently purged or anonymized.
- **Post-Termination Purging**: Upon cancellation or termination of an organization's subscription, all associated database records, photos, and employee profiles are permanently deleted from active systems within 60 days, subject to standard encrypted rolling backup lifecycles.

---

## 9. Account & Data Deletion Policy (Google Play & Apple App Store Compliance)

AttendKH provides clear, accessible, and transparent mechanisms for both individual employees and organizational administrators to request the deletion of their accounts and associated personal data:

### For Individual Employees:
- If you wish to delete your mobile account credentials, profile details, or personal data, you may submit a request directly to your employer's HR administrator (the Data Controller).
- Alternatively, you can submit an individual deletion request directly to our Data Protection Officer by emailing **[privacy@attendkh.com](mailto:privacy@attendkh.com)** with the subject line *"Employee Data Deletion Request"*. Include your registered phone number, organization name, and Staff ID.
- Upon receiving verified confirmation from your employer or upon account deactivation, all personal authentication tokens, biometric selfie photos, and device identifiers associated with your profile will be permanently deleted from active databases within **30 calendar days**.

### For Organizations & Business Owners:
- Organization administrators can request complete deletion of their enterprise account, all branch geofences, staff profiles, attendance logs, and payroll records by emailing **[privacy@attendkh.com](mailto:privacy@attendkh.com)** from the verified owner's corporate email address or via the Admin Dashboard.
- All organizational data will be queued for permanent hard deletion across all production servers and storage buckets within 30 days.

---

## 10. Third-Party Sub-processors & Zero-Sale Guarantee

AttendKH upholds a strict privacy standard regarding third-party disclosures:

> **WE DO NOT SELL, RENT, OR MONETIZE YOUR PERSONAL DATA OR VERIFICATION SELFIES TO ADVERTISERS, DATA BROKERS, OR THIRD PARTIES UNDER ANY CIRCUMSTANCES.**

We engage a limited number of trusted enterprise sub-processors solely to deliver essential infrastructure and communications:

| Sub-processor | Category | Purpose | Data Transferred | Security Standard |
| :--- | :--- | :--- | :--- | :--- |
| **Cloud Hosting & Database Infrastructure** | Cloud Infrastructure | Encrypted database hosting, API servers, and backup redundancy | Encrypted employee records, punch timestamps | SOC 2, ISO 27001, AES-256 |
| **Encrypted Object Storage** | Media Storage | Encrypted storage of selfie verification punch images | Encrypted selfie photos with punch metadata | AES-256, TLS 1.3, strict IAM |
| **SMS / OTP Gateway Provider** | Telecommunications | Delivery of one-time password (OTP) verification codes for mobile login | Employee phone number, OTP token | Encrypted API, zero retention |
| **Telegram Bot API (Optional)** | Messaging | Automated dispatch of manager punch alerts and roster notifications | Telegram chat ID, alert notification text | TLS 1.3, opt-in by organization |

---

## 11. Your Rights as a Data Subject

Subject to applicable Cambodian laws and international standards, you have specific rights regarding your personal information:

1. **Right of Access & Transparency**: You can view your real-time attendance history, punch timestamps, logged hours, leave balances, and generated payslips directly through the AttendKH mobile app.
2. **Right to Rectification**: If an attendance record is inaccurate (for example, due to a hardware failure or forgotten punch), you have the right to submit a manual punch adjustment request to your manager for review and correction.
3. **Right to Erasure (Right to be Forgotten)**: You have the right to request deletion of your personal data upon termination of employment or withdrawal of consent, subject to statutory labor record-keeping requirements.
4. **Right to Restrict Processing**: You may request restrictions on how your data is processed if you dispute its accuracy.
5. **Right to Data Portability**: Organizational administrators and employees can export attendance logs, overtime reports, and payslips in standardized formats (CSV, Excel, PDF).

To exercise any of these rights, please contact your employer's HR team or contact our privacy team at **[privacy@attendkh.com](mailto:privacy@attendkh.com)**.

---

## 12. Workplace Privacy & Anti-Surveillance Safeguards

AttendKH is designed to balance operational workforce coordination with the fundamental privacy and dignity of frontline workers:

- **No Continuous Audio / Video Recording**: The mobile app NEVER records audio through device microphones or captures continuous video feeds.
- **No Keystroke or Screen Monitoring**: The app does NOT capture screenshots, monitor other installed mobile applications, or track browsing activity.
- **Off-Duty Privacy**: Outside active work hours, the mobile app performs zero monitoring and does not capture any location or status information.
- **Kiosk Privacy**: When using the shared tablet QR Kiosk mode, photos captured during punch-in are displayed only momentarily on-screen for user confirmation and are not publicly browsable on the physical device.

---

## 13. Children's Privacy

AttendKH is an enterprise business-to-business workforce management platform. We do not knowingly collect, solicit, or maintain personal information from individuals under the legal employment age under the Cambodian Labour Law (under 15 years old for light work, or under 18 years old for general industrial labor). If we learn that personal data of an underage individual has been inadvertently collected without lawful parental or employer authorization, we will take immediate steps to delete the information.

---

## 14. Changes & Updates to this Privacy Policy

We may update this Privacy Policy from time to time to reflect enhancements in our mobile applications, updates to Cambodian regulations, or evolving App Store and Google Play policies.

When material changes occur:
- We will update the **"Last updated"** date and increment the policy version number at the top of this document.
- We will notify registered employers and mobile users via an in-app notice, banner, or email notification before the updates take effect.
- Continued use of the AttendKH mobile app or web platform after the effective date of an updated policy constitutes acceptance of the revised terms.

---

## 15. Contact Us & Data Protection Officer (DPO)

If you have questions, concerns, feedback, or complaints regarding this Privacy Policy, your personal data, or our mobile attendance security practices, please contact our Data Protection Office:

- **Data Protection Officer (DPO)**: AttendKH Privacy & Security Compliance Team
- **Email**: [privacy@attendkh.com](mailto:privacy@attendkh.com)
- **General Support**: [support@attendkh.com](mailto:support@attendkh.com)
- **Official Telegram Hotline**: [@attendkh](https://t.me/attendkh)
- **Phone Hotline**: +855 23 999 888
- **Operating Hours**: Monday to Saturday, 8:00 AM – 6:00 PM (ICT / UTC+7)
- **Physical Address**: Phnom Penh, Kingdom of Cambodia`,
      is_active: 1,
      changelog: "Upgraded Privacy Policy for mobile attendance app (iOS/Android), GPS geofence verification, biometric selfie safeguards, and App Store / Google Play compliance.",
      created_by: "AttendKH Compliance Team",
      created_at: "2026-09-01T00:00:00Z",
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
      "New Feature: Shared QR Door Kiosk with Real-Time Cloud Sync is now live!",
    announcement_text_km:
      "មុខងារថ្មី៖ មុខងារ QR Kiosk នៅមាត់ទ្វារជាមួយសមកាលកម្ម Cloud ផ្ទាល់ដំណើរការហើយ!",
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

  return {
    pricingPlans,
    blogPosts,
    legalDocuments,
    settings,
  };
}
