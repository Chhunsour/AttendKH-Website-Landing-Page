/**
 * attendkh BOT Knowledge Engine & Ultra-Resilient Intent Classifier.
 * Handles broken grammar, toddler-talk, internet slang, heavy typos, phonetic spellings,
 * numbers, fragments, and full Cambodian workforce domain knowledge.
 * 100% Client-Side, Zero external API latency.
 */

export interface QuoteData {
  staffCount: number;
  monthlyUsd: number;
  annualUsd: number;
  monthlyKhr: number;
  annualKhr: number;
  annualSavingsUsd: number;
}

export interface BotResponse {
  text: string;
  cardType?: "quote" | "gps" | "payroll" | "branch" | "contact" | "general";
  quoteData?: QuoteData;
  quickReplies?: string[];
  suggestedAction?: {
    label: string;
    href: string;
    isExternal?: boolean;
  };
}

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  cardType?: "quote" | "gps" | "payroll" | "branch" | "contact" | "general";
  quoteData?: QuoteData;
  quickReplies?: string[];
  suggestedAction?: {
    label: string;
    href: string;
    isExternal?: boolean;
  };
  feedback?: "like" | "dislike" | null;
}

export const DEFAULT_EXCHANGE_RATE = 4100;

export function calculateLiveQuote(count: number, rate = DEFAULT_EXCHANGE_RATE): QuoteData {
  const staff = Math.max(1, Math.min(10000, Math.round(count)));
  const monthlyUsd = staff * 1.0;
  const annualUsd = staff * 1.0 * 10; // 2 months free with annual plan
  const monthlyKhr = Math.round(monthlyUsd * rate);
  const annualKhr = Math.round(annualUsd * rate);
  const annualSavingsUsd = staff * 2.0;

  return {
    staffCount: staff,
    monthlyUsd,
    annualUsd,
    monthlyKhr,
    annualKhr,
    annualSavingsUsd,
  };
}

/** Check if query is in a non-English language */
export function isNonEnglishQuery(text: string): boolean {
  // Check for non-Latin / non-ASCII scripts (Khmer, Chinese, Japanese, Thai, Arabic, Cyrillic, Korean, etc.)
  if (/[\u1780-\u17FF\u4E00-\u9FFF\u3040-\u30FF\u0E00-\u0E7F\u0600-\u06FF\u0400-\u04FF\uAC00-\uD7AF]/.test(text)) {
    return true;
  }
  // Check for common non-English greetings or phrases
  if (
    /\b(suasdei|suostei|chum reap sour|chumreapsour|ni hao|nihao|xiexie|bonjour|merci|gracias|sawasdee|khop khun|xin chao|cam on|arigato|konnichiwa|annyeong|danke|ciao)\b/i.test(
      text
    )
  ) {
    return true;
  }
  return false;
}

