"use client";

import { useState } from "react";
import Image from "next/image";
import { useSite } from "@/lib/i18n";
import {
  ShieldCheck,
  MapPin,
  Camera,
  Trash2,
  Lock,
  EyeOff,
  Smartphone,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronDown,
  Copy,
  Check,
  Mail,
  Search,
  X,
  FileCheck2,
  Sparkles,
  Layers,
  ArrowRight,
  Info,
  Database,
  RefreshCw,
  BellRing,
  ExternalLink,
} from "lucide-react";

// -------------------------------------------------------------
// 1. Reading Progress Bar & Back to Top
// -------------------------------------------------------------
export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (height > 0) {
        setProgress((winScroll / height) * 100);
      }
    };
  }

  return (
    <div
      className="fixed top-0 left-0 z-50 h-1 bg-brand transition-all duration-150 ease-out"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}

// -------------------------------------------------------------
// 2. Interactive Privacy Search Bar
// -------------------------------------------------------------
export function PrivacySearchInput({
  value,
  onChange,
  onClear,
  resultsCount,
}: {
  value: string;
  onChange: (val: string) => void;
  onClear: () => void;
  resultsCount?: number;
}) {
  const { lang } = useSite();
  const isKm = lang === "km";
  const isZh = lang === "zh";

  const placeholderText = isKm
    ? "ស្វែងរកក្នុងគោលការណ៍ (ឧ. GPS, Selfie, លុបទិន្នន័យ, Telegram, កាមេរ៉ា)..."
    : isZh
    ? "在隐私政策中搜索（如：GPS、自拍照片、注销账户、权限、Telegram）..."
    : "Search privacy topics (e.g. GPS, Selfie, Account Deletion, Camera, Telegram)...";

  return (
    <div className="relative w-full max-w-xl">
      <div className="relative flex items-center">
        <Search
          size={17}
          className="absolute left-3.5 text-slate-400 pointer-events-none"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholderText}
          className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-20 text-xs text-ink placeholder:text-slate-400 shadow-xs focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
        />
        {value && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-2.5 flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X size={12} />
            <span>{isKm ? "សម្អាត" : isZh ? "清除" : "Clear"}</span>
          </button>
        )}
      </div>
      {value && resultsCount !== undefined && (
        <div className="mt-2 flex items-center justify-between px-1 text-[11.5px] text-slate-500">
          <span>
            {isKm ? "រកឃើញ " : isZh ? "找到 " : "Found "}
            <strong className="text-brand font-semibold">{resultsCount}</strong>
            {isKm ? " ផ្នែកដែលត្រូវនឹង " : isZh ? " 个相关章节：" : " sections matching "}
            <span className="text-ink font-medium">&ldquo;{value}&rdquo;</span>
          </span>
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// 3. Apple App Store Style App Privacy & Data Safety Matrix
// -------------------------------------------------------------
export function PrivacyNutritionCard() {
  const { lang } = useSite();
  const isKm = lang === "km";
  const isZh = lang === "zh";

  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs">
      {/* Header */}
      <div className="border-b border-slate-100 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-brand" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">
              {isKm
                ? "តម្លាភាពទិន្នន័យ (App Privacy)"
                : isZh
                ? "App 隐私详细信息 (App Privacy)"
                : "App Privacy Details"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 font-mono text-[11px] font-medium text-slate-600">
              Apple App Store 5.1.1
            </span>
            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 font-mono text-[11px] font-medium text-slate-600">
              Google Play Data Safety
            </span>
          </div>
        </div>

        <h3 className="font-display mt-2.5 text-xl font-bold tracking-tight text-ink sm:text-2xl">
          {isKm
            ? "តម្លាភាពទិន្នន័យកម្មវិធីទូរស័ព្ទ AttendKH"
            : isZh
            ? "AttendKH 移动端数据安全与隐私披露"
            : "AttendKH Mobile App Privacy & Data Safety"}
        </h3>
        <p className="mt-1 text-xs text-slate-500 max-w-2xl leading-relaxed">
          {isKm
            ? "អ្នកអភិវឌ្ឍន៍ AttendKH បានបញ្ជាក់ថាកម្មវិធីទូរស័ព្ទប្រមូលតែទិន្នន័យចាំបាច់សម្រាប់ការផ្ទៀងផ្ទាត់វត្តមាន និងការចូលគណនីប៉ុណ្ណោះ។"
            : isZh
            ? "开发者 AttendKH 指出，该移动端应用的隐私规范可能包括下述数据处理方式，用于考勤核验及账户认证。"
            : "The developer, AttendKH, indicated that the mobile application handles data solely for workplace attendance verification and secure employee authentication as described below."}
        </p>
      </div>

      {/* 3-Column Structured Grid */}
      <div className="mt-6 grid divide-y divide-slate-100 sm:grid-cols-3 sm:divide-y-0 sm:divide-x sm:gap-6">
        {/* Column 1: Data Used to Track You */}
        <div className="pt-5 sm:pt-0 sm:pr-2">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
              <EyeOff size={15} />
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase font-bold text-slate-400 block leading-tight">
                Tracking
              </span>
              <h4 className="font-display text-sm font-bold text-ink">
                {isKm ? "គ្មានការតាមដាន" : isZh ? "未用于追踪的数据" : "No Data Used to Track You"}
              </h4>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            {isKm
              ? "អ្នកអភិវឌ្ឍន៍មិនតាមដានអ្នកនៅលើកម្មវិធី និងគេហទំព័រដែលជាកម្មសិទ្ធិរបស់ក្រុមហ៊ុនផ្សេងទៀតឡើយ។"
              : isZh
              ? "开发者不会跨其他公司拥有的 App 和网站追踪用户。"
              : "The developer does not track you across apps and websites owned by other companies."}
          </p>

          <div className="mt-4 rounded-xl bg-emerald-50/70 border border-emerald-200/50 p-2.5 text-[11px] text-emerald-800 font-medium flex items-center gap-1.5">
            <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
            <span>{isKm ? "គ្មានការលក់ទិន្នន័យ (0% Ad Tracking)" : isZh ? "零广告追踪 • 严禁转售" : "Zero Ad Tracking • Never Sold"}</span>
          </div>
        </div>

        {/* Column 2: Data Linked to You */}
        <div className="pt-5 sm:pt-0 sm:px-4">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">
              <Smartphone size={15} />
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase font-bold text-slate-400 block leading-tight">
                Linked Data
              </span>
              <h4 className="font-display text-sm font-bold text-ink">
                {isKm ? "ទិន្នន័យភ្ជាប់នឹងអ្នក" : isZh ? "与您关联的数据" : "Data Linked to You"}
              </h4>
            </div>
          </div>

          <p className="text-[11.5px] text-slate-500 mb-3">
            {isKm
              ? "ទិន្នន័យខាងក្រោមត្រូវបានប្រមូល និងភ្ជាប់ជាមួយគណនីរបស់អ្នក៖"
              : isZh
              ? "以下数据可能会被收集并与您的身份关联："
              : "The following data may be collected and linked to your employee identity:"}
          </p>

          <ul className="space-y-2.5 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <Check size={13} className="text-brand shrink-0 mt-0.5" />
              <div>
                <strong>{isKm ? "ទំនាក់ទំនង" : isZh ? "联系信息" : "Contact Info"}:</strong>{" "}
                <span className="text-slate-600">
                  {isKm
                    ? "ទូរស័ព្ទ ឬ អ៊ីមែល (ត្រូវការយ៉ាងតិច ១ សម្រាប់ Login) • Staff ID"
                    : isZh
                    ? "手机号或邮箱（二选一必填用于登录）• 工号"
                    : "Phone or Email (1 required for login) • Staff ID"}
                </span>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <Check size={13} className="text-brand shrink-0 mt-0.5" />
              <div>
                <strong>{isKm ? "ម៉ូដែលទូរស័ព្ទ" : isZh ? "设备型号" : "Device Model"}:</strong>{" "}
                <span className="text-slate-600">
                  {isKm
                    ? "ម៉ូដែល និង OS Version សម្រាប់ចាក់សោសុវត្ថិភាពឧបករណ៍"
                    : isZh
                    ? "机型及系统版本，用于单机绑定防代打卡"
                    : "Model & OS version bound for anti-fraud lock"}
                </span>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <Check size={13} className="text-brand shrink-0 mt-0.5" />
              <div>
                <strong>{isKm ? "ទីតាំងបន្ទាន់" : isZh ? "瞬时位置" : "Instant Location"}:</strong>{" "}
                <span className="text-slate-600">
                  {isKm
                    ? "ពិនិត្យតែពេលចុះវត្តមាន (គ្មាន background GPS)"
                    : isZh
                    ? "仅打卡瞬间比对围栏（零后台常驻定位）"
                    : "Point-in-time check only (0% background GPS)"}
                </span>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <Check size={13} className="text-brand shrink-0 mt-0.5" />
              <div>
                <strong>{isKm ? "រូបថត Selfie" : isZh ? "人脸自拍" : "Selfie Photo"}:</strong>{" "}
                <span className="text-slate-600">
                  {isKm
                    ? "រូបថតជាមួយ Watermark ម៉ោង & ទីតាំង (អ៊ិនគ្រីប AES-256)"
                    : isZh
                    ? "带时间水印的实时自拍（AES-256 加密）"
                    : "Watermarked clock-in photo (AES-256 encrypted)"}
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* Column 3: Security & Rights */}
        <div className="pt-5 sm:pt-0 sm:pl-4">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/60">
              <Lock size={15} />
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase font-bold text-slate-400 block leading-tight">
                Security
              </span>
              <h4 className="font-display text-sm font-bold text-ink">
                {isKm ? "សុវត្ថិភាព និងការគ្រប់គ្រង" : isZh ? "安全防护与权利" : "Security & Protections"}
              </h4>
            </div>
          </div>

          <p className="text-[11.5px] text-slate-500 mb-3">
            {isKm
              ? "ស្ដង់ដារសុវត្ថិភាពទិន្នន័យ និងសិទ្ធិរបស់អ្នក៖"
              : isZh
              ? "平台实施的技术防护措施及用户权利："
              : "Technical security measures and data subject rights:"}
          </p>

          <ul className="space-y-2.5 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <Check size={13} className="text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <strong>{isKm ? "អ៊ិនគ្រីប" : isZh ? "传输与静态加密" : "Encryption"}:</strong>{" "}
                <span className="text-slate-600">TLS 1.3 in-transit & AES-256 at rest</span>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <Check size={13} className="text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <strong>{isKm ? "សិទ្ធិលុបគណនី" : isZh ? "账户注销权" : "Account Deletion"}:</strong>{" "}
                <span className="text-slate-600">
                  {isKm
                    ? "ដំណើរការលុបចោលជាស្ថាពរក្នុងរយៈពេល ៣០ថ្ងៃ"
                    : isZh
                    ? "支持快捷申请，30日内核验硬删除"
                    : "Self-service & 30-day hard deletion SLA"}
                </span>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <Check size={13} className="text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <strong>{isKm ? "ច្បាប់ការងារ" : isZh ? "劳工法合规" : "Labor Compliance"}:</strong>{" "}
                <span className="text-slate-600">MoLVT & NSSF statutory retention</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
        <span>
          {isKm
            ? "* ការអនុវត្តភាពឯកជនអាចប្រែប្រួលទៅតាមមុខងារដែលបើកដោយនិយោជករបស់អ្នក (ដូចជារូបថត Selfie ឬ QR Kiosk)។"
            : isZh
            ? "* 具体隐私实践可能根据您雇主启用的功能（如实时人脸拍照或扫码门禁模式）而有所不同。"
            : "* Privacy practices may vary based on the optional features enabled by your employer (such as live selfie check or QR kiosk mode)."}
        </span>
        <span className="font-mono text-slate-500">AttendKH Compliance Suite v2.2</span>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 4. Point-in-Time GPS vs. 24/7 Tracking Comparison Component
// -------------------------------------------------------------
export function GpsTrackingComparison() {
  const { lang } = useSite();
  const isKm = lang === "km";
  const isZh = lang === "zh";

  return (
    <div className="my-10 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
      <div className="flex items-center gap-2 mb-2">
        <MapPin size={18} className="text-brand" />
        <h3 className="font-display text-base font-bold text-ink sm:text-lg">
          {isKm
            ? "ការប្រៀបធៀប៖ ទីតាំង GPS បន្ទាន់ vs ការតាមដាន ២៤ម៉ោង"
            : isZh
            ? "对比说明：瞬时打卡 GPS vs 全天候后台定位"
            : "Direct Comparison: Point-in-Time GPS vs Continuous 24/7 Tracking"}
        </h3>
      </div>
      <p className="text-xs text-slate-500 max-w-2xl mb-6">
        {isKm
          ? "AttendKH ត្រូវបានបង្កើតឡើងដើម្បីការពារភាពថ្លៃថ្នូរ និងឯកជនភាពរបស់បុគ្គលិក ដោយមិនមានការតាមដានក្រៅម៉ោងធ្វើការឡើយ។"
          : isZh
          ? "AttendKH 坚决捍卫员工下班与休息时间的个人隐私，拒绝任何形式的侵入式全天候定位追踪。"
          : "AttendKH is engineered specifically to respect worker autonomy and prevent invasive off-duty monitoring."}
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* What AttendKH Does (Positive) */}
        <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50/60 p-5">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white">
              <Check size={14} />
            </span>
            <h4 className="font-display text-sm font-bold text-emerald-950">
              {isKm ? "អ្វីដែល AttendKH ធ្វើ (Point-in-Time)" : isZh ? "AttendKH 的合规做法（瞬时核验）" : "What AttendKH Does (Point-in-Time)"}
            </h4>
          </div>
          <ul className="mt-4 space-y-2.5 text-xs text-emerald-900">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="shrink-0 text-emerald-600 mt-0.5" />
              <span>
                <strong>{isKm ? "ពិនិត្យតែពេលចុច Clock-in" : isZh ? "仅在打卡瞬间查询 GPS" : "Captures GPS only on punch tap"}:</strong>{" "}
                {isKm ? "ដំណើរការតែក្នុងរយៈពេល ១-២ វិនាទី" : isZh ? "耗时 1-2 秒核验分支距离" : "Active for 1-2 seconds to verify branch radius."}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="shrink-0 text-emerald-600 mt-0.5" />
              <span>
                <strong>{isKm ? "បិទ Sensor ភ្លាមៗ" : isZh ? "核验完毕立即关闭传感器" : "Sensors turn off immediately"}:</strong>{" "}
                {isKm ? "គ្មានការដំណើរការ Background GPS ទេ" : isZh ? "后台完全静默，绝不消耗多余电量" : "Zero background location daemon is active."}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="shrink-0 text-emerald-600 mt-0.5" />
              <span>
                <strong>{isKm ? "ឯកជនភាព ១០០% ក្រៅម៉ោងការងារ" : isZh ? "下班与周末 100% 自由隐私" : "100% Off-duty privacy"}:</strong>{" "}
                {isKm ? "ថៅកែមិនអាចមើលទីតាំងនៅផ្ទះ ឬថ្ងៃឈប់សម្រាកបានឡើយ" : isZh ? "雇主完全无法查看员工休息日或下班后的任何动向" : "Employers have zero visibility outside work hours."}
              </span>
            </li>
          </ul>
        </div>

        {/* What AttendKH NEVER Does (Negative) */}
        <div className="rounded-2xl border-2 border-rose-200 bg-rose-50/60 p-5">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-600 text-white">
              <EyeOff size={14} />
            </span>
            <h4 className="font-display text-sm font-bold text-rose-950">
              {isKm ? "អ្វីដែល AttendKH មិនដែលធ្វើ (Zero Surveillance)" : isZh ? "AttendKH 严禁的行为（杜绝监控）" : "What AttendKH NEVER Does (Zero Surveillance)"}
            </h4>
          </div>
          <ul className="mt-4 space-y-2.5 text-xs text-rose-900">
            <li className="flex items-start gap-2">
              <XCircle size={14} className="shrink-0 text-rose-600 mt-0.5" />
              <span>
                <strong>{isKm ? "គ្មានការតាមដាន ២៤ម៉ោង" : isZh ? "无全天候后台实时轨迹追踪" : "NO 24/7 background breadcrumb tracking"}:</strong>{" "}
                {isKm ? "មិនកត់ត្រាផ្លូវធ្វើដំណើរ" : isZh ? "绝不记录员工通勤路线或历史漫游" : "Never logs routes, travel history, or speed."}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle size={14} className="shrink-0 text-rose-600 mt-0.5" />
              <span>
                <strong>{isKm ? "គ្មានការថតសម្លេង ឬអេក្រង់" : isZh ? "无麦克风录音或屏幕截图监控" : "NO audio, microphone, or screen recording"}:</strong>{" "}
                {isKm ? "គ្មានការចូលប្រើ mic ឬ app ដទៃ" : isZh ? "绝不捕获设备屏幕或监听环境语音" : "Zero keystroke, screen, or microphone capture."}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle size={14} className="shrink-0 text-rose-600 mt-0.5" />
              <span>
                <strong>{isKm ? "មិនលក់ទិន្នន័យទីតាំង" : isZh ? "绝不出售任何位置元数据" : "NO selling location data to brokers"}:</strong>{" "}
                {isKm ? "ធានាមិនផ្ញើទៅភាគីទីបី" : isZh ? "严禁任何第三方商业化数据共享" : "Strict zero-monetization guarantee."}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 5. Interactive Mobile Permissions Explorer (iOS & Android)
// -------------------------------------------------------------
export function MobilePermissionsExplorer() {
  const [platform, setPlatform] = useState<"ios" | "android">("ios");
  const { lang } = useSite();
  const isKm = lang === "km";
  const isZh = lang === "zh";

  const permissions = [
    {
      id: "location",
      name: isKm ? "ទីតាំង (Location)" : isZh ? "位置服务 (Location)" : "Location Services",
      iosKey: "NSLocationWhenInUseUsageDescription",
      androidKey: "ACCESS_FINE_LOCATION & ACCESS_COARSE_LOCATION",
      level: "Sensitive",
      levelColor: "bg-amber-100 text-amber-800 border-amber-300",
      icon: MapPin,
      purpose: isKm
        ? "ផ្ទៀងផ្ទាត់ថាបុគ្គលិកស្ថិតនៅក្នុងរង្វង់ទីតាំងសាខាដែលបានកំណត់នៅពេលចុះវត្តមាន។"
        : isZh
        ? "仅在员工打卡瞬间核验设备是否位于雇主设定的分支机构地理围栏半径内。"
        : "Verifies that the employee is physically present within the branch geofence boundary at the active moment of clocking in.",
      userControl: isKm
        ? "អាចជ្រើសរើស «ខណៈពេលកំពុងប្រើកម្មវិធី» (While Using App)។ មិនត្រូវការ Background Location ទេ។"
        : isZh
        ? "仅需授权「仅在使用应用期间允许」。绝不申请全天候后台常驻定位权限。"
        : "Set to 'While Using App'. Background location is never requested or required.",
    },
    {
      id: "camera",
      name: isKm ? "កាមេរ៉ា (Camera)" : isZh ? "相机拍照 (Camera)" : "Camera Access",
      iosKey: "NSCameraUsageDescription",
      androidKey: "android.permission.CAMERA",
      level: "Sensitive",
      levelColor: "bg-amber-100 text-amber-800 border-amber-300",
      icon: Camera,
      purpose: isKm
        ? "ថតរូបភាព Selfie ផ្ទាល់ពេលចុះវត្តមាន ដើម្បីការពារការចុះវត្តមានជំនួស (Buddy Punching)។"
        : isZh
        ? "在打卡瞬间拍摄实时人脸自拍，附带时间水印，防范代打卡舞弊行为。"
        : "Captures a live front-camera selfie timestamped at clock-in to prevent proxy attendance (buddy punching).",
      userControl: isKm
        ? "កាមេរ៉ាដំណើរការតែពេលអ្នកចុចប៊ូតុងចុះវត្តមាន។ មិនមានការថតវីដេអូ ឬសម្លេងឡើយ។"
        : isZh
        ? "仅在用户点击打卡按钮时瞬时调用前置摄像头，绝无后台静默拍照或录像。"
        : "Activated solely when the punch button is triggered. No background video or continuous streaming.",
    },
    {
      id: "storage",
      name: isKm ? "អង្គចងចាំទូរស័ព្ទ (Local Sandbox Storage)" : isZh ? "本地加密存储 (Sandbox Cache)" : "Encrypted Local Storage",
      iosKey: "App Sandbox & iOS Keychain",
      androidKey: "Scoped Storage & SQLite Encrypted Cache",
      level: "Standard",
      levelColor: "bg-blue-100 text-blue-800 border-blue-300",
      icon: Database,
      purpose: isKm
        ? "រក្សាទុកទិន្នន័យវត្តមានពេលគ្មានអ៊ីនធឺណិត (Offline Mode) និងផ្ញើឡើងវិញពេលមានសេវា។"
        : isZh
        ? "在建筑工地或地下室无网络时，将打卡数据在本地沙盒高强度加密缓存，恢复网络后自动同步。"
        : "Caches encrypted punch records and selfie metadata locally when working in remote or low-connectivity zones, syncing automatically on reconnect.",
      userControl: isKm
        ? "គ្រប់គ្រងដោយសុវត្ថិភាពក្នុងប្រព័ន្ធ Sandbox របស់ទូរស័ព្ទ។"
        : isZh
        ? "由移动操作系统安全沙盒统一隔离保护，其他应用无权读取。"
        : "Strictly isolated within the operating system's protected application sandbox.",
    },
    {
      id: "notifications",
      name: isKm ? "ការជូនដំណឹង (Push Notifications)" : isZh ? "通知推送 (Notifications)" : "Push Notifications",
      iosKey: "UNUserNotificationCenter",
      androidKey: "android.permission.POST_NOTIFICATIONS",
      level: "Optional",
      levelColor: "bg-slate-100 text-slate-800 border-slate-300",
      icon: BellRing,
      purpose: isKm
        ? "ផ្ញើសាររំលឹកម៉ោងវេនការងារ ការអនុម័តច្បាប់ឈប់សម្រាក និងការជូនដំណឹងពីអ្នកគ្រប់គ្រង។"
        : isZh
        ? "用于接收排班轮换提醒、请假审批结果通知以及主管的重要班次调动信息。"
        : "Delivers shift commencement reminders, leave approval notifications, and manager schedule updates.",
      userControl: isKm
        ? "អាចបើក ឬបិទបានតាមចិត្តនៅក្នុងការកំណត់ទូរស័ព្ទ (Settings)។"
        : isZh
        ? "可选权限，可在系统设置中随时开启或关闭。"
        : "Optional permission. Can be toggled on or off at any time in device settings.",
    },
  ];

  return (
    <div className="my-10 rounded-3xl border border-slate-200 bg-linear-to-b from-slate-50 to-white p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <Smartphone size={18} className="text-brand" />
            <h3 className="font-display text-base font-bold text-ink sm:text-lg">
              {isKm
                ? "តារាងសិទ្ធិប្រើប្រាស់លើកម្មវិធីទូរស័ព្ទ (Mobile Permissions Matrix)"
                : isZh
                ? "移动应用权限使用清单与披露矩阵"
                : "Mobile Device Permissions & Runtime Justifications"}
            </h3>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            {isKm
              ? "ការបង្ហាញតម្លាភាពស្របតាមគោលការណ៍ Apple App Store & Google Play"
              : isZh
              ? "符合苹果 App Store 指南 5.1.1 与谷歌 Play 开发者政策规范"
              : "Compliant with Apple App Store Guideline 5.1.1 & Google Play Developer Policies."}
          </p>
        </div>

        {/* Platform Switcher */}
        <div className="flex rounded-xl bg-slate-200/80 p-1 text-xs font-semibold shrink-0">
          <button
            type="button"
            onClick={() => setPlatform("ios")}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 transition-all cursor-pointer ${
              platform === "ios"
                ? "bg-white text-ink shadow-xs"
                : "text-slate-600 hover:text-ink"
            }`}
          >
            <span>Apple iOS (App Store)</span>
          </button>
          <button
            type="button"
            onClick={() => setPlatform("android")}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 transition-all cursor-pointer ${
              platform === "android"
                ? "bg-white text-ink shadow-xs"
                : "text-slate-600 hover:text-ink"
            }`}
          >
            <span>Android (Google Play)</span>
          </button>
        </div>
      </div>

      {/* Permissions List */}
      <div className="mt-6 space-y-4">
        {permissions.map((perm) => {
          const IconComp = perm.icon;
          return (
            <div
              key={perm.id}
              className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs transition-all hover:border-slate-300"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-soft text-brand border border-blue-100">
                    <IconComp size={18} />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-ink">
                      {perm.name}
                    </h4>
                    <code className="font-mono text-[11px] text-slate-500">
                      {platform === "ios" ? perm.iosKey : perm.androidKey}
                    </code>
                  </div>
                </div>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10.5px] font-bold border ${perm.levelColor}`}
                >
                  {perm.level}
                </span>
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-2 text-xs border-t border-slate-100 pt-3">
                <div>
                  <span className="font-semibold text-slate-700 block mb-0.5">
                    {isKm ? "គោលបំណងច្បាស់លាស់៖" : isZh ? "业务使用目的：" : "Operational Purpose:"}
                  </span>
                  <p className="text-slate-600 leading-relaxed">{perm.purpose}</p>
                </div>
                <div>
                  <span className="font-semibold text-slate-700 block mb-0.5">
                    {isKm ? "សិទ្ធិគ្រប់គ្រងរបស់អ្នកប្រើប្រាស់៖" : isZh ? "用户自主控制权：" : "User Control & Revocation:"}
                  </span>
                  <p className="text-slate-600 leading-relaxed">{perm.userControl}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 6. Interactive Account & Data Deletion Guide
// -------------------------------------------------------------
export function AccountDeletionGuide() {
  const [copiedTemplate, setCopiedTemplate] = useState(false);
  const { lang } = useSite();
  const isKm = lang === "km";
  const isZh = lang === "zh";

  const emailTemplate = `Subject: Employee Account & Data Deletion Request - AttendKH

To the Data Protection Officer (AttendKH),

I am writing to formally request the permanent deletion of my mobile attendance account and associated personal data in accordance with the AttendKH Privacy Policy and App Store / Google Play guidelines.

My Account Verification Details:
- Full Legal Name: [Your Full Name]
- Registered Mobile Phone Number: [Your Phone Number]
- Organization / Company Name: [Your Employer Name]
- Staff ID Number (if applicable): [Your Staff ID]
- Reason for Deletion (Optional): [e.g. End of Employment / No longer using app]

I understand that statutory payroll calculation records may be archived by my employer in accordance with Cambodian Labor Law (MoLVT) requirements, while all mobile authentication tokens, biometric selfie images, and device identifiers will be purged from active databases within 30 days.

Thank you,
[Your Name]`;

  const handleCopyTemplate = () => {
    navigator.clipboard.writeText(emailTemplate);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2500);
  };

  return (
    <div className="my-10 rounded-3xl border border-rose-200/90 bg-linear-to-b from-rose-50/40 via-white to-white p-6 sm:p-8 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rose-100 pb-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-100 text-rose-700">
            <Trash2 size={18} />
          </div>
          <div>
            <h3 className="font-display text-base font-bold text-ink sm:text-lg">
              {isKm
                ? "ការណែនាំអំពីការលុបគណនី និងទិន្នន័យផ្ទាល់ខ្លួន"
                : isZh
                ? "员工账户与个人数据注销及硬删除指引"
                : "Self-Service Account & Personal Data Deletion Workflow"}
            </h3>
            <span className="font-mono text-[11px] text-rose-700 font-semibold">
              App Store Guideline 5.1.1(v) & Google Play Data Deletion Policy
            </span>
          </div>
        </div>

        <span className="rounded-full bg-rose-100 px-3 py-1 font-mono text-xs font-bold text-rose-800">
          30-Day SLA Hard Delete
        </span>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-slate-600 max-w-2xl">
        {isKm
          ? "បុគ្គលិក និងស្ថាប័នអាចស្នើសុំលុបគណនី និងទិន្នន័យបានគ្រប់ពេលវេលា។ ខាងក្រោមនេះជាជំហានជាក់ស្តែងដើម្បីអនុវត្តសិទ្ធិរបស់អ្នក៖"
          : isZh
          ? "无论您是企业员工还是管理员，均可随时依据规范申请注销账户。以下为标准化申请流程与邮件模板："
          : "Employees and enterprise administrators have the unconditional right to request account and personal record deletion. Follow the standardized procedure below:"}
      </p>

      {/* 3 Steps */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-brand bg-brand-soft px-2 py-0.5 rounded-md">
              Step 01
            </span>
          </div>
          <h4 className="font-display mt-2 text-xs font-bold text-ink">
            {isKm ? "ផ្ញើសំណើលុបទិន្នន័យ" : isZh ? "提交注销申请" : "Initiate Request"}
          </h4>
          <p className="mt-1 text-[11.5px] leading-relaxed text-slate-500">
            {isKm
              ? "ទាក់ទង HR ក្រុមហ៊ុនរបស់អ្នក ឬផ្ញើអ៊ីមែលដោយផ្ទាល់ទៅកាន់ privacy@attendkh.com"
              : isZh
              ? "联系您所在企业的 HR 管理员，或直接发信至 privacy@attendkh.com。"
              : "Notify your HR department or email our DPO directly at privacy@attendkh.com."}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-brand bg-brand-soft px-2 py-0.5 rounded-md">
              Step 02
            </span>
          </div>
          <h4 className="font-display mt-2 text-xs font-bold text-ink">
            {isKm ? "ផ្ទៀងផ្ទាត់អត្តសញ្ញាណ" : isZh ? "核验身份信息" : "Identity Verification"}
          </h4>
          <p className="mt-1 text-[11.5px] leading-relaxed text-slate-500">
            {isKm
              ? "បញ្ជាក់លេខទូរស័ព្ទចុះឈ្មោះ និង Staff ID ដើម្បីការពារការក្លែងបន្លំ"
              : isZh
              ? "核验注册手机号码与员工工号，确保仅有本人或授权管理员可执行。"
              : "Verify your registered mobile number and employee ID to prevent unauthorized tampering."}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
              Step 03
            </span>
          </div>
          <h4 className="font-display mt-2 text-xs font-bold text-ink">
            {isKm ? "លុបចោលជាស្ថាពរ (Hard Delete)" : isZh ? "30日内永久清除" : "Permanent Hard Erasure"}
          </h4>
          <p className="mt-1 text-[11.5px] leading-relaxed text-slate-500">
            {isKm
              ? "រូបថត Selfie, token, និងទិន្នន័យឧបករណ៍ត្រូវលុបចោលក្នុងរយៈពេល ៣០ថ្ងៃ"
              : isZh
              ? "自拍照片、设备凭证及个人身份哈希在 30 日内从生产数据库永久硬删除。"
              : "Selfie photos, device tokens, and credentials are permanently purged within 30 days."}
          </p>
        </div>
      </div>

      {/* One-Click Template Box */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="font-display text-xs font-bold text-ink flex items-center gap-1.5">
            <Mail size={14} className="text-brand" />
            {isKm ? "គំរូអ៊ីមែលស្នើសុំលុបទិន្នន័យ (ចុចចម្លង)" : isZh ? "一键复制注销申请邮件模板" : "Ready-to-Send Deletion Email Template"}
          </span>
          <button
            type="button"
            onClick={handleCopyTemplate}
            className="flex items-center gap-1.5 rounded-xl bg-brand px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-brand-dark transition-colors cursor-pointer shadow-2xs"
          >
            {copiedTemplate ? (
              <>
                <Check size={13} className="text-emerald-300" />
                <span>{isKm ? "បានចម្លងគំរូ!" : isZh ? "已复制模板!" : "Copied Template!"}</span>
              </>
            ) : (
              <>
                <Copy size={13} />
                <span>{isKm ? "ចម្លងគំរូអ៊ីមែល" : isZh ? "复制邮件模板" : "Copy Email Template"}</span>
              </>
            )}
          </button>
        </div>
        <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-[11px] leading-relaxed text-slate-200 max-h-48 custom-scrollbar">
          {emailTemplate}
        </pre>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 7. Interactive Employee Privacy FAQ (Accordion)
// -------------------------------------------------------------
export function EmployeePrivacyFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { lang } = useSite();
  const isKm = lang === "km";
  const isZh = lang === "zh";

  const faqs = [
    {
      q: isKm
        ? "តើថៅកែ ឬអ្នកគ្រប់គ្រងអាចមើលឃើញទីតាំងរបស់ខ្ញុំនៅថ្ងៃចុងសប្តាហ៍ ឬពេលចេញពីធ្វើការដែរឬទេ?"
        : isZh
        ? "主管或老板能在周末、休息日或下班后追踪我的实时位置吗？"
        : "Can my employer track my location on weekends, days off, or after my shift?",
      a: isKm
        ? "ដាច់ខាតមិនអាចឡើយ! AttendKH មិនមានមុខងារតាមដាន Background ២៤ម៉ោងទេ។ ប្រព័ន្ធសួររកទីតាំង GPS តែនៅវិនាទីដែលអ្នកចុចប៊ូតុងចុះវត្តមាន (Clock In/Out) ដើម្បីពិនិត្យថាតើអ្នកនៅកន្លែងធ្វើការឬអត់។ ពេលចេញពីធ្វើការ Sensor ទីតាំងបិទទាំងស្រុង។"
        : isZh
        ? "绝对不能！AttendKH 坚决杜绝全天候后台常驻追踪。GPS 定位仅在您主动点击「上班打卡/下班打卡」的瞬间触发 1-2 秒，用于核验是否在工作地点。打卡结束或下班后，定位传感器立即完全静默关闭。"
        : "Categorically NO. AttendKH does not have 24/7 background tracking. GPS location is accessed strictly for 1-2 seconds at the exact moment you tap Clock In or Clock Out to verify branch perimeter presence. The sensor turns off completely once the punch is verified.",
    },
    {
      q: isKm
        ? "តើរូបថត Selfie ពេលចុះវត្តមាន ត្រូវបានយកទៅប្រើប្រាស់ក្នុងគោលបំណងអ្វីខ្លះ?"
        : isZh
        ? "打卡时拍摄的前置自拍照片会被如何使用？会被卖给第三方或用于 AI 训练吗？"
        : "What is my clock-in selfie photo used for? Is it ever sold or used for public AI models?",
      a: isKm
        ? "រូបថត Selfie ត្រូវបានប្រើតែមួយគត់ដើម្បីផ្ទៀងផ្ទាត់ថាជាអ្នកផ្ទាល់ និងការពារការចុះវត្តមានជំនួស (Buddy Punching)។ រូបថតត្រូវបានអ៊ិនគ្រីប AES-256 ជាមួយ Watermark ម៉ោង និងទីតាំង។ យើងធានា ១០០% ថាមិនដែលលក់ ឬផ្តល់ទៅក្រុមហ៊ុនផ្សាយពាណិជ្ជកម្ម ឬបណ្តុះបណ្តាល AI ខាងក្រៅឡើយ។"
        : isZh
        ? "自拍照片唯一的作用是向您所在单位的 HR 证明是您本人打卡，杜绝同事代打卡现象。照片均通过 AES-256 高强度加密并附带防伪数字水印。AttendKH 承诺 100% 绝不出售照片，也绝不提供给任何第三方广告商或外部公共人脸识别模型训练。"
        : "The selfie photo is used solely to verify your physical identity at clock-in and prevent proxy buddy punching for your employer. Every photo is stamped with tamper-evident metadata watermarks and encrypted using AES-256. It is strictly confidential and NEVER sold, monetized, or fed into public AI training datasets.",
    },
    {
      q: isKm
        ? "តើទិន្នន័យប្រាក់បៀវត្សរ៍ និងម៉ោងថែម (Overtime) របស់ខ្ញុំត្រូវបានការពារយ៉ាងដូចម្តេច?"
        : isZh
        ? "我的薪资结构、加班倍率和工时考勤数据是如何进行安全防护的？"
        : "How are my salary rates, overtime multipliers, and attendance records protected?",
      a: isKm
        ? "ទិន្នន័យទាំងអស់ត្រូវបានការពារដោយប្រព័ន្ធសុវត្ថិភាពធនាគារ (TLS 1.3 និង AES-256)។ មានតែអ្នកគ្រប់គ្រងជាន់ខ្ពស់ និងផ្នែក HR ដែលមានការអនុញ្ញាតច្បាស់លាស់ទើបអាចមើលឃើញ។ រាល់ការកែប្រែទិន្នន័យមាន Audit Log ត្រួតពិនិត្យច្បាស់លាស់។"
        : isZh
        ? "所有薪资与考勤计算均在隔离的多租户云数据库中采用银行级加密存储（TLS 1.3 传输加密与 AES-256 静态加密）。系统实行严格的基于角色权限控制（RBAC），仅有您公司授权的 HR 与财务专员可查阅，任何修改均有不可篡改的审计日志。"
        : "All payroll records, overtime multipliers (1.5x, 2.0x), and attendance calculations are protected by multi-tenant database isolation, TLS 1.3 encryption in transit, and AES-256 encryption at rest. Only authorized HR administrators in your organization can access them, with all adjustments tracked in permanent audit logs.",
    },
    {
      q: isKm
        ? "តើមានអ្វីកើតឡើងប្រសិនបើទូរស័ព្ទរបស់ខ្ញុំគ្មានអ៊ីនធឺណិតនៅកន្លែងធ្វើការ?"
        : isZh
        ? "如果我在施工工地或偏远地区手机没有网络，还能正常打卡吗？数据安全吗？"
        : "What happens if I have no cellular or Wi-Fi internet at my workplace?",
      a: isKm
        ? "អ្នកនៅតែអាចចុះវត្តមានបានធម្មតា! កម្មវិធីនឹងរក្សាទុកទិន្នន័យម៉ោង GPS និងរូបថតនៅក្នុងអង្គចងចាំសម្ងាត់ក្នុងទូរស័ព្ទ (Encrypted Sandbox Cache) ហើយវានឹងធ្វើសមកាលកម្មដោយស្វ័យប្រវត្តិនៅពេលទូរស័ព្ទមានអ៊ីនធឺណិតឡើងវិញ។"
        : isZh
        ? "您可以照常打卡！AttendKH 具备离线打卡加密队列功能。打卡时间戳、GPS 坐标与自拍照片会被安全加密缓存在手机沙盒中，待网络恢复后自动与云端校验同步，绝不会丢失考勤记录。"
        : "You can clock in normally! AttendKH features an encrypted offline punch queue. Your punch timestamp, GPS coordinates, and selfie are securely cached in the phone's protected local sandbox and automatically synced to the cloud as soon as connection is restored.",
    },
    {
      q: isKm
        ? "ហេតុអ្វីបានជាកម្មវិធីទាមទារលេខទូរស័ព្ទ ឬអ៊ីមែល ហើយតើខ្ញុំអាចជ្រើសរើសមួយណាបានទេ?"
        : isZh
        ? "为什么应用需要我的手机号或邮箱？我可以任选其一提供吗？"
        : "Why does the app require my Phone Number or Email, and can I choose which one to provide?",
      a: isKm
        ? "AttendKH ទាមទារយ៉ាងហោចណាស់ ១ វិធី (លេខទូរស័ព្ទសម្រាប់ទទួលលេខសម្ងាត់ OTP តាម SMS/Telegram ឬអ៊ីមែលសម្រាប់ Sign-in) ដើម្បីការពារគណនីរបស់អ្នក និងអនុញ្ញាតឱ្យអ្នកមើលឃើញកាលវិភាគ និងស្លឹកបើកប្រាក់ខែ។ ការផ្តល់ទាំងពីរជាជម្រើស ប៉ុន្តែត្រូវមានយ៉ាងតិច ១ សម្រាប់ការផ្ទៀងផ្ទាត់។"
        : isZh
        ? "AttendKH 仅要求提供至少一种联系认证方式（手机号接收短信/Telegram OTP，或企业/个人邮箱接收登录链接），以便安全验证您的身份并发送排班与工资单。您可以任选其一，提供两项为可选。"
        : "AttendKH requires at least ONE contact method (either a mobile Phone Number for SMS/Telegram OTP verification or a verified Email Address for login) to securely authenticate your profile and protect your payroll data. Providing both is optional, but at least one is mandatory for account security.",
    },
    {
      q: isKm
        ? "ហេតុអ្វីបានជា AttendKH រក្សាទុកម៉ូដែលទូរស័ព្ទ (Device Model) របស់ខ្ញុំ?"
        : isZh
        ? "为什么 AttendKH 会记录我的手机设备型号 (Device Model)？"
        : "Why does AttendKH record my phone's Device Model and hardware information?",
      a: isKm
        ? "ប្រព័ន្ធកត់ត្រាម៉ូដែលទូរស័ព្ទ (ឧ. iPhone 15, Galaxy S24) និង token ឧបករណ៍ គឺដើម្បីចាក់សោសុវត្ថិភាពឧបករណ៍តែមួយ (Single-Device Lock) ការពារកុំឱ្យមានការចុះវត្តមានក្លែងបន្លំពីទូរស័ព្ទដទៃ។ វាមិនដែលត្រូវបានប្រើដើម្បីតាមដានកម្មវិធីផ្សេងទៀតលើទូរស័ព្ទរបស់អ្នកឡើយ។"
        : isZh
        ? "系统记录手机设备型号（如 iPhone 15、Galaxy S24）及应用安装 UUID，纯粹用于「单机安全绑定」，防止多设备代打卡与黑灰产模拟舞弊。该信息绝不会用于监控您的手机日常使用或其他软件。"
        : "The mobile app records your device model (e.g. iPhone 15, Galaxy S24) and operating system version strictly for single-device hardware authorization. This prevents multi-phone clock-in fraud and ghost buddy punching, ensuring that punches originate from your registered physical device. It is never used to track your personal phone usage or other apps.",
    },
    {
      q: isKm
        ? "តើខ្ញុំអាចស្នើសុំលុបទិន្នន័យ ឬគណនីរបស់ខ្ញុំដោយរបៀបណា?"
        : isZh
        ? "如果我离职了或不再使用 AttendKH，如何申请彻底删除我的个人数据与账户？"
        : "If I leave the company or stop using AttendKH, how do I request permanent data deletion?",
      a: isKm
        ? "អ្នកអាចទាក់ទង HR ក្រុមហ៊ុនរបស់អ្នក ឬផ្ញើអ៊ីមែលមកកាន់ privacy@attendkh.com។ ទិន្នន័យផ្ទាល់ខ្លួន រូបថត Selfie និង token គណនីនឹងត្រូវបានលុបចេញពីប្រព័ន្ធក្នុងរយៈពេល ៣០ថ្ងៃ ស្របតាមគោលការណ៍ App Store និង Google Play។"
        : isZh
        ? "您可以通过企业 HR 申请，或直接发送邮件至 privacy@attendkh.com。您的个人账户认证凭证、自拍照片及设备标识将在 30 个日历日内从生产服务器执行物理硬删除，符合苹果与谷歌商店合规规范。"
        : "You can request deletion through your HR manager or by emailing our Data Protection Officer at privacy@attendkh.com. Personal authentication tokens, selfie photos, and device IDs will be permanently purged within 30 days under App Store and Google Play standards.",
    },
  ];

  return (
    <div className="my-10 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
      <div className="flex items-center gap-2 mb-2">
        <HelpCircle size={18} className="text-brand" />
        <h3 className="font-display text-base font-bold text-ink sm:text-lg">
          {isKm
            ? "សំណួរញឹកញាប់អំពីឯកជនភាពសម្រាប់បុគ្គលិក"
            : isZh
            ? "员工隐私常见疑问与解答 (FAQ)"
            : "Frontline Employee Privacy FAQ"}
        </h3>
      </div>
      <p className="text-xs text-slate-500 mb-6">
        {isKm
          ? "ចម្លើយច្បាស់លាស់ និងត្រង់ទៅត្រង់មកអំពីសុវត្ថិភាព និងការការពារសិទ្ធិរបស់អ្នក។"
          : isZh
          ? "直面员工最关心的核心隐私问题，提供清晰、透明的技术与合规承诺。"
          : "Direct, transparent answers addressing the most common workforce privacy and data protection questions."}
      </p>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex w-full items-center justify-between p-4 text-left text-xs sm:text-sm font-bold text-ink hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <span className="flex items-start gap-2.5 pr-3">
                  <span className="font-mono text-xs text-brand shrink-0 mt-0.5">
                    Q{idx + 1}.
                  </span>
                  <span>{faq.q}</span>
                </span>
                <ChevronDown
                  size={16}
                  className={`text-slate-400 shrink-0 transition-transform ${
                    isOpen ? "rotate-180 text-brand" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="border-t border-slate-100 bg-slate-50/70 p-4 sm:p-5 text-xs sm:text-[13px] leading-relaxed text-slate-600">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 8. Visual Diagrams & Architecture Showcase
// -------------------------------------------------------------
export function VisualPrivacyArchitectureShowcase() {
  const { lang } = useSite();
  const isKm = lang === "km";
  const isZh = lang === "zh";

  return (
    <div className="my-12 space-y-8">
      {/* Diagram 1: GPS Geofence vs Continuous Tracking */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="relative aspect-16/9 w-full bg-slate-900 overflow-hidden">
          <Image
            src="/images/privacy/gps-geofence-privacy.jpg"
            alt="AttendKH Point-in-Time GPS Geofence Architecture vs Zero Background Tracking"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10.5px] font-bold text-emerald-800 border border-emerald-300">
              <MapPin size={11} />
              Point-in-Time GPS Protocol
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              Figure 1.0
            </span>
          </div>
          <h4 className="font-display mt-2 text-sm font-bold text-ink">
            {isKm
              ? "ស្ថាបត្យកម្ម GPS ផ្ទៀងផ្ទាត់រង្វង់សាខាបន្ទាន់ (Zero Background Tracking)"
              : isZh
              ? "AttendKH 瞬时地理围栏打卡与零后台追踪架构图"
              : "AttendKH Point-in-Time Geofence Radius Verification Architecture"}
          </h4>
          <p className="mt-1 text-xs leading-relaxed text-slate-600">
            {isKm
              ? "ទីតាំង GPS ត្រូវបានដំណើរការតែក្នុងរយៈពេល ១-២ វិនាទីនៅពេលចុះវត្តមាន ដើម្បីផ្ទៀងផ្ទាត់ថាតើស្ថិតក្នុងរង្វង់សាខា (Geofence) ឬអត់។ បន្ទាប់ពីនោះ Sensor ត្រូវបិទភ្លាមៗ។"
              : isZh
              ? "设备仅在员工触发打卡事件的瞬间（1-2秒）调用高精度 GPS 比对企业设定的分支机构地理围栏，核验完成立即释放硬件传感器，杜绝任何全天候轨迹监控。"
              : "Location coordinates are queried exclusively for 1-2 seconds during the punch event to mathematically evaluate the employer's geofence perimeter. The location sensor immediately disengages upon verification."}
          </p>
        </div>
      </div>

      {/* 2-Column Grid for Encryption Vault & Mobile App Standards */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Diagram 2: Security & Encryption Vault */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xs">
          <div className="relative aspect-16/9 w-full bg-slate-900">
            <Image
              src="/images/privacy/security-encryption-vault.jpg"
              alt="Multi-Layer Encryption: TLS 1.3 in Transit, AES-256 at Rest, Multi-Tenant Cloud Vault"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
          <div className="p-5 bg-slate-50 border-t border-slate-200">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-indigo-100 px-2.5 py-0.5 text-[10.5px] font-bold text-indigo-800 border border-indigo-300">
                <Lock size={11} />
                Multi-Layer Security
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                Figure 2.0
              </span>
            </div>
            <h4 className="font-display mt-2 text-xs sm:text-sm font-bold text-ink">
              {isKm ? "ប្រព័ន្ធសុវត្ថិភាព និងអ៊ិនគ្រីបទិន្នន័យពហុស្រទាប់" : isZh ? "端到端与静态多层加密存储体系" : "Multi-Layer Encryption & Data Vault Architecture"}
            </h4>
            <p className="mt-1 text-[11.5px] leading-relaxed text-slate-600">
              {isKm
                ? "ការផ្ទេរទិន្នន័យតាម TLS 1.3 និងការផ្ទុកទិន្នន័យរូបថត/ប្រាក់បៀវត្សរ៍តាម AES-256 ជាមួយការបែងចែកទិន្នន័យដាច់ដោយឡែក (Multi-Tenant Isolation)។"
                : isZh
                ? "传输采用 TLS 1.3 现代加密套件，考勤照片与薪酬数据采用 AES-256 静态高强度加密，多租户严格逻辑隔离。"
                : "TLS 1.3 in-transit protocol coupled with AES-256 storage-level encryption and strict multi-tenant database partitioning."}
            </p>
          </div>
        </div>

        {/* Diagram 3: Mobile App Standards */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xs">
          <div className="relative aspect-16/9 w-full bg-slate-900">
            <Image
              src="/images/privacy/mobile-app-privacy-standards.jpg"
              alt="AttendKH iOS & Android Mobile Attendance App Privacy Standards"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
          <div className="p-5 bg-slate-50 border-t border-slate-200">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-0.5 text-[10.5px] font-bold text-blue-800 border border-blue-300">
                <Smartphone size={11} />
                App Store Compliance
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                Figure 3.0
              </span>
            </div>
            <h4 className="font-display mt-2 text-xs sm:text-sm font-bold text-ink">
              {isKm ? "ស្ដង់ដារកម្មវិធីទូរស័ព្ទ iOS & Android" : isZh ? "iOS 与 Android 移动应用合规体系" : "iOS & Android Mobile Attendance Compliance"}
            </h4>
            <p className="mt-1 text-[11.5px] leading-relaxed text-slate-600">
              {isKm
                ? "ផ្ទៀងផ្ទាត់ Selfie ជាមួយ Watermark សម្ងាត់ និងការជូនដំណឹងតម្លាភាពពេញលេញចំពោះរាល់សិទ្ធិប្រើប្រាស់។"
                : isZh
                ? "人脸自拍打卡具备数字防伪时间水印，完全满足苹果 App Store 5.1 与谷歌 Play 数据安全标准。"
                : "Cryptographically watermarked selfie punches meeting Apple App Store 5.1 & Google Play transparent data safety benchmarks."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
