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
    pricing: "Pricing",
    customers: "Customers",
    signIn: "Sign In",
    menuTitle: "Menu",
    language: "Language",
    skip: "Skip to content",
  },

  hero: {
    titlePre: "Take Control of Your",
    titleRotate: ["Attendance", "Payroll", "Payslips", "Overtime", "Shifts", "Branches"],
    titlePost: "with",
    sub: "Track attendance, manage shifts, and run payroll across every branch.",
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
      { value: "50–200m", line1: "Branch Geofence", line2: "Radius" },
      { value: "USD + KHR", line1: "Dual-Currency", line2: "Payslips" },
      { value: "Offline Sync", line1: "Local Punch", line2: "Queueing" },
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
    title: "From $1.50 per user, per month",
    body: "No setup fee and no per-branch surcharge. Start with 14 days free, no card required.",
    cta: "See pricing",
    points: ["Unlimited branches on Growth", "Support in Khmer and English", "Cancel any time"],
  },

  testimonials: {
    badge: "TEAM PROFILES",
    title: "Example Team Configurations",
    summary: "Common operational setups across Cambodian organizations",
    notesLabel: "More team profiles",
    notesCount: "04 / 05",
    items: [
      {
        name: "Multi-Shift F&B Operations",
        initials: "FB",
        quote:
          "Frontline baristas and kitchen crews use 50m branch geofences with mandatory selfie proof. Split shifts between lunch and dinner rushes are managed on a single schedule.",
        time: "F&B Profile",
        date: "Split Shifts",
      },
      {
        name: "Multi-Store Retail Chain",
        initials: "RT",
        quote:
          "Store managers across multiple shopping mall outlets track floor punctuality. Late arrival rules and sales commission adjustments flow directly into monthly payroll.",
        time: "Retail Profile",
        date: "Multi-Store",
      },
      {
        name: "24/7 Hotel & Hospitality",
        initials: "HP",
        quote:
          "Department rosters coordinate morning, afternoon, and night audit shifts with configurable night and public-holiday multipliers.",
        time: "Hospitality Profile",
        date: "24/7 Rosters",
      },
      {
        name: "Field Logistics & Warehouse",
        initials: "LG",
        quote:
          "Remote container yards and warehouse facilities use shared tablet kiosks and local offline punch caching during network dropouts.",
        time: "Logistics Profile",
        date: "Offline Queue",
      },
      {
        name: "Commercial Office & Agencies",
        initials: "OF",
        quote:
          "Configurable late grace periods (5 to 15 minutes) and automated NSSF contribution line items simplify monthly salary exports in USD and KHR.",
        time: "Office Profile",
        date: "Dual Currency",
      },
    ],
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
    pricing: "តម្លៃ",
    customers: "អតិថិជន",
    signIn: "ចូលគណនី",
    menuTitle: "ម៉ឺនុយ",
    language: "ភាសា",
    skip: "រំលងទៅមាតិកា",
  },

  hero: {
    titlePre: "គ្រប់គ្រង",
    titleRotate: ["វត្តមាន", "បញ្ជីប្រាក់ខែ", "ប័ណ្ណប្រាក់ខែ", "ម៉ោងបន្ថែម", "វេនធ្វើការ", "គ្រប់សាខា"],
    titlePost: "ក្រុមអ្នក ជាមួយ",
    sub: "តាមដានវត្តមាន គ្រប់គ្រងវេន និងរៀបចំប្រាក់ខែគ្រប់សាខារបស់អ្នក",
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
      { value: "៥០–២០០ម", line1: "កាំ Geofence", line2: "តាមសាខា" },
      { value: "ដុល្លារ+រៀល", line1: "ប័ណ្ណប្រាក់ខែ", line2: "ពីររូបិយប័ណ្ណ" },
      { value: "Queued", line1: "គាំទ្រការ", line2: "សមកក្រៅបណ្តាញ" },
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
    eyebrow: "តម្លៃ",
    title: "ចាប់ពី ១.៥០ ដុល្លារ ក្នុងមួយអ្នកប្រើ ក្នុងមួយខែ",
    body: "គ្មានថ្លៃដំឡើង និងគ្មានថ្លៃបន្ថែមតាមសាខា។ ចាប់ផ្តើមឥតគិតថ្លៃ ១៤ ថ្ងៃ មិនត្រូវការកាត។",
    cta: "មើលតម្លៃ",
    points: ["សាខាគ្មានដែនកំណត់លើ Growth", "ជំនួយជាភាសាខ្មែរ និងអង់គ្លេស", "បោះបង់បានគ្រប់ពេល"],
  },

  testimonials: {
    badge: "គំរូការងារតាមវិស័យ",
    title: "គំរូការរៀបចំតាមក្រុមការងារ",
    summary: "ការរៀបចំទូទៅក្នុងចំណោមអាជីវកម្មនៅកម្ពុជា",
    notesLabel: "គំរូការងារបន្ថែម",
    notesCount: "០៤ / ០៥",
    items: [
      {
        name: "ភោជនីយដ្ឋាន និងហាងកាហ្វេ",
        initials: "FB",
        quote:
          "បុគ្គលិកឆុងកាហ្វេ និងបុគ្គលិកផ្ទះបាយប្រើប្រាស់ការចុះវត្តមានកាំ ៥០ម ជាមួយរូបថត selfie។ វេនបំបែករវាងពេលថ្ងៃត្រង់ និងពេលល្ងាច ត្រូវបានគ្រប់គ្រងលើកាលវិភាគតែមួយ។",
        time: "F&B Profile",
        date: "Split Shifts",
      },
      {
        name: "ហាងលក់រាយច្រើនសាខា",
        initials: "RT",
        quote:
          "អ្នកគ្រប់គ្រងសាខាតាមផ្សារទំនើបតាមដានការមកដល់ទាន់ពេល។ ច្បាប់កាត់យឺត និងការគណនាប្រាក់កម្រៃជើងសារ ត្រូវបានបញ្ចូលទៅក្នុងប្រាក់ខែប្រចាំខែដោយផ្ទាល់។",
        time: "Retail Profile",
        date: "Multi-Store",
      },
      {
        name: "សណ្ឋាគារ និងបដិសណ្ឋារកិច្ច ២៤/៧",
        initials: "HP",
        quote:
          "កាលវិភាគតាមផ្នែកសម្របសម្រួលវេនព្រឹក រសៀល និងវេនយប់ ជាមួយមេគុណម៉ោងបន្ថែមពេលយប់ និងថ្ងៃបុណ្យជាតិតាមច្បាប់ការងារ។",
        time: "Hospitality Profile",
        date: "24/7 Rosters",
      },
      {
        name: "ឃ្លាំងទំនិញ និងភស្តុភារ",
        initials: "LG",
        quote:
          "ទីលានកុងតឺន័រ និងឃ្លាំងទំនិញប្រើប្រាស់ថេប្លេត Kiosk រួម និងមុខងាររក្សាទុកទិន្នន័យក្រៅបណ្តាញ (Offline Queue) ពេលដាច់សេវាទូរស័ព្ទ។",
        time: "Logistics Profile",
        date: "Offline Queue",
      },
      {
        name: "ការិយាល័យ និងក្រុមហ៊ុនសេវាកម្ម",
        initials: "OF",
        quote:
          "ការកំណត់រយៈពេលអនុគ្រោះពេលមកយឺត (៥ ដល់ ១៥ នាទី) និងការកាត់វិភាគទាន ប.ស.ស. ជួយសម្រួលដល់ការបើកប្រាក់ខែជាដុល្លារ និងរៀល។",
        time: "Office Profile",
        date: "Dual Currency",
      },
    ],
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

export const homeCopy: Record<Lang, HomeCopy> = { en, km };
