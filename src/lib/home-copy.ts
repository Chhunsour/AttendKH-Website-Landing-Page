import type { Lang } from "@/lib/i18n";

/** Copy for the AttendKH image-led homepage. Fully synchronized in English and Khmer. */
const en = {
  nav: {
    home: "Home",
    about: "About Us",
    features: "Features",
    testimonials: "Testimonials",
    getStarted: "Get Started",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    product: "Product",
    productItems: [
      { label: "Attendance", desc: "GPS clock-in with selfie checks", href: "/attendance" },
      { label: "Payroll", desc: "Overtime, deductions and payslips", href: "/payroll" },
      { label: "Multi-Branch", desc: "Every location on one console", href: "/multi-branch" },
    ],
    pricing: "Pricing ($1/mo)",
    customers: "Customers",
    signIn: "Sign In",
    menuTitle: "Menu",
    language: "Language",
    skip: "Skip to content",
  },

  hero: {
    priceBadge: "✨ $1.00 / employee / month • All features included • Unlimited branches",
    titlePre: "Take Control of Your",
    titleRotate: ["Attendance", "Payroll", "Payslips", "Overtime", "Shifts", "Branches"],
    titlePost: "with",
    sub: "Track attendance, manage shifts, and run payroll across every branch for just $1 per employee.",
    rating: "GPS & selfie verified • Native Khmer & English • USD & KHR",
    slotBadge: "FIELD NOTE 01",
    slotLabel: "Morning Shift Verification // BKK1 Flagship",
    slotSubject: "Real mobile attendance screen or team clock-in moment at branch entrance",
    slotInstruction: 'Upload ready: pass src="/hero-attendance.jpg"',
    slotAlt: "AttendKH mobile attendance app verification record",
  },

  stats: {
    trustedPre: "Designed for",
    trustedNumber: "Cambodian",
    trustedPost: "businesses, from one branch to fifty",
    items: [
      { value: "$1.00", line1: "Per User / Mo", line2: "All Features Included" },
      { value: "50–200m", line1: "Branch Geofence", line2: "Radius" },
      { value: "USD + KHR", line1: "Dual-Currency", line2: "Payslips" },
    ],
  },

  featureOne: {
    title: "Easily Track and Verify Every Clock-In",
    body: "Staff clock in inside the branch radius with a selfie, so every record carries the time, the place and the photo proof. Managers see who is in, late or absent before the shift is over.",
    cta: "Learn more",
    href: "/attendance",
    points: ["50–200 m branch radius", "Selfie on every punch", "Works offline"],
    slotBadge: "FIELD NOTE 02",
    slotLabel: "Geofenced Mobile Punch // GPS & Live Selfie",
    slotSubject: "Staff selfie capture within the 50m branch perimeter showing verified timestamp",
    slotInstruction: 'Upload ready: pass src="/attendance-punch.jpg"',
    slotAlt: "AttendKH mobile clock-in screen showing on-duty status, branch location and shift window",
  },

  featureTwo: {
    title: "Effortlessly Run Your Monthly Payroll",
    body: "Overtime multipliers, late deductions and leave balances apply from the attendance record. Payslips generate in USD and KHR in a single click.",
    cta: "Learn more",
    href: "/payroll",
    points: ["1.5× and 2.0× overtime", "USD and KHR payslips", "NSSF lines included"],
    slotBadge: "FIELD NOTE 03",
    slotLabel: "Bilingual Payslip // USD & KHR Breakdown",
    slotSubject: "Itemized Khmer and English payroll export with configurable NSSF lines",
    slotInstruction: 'Upload ready: pass src="/payroll-slip.jpg"',
    slotAlt: "Bilingual Cambodian payroll breakdown in USD and KHR",
  },

  otLeave: {
    title: "Overtime and Leave Requests, Settled in the App",
    body: "Staff file overtime and leave from their phone with the exact hours calculated against their schedule. Managers approve or reject with a full audit record.",
    points: [
      "Overtime hours calculated against each employee's shift",
      "Approval trail with reason, timestamp and approver",
      "Approved OT and leave post directly to the payslip",
    ],
    cta: "See Request Workflow",
    href: "/attendance",
    slotBadge: "FIELD NOTE 04",
    slotLabel: "OT Request // Employee Submission",
    slotSubject: "Overtime request screen with shift policy, calculated hours and approval submit",
    slotInstruction: 'Upload ready: pass src="/ot-frame-5.webp"',
    slotAlt: "AttendKH overtime request screen showing calculated overtime hours before submission",
  },

  cambodiaFit: {
    badge: "🇰🇭 ENGINEERED FOR CAMBODIA",
    title: "Built Specifically for How Cambodian Organizations Operate",
    sub: "AttendKH supports GPS radius verification, dual-currency salaries, split shifts, and Cambodian labor overtime rules without overseas workarounds.",
    items: [
      {
        title: "Khmer & English Bilingual UI",
        desc: "Full native Khmer language interface for frontline staff and English for management. Switch anytime in one tap.",
      },
      {
        title: "Dual-Currency Payroll (USD & KHR)",
        desc: "Calculate base salaries, late deductions, overtime bonuses, and export bilingual payslips in both US Dollars ($) and Khmer Riel (៛).",
      },
      {
        title: "Overtime & NSSF Lines",
        desc: "Configurable 1.5× regular OT and 2.0× rest day/holiday multipliers with itemized NSSF (ប.ស.ស.) contribution breakdowns.",
      },
      {
        title: "Offline Resilient Attendance Sync",
        desc: "If mobile data or Wi-Fi drops, staff punches are safely cached locally on the device and synced upon reconnecting.",
      },
    ],
    slotBadge: "FIELD NOTE 05",
    slotLabel: "Labor Standards // Cambodia Rules",
    slotSubject: "Cambodian public holiday schedule, shift roster, and NSSF contribution table",
    slotInstruction: 'Upload ready: pass src="/cambodia-compliance.jpg"',
    slotAlt: "Cambodia labor rules and holiday schedule",
  },

  impact: {
    badge: "OPERATIONAL WORKFLOW",
    title: "How Teams Structure Their Setup with AttendKH",
    sub: "A structured transition from paper logbooks to mobile clock-in and automated payroll rules.",
    milestones: [
      {
        step: "Phase 1",
        title: "Location & Selfie Verification",
        body: "Punches require GPS branch radius validation and live selfie proof to verify presence at designated branch locations.",
        tag: "GPS + Selfie Verification",
      },
      {
        step: "Phase 2",
        title: "Real-Time Shift Visibility",
        body: "Branch managers see shift arrivals, late entries, and absences on their console before shifts end.",
        tag: "Live Shift Roster",
      },
      {
        step: "Phase 3",
        title: "Automated Overtime & Deductions",
        body: "Configurable 1.5× / 2.0× overtime and late rules calculate directly from recorded timestamps.",
        tag: "Configurable Overtime Rules",
      },
      {
        step: "Phase 4",
        title: "Dual-Currency Payslips",
        body: "Reconcile hours and export itemized payslips in USD and KHR with NSSF breakdown lines.",
        tag: "Bilingual USD & KHR",
      },
    ],
    summary: [
      { value: "50-200m", label: "Branch geofence", desc: "Configurable radius per branch or site" },
      { value: "USD + KHR", label: "Dual currency", desc: "Bilingual payslips and calculations" },
      { value: "1.5x / 2.0x", label: "Overtime multipliers", desc: "Configurable regular and holiday rates" },
    ],
  },

  steps: {
    badge: "FOR HR & OPERATIONS",
    duration: "3 steps",
    title: "A clear rollout for your HR team",
    sub: "Set branch rules, import staff, and approve your first verified payroll.",
    caption: "Guided setup using your existing staff and payroll data.",
    items: [
      {
        n: "01",
        title: "Configure each branch",
        body: "HR sets locations, geofence radii, shifts, overtime, and leave rules for every team.",
      },
      {
        n: "02",
        title: "Import employee records",
        body: "Bring roles, salaries, branches, and schedules across from your existing spreadsheet.",
      },
      {
        n: "03",
        title: "Review and approve payroll",
        body: "HR reviews attendance exceptions, then exports approved payslips in USD and KHR.",
      },
    ],
  },

  why: {
    badge: "SECURITY & RELIABILITY",
    title: "Why Choose AttendKH",
    cards: [
      {
        title: "Stay Organized and In Control of Every Branch",
        body: "Manage every location from one console. Branch managers see their own site, owners see all of them.",
      },
      {
        title: "Gain Greater Visibility and Make Informed Decisions",
        body: "Live attendance and labor cost per branch, so you can review numbers promptly.",
      },
      {
        title: "Save Time with Automated Overtime and Late Rules",
        body: "Set grace periods and multipliers once. Monthly payroll runs apply them consistently.",
      },
      {
        title: "Protect Your Data with Security Controls",
        body: "Encrypted storage in transit and at rest, location checks, and supervisor audit logs.",
      },
    ],
  },

  pricingTeaser: {
    eyebrow: "Pricing",
    title: "$1.00 per user, per month",
    body: "No setup fee, no per-branch surcharge, and no hidden fees. Complete access to every feature from day one.",
    cta: "See pricing",
    points: ["Unlimited branches included", "Support in Khmer and English", "Cancel any time"],
  },

  faq: {
    badge: "FREQUENTLY ASKED QUESTIONS",
    title: "Frequently Asked Questions",
    summary: "Clear answers to common questions about setup, shifts, attendance, and payroll.",
    contactPrompt: "Have a specific question about your team?",
    contactLink: "Talk to our Phnom Penh support team",
    filterTabs: [
      { id: "all", label: "All Topics" },
      { id: "attendance", label: "GPS & Attendance" },
      { id: "shifts", label: "Shifts & Rosters" },
      { id: "payroll", label: "Dual Currency & Payroll" },
      { id: "offline", label: "Offline & Kiosks" },
    ],
    items: [
      {
        q: "How does AttendKH verify employee attendance at branch locations?",
        a: "AttendKH uses point-in-time GPS geofencing (50m to 200m radius) combined with mandatory live selfie verification. Punches are only registered when staff are physically on-site, with zero continuous background battery-draining tracking.",
        category: "Attendance & Geofencing",
        tag: "50m–200m Geofence",
        filterGroup: "attendance",
        highlights: ["Point-in-time GPS check", "Mandatory live selfie", "Zero background tracking"],
      },
      {
        q: "Can we manage split shifts for restaurants, cafes, and F&B operations?",
        a: "Yes. Frontline baristas and kitchen crews clock in for separate shifts (such as lunch rushes and dinner services) on a single unified roster. Branch managers review shift coverage and attendance exceptions in real time.",
        category: "F&B Operations",
        tag: "Split Shifts",
        filterGroup: "shifts",
        highlights: ["Lunch & dinner shifts", "Single unified schedule", "Real-time floor visibility"],
      },
      {
        q: "How does multi-store retail tracking work across shopping malls?",
        a: "Store managers across multiple mall outlets track floor punctuality in real time from a central console. Late arrival rules and sales commission adjustments flow directly into monthly payroll calculations.",
        category: "Multi-Store Retail",
        tag: "Multi-Outlet Sync",
        filterGroup: "shifts",
        highlights: ["Centralized branch console", "Late arrival deduction rules", "Direct payroll integration"],
      },
      {
        q: "Can AttendKH accommodate 24/7 rosters, night audits, and holiday multipliers?",
        a: "Yes. Department rosters coordinate morning, afternoon, and night audit shifts with automatic Cambodian Labor Law overtime calculations—including 1.5× regular OT and 2.0× night or public-holiday multipliers.",
        category: "24/7 Hospitality",
        tag: "24/7 Rosters",
        filterGroup: "shifts",
        highlights: ["Midnight-crossing shifts", "Configurable OT multipliers", "Policy review before payroll"],
      },
      {
        q: "What happens during network dropouts at warehouse or logistics facilities?",
        a: "Remote container yards and warehouse facilities use shared tablet kiosks and local offline punch caching during network dropouts, automatically synchronizing timestamps once internet connectivity is restored.",
        category: "Logistics & Warehouse",
        tag: "Offline Queue",
        filterGroup: "offline",
        highlights: ["Shared tablet kiosk mode", "Local offline timestamp cache", "Automatic cloud sync"],
      },
      {
        q: "How are grace periods and dual-currency payslips calculated?",
        a: "Configurable late grace periods (5 to 15 minutes) and automated NSSF contribution line items simplify monthly salary exports in USD and KHR with itemized deduction breakdowns.",
        category: "Payroll & Compliance",
        tag: "USD + KHR Currency",
        filterGroup: "payroll",
        highlights: ["Configurable grace periods", "Bilingual USD/KHR payslips", "Automated NSSF calculations"],
      },
    ],
  },
  testimonials: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    summary: "Common operational setups and questions across Cambodian organizations",
    notesLabel: "More questions",
    notesCount: "06 Questions",
    items: [],
  },

  cta: {
    title: "Get Started Today",
    sub: "Set up your branches and start managing attendance and payroll.",
    button: "Get Started",
    pricingButton: "See pricing",
    slotBadge: "FIELD NOTE 06",
    slotLabel: "Guided Branch Rollout",
    slotSubject: "Branch operations team set up and running live attendance across all locations",
    slotInstruction: 'Upload ready: pass src="/team-onboarding.jpg"',
    slotAlt: "AttendKH onboarding and rollout session",
  },

  footer: {
    columns: [
      {
        title: "Product",
        links: [
          { label: "Attendance", href: "/attendance" },
          { label: "Payroll", href: "/payroll" },
          { label: "Multi-Branch", href: "/multi-branch" },
          { label: "Pricing", href: "/pricing" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Customers", href: "/customers" },
          { label: "Contact", href: "/contact" },
          { label: "Support", href: "/support" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "FAQ", href: "/faq" },
          { label: "Help Center", href: "/support" },
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "Terms of Service", href: "/terms" },
        ],
      },
    ],
    contactTitle: "Contact",
    address: "No. 12, Street 315, Toul Kork, Phnom Penh",
    email: "support@attendkh.com",
    telegram: "@attendkh",
    appsTitle: "Get the app",
    appStoreTop: "Download on the",
    appStoreName: "App Store",
    playTop: "Get it on",
    playName: "Google Play",
    newsletterTitle: "Join our newsletter",
    newsletterSub: "Stay up to date with everything AttendKH",
    emailPlaceholder: "Enter your email",
    subscribe: "Subscribe",
    legal: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookie Policy", href: "/privacy-policy" },
    ],
    rights: "© 2026 AttendKH. All rights reserved.",
  },
};

