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

export type Lang = "en" | "km" | "zh";
export type Currency = "USD" | "KHR";

type LegalDocumentCopy = {
  title: string;
  updated: string;
  p1: string;
  p2: string;
  p3: string;
};

type Dict = {
  legal: Record<"privacy" | "terms" | "support" | "cookies", LegalDocumentCopy>;
};

const dictionaries: Record<Lang, Dict> = {
  en: {
    legal: {
      privacy: {
        title: "Privacy Policy",
        updated: "Review the current policy before using AttendKH",
        p1: "AttendKH processes attendance, verification, and payroll records to provide the service selected by an organization.",
        p2: "Access and retention depend on the organization's configuration and its agreement with AttendKH. GPS is checked at the time of a punch rather than used for continuous route tracking.",
        p3: "Privacy questions can be sent to support@attendkh.com or Telegram @attendkh.",
      },
      terms: {
        title: "Terms of Service",
        updated: "Review the current terms before using AttendKH",
        p1: "Use of AttendKH is governed by the active service terms and the plan or order form agreed with the customer.",
        p2: "Plan limits, billing, data export, and support commitments may vary by agreement.",
        p3: "Questions about the terms can be sent to support@attendkh.com.",
      },
      support: {
        title: "Support",
        updated: "Support information",
        p1: "Contact support@attendkh.com or Telegram @attendkh for product assistance.",
        p2: "Support can help with setup, attendance workflows, payroll configuration, and exports.",
        p3: "Response times and service channels depend on the customer's support plan.",
      },
      cookies: {
        title: "Cookie Policy",
        updated: "Review your preferences at any time",
        p1: "AttendKH uses necessary browser storage for essential website functions and saved preferences.",
        p2: "Optional analytics, functional, and attribution categories are controlled through the cookie preferences panel.",
        p3: "You can reopen Cookie Settings from the website footer to change optional choices.",
      },
    },
  },
  km: {
    legal: {
      privacy: {
        title: "គោលការណ៍ភាពឯកជន",
        updated: "សូមពិនិត្យគោលការណ៍បច្ចុប្បន្នមុនប្រើ AttendKH",
        p1: "AttendKH ដំណើរការទិន្នន័យវត្តមាន ការផ្ទៀងផ្ទាត់ និងប្រាក់ខែ ដើម្បីផ្តល់សេវាកម្មដែលអង្គភាពបានជ្រើសរើស។",
        p2: "ការចូលប្រើ និងរយៈពេលរក្សាទុកអាស្រ័យលើការកំណត់របស់អង្គភាព និងកិច្ចព្រមព្រៀងជាមួយ AttendKH។ GPS ត្រូវបានពិនិត្យនៅពេលចុះវត្តមាន មិនមែនតាមដានផ្លូវជាបន្តបន្ទាប់ទេ។",
        p3: "សំណួរអំពីភាពឯកជនអាចផ្ញើទៅ support@attendkh.com ឬ Telegram @attendkh។",
      },
      terms: {
        title: "លក្ខខណ្ឌប្រើប្រាស់",
        updated: "សូមពិនិត្យលក្ខខណ្ឌបច្ចុប្បន្នមុនប្រើ AttendKH",
        p1: "ការប្រើ AttendKH ស្ថិតក្រោមលក្ខខណ្ឌសេវាកម្ម និងគម្រោងដែលបានព្រមព្រៀងជាមួយអតិថិជន។",
        p2: "ដែនកំណត់គម្រោង ការទូទាត់ ការនាំចេញទិន្នន័យ និងការគាំទ្រអាចខុសគ្នាតាមកិច្ចព្រមព្រៀង។",
        p3: "សំណួរអំពីលក្ខខណ្ឌអាចផ្ញើទៅ support@attendkh.com។",
      },
      support: {
        title: "ជំនួយ",
        updated: "ព័ត៌មានជំនួយ",
        p1: "ទាក់ទង support@attendkh.com ឬ Telegram @attendkh សម្រាប់ជំនួយផលិតផល។",
        p2: "ក្រុមជំនួយអាចជួយការដំឡើង វត្តមាន ការកំណត់ប្រាក់ខែ និងការនាំចេញទិន្នន័យ។",
        p3: "ពេលវេលាឆ្លើយតប និងបណ្តាញជំនួយអាស្រ័យលើគម្រោងគាំទ្ររបស់អតិថិជន។",
      },
      cookies: {
        title: "គោលការណ៍ Cookie",
        updated: "អ្នកអាចពិនិត្យចំណូលចិត្តបានគ្រប់ពេល",
        p1: "AttendKH ប្រើកន្លែងរក្សាទុកចាំបាច់ក្នុងកម្មវិធីរុករកសម្រាប់មុខងារគេហទំព័រ និងចំណូលចិត្តដែលបានរក្សាទុក។",
        p2: "ប្រភេទវិភាគ មុខងារ និងការវាស់វែងយុទ្ធនាការជាជម្រើស ត្រូវបានគ្រប់គ្រងតាមផ្ទាំងចំណូលចិត្ត Cookie។",
        p3: "អ្នកអាចបើក Cookie Settings ពីបាតគេហទំព័រដើម្បីផ្លាស់ប្តូរជម្រើស។",
      },
    },
  },
  zh: {
    legal: {
      privacy: {
        title: "隐私政策",
        updated: "使用 AttendKH 前请查阅当前政策",
        p1: "AttendKH 为提供企业所选服务而处理考勤、核验和薪酬记录。",
        p2: "访问权限和保留期限取决于企业配置及其与 AttendKH 的协议。GPS 仅在打卡时核验，不用于持续路线追踪。",
        p3: "隐私问题可发送至 support@attendkh.com 或 Telegram @attendkh。",
      },
      terms: {
        title: "服务条款",
        updated: "使用 AttendKH 前请查阅当前条款",
        p1: "AttendKH 的使用受现行服务条款以及与客户约定的方案或订单约束。",
        p2: "方案限制、计费、数据导出和支持承诺可能因协议而异。",
        p3: "条款问题可发送至 support@attendkh.com。",
      },
      support: {
        title: "服务支持",
        updated: "支持信息",
        p1: "如需产品协助，请联系 support@attendkh.com 或 Telegram @attendkh。",
        p2: "支持范围包括设置、考勤流程、薪酬配置和数据导出。",
        p3: "响应时间和服务渠道取决于客户的支持方案。",
      },
      cookies: {
        title: "Cookie 政策",
        updated: "您可随时查看偏好设置",
        p1: "AttendKH 使用必要的浏览器存储来支持网站核心功能和已保存的偏好。",
        p2: "可选的分析、功能和归因类别可通过 Cookie 偏好面板控制。",
        p3: "您可以从网站页脚重新打开 Cookie 设置并修改可选项目。",
      },
    },
  },
};