/** Normalize toddler-talk, broken English, phonetic spelling, slang, and typos */
function normalizeQuery(raw: string): string {
  let text = raw.toLowerCase().trim();

  // 1. Phonetic & toddler-talk normalization
  const replacements: Array<[RegExp, string]> = [
    // Toddler / Broken grammar pronouns & verbs
    [/\b(me want|me wan|me need|i wan|i wanna|gimme|gimme dat|give me)\b/g, "want"],
    [/\b(me got|i got|we got|me have|we have)\b/g, "have"],
    [/\b(u|yu|ya|yoo)\b/g, "you"],
    [/\b(ur|urs|yo)\b/g, "your"],
    [/\b(r|ar)\b/g, "are"],
    [/\b(hw|hwo|howz|hows)\b/g, "how"],
    [/\b(mch|muc|mucho)\b/g, "much"],
    [/\b(wut|wat|wot|wazzat)\b/g, "what"],
    [/\b(plz|pls|plez|plssss)\b/g, "please"],
    [/\b(thx|tnx|ty|tq|thanx|tks)\b/g, "thanks"],
    [/\b(idk|dunno)\b/g, "i don't know"],
    [/\b(cuz|bcuz|bcoz|coz)\b/g, "because"],

    // Money, Price, Quotes
    [/\b(moni|monis|money|dolla|dollas|dollar|dollars|buck|bucks|cash|price|prce|prc|prcing|prizing|costing|fee|pricing|quote|cost)\b/g, "price"],
    [/\b(cheep|cheper|expensiv|expensve)\b/g, "cheap"],

    // Staff, People, Guys
    [/\b(guy|guys|dude|dudes|peeps|ppl|peopel|peple|man|men|head|heads|wrker|wrkers|worker|workers|staf|stff|stafs|emplyee|employe|empolyee|emplyees|member|members)\b/g, "staff"],

    // Devices & Phones
    [/\b(fon|fone|fones|cel|cell|celphone|handphone|ipon|ipone|iphone|ipad|tab|tablet|androi|android|apk|app|apps|donload|downlod)\b/g, "device"],

    // Camera, Face, Selfie, Picture
    [/\b(pic|pix|photo|face|selphy|selfi|selfy|selife|selfee|cam|camer|camera|snapshot)\b/g, "selfie"],

    // GPS, Location, Map
    [/\b(map|maps|locate|locashun|location|geofens|geofence|geofenc|geofencing|radus|radius|meter|meters|distans|perimeter)\b/g, "gps"],

    // Cheating, Spoofing, Faking, Buddy punching
    [/\b(cheat|cheating|cheater|fake|faking|faker|spoof|spoofing|mock|mocking|lyin|trick|tricking|punch for friend|friend punch)\b/g, "cheat"],

    // Attendance, Clocking in, Punching
    [/\b(clock in|clock out|punch in|punch out|punching|clok|atend|attendence|attnd|atendance|attandance|checkin|checkout|check in|check out)\b/g, "attendance"],

    // Payroll, Salary, Overtime, NSSF, Labor law
    [/\b(payrol|payrols|pyroll|payrl|salery|salry|salary|wages|wage|payslip|pay slip)\b/g, "payroll"],
    [/\b(ot|extratime|extra time|work late|overtime|ovetime|over-time|ovrtime)\b/g, "overtime"],
    [/\b(nssf|labor law|labour law|seniority|indemnity)\b/g, "nssf"],
    [/\b(riel|khr|cambodia money|khmer money)\b/g, "khr"],

    // Multi-branch, Stores, Shops
    [/\b(shop|shops|store|stores|brnch|brnchs|branchs|branch|branches|outlet|outlets|multi store|multi branch)\b/g, "branch"],

    // Shift, Night shift, Schedule
    [/\b(shift|shifts|night shift|split shift|roster|rostr|schedul|schedual|sched|schedule)\b/g, "shift"],

    // Offline, No internet
    [/\b(no wifi|no net|no internet|no data|offline|off line|without net|without internet)\b/g, "offline"],

    // Setup, Start, Easy, Demo
    [/\b(start|how start|how use|how work|instul|install|setup|set up|how do|try|free trial|demo)\b/g, "setup"],

    // Founder, Company, Contact, Location
    [/\b(who make|who built|who owner|founder|ong phaly|phnom penh|street 371|office|address|where are you|where u at|contact|telegram|tele|call|phone)\b/g, "contact"],
  ];

  for (const [pattern, replacement] of replacements) {
    text = text.replace(pattern, replacement);
  }

  // 2. Convert word numbers to digits
  const wordNumbers: Array<[RegExp, string]> = [
    [/\b(one|a single)\b/g, "1"],
    [/\b(two|a couple)\b/g, "2"],
    [/\b(three|a few)\b/g, "3"],
    [/\b(four)\b/g, "4"],
    [/\b(five)\b/g, "5"],
    [/\b(six)\b/g, "6"],
    [/\b(seven)\b/g, "7"],
    [/\b(eight)\b/g, "8"],
    [/\b(nine)\b/g, "9"],
    [/\b(ten)\b/g, "10"],
    [/\b(eleven)\b/g, "11"],
    [/\b(twelve)\b/g, "12"],
    [/\b(fifteen)\b/g, "15"],
    [/\b(twenty)\b/g, "20"],
    [/\b(twenty-five|twenty five)\b/g, "25"],
    [/\b(thirty)\b/g, "30"],
    [/\b(forty)\b/g, "40"],
    [/\b(fifty)\b/g, "50"],
    [/\b(sixty)\b/g, "60"],
    [/\b(seventy)\b/g, "70"],
    [/\b(eighty)\b/g, "80"],
    [/\b(ninety)\b/g, "90"],
    [/\b(hundred|one hundred)\b/g, "100"],
    [/\b(two hundred)\b/g, "200"],
    [/\b(five hundred)\b/g, "500"],
  ];

  for (const [pat, rep] of wordNumbers) {
    text = text.replace(pat, rep);
  }

  // Remove excess punctuation
  text = text.replace(/[?!.,;:]+/g, " ");
  return text.trim();
}