export type HomeCopy = typeof en;

const km: HomeCopy = {
  nav: {
    home: "ទំព័រដើម",
    about: "អំពីយើង",
    features: "មុខងារ",
    testimonials: "មតិអតិថិជន",
    getStarted: "ចាប់ផ្តើម",
    openMenu: "បើកម៉ឺនុយ",
    closeMenu: "បិទម៉ឺនុយ",
    product: "ផលិតផល",
    productItems: [
      { label: "វត្តមាន", desc: "ចុះវត្តមាន GPS ជាមួយរូបថត", href: "/attendance" },
      { label: "ប្រាក់ខែ", desc: "ម៉ោងបន្ថែម ការកាត់ និងប័ណ្ណប្រាក់ខែ", href: "/payroll" },
      { label: "ច្រើនសាខា", desc: "គ្រប់ទីតាំងលើកុងសូលតែមួយ", href: "/multi-branch" },
    ],
    pricing: "តម្លៃ ($1/ខែ)",
    customers: "អតិថិជន",
    signIn: "ចូលគណនី",
    menuTitle: "ម៉ឺនុយ",
    language: "ភាសា",
    skip: "រំលងទៅមាតិកា",
  },

  hero: {
    priceBadge: "✨ ត្រឹមតែ ១ ដុល្លារ / បុគ្គលិក / ខែ • រួមបញ្ចូលគ្រប់មុខងារ • សាខាគ្មានដែនកំណត់",
    titlePre: "គ្រប់គ្រង",
    titleRotate: ["វត្តមាន", "បញ្ជីប្រាក់ខែ", "ប័ណ្ណប្រាក់ខែ", "ម៉ោងបន្ថែម", "វេនធ្វើការ", "គ្រប់សាខា"],
    titlePost: "ក្រុមអ្នក ជាមួយ",
    sub: "តាមដានវត្តមាន គ្រប់គ្រងវេន និងរៀបចំប្រាក់ខែគ្រប់សាខារបស់អ្នកត្រឹមតែ ១ ដុល្លារក្នុងម្នាក់",
    rating: "ផ្ទៀងផ្ទាត់ដោយ GPS និង Selfie • ភាសាខ្មែរ និងអង់គ្លេស • ដុល្លារ និងរៀល",
    slotBadge: "កំណត់ត្រាទី ០១",
    slotLabel: "ការផ្ទៀងផ្ទាត់វត្តមានវេនព្រឹក // សាខា BKK1",
    slotSubject: "រូបភាពអេក្រង់ចុះវត្តមានលើទូរស័ព្ទពិត ឬបុគ្គលិកចុះវត្តមាននៅមាត់ទ្វារសាខា",
    slotInstruction: 'ត្រៀមផ្ទុករូបភាព៖ ដាក់ src="/hero-attendance.jpg"',
    slotAlt: "កំណត់ត្រាផ្ទៀងផ្ទាត់វត្តមានលើកម្មវិធី AttendKH",
  },

  stats: {
    trustedPre: "រចនាឡើងសម្រាប់",
    trustedNumber: "ក្រុមការងារកម្ពុជា",
    trustedPost: "ចាប់ពីសាខាតែមួយ ដល់រាប់សិបសាខា",
    items: [
      { value: "$1.00", line1: "ក្នុងម្នាក់ / ខែ", line2: "គ្រប់មុខងារទាំងអស់" },
      { value: "៥០–២០០ម", line1: "កាំ Geofence", line2: "តាមសាខា" },
      { value: "ដុល្លារ+រៀល", line1: "ប័ណ្ណប្រាក់ខែ", line2: "ពីររូបិយប័ណ្ណ" },
    ],
  },

  featureOne: {
    title: "តាមដាន និងផ្ទៀងផ្ទាត់រាល់ការចុះវត្តមាន",
    body: "បុគ្គលិកចុះវត្តមាននៅក្នុងកាំសាខាជាមួយរូបថត ដូច្នេះរាល់កំណត់ត្រាមានពេលវេលា ទីកន្លែង និងភស្តុតាង។ ប្រធានដឹងថានរណាមក យឺត ឬអវត្តមាន មុនវេនចប់។",
    cta: "ស្វែងយល់បន្ថែម",
    href: "/attendance",
    points: ["កាំសាខា ៥០–២០០ ម៉ែត្រ", "រូបថតរាល់ការចុះវត្តមាន", "ដំណើរការក្រៅបណ្តាញ"],
    slotBadge: "កំណត់ត្រាទី ០២",
    slotLabel: "ការចុះវត្តមានតាម GPS និង រូបថត Selfie ផ្ទាល់",
    slotSubject: "រូបភាពបុគ្គលិកថត Selfie ក្នុងកាំ ៥០ ម៉ែត្រនៃសាខា ជាមួយកាលបរិច្ឆេទផ្ទៀងផ្ទាត់",
    slotInstruction: 'ត្រៀមផ្ទុករូបភាព៖ ដាក់ src="/attendance-punch.jpg"',
    slotAlt: "ភស្តុតាងចុះវត្តមានតាម GPS និងរូបថត Selfie",
  },

  featureTwo: {
    title: "បើកប្រាក់ខែប្រចាំខែយ៉ាងងាយស្រួល",
    body: "មេគុណម៉ោងបន្ថែម ការកាត់ប្រាក់យឺត និងសមតុល្យច្បាប់ឈប់ អនុវត្តដោយខ្លួនឯងពីកំណត់ត្រាវត្តមាន។ ប័ណ្ណប្រាក់ខែចេញជាដុល្លារ និងរៀល ដោយចុចតែម្តង។",
    cta: "ស្វែងយល់បន្ថែម",
    href: "/payroll",
    points: ["ម៉ោងបន្ថែម ១.៥× និង ២.០×", "ប័ណ្ណប្រាក់ខែ ដុល្លារ និងរៀល", "រួមបញ្ចូលបន្ទាត់ បសស"],
    slotBadge: "កំណត់ត្រាទី ០៣",
    slotLabel: "ប័ណ្ណបើកប្រាក់ខែទ្វេភាសា // ដុល្លារ និង រៀល",
    slotSubject: "គំរូប័ណ្ណប្រាក់ខែពិតបង្ហាញម៉ោងបន្ថែម ១.៥x/២.០x និងការកាត់វិភាគទាន ប.ស.ស.",
    slotInstruction: 'ត្រៀមផ្ទុករូបភាព៖ ដាក់ src="/payroll-slip.jpg"',
    slotAlt: "របាយការណ៍ប័ណ្ណប្រាក់ខែទ្វេភាសា ដុល្លារ និងរៀល",
  },

  otLeave: {
    title: "ស្នើសុំម៉ោងបន្ថែម និងច្បាប់សម្រាក ផ្ទាល់ក្នុងកម្មវិធី",
    body: "បុគ្គលិកស្នើសុំម៉ោងបន្ថែម និងច្បាប់សម្រាកផ្ទាល់ពីទូរស័ព្ទ ដោយមានគណនាម៉ោងស្រាប់ជាមុន។ ប្រធានអនុម័តតែម្ដង ហើយម៉ោងដែលអនុម័តចូលទៅក្នុងប្រាក់ខែភ្លាមតាមអត្រា ១.៥× ឬ ២.០×។",
    points: [
      "គណនាម៉ោងបន្ថែមស្វ័យប្រវត្តិតាមវេនបុគ្គលិកនីមួយៗ",
      "កំណត់ហេតុអនុម័ត ពេលវេលា និងឈ្មោះអ្នកអនុម័ត",
      "ម៉ោងបន្ថែម និងច្បាប់ដែលអនុម័ត ចូលទៅប័ណ្ណប្រាក់ខែភ្លាម",
    ],
    cta: "មើលដំណើរការស្នើសុំ",
    href: "/attendance",
    slotBadge: "កំណត់ត្រាទី ០៤",
    slotLabel: "សំណើម៉ោងបន្ថែម // ការស្នើសុំរបស់បុគ្គលិក",
    slotSubject: "អេក្រង់ស្នើសុំម៉ោងបន្ថែម បង្ហាញគោលការណ៍វេន និងម៉ោងបន្ថែមដែលគណនារួច",
    slotInstruction: 'ត្រៀមផ្ទុករូបភាព៖ ដាក់ src="/ot-frame-5.webp"',
    slotAlt: "អេក្រង់ស្នើសុំម៉ោងបន្ថែមរបស់ AttendKH",
  },

  cambodiaFit: {
    badge: "🇰🇭 ផលិតឡើងសម្រាប់អាជីវកម្មនៅកម្ពុជា",
    title: "រចនាឡើងយ៉ាងជាក់លាក់ ស្របតាមរបៀបដំណើរការអាជីវកម្មនៅកម្ពុជា",
    sub: "AttendKH ជួយកាត់បន្ថយវិវាទម៉ោង គាំទ្រប្រាក់ខែដុល្លារ/រៀល វេនបំបែក និងរូបមន្តដែលអាចកំណត់បានសម្រាប់ក្រុមការងារកម្ពុជា។",
    items: [
      {
        title: "ទ្វេភាសា ខ្មែរ និង អង់គ្លេស",
        desc: "ចំណុចប្រទាក់ភាសាខ្មែរពេញលេញសម្រាប់បុគ្គលិកជួរមុខ និងភាសាអង់គ្លេសសម្រាប់អ្នកគ្រប់គ្រង។ ប្តូរបានភ្លាមៗ។",
      },
      {
        title: "ប្រាក់បៀវត្សរ៍ទ្វេប្រាក់ (ដុល្លារ និង រៀល)",
        desc: "គណនាប្រាក់ខែមូលដ្ឋាន ការកាត់យឺត ប្រាក់ថែមម៉ោង និងបោះពុម្ពប័ណ្ណបើកប្រាក់ខែជាប្រាក់ដុល្លារ ($) និងប្រាក់រៀល (៛)។",
      },
      {
        title: "អត្រាថែមម៉ោង និង ប.ស.ស.",
        desc: "អនុវត្តអត្រាថែមម៉ោង ១.៥x ថ្ងៃធម្មតា និង ២.០x ថ្ងៃបុណ្យ/សម្រាក ព្រមទាំងការកាត់ប្រាក់វិភាគទាន ប.ស.ស. យ៉ាងត្រឹមត្រូវ។",
      },
      {
        title: "ដំណើរការទោះគ្មានអ៊ីនធឺណិត (Offline)",
        desc: "ប្រសិនបើដាច់សេវាទូរស័ព្ទ ឬ Wi-Fi ទិន្នន័យកត់ត្រាម៉ោងត្រូវរក្សាទុកដោយសុវត្ថិភាពក្នុងទូរស័ព្ទ ហើយធ្វើសមកាលកម្មស្វ័យប្រវត្តិពេលមានសេវាវិញ។",
      },
    ],
    slotBadge: "កំណត់ត្រាទី ០៥",
    slotLabel: "ការកំណត់ប្រាក់ខែ // សម្រាប់ក្រុមកម្ពុជា",
    slotSubject: "ប្រតិទិនបុណ្យជាតិផ្លូវការ កាលវិភាគវេនការងារ និងតារាងវិភាគទាន ប.ស.ស.",
    slotInstruction: 'ត្រៀមផ្ទុករូបភាព៖ ដាក់ src="/cambodia-compliance.jpg"',
    slotAlt: "ការកំណត់រូបមន្តប្រាក់ខែ និងប្រតិទិនបុណ្យជាតិ",
  },

  impact: {
    badge: "ដំណើរការរៀបចំការងារ",
    title: "របៀបដែលក្រុមការងាររៀបចំការប្រើប្រាស់ AttendKH",
    sub: "ជំហានរៀបចំច្បាស់លាស់ ពីការកត់ត្រាក្រដាស ទៅជាការចុះវត្តមានលើទូរស័ព្ទ និងប្រាក់ខែស្វ័យប្រវត្តិ។",
    milestones: [
      {
        step: "ដំណាក់កាល ១",
        title: "ផ្ទៀងផ្ទាត់ទីតាំង និង Selfie",
        body: "រាល់ការចុះវត្តមានតម្រូវឲ្យផ្ទៀងផ្ទាត់កាំ GPS សាខា និងរូបថត Selfie ផ្ទាល់ ដើម្បីបញ្ជាក់វត្តមានជាក់ស្តែង។",
        tag: "ការផ្ទៀងផ្ទាត់ GPS និង Selfie",
      },
      {
        step: "ដំណាក់កាល ២",
        title: "ដឹងពីវត្តមានវេនការងារភ្លាមៗ",
        body: "ប្រធានសាខាដឹងពីបុគ្គលិកមកទាន់ពេល យឺត និងអវត្តមាន លើផ្ទាំងគ្រប់គ្រងមុនពេលចប់វេន។",
        tag: "បញ្ជីវត្តមានវេនការងារ",
      },
      {
        step: "ដំណាក់កាល ៣",
        title: "គណនាម៉ោងបន្ថែម និងការកាត់ស្វ័យប្រវត្តិ",
        body: "អត្រាថែមម៉ោង ១.៥x / ២.០x និងការកាត់យឺត គណនាដោយផ្ទាល់ពីទិន្នន័យម៉ោងដែលបានកត់ត្រា។",
        tag: "ច្បាប់ថែមម៉ោងកំណត់បាន",
      },
      {
        step: "ដំណាក់កាល ៤",
        title: "ប័ណ្ណប្រាក់ខែទ្វេប្រាក់ ដុល្លារ និងរៀល",
        body: "ផ្ទៀងផ្ទាត់ម៉ោង និងទាញយកប័ណ្ណប្រាក់ខែទ្វេភាសា ដុល្លារ និងរៀល ព្រមទាំងបន្ទាត់ ប.ស.ស.។",
        tag: "ទ្វេភាសា ដុល្លារ និងរៀល",
      },
    ],
    summary: [
      { value: "៥០–២០០ម", label: "កាំសាខា Geofence", desc: "កំណត់តាមសាខា ឬការដ្ឋានជាក់ស្តែង" },
      { value: "ដុល្លារ+រៀល", label: "រូបិយប័ណ្ណទ្វេប្រាក់", desc: "ប័ណ្ណប្រាក់ខែ និងការគណនាទ្វេភាសា" },
      { value: "១.៥× / ២.០×", label: "មេគុណថែមម៉ោង", desc: "អត្រាថែមម៉ោងធម្មតា និងថ្ងៃឈប់សម្រាក" },
    ],
  },

  steps: {
    badge: "ការរៀបចំមានការណែនាំ",
    duration: "៣ ជំហាន",
    title: "ចាប់ផ្តើមប្រើក្នុងមួយថ្ងៃ",
    sub: "បីជំហាន ពី Excel ទៅប្រាក់ខែដែលបានផ្ទៀងផ្ទាត់។",
    caption: "មានការណែនាំដំឡើង ដោយប្រើទិន្នន័យបុគ្គលិកដែលអ្នកមានស្រាប់។",
    items: [
      {
        n: "០១",
        title: "កំណត់សាខារបស់អ្នក",
        body: "ដាក់ចំណុចលើផែនទីនីមួយៗ និងកំណត់កាំ — ៥០ ម៉ែត្រសម្រាប់ការិយាល័យ ២០០ ម៉ែត្រសម្រាប់ឃ្លាំង។",
      },
      {
        n: "០២",
        title: "នាំចូលក្រុមរបស់អ្នក",
        body: "ផ្ទុកបញ្ជីបុគ្គលិក។ តួនាទី ប្រាក់ខែ សាខា និងច្បាប់វេន មកជាមួយគ្នា។",
      },
      {
        n: "០៣",
        title: "បើកប្រាក់ខែពិត",
        body: "ទិន្នន័យវត្តមានហូរចូលប្រព័ន្ធប្រាក់ខែ។ ប័ណ្ណប្រាក់ខែជាដុល្លារ និងរៀល ដោយចុចតែម្តង។",
      },
    ],
  },

  why: {
    badge: "សុវត្ថិភាព និងភាពជឿជាក់",
    title: "ហេតុអ្វីជ្រើសរើស AttendKH",
    cards: [
      {
        title: "រៀបចំ និងគ្រប់គ្រងគ្រប់សាខា",
        body: "គ្រប់គ្រងគ្រប់ទីតាំងពីកុងសូលតែមួយ។ ប្រធានសាខាឃើញសាខាខ្លួន ម្ចាស់ឃើញទាំងអស់។",
      },
      {
        title: "មើលឃើញច្បាស់ និងសម្រេចចិត្តបានត្រឹមត្រូវ",
        body: "វត្តមាន និងចំណាយកម្លាំងពលកម្មតាមសាខាផ្ទាល់ ដើម្បីឲ្យអ្នកពិនិត្យតួលេខបានទាន់ពេលវេលា។",
      },
      {
        title: "សន្សំពេលវេលាដោយច្បាប់ម៉ោងបន្ថែម និងយឺតស្វ័យប្រវត្តិ",
        body: "កំណត់រយៈពេលអនុគ្រោះ និងមេគុណម្តងជាការស្រេច។ រាល់ការបើកប្រាក់ខែបន្ទាប់អនុវត្តដោយខ្លួនឯង។",
      },
      {
        title: "ការពារទិន្នន័យដោយវិធានការសុវត្ថិភាព",
        body: "ការរក្សាទុកទិន្នន័យដែលមានការការពារ ការត្រួតពិនិត្យទីតាំង និងកំណត់ហេតុកែសម្រួលម៉ោង។",
      },
    ],
  },

  pricingTeaser: {
    eyebrow: "តម្លៃសេវាកម្ម",
    title: "ត្រឹមតែ ១.០០ ដុល្លារ ក្នុងមួយអ្នកប្រើ ក្នុងមួយខែ",
    body: "គ្មានថ្លៃដំឡើង គ្មានថ្លៃបន្ថែមតាមសាខា និងគ្មានថ្លៃលាក់កំបាំង។ ប្រើប្រាស់គ្រប់មុខងារទាំងអស់ចាប់ពីថ្ងៃដំបូង។",
    cta: "មើលតម្លៃ",
    points: ["សាខាគ្មានដែនកំណត់", "ជំនួយជាភាសាខ្មែរ និងអង់គ្លេស", "បោះបង់បានគ្រប់ពេល"],
  },

  faq: {
    badge: "សំណួរញឹកញាប់",
    title: "សំណួរដែលសួរញឹកញាប់",
    summary: "ចម្លើយច្បាស់លាស់អំពីការរៀបចំសាខា ការចុះវត្តមាន វេនបំបែក និងប្រាក់ខែស្វ័យប្រវត្តិ។",
    contactPrompt: "មានសំណួរជាក់លាក់អំពីអាជីវកម្មរបស់អ្នក?",
    contactLink: "ទាក់ទងមកក្រុមការងារយើងខ្ញុំនៅភ្នំពេញ",
    filterTabs: [
      { id: "all", label: "ទាំងអស់" },
      { id: "attendance", label: "វត្តមាន និង GPS" },
      { id: "shifts", label: "វេនការងារ" },
      { id: "payroll", label: "ប្រាក់ខែទ្វេប្រាក់" },
      { id: "offline", label: "Offline & Kiosk" },
    ],
    items: [
      {
        q: "តើ AttendKH ផ្ទៀងផ្ទាត់វត្តមានបុគ្គលិកតាមសាខាយ៉ាងដូចម្តេច?",
        a: "AttendKH ប្រើប្រាស់កាំកំណត់ទីតាំង GPS (៥០ម ដល់ ២០០ម) រួមជាមួយការថតរូប Selfie ផ្ទាល់។ ការចុះវត្តមានផ្ទៀងផ្ទាត់តែពេលចុះឈ្មោះប៉ុណ្ណោះ ដោយមិនមានការតាមដានទីតាំងជាប្រចាំឡើយ។",
        category: "វត្តមាន និង Geofence",
        tag: "កាំ ៥០ម–២០០ម",
        filterGroup: "attendance",
        highlights: ["ផ្ទៀងផ្ទាត់ GPS ជាក់ស្តែង", "រូបថត Selfie ផ្ទាល់", "មិនតាមដានជាប្រចាំ"],
      },
      {
        q: "តើប្រព័ន្ធគ្រប់គ្រងវេនបំបែកសម្រាប់ភោជនីយដ្ឋាន និងហាងកាហ្វេយ៉ាងដូចម្តេច?",
        a: "បុគ្គលិកឆុងកាហ្វេ និងបុគ្គលិកផ្ទះបាយប្រើប្រាស់ការចុះវត្តមានកាំ ៥០ម ជាមួយរូបថត selfie។ វេនបំបែករវាងពេលថ្ងៃត្រង់ និងពេលល្ងាច ត្រូវបានគ្រប់គ្រងលើកាលវិភាគតែមួយ។",
        category: "ភោជនីយដ្ឋាន និងហាងកាហ្វេ",
        tag: "វេនបំបែក",
        filterGroup: "shifts",
        highlights: ["វេនថ្ងៃត្រង់ និងល្ងាច", "កាលវិភាគរួមតែមួយ", "តាមដានវត្តមានជាក់ស្តែង"],
      },
      {
        q: "តើប្រព័ន្ធគាំទ្រហាងលក់រាយច្រើនសាខាតាមផ្សារទំនើបយ៉ាងដូចម្តេច?",
        a: "អ្នកគ្រប់គ្រងសាខាតាមផ្សារទំនើបតាមដានការមកដល់ទាន់ពេល។ ច្បាប់កាត់យឺត និងការគណនាប្រាក់កម្រៃជើងសារ ត្រូវបានបញ្ចូលទៅក្នុងប្រាក់ខែប្រចាំខែដោយផ្ទាល់។",
        category: "ហាងលក់រាយច្រើនសាខា",
        tag: "សាខាច្រើនកន្លែង",
        filterGroup: "shifts",
        highlights: ["គ្រប់គ្រងលើកុងសូលរួម", "ច្បាប់កាត់យឺតស្វ័យប្រវត្តិ", "ភ្ជាប់ជាមួយប្រាក់ខែផ្ទាល់"],
      },
      {
        q: "តើ AttendKH អាចរៀបចំកាលវិភាគ ២៤/៧ និងការគណនាថែមម៉ោងថ្ងៃបុណ្យបានទេ?",
        a: "បាន។ កាលវិភាគតាមផ្នែកសម្របសម្រួលវេនព្រឹក រសៀល និងវេនយប់ ជាមួយមេគុណម៉ោងបន្ថែម ១.៥x ធម្មតា និង ២.០x ពេលយប់ ឬថ្ងៃបុណ្យជាតិតាមច្បាប់ការងារកម្ពុជា។",
        category: "សណ្ឋាគារ និងបដិសណ្ឋារកិច្ច",
        tag: "វេន ២៤/៧",
        filterGroup: "shifts",
        highlights: ["វេនឆ្លងកាត់កណ្តាលអធ្រាត្រ", "មេគុណ ១.៥x / ២.០x", "ស្របតាមច្បាប់ការងារ"],
      },
      {
        q: "ចុះប្រសិនបើដាច់សេវាអ៊ីនធឺណិតនៅតាមឃ្លាំងទំនិញ ឬការដ្ឋាន?",
        a: "ទីលានកុងតឺន័រ និងឃ្លាំងទំនិញប្រើប្រាស់ថេប្លេត Kiosk រួម និងមុខងាររក្សាទុកទិន្នន័យក្រៅបណ្តាញ (Offline Queue) ពេលដាច់សេវាទូរស័ព្ទ ហើយធ្វើសមកាលកម្មស្វ័យប្រវត្តិតាមក្រោយ។",
        category: "ឃ្លាំងទំនិញ និងភស្តុភារ",
        tag: "Offline Queue",
        filterGroup: "offline",
        highlights: ["ថេប្លេត Kiosk រួម", "រក្សាទុកទិន្នន័យ Offline", "ធ្វើសមកាលកម្មស្វ័យប្រវត្តិ"],
      },
      {
        q: "តើការកំណត់រយៈពេលអនុគ្រោះ និងការគណនាប្រាក់ខែទ្វេប្រាក់ដំណើរការដូចម្តេច?",
        a: "ការកំណត់រយៈពេលអនុគ្រោះពេលមកយឺត (៥ ដល់ ១៥ នាទី) និងការកាត់វិភាគទាន ប.ស.ស. ជួយសម្រួលដល់ការបើកប្រាក់ខែ និងទាញយកប័ណ្ណប្រាក់ខែជាដុល្លារ និងរៀល។",
        category: "ការិយាល័យ និងប្រាក់ខែ",
        tag: "ប្រាក់ខែ ដុល្លារ+រៀល",
        filterGroup: "payroll",
        highlights: ["រយៈពេលអនុគ្រោះកំណត់បាន", "ប័ណ្ណប្រាក់ខែ ដុល្លារ/រៀល", "កាត់ ប.ស.ស. ស្វ័យប្រវត្តិ"],
      },
    ],
  },
  testimonials: {
    badge: "សំណួរញឹកញាប់",
    title: "សំណួរដែលសួរញឹកញាប់",
    summary: "ការរៀបចំទូទៅក្នុងចំណោមអាជីវកម្មនៅកម្ពុជា",
    notesLabel: "សំណួរបន្ថែម",
    notesCount: "០៦ សំណួរ",
    items: [],
  },

  cta: {
    title: "ចាប់ផ្តើមថ្ងៃនេះ",
    sub: "រៀបចំសាខារបស់អ្នក និងចាប់ផ្តើមគ្រប់គ្រងវត្តមាន និងប្រាក់ខែ។",
    button: "ចាប់ផ្តើម",
    pricingButton: "មើលតម្លៃ",
    slotBadge: "កំណត់ត្រាទី ០៦",
    slotLabel: "ការដាក់ឲ្យប្រើប្រាស់ // មានការណែនាំតាមសាខា",
    slotSubject: "ក្រុមប្រតិបត្តិការសាខារៀបចំ និងដំណើរការកត់ត្រាវត្តមានទូទាំងគ្រប់សាខា",
    slotInstruction: 'ត្រៀមផ្ទុករូបភាព៖ ដាក់ src="/team-onboarding.jpg"',
    slotAlt: "ការរៀបចំដាក់ឲ្យប្រើប្រាស់ AttendKH នៅតាមសាខា",
  },

  footer: {
    columns: [
      {
        title: "ផលិតផល",
        links: [
          { label: "វត្តមាន", href: "/attendance" },
          { label: "ប្រាក់ខែ", href: "/payroll" },
          { label: "ច្រើនសាខា", href: "/multi-branch" },
          { label: "តម្លៃ", href: "/pricing" },
        ],
      },
      {
        title: "ក្រុមហ៊ុន",
        links: [
          { label: "អំពីយើង", href: "/about" },
          { label: "អតិថិជន", href: "/customers" },
          { label: "ទំនាក់ទំនង", href: "/contact" },
          { label: "ជំនួយ", href: "/support" },
        ],
      },
      {
        title: "ធនធាន",
        links: [
          { label: "សំណួរញឹកញាប់", href: "/faq" },
          { label: "មជ្ឈមណ្ឌលជំនួយ", href: "/support" },
          { label: "គោលការណ៍ភាពឯកជន", href: "/privacy-policy" },
          { label: "លក្ខខណ្ឌប្រើប្រាស់", href: "/terms" },
        ],
      },
    ],
    contactTitle: "ទំនាក់ទំនង",
    address: "លេខ ១២ ផ្លូវ ៣១៥ ខណ្ឌទួលគោក រាជធានីភ្នំពេញ",
    email: "support@attendkh.com",
    telegram: "@attendkh",
    appsTitle: "ទាញយកកម្មវិធី",
    appStoreTop: "ទាញយកនៅលើ",
    appStoreName: "App Store",
    playTop: "ទាញយកនៅលើ",
    playName: "Google Play",
    newsletterTitle: "ចុះឈ្មោះទទួលព័ត៌មាន",
    newsletterSub: "ទទួលបានព័ត៌មានថ្មីៗពី AttendKH",
    emailPlaceholder: "បញ្ចូលអ៊ីមែលរបស់អ្នក",
    subscribe: "ចុះឈ្មោះ",
    legal: [
      { label: "លក្ខខណ្ឌប្រើប្រាស់", href: "/terms" },
      { label: "គោលការណ៍ភាពឯកជន", href: "/privacy-policy" },
      { label: "គោលការណ៍ Cookie", href: "/privacy-policy" },
    ],
    rights: "© ២០២៦ AttendKH។ រក្សាសិទ្ធិគ្រប់យ៉ាង។",
  },
};

