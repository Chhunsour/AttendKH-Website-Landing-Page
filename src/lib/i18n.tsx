"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { formatCurrency } from "@/lib/currency";

export type Lang = "en" | "km";
export type Currency = "USD" | "KHR";

const en = {
  nav: {
    attendance: "Attendance",
    payroll: "Payroll",
    pricing: "Pricing",
    about: "About",
    contact: "Contact",
    signIn: "Sign in",
    demo: "Book a demo",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  common: {
    trial: "Start free trial",
    trialNote: "14 days free — no card required",
    seeHow: "See how it works",
    backHome: "Back to home",
  },
  home: {
    kicker: "Attendance & payroll — Cambodia",
    titleA: "The attendance and payroll system",
    titleAccent: "built for Cambodia.",
    sub: "GPS clock-in, selfie verification and one-click payroll in USD and KHR. From one branch to fifty.",
    imgLabel: "Image — app clock-in screen",
    imgCaption: "The AttendKH app: GPS-verified clock-in with a live selfie check.",
    trustedLabel: "Trusted by teams at",
    trusted: ["Brownfield Coffee", "Angkor Boutiques", "Mekong Fast", "Kandal Retail", "PP Logistics"],
    workKicker: "What it does",
    workTitle: "Three jobs, done properly.",
    work: [
      {
        n: "01",
        t: "Geofenced clock-in",
        d: "Staff clock in inside a 50–200 m branch radius, verified with a live selfie. Buddy punching stops on day one.",
        img: "Image — staff arriving at a branch",
      },
      {
        n: "02",
        t: "One-click payroll",
        d: "Hourly rates, late rules, overtime and bilingual payslips — calculated in seconds, in USD and KHR.",
        img: "Image — payroll run summary",
      },
      {
        n: "03",
        t: "Multi-branch control",
        d: "One console for every location. Branch managers see their site; owners see everything.",
        img: "Image — multi-branch overview",
      },
    ],
    featA: {
      kicker: "Attendance",
      title: "Clock-in you can trust.",
      bullets: [
        "GPS radius per branch, from 50 to 200 m",
        "Live selfie check at every punch",
        "Works offline — syncs when the network returns",
        "Late reasons your managers actually understand",
      ],
      img: "Image — retail staff, Siem Reap",
      caption: "Mobile and kiosk clock-in at a boutique in Siem Reap.",
    },
    featB: {
      kicker: "Payroll",
      title: "Payroll without the spreadsheets.",
      formula: "( base ÷ fixed days ÷ 8 ) = hourly rate",
      bullets: [
        "15-minute grace, then per-minute deductions",
        "Overtime ×1.5 — rest days and holidays ×2.0",
        "Bilingual PDF payslips for every employee",
        "NSSF fields and export-ready reports",
      ],
      img: "Image — bilingual payslip PDF",
    },
    metrics: [
      { v: "99.9%", l: "GPS verification accuracy" },
      { v: "90%", l: "less time spent on payroll" },
      { v: "250+", l: "Cambodian businesses on board" },
    ],
    quote: {
      text: "Payroll used to take three days across six branches. Now it is one click — and every payslip is already in Khmer and English.",
      name: "Dara Chan",
      role: "Operations Director, F&B group — Phnom Penh",
    },
    cta: {
      title: "Ready when you are.",
      sub: "Set up your first branch in about five minutes.",
      primary: "Start free trial",
      secondary: "Book a demo",
    },
  },
};

const enFull = {
  ...en,
  attendance: {
    kicker: "Attendance",
    title: "Every clock-in, verified.",
    sub: "GPS geofencing and selfie checks that make time theft impossible — and stay out of your team's way.",
    heroImg: "Image — clock-in screen",
    points: [
      { t: "Radius per branch", d: "50–200 m, drawn once on a map." },
      { t: "Live selfie check", d: "Liveness detection at every punch." },
      { t: "Offline first", d: "Clock-ins queue on the device and sync later." },
      { t: "Local late reasons", d: "Rain, traffic, vehicle trouble, clinic — one tap." },
    ],
    galleryImg: "Image — branch floor, kiosk mode",
    galleryCaption: "Shared tablet clock-in for teams without personal phones.",
    specsTitle: "Specifications",
    specs: [
      ["GPS accuracy", "±2.1 m"],
      ["Radius range", "50–200 m"],
      ["Offline queue", "Unlimited"],
      ["Sync time", "Under 60 s"],
    ],
  },
  payroll: {
    kicker: "Payroll",
    title: "Payroll in one click.",
    sub: "Attendance in, payslips out — deductions, overtime and all, in USD and KHR.",
    heroImg: "Image — payslip PDF",
    sim: {
      kicker: "Try it",
      title: "Run the numbers.",
      base: "Base monthly salary",
      days: "Fixed working days",
      late: "Minutes late",
      ot: "Overtime hours",
      otType: "Overtime type",
      otRegular: "Regular ×1.5",
      otRest: "Rest day ×2.0",
      otHoliday: "Holiday ×2.0",
      hourly: "Hourly rate",
      lateOut: "Late deduction",
      otOut: "Overtime",
      gross: "Gross pay",
      net: "Net take-home",
      grace: "after 15-min grace",
      note: "Estimate before NSSF and company rules. Rate: 1 USD = 4,100 KHR.",
    },
    rulesKicker: "The rules, built in",
    rulesTitle: "Compliant by default.",
    rules: [
      "22- and 26-day working-month modes",
      "15-minute grace, then per-minute deductions",
      "Overtime ×1.5 — rest days and holidays ×2.0",
      "NSSF contribution fields on every run",
      "Cambodian public holidays auto-synced",
      "Bilingual PDF payslips for every employee",
    ],
  },
  pricing: {
    kicker: "Pricing",
    title: "Simple, per-person pricing.",
    sub: "Annual billing includes two months free. Pay by card, KHQR or local bank transfer.",
    monthly: "Monthly",
    annual: "Annual",
    save: "2 months free",
    per: "/user/mo",
    billedAnnually: "per user, billed annually",
    billedMonthly: "per user, billed monthly",
    popular: "Most popular",
    plans: [
      {
        name: "Starter",
        desc: "For teams up to 20.",
        price: 1.5,
        features: ["GPS attendance", "Leave tracking", "Mobile app, iOS & Android", "Email support"],
        cta: "Start free trial",
      },
      {
        name: "Growth",
        desc: "For multi-branch teams up to 150.",
        price: 2.5,
        features: [
          "Everything in Starter",
          "Payroll engine & payslips",
          "Selfie verification",
          "Overtime & holiday rules",
          "Expense claims",
        ],
        cta: "Start free trial",
      },
      {
        name: "Enterprise",
        desc: "Unlimited branches, custom rules.",
        price: 3.5,
        features: ["Everything in Growth", "Custom roles & API", "Dedicated manager", "Custom labor rules"],
        cta: "Contact sales",
      },
    ],
    faqTitle: "Common questions",
    faq: [
      {
        q: "Does it work offline?",
        a: "Yes. Clock-ins are stored on the device and sync automatically when the connection returns.",
      },
      {
        q: "Can we import from Excel?",
        a: "Yes. Upload XLSX or CSV, match the columns, and invitations go out by SMS or Telegram.",
      },
      {
        q: "Are payslips in both currencies?",
        a: "Every payslip shows USD and KHR at your configured rate, in Khmer and English.",
      },
      { q: "Can we cancel?", a: "Anytime, from the console. Your data exports to Excel." },
    ],
  },
  about: {
    kicker: "About",
    title: "HR software for Cambodia, not California.",
    sub: "Khmer first, riel first, and built for the realities of running shifts here.",
    img: "Image — team, Phnom Penh office",
    story: [
      "AttendKH began in Phnom Penh, after one payroll week too many lost to spreadsheets and paper leave forms. We wanted software that spoke Khmer, counted in riel, and knew when Pchum Ben was coming.",
      "Today a team of eleven serves more than 250 businesses — coffee chains, boutiques, factories and delivery fleets across the country.",
    ],
    valuesTitle: "How we work",
    values: [
      { n: "01", t: "Local first", d: "Khmer and English equally. Riel and dollars equally. Cambodian holidays and labor law from day one." },
      { n: "02", t: "Plain software", d: "If a manager needs training to use it, we redesign it." },
      { n: "03", t: "Trust by default", d: "Every clock-in is verified, every change is logged, nothing is hidden." },
    ],
    facts: [
      ["Founded", "2024"],
      ["Office", "Phnom Penh"],
      ["Customers", "250+"],
      ["Team", "11 people"],
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Talk to us.",
    sub: "Sales, support or a question — we reply within one business day.",
    sales: "Sales",
    support: "Support",
    telegram: "Telegram",
    office: "Office",
    hours: "Hours",
    officeVal: "Vattanac Tower, Level 28, Preah Monivong Blvd, Phnom Penh",
    hoursVal: "Mon–Fri, 8:00–17:00 ICT",
    formName: "Name",
    formEmail: "Work email",
    formCompany: "Company",
    formMessage: "What do you need?",
    send: "Send message",
    img: "Image — map, Phnom Penh office",
  },
  legal: {
    privacy: {
      title: "Privacy Policy",
      updated: "Last updated — August 2026",
      p1: "AttendKH stores attendance records, verification photos and payroll data on behalf of your company. Data is encrypted in transit and at rest, and only roles with permission can see it.",
      p2: "We never sell personal data. Selfie photos are used only to verify clock-ins and are deleted according to your company's retention settings.",
      p3: "Questions about data can go to support@attendkh.com or Telegram @attendkh at any time.",
    },
    terms: {
      title: "Terms of Service",
      updated: "Last updated — August 2026",
      p1: "AttendKH is provided per user, per month, with a 14-day free trial. You can cancel at any time from the console; your data remains exportable for 30 days.",
      p2: "Fair use applies to storage and API traffic. Enterprise plans may arrange custom terms with our team.",
      p3: "Cambodian law governs these terms; disputes fall under the courts of Phnom Penh.",
    },
    support: {
      title: "Support",
      updated: "We reply within one business day",
      p1: "Email support@attendkh.com, message @attendkh on Telegram, or use the in-app help button. Phone support is available on Enterprise plans.",
      p2: "Guides cover setup, Excel import, geofence drawing, payroll runs and payslips — in Khmer and English.",
      p3: "Enterprise customers also get a named account manager and on-site training in Phnom Penh.",
    },
  },
  footer: {
    tagline: "Attendance and payroll for Cambodian teams.",
    product: "Product",
    company: "Company",
    legalCol: "Legal",
    address: "Vattanac Tower, Level 28, Phnom Penh",
    email: "support@attendkh.com",
    telegram: "@attendkh",
    rights: "© 2026 AttendKH — Made in Cambodia",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    support: "Support",
  },
};

export type Dict = typeof enFull;

const km = {
  nav: {
    attendance: "វត្តមាន",
    payroll: "ប្រាក់ខែ",
    pricing: "តម្លៃ",
    about: "អំពីយើង",
    contact: "ទំនាក់ទំនង",
    signIn: "ចូលគណនី",
    demo: "សុំដេម៉ូ",
    openMenu: "បើកម៉ឺនុយ",
    closeMenu: "បិទម៉ឺនុយ",
  },
  common: {
    trial: "សាកល្បងឥតគិតថ្លៃ",
    trialNote: "សាកល្បង ១៤ ថ្ងៃ — មិនតម្រូវបណ្ណ",
    seeHow: "មើលរបៀបធ្វើការ",
    backHome: "ត្រឡប់ទៅទំព័រដើម",
  },
  home: {
    kicker: "វត្តមាន និងប្រាក់ខែ — កម្ពុជា",
    titleA: "ប្រព័ន្ធវត្តមាន និងប្រាក់ខែ",
    titleAccent: "សម្រាប់កម្ពុជា។",
    sub: "ចុះឈ្មោះតាម GPS ផ្ទៀងផ្ទាត់សេលហ្វី និងប្រាក់ខែក្នុងមួយចុច ជាដុល្លារ និងរៀល — ពីសាខាតូចដល់សាខាច្រើន។",
    imgLabel: "រូបភាព — អេក្រង់ចុះឈ្មោះ",
    imgCaption: "កម្មវិធី AttendKH៖ ចុះឈ្មោះតាម GPS ជាមួយការផ្ទៀងផ្ទាត់សេលហ្វី។",
    trustedLabel: "ទុកចិត្តដោយក្រុមងារ",
    trusted: ["Brownfield Coffee", "Angkor Boutiques", "Mekong Fast", "Kandal Retail", "PP Logistics"],
    workKicker: "អ្វីដែលវាធ្វើ",
    workTitle: "កិច្ចការ ៣ យ៉ាង ធ្វើបានត្រឹមត្រូវ។",
    work: [
      { n: "០១", t: "ចុះឈ្មោះតាមកាំរងស៊ីកល", d: "បុគ្គលិកចុះឈ្មោះបានតែក្នុងកាំរងស៊ីកល ៥០–២០០ ម៉ែត្រ ផ្ទៀងផ្ទាត់ដោយសេលហ្វី។ ការចុះឈ្មោះជំនួសគ្នាបញ្ចប់តែម្តង។", img: "រូបភាព — បុគ្គលិកមកដល់សាខា" },
      { n: "០២", t: "ប្រាក់ខែក្នុងមួយចុច", d: "អត្រាម៉ោង ច្បាប់មកយឺត ម៉ោងបន្ថែម និងស្លីបពីរភាសា — គណនាក្នុងប៉ុន្មានវិនាទី ទាំងដុល្លារ និងរៀល។", img: "រូបភាព — សង្ខេបការធ្វើប្រាក់ខែ" },
      { n: "០៣", t: "គ្រប់គ្រងសាខាច្រើន", d: "កុងសូលតែមួយសម្រាប់គ្រប់ទីតាំង។ អ្នកគ្រប់គ្រងសាខាឃើញតែសាខាខ្លួន ម្ចាស់ឃើញទាំងអស់។", img: "រូបភាព — ទិដ្ឋភាពសាខាច្រើន" },
    ],
    featA: {
      kicker: "វត្តមាន",
      title: "ការចុះឈ្មោះដែលអ្នកជឿជាក់បាន។",
      bullets: [
        "កាំរងស៊ីកលតាមសាខា ចាប់ពី ៥០ ដល់ ២០០ ម៉ែត្រ",
        "ផ្ទៀងផ្ទាត់សេលហ្វីរាល់ការចុះឈ្មោះ",
        "ប្រើបានពេលគ្មានអ៊ីនធឺណិត — សមកក្រោយមក",
        "មូលហេតុមកយឺតដែលអ្នកគ្រប់គ្រងយល់",
      ],
      img: "រូបភាព — បុគ្គលិកលក់រាយ សៀមរាប",
      caption: "ចុះឈ្មោះតាមទូរស័ព្ទ និងតុ នៅហាងមួយក្នុងសៀមរាប។",
    },
    featB: {
      kicker: "ប្រាក់ខែ",
      title: "ប្រាក់ខែដោយគ្មាន Excel។",
      formula: "( ខែគោល ÷ ថ្ងៃធ្វើការ ÷ ៨ ) = អត្រាម៉ោង",
      bullets: [
        "អនុគ្រោះ ១៥ នាទី បន្ទាប់មកគិតជានាទី",
        "ម៉ោងបន្ថែម ×១.៥ — ថ្ងៃសម្រាក និងបុណ្យ ×២.០",
        "ស្លីប PDF ពីរភាសាដល់បុគ្គលិករាល់រូប",
        "ជួរឈរ NSSF និងរបាយការណ៍នាំចេញបាន",
      ],
      img: "រូបភាព — ស្លីប PDF ពីរភាសា",
    },
    metrics: [
      { v: "99.9%", l: "ភាពជាក់លាក់ផ្ទៀងផ្ទាត់ GPS" },
      { v: "90%", l: "សន្សំពេលធ្វើប្រាក់ខែ" },
      { v: "250+", l: "អាជីវកម្មកម្ពុជាបានចូលរួម" },
    ],
    quote: {
      text: "ពេលមុន ការធ្វើប្រាក់ខែចំណាយ ៣ ថ្ងៃតាមសាខា ៦។ ឥឡូវគ្រាន់តែមួយចុច — ស្លីបទាំងអស់ចេញជាខ្មែរ និងអង់គ្លេសរួចរាល់។",
      name: "ចាន់ ដារា",
      role: "នាយកប្រតិបត្តិការ ភោជនីយដ្ឋាន — ភ្នំពេញ",
    },
    cta: {
      title: "ត្រៀមរួចរាល់ហើយ។",
      sub: "ដំឡើងសាខាដំបូងរបស់អ្នកក្នុងរយៈពេលប្រហែល ៥ នាទី។",
      primary: "សាកល្បងឥតគិតថ្លៃ",
      secondary: "សុំដេម៉ូ",
    },
  },
};

const kmFull: Dict = {
  ...km,
  attendance: {
    kicker: "វត្តមាន",
    title: "រាល់ការចុះឈ្មោះ ផ្ទៀងផ្ទាត់ហើយ។",
    sub: "រនាំង GPS និងការពិនិត្យសេលហ្វី ធ្វើឲ្យការកុបករពេលវេលាអត់ផ្លូវទៅ — ដោយមិនរំខានក្រុមការងារ។",
    heroImg: "រូបភាព — អេក្រង់ចុះឈ្មោះ",
    points: [
      { t: "កាំរងស៊ីកលតាមសាខា", d: "៥០–២០០ ម៉ែត្រ គំនូរតែម្តងលើផែនទី។" },
      { t: "ផ្ទៀងផ្ទាត់សេលហ្វីផ្ទាល់", d: "ពិនិត្យភាពមានជីវិតរាល់ដង។" },
      { t: "Offline ជាដើម", d: "ការចុះឈ្មោះផ្ទុកលើឧបករណ៍ រួចសមកក្រោយ។" },
      { t: "មូលហេតុមកយឺតក្នុងស្រុក", d: "ភ្លៀង ចរាចរណ៍ យានយន្តខូច គ្លីនិក — ប៉ះតែមួយ។" },
    ],
    galleryImg: "រូបភាព — ខាងក្នុងសាខា ម៉ូដ kiosk",
    galleryCaption: "ចុះឈ្មោះតាមតុរួមគ្នា សម្រាប់ក្រុមដែលគ្មានទូរស័ព្ទផ្ទាល់ខ្លួន។",
    specsTitle: "ព័ត៌មានបច្ចេកទេស",
    specs: [
      ["ភាពជាក់លាក់ GPS", "±2.1 ម"],
      ["ចន្លោះកាំរងស៊ីកល", "៥០–២០០ ម"],
      ["ជួរ offline", "គ្មានកំណត់"],
      ["ពេលសមក", "ក្រោម ៦០ វិនាទី"],
    ],
  },
  payroll: {
    kicker: "ប្រាក់ខែ",
    title: "ប្រាក់ខែក្នុងមួយចុច។",
    sub: "វត្តមានចូល ស្លីបចេញ — ពិន័យ ម៉ោងបន្ថែម ទាំងដុល្លារ និងរៀល។",
    heroImg: "រូបភាព — ស្លីប PDF",
    sim: {
      kicker: "សាកល្បង",
      title: "គណនាដោយខ្លួនឯង។",
      base: "ប្រាក់ខែគោលក្នុងមួយខែ",
      days: "ថ្ងៃធ្វើការកំណត់",
      late: "នាទីមកយឺត",
      ot: "ម៉ោងបន្ថែម",
      otType: "ប្រភេទម៉ោងបន្ថែម",
      otRegular: "ធម្មតា ×១.៥",
      otRest: "ថ្ងៃសម្រាក ×២.០",
      otHoliday: "ថ្ងៃបុណ្យ ×២.០",
      hourly: "អត្រាម៉ោង",
      lateOut: "ការដកមកយឺត",
      otOut: "ម៉ោងបន្ថែម",
      gross: "ប្រាក់ខែសរុប",
      net: "ប្រាក់ទទួលសរុប",
      grace: "បន្ទាប់ពីអនុគ្រោះ ១៥ នាទី",
      note: "ជាការប៉ាន់ស្មាន មុន NSSF និងច្បាប់ក្រុមហ៊ុន។ អត្រា៖ ១ ដុល្លារ = ៤,១០០ រៀល។",
    },
    rulesKicker: "ច្បាប់ក្នុងប្រព័ន្ធ",
    rulesTitle: "អនុលោមដោយលំនាំដើម។",
    rules: [
      "របៀប ២២ និង ២៦ ថ្ងៃធ្វើការក្នុងមួយខែ",
      "អនុគ្រោះ ១៥ នាទី បន្ទាប់មកគិតជានាទី",
      "ម៉ោងបន្ថែម ×១.៥ — ថ្ងៃសម្រាក និងបុណ្យ ×២.០",
      "ជួរឈរ NSSF រាល់វដ្តប្រាក់ខែ",
      "ថ្ងៃបុណ្យកម្ពុជាស្វ័យប្រវត្តិ",
      "ស្លីប PDF ពីរភាសាដល់បុគ្គលិករាល់រូប",
    ],
  },
  pricing: {
    kicker: "តម្លៃ",
    title: "តម្លៃសាមញ្ញ តាមចំនួនមនុស្ស។",
    sub: "ទូទាត់ប្រចាំឆ្នាំផ្តល់ ២ ខែឥតគិតថ្លៃ។ ទូទាត់តាមបណ្ណ KHQR ឬធនាគារក្នុងស្រុក។",
    monthly: "ប្រចាំខែ",
    annual: "ប្រចាំឆ្នាំ",
    save: "២ ខែឥតគិតថ្លៃ",
    per: "/អ្នក/ខែ",
    billedAnnually: "តាមអ្នកប្រើ ទូទាត់ប្រចាំឆ្នាំ",
    billedMonthly: "តាមអ្នកប្រើ ទូទាត់ប្រចាំខែ",
    popular: "ពេញនិយម",
    plans: [
      {
        name: "Starter",
        desc: "សម្រាប់ក្រុមរហូត ២០ នាក់។",
        price: 1.5,
        features: ["វត្តមានតាម GPS", "ការតាមដានច្បាប់ចំណាយ", "កម្មវិធី iOS និង Android", "ជំនួយតាមអ៊ីមែល"],
        cta: "សាកល្បងឥតគិតថ្លៃ",
      },
      {
        name: "Growth",
        desc: "សម្រាប់សាខាច្រើន រហូត ១៥០ នាក់។",
        price: 2.5,
        features: [
          "អ្វីៗក្នុង Starter",
          "ម៉ាស៊ីនប្រាក់ខែ និងស្លីប",
          "ផ្ទៀងផ្ទាត់សេលហ្វី",
          "ច្បាប់ម៉ោងបន្ថែម និងថ្ងៃបុណ្យ",
          "ការសងប្រាក់ចំណាយ",
        ],
        cta: "សាកល្បងឥតគិតថ្លៃ",
      },
      {
        name: "Enterprise",
        desc: "សាខាមិនកំណត់ ច្បាប់ផ្ទាល់ខ្លួន។",
        price: 3.5,
        features: ["អ្វីៗក្នុង Growth", "តួនាទីផ្ទាល់ខ្លួន និង API", "អ្នកគ្រប់គ្រងផ្ទាល់", "ច្បាប់ការងារផ្ទាល់ខ្លួន"],
        cta: "ទំនាក់ទំនងផ្នែកលក់",
      },
    ],
    faqTitle: "សំណួរញឹកញាប់",
    faq: [
      { q: "ប្រើបានពេលគ្មានអ៊ីនធឺណិត?", a: "បាទ។ ការចុះឈ្មោះផ្ទុកលើឧបករណ៍ រួចសមកស្វ័យប្រវត្តិពេលបណ្តាញមកវិញ។" },
      { q: "នាំចូលពី Excel បាន?", a: "បាន។ បញ្ចូល XLSX ឬ CSV តភ្ជាប់ជួរឈរ រួចផ្ញើសំបុត្រតាម SMS ឬ Telegram។" },
      { q: "ស្លីបជាទាំងពីររូបិយប័ណ្ណ?", a: "ស្លីបទាំងអស់បង្ហាញដុល្លារ និងរៀលតាមអត្រាដែលអ្នកកំណត់ ជាខ្មែរ និងអង់គ្លេស។" },
      { q: "បញ្ឈប់បាន?", a: "ពេលណាក៏បាន ក្នុងកុងសូល។ ទិន្នន័យនាំចេញជា Excel បាន។" },
    ],
  },
  about: {
    kicker: "អំពីយើង",
    title: "កម្មវិធី HR សម្រាប់កម្ពុជា មិនមែនកាលីហ្វូនីញ៉ា។",
    sub: "ខ្មែរមុនគេ រៀលមុនគេ និងសង្វាក់តាមការងារវេនពិតនៅទីនេះ។",
    img: "រូបភាព — ក្រុមការងារ ការិយាល័យភ្នំពេញ",
    story: [
      "AttendKH ចាប់ផ្តើមនៅភ្នំពេញ បន្ទាប់ពីសប្តាហ៍ធ្វើប្រាក់ខែច្រើនពេកដែលបាត់បង់ជាមួយ Excel និងសំបុត្រច្បាប់ចំណាយក្រដាស។ យើងចង់បានកម្មវិធីនិយាយខ្មែរ គិតជារៀល និងដឹងពេលបុណ្យភ្ជុំបិណ្ឌមកដល់។",
      "សព្វថ្ងៃ ក្រុមការងារ ១១ នាក់ បម្រើអាជីវកម្មជាង ២៥០ កន្លែង — ខ្សែសង្វាក់កាហ្វេ ហាងលក់រាយ រោងចក្រ និងក្រុមដឹកជញ្ជូនទូទាំងប្រទេស។",
    ],
    valuesTitle: "របៀបធ្វើការរបស់យើង",
    values: [
      { n: "០១", t: "ក្នុងស្រុកមុនគេ", d: "ខ្មែរ និងអង់គ្លេសស្មើគ្នា។ រៀល និងដុល្លារស្មើគ្នា។ ថ្ងៃបុណ្យ និងច្បាប់ការងារកម្ពុជាតាំងពីថ្ងៃដំបូង។" },
      { n: "០២", t: "កម្មវិធីសាមញ្ញ", d: "ប្រសិនអ្នកគ្រប់គ្រងត្រូវការបណ្តុះបណ្តាលដើម្បីប្រើ យើងធ្វើវាឡើងវិញ។" },
      { n: "០៣", t: "ទុកចិត្តជាលំនាំដើម", d: "រាល់ការចុះឈ្មោះផ្ទៀងផ្ទាត់ រាល់ការផ្លាស់ប្តូរមានកំណត់ត្រា គ្មានអ្វីលាក់កំបាំង។" },
    ],
    facts: [
      ["បង្កើត", "២០២៤"],
      ["ការិយាល័យ", "ភ្នំពេញ"],
      ["អតិថិជន", "២៥០+"],
      ["ក្រុមការងារ", "១១ នាក់"],
    ],
  },
  contact: {
    kicker: "ទំនាក់ទំនង",
    title: "និយាយជាមួយយើង។",
    sub: "ផ្នែកលក់ ជំនួយ ឬសំណួរ — យើងឆ្លើយក្នុងមួយថ្ងៃធ្វើការ។",
    sales: "ផ្នែកលក់",
    support: "ជំនួយ",
    telegram: "Telegram",
    office: "ការិយាល័យ",
    hours: "ម៉ោងធ្វើការ",
    officeVal: "អគារវត្តន័រ ជាន់ ២៨, មហាវិថីព្រះនរោត្តម, ភ្នំពេញ",
    hoursVal: "ចន្ទ–សុក្រ, ៨:០០–១៧:០០",
    formName: "ឈ្មោះ",
    formEmail: "អ៊ីមែលក្រុមហ៊ុន",
    formCompany: "ក្រុមហ៊ុន",
    formMessage: "អ្វីដែលអ្នកត្រូវការ?",
    send: "ផ្ញើសារ",
    img: "រូបភាព — ផែនទី ការិយាល័យភ្នំពេញ",
  },
  legal: {
    privacy: {
      title: "គោលការណ៍ភាពឯកជន",
      updated: "ធ្វើបច្ចុប្បន្នភាព — សីហា ២០២៦",
      p1: "AttendKH រក្សាទុកទិន្នន័យវត្តមាន រូបថតផ្ទៀងផ្ទាត់ និងប្រាក់ខែ ជូនក្រុមហ៊ុនអ្នក។ ទិន្នន័យអ៊ិនក្រីបទាំងពេលបញ្ជូន និងរក្សាទុក ហើយមានតែតួនាទីដែលមានសិទ្ធិអាចមើលបាន។",
      p2: "យើងមិនលក់ទិន្នន័យផ្ទាល់ខ្លួនឡើយ។ រូបថតសេលហ្វីប្រើសម្រាប់ផ្ទៀងផ្ទាត់តែប៉ុណ្ណោះ ហើយលុបតាមការកំណត់រក្សាទុករបស់ក្រុមហ៊ុន។",
      p3: "សំណួរអំពីទិន្នន័យ សូមផ្ញើទៅ support@attendkh.com ឬ Telegram @attendkh ពេលណាក៏បាន។",
    },
    terms: {
      title: "លក្ខខណ្ឌប្រើប្រាស់",
      updated: "ធ្វើបច្ចុប្បន្នភាព — សីហា ២០២៦",
      p1: "AttendKH ផ្តល់ជូនតាមអ្នកប្រើ ក្នុងមួយខែ ជាមួយសាកល្បងឥតគិតថ្លៃ ១៤ ថ្ងៃ។ អ្នកបញ្ឈប់បានពេលណាក៏បានក្នុងកុងសូល ទិន្នន័យនាំចេញបានក្នុង ៣០ ថ្ងៃ។",
      p2: "ការប្រើប្រាស់សមរម្យអនុវត្តលើការរក្សាទុក និងចរន្ត API។ ផែន Enterprise អាចរៀបចំលក្ខខណ្ឌពិសេសជាមួយក្រុមយើង។",
      p3: "ច្បាប់កម្ពុជាដកហូតអនុវត្តចំពោះលក្ខខណ្ឌទាំងនេះ។",
    },
    support: {
      title: "ជំនួយ",
      updated: "យើងឆ្លើយក្នុងមួយថ្ងៃធ្វើការ",
      p1: "អ៊ីមែល support@attendkh.com សារ Telegram @attendkh ឬប៊ូតុងជំនួយក្នុងកម្មវិធី។ ជំនួយតាមទូរស័ព្ទមានលើផែន Enterprise។",
      p2: "មគ្គុទ្ទេសក៍គ្របដណ្តប់ដំឡើង នាំចូល Excel គំនូរកាំរងស៊ីកល ការធ្វើប្រាក់ខែ និងស្លីប — ជាខ្មែរ និងអង់គ្លេស។",
      p3: "អតិថិជន Enterprise ទទួលបានអ្នកគ្រប់គ្រងគណនីផ្ទាល់ និងការបណ្តុះបណ្តាលនៅតែបន្ទាត់ ក្នុងភ្នំពេញ។",
    },
  },
  footer: {
    tagline: "វត្តមាន និងប្រាក់ខែ សម្រាប់ក្រុមការងារកម្ពុជា។",
    product: "ផលិតផល",
    company: "ក្រុមហ៊ុន",
    legalCol: "ច្បាប់",
    address: "អគារវត្តន័រ ជាន់ ២៨, ភ្នំពេញ",
    email: "support@attendkh.com",
    telegram: "@attendkh",
    rights: "© ២០២៦ AttendKH — ផលិតក្នុងកម្ពុជា",
    privacy: "គោលការណ៍ភាពឯកជន",
    terms: "លក្ខខណ្ឌប្រើប្រាស់",
    support: "ជំនួយ",
  },
};

const dictionaries: Record<Lang, Dict> = { en: enFull, km: kmFull };

type I18nValue = {
  lang: Lang;
  currency: Currency;
  t: Dict;
  setLang: (l: Lang) => void;
  setCurrency: (c: Currency) => void;
  fmt: (usd: number, decimals?: number) => string;
};

const I18nContext = createContext<I18nValue | null>(null);

export function Providers({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [currency, setCurrencyState] = useState<Currency>("USD");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("attendkh-lang") as Lang | null;
      const savedCur = localStorage.getItem("attendkh-cur") as Currency | null;
      /* eslint-disable react-hooks/set-state-in-effect -- restore saved prefs after hydration */
      if (savedLang === "en" || savedLang === "km") setLangState(savedLang);
      if (savedCur === "USD" || savedCur === "KHR") setCurrencyState(savedCur);
      /* eslint-enable react-hooks/set-state-in-effect */
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("lang-km", lang === "km");
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("attendkh-lang", lang);
    } catch {}
  }, [lang]);

  useEffect(() => {
    try {
      localStorage.setItem("attendkh-cur", currency);
    } catch {}
  }, [currency]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const setCurrency = useCallback((c: Currency) => setCurrencyState(c), []);
  const fmt = useCallback(
    (usd: number, decimals = 2) => formatCurrency(usd, currency, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }),
    [currency]
  );

  const value = useMemo<I18nValue>(
    () => ({ lang, currency, t: dictionaries[lang], setLang, setCurrency, fmt }),
    [lang, currency, setLang, setCurrency, fmt]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useSite(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useSite must be used inside Providers");
  return ctx;
}

