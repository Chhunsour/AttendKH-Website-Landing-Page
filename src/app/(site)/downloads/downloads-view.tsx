"use client";

import Link from "next/link";
import {
  Smartphone,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Radio,
  Bell,
  Send,
  ArrowRight,
  Globe,
  Coins,
  FileCheck,
} from "lucide-react";
import { useSite } from "@/lib/i18n";
import { PageHero, Section, CtaBand } from "@/components/site/ui";

export function DownloadsView() {
  const { lang, publicSettings } = useSite();
  const isKm = lang === "km";
  const isZh = lang === "zh";

  const copy = {
    badge: isKm
      ? "នឹងមកដល់ក្នុងពេលឆាប់ៗនេះ • UPCOMING RELEASE"
      : isZh
      ? "即将发布 • UPCOMING RELEASE"
      : "UPCOMING RELEASE • NATIVE MOBILE APPS",
    title: isKm
      ? "កម្មវិធីទូរស័ព្ទ AttendKH សម្រាប់ iOS និង Android"
      : isZh
      ? "AttendKH 移动端应用即将上线 (iOS & Android)"
      : "AttendKH Mobile Apps — Launching Soon on iOS & Android",
    sub: isKm
      ? "យើងកំពុងបញ្ចប់ការរៀបចំកម្មវិធីទូរស័ព្ទ App Store និង Google Play សម្រាប់ការចុះវត្តមានផ្ទៀងផ្ទាត់ GPS និង Selfie ផ្ទាល់។ ចូលរួមក្នុងបញ្ជីរង់ចាំ ដើម្បីទទួលបានសិទ្ធិប្រើប្រាស់មុនគេ!"
      : isZh
      ? "我们正在对 iOS App Store 与 Android Google Play 应用程序进行最后阶段优化。加入抢先体验名单，在正式上线前获取内测版！"
      : "We are putting the final touches on our iOS App Store and Android Google Play apps. Join the early-access list or request a private beta invitation for your team.",
    apple: {
      tag: isKm ? "ឆាប់ៗនេះ" : isZh ? "即将上线" : "Upcoming",
      title: "Apple App Store",
      subtitle: isKm ? "សម្រាប់ iPhone និង iPad (iOS 15+)" : isZh ? "适用于 iPhone 和 iPad (iOS 15+)" : "For iPhone & iPad (iOS 15+)",
      desc: isKm
        ? "ចុះវត្តមានតាមរយៈ GPS Geofence ជាមួយការស្កេនរូបថត Selfie និង Face ID ដំណើរការរលូន និងធ្វើសមកាលកម្មទិន្នន័យភ្លាមៗ។"
        : isZh
        ? "支持 GPS 地理围栏考勤、自拍打卡验证与 Face ID，极致流畅并实时云端同步。"
        : "GPS radius clock-in with live selfie verification, biometric security, and real-time cloud sync.",
      specs: [
        isKm ? "គាំទ្រ iOS 15.0 ឬខ្ពស់ជាងនេះ" : isZh ? "支持 iOS 15.0 及以上系统" : "Requires iOS 15.0 or later",
        isKm ? "ផ្ទៀងផ្ទាត់កាំ GPS ៥០–២០០ ម៉ែត្រ" : isZh ? "50–200 米精准 GPS 围栏" : "50–200m branch geofencing",
        isKm ? "ការការពារទីតាំងក្លែងក្លាយ" : isZh ? "防虚拟定位与篡改保护" : "Mock-GPS location defense",
        isKm ? "ទាញយកប័ណ្ណប្រាក់ខែជា PDF" : isZh ? "双币种工资条 PDF 快速下载" : "USD & KHR payslip downloads",
      ],
      cta: isKm ? "ស្នើសុំចូលរួម TestFlight" : isZh ? "申请 TestFlight 内测" : "Request TestFlight Invite",
    },
    google: {
      tag: isKm ? "ឆាប់ៗនេះ" : isZh ? "即将上线" : "Upcoming",
      title: "Google Play Store",
      subtitle: isKm ? "សម្រាប់ទូរស័ព្ទ និងថេប្លេត Android (Android 10+)" : isZh ? "适用于 Android 手机与平板 (Android 10+)" : "For Android Phones & Tablets (Android 10+)",
      desc: isKm
        ? "រចនាឡើងពិសេសសម្រាប់ទូរស័ព្ទ Android គ្រប់ម៉ូដែល ដំណើរការលឿន និងធ្វើសមកាលកម្ម Cloud ភ្លាមៗ។"
        : isZh
        ? "适配主流 Android 机型，支持毫秒级云端数据直连与实时推送。"
        : "Engineered for high compatibility across Android devices with instant cloud sync and real-time alerts.",
      specs: [
        isKm ? "គាំទ្រ Android 10.0 ឬខ្ពស់ជាងនេះ" : isZh ? "支持 Android 10.0 及以上系统" : "Requires Android 10.0 or later",
        isKm ? "ការធ្វើសមកាលកម្ម Cloud ផ្ទាល់ (Real-Time)" : isZh ? "毫秒级实时云端直连" : "Real-time cloud attendance stream",
        isKm ? "ការជូនដំណឹងពេលបើកប្រាក់ខែ និងវេនការងារ" : isZh ? "排班考勤与发薪实时推送通知" : "Real-time shift & payslip alerts",
        isKm ? "ទម្ងន់កម្មវិធីស្រាល សន្សំសំចៃទិន្នន័យ" : isZh ? "极小包体，省电省流量" : "Lightweight package with low data use",
      ],
      cta: isKm ? "ស្នើសុំឯកសារ APK សាកល្បង" : isZh ? "获取 Android 抢先体验版" : "Request Android Beta APK",
    },
    webApp: {
      badge: isKm ? "អាចប្រើប្រាស់បានភ្លាមៗ" : isZh ? "现已可用" : "AVAILABLE NOW",
      title: isKm ? "ប្រើប្រាស់តាមរយៈ Web App លើទូរស័ព្ទ" : isZh ? "手机浏览器即开即用（PWA 网页版）" : "Use Responsive Web App Today",
      desc: isKm
        ? "ខណៈពេលដែលកម្មវិធីទូរស័ព្ទផ្លូវការកំពុងរៀបចំ ក្រុមការងាររបស់អ្នកអាចប្រើប្រាស់មុខងារចុះវត្តមាន និងប្រាក់ខែបានយ៉ាងពេញលេញតាមរយៈកម្មវិធីរុករកទូរស័ព្ទគ្រប់ប្រភេទ។"
        : isZh
        ? "在原生 App 正式上架应用商店前，您的团队已可通过手机浏览器直接登录系统，使用完整的考勤打卡与薪酬功能。"
        : "While native app store versions are going through final review, your team can start clocking in and managing shifts immediately on any smartphone browser.",
      cta: isKm ? "ចូលទៅកាន់ Web App" : isZh ? "立即登录使用" : "Open Web App",
    },
    featuresTitle: isKm ? "មុខងារដែលរួមបញ្ចូលក្នុងកម្មវិធីទូរស័ព្ទ" : isZh ? "移动端核心功能一览" : "What's Built into the Native Mobile Experience",
    features: [
      {
        icon: Smartphone,
        title: isKm ? "ចុះវត្តមានត្រឹម ៣ វិនាទី" : isZh ? "3秒极速打卡" : "3-Second Fast Clock-In",
        desc: isKm ? "បើកកម្មវិធី ពិនិត្យទីតាំង GPS ថតរូបសេលហ្វី រួចរាល់ភ្លាមៗ។" : isZh ? "一键识别 GPS 范围并拍摄自拍，快速完成打卡。" : "Tap, verify GPS boundary, snap a selfie, and submit in seconds.",
      },
      {
        icon: Radio,
        title: isKm ? "ធ្វើសមកាលកម្ម Cloud ភ្លាមៗ" : isZh ? "实时云端同步" : "Real-Time Cloud Sync",
        desc: isKm ? "ទិន្នន័យចុះវត្តមាន និងរូបថត Selfie បញ្ជូនទៅកាន់កុងសូលកណ្តាលភ្លាមៗដោយគ្មានការពន្យារពេល។" : isZh ? "打卡数据与照片实时同步至中央后台，即刻刷新出勤状态。" : "Punches and selfies stream directly to the central console with zero delay.",
      },
      {
        icon: Coins,
        title: isKm ? "ពិនិត្យប្រាក់ខែជា ដុល្លារ និងរៀល" : isZh ? "USD/KHR 双币工资条" : "Dual-Currency Payslips",
        desc: isKm ? "បុគ្គលិកមើលឃើញការគណនាម៉ោងបន្ថែម និងទាញយកប័ណ្ណប្រាក់ខែ PDF គ្រប់ខែ។" : isZh ? "员工随时查看当月考勤工时、加班津贴并下载双币工资条。" : "Frontline staff can review hours, overtime bonuses, and export PDF slips.",
      },
      {
        icon: ShieldCheck,
        title: isKm ? "ការពារទីតាំងក្លែងក្លាយ (Anti-Spoofing)" : isZh ? "防虚拟定位保护" : "Mock-GPS Defense",
        desc: isKm ? "ទប់ស្កាត់កម្មវិធីបន្លំទីតាំង GPS និងធានាថាបុគ្គលិកស្ថិតនៅទីតាំងសាខាពិតប្រាកដ។" : isZh ? "智能拦截越狱定位篡改与伪造软件，确保真实在店。" : "Advanced protection against location mocking and emulator tamper tools.",
      },
    ],
  };

  return (
    <div className="bg-paper">
      {/* Hero Header */}
      <PageHero
        badge={copy.badge}
        title={copy.title}
        sub={copy.sub}
      />

      <Section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          {/* App Store and Play Store Upcoming Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Apple Card */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-xs transition-all duration-300 hover:border-brand/40 hover:shadow-lg sm:p-8">
              <div className="absolute right-6 top-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 font-mono text-[11px] font-bold text-brand ring-1 ring-blue-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                  {copy.apple.tag}
                </span>
              </div>

              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-md">
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M16.36 12.72c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.83-.81-3-.79-1.54.02-2.96.9-3.75 2.28-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74s1.78.74 3 .72c1.24-.02 2.02-1.12 2.78-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.69zM14.1 5.9c.63-.77 1.06-1.83.94-2.9-.91.04-2.02.61-2.67 1.37-.58.68-1.09 1.77-.95 2.81 1.02.08 2.06-.52 2.68-1.28z" />
                  </svg>
                </div>

                <h2 className="mt-5 text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  {copy.apple.title}
                </h2>
                <p className="mt-1 text-xs font-semibold text-brand">
                  {copy.apple.subtitle}
                </p>

                <p className="mt-3 text-[14px] leading-relaxed text-body">
                  {copy.apple.desc}
                </p>

                <ul className="mt-5 space-y-2.5 border-t border-line/60 pt-5 text-[13px] text-body">
                  {copy.apple.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="shrink-0 text-brand" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-line/60 pt-5">
                <a
                  href={publicSettings.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-[13.5px] font-semibold text-white transition-colors hover:bg-brand"
                >
                  <Send size={15} />
                  <span>{copy.apple.cta}</span>
                </a>
              </div>
            </div>

            {/* Google Play Card */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-xs transition-all duration-300 hover:border-brand/40 hover:shadow-lg sm:p-8">
              <div className="absolute right-6 top-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 font-mono text-[11px] font-bold text-emerald-700 ring-1 ring-emerald-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {copy.google.tag}
                </span>
              </div>

              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-md">
                  <svg className="h-7 w-7" viewBox="0 0 24 26" aria-hidden="true">
                    <path d="M3.3 1.2A1.7 1.7 0 0 0 2.7 2.5v21c0 .5.2 1 .6 1.3L14.7 13 3.3 1.2z" fill="#3B82F6" />
                    <path d="M18.6 9.2 15 12.9l3.6 3.7 4.1-2.3c.9-.5.9-1.9 0-2.5l-4.1-2.6z" fill="#F5B301" />
                    <path d="M3.3 24.8 15 13l3.6 3.6-13.2 7.6a1.7 1.7 0 0 1-2.1-.4z" fill="#10B981" />
                    <path d="M3.3 1.2 18.6 9.2 15 12.9 3.3 1.2z" fill="#EF4444" />
                  </svg>
                </div>

                <h2 className="mt-5 text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  {copy.google.title}
                </h2>
                <p className="mt-1 text-xs font-semibold text-emerald-700">
                  {copy.google.subtitle}
                </p>

                <p className="mt-3 text-[14px] leading-relaxed text-body">
                  {copy.google.desc}
                </p>

                <ul className="mt-5 space-y-2.5 border-t border-line/60 pt-5 text-[13px] text-body">
                  {copy.google.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="shrink-0 text-emerald-600" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-line/60 pt-5">
                <a
                  href={publicSettings.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-[13.5px] font-semibold text-white transition-colors hover:bg-emerald-600"
                >
                  <Send size={15} />
                  <span>{copy.google.cta}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Web App Banner */}
          <div className="mt-10 overflow-hidden rounded-3xl border border-brand/20 bg-gradient-to-br from-[#EDF2FE] via-white to-white p-7 sm:p-9 shadow-xs">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 font-mono text-[10.5px] font-bold text-brand">
                  {copy.webApp.badge}
                </span>
                <h3 className="mt-3 text-lg font-bold text-ink sm:text-xl">
                  {copy.webApp.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-body">
                  {copy.webApp.desc}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-[14px] font-semibold text-white shadow-xs transition-colors hover:bg-brand-hover"
                >
                  <span>{copy.webApp.cta}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="mt-16 sm:mt-20">
            <h3 className="text-center font-display text-xl font-bold text-ink sm:text-2xl">
              {copy.featuresTitle}
            </h3>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {copy.features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="rounded-2xl border border-line bg-white p-5 shadow-xs transition-all hover:border-brand/40 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDF2FE] text-brand">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <h4 className="mt-3.5 text-[15px] font-bold text-ink">
                      {feat.title}
                    </h4>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-body">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        title={
          isKm
            ? "ត្រៀមខ្លួនរួចរាល់ដើម្បីសាកល្បង AttendKH?"
            : "Ready to deploy AttendKH across your locations?"
        }
        sub={
          isKm
            ? "ដំឡើងសាខាដំបូងរបស់អ្នកក្នុងរយៈពេល ៥ នាទី ត្រឹមតែ ១ ដុល្លារក្នុងម្នាក់។"
            : "Set up your first branch in about five minutes for just $1 per employee."
        }
      />
    </div>
  );
}
