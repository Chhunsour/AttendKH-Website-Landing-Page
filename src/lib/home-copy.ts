import type { Lang } from "@/lib/i18n";

/** Copy for the home page. Mirrors the reference layout slot for slot. */
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
    titleLine1: "Take Control of Your",
    titleLine2: "Attendance with AttendKH",
    sub: "Simplify Your Payroll and Keep Every Branch on Time",
    cta: "Download Now",
    secondary: "See how it works",
    rating: "4.9/5 from 250+ Cambodian teams",
    phone: "iPhone screen — hero",
  },

  stats: {
    trustedPre: "Trusted by more than",
    trustedNumber: "250+",
    trustedPost: "businesses across Cambodia",
    items: [
      { value: "99.9%", line1: "Geofence", line2: "Accuracy" },
      { value: "90%", line1: "Less Payroll", line2: "Time" },
      { value: "50+", line1: "Branches on", line2: "One Console" },
    ],
  },

  featureOne: {
    title: "Easily Track and Verify Every Clock-In",
    body: "Staff clock in inside the branch radius with a selfie, so every record carries the time, the place and the proof. Managers see who is in, late or absent before the shift is over.",
    cta: "Learn more",
    href: "/attendance",
    phone: "iPhone screen — clock-in",
    points: ["50–200 m branch radius", "Selfie on every punch", "Works offline"],
  },

  featureTwo: {
    title: "Effortlessly Run Your Monthly Payroll",
    body: "Overtime multipliers, late deductions and leave balances apply themselves from the attendance record. Payslips come out in USD and KHR in a single click.",
    cta: "Learn more",
    href: "/payroll",
    phone: "iPhone screen — payroll summary",
    points: ["1.5× and 2.0× overtime", "USD and KHR payslips", "NSSF lines included"],
  },

  steps: {
    title: "Up and running in a day",
    sub: "Three steps from spreadsheet to verified payroll.",
    items: [
      {
        n: "01",
        title: "Map your branches",
        body: "Drop a pin on each location and set the radius — 50 m for an office, 200 m for a yard.",
      },
      {
        n: "02",
        title: "Import your team",
        body: "Upload the staff sheet. Roles, salaries, branches and shift rules come across with it.",
      },
      {
        n: "03",
        title: "Run real payroll",
        body: "Attendance flows into the payroll engine. Payslips in USD and KHR, in one click.",
      },
    ],
  },

  why: {
    title: "Why Choose AttendKH",
    cards: [
      {
        title: "Stay Organized and In Control of Every Branch",
        body: "Manage every location from one console. Branch managers see their own site, owners see all of them.",
      },
      {
        title: "Gain Greater Visibility and Make Informed Decisions",
        body: "Live attendance and labor cost per branch, so you can act on the numbers in the same week, not next month.",
      },
      {
        title: "Save Time with Automated Overtime and Late Rules",
        body: "Set the grace period and the multipliers once. Every payroll run after that applies them on its own.",
      },
      {
        title: "Protect Your Data with Advanced Security Measures",
        body: "Encrypted storage, tamper-proof location checks and an audit trail behind every change to a time record.",
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
    title: "Testimonials",
    summary: "4.9 out of 5, from 250+ teams",
    items: [
      {
        name: "Sophea Chan",
        initials: "SC",
        quote:
          "Before AttendKH, our branch managers spent hours reconciling paper logs across 5 coffee shops in Phnom Penh. With GPS geofencing and selfie proof, buddy punching stopped on week one.",
        time: "5:40 am",
        date: "Mar 02, 2026",
      },
      {
        name: "Dara Meas",
        initials: "DM",
        quote:
          "Calculating overtime and night premiums used to take 3 days each month. Now we export bilingual payslips in USD and KHR in one afternoon without spreadsheet calculation mistakes.",
        time: "6:45 am",
        date: "Feb 04, 2026",
      },
      {
        name: "Vichea Ly",
        initials: "VL",
        quote:
          "AttendKH gives our headquarters complete visibility over 8 retail branches. We see real-time late check-ins and overtime costs as they happen, helping us prevent labor budget overruns.",
        time: "5:45 am",
        date: "Feb 11, 2026",
      },
      {
        name: "Rathana Sok",
        initials: "RS",
        quote:
          "The offline mode is a game changer for our warehouse and logistics team in Sihanoukville. Staff punches are recorded reliably even during internet drops and synced once reconnected.",
        time: "7:30 am",
        date: "Mar 12, 2026",
      },
      {
        name: "Chanlina Pen",
        initials: "CP",
        quote:
          "Payroll reconciliation used to take 3 days. Now it takes one afternoon, and every working hour has a live selfie photo and a GPS radius log behind it.",
        time: "8:20 am",
        date: "Mar 02, 2026",
      },
    ],
  },

  cta: {
    title: "Get Started Today",
    sub: "Join Hundreds of Cambodian Teams and Start Your Payroll Transformation.",
    button: "Get Started",
    image: "Illustration — team using AttendKH",
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
    titleLine1: "គ្រប់គ្រងវត្តមានក្រុមអ្នក",
    titleLine2: "ជាមួយ AttendKH",
    sub: "ធ្វើឲ្យប្រាក់ខែងាយស្រួល និងរក្សាគ្រប់សាខាឲ្យទាន់ពេល",
    cta: "ទាញយកឥឡូវនេះ",
    secondary: "មើលរបៀបដំណើរការ",
    rating: "៤.៩/៥ ពីក្រុមកម្ពុជាជាង ២៥០",
    phone: "អេក្រង់ iPhone — ទំព័រដើម",
  },

  stats: {
    trustedPre: "ជឿទុកចិត្តដោយអាជីវកម្មជាង",
    trustedNumber: "២៥០+",
    trustedPost: "ទូទាំងប្រទេសកម្ពុជា",
    items: [
      { value: "៩៩.៩%", line1: "ភាពត្រឹមត្រូវ", line2: "Geofence" },
      { value: "៩០%", line1: "កាត់បន្ថយពេល", line2: "បើកប្រាក់ខែ" },
      { value: "៥០+", line1: "សាខាលើ", line2: "កុងសូលតែមួយ" },
    ],
  },

  featureOne: {
    title: "តាមដាន និងផ្ទៀងផ្ទាត់រាល់ការចុះវត្តមាន",
    body: "បុគ្គលិកចុះវត្តមាននៅក្នុងកាំសាខាជាមួយរូបថត ដូច្នេះរាល់កំណត់ត្រាមានពេលវេលា ទីកន្លែង និងភស្តុតាង។ ប្រធានដឹងថានរណាមក យឺត ឬអវត្តមាន មុនវេនចប់។",
    cta: "ស្វែងយល់បន្ថែម",
    href: "/attendance",
    phone: "អេក្រង់ iPhone — ចុះវត្តមាន",
    points: ["កាំសាខា ៥០–២០០ ម៉ែត្រ", "រូបថតរាល់ការចុះវត្តមាន", "ដំណើរការក្រៅបណ្តាញ"],
  },

  featureTwo: {
    title: "បើកប្រាក់ខែប្រចាំខែយ៉ាងងាយស្រួល",
    body: "មេគុណម៉ោងបន្ថែម ការកាត់ប្រាក់យឺត និងសមតុល្យច្បាប់ឈប់ អនុវត្តដោយខ្លួនឯងពីកំណត់ត្រាវត្តមាន។ ប័ណ្ណប្រាក់ខែចេញជាដុល្លារ និងរៀល ដោយចុចតែម្តង។",
    cta: "ស្វែងយល់បន្ថែម",
    href: "/payroll",
    phone: "អេក្រង់ iPhone — សេចក្តីសង្ខេបប្រាក់ខែ",
    points: ["ម៉ោងបន្ថែម ១.៥× និង ២.០×", "ប័ណ្ណប្រាក់ខែ ដុល្លារ និងរៀល", "រួមបញ្ចូលបន្ទាត់ បសស"],
  },

  steps: {
    title: "ចាប់ផ្តើមប្រើក្នុងមួយថ្ងៃ",
    sub: "បីជំហាន ពី Excel ទៅប្រាក់ខែដែលបានផ្ទៀងផ្ទាត់។",
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
    title: "ហេតុអ្វីជ្រើសរើស AttendKH",
    cards: [
      {
        title: "រៀបចំ និងគ្រប់គ្រងគ្រប់សាខា",
        body: "គ្រប់គ្រងគ្រប់ទីតាំងពីកុងសូលតែមួយ។ ប្រធានសាខាឃើញសាខាខ្លួន ម្ចាស់ឃើញទាំងអស់។",
      },
      {
        title: "មើលឃើញច្បាស់ និងសម្រេចចិត្តបានត្រឹមត្រូវ",
        body: "វត្តមាន និងចំណាយកម្លាំងពលកម្មតាមសាខាផ្ទាល់ ដើម្បីឲ្យអ្នកសម្រេចចិត្តក្នុងសប្តាហ៍នោះ មិនមែនខែក្រោយ។",
      },
      {
        title: "សន្សំពេលវេលាដោយច្បាប់ម៉ោងបន្ថែម និងយឺតស្វ័យប្រវត្តិ",
        body: "កំណត់រយៈពេលអនុគ្រោះ និងមេគុណម្តងជាការស្រេច។ រាល់ការបើកប្រាក់ខែបន្ទាប់អនុវត្តដោយខ្លួនឯង។",
      },
      {
        title: "ការពារទិន្នន័យដោយវិធានការសុវត្ថិភាពខ្ពស់",
        body: "ការរក្សាទុកដែលបានអ៊ិនគ្រីប ការត្រួតពិនិត្យទីតាំងមិនអាចក្លែង និងកំណត់ហេតុនៅពីក្រោយរាល់ការកែប្រែ។",
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
    title: "មតិអតិថិជន",
    summary: "៤.៩ ក្នុងចំណោម ៥ ពីក្រុមជាង ២៥០",
    items: [
      {
        name: "ចាន់ សុភា",
        initials: "SC",
        quote:
          "មុនពេលប្រើ AttendKH អ្នកគ្រប់គ្រងសាខាត្រូវចំណាយពេលរាប់ម៉ោងផ្ទៀងផ្ទាត់បញ្ជីវត្តមានក្រដាសនៅហាងកាហ្វេទាំង ៥ នៅភ្នំពេញ។ ដោយសារមាន GPS និងរូបថត selfie ការចុះវត្តមានជំនួសគ្នាបានបញ្ចប់ត្រឹមសប្តាហ៍ដំបូង។",
        time: "៥:៤០ ព្រឹក",
        date: "០២ មីនា ២០២៦",
      },
      {
        name: "មាស តារា",
        initials: "DM",
        quote:
          "ការគណនាម៉ោងបន្ថែម និងប្រាក់វេនយប់ធ្លាប់ចំណាយពេល ៣ ថ្ងៃក្នុងមួយខែ។ ឥឡូវយើងអាចទាញយកប័ណ្ណបើកប្រាក់បៀវត្សរ៍ទ្វេភាសា ដុល្លារ និងរៀល បានយ៉ាងត្រឹមត្រូវត្រឹមតែមួយរសៀលប៉ុណ្ណោះ។",
        time: "៦:៤៥ ព្រឹក",
        date: "០៤ កុម្ភៈ ២០២៦",
      },
      {
        name: "លី វិជ្ជា",
        initials: "VL",
        quote:
          "AttendKH ជួយឲ្យការិយាល័យកណ្តាលមើលឃើញទិន្នន័យសាខាលក់រាយទាំង ៨ បានច្បាស់លាស់។ យើងដឹងភ្លាមៗពីបុគ្គលិកដែលមកយឺត និងថ្លៃថែមម៉ោងជាក់ស្តែង ដែលជួយគ្រប់គ្រងថវិកាកម្លាំងពលកម្មបានល្អបំផុត។",
        time: "៥:៤៥ ព្រឹក",
        date: "១១ កុម្ភៈ ២០២៦",
      },
      {
        name: "សុខ រតនា",
        initials: "RS",
        quote:
          "មុខងារ Offline ពិតជាមានប្រយោជន៍ខ្លាំងណាស់សម្រាប់បុគ្គលិកឃ្លាំង និងភស្តុភាររបស់យើងនៅក្រុងព្រះសីហនុ។ បុគ្គលិកអាចចុះម៉ោងបានទោះបីជាដាច់អ៊ីនធឺណិត ហើយទិន្នន័យនឹង Sync ដោយស្វ័យប្រវត្តិពេលមានសេវាវិញ។",
        time: "៧:៣០ ព្រឹក",
        date: "១២ មីនា ២០២៦",
      },
      {
        name: "ប៉ែន ចន្លីនា",
        initials: "CP",
        quote:
          "ការផ្ទៀងផ្ទាត់ប្រាក់ខែធ្លាប់ចំណាយ ៣ ថ្ងៃ។ ឥឡូវត្រឹមមួយរសៀល ហើយរាល់ម៉ោងធ្វើការសុទ្ធតែមានរូបថត selfie និងកូអរដោនេ GPS ជាក់ស្តែងភ្ជាប់មកជាមួយ។",
        time: "៨:២០ ព្រឹក",
        date: "០២ មីនា ២០២៦",
      },
    ],
  },

  cta: {
    title: "ចាប់ផ្តើមថ្ងៃនេះ",
    sub: "ចូលរួមជាមួយក្រុមកម្ពុជារាប់រយ ហើយចាប់ផ្តើមផ្លាស់ប្តូរប្រាក់ខែរបស់អ្នក។",
    button: "ចាប់ផ្តើម",
    image: "រូបភាព — ក្រុមកំពុងប្រើ AttendKH",
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