type I18nValue = {
  lang: Lang;
  currency: Currency;
  t: Dict;
  setLang: (lang: Lang) => void;
  setCurrency: (currency: Currency) => void;
  fmt: (usd: number, decimals?: number) => string;
  exchangeRate: number;
  publicSettings: {
    contactEmail: string;
    supportPhone: string;
    telegramUrl: string;
    analyticsEnabled: boolean;
  };
};

const I18nContext = createContext<I18nValue | null>(null);

export function Providers({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [currency, setCurrencyState] = useState<Currency>("USD");
  const [exchangeRate, setExchangeRate] = useState(4100);
  const [publicSettings, setPublicSettings] = useState({
    contactEmail: "support@attendkh.com",
    supportPhone: "",
    telegramUrl: "https://t.me/attendkh",
    analyticsEnabled: true,
  });

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("attendkh-lang");
      const savedCurrency = localStorage.getItem("attendkh-cur");
      if (savedLang === "en" || savedLang === "km" || savedLang === "zh") setLangState(savedLang);
      if (savedCurrency === "USD" || savedCurrency === "KHR") setCurrencyState(savedCurrency);
    } catch {}
  }, []);

  useEffect(() => {
    fetch("/api/admin/settings")
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        const settings = data?.settings;
        if (!settings) return;
        const rate = Number(settings.currency_rate_khr);
        if (Number.isFinite(rate) && rate >= 1000 && rate <= 10000) setExchangeRate(rate);
        setPublicSettings({
          contactEmail: settings.contact_email || "support@attendkh.com",
          supportPhone: settings.support_phone || "",
          telegramUrl: settings.telegram_url || "https://t.me/attendkh",
          analyticsEnabled: settings.analytics_enabled !== 0,
        });
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("lang-km", lang === "km");
    document.documentElement.classList.toggle("lang-zh", lang === "zh");
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

  const setLang = useCallback((value: Lang) => setLangState(value), []);
  const setCurrency = useCallback((value: Currency) => setCurrencyState(value), []);
  const fmt = useCallback(
    (usd: number, decimals = 2) =>
      formatCurrency(
        usd,
        currency,
        { minimumFractionDigits: decimals, maximumFractionDigits: decimals },
        exchangeRate
      ),
    [currency, exchangeRate]
  );
  const value = useMemo<I18nValue>(
    () => ({
      lang,
      currency,
      t: dictionaries[lang],
      setLang,
      setCurrency,
      fmt,
      exchangeRate,
      publicSettings,
    }),
    [currency, exchangeRate, fmt, lang, publicSettings, setCurrency, setLang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useSite(): I18nValue {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useSite must be used inside Providers");
  return value;
}