const zh: HomeCopy = {
  nav: {
    home: "首页",
    about: "关于我们",
    features: "功能特性",
    testimonials: "用户评价",
    getStarted: "立即体验",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    product: "产品服务",
    productItems: [
      { label: "考勤打卡", desc: "GPS 定位与自拍活体核验", href: "/attendance" },
      { label: "薪酬核算", desc: "加班倍率、迟到扣款与工资条", href: "/payroll" },
      { label: "多分店管理", desc: "统一控制台管理所有门店", href: "/multi-branch" },
    ],
    pricing: "价格方案 ($1/月)",
    customers: "合作客户",
    signIn: "登录后台",
    menuTitle: "导航菜单",
    language: "语言",
    skip: "跳转至正文",
  },

  hero: {
    priceBadge: "✨ 仅需 $1.00 / 员工 / 月 • 全功能无门槛开放 • 无限制分店",
    titlePre: "全方位掌控您的团队",
    titleRotate: ["考勤记录", "薪资核算", "双语工资单", "加班审核", "轮班排表", "多分店数据"],
    titlePost: "尽在",
    sub: "实时追踪出勤、科学管理班次、每人仅需 $1 即可一键核算全国所有分店薪酬。",
    rating: "GPS与自拍真实核验 • 原生中/英/柬三语 • 美元与瑞尔双币",
    slotBadge: "现场记录 01",
    slotLabel: "早班出勤核验 // 金边 BKK1 旗舰店",
    slotSubject: "员工到达门店入口时真实的手机打卡核验界面",
    slotInstruction: '准备上传：使用 src="/hero-attendance.jpg"',
    slotAlt: "AttendKH 移动端考勤核验记录",
  },

  stats: {
    trustedPre: "专为",
    trustedNumber: "柬埔寨企业与团队",
    trustedPost: "量身定制，单店到百店皆适用",
    items: [
      { value: "$1.00", line1: "每位员工 / 月", line2: "全功能无限制" },
      { value: "50–200米", line1: "门店 GPS 围栏", line2: "覆盖半径" },
      { value: "USD + KHR", line1: "美元与柬币", line2: "双币工资单" },
    ],
  },

  featureOne: {
    title: "轻松记录与核验每一次打卡",
    body: "员工在分店有效半径内自拍打卡，每条记录均带有时间戳、地理定位与照片证明。主管在当班结束前即可清晰掌握到岗、迟到与缺勤情况。",
    cta: "了解更多",
    href: "/attendance",
    points: ["50–200米门店围栏半径", "每次打卡真人自拍核验", "支持无网络离线打卡"],
    slotBadge: "现场记录 02",
    slotLabel: "地理围栏移动打卡 // GPS与真人自拍",
    slotSubject: "在分店 50 米范围内拍摄的带有真实时间戳的打卡照片",
    slotInstruction: '准备上传：使用 src="/attendance-punch.jpg"',
    slotAlt: "AttendKH 移动打卡界面展示在岗状态与班次信息",
  },

  featureTwo: {
    title: "轻松搞定每月全员薪资结算",
    body: "系统自动将出勤记录转化为平时/公休加班倍率、迟到扣款及请假余额，一键导出美元与柬币标准双语工资单及 NSSF 报表。",
    cta: "了解更多",
    href: "/payroll",
    points: ["1.5× 与 2.0× 加班倍率", "美元与柬币双币工资条", "内置 NSSF 社保扣缴明细"],
    slotBadge: "现场记录 03",
    slotLabel: "双语工资条 // 美元与柬币明细",
    slotSubject: "包含可配置 NSSF 社保明细的中英柬双语薪资导出单",
    slotInstruction: '准备上传：使用 src="/payroll-slip.jpg"',
    slotAlt: "美元与柬币双币薪资明细汇总",
  },

  otLeave: {
    title: "加班与请假申请，手机一键审批",
    body: "员工可在手机端根据排班时长发起加班与休假申请，管理者实时审批，所有操作留痕并直接计入当月工资条。",
    points: [
      "根据员工实际排班自动计算加班时数",
      "包含原因、时间戳及审批人的完整审计流",
      "审批通过的加班与假期自动同步至薪资结算",
    ],
    cta: "查看审批流程",
    href: "/attendance",
    slotBadge: "现场记录 04",
    slotLabel: "加班申请 // 员工提交端",
    slotSubject: "展示加班制度、自动计算工时与审批提交的界面",
    slotInstruction: '准备上传：使用 src="/ot-frame-5.webp"',
    slotAlt: "AttendKH 加班申请界面在提交前展示计算时长",
  },

  cambodiaFit: {
    badge: "🇰🇭 专为柬埔寨深度定制",
    title: "深度契合柬埔寨企业实际运营管理习惯",
    sub: "AttendKH 完美支持 GPS 围栏定位、双币种薪资、跨夜班次及柬埔寨劳工法加班规则，无需海外软件繁琐绕道。",
    items: [
      {
        title: "中 / 英 / 柬 多语言界面",
        desc: "基层员工可使用高棉语或中文，外籍主管与投资人可使用英文或中文，随时一键切换。",
      },
      {
        title: "美元 (USD) 与柬币 (KHR) 双币薪酬",
        desc: "支持美元与瑞尔基本薪资核算、扣款与加班费，并生成规范的双币明细工资单。",
      },
      {
        title: "加班规则与 NSSF 社保明细",
        desc: "支持 1.5× 平时加班与 2.0× 休息日/节假日倍率，一键导出柬埔寨国家社保（NSSF / ប.ស.ស.）扣缴明细。",
      },
      {
        title: "无惧断网的离线考勤同步",
        desc: "即使移动信号或 Wi-Fi 中断，打卡数据也能安全缓存在手机本地，网络恢复后毫秒级同步上报。",
      },
    ],
    slotBadge: "现场记录 05",
    slotLabel: "劳工标准 // 柬埔寨法定规则",
    slotSubject: "柬埔寨法定节假日安排、轮班表及 NSSF 缴费对照表",
    slotInstruction: '准备上传：使用 src="/cambodia-compliance.jpg"',
    slotAlt: "柬埔寨劳工法规与法定假日排表",
  },

  impact: {
    badge: "企业运营蓝图",
    title: "柬埔寨企业如何通过 AttendKH 实现数字化升级",
    sub: "从传统的纸质登记簿无缝过渡到移动打卡与智能化算薪自动化流程。",
    milestones: [
      {
        step: "第 1 阶段",
        title: "定位与真人自拍核验",
        body: "必须在指定分店 GPS 范围内完成自拍打卡，彻底杜绝代打卡与虚假出勤。",
        tag: "GPS + 自拍活体核验",
      },
      {
        step: "第 2 阶段",
        title: "实时出勤与排班监控",
        body: "分店经理在下班前即可在后台一览出勤、迟到与缺岗情况，便于临时调度。",
        tag: "实时排班大盘",
      },
      {
        step: "第 3 阶段",
        title: "全自动加班与扣款核算",
        body: "1.5× / 2.0× 加班倍率与迟到宽限期规则直接根据打卡时间戳全自动计算。",
        tag: "灵活加班与奖惩规则",
      },
      {
        step: "第 4 阶段",
        title: "双币标准工资条一键导出",
        body: "一键对账并导出包含 NSSF 社保明细的美元与柬币 PDF 工资单与银行发薪文件。",
        tag: "双币双语结算",
      },
    ],
    summary: [
      { value: "50-200米", label: "门店围栏范围", desc: "可按分店灵活设置打卡半径" },
      { value: "USD + KHR", label: "双币种结算", desc: "双语工资单与精准汇率换算" },
      { value: "1.5x / 2.0x", label: "加班倍率配置", desc: "平时、公休与法定节假日自动核算" },
    ],
  },

  steps: {
    badge: "人事与运营部署指南",
    duration: "仅需 3 步",
    title: "为 HR 团队量身打造的极速上线流程",
    sub: "配置分店规则、批量导入员工、审批首期合规工资表。",
    caption: "使用您现有的员工与薪资表格快速完成配置引导。",
    items: [
      {
        n: "01",
        title: "配置各分店规则",
        body: "HR 在地图上圈选分店位置、设定考勤半径、上下班时间与加班宽限期。",
      },
      {
        n: "02",
        title: "导入员工花名册",
        body: "通过现有 Excel 一键导入岗位、薪资、所属门店与排班信息。",
      },
      {
        n: "03",
        title: "审核出勤并一键发薪",
        body: "HR 复核考勤异常，确认后一键导出美元与柬币工资单并分发给员工。",
      },
    ],
  },

  why: {
    badge: "安全与可靠保障",
    title: "为什么选择 AttendKH",
    cards: [
      {
        title: "清晰掌控所有分店运营情况",
        body: "一个统一后台管理所有门店。分店长管理本店，企业高层统览全国所有业务线。",
      },
      {
        title: "实时掌握各店用工成本与出勤率",
        body: "实时查看每家分店出勤动态与实时工时支出，助力做出更精准的经营决策。",
      },
      {
        title: "自动计算加班与迟到，大幅节省时间",
        body: "一次性设定免罚宽限期与加班倍率，每月发薪时全自动精准执行，零人工差错。",
      },
      {
        title: "金融级数据安全与合规审计日志",
        body: "传输与存储全程加密，每一次考勤与打卡均记录不可篡改的审计日志。",
      },
    ],
  },

  pricingTeaser: {
    eyebrow: "价格方案",
    title: "纯粹透明：每位员工仅需 $1.00 / 月",
    body: "无分店开通附加费，无安装部署费，无任何隐藏费用。从首日起即可无限制使用全部功能。",
    cta: "查看价格详情",
    points: ["无限制分店数量", "中/英/柬三语本土客服支持", "随时可灵活取消订阅"],
  },

  faq: {
    badge: "常见问题解答",
    title: "企业管理者关心的常见疑问",
    summary: "关于系统部署、多班次排班、考勤打卡及薪酬计算的详细解答。",
    contactPrompt: "对您的团队配置有具体疑问？",
    contactLink: "咨询我们的金边本土服务团队",
    filterTabs: [
      { id: "all", label: "所有主题" },
      { id: "attendance", label: "GPS与考勤" },
      { id: "shifts", label: "排班与轮班" },
      { id: "payroll", label: "双币与薪酬" },
      { id: "offline", label: "离线与平板模式" },
    ],
    items: [
      {
        q: "AttendKH 如何验证员工在分店的真实出勤？",
        a: "AttendKH 结合了精准 GPS 地理围栏（50米至200米可调）与强制真人自拍活体核验。打卡仅在员工身处门店现场时生效，且绝不在后台持续追踪位置，省电且保护隐私。",
        category: "考勤与地理围栏",
        tag: "50米–200米围栏",
        filterGroup: "attendance",
        highlights: ["即时 GPS 位置校验", "强制真人自拍防代打", "无后台耗电持续追踪"],
      },
      {
        q: "餐厅、咖啡馆及餐饮行业能否支持分段班（中晚分班）？",
        a: "完全支持。前台咖啡师或后厨员工可在同一排班表中分别完成午高峰（如 10:30–14:00）和晚市（如 17:00–22:00）的出勤打卡，主管实时掌握出勤覆盖率。",
        category: "餐饮与服务业排班",
        tag: "分段跨班次",
        filterGroup: "shifts",
        highlights: ["中晚市分段打卡", "统一班次排表", "前厅后厨实时看板"],
      },
      {
        q: "商场内的多家连锁零售店如何统一协同管理？",
        a: "跨商场各门店店长可在中央后台实时查看各店到岗与准时率，迟到扣款与销售提成规则可直接关联计入每月薪资核算。",
        category: "连锁零售门店",
        tag: "多门店协同",
        filterGroup: "shifts",
        highlights: ["中央分店控制台", "自动迟到扣款规则", "无缝衔接薪资结算"],
      },
      {
        q: "是否支持 24/7 全天候轮班、夜班跨日及节假日加班倍率？",
        a: "支持。系统支持跨越午夜 12 点的夜班，并严格按照柬埔寨劳工法自动计算 1.5× 平时延时加班与 2.0× 休息日/节假日加班薪资。",
        category: "酒店与24小时运营",
        tag: "24/7 轮班排程",
        filterGroup: "shifts",
        highlights: ["跨越午夜夜班考勤", "1.5× / 2.0× 加班规则", "完全符合柬埔寨劳工法"],
      },
      {
        q: "物流仓库或货运堆场断网时如何打卡？",
        a: "偏远仓库或集装箱堆场可启用公用平板考勤机模式与本地离线缓存，网络中断时打卡照常记录，恢复连接后自动秒级同步至云端。",
        category: "物流与仓储管理",
        tag: "离线本地排队",
        filterGroup: "offline",
        highlights: ["公用平板考勤机模式", "离线时间戳本地加密缓存", "联网自动云端同步"],
      },
      {
        q: "如何配置迟到免罚宽限期与美元/柬币双币工资条？",
        a: "HR 可按需配置 5 至 15 分钟的迟到免罚宽限期，系统自动计算出勤率与 NSSF 社保扣缴，一键导出美元与瑞尔双币明细工资单。",
        category: "薪资与法律合规",
        tag: "美元与柬币双币结算",
        filterGroup: "payroll",
        highlights: ["灵活免罚宽限期", "双语双币工资单", "自动 NSSF 社保计算"],
      },
    ],
  },
  testimonials: {
    badge: "常见问答",
    title: "企业管理者常问解答",
    summary: "柬埔寨企业在日常落地运营中的常见问题与配置方案",
    notesLabel: "更多解答",
    notesCount: "06 个解答",
    items: [],
  },

  cta: {
    title: "今天就开启高效管理",
    sub: "即刻连接您的所有分店，轻松搞定团队考勤与薪资核算。",
    button: "立即免费试用",
    pricingButton: "查看价格",
    slotBadge: "现场记录 06",
    slotLabel: "分店极速上线演示",
    slotSubject: "分店运营团队快速配置完成并启动全员出勤打卡",
    slotInstruction: '准备上传：使用 src="/team-onboarding.jpg"',
    slotAlt: "AttendKH 团队入驻与极速部署现场",
  },

  footer: {
    columns: [
      {
        title: "产品服务",
        links: [
          { label: "考勤打卡", href: "/attendance" },
          { label: "薪酬核算", href: "/payroll" },
          { label: "多分店管理", href: "/multi-branch" },
          { label: "价格方案", href: "/pricing" },
        ],
      },
      {
        title: "关于企业",
        links: [
          { label: "关于我们", href: "/about" },
          { label: "合作客户", href: "/customers" },
          { label: "联系我们", href: "/contact" },
          { label: "服务支持", href: "/support" },
        ],
      },
      {
        title: "帮助与条款",
        links: [
          { label: "常见问题", href: "/faq" },
          { label: "帮助中心", href: "/support" },
          { label: "隐私政策", href: "/privacy-policy" },
          { label: "服务条款", href: "/terms" },
        ],
      },
    ],
    contactTitle: "联系方式",
    address: "金边市堆谷区 315 街 12 号",
    email: "support@attendkh.com",
    telegram: "@attendkh",
    appsTitle: "下载移动应用",
    appStoreTop: "前往下载",
    appStoreName: "App Store",
    playTop: "前往下载",
    playName: "Google Play",
    newsletterTitle: "订阅最新资讯",
    newsletterSub: "获取柬埔寨用工指南与 AttendKH 最新动态",
    emailPlaceholder: "输入您的工作邮箱",
    subscribe: "订阅",
    legal: [
      { label: "服务条款", href: "/terms" },
      { label: "隐私政策", href: "/privacy-policy" },
      { label: "Cookie 政策", href: "/privacy-policy" },
    ],
    rights: "© 2026 AttendKH。保留所有权利。",
  },
};

export const homeCopy: Record<Lang, HomeCopy> = { en, km, zh };