/** Extract employee/staff count from message (handles broken phrasing: "me got 5 guy", "for 12", "need 30 staff") */
function extractStaffCount(input: string): number | null {
  const normalized = normalizeQuery(input);

  const patterns = [
    /(\d+)\s*(?:staff)/i,
    /(?:for|have|want|need|about|around|calc|calculate|size|quote)\s*(\d+)/i,
  ];

  for (const pat of patterns) {
    const match = normalized.match(pat);
    if (match && match[1]) {
      const num = parseInt(match[1], 10);
      if (num > 0 && num <= 10000) return num;
    }
  }

  // If message contains price keyword and any standalone number
  if (/(?:price)/i.test(normalized)) {
    const match = normalized.match(/\b(\d{1,4})\b/);
    if (match && match[1]) {
      const num = parseInt(match[1], 10);
      if (num >= 2 && num <= 5000) return num;
    }
  }

  // If message is purely a number like "50", "25", "5", etc.
  if (/^\d{1,4}$/.test(normalized)) {
    const num = parseInt(normalized, 10);
    if (num >= 2 && num <= 5000) return num;
  }

  return null;
}

function formatUsdKhr(usd: number, rate = DEFAULT_EXCHANGE_RATE): string {
  const khr = Math.round(usd * rate);
  const formattedUsd = `$${usd.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  const formattedKhr = `${khr.toLocaleString("en-US")} ៛`;
  return `${formattedUsd} (${formattedKhr})`;
}

/** Calculate quote response */
function generateQuoteResponse(count: number): BotResponse {
  const quote = calculateLiveQuote(count);

  return {
    text: `**Pricing breakdown for ${quote.staffCount} active staff:**\n\n• **Monthly Plan ($1.00/user/mo):** ${formatUsdKhr(quote.monthlyUsd)} / month\n• **Annual Plan (2 Months Free):** ${formatUsdKhr(quote.annualUsd)} / year *(Save ${formatUsdKhr(quote.annualSavingsUsd)})*\n\n**Included in all accounts:**\n- 50–200m GPS geofencing & live selfie verification\n- Full Cambodian payroll engine ($ & ៛) with OT & NSSF\n- Unlimited branch locations & QR door Kiosks\n- Zero setup fees, pay only for active staff`,
    cardType: "quote",
    quoteData: quote,
    quickReplies: ["How does GPS Geofencing work?", "Cambodian Payroll & Overtime", "Book a Demo"],
    suggestedAction: {
      label: "View Detailed Pricing",
      href: "/pricing",
    },
  };
}

/** Resilient Intent matcher & knowledge retrieval */
export function queryChatbot(rawInput: string): BotResponse {
  const input = rawInput.trim();
  const normalized = normalizeQuery(input);

  // 1. Language Guard: If non-English is detected, inform that other languages are in development
  if (isNonEnglishQuery(input)) {
    return {
      text: `**Language Support Notice**\n\nattendkh BOT currently only supports English. Support for other languages (including Khmer ភាសាខ្មែរ and Chinese 中文) is currently in **active development**.\n\nPlease ask your question in **English**, or connect directly with our local support team in Phnom Penh for assistance in Khmer or Chinese.`,
      cardType: "general",
      quickReplies: [
        "Calculate price for my team",
        "How does GPS Geofencing work?",
        "Cambodian Payroll & Overtime rules",
        "Book a live demo",
      ],
      suggestedAction: {
        label: "Contact Phnom Penh Team",
        href: "/contact",
      },
    };
  }

  // 2. Dynamic staff count calculation (handles "me got 5 guy", "price for 25", "100 staff", "just 4", etc.)
  const staffCount = extractStaffCount(input);
  if (staffCount !== null) {
    return generateQuoteResponse(staffCount);
  }

  // 3. Casual Greetings & Salutations (handles "hi", "hey", "yo", "sup", "good morning", "howdy", "wassup", etc.)
  if (
    /^(hi|hey|heyy|heya|yo|sup|wassup|hello|good morning|morning|good afternoon|good evening|howdy|gday|greetings|hola)\b/i.test(
      normalized
    ) ||
    normalized === "hi" ||
    normalized === "hey" ||
    normalized === "hello" ||
    normalized === "yo"
  ) {
    return {
      text: `**Hello! Welcome to AttendKH.**\n\nI can assist you with:\n- **GPS-verified clock-in & selfie anti-buddy punching**\n- **Automated Cambodian payroll formulas in USD & KHR**\n- **Multi-branch operations & shift rostering**\n- **Live pricing calculation ($1.00/user/mo)**\n\nHow can I help your business today?`,
      cardType: "general",
      quickReplies: [
        "Calculate price for my team",
        "How does GPS Geofencing work?",
        "Cambodian Payroll & Overtime rules",
        "Book a live demo",
      ],
    };
  }

  // 4. Politeness, Gratitude & Acknowledgements (handles "thanks", "thx", "ok", "cool", "nice", "got it", "bye", etc.)
  if (
    /^(thanks|thank you|thx|ty|appreciate it|ok|okay|k|cool|nice|great|awesome|perfect|good|understood|got it|sounds good|alright|bye|cya|goodbye|see you)\b/i.test(
      normalized
    )
  ) {
    return {
      text: `**You're very welcome!**\n\nFeel free to ask any other questions about AttendKH attendance verification, Cambodian payroll compliance, or pricing. Our team is always here to help!`,
      cardType: "general",
      quickReplies: [
        "Calculate price for my team",
        "How does GPS Geofencing work?",
        "Book a live demo",
        "Contact Support",
      ],
    };
  }

  // 5. Bot Identity & Overview (handles "who are you", "what is this", "what can you do", "tell me about attendkh", "what is this app", etc.)
  if (
    /(who are you|what are you|what is attendkh|what can you do|about attendkh|tell me about|what is this|why attendkh|overview|features|benefits|help me|what does this do)/i.test(
      normalized
    )
  ) {
    return {
      text: `**About AttendKH:**\n\nAttendKH is Cambodia's premier **GPS attendance and automated payroll platform**, built in Phnom Penh for local businesses.\n\n**Core Capabilities:**\n- **GPS Geofencing (50–200m)** with live selfie anti-buddy punching\n- **Automated Payroll ($ & ៛)** complying with Cambodian Labor Law overtime & NSSF\n- **Multi-Branch Console** with real-time sync (<1s) across all outlets\n- **Transparent Pricing:** $1.00 per active employee/month with zero setup fees\n\nHow can I assist you further?`,
      cardType: "general",
      quickReplies: [
        "Calculate price for my team",
        "How does GPS Geofencing work?",
        "Cambodian Payroll & Overtime",
        "Book a live demo",
      ],
      suggestedAction: { label: "Learn More About Us", href: "/about" },
    };
  }

  // 6. Pricing, Cost, Money, Subscriptions (handles "how much", "price", "moni", "cost", "cheap", "expensive", "how many dollar", etc.)
  if (
    /(price|cheap|cost|how much|fee|plan|subscription|rate|charge|afford|expensive|free trial|annual|monthly|discount|bill|billing|payment|currency|tier)/i.test(
      normalized
    )
  ) {
    return {
      text: `**AttendKH Pricing Structure:**\n\n• **$1.00 per active user / month** (~4,100 KHR)\n• **Annual Billing:** 2 Months Free (pay for 10 months)\n\n**Standard Inclusions:**\n- Full GPS Geofencing & Selfie Verification\n- Automated Cambodian Dual-Currency Payroll ($ & ៛)\n- Labor law overtime multipliers (1.5×, 2.0×) & NSSF reporting\n- Unlimited branch locations with zero surcharge\n- QR Kiosk Mode, Shift Planner & Real-Time Push Alerts\n- Local Phnom Penh technical support\n\n*Tip: Enter your team size (e.g., "40 staff") to calculate your quote.*`,
      cardType: "quote",
      quoteData: calculateLiveQuote(25),
      quickReplies: ["Quote for 25 staff", "Quote for 60 staff", "Book a Live Demo"],
      suggestedAction: { label: "Explore Pricing Page", href: "/pricing" },
    };
  }

  // 7. Cheating, Fake GPS, Spoofing, Buddy Punching & Selfie Check
  if (
    /(cheat|selfie|fake|mock|spoof|trick|buddy punch|punch for friend|face|picture)/i.test(
      normalized
    )
  ) {
    return {
      text: `**How AttendKH Stops Cheating & Buddy Punching:**\n\n1. **Live Selfie Verification:** Employees must take a quick front-camera selfie when clocking in. A timestamp is securely watermarked on the photo.\n2. **Mock-GPS Defense:** Detects and blocks Developer Mode location faker apps, VPNs, and coordinate jumps.\n3. **Tight 50–200m Perimeter:** Prevents employees from clocking in when stuck in traffic or away from the branch.\n4. **No RFID Card Sharing:** Since each punch is linked to individual device biometric verification, cards cannot be handed to friends.`,
      cardType: "gps",
      quickReplies: ["How does GPS Geofencing work?", "Multi-Branch Features", "Calculate Cost"],
      suggestedAction: { label: "Explore Attendance Features", href: "/attendance" },
    };
  }

  // 8. GPS Geofencing & Attendance Verification (handles "how gps", "staff punch where", "map check", "distance", etc.)
  if (
    /(gps|attendance|perimeter|radius|meter|distance|map|locate|clock in|clock out|punch in|punch out|check in|check out)/i.test(
      normalized
    )
  ) {
    return {
      text: `**AttendKH Verified GPS Attendance:**\n\n1. **50–200m GPS Geofencing:** Employees can only clock in when physically within their branch radius (±2m precision).\n2. **Selfie Anti-Buddy Punching:** A required photo is attached to every clock-in to verify identity.\n3. **QR Door Kiosk Mode:** Dedicated shared tablet mode for entrance scanning.\n4. **Real-Time Cloud Sync (<1s):** Dashboards and payroll rosters update immediately.\n5. **Point-in-Time Privacy:** Zero continuous tracking; GPS is read strictly at the instant of clocking in.`,
      cardType: "gps",
      quickReplies: ["How does Payroll work?", "Multi-Branch Features", "Calculate Cost"],
      suggestedAction: { label: "Explore Attendance Features", href: "/attendance" },
    };
  }

  // 9. Payroll, Salary, Overtime, Cambodian Labor Law, NSSF, Dual Currency (handles "ot money", "work late", "riel dollar", "salry", etc.)
  if (
    /(payroll|overtime|nssf|khr|salary|wage|payslip|late deduction|tax|formula|seniority|holiday|public holiday)/i.test(
      normalized
    )
  ) {
    return {
      text: `**Cambodian Labor Law Payroll Engine:**\n\n• **Standard Hourly Rate Formula:** (Base Salary ÷ Working Days) ÷ 8 Hours\n• **Overtime Multipliers:**\n  - **1.5×** Regular working day overtime\n  - **2.0×** Rest day & public holidays (with Cambodian official calendar)\n• **Dual-Currency ($ & ៛):** Full payslips side-by-side in USD and KHR at your custom rate\n• **NSSF & Seniority Indemnity:** Itemized employee/employer lines & biannual indemnity\n• **PDF Payslips:** Downloadable in Khmer and English via the mobile app`,
      cardType: "payroll",
      quickReplies: ["Interactive Payroll Calculator", "Explore Pricing ($1/mo)", "Book a Demo"],
      suggestedAction: { label: "Explore Payroll Engine", href: "/payroll" },
    };
  }

  // 10. Multi-Branch, Stores, Shifts, Rostering, Roles (handles "2 shop", "night shift", "boss see what", "split shift", etc.)
  if (
    /(branch|shift|roster|multiple location|multi-store|role|admin|manager|owner|supervisor|permissions)/i.test(
      normalized
    )
  ) {
    return {
      text: `**Multi-Branch & Shift Management:**\n\n• **4 Role Levels:**\n  1. **Super Admin:** Platform & tenant setup\n  2. **Owner / HR Admin:** All branches, global payroll & policy control\n  3. **Branch Manager:** Scoped to assigned branches and approvals\n  4. **Employee:** Mobile self-service clock-in, leave & payslips\n• **Flexible Rostering:** Overnight shifts crossing midnight and split shifts\n• **Unlimited Branches:** Zero per-branch fees or location penalties`,
      cardType: "branch",
      quickReplies: ["Explore Pricing ($1/mo)", "Attendance & GPS", "Book a Live Demo"],
      suggestedAction: { label: "Explore Multi-Branch Features", href: "/multi-branch" },
    };
  }

  // 11. Devices, Mobile Apps, Offline Mode, QR Kiosk (handles "can work on fon", "no internet", "ipad", "android", "app", etc.)
  if (
    /(device|offline|hardware|scanner|biometric|fingerprint|tablet|ipad|android|ios|iphone|qr code|kiosk|no wifi)/i.test(
      normalized
    )
  ) {
    return {
      text: `**Hardware & Device Compatibility:**\n\n• **Zero Expensive Hardware Needed:** No biometric fingerprint clocks, cables, or RFID scanners required.\n• **Mobile Apps:** Native iOS (iPhone/iPad) and Android apps with lightweight offline sync.\n• **QR Door Kiosk Mode:** Turns any standard iPad or Android tablet at your entrance into a shared check-in kiosk.\n• **Offline Mode:** Clock-ins are cryptographically cached locally if WiFi or 4G drops and synced automatically when reconnected.`,
      cardType: "general",
      quickReplies: ["Pricing Details ($1/mo)", "GPS Geofence Details", "Talk to Sales"],
      suggestedAction: { label: "Explore Downloads & Apps", href: "/downloads" },
    };
  }

  // 12. Comparison ("Why AttendKH vs. Fingerprint Machines or Foreign HR Tools")
  if (
    /(vs|compare|comparison|fingerprint machine|fingerprint clock|foreign|bamboohr|deputy|clockify|why choose|why attendkh|alternative|diff)/i.test(
      normalized
    )
  ) {
    return {
      text: `**Why Choose AttendKH:**\n\n• **vs. Fingerprint Clocks:** No hardware maintenance, no USB drives, no manual calculations, buddy punching solved via selfies, and multi-branch data is consolidated in real-time.\n• **vs. Foreign HR Tools:** Native Khmer language (Kantumruy Pro), USD & KHR dual-currency, pre-built Cambodian Labor Law overtime (1.5×, 2.0×) and NSSF formulas, plus local Phnom Penh support.`,
      cardType: "general",
      quickReplies: ["View Pricing ($1/mo)", "How GPS Works", "Book a Live Demo"],
      suggestedAction: { label: "Learn More About Us", href: "/about" },
    };
  }

  // 13. Setup, Onboarding, Free Trial, Start (handles "how start", "how use", "easy to set up", "free trial", "test", etc.)
  if (
    /(setup|start|install|get started|import|excel|csv|upload|migration|free trial|trial|demo|how to use|how use)/i.test(
      normalized
    )
  ) {
    return {
      text: `**Quick Onboarding & 14-Day Free Trial:**\n\n• **15-Minute Setup:** Create your company account, add your branches on the map, and invite employees in under 15 minutes.\n• **Excel / CSV Bulk Import:** Upload your complete employee roster using our pre-formatted template.\n• **14-Day Free Trial:** Test all features across unlimited branches with zero upfront credit card commitment.`,
      cardType: "general",
      quickReplies: ["Calculate price for my team", "Attendance & GPS", "Book a Live Demo"],
      suggestedAction: { label: "Book a Demo / Contact Us", href: "/contact" },
    };
  }

  // 14. Contact, Office Location, Support, Founder & Team (handles "where office", "who made", "phone", "talk to human", "telegram", etc.)
  if (
    /(contact|office|address|founder|who made|ong phaly|phnom penh|support|sales|phone|email|help|call|hours)/i.test(
      normalized
    )
  ) {
    return {
      text: `**AttendKH Phnom Penh Team:**\n\n• **Office:** Street 371, Phnom Penh, Cambodia\n• **Led by:** Mr. Ong Phaly (Managing Director)\n• **Telegram:** [@MPG_by_ongphaly](https://t.me/MPG_by_ongphaly)\n• **Email:** support@attendkh.com\n• **Hours:** Monday to Friday, 8:00 – 17:30 (ICT)\n\n*Our Phnom Penh team is available for personalized demos and branch setup guidance.*`,
      cardType: "contact",
      quickReplies: ["Book a Live Demo", "View Pricing ($1/mo)", "Ask about GPS"],
      suggestedAction: { label: "Book a Demo / Contact Us", href: "/contact" },
    };
  }

  // 15. Smart Comprehensive Fallback for any other query
  return {
    text: `**I'm here to help with all questions about AttendKH!**\n\nYou can ask me about:\n1. **Pricing & Quotes** — Simple $1.00/user/mo, enter any team size (e.g. "50 staff")\n2. **GPS Geofencing & Selfies** — 50–200m branch perimeter & mock location defense\n3. **Cambodian Payroll** — Overtime (1.5×, 2.0×), NSSF, dual-currency ($ & ៛)\n4. **Multi-Branch Console** — Managing multiple stores, shifts, and kiosks\n5. **Device & App Compatibility** — iOS, Android, and web console\n\n*Feel free to ask your question or calculate a price quote!*`,
    cardType: "general",
    quickReplies: [
      "Pricing for my team",
      "How does GPS Geofencing work?",
      "Overtime & Cambodian Payroll",
      "Contact Support",
    ],
    suggestedAction: { label: "View FAQ", href: "/faq" },
  };
}

/**
 * Clean token streaming generator
 */
export async function* simulateTokenStream(
  fullText: string,
  signal?: { aborted: boolean }
): AsyncGenerator<string, void, unknown> {
  const words = fullText.split(/(\s+|[\n\r]+)/);
  let accumulated = "";

  for (const word of words) {
    if (signal?.aborted) break;
    accumulated += word;
    yield accumulated;

    const isPunctuation = /[.,!?;:\n]/.test(word);
    const delay = isPunctuation ? 26 : Math.floor(Math.random() * 12) + 8;
    await new Promise((res) => setTimeout(res, delay));
  }
}
