/**
 * AttendKH Website Content & Data Provider
 * Clean, lightweight, self-contained content layer for the frontend website.
 */

import { extendedBlogPosts } from "./blog-data-extended";

export interface PricingPlan {
  id: string;
  slug: string;
  name: string;
  description: string;
  price_monthly: number;
  price_annual: number;
  annual_factor: number;
  limits_text: string;
  features: string[];
  is_popular: number;
  badge_text: string | null;
  cta_text: string;
  cta_url: string;
  display_order: number;
  is_active: number;
  created_at: string;
  updated_at: string;
}

export interface BlogPostFAQ {
  question: string;
  question_km?: string;
  question_zh?: string;
  answer: string;
  answer_km?: string;
  answer_zh?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  title_km?: string;
  title_zh?: string;
  excerpt: string;
  excerpt_km?: string;
  excerpt_zh?: string;
  key_takeaways?: string[];
  key_takeaways_km?: string[];
  key_takeaways_zh?: string[];
  content: string;
  content_km?: string;
  content_zh?: string;
  cover_image: string;
  author_name: string;
  author_role: string;
  author_role_km?: string;
  author_role_zh?: string;
  author_avatar: string;
  category: string;
  category_km?: string;
  category_zh?: string;
  tags: string[];
  tags_km?: string[];
  tags_zh?: string[];
  status: "draft" | "published" | "archived";
  published_at: string | null;
  scheduled_at: string | null;
  seo_title?: string;
  seo_description?: string;
  og_image?: string;
  view_count: number;
  faqs?: BlogPostFAQ[];
  created_at: string;
  updated_at: string;
}

export interface LegalDocument {
  id: string;
  slug: string;
  title: string;
  title_km?: string;
  title_zh?: string;
  version: string;
  content: string;
  content_km?: string;
  content_zh?: string;
  is_active: number;
  changelog: string;
  created_by: string;
  created_at: string;
}

export interface WebsiteSettings {
  id: string;
  site_title: string;
  site_description: string;
  announcement_enabled: number;
  announcement_text_en: string;
  announcement_text_km: string;
  announcement_link: string;
  announcement_color: "brand" | "emerald" | "amber" | "dark";
  contact_email: string;
  support_phone: string;
  telegram_url: string;
  maintenance_mode: number;
  analytics_enabled: number;
  currency_rate_khr: number;
  updated_at: string;
}

// -------------------------------------------------------------
// STATIC DATA STORE
// -------------------------------------------------------------

export const websiteSettings: WebsiteSettings = {
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
  contact_email: "hello@MPG_by_ongphaly.com",
  support_phone: "+855 23 999 888",
  telegram_url: "https://t.me/MPG_by_ongphaly",
  maintenance_mode: 0,
  analytics_enabled: 1,
  currency_rate_khr: 4100,
  updated_at: "2026-08-28T08:00:00Z",
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "plan-all-in-one",
    slug: "all-in-one",
    name: "All-in-One Plan",
    description: "Complete attendance & automated Cambodian payroll engine for just $1 per active user per month. All features unlocked with zero tier restrictions.",
    price_monthly: 1.0,
    price_annual: 0.83,
    annual_factor: 0.8333,
    limits_text: "All features included • Unlimited branches",
    features: [
      "50–200m GPS geofencing & branch radius check",
      "Live selfie snapshot & anti-buddy punching",
      "Full Cambodian payroll engine (Dual USD & KHR)",
      "Labor Law overtime multipliers (1.5x regular, 2.0x holiday)",
      "Late deductions, grace periods & shift rostering",
      "Leave requests, balance tracking & approval workflows",
      "QR door Kiosk mode for shared tablet check-in",
      "Automated Telegram bot alerts & bilingual PDF payslips",
      "NSSF export-ready compliance reports",
      "Unlimited branch outlets with zero extra fees",
      "Mobile app for iOS & Android + Web Admin console",
      "Local Phnom Penh support via Telegram & phone",
    ],
    is_popular: 1,
    badge_text: "All Features Included",
    cta_text: "Start free trial",
    cta_url: "/contact",
    display_order: 1,
    is_active: 1,
    created_at: "2026-08-01T00:00:00Z",
    updated_at: "2026-08-01T00:00:00Z",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "post-gps-geofence",
    slug: "how-gps-geofencing-and-selfie-checks-stop-buddy-punching",
    title: "How GPS Geofencing and Selfie Verification Stop Buddy Punching in Cambodia",
    title_km: "របៀបដែលប្រព័ន្ធកំណត់ទីតាំង GPS (Geofencing) និងការស្កេនមុខ Selfie ទប់ស្កាត់ការចុះវត្តមានជំនួសគ្នានៅកម្ពុជា",
    title_zh: "GPS地理围栏与自拍核验如何彻底杜绝柬埔寨企业员工“代打卡”现象",
    excerpt:
      "Traditional fingerprint scanners and paper punch cards cost Cambodian retailers millions in unworked hours. Discover how smartphone geofencing modernizes staff verification.",
    excerpt_km:
      "ម៉ាស៊ីនស្កេនមេដៃបែបបុរាណ និងសៀវភៅចុះហត្ថលេខាបណ្តាលឱ្យអាជីវកម្មលក់រាយនៅកម្ពុជាខាតបង់ប្រាក់យ៉ាងច្រើនជារៀងរាល់ខែ។ ស្វែងយល់ពីរបៀបដែលបច្ចេកវិទ្យាកំណត់ទីតាំង GPS តាមទូរស័ព្ទជួយធ្វើទំនើបកម្មការត្រួតពិនិត្យវត្តមានបុគ្គលិក។",
    excerpt_zh:
      "传统指纹打卡机和纸质签到表每年给柬埔寨零售企业造成数以万计的工时损失。了解智能手机地理围栏如何重塑现代员工考勤核验标准。",
    content: `## 1. The Hidden Cost of Attendance Fraud in Cambodian Retail

For Cambodian retail chains, coffee shops, and hospitality brands across Phnom Penh, Siem Reap, and Sihanoukville, traditional attendance methods create persistent operational vulnerabilities that directly erode profit margins:

1. **Hardware Scanners Fail Frequently**: Fingerprint readers break down when staff handle moisture, beverage preparation, or kitchen oils, creating bottleneck queues during shift handovers.
2. **Card Swiping Enables Buddy Punching**: It is common for staff stuck in Phnom Penh traffic to hand their RFID card or Telegram login to a coworker to clock them in.
3. **Paper Sign-in Sheets Cause Administrative Chaos**: At the end of every month, HR managers spend **3 to 5 full business days** manually transcribing paper logs into Excel spreadsheets.

> Traditional Manual Timesheet Reconciliation: ~40 Hours / Month
> AttendKH Verified GPS Clock-in: Real-Time Instant Cloud Sync (0s Delay)

> *"Buddy punching stopped on our very first week of rollout across our 6 cafe outlets in Toul Kork and BKK1. The ROI was immediate."* — **Dara Chan**, Operations Director

---

## 2. How GPS Geofencing Works with AttendKH

Instead of investing thousands in fragile hardware clocks, modern multi-branch operators deploy the [AttendKH GPS Attendance Tracking System](/attendance) on employee smartphones:

![GPS Geofencing and Live Selfie Verification in Phnom Penh](/blog/gps-geofence.jpg)
*Figure 1: Tamper-proof 50m–300m GPS radius perimeter with front-camera live selfie verification.*

- **Configurable Radius (50m to 300m)**: Set tailored geofence boundaries for boutique stores in BKK1 or sprawling warehouse compounds in Phnom Penh's Special Economic Zone (PPSEZ).
- **Anti-Spoofing & Mock Location Detection**: The mobile client actively identifies and blocks fake GPS spoofing software and developer mode overrides on Android and iOS.
- **Biometric Selfie Verification**: Staff capture a live in-app photo upon clocking in. Cryptographic timestamps and location metadata are bound directly to the punch record.
- **Offline Attendance Resilience**: If a branch loses internet connectivity, clock-ins are securely encrypted locally and automatically synced once connection restores.

---

## 3. Hardware Scanners vs. AttendKH Mobile Geofencing

| Operational Feature | Biometric Scanners | Paper Logbooks | AttendKH GPS + Selfie |
| :--- | :--- | :--- | :--- |
| **Buddy Punching Prevention** | Medium (sensor bypass) | None (unverified) | **100% Guaranteed** |
| **Hardware Installation Cost** | **$250 – $600 / unit** | $0 | **$0 (BYOD Mobile App)** |
| **Multi-Branch Visibility** | Manual USB Flash Export | Monthly Physical Pickup | **[Real-Time Central Dashboard](/multi-branch)** |
| **Statutory Payroll Integration** | Disconnected manual Excel | Manual entry | **[One-Click MoLVT Payroll](/payroll)** |
| **Setup Time** | 2 – 3 Weeks installation | Immediate (error-prone) | **5 Minutes via Telegram Bot** |

---

## 4. Key Implementation Best Practices for Multi-Branch Teams

When transitioning your team to mobile GPS attendance, consider these proven steps:

1. **Accurate Radius Calibration**: Walk the perimeter of your store or restaurant with a mobile phone to ensure outdoor patios and parking areas fall within the geofence.
2. **Shift Grace Windows**: Configure a fair **10-to-15 minute grace period** before late deduction algorithms trigger automatically.
3. **Automated Overtime Sync**: Seamlessly sync approved attendance hours into our [Cambodian Labor Law Overtime and NSSF Engine](/blog/cambodian-labor-law-overtime-payroll-and-nssf-guide).
4. **Manager Telegram Alerts**: Enable instant push alerts on Telegram whenever a frontline worker arrives late or misses a shift.

Ready to eliminate buddy punching across your branches? Explore our [transparent $1/employee/month pricing](/pricing), [download the mobile app for iOS and Android](/downloads), or [book a personalized live demo with our Phnom Penh team](/contact) today.`,
    content_km: `## ១. ផលប៉ះពាល់ និងការខាតបង់ពីការក្លែងបន្លំវត្តមានក្នុងអាជីវកម្ម

សម្រាប់បណ្តាញហាងលក់រាយ ហាងកាហ្វេ និងសណ្ឋាគារនៅរាជធានីភ្នំពេញ សៀមរាប និងព្រះសីហនុ ប្រព័ន្ធកត់ត្រាវត្តមានបែបបុរាណតែងតែបង្កជាចន្លោះប្រហោងប្រតិបត្តិការដែលធ្វើឱ្យបាត់បង់ប្រាក់ចំណេញជាប្រចាំ៖

១. **ម៉ាស៊ីនស្កេនមេដៃឧស្សាហ៍គាំង ឬខូច**៖ ឧបករណ៍ស្កេនស្នាមម្រាមដៃតែងតែពិបាកស្គាល់នៅពេលដៃបុគ្គលិកសើម ប្រឡាក់ប្រេងឆា ឬសារធាតុគីមីសម្អាត ដែលធ្វើឱ្យកកស្ទះជួរនៅពេលផ្លាស់ប្តូរវេនការងារ។
២. **ការចុះវត្តមានជំនួសគ្នា (Buddy Punching)**៖ ជារឿយៗ បុគ្គលិកតែងតែផ្ញើកាត RFID ឬគណនី Telegram ទៅឱ្យមិត្តរួមការងារដើម្បីជួយចុះឈ្មោះចូលធ្វើការជំនួស ខណៈពេលដែលខ្លួនកំពុងស្ទះចរាចរណ៍នៅភ្នំពេញ។
៣. **សៀវភៅចុះហត្ថលេខាបង្កការលំបាកដល់ផ្នែករដ្ឋបាល**៖ នៅរៀងរាល់ដំណាច់ខែ ប្រធានផ្នែកធនធានមនុស្ស (HR) ត្រូវចំណាយពេលពី **៣ ទៅ ៥ ថ្ងៃពេញ** ដើម្បីចម្លងទិន្នន័យពីក្រដាសចូលក្នុងតារាង Excel ដោយដៃ។

> ការផ្ទៀងផ្ទាត់ទិន្នន័យដោយដៃបែបចាស់៖ ~៤០ ម៉ោង / ខែ
> ការចុះវត្តមានតាម GPS របស់ AttendKH៖ សមកាលកម្ម Cloud ភ្លាមៗជាក់ស្តែង (ពុំមានការពន្យារពេល)

> *"ការចុះវត្តមានជំនួសគ្នាបានបញ្ចប់ទាំងស្រុងតាំងពីសប្តាហ៍ដំបូងនៃការដាក់ឱ្យប្រើប្រាស់នៅទូទាំង ៦ សាខាហាងកាហ្វេរបស់យើងនៅទួលគោក និងបឹងកេងកង ១។ ប្រសិទ្ធភាពពិតជាឃើញភ្លាមៗ។"* — **Dara Chan**, ប្រធានផ្នែកប្រតិបត្តិការ

---

## ២. របៀបដែលប្រព័ន្ធកំណត់រង្វង់ទីតាំង GPS (Geofencing) ដំណើរការលើ AttendKH

ជំនួសឱ្យការចំណាយប្រាក់រាប់ពាន់ដុល្លារលើម៉ាស៊ីនស្កេនមេដៃដែលងាយខូច អាជីវកម្មសម័យទំនើបជ្រើសរើស [ប្រព័ន្ធកត់ត្រាវត្តមាន GPS របស់ AttendKH](/attendance) តាមទូរស័ព្ទដៃបុគ្គលិកផ្ទាល់៖

![ប្រព័ន្ធកំណត់ទីតាំង GPS និងការថតរូប Selfie ផ្ទាល់នៅភ្នំពេញ](/blog/gps-geofence.jpg)
*រូបភាពទី ១៖ រង្វង់ទីតាំង GPS សុវត្ថិភាព ៥០ម–៣០០ម ជាមួយការថតរូប Selfie បញ្ជាក់ពីកាមេរ៉ាមុខផ្ទាល់*

- **កំណត់កាំរង្វង់តាមតម្រូវការ (៥០ម ដល់ ៣០០ម)**៖ កំណត់ព្រំប្រទល់សមស្របសម្រាប់ហាងលក់ទំនិញនៅបឹងកេងកង ១ (BKK1) ឬបរិវេណឃ្លាំងស្តុកទំនិញធំៗក្នុងតំបន់សេដ្ឋកិច្ចពិសេសភ្នំពេញ (PPSEZ)។
- **ប្រព័ន្ធការពារការបន្លំទីតាំង (Anti-GPS Spoofing)**៖ កម្មវិធីទូរស័ព្ទអាចស្វែងរក និងទប់ស្កាត់កម្មវិធីបន្លំទីតាំង (Mock Location) និងការកែប្រែ Developer Mode ទាំងលើ Android និង iOS។
- **ការថតរូប Selfie ផ្ទៀងផ្ទាត់ភ្លាមៗ**៖ បុគ្គលិកត្រូវថតរូប Selfie ផ្ទាល់តាមរយៈ App ពេលចុះវត្តមាន។ ត្រាពេលវេលា និងកូអរដោនេទីតាំងត្រូវបានភ្ជាប់ដោយផ្ទាល់ទៅនឹងកំណត់ត្រាវត្តមាន។
- **ដំណើរការបានទោះគ្មានអ៊ីនធឺណិត (Offline Mode)**៖ ប្រសិនបើសាខាដាច់អ៊ីនធឺណិត ការចុះវត្តមានត្រូវបានអ៊ិនគ្រីបទុកក្នុងទូរស័ព្ទដោយសុវត្ថិភាព និងធ្វើសមកាលកម្មដោយស្វ័យប្រវត្តិភ្លាមៗពេលមានអ៊ីនធឺណិតឡើងវិញ។

---

## ៣. តារាងប្រៀបធៀបរវាងម៉ាស៊ីនស្កេនមេដៃ និង AttendKH

| មុខងារសំខាន់ៗ | ម៉ាស៊ីនស្កេនមេដៃ | សៀវភៅកត់ត្រា | AttendKH GPS + Selfie |
| :--- | :--- | :--- | :--- |
| **ទប់ស្កាត់ការចុះជំនួសគ្នា** | កម្រិតមធ្យម | គ្មាន | **ធានាបាន ១០០%** |
| **ថ្លៃដំឡើងឧបករណ៍ Hardware** | **$២៥០ – $៦០០ / គ្រឿង** | $០ | **$០ (ប្រើទូរស័ព្ទបុគ្គលិកផ្ទាល់)** |
| **ការមើលឃើញគ្រប់សាខា** | ត្រូវដោត Flash ដកទិន្នន័យ | ប្រមូលឯកសាររាល់ខែ | **[ផ្ទាំងគ្រប់គ្រងពហុសាខា Real-Time](/multi-branch)** |
| **ការតភ្ជាប់ប្រព័ន្ធបើកប្រាក់ខែ** | ត្រូវចម្លងចូល Excel ដោយដៃ | កត់ត្រាដោយដៃ | **[ប្រព័ន្ធគណនាប្រាក់ខែ MoLVT ស្វ័យប្រវត្តិ](/payroll)** |
| **រយៈពេលដំឡើង** | ២ – ៣ សប្តាហ៍ | ភ្លាមៗ (តែងខុសទិន្នន័យ) | **៥ នាទីតាម Telegram Bot** |

---

## ៤. គន្លឹះសំខាន់ៗក្នុងការអនុវត្តជាក់ស្តែងសម្រាប់អាជីវកម្មពហុសាខា

នៅពេលផ្លាស់ប្តូរក្រុមការងាររបស់អ្នកមកប្រើប្រព័ន្ធទូរស័ព្ទ GPS សូមអនុវត្តតាមជំហានទាំងនេះ៖

១. **វាស់កាំរង្វង់ឱ្យបានច្បាស់លាស់**៖ ដើរពិនិត្យជុំវិញបរិវេណហាង ឬភោជនីយដ្ឋានរបស់អ្នកជាមួយទូរស័ព្ទ ដើម្បីធានាថាកន្លែងអង្គុយខាងក្រៅ និងចំណតយានយន្តស្ថិតក្នុងរង្វង់ Geofence។
២. **កំណត់រយៈពេលអនុគ្រោះពេលយឺត**៖ កំណត់រយៈពេលអនុគ្រោះពី **១០ ទៅ ១៥ នាទីសមរម្យ** មុនពេលប្រព័ន្ធចាប់ផ្តើមកាត់ប្រាក់យឺតដោយស្វ័យប្រវត្តិ។
៣. **សមកាលកម្មជាមួយច្បាប់ការងារ**៖ ភ្ជាប់ទិន្នន័យវត្តមានដោយស្វ័យប្រវត្តិជាមួយ [មគ្គុទ្ទេសក៍គណនាប្រាក់ថែមម៉ោង និង ប.ស.ស.](/blog/cambodian-labor-law-overtime-payroll-and-nssf-guide)។
៤. **ការជូនដំណឹងតាម Telegram**៖ បើកមុខងារជូនដំណឹងភ្លាមៗតាម Telegram នៅពេលបុគ្គលិកមកធ្វើការយឺត ឬអវត្តមានពីវេនការងារ។

ស្វែងយល់បន្ថែមអំពី [តម្លៃសមរម្យត្រឹមតែ $១/នាក់/ខែ](/pricing) [ទាញយកកម្មវិធីសម្រាប់ iOS និង Android](/downloads) ឬ [កក់ការបង្ហាញសាកល្បងដោយឥតគិតថ្លៃ](/contact) ជាមួយក្រុមការងារយើងនៅរាជធានីភ្នំពេញ។`,
    content_zh: `## 1. 柬埔寨零售与餐饮行业考勤欺诈的隐形成本

对于金边、暹粒与西哈努克港的连锁零售、咖啡馆及酒店餐饮企业而言，传统的考勤打卡方式存在长期的运营漏洞，直接侵蚀企业净利润：

1. **传统光学指纹硬件故障频发**：在餐饮后厨、零售柜台高峰期，员工手指湿润或沾染油污常导致指纹仪无法识别，换班时引发排队拥堵。
2. **代刷卡与代打卡屡禁不止**：金边早晚高峰严重堵车时，员工将 RFID 工牌或 Telegram 账号交由同事代打卡已成公开秘密。
3. **纸质签到表引发月末核算混乱**：每月月末，HR 需耗费 **3 至 5 个整工作日**将纸质表格录入 Excel，极易产生核算争议。

> 传统人工月底对账耗时：每月约 40 小时
> AttendKH 智能 GPS 打卡：云端毫秒级实时自动同步（0秒延误）

> *“在金边堆谷区（Toul Kork）和万景岗 1 区（BKK1）的 6 家咖啡门店推行 AttendKH 的第一周，代打卡现象就彻底归零，管理投资回报立竿见影。”* —— **Dara Chan**, 运营总监

---

## 2. AttendKH GPS 地理围栏核心运作机制

现代化连锁企业无需再为各分店采购昂贵且易损的考勤机，只需全面部署 [AttendKH 移动端 GPS 考勤系统](/attendance)：

![金边实地 GPS 地理围栏与移动自拍打卡](/blog/gps-geofence.jpg)
*图 1：50米–300米精准 GPS 电子围栏配合前置摄像头防伪自拍打卡全流程。*

- **50米至300米灵活半径配置**：为 BKK1 的街边精品店设置精细化小半径，或为金边经济特区（PPSEZ）的仓储物流中心设置广阔围栏。
- **反模拟定位与作弊拦截**：移动端底层算法自动拦截 Android / iOS 上的虚拟定位软件（Mock GPS）与开发者模式篡改。
- **真人自拍活体防伪核验**：打卡瞬间调用摄像头拍摄真实自拍，与加密时间戳和经纬度元数据深度绑定，杜绝冒名顶替。
- **离线断网智能打卡队列**：门市遭遇断网或弱信号时，数据在本地高强度加密暂存，网络恢复后瞬间静默同步至云端。

---

## 3. 传统硬件打卡机 vs. AttendKH 移动考勤全面对比

| 考勤核验维度 | 传统光学指纹/面部打卡机 | 传统纸质签到册 | AttendKH GPS 围栏 + 实时自拍 |
| :--- | :--- | :--- | :--- |
| **杜绝员工代打卡** | 中等（存在指纹膜漏洞） | 无法防范 | **100% 绝对保障** |
| **硬件采购与布线成本** | **每台 $250 – $600** | $0 | **$0（员工自带手机打卡 BYOD）** |
| **多门店跨区域监管** | 需插拔 U 盘逐店导出 | 每月寄送纸质底单 | **[总部云端实时动态看板](/multi-branch)** |
| **本地法定发薪深度打通** | 割裂脱节，需手工算薪 | 手工核对 | **[一键直通柬埔寨劳工法薪资引擎](/payroll)** |
| **系统部署上线周期** | 2 – 3 周采购安装 | 即刻可用但极易出错 | **通过 Telegram Bot 5分钟极速上线** |

---

## 4. 连锁门店落地部署实操建议

在将团队从传统打卡机迁移至 AttendKH 移动定位考勤时，建议遵循以下标准步骤：

1. **精准实地校准围栏半径**：管理人员手持手机在门店、露天后院及员工停车区绕行一圈，确保合法工作区域均落在围栏覆盖范围内。
2. **设置合理人性化的打卡宽限期**：配置 **10 至 15 分钟**的合理迟到豁免时间，超出后再自动启动按分钟扣款算法。
3. **无缝联动劳工部法定合规系统**：将出勤数据一键流转至 [柬埔寨劳工法加班倍率与社保指南](/blog/cambodian-labor-law-overtime-payroll-and-nssf-guide) 自动核算加班金。
4. **开启 Telegram 实时管理预警**：开启 Telegram 机器人实时推送，当员工迟到或缺勤时，店长和 HR 手机会第一时间收到提醒。

立即告别代打卡与工时漏洞！了解我们的 [每位员工每月仅 $1 的透明定价](/pricing)、[下载 iOS 与 Android 移动应用](/downloads)，或联系我们金边本土团队 [预约 1 对 1 在线演示](/contact)。`,
    cover_image: "/blog/gps-geofence.jpg",
    author_name: "Chhunsour Seng",
    author_role: "Product Builder",
    author_role_km: "អ្នកបង្កើតផលិតផល",
    author_role_zh: "产品架构师",
    author_avatar: "/avatars/chhunsour.png",
    category: "Attendance",
    category_km: "វត្តមាន",
    category_zh: "考勤管理",
    tags: ["Attendance", "GPS Geofencing", "Retail", "Biometrics", "Cambodia"],
    tags_km: ["វត្តមាន", "កំណត់ទីតាំង GPS", "អាជីវកម្មលក់រាយ", "ស្កេនមុខ", "កម្ពុជា"],
    tags_zh: ["考勤管理", "GPS地理围栏", "零售业", "生物识别", "柬埔寨"],
    status: "published",
    published_at: "2026-08-28T08:00:00Z",
    scheduled_at: null,
    seo_title: "How GPS Geofencing Stops Buddy Punching in Cambodian Retail — AttendKH",
    seo_description:
      "Learn how tamper-proof GPS radius geofencing and live selfie verification eliminate ghost clock-ins and time theft across Cambodian retail and F&B businesses.",
    og_image: "/blog/gps-geofence.jpg",
    view_count: 1640,
    created_at: "2026-08-28T08:00:00Z",
    updated_at: "2026-08-28T08:00:00Z",
  },
  {
    id: "post-payroll-law",
    slug: "cambodian-labor-law-overtime-payroll-and-nssf-guide",
    title: "Cambodian Labor Law: Calculating Overtime Multipliers, Grace Periods & NSSF Contributions",
    title_km: "ច្បាប់ស្តីពីការងារនៅកម្ពុជា៖ របៀបគណនាការងារថែមម៉ោង (OT) រយៈពេលអនុគ្រោះ និងការបង់វិភាគទាន ប.ស.ស.",
    title_zh: "柬埔寨劳工法薪酬指南：法定加班倍率核算、迟到宽限期设置与社保 (NSSF) 缴纳详解",
    excerpt:
      "A practical handbook for HR managers and business owners calculating overtime (1.5x vs 2.0x), per-minute late penalties, and bilingual payslips in USD & KHR.",
    excerpt_km:
      "សៀវភៅណែនាំជាក់ស្តែងសម្រាប់អ្នកគ្រប់គ្រងធនធានមនុស្ស (HR) និងម្ចាស់អាជីវកម្ម ក្នុងការគណនាប្រាក់ថែមម៉ោង (1.5x និង 2.0x) ការកាត់ប្រាក់យឺតតាមនាទី និងប័ណ្ណបើកប្រាក់ខែជាពីរភាសា (USD និង KHR)។",
    excerpt_zh:
      "企业 HR 与管理者的实操指南：详解法定加班倍率（平日1.5倍 vs 假日2.0倍）、按分钟扣除迟到规则以及美元与瑞尔双币工资单生成。",
    content: `## 1. Navigating Cambodian Payroll Compliance in 2026

Under regulatory guidelines established by Cambodia's **Ministry of Labour and Vocational Training (MoLVT)** and the **General Department of Taxation (GDT)**, calculating payroll requires strict adherence to statutory formulas. Failing to comply can expose business owners to MoLVT labor inspection fines, retroactive tax assessments, and costly union arbitration disputes.

Deploying an automated system like the [AttendKH Automated Cambodian Payroll Engine](/payroll) ensures your calculations adhere directly to Cambodian statutory standards.

![Cambodian Labor Law Overtime and Payroll Calculation Rules](/blog/payroll-law.jpg)
*Figure 1: Statutory payroll calculation matrix incorporating MoLVT overtime multipliers, NSSF statutory caps, and dual-currency payslips.*

---

## 2. Determining the Statutory Hourly Wage Rate

Standard full-time employment under *Article 139 of the Cambodian Labour Law* is benchmarked against either fixed contractual working days (typically **26 days/month**) or actual calendar working days:

> 📐 **Hourly Base Rate = Monthly Gross Base Salary / (Contractual Working Days × 8 Hours)**

*Example*: For an administrative staff earning **$300.00 / month** on a standard 26-day contract:
> 📐 **Base Hourly Rate = $300.00 / (26 × 8) = $1.442 / hour**

---

## 3. Statutory Overtime Multipliers (MoLVT Standards)

Cambodian law strictly differentiates overtime rates based on shift timing and public holiday schedules:

- **Regular Working Days (Day Shift)**: Overtime performed beyond standard 8-hour shift limits is compensated at **1.5×** the hourly base rate. Note that *Article 139* caps daily overtime at a **maximum of 2 hours/day**.
- **Night Shifts (22:00 – 06:00)**: Overtime performed during nocturnal hours attracts a **2.0×** multiplier as stipulated by MoLVT Prakas.
- **Weekly Rest Days & Official Public Holidays**: Remunerated at **2.0× (Double Pay / 200%)** the standard hourly rate. Consult our companion [Cambodian Public Holidays and Paid Leave Guide](/blog/cambodian-public-holidays-and-leave-entitlements-guide).

| Shift Type | Statutory Multiplier | Base $2.50/hr Rate | Calculation Rule |
| :--- | :--- | :--- | :--- |
| **Standard Daytime OT** | **1.5×** | **$3.75 / hour** | Hours > 8 on regular weekdays |
| **Night Shift Hours (22:00–06:00)** | **1.5× to 2.0×** | **$3.75 – $5.00 / hr** | Nocturnal shift differential |
| **Weekly Rest Day (Sunday)** | **2.0×** | **$5.00 / hour** | Full day or partial rest hours |
| **Official Public Holidays** | **2.0× (Double Pay)** | **$5.00 / hour** | All hours worked on public holidays |

---

## 4. Grace Periods vs. Late Deduction Algorithms

Many Cambodian employers adopt a standard **15-minute grace window** before applying attendance penalties. In AttendKH, HR directors can configure whether late penalties apply:

- **Per-minute deduction**: Exact minute-by-minute wage deduction calculated immediately once the grace window expires.
- **Tiered deduction brackets**: Configurable tranches (e.g., 16–30 min late = 30 min wage deduction).

> 📐 **Late Deduction Amount = (Late Minutes - Grace Minutes) × (Hourly Base Rate / 60) × Penalty Factor**

Attendance punches capture automatically through the [AttendKH GPS & Selfie Clock-in App](/attendance), feeding clean, dispute-free timestamps into the payroll ledger.

---

## 5. NSSF (National Social Security Fund) Calculations

AttendKH automatically computes statutory deductions across all three mandatory **National Social Security Fund (NSSF)** branches:

1. **Occupational Risk Scheme (0.8%)**: Paid **100% by the employer**, calculated against the capped statutory ceiling of **1,200,000 KHR (~$300 USD)** (maximum employer payment: **9,600 KHR / ~$2.40 USD** per employee).
2. **Health Care Scheme (2.6%)**: Paid **100% by the employer**, capped at the **1,200,000 KHR** statutory ceiling (maximum employer payment: **31,200 KHR / ~$7.80 USD** per employee).
3. **Pension Scheme (4.0%)**: Shared equally between **employer (2.0%)** and **employee (2.0%)**, with employee deductions automatically capped at **24,000 KHR (~$6.00 USD)** per month.

For detailed tax rules, explore our [Cambodia Tax on Salary (ToS) Brackets & GDT Handbook](/blog/cambodia-tax-on-salary-brackets-gdt-payroll-handbook) and our guide on [Calculating Biannual Seniority Indemnity Pay](/blog/cambodian-seniority-indemnity-calculation-guide-udc-fdc).

---

## 6. Dual-Currency (USD & KHR) Payslips & Bakong Payouts

Because Cambodian businesses benchmark corporate salaries in **US Dollars ($)** while NSSF and tax compliance run in **Khmer Riel (៛)**, AttendKH generates bilingual Khmer/English PDF payslips displaying exact conversion rates based on the official **National Bank of Cambodia (NBC)** daily exchange rate.

Once approved, HR managers can execute one-click bulk salary disbursals to all commercial banks via [Bakong KHQR Direct Salary Disbursals](/blog/bakong-khqr-payroll-bulk-salary-disbursal-cambodia).

Ready to automate your Cambodian payroll compliance? See our [All-in-One $1/employee/month pricing](/pricing), [download the mobile app](/downloads), or [schedule a free demo with our local Phnom Penh team](/contact).`,
    content_km: `## ១. ការអនុវត្តប្រព័ន្ធបើកប្រាក់បៀវត្សរ៍ស្របតាមច្បាប់ការងារកម្ពុជាឆ្នាំ ២០២៦

យោងតាមបទប្បញ្ញត្តិ និងប្រកាសដែលកំណត់ដោយ **ក្រសួងការងារ និងបណ្តុះបណ្តាលវិជ្ជាជីវៈ (MoLVT)** និង **អគ្គនាយកដ្ឋានពន្ធដារ (GDT)** ការគណនាប្រាក់បៀវត្សរ៍បុគ្គលិកឱ្យបានត្រឹមត្រូវតម្រូវឱ្យអនុវត្តតាមរូបមន្តច្បាប់ជាធរមាន។ ការគណនាខុសអាចនាំឱ្យមានការផាកពិន័យពីអធិការកិច្ចការងារ និងទំនាស់វិវាទការងារ។

ការប្រើប្រាស់ [ប្រព័ន្ធគណនាប្រាក់បៀវត្សរ៍ស្វ័យប្រវត្តិកម្ពុជារបស់ AttendKH](/payroll) ធានាថាការគណនារបស់អ្នកស្របតាមស្តង់ដារច្បាប់កម្ពុជាទាំងស្រុង។

![ច្បាប់ការងារកម្ពុជា និងការគណនាប្រាក់ថែមម៉ោង បសស](/blog/payroll-law.jpg)
*រូបភាពទី ១៖ តារាងគណនាប្រាក់បៀវត្សរ៍ស្របច្បាប់ រួមបញ្ចូលមេគុណថែមម៉ោង MoLVT ពិដាន ប.ស.ស. និងប័ណ្ណបើកប្រាក់ខែ USD/KHR*

---

## ២. របៀបកំណត់អត្រាប្រាក់ឈ្នួលប្រចាំម៉ោងស្របច្បាប់

យោងតាម *មាត្រា ១៣៩ នៃច្បាប់ស្តីពីការងារ* ការងារពេញម៉ោងស្តង់ដារត្រូវបានគណនាដោយផ្អែកលើចំនួនថ្ងៃធ្វើការក្នុងកិច្ចសន្យា (ជាទូទៅ **២៦ ថ្ងៃ/ខែ**) ឬថ្ងៃធ្វើការជាក់ស្តែងក្នុងខែ៖

> 📐 **ប្រាក់ឈ្នួលគោលប្រចាំម៉ោង = ប្រាក់បៀវត្សរ៍សរុបប្រចាំខែ / (ចំនួនថ្ងៃធ្វើការ ២៦ ថ្ងៃ × ៨ ម៉ោង)**

*ឧទាហរណ៍*៖ សម្រាប់បុគ្គលិកដែលទទួលបានប្រាក់ខែ **$៣០០.០០ / ខែ** លើកិច្ចសន្យា ២៦ ថ្ងៃ៖
> 📐 **ប្រាក់ឈ្នួលម៉ោងគោល = $៣០០.០០ / (២៦ × ៨) = $១.៤៤២ / ម៉ោង**

---

## ៣. អត្រាគុណប្រាក់ឈ្នួលការងារថែមម៉ោង (OT) ស្របច្បាប់

ច្បាប់ការងារកម្ពុជាបែងចែកយ៉ាងច្បាស់លាស់រវាងវេនការងារ និងថ្ងៃបុណ្យជាតិ៖

- **ថ្ងៃធ្វើការធម្មតា (វេនថ្ងៃ)**៖ ការងារថែមម៉ោងលើសពី ៨ ម៉ោង ត្រូវបានទូទាត់ក្នុងអត្រា **១.៥ ដង (1.5×)** នៃប្រាក់ឈ្នួលម៉ោងគោល។ *មាត្រា ១៣៩* កំណត់ការថែមម៉ោងអតិបរមាត្រឹម **២ ម៉ោងក្នុងមួយថ្ងៃ**។
- **វេនយប់ (ម៉ោង ២២:០០ ដល់ ០៦:០០ ព្រឹក)**៖ ត្រូវទទួលបានប្រាក់បន្ថែមវេនយប់ **២.០ ដង (2.0×)** ស្របតាមប្រកាសរបស់ក្រសួងការងារ។
- **ថ្ងៃឈប់សម្រាកប្រចាំសប្តាហ៍ និងថ្ងៃបុណ្យជាតិផ្លូវការ**៖ ត្រូវទទួលបានប្រាក់ឈ្នួលទ្វេដងគឺ **២.០ ដង (2.0× / Double Pay)**។ សូមមើលបន្ថែមក្នុង [មគ្គុទ្ទេសក៍ថ្ងៃឈប់សម្រាកបុណ្យជាតិ និងច្បាប់ឈប់សម្រាក](/blog/cambodian-public-holidays-and-leave-entitlements-guide)។

| ប្រភេទវេនការងារ | មេគុណច្បាប់ | អត្រាលើម៉ោងគោល $2.50 | វិធាននៃការគណនា |
| :--- | :--- | :--- | :--- |
| **ថែមម៉ោងថ្ងៃធម្មតា** | **១.៥ ដង (1.5×)** | **$៣.៧៥ / ម៉ោង** | លើសពី ៨ ម៉ោងថ្ងៃធម្មតា |
| **វេនយប់ (២២:០០-០៦:០០)** | **១.៥× ដល់ ២.០×** | **$៣.៧៥ – $៥.០០ / ម៉ោង** | ការងារពេលយប់ស្របតាមប្រកាស |
| **ថ្ងៃសម្រាកប្រចាំសប្តាហ៍** | **២.០ ដង (2.0×)** | **$៥.០០ / ម៉ោង** | ធ្វើការចំថ្ងៃអាទិត្យ ឬថ្ងៃសម្រាក |
| **ថ្ងៃបុណ្យជាតិផ្លូវការ** | **២.០ ដង (Double Pay)** | **$៥.០០ / ម៉ោង** | ធ្វើការចំថ្ងៃឈប់សម្រាកបុណ្យជាតិ |

---

## ៤. រយៈពេលអនុគ្រោះ និងការកាត់ប្រាក់ពេលមកធ្វើការយឺត

និយោជកជាច្រើននៅកម្ពុជាកំណត់រយៈពេលអនុគ្រោះ **១៥ នាទី**។ នៅក្នុង AttendKH អ្នកគ្រប់គ្រង HR អាចកំណត់ជម្រើសកាត់ប្រាក់យឺតបានយ៉ាងងាយស្រួល៖

- **កាត់តាមនាទីជាក់ស្តែង**៖ គណនាកាត់ប្រាក់តាមចំនួននាទីជាក់ស្តែងបន្ទាប់ពីផុតរយៈពេលអនុគ្រោះ។
- **កាត់តាមកម្រិតកំណត់**៖ កំណត់ជាកម្រិត (ឧទាហរណ៍៖ យឺត ១៦-៣០ នាទី កាត់ស្មើនឹង ៣០ នាទី)។

> 📐 **ប្រាក់ពិន័យយឺត = (ចំនួននាទីយឺត - នាទីអនុគ្រោះ) × (ប្រាក់ឈ្នួលម៉ោង / ៦០) × មេគុណពិន័យ**

ការចុះវត្តមានត្រូវបានកត់ត្រាស្វ័យប្រវត្តិតាមរយៈ [កម្មវិធីទូរស័ព្ទ GPS & Selfie របស់ AttendKH](/attendance) ធានាទិន្នន័យច្បាស់លាស់ គ្មានការក្លែងបន្លំ។

---

## ៥. ការគណនាវិភាគទាន ប.ស.ស. (បេឡាជាតិសន្តិសុខសង្គម)

AttendKH គណនាការកាត់ប្រាក់វិភាគទាន ប.ស.ស. ដោយស្វ័យប្រវត្តិតាមផ្នែកទាំង ៣៖

១. **របបហានិភ័យការងារ (០.៨%)**៖ បង់ដោយ **និយោជក ១០០%** លើពិដានអតិបរមា **១,២០០,០០០ រៀល (~$៣០០ ដុល្លារ)** (អតិបរមា **៩,៦០០ រៀល / ~$២.៤០ ដុល្លារ** ក្នុងម្នាក់)។
២. **របបថែទាំសុខភាព (២.៦%)**៖ បង់ដោយ **និយោជក ១០០%** លើពិដាន **១,២០០,០០០ រៀល** (អតិបរមា **៣១,២០០ រៀល / ~$៧.៨០ ដុល្លារ** ក្នុងម្នាក់)។
៣. **របបសោធន (៤.០%)**៖ បែងចែករវាង **និយោជក (២.០%)** និង **និយោជិត (២.០%)** ដោយចំណែកកាត់ពីប្រាក់ខែបុគ្គលិកមានពិដានត្រឹម **២៤,០០០ រៀល (~$៦.០០ ដុល្លារ)** ក្នុងមួយខែ។

ស្វែងយល់បន្ថែមអំពីច្បាប់ពន្ធក្នុង [សៀវភៅណែនាំកម្រិតពន្ធលើប្រាក់បៀវត្ស GDT](/blog/cambodia-tax-on-salary-brackets-gdt-payroll-handbook) និង [មគ្គុទ្ទេសក៍គណនាប្រាក់បំណាច់អតីតភាពការងារ](/blog/cambodian-seniority-indemnity-calculation-guide-udc-fdc)។

---

## ៦. ប័ណ្ណបើកប្រាក់ខែជារូបិយប័ណ្ណពីរ (USD និង KHR) និងការបើកតាមបាគង

ដោយសារអាជីវកម្មនៅកម្ពុជាកំណត់ប្រាក់បៀវត្សរ៍ជា **ប្រាក់ដុល្លារ ($)** ប៉ុន្តែការបង់ពន្ធ និង ប.ស.ស. ត្រូវគិតជា **ប្រាក់រៀល (៛)** AttendKH បង្កើតប័ណ្ណបើកប្រាក់ខែ PDF ជាពីរភាសាខ្មែរ-អង់គ្លេស តាមអត្រាប្តូរប្រាក់ផ្លូវការរបស់ **ធនាគារជាតិនៃកម្ពុជា (NBC)**។

បន្ទាប់ពីអនុម័តរួច អ្នកគ្រប់គ្រងអាចបើកប្រាក់បៀវត្សរ៍ជាក្រុមទៅគ្រប់ធនាគារដោយផ្ទាល់តាមរយៈ [ប្រព័ន្ធបាគង KHQR របស់ AttendKH](/blog/bakong-khqr-payroll-bulk-salary-disbursal-cambodia)។

ត្រៀមខ្លួនធ្វើស្វ័យប្រវត្តិកម្មប្រព័ន្ធប្រាក់ខែរបស់អ្នកហើយឬនៅ? ពិនិត្យមើល [តម្លៃសមរម្យ $១/នាក់/ខែ](/pricing) [ទាញយកកម្មវិធីទូរស័ព្ទ](/downloads) ឬ [កក់ការបង្ហាញសាកល្បងដោយឥតគិតថ្លៃនៅភ្នំពេញ](/contact)។`,
    content_zh: `## 1. 2026 柬埔寨企业薪酬合规核算全景指南

依据**柬埔寨劳工与职业培训部 (MoLVT)** 与**国家税务总局 (GDT)** 颁布的最新法规与通令（Prakas），企业在核算员工工资、加班与考勤扣款时，必须严格执行法定计算公式。核算失误将直接导致劳工部高额罚款与繁琐的劳工仲裁纠纷。

部署全自动化的 [AttendKH 柬埔寨法定薪酬核算引擎](/payroll)，确保企业用工核算 100% 契合本地法规标准。

![柬埔寨劳工法加班规则与社保薪酬核算矩阵](/blog/payroll-law.jpg)
*图 1：涵盖劳工部法定加班倍率、NSSF 缴费封顶基数与双币工资单的合规计算模型。*

---

## 2. 员工法定基础时薪确定公式

根据《柬埔寨劳工法》*第 139 条*，标准全职员工的时薪依据合同约定工作天数（通常以 **每月 26 天标准** 计）或当月法定日历工作日计算：

> 📐 **基础时薪 = 月度税前总收入 / (合同约定工作天数 26 天 × 8 小时)**

*实操范例*：某行政员工月薪约定为 **$300.00 美元**，标准 26 天合同制：
> 📐 **基础时薪 = $300.00 / (26 × 8) = $1.442 美元 / 小时**

---

## 3. 柬埔寨劳工部法定加班乘数规则

柬埔寨法规对不同时段与节假日的加班报酬进行了严格的阶梯化界定：

- **正常工作日白班加班**：超出正常 8 小时工时上限的部分，按基础时薪的 **1.5 倍 (1.5×)** 计发。需注意：*第 139 条* 明确规定每日加班时间 **不得超过 2 小时**。
- **夜班特殊工时（22:00 – 次日 06:00）**：根据劳工部通令，夜间工时需叠加发放 **2.0 倍 (2.0×)** 法定夜班津贴。
- **法定每周公休日与国家公共节假日**：在周日公休日或官方节日加班，必须足额发放 **2.0 倍双倍工资（Double Pay / 200%）**。详情可参考我们的 [柬埔寨公共假期与年休假实务指南](/blog/cambodian-public-holidays-and-leave-entitlements-guide)。

| 班次与工时类型 | 法定薪资乘数 | 以 $2.50/hr 为例 | 法定核算细则 |
| :--- | :--- | :--- | :--- |
| **工作日正常加班** | **1.5 倍 (1.5×)** | **$3.75 / 小时** | 工作日超出 8 小时部分（限 2 小时以内） |
| **夜班工时 (22:00–06:00)** | **1.5× 至 2.0×** | **$3.75 – $5.00 / 小时** | 夜间作业法定津贴加成 |
| **每周公休日 (周日)** | **2.0 倍 (Double Pay)** | **$5.00 / 小时** | 休息日排班出勤或超时 |
| **国家法定公共节假日** | **2.0 倍 (双倍工资)** | **$5.00 / 小时** | 官方节庆日全天工时均按双倍计发 |

---

## 4. 迟到宽限期与扣款合规规则

许多在柬企业实行 **15 分钟** 的合理迟到豁免。在 AttendKH 薪资系统中，管理人员可灵活配置合规扣款算法：
- **按超出分钟精准扣减**：仅对超出豁免期之外的实际迟到分钟折算时薪进行扣除。
- **阶梯式区间扣减**：灵活设定档位（如：迟到 16–30 分钟按 30 分钟工时折算扣款）。

> 📐 **迟到应扣金额 = (实际迟到分钟数 - 豁免分钟数) × (基础时薪 / 60) × 扣罚系数**

结合 [AttendKH 移动端 GPS 与防伪自拍打卡](/attendance)，杜绝纸质考勤涂改与虚假打卡，为薪资结算提供铁证底单。

---

## 5. 柬埔寨国家社保基金 (NSSF) 自动代扣

AttendKH 自动化薪酬系统精准内置 NSSF 三大支柱体系的最新法定缴纳标准：

1. **工伤风险保险 (0.8%)**：由 **雇主 100% 承担**，以最高上限基数 **1,200,000 柬币 (~$300 美元)** 为限（雇主月缴上限为 **9,600 柬币 / 约合 $2.40 美元** / 人）。
2. **健康医疗保险 (2.6%)**：由 **雇主 100% 承担**，按 **1,200,000 柬币** 上限计（雇主月缴上限为 **31,200 柬币 / 约合 $7.80 美元** / 人）。
3. **国家养老金计划 (4.0%)**：由 **雇主 (2.0%)** 与 **员工个人 (2.0%)** 双方对等平摊，员工个人代扣上限锁定为 **24,000 柬币 (~$6.00 美元)** / 月。

深度税务规则请参阅我们的 [柬埔寨工资税 (ToS) 阶梯税率核算手册](/blog/cambodia-tax-on-salary-brackets-gdt-payroll-handbook) 以及 [柬埔寨工龄补偿金 (Seniority Pay) 计提指南](/blog/cambodian-seniority-indemnity-calculation-guide-udc-fdc)。

---

## 6. 美元/瑞尔双币工资条与 Bakong 极速批量发薪

在柬埔寨，企业通常以 **美元 ($)** 约定底薪，而 NSSF 与税务申报强制以 **柬币瑞尔 (៛)** 结算。AttendKH 自动按 **柬埔寨国家银行 (NBC)** 官方每日牌价换算，并一键生成中/英/高棉三语专业 PDF 电子工资条。

工资条审批完毕后，财务负责人可通过 [Bakong KHQR 批量发薪中台](/blog/bakong-khqr-payroll-bulk-salary-disbursal-cambodia) 一键直达全柬 50 多家银行账户。

立即实现柬埔寨薪酬合规自动化！查看 [每位员工每月仅 $1 的透明定价](/pricing)、[下载移动端应用](/downloads)，或联系金边团队 [预约免费 1 对 1 演示](/contact)。`,
    cover_image: "/blog/payroll-law.jpg",
    author_name: "Chhunsour Seng",
    author_role: "Product Builder",
    author_role_km: "អ្នកបង្កើតផលិតផល",
    author_role_zh: "产品架构师",
    author_avatar: "/avatars/chhunsour.png",
    category: "Payroll",
    category_km: "ប្រាក់ខែ",
    category_zh: "薪酬核算",
    tags: ["Payroll", "Labor Law", "NSSF", "Overtime", "USD KHR"],
    tags_km: ["ប្រាក់ខែ", "ច្បាប់ការងារ", "បសស", "ថែមម៉ោង", "ដុល្លារ រៀល"],
    tags_zh: ["薪酬核算", "劳工法", "NSSF社保", "加班核算", "双币薪资"],
    status: "published",
    published_at: "2026-08-25T09:30:00Z",
    scheduled_at: null,
    seo_title: "Cambodian Labor Law Overtime & Payroll Guide (2026) — AttendKH",
    seo_description:
      "Step-by-step formulas for calculating overtime rates (1.5x, 2.0x), NSSF caps, and grace-period deductions under Cambodian labor regulations.",
    og_image: "/blog/payroll-law.jpg",
    view_count: 2480,
    created_at: "2026-08-25T09:30:00Z",
    updated_at: "2026-08-25T09:30:00Z",
  },
  {
    id: "post-restaurant-shifts",
    slug: "multi-branch-shift-rostering-restaurants-cafes",
    title: "Multi-Branch Shift Rostering: Managing Split Shifts & High Turnover in Cambodian F&B",
    title_km: "ការរៀបចំកាលវិភាគវេនការងារពហុសាខា៖ គ្រប់គ្រងវេនបំបែក (Split Shifts) និងអត្រាផ្លាស់ប្តូរបុគ្គលិកក្នុងវិស័យ F&B នៅកម្ពុជា",
    title_zh: "多门店轮班排班实操：攻克柬埔寨餐饮行业“分段倒班”与高流动率管理难题",
    excerpt:
      "From lunch rushes (11:00–14:00) to evening dinner service (17:00–22:00), learn how top Phnom Penh hospitality brands coordinate split shifts and cross-branch replacements.",
    excerpt_km:
      "ចាប់ពីម៉ោងមមាញឹកអាហារថ្ងៃត្រង់ (១១:០០–១៤:០០) រហូតដល់ម៉ោងអាហារពេលល្ងាច (១៧:០០–២២:០០) ស្វែងយល់ពីរបៀបដែលហាងកាហ្វេ និងភោជនីយដ្ឋានឈានមុខនៅភ្នំពេញសម្របសម្រួលវេនបំបែក និងការផ្លាស់ប្តូរបុគ្គលិកឆ្លងសាខា។",
    excerpt_zh:
      "从午餐高峰（11:00–14:00）到晚餐高峰（17:00–22:00），了解金边头部餐饮连锁如何高效调度跨门店支援与分段倒班排班。",
    content: `## 1. The Operational Reality of Cambodian F&B

Managing shift work in Phnom Penh, Siem Reap, and Sihanoukville hospitality businesses requires juggling high frontline staff turnover, peak rush hours, and sudden absenteeism:

- **Split Shifts**: Service staff clock in for lunch rush (**10:30 – 14:00**), clock out for afternoon rest, and return for evening dinner rush (**17:00 – 22:00**).
- **Cross-Branch Coverage**: Baristas and service crew moving dynamically between a BKK1 flagship and a Toul Tompoung satellite outlet during weekend surges.
- **Last-Minute Replacements**: If a line cook calls in sick, the head chef needs immediate visibility into who is off-duty and eligible to cover without breaching the *2-hour statutory daily overtime cap* under *Article 139 of the Cambodian Labour Law*.

![Multi-Branch Shift Rostering for Cambodian F&B and Retail](/blog/restaurant-shifts.jpg)
*Figure 1: Coordinating split shifts, cross-outlet coverage, and instant Telegram shift notifications.*

---

## 2. Structuring an Optimized Shift Schedule

A well-structured hospitality schedule balances rush-hour coverage with legal rest intervals:

> • **Shift A (Morning/Breakfast): 06:30 – 14:30 (Prep + Peak Morning Rush)**
> • **Shift B (Split Service):      10:30 – 14:00 & 17:00 – 21:30 (Peak Lunch & Dinner)**
> • **Shift C (Night Closing):      14:00 – 22:30 (Dinner Rush + Daily Register Closing)**

---

## 3. How AttendKH Eliminates Multi-Branch Shift Friction

Modern food and beverage operators leverage the [AttendKH Multi-Branch Shift Rostering Platform](/multi-branch) to automate staff scheduling:

1. **Anti-No-Show Telegram Alerts**: When an opening shift barista fails to clock in within **15 minutes** of store opening, the branch manager receives an instant Telegram alert with available substitute contacts.
2. **One-Tap Peer Shift Swapping**: Frontline staff propose shift trades directly on the [AttendKH Mobile App](/downloads); branch managers approve or reassign with a single tap.
3. **Automated Split-Shift Pay Calculations**: AttendKH seamlessly aggregates multiple punches within a single 24-hour cycle without misinterpreting afternoon breaks as unauthorized early departures.
4. **Seamless Overtime Synchronization**: Approved excess hours feed directly into our [Cambodian Labor Law Overtime and Payroll Engine](/payroll), ensuring accurate 1.5× and 2.0× multiplier calculations.

> *"Managing rosters across our 4 restaurant locations used to take 12 hours every week on whiteboard photos and Telegram chats. Now it takes 15 minutes in AttendKH."* — **Vannak Seng**, Operations Director

Discover how leading hospitality brands streamline their shifts: explore our [customer success stories](/customers), review our [all-in-one $1/employee/month pricing](/pricing), or [book a free consultation with our Phnom Penh operations team](/contact).`,
    content_km: `## ១. បញ្ហាប្រឈមជាក់ស្តែងក្នុងប្រតិបត្តិការភោជនីយដ្ឋាន និងហាងកាហ្វេនៅកម្ពុជា

ការគ្រប់គ្រងវេនការងារក្នុងភោជនីយដ្ឋាន និងហាងកាហ្វេនៅរាជធានីភ្នំពេញ សៀមរាប និងព្រះសីហនុ តែងតែជួបប្រទះការលំបាកដូចជា អត្រាផ្លាស់ប្តូរបុគ្គលិកខ្ពស់ វេនការងារបំបែកពីរពេល និងអវត្តមានភ្លាមៗ៖

- **វេនបំបែក (Split Shifts)**៖ បុគ្គលិកចុះវត្តមានសម្រាប់វេនថ្ងៃត្រង់ (**១០:៣០ – ១៤:០០**) ចុះចេញសម្រាក និងត្រឡប់មកធ្វើការវិញសម្រាប់វេនល្ងាច (**១៧:០០ – ២២:០០**)។
- **ការផ្លាស់ប្តូរបុគ្គលិកឆ្លងសាខា**៖ អ្នកឆុងកាហ្វេ (Barista) ឬបុគ្គលិកបម្រើការត្រូវផ្លាស់ប្តូរទីតាំងចន្លោះពីសាខាបឹងកេងកង ១ (BKK1) ទៅសាខាទួលទំពូង ក្នុងអំឡុងម៉ោងភ្ញៀវច្រើន។
- **ការរកបុគ្គលិកជំនួសបន្ទាន់**៖ ប្រសិនបើចុងភៅម្នាក់ឈឺ ប្រធានចុងភៅត្រូវការដឹងភ្លាមៗថា តើបុគ្គលិកណាខ្លះកំពុងសម្រាក ហើយអាចមកធ្វើការជំនួសបានដោយមិនលើស *កម្រិតថែមម៉ោងអតិបរមា ២ ម៉ោងក្នុងមួយថ្ងៃ* តាម *មាត្រា ១៣៩ នៃច្បាប់ការងារ*។

![ការរៀបចំកាលវិភាគវេនការងារពហុសាខានៅភ្នំពេញ](/blog/restaurant-shifts.jpg)
*រូបភាពទី ១៖ ការសម្របសម្រួលវេនបំបែក ការផ្លាស់ប្តូរបុគ្គលិកឆ្លងសាខា និងការជូនដំណឹងតាម Telegram*

---

## ២. គំរូរៀបចំកាលវិភាគវេនការងារដ៏មានប្រសិទ្ធភាព

កាលវិភាគការងារដែលរៀបចំបានត្រឹមត្រូវជួយសម្រួលការបម្រើសេវាកម្ម និងស្របតាមច្បាប់ការងារ៖

> • **វេន A (ព្រឹក/ថ្ងៃត្រង់)៖   ០៦:៣០ – ១៤:៣០ (រៀបចំ + ម៉ោងថ្ងៃត្រង់មមាញឹក)**
> • **វេន B (វេនបំបែកពីរពេល)៖ ១០:៣០ – ១៤:០០ និង ១៧:០០ – ២១:៣០ (ម៉ោងភ្ញៀវច្រើន)**
> • **វេន C (វេនល្ងាច/បិទហាង)៖ ១៤:០០ – ២២:៣០ (អាហារពេលល្ងាច + បិទបញ្ជីប្រចាំថ្ងៃ)**

---

## ៣. របៀបដែល AttendKH ជួយដោះស្រាយបញ្ហាវេនការងារ

ម្ចាស់អាជីវកម្ម F&B សម័យទំនើបប្រើប្រាស់ [ប្រព័ន្ធគ្រប់គ្រងវេនការងារពហុសាខារបស់ AttendKH](/multi-branch)៖

១. **ការជូនដំណឹងស្វែងរកបុគ្គលិកជំនួសភ្លាមៗ**៖ ប្រសិនបើអ្នកឆុងកាហ្វេវេនព្រឹកមិនទាន់ចុះវត្តមានក្នុងរយៈពេល **១៥ នាទី** មុនពេលបើកហាង ប្រព័ន្ធនឹងផ្ញើសារជូនដំណឹងទៅ Telegram របស់អ្នកគ្រប់គ្រងសាខាភ្លាមៗ។
២. **ការស្នើសុំប្តូរវេនការងារតាមទូរស័ព្ទ**៖ បុគ្គលិកអាចស្នើសុំប្តូរវេនគ្នាដោយផ្ទាល់លើ [កម្មវិធីទូរស័ព្ទ AttendKH](/downloads) ហើយអ្នកគ្រប់គ្រងអាចចុចយល់ព្រមបានដោយងាយស្រួល។
៣. **ការគណនាប្រាក់ឈ្នួលវេនបំបែកដោយស្វ័យប្រវត្តិ**៖ AttendKH រួមបញ្ចូលការចុះវត្តមានច្រើនដងក្នុងមួយថ្ងៃបានយ៉ាងត្រឹមត្រូវ ដោយមិនចាត់ទុកចន្លោះពេលសម្រាកជាការអវត្តមានឡើយ។
៤. **សមកាលកម្មជាមួយប្រព័ន្ធបើកប្រាក់ខែ**៖ ម៉ោងថែមដែលបានអនុម័តត្រូវបញ្ជូនដោយផ្ទាល់ទៅកាន់ [ប្រព័ន្ធគណនាប្រាក់ខែស្វ័យប្រវត្តិកម្ពុជា](/payroll) ស្របតាមអត្រា ១.៥ ដង និង ២.០ ដង។

> *"កាលពីមុន ការរៀបចំកាលវិភាគវេនការងារនៅ ៤ សាខារបស់យើង ចំណាយពេលរហូតដល់ ១២ ម៉ោងក្នុងមួយសប្តាហ៍លើក្តារខៀន និងការថតរូបផ្ញើគ្នា។ ឥឡូវនេះ ប្រើត្រឹមតែ ១៥ នាទីប៉ុណ្ណោះក្នុង AttendKH។"* — **Vannak Seng**, នាយកផ្នែកប្រតិបត្តិការ

ស្វែងយល់បន្ថែមពី [បទពិសោធន៍អតិថិជនរបស់យើង](/customers) [តម្លៃសមរម្យត្រឹមតែ $១/នាក់/ខែ](/pricing) ឬ [កក់ការប្រឹក្សាដោយឥតគិតថ្លៃនៅភ្នំពេញ](/contact)។`,
    content_zh: `## 1. 柬埔寨餐饮与酒店业的真实运营挑战

在金边、暹粒与西哈努克港管理餐饮门市的排班，管理者往往需要应对一线员工高流动率、高峰客流冲击以及突发请假的严峻挑战：

- **分段倒班（两头班模式）**：服务人员在午餐高峰（**10:30 – 14:00**）打卡上岗，中途离场休息，在晚餐高峰（**17:00 – 22:00**）再次返回打卡。
- **跨门店灵活调度支援**：在客流波峰期，咖啡师或服务员需要在 BKK1 旗舰店与俄罗斯市场（Toul Tompoung）分店之间快速流动支援。
- **紧急临时顶岗代班**：当主力厨师突发请病假时，店长需要秒级获知当前有哪些员工处于轮休状态且可合规顶班，且严格符合《柬埔寨劳工法》*第 139 条* 关于*每日加班不得超过 2 小时*的法定红线。

![金边餐饮与零售多门店智能排班系统](/blog/restaurant-shifts.jpg)
*图 1：协调两头班分段倒班、跨店灵活支援与 Telegram 实时缺勤预警。*

---

## 2. 餐饮门店标准化排班架构示范

合理的排班体系兼顾高峰期服务质量与员工法定休息权益：

> • **班次 A（早班/午餐峰值）：06:30 – 14:30（开店备料 + 午市客流高峰）**
> • **班次 B（分段倒班两头班）：10:30 – 14:00 & 17:00 – 21:30（全天两大核心峰值）**
> • **班次 C（晚班/打烊清算）：14:00 – 22:30（晚市服务 + 每日打烊盘点）**

---

## 3. AttendKH 数字化智能排班如何化解管理冲突

现代化连锁品牌全面采用 [AttendKH 多门店智能轮班系统](/multi-branch) 实现排班数字化：

1. **开店防空岗实时预警**：当早班咖啡师在开店前 **15 分钟** 未完成 GPS 自拍打卡时，店长手机的 Telegram 会第一时间收到缺勤预警及可调配替补人员清单。
2. **手机端自主换班与一键审批**：员工可在 [AttendKH 手机 App](/downloads) 内直接向同事发起换班申请，经店长在手机端一键确认后排班表自动刷新。
3. **分段打卡工时智能合并核算**：AttendKH 精准识别单日内多次进出打卡记录，智能计算有效出勤工时，绝不将中途休息误判为异常早退或缺勤。
4. **无缝对接法定薪酬引擎**：核准后的加班工时实时同步至 [柬埔寨劳工法薪酬系统](/payroll)，自动套用平日 1.5 倍及节假日 2.0 倍法定乘数。

> *“过去管理 4 家餐厅分店的周排班表，店长要在白板上写画拍照，每周耗费 12 个小时；现在通过 AttendKH 仅需 15 分钟即可搞定全员智能排班。”* —— **Vannak Seng**, 运营总监

深入了解本地餐饮龙头案例：参阅我们的 [客户成功案例](/customers)、查看 [每人每月仅 $1 的全功能定价](/pricing)，或联系金边团队 [预约 1 对 1 顾问演示](/contact)。`,
    cover_image: "/blog/restaurant-shifts.jpg",
    author_name: "Chhunsour Seng",
    author_role: "Product Builder",
    author_role_km: "អ្នកបង្កើតផលិតផល",
    author_role_zh: "产品架构师",
    author_avatar: "/avatars/chhunsour.png",
    category: "Operations",
    category_km: "ប្រតិបត្តិការ",
    category_zh: "运营管理",
    tags: ["Operations", "Hospitality", "Shift Scheduling", "Restaurants", "Phnom Penh"],
    tags_km: ["ប្រតិបត្តិការ", "បដិសណ្ឋារកិច្ច", "កាលវិភាគវេន", "ភោជនីយដ្ឋាន", "ភ្នំពេញ"],
    tags_zh: ["运营管理", "酒店餐饮", "轮班排班", "连锁餐厅", "金边"],
    status: "published",
    published_at: "2026-08-22T10:00:00Z",
    scheduled_at: null,
    seo_title: "Multi-Branch Shift Rostering for Cambodian Restaurants & Cafes — AttendKH",
    seo_description:
      "How multi-outlet restaurant chains in Cambodia optimize split shifts, handle barista absenteeism, and control labor costs with digital rostering.",
    og_image: "/blog/restaurant-shifts.jpg",
    view_count: 1890,
    created_at: "2026-08-22T10:00:00Z",
    updated_at: "2026-08-22T10:00:00Z",
  },
  {
    id: "post-cambodia-holidays",
    slug: "cambodian-public-holidays-and-leave-entitlements-guide",
    title: "Cambodian Public Holidays & Paid Leave: Pchum Ben, Khmer New Year & Annual Leave Rules",
    title_km: "ថ្ងៃឈប់សម្រាកបុណ្យជាតិ និងច្បាប់ឈប់សម្រាកប្រចាំឆ្នាំនៅកម្ពុជា៖ បុណ្យភ្ជុំបិណ្ឌ ចូលឆ្នាំខ្មែរ និងច្បាប់ឈប់សម្រាកប្រចាំឆ្នាំ",
    title_zh: "柬埔寨法定公共假期与带薪休假政策：亡人节、柬埔寨新年与法定年假全攻略",
    excerpt:
      "Master holiday compensation rules under MoLVT: double pay requirements, compensatory rest days, and how automated payroll rules prevent costly disputes.",
    excerpt_km:
      "ស្វែងយល់លម្អិតអំពីបទប្បញ្ញត្តិប្រាក់ឈ្នួលក្នុងថ្ងៃឈប់សម្រាកបុណ្យជាតិក្រោមការណែនាំរបស់ក្រសួងការងារ៖ តម្រូវការបើកប្រាក់ឈ្នួលទ្វេដង (២០០%) ថ្ងៃសម្រាកប៉ះប៉ូវ និងរបៀបដែលប្រព័ន្ធគណនាប្រាក់ខែស្វ័យប្រវត្តិកាត់បន្ថយវិវាទការងារ។",
    excerpt_zh:
      "掌握柬埔寨劳工部 (MoLVT) 法定节假日薪酬标准：200%（双倍）节日加班费核算、补休调休机制及工龄年假累加规则。",
    content: `## 1. Understanding Official Cambodian Public Holidays

Cambodia observes approximately **22 to 24 official public holidays per calendar year**, established annually through royal decree and notifications from the **Ministry of Labour and Vocational Training (MoLVT)**. For operating businesses, managing attendance during major festive periods like **Khmer New Year (Chaoul Chnam Thmey)**, **Pchum Ben Festival**, and **Water Festival (Bon Om Touk)** is critical for maintaining labor compliance.

![Cambodian Public Holidays and Annual Paid Leave Policies](/blog/cambodia-holidays.jpg)
*Figure 1: Statutory compensation rules for Cambodian festive seasons, double-pay mandates, and seniority leave.*

---

## 2. The Mandatory Double-Pay (200% / 2.0×) Requirement

Under *Article 161 of the Cambodian Labour Law*, employees required to work on an official public holiday must be compensated at **200% (2.0× Double Pay)** of their regular base wage rate for all worked hours:

> 📐 **Public Holiday Hourly Wage = Regular Base Hourly Rate × 2.0**

*Example*: If an employee's base hourly rate is **$2.50 / hr**, working on Pchum Ben or Khmer New Year guarantees **$5.00 / hr** for daytime hours. If overtime extends into night hours (**22:00 – 06:00**), additional nocturnal differentials apply.

---

## 3. Compensatory Rest Days (Weekly Rest Conflict)

If an official Cambodian public holiday falls on a worker's scheduled weekly rest day (typically Sunday), employers are legally required to grant an **alternate compensatory rest day off** on the following Monday, or remunerate the full 2.0× rate.

---

## 4. Statutory Annual Paid Leave Accrual

Cambodian labor regulations govern paid annual leave rights through *Article 166*:

- **Base Entitlement**: Full-time employees accrue **1.5 days of paid annual leave per month of continuous service** (**18 working days annually**).
- **Seniority Bonus Accrual**: For every **3 continuous years of service**, the employee automatically earns **+1 additional day** of annual leave per year.

| Years of Continuous Service | Annual Leave Days per Year | Accrual Formula |
| :--- | :--- | :--- |
| **1 – 3 Years** | **18 Days** | 1.5 days / month base |
| **4 – 6 Years** | **19 Days** | 18 days + 1 seniority bonus day |
| **7 – 9 Years** | **20 Days** | 18 days + 2 seniority bonus days |
| **10+ Years** | **21+ Days** | Continues increasing by +1 day every 3 years |

---

## 5. Automating Holiday Pay with AttendKH

Instead of manual spreadsheet calculations and attendance disputes, the [AttendKH Automated Cambodian Payroll Engine](/payroll) eliminates operational overhead:

1. **Automatic 2.0× Multipliers**: The system cross-references national holiday calendars with [AttendKH GPS and Selfie Punches](/attendance), applying the **2.0× multiplier** automatically.
2. **Real-Time Leave Balances**: Employees request leave, view remaining balances, and submit medical certificates directly via the [AttendKH Mobile App for iOS and Android](/downloads).
3. **Cross-Statutory Compliance**: Holiday hours synchronize directly into [NSSF statutory calculations](/blog/cambodian-labor-law-overtime-payroll-and-nssf-guide) and [Biannual Seniority Indemnity Accruals](/blog/cambodian-seniority-indemnity-calculation-guide-udc-fdc).

Ready to automate holiday payroll and annual leave tracking? Explore our [All-in-One $1/employee/month plan](/pricing) or [contact our Phnom Penh team for a personalized demo](/contact).`,
    content_km: `## ១. ស្វែងយល់អំពីថ្ងៃឈប់សម្រាកបុណ្យជាតិផ្លូវការនៅកម្ពុជា

ប្រទេសកម្ពុជាមានថ្ងៃឈប់សម្រាកបុណ្យជាតិផ្លូវការប្រមាណ **២២ ដល់ ២៤ ថ្ងៃក្នុងមួយឆ្នាំ** ដែលត្រូវបានកំណត់ជារៀងរាល់ឆ្នាំដោយព្រះរាជក្រឹត្យ និងសេចក្តីជូនដំណឹងរបស់ **ក្រសួងការងារ និងបណ្តុះបណ្តាលវិជ្ជាជីវៈ (MoLVT)**។ សម្រាប់ម្ចាស់អាជីវកម្ម ការគ្រប់គ្រងវត្តមានបុគ្គលិកក្នុងអំឡុងរដូវបុណ្យទានធំៗដូចជា **ពិធីបុណ្យចូលឆ្នាំប្រពៃណីជាតិខ្មែរ**, **ពិធីបុណ្យភ្ជុំបិណ្ឌ**, និង **ពិធីបុណ្យអុំទូក** គឺមានសារៈសំខាន់បំផុតដើម្បីធានាការអនុលោមតាមច្បាប់ការងារ។

![ថ្ងៃឈប់សម្រាកបុណ្យជាតិ និងច្បាប់ឈប់សម្រាកប្រចាំឆ្នាំនៅកម្ពុជា](/blog/cambodia-holidays.jpg)
*រូបភាពទី ១៖ វិធានបើកប្រាក់ឈ្នួលថ្ងៃបុណ្យជាតិ តម្រូវការប្រាក់ទ្វេដង និងការសន្សំថ្ងៃឈប់សម្រាកតាមអតីតភាពការងារ*

---

## ២. តម្រូវការបើកប្រាក់ឈ្នួលទ្វេដងជាកាតព្វកិច្ច (២០០% / 2.0× Double Pay)

យោងតាម *មាត្រា ១៦១ នៃច្បាប់ស្តីពីការងារ* បុគ្គលិកដែលត្រូវបានតម្រូវឱ្យបំពេញការងារក្នុងថ្ងៃឈប់សម្រាកបុណ្យជាតិផ្លូវការ ត្រូវតែទទួលបានប្រាក់ឈ្នួលគុណនឹង **២០០% (២.០ ដង / 2.0×)** នៃប្រាក់ឈ្នួលម៉ោងធម្មតាសម្រាប់គ្រប់ម៉ោងដែលបានធ្វើការ៖

> 📐 **ប្រាក់ឈ្នួលម៉ោងថ្ងៃបុណ្យជាតិ = ប្រាក់ឈ្នួលម៉ោងគោលធម្មតា × ២.០**

*ឧទាហរណ៍*៖ ប្រសិនបើប្រាក់ឈ្នួលម៉ោងគោលរបស់បុគ្គលិកគឺ **$២.៥០ / ម៉ោង** ការធ្វើការក្នុងថ្ងៃបុណ្យភ្ជុំបិណ្ឌ ឬចូលឆ្នាំខ្មែរ ធានាថានឹងទទួលបាន **$៥.០០ / ម៉ោង** សម្រាប់ម៉ោងពេលថ្ងៃធម្មតា។

---

## ៣. ថ្ងៃឈប់សម្រាកប៉ះប៉ូវ (ករណីជាន់លើថ្ងៃសម្រាកប្រចាំសប្តាហ៍)

ប្រសិនបើថ្ងៃឈប់សម្រាកបុណ្យជាតិចំលើថ្ងៃសម្រាកប្រចាំសប្តាហ៍របស់បុគ្គលិក (ជាទូទៅគឺថ្ងៃអាទិត្យ) និយោជកមានកាតព្វកិច្ចតាមផ្លូវច្បាប់ក្នុងការផ្តល់ **ថ្ងៃឈប់សម្រាកប៉ះប៉ូវ** នៅថ្ងៃបន្ទាប់ ឬទូទាត់ប្រាក់ឈ្នួលថ្ងៃបុណ្យឱ្យបានពេញលេញក្នុងអត្រា ២.០ ដង។

---

## ៤. ច្បាប់សន្សំបុណ្យឈប់សម្រាកប្រចាំឆ្នាំ (Annual Leave)

*មាត្រា ១៦៦ នៃច្បាប់ស្តីពីការងារ* កំណត់សិទ្ធិឈប់សម្រាកប្រចាំឆ្នាំដូចខាងក្រោម៖

- **សិទ្ធិឈប់សម្រាកគោល**៖ បុគ្គលិកពេញម៉ោងទទួលបានសិទ្ធិឈប់សម្រាកប្រចាំឆ្នាំចំនួន **១.៥ ថ្ងៃ ក្នុងមួយខែនៃការបំពេញការងារជាប់គ្នា** (**១៨ ថ្ងៃក្នុងមួយឆ្នាំ** ពេញលេញ)។
- **ថ្ងៃឈប់សម្រាកបន្ថែមតាមអតីតភាពការងារ**៖ រាល់ការបម្រើការងារបាន **៣ ឆ្នាំជាប់គ្នា** បុគ្គលិកទទួលបានសិទ្ធិឈប់សម្រាក **+១ ថ្ងៃបន្ថែមទៀត** ក្នុងមួយឆ្នាំ។

| អតីតភាពការងារជាប់គ្នា | ចំនួនថ្ងៃឈប់សម្រាកប្រចាំឆ្នាំ | រូបមន្តគណនា |
| :--- | :--- | :--- |
| **១ – ៣ ឆ្នាំ** | **១៨ ថ្ងៃ** | មូលដ្ឋាន ១.៥ ថ្ងៃ / ខែ |
| **៤ – ៦ ឆ្នាំ** | **១៩ ថ្ងៃ** | មូលដ្ឋាន ១៨ ថ្ងៃ + ១ ថ្ងៃបន្ថែម |
| **៧ – ៩ ឆ្នាំ** | **២០ ថ្ងៃ** | មូលដ្ឋាន ១៨ ថ្ងៃ + ២ ថ្ងៃបន្ថែម |
| **១០ ឆ្នាំឡើងទៅ** | **២១+ ថ្ងៃ** | បន្តកើនឡើង +១ ថ្ងៃ រៀងរាល់ ៣ ឆ្នាំ |

---

## ៥. ស្វ័យប្រវត្តិកម្មការគណនាប្រាក់ឈ្នួលថ្ងៃបុណ្យជាមួយ AttendKH

ជំនួសឱ្យការកត់ត្រា និងគណនាលើក្រដាសដោយដៃ [ប្រព័ន្ធគណនាប្រាក់បៀវត្សរ៍ស្វ័យប្រវត្តិកម្ពុជារបស់ AttendKH](/payroll) ជួយសម្រួលគ្រប់កិច្ចការ៖

១. **គុណអត្រា ២.០ ដងស្វ័យប្រវត្តិ**៖ ប្រព័ន្ធភ្ជាប់ប្រតិទិនបុណ្យជាតិជាមួយ [ទិន្នន័យចុះវត្តមាន GPS & Selfie របស់ AttendKH](/attendance) ដោយគុណ **២.០ ដង** ភ្លាមៗ។
២. **តាមដានសមតុល្យថ្ងៃឈប់សម្រាកជាក់ស្តែង**៖ បុគ្គលិកអាចស្នើសុំច្បាប់ ពិនិត្យសមតុល្យដែលនៅសល់ និងភ្ជាប់លិខិតពេទ្យបានយ៉ាងងាយស្រួលតាមរយៈ [កម្មវិធីទូរស័ព្ទ AttendKH](/downloads)។
៣. **សមកាលកម្មជាមួយច្បាប់ការងារ**៖ ម៉ោងធ្វើការថ្ងៃបុណ្យជាតិត្រូវភ្ជាប់ដោយស្វ័យប្រវត្តិទៅនឹង [ការគណនាវិភាគទាន ប.ស.ស.](/blog/cambodian-labor-law-overtime-payroll-and-nssf-guide) និង [ប្រាក់បំណាច់អតីតភាពការងារ](/blog/cambodian-seniority-indemnity-calculation-guide-udc-fdc)។

ត្រៀមខ្លួនធ្វើស្វ័យប្រវត្តិកម្មប្រព័ន្ធឈប់សម្រាក និងប្រាក់ខែថ្ងៃបុណ្យហើយឬនៅ? ពិនិត្យមើល [តម្លៃសមរម្យ $១/នាក់/ខែ](/pricing) ឬ [កក់ការបង្ហាញសាកល្បងដោយឥតគិតថ្លៃនៅភ្នំពេញ](/contact)។`,
    content_zh: `## 1. 深度解读柬埔寨法定公共假期体系

柬埔寨每年拥有约 **22 至 24 天** 的法定公共假期，每年由皇家法令及**柬埔寨劳工与职业培训部 (MoLVT)** 官方通告统一公布。在**柬埔寨传统新年（Chaoul Chnam Thmey）**、**亡人节（Pchum Ben）**及**送水节（Bon Om Touk）**等重大传统节庆期间合规管理人力与考勤，是企业用工合规与规避劳工仲裁的关键。

![柬埔寨法定节假日与带薪年休假合规核算标准](/blog/cambodia-holidays.jpg)
*图 1：节假日双倍工资法定标准、遇休调休机制及工龄年休假递增规则。*

---

## 2. 法定节假日强制 200%（2.0倍双倍工资）标准

根据《柬埔寨王国劳工法》*第 161 条*，在政府法定公共假日期间安排员工加班出勤的，雇主必须按照正常标准时薪的 **200%（即 2.0 倍双倍工资 Double Pay）** 严格足额计发：

> 📐 **法定假日小时工资 = 标准平时基础时薪 × 2.0**

*核算实例*：若员工平时基础时薪为 **$2.50 美元/小时**，在亡人节或柬新年期间出勤，白班工时即按 **$5.00 美元/小时** 计发；若工作延展至夜班时段（**22:00 – 次日 06:00**），还需叠加计算法定夜班津贴。

---

## 3. 遇周末公休日之补休调休机制

若法定公共假期恰逢员工原本排定的每周休息日（通常为周日），雇主依法应顺延安排工作日补休一天，或依法全额发放 2.0 倍出勤补偿金。

---

## 4. 法定带薪年休假累加规则

《柬埔寨劳工法》*第 166 条* 针对全职员工带薪年休假作出了明确规范：

- **基准带薪年假**：全职雇员每连续工作满 1 个月，享有 **1.5 天带薪年假**（即每年标准享有 **18 个工作日** 全薪年假）。
- **工龄累进奖励年假**：员工在同一企业连续工作**每满 3 年**，每年在法定 18 天基准上**额外递增 1 天**带薪年假。

| 员工连续在职年限 | 法定每年全薪年休假天数 | 计提计算法则 |
| :--- | :--- | :--- |
| **在职 1 – 3 年** | **18 天** | 基础 1.5 天 / 月 |
| **在职 4 – 6 年** | **19 天** | 基准 18 天 + 1 天工龄奖励 |
| **在职 7 – 9 年** | **20 天** | 基准 18 天 + 2 天工龄奖励 |
| **在职 10 年及以上** | **21+ 天递增** | 每满 3 年继续累加 1 天 |

---

## 5. AttendKH 节假日薪酬全自动化引擎

AttendKH 完全省去了繁琐的手动翻查日历与纸质加班单核算流程：

1. **自动套用 2.0 倍乘数**：系统自动同步官方放假通令，对 [AttendKH GPS 与防伪自拍打卡](/attendance) 记录自动匹配 **2.0 倍** 加班乘数。
2. **手机端实时请假与余额管理**：员工在 [AttendKH 移动端应用](/downloads) 内清晰查阅剩余年假额度、在线发起休假申请并上传医生病假证明。
3. **全面打通社保与工龄金**：节日考勤工时直接关联至 [NSSF 柬埔寨社保申报系统](/blog/cambodian-labor-law-overtime-payroll-and-nssf-guide) 与 [半年度工龄补偿金 (Seniority Pay) 动态计提中台](/blog/cambodian-seniority-indemnity-calculation-guide-udc-fdc)。

立即实现节假日薪酬与带薪休假全流程合规！了解 [每位员工每月仅 $1 的全功能定价](/pricing)，或联系金边团队 [预约免费 1 对 1 演示](/contact)。`,
    cover_image: "/blog/cambodia-holidays.jpg",
    author_name: "Chhunsour Seng",
    author_role: "Product Builder",
    author_role_km: "អ្នកបង្កើតផលិតផល",
    author_role_zh: "产品架构师",
    author_avatar: "/avatars/chhunsour.png",
    category: "Labor Law",
    category_km: "ច្បាប់ការងារ",
    category_zh: "劳工法规",
    tags: ["Labor Law", "Public Holidays", "Annual Leave", "Pchum Ben", "Khmer New Year"],
    tags_km: ["ច្បាប់ការងារ", "បុណ្យជាតិ", "ឈប់សម្រាកប្រចាំឆ្នាំ", "ភ្ជុំបិណ្ឌ", "ចូលឆ្នាំខ្មែរ"],
    tags_zh: ["劳工法规", "法定假日", "带薪年假", "亡人节", "柬埔寨新年"],
    status: "published",
    published_at: "2026-08-18T11:15:00Z",
    scheduled_at: null,
    seo_title: "Cambodian Public Holidays & Paid Leave Regulations — AttendKH",
    seo_description:
      "Complete guide to Cambodian public holidays (Pchum Ben, Khmer New Year, Water Festival), 200% overtime pay, and seniority pay calculations.",
    og_image: "/blog/cambodia-holidays.jpg",
    view_count: 1420,
    created_at: "2026-08-18T11:15:00Z",
    updated_at: "2026-08-18T11:15:00Z",
  },
  {
    id: "post-construction-workforce",
    slug: "remote-workforce-attendance-construction-logistics-cambodia",
    title: "Remote Workforce Management: Tracking Attendance on Construction Sites & Logistics Fleets",
    title_km: "ការគ្រប់គ្រងកម្លាំងពលកម្មពីចម្ងាយ៖ ការតាមដានវត្តមាននៅការដ្ឋានសំណង់ និងក្រុមការងារដឹកជញ្ជូននៅកម្ពុជា",
    title_zh: "远程与分散劳动力管理：柬埔寨建筑工地与物流车队实地考勤追踪方案",
    excerpt:
      "How site supervisors and logistics dispatchers verify remote crews across provinces, manage offline clock-ins in low-connectivity areas, and automate equipment operator overtime.",
    excerpt_km:
      "របៀបដែលប្រធានការដ្ឋាន និងអ្នកគ្រប់គ្រងផ្នែកដឹកជញ្ជូនផ្ទៀងផ្ទាត់បុគ្គលិកតាមបណ្តាខេត្ត គ្រប់គ្រងការចុះវត្តមានក្រៅបណ្តាញ (Offline) ក្នុងតំបន់គ្មានសេវាអ៊ីនធឺណិត និងគណនាប្រាក់ថែមម៉ោងស្វ័យប្រវត្តិ។",
    excerpt_zh:
      "项目总监与物流调度员如何跨省核验异地作业人员、处理弱网或无网络离线打卡，并自动核算重型机械操作工的加班工时。",
    content: `## 1. Overcoming Remote Workforce Attendance Challenges

Operating construction infrastructure projects in Siem Reap, deep-sea port facilities in Sihanoukville, national highway corridors between Phnom Penh and Bavet, and agricultural plantations across Battambang presents distinct operational hurdles:

- **Unstable Cellular Connectivity**: Remote work zones frequently suffer from 3G/4G dead zones, rendering cloud-dependent systems useless.
- **High Subcontractor Mobility**: Heavy equipment operators, steel fixers, and delivery dispatchers rotate across multiple job sites throughout the work week.
- **Biometric Sensor Degradation**: Cement dust, hydraulic oil, and heavy manual labor wear down fingerprint ridges, resulting in a **35%+ hardware rejection rate**.

![Construction and Logistics Remote Workforce Attendance in Cambodia](/blog/construction-workforce.jpg)
*Figure 1: Field supervisors verifying remote construction crews and logistics operators via offline GPS and mobile selfie check-ins.*

---

## 2. The AttendKH Offline Field Protocol

To ensure 100% timecard integrity regardless of internet availability, the [AttendKH Field Attendance Solution](/solutions/construction-logistics) operates on an offline-first architecture:

1. **Encrypted Offline Mode**: Workers clock in directly on the supervisor's tablet kiosk or their own smartphone via the [AttendKH Mobile App](/downloads). High-accuracy GPS coordinates and tamper-proof timestamps are cryptographically cached on the local device.
2. **Automatic Background Cloud Sync**: The instant the device re-enters 4G cellular range or connects to a field trailer Wi-Fi hotspot, punches upload immediately to headquarters.
3. **Kiosk Group Punching (50 Workers in <3 Mins)**: Site engineers can utilize shared tablet kiosk mode to verify entire concrete or framing subcontractors with facial photos in under 180 seconds.

> • **Offline Flow: Local Hardware Encryption -> Zero Data Loss -> Auto Cloud Sync on Reconnect**
> Anti-Fraud: Dual Front-Camera Live Selfie + Anti-Mock GPS Geospatial Bounds

---

## 3. Streamlining Equipment Operator & Driver Overtime

Under Cambodian labor regulations, logistics and heavy civil operators working overtime beyond 8 hours require [1.5× regular daytime and 2.0× night differential compensation](/blog/cambodian-labor-law-overtime-payroll-and-nssf-guide).

By integrating field clock-ins directly into the [AttendKH Automated Payroll Engine](/payroll):
- **Overtime calculations automate instantly** without paper timecard transcription errors.
- **Cross-branch dispatch visibility** tracks drivers traveling between regional depots on the [Central Multi-Branch Dashboard](/multi-branch).
- **Subcontractor dispute claims drop to zero** backed by verifiable GPS audit trails and photo evidence.

> *"On our infrastructure projects in Kampot, AttendKH eliminated weekly timesheet disputes with subcontractors entirely. The offline capability worked flawlessly in mountain cut passes."* — **Sopheap Chan**, Head of Product

Ready to digitize your remote construction sites or logistics fleet? Explore our [All-in-One $1/employee/month plan](/pricing), check out our [construction and logistics solution details](/solutions/construction-logistics), or [book a field trial with our Phnom Penh engineering team](/contact).`,
    content_km: `## ១. ដំណោះស្រាយបញ្ហាប្រឈមនៃវត្តមាននៅតំបន់ដាច់ស្រយាល

ការគ្រប់គ្រងគម្រោងការដ្ឋានសំណង់នៅសៀមរាប កំពង់ផែសមុទ្រទឹកជ្រៅនៅក្រុងព្រះសីហនុ ផ្លូវល្បឿនលឿនរវាងភ្នំពេញ-បាវិត និងចម្ការកសិឧស្សាហកម្មនៅបាត់ដំបង ជួបប្រទះបញ្ហាប្រឈមប្រតិបត្តិការធំៗ៖

- **សេវាទូរស័ព្ទមិនស្ថិតស្ថេរ**៖ តំបន់ការដ្ឋានឆ្ងាយៗតែងតែដាច់សេវា 3G/4G ដែលធ្វើឱ្យប្រព័ន្ធដែលពឹងលើអ៊ីនធឺណិតមិនអាចដំណើរការបាន។
- **កម្លាំងពលកម្មមានការផ្លាស់ប្តូរទីតាំងច្រើន**៖ អ្នកបញ្ជាគ្រឿងចក្រធុនធ្ងន់ និងក្រុមការងារម៉ៅការបន្តត្រូវផ្លាស់ប្តូរទីតាំងការដ្ឋានជាបន្តបន្ទាប់ពេញមួយសប្តាហ៍។
- **ស្នាមម្រាមដៃសឹក ឬប្រឡាក់**៖ ធូលីស៊ីម៉ង់ត៍ ប្រេងម៉ាស៊ីន និងការងារធ្ងន់ៗធ្វើឱ្យស្នាមម្រាមដៃសឹក ដែលបណ្តាលឱ្យ **អត្រាមិនស្គាល់ស្នាមមេដៃកើនឡើងលើសពី ៣៥%** លើម៉ាស៊ីនស្កេនបែបចាស់។

![ការគ្រប់គ្រងវត្តមានការដ្ឋានសំណង់ និងភស្តុភារកម្មនៅកម្ពុជា](/blog/construction-workforce.jpg)
*រូបភាពទី ១៖ ប្រធានការដ្ឋានផ្ទៀងផ្ទាត់វត្តមានកម្មករសំណង់ និងអ្នកបើកបរតាមរយៈប្រព័ន្ធ GPS Offline និងការថតរូប Selfie*

---

## ២. ពិធីការគ្រប់គ្រងការដ្ឋានសំណង់បែប Offline របស់ AttendKH

ដើម្បីធានាភាពសុក្រឹតនៃម៉ោងធ្វើការ [ដំណោះស្រាយវត្តមានការដ្ឋានសំណង់ និងភស្តុភារកម្មរបស់ AttendKH](/solutions/construction-logistics) ដំណើរការលើប្រព័ន្ធ Offline-first៖

១. **មុខងារ Offline ពេញលេញ**៖ កម្មករអាចចុះវត្តមានលើទូរស័ព្ទរបស់ប្រធានការដ្ឋាន ឬលើទូរស័ព្ទផ្ទាល់ខ្លួនតាមរយៈ [កម្មវិធីទូរស័ព្ទ AttendKH](/downloads)។ ត្រាពេលវេលា និងកូអរដោនេ GPS ត្រូវបានរក្សាទុកដោយសុវត្ថិភាពក្នុងឧបករណ៍។
២. **សមកាលកម្មទិន្នន័យស្វ័យប្រវត្តិ**៖ នៅពេលឧបករណ៍ចាប់បានសេវា 4G ឬ Wi-Fi ទិន្នន័យវត្តមាននឹងត្រូវបានបញ្ជូនភ្លាមៗទៅកាន់ការិយាល័យកណ្តាល។
៣. **ការចុះវត្តមានជាក្រុម (៥០ នាក់ ក្នុងរយៈពេល <៣ នាទី)**៖ វិស្វករការដ្ឋានអាចប្រើមុខងារ Kiosk លើ Tablet ដើម្បីផ្ទៀងផ្ទាត់កម្មករម៉ៅការបន្តរហូតដល់ ៥០ នាក់ ជាមួយរូបថតជាក់ស្តែង។

> • **ដំណើរការ Offline៖ អ៊ិនគ្រីបលើឧបករណ៍ផ្ទាល់ -> គ្មានការបាត់បង់ទិន្នន័យ -> សមកាលកម្មស្វ័យប្រវត្តិកាលណាមានសេវា**
> ការទប់ស្កាត់ការក្លែងបន្លំ៖ ថតរូប Selfie ផ្ទាល់ពីកាមេរ៉ាមុខ + ប្រព័ន្ធទប់ស្កាត់ Mock GPS

---

## ៣. ភាពងាយស្រួលក្នុងការគណនាប្រាក់ថែមម៉ោងអ្នកបើកបរ និងគ្រឿងចក្រ

យោងតាមច្បាប់ការងារកម្ពុជា ការងារថែមម៉ោងលើសពី ៨ ម៉ោង ត្រូវទទួលបាន [អត្រា ១.៥ ដង និង ២.០ ដង សម្រាប់វេនយប់](/blog/cambodian-labor-law-overtime-payroll-and-nssf-guide)។

តាមរយៈការភ្ជាប់ទិន្នន័យវត្តមានពីការដ្ឋានដោយផ្ទាល់ទៅកាន់ [ប្រព័ន្ធគណនាប្រាក់ខែស្វ័យប្រវត្តិ AttendKH](/payroll)៖
- **ការគណនាប្រាក់ថែមម៉ោងដំណើរការស្វ័យប្រវត្តិ** ដោយគ្មានកំហុសចម្លងតួលេខ។
- **តាមដានការដឹកជញ្ជូនឆ្លងខេត្ត** តាមរយៈ [ផ្ទាំងគ្រប់គ្រងពហុសាខាកណ្តាល](/multi-branch)។
- **លុបបំបាត់ទំនាស់ម៉ោងធ្វើការជាមួយអ្នកម៉ៅការបន្ត** ដោយមានភស្តុតាង GPS និងរូបថតជាក់ស្តែង។

> *"នៅលើគម្រោងហេដ្ឋារចនាសម្ព័ន្ធរបស់យើងក្នុងខេត្តកំពត AttendKH បានជួយលុបបំបាត់ទំនាស់ប្រាក់ឈ្នួលជាមួយអ្នកម៉ៅការបន្តទាំងស្រុង។ មុខងារ Offline ដំណើរការយ៉ាងរលូនទោះបីនៅក្នុងតំបន់ភ្នំគ្មានសេវាក៏ដោយ។"* — **Sopheap Chan**, ប្រធានផ្នែកផលិតផល

ត្រៀមខ្លួនធ្វើទំនើបកម្មការដ្ឋានសំណង់ ឬក្រុមដឹកជញ្ជូនរបស់អ្នកហើយឬនៅ? ពិនិត្យមើល [តម្លៃសមរម្យ $១/នាក់/ខែ](/pricing) ព័ត៌មានលម្អិត [ដំណោះស្រាយសំណង់ និងភស្តុភារកម្ម](/solutions/construction-logistics) ឬ [កក់ការសាកល្បងដោយឥតគិតថ្លៃនៅភ្នំពេញ](/contact)។`,
    content_zh: `## 1. 攻克偏远项目与分散作业的考勤管理瓶颈

在暹粒的文旅工程项目、西哈努克港的海滨基础设施、金边至巴域的跨国物流干线以及马德望的大型农业种植园中，企业面临着极为特殊的现场管理痛点：

- **现场网络信号不稳定**：偏远项目现场经常发生蜂窝网络掉线或进入信号盲区，严重依赖网络的系统直接瘫痪。
- **人员流动性与跨工区调度频繁**：重型机械操作手、专业钢筋工与劳务分包施工队在多个作业面之间动态轮换。
- **高强度体力作业致使指纹严重磨损**：建筑水泥砂浆与机械机油极易腐蚀指纹，传统光学指纹机**年均无法识别率高达 35% 以上**。

![柬埔寨工程建筑与物流车队远程考勤系统](/blog/construction-workforce.jpg)
*图 1：项目总监与物流调度员通过弱网离线打卡与自拍防伪高效监管跨省分散用工。*

---

## 2. AttendKH 专为工地打造的离线打卡作业规范

为了在无网络环境下依然确保 100% 工时真实可信，[AttendKH 建筑与物流行业考勤中台](/solutions/construction-logistics) 基于离线优先底层架构设计：

1. **高强度加密离线打卡**：工人在现场工长手机的“流动考勤机模式”或个人手机上通过 [AttendKH 移动端应用](/downloads) 完成自拍打卡，经纬度与防篡改时间戳在手机本地加密存储。
2. **恢复网络后后台无感自动同步**：一旦手机重新进入 4G 信号区或连接工地 Wi-Fi 热点，暂存的全部打卡流水立即无损上传至总部云端数据库。
3. **分包施工队极速扫码群打卡（3分钟核验50人）**：现场工程师可启用平板 Kiosk 模式，3 分钟内即可完成整支钢筋或泥瓦分包作业班组的自拍防伪与工时核验。

> • **离线闭环：本地芯片级加密暂存 -> 零数据遗失 -> 联网后毫秒级静默自动对账**
> 防作弊核验：前置摄像头实时自拍防伪 + 底层反 Mock GPS 虚拟定位穿透拦截

---

## 3. 机械机手与干线司机加班费自动化核算

依据柬埔寨劳工法规，物流长途司机与重机操作手超出 8 小时的连续作业，必须严格按照 [平时 1.5 倍及夜班 2.0 倍法定津贴标准](/blog/cambodian-labor-law-overtime-payroll-and-nssf-guide) 计发。

通过将野外考勤数据直通 [AttendKH 自动化薪酬中台](/payroll)：
- **加班工时与补贴自动精准折算**，彻底告别工地手写纸质派工单的涂改争议。
- **跨省车队调拨与出勤轨迹一览无余**，依托 [总部多分支管理看板](/multi-branch) 实施可视化调度。
- **劳务分包对账纠纷彻底归零**，每一笔工时出勤均具备高精度 GPS 经纬度与现场高清自拍双重证据链。

> *“在我们在贡布（Kampot）的基础设施工程中，AttendKH 彻底终结了与劳务分包队之间的出勤扯皮现象，山区无信号路段的离线打卡表现极其惊艳。”* —— **Sopheap Chan**, 资深产品总监

立即开启分散劳动力数字化管理升级！了解 [每位员工每月仅 $1 的高性价比方案](/pricing)、查阅 [建筑工程与物流专属解决方案](/solutions/construction-logistics)，或联系金边工程师团队 [预约实地免息试用](/contact)。`,
    cover_image: "/blog/construction-workforce.jpg",
    author_name: "Chhunsour Seng",
    author_role: "Product Builder",
    author_role_km: "អ្នកបង្កើតផលិតផល",
    author_role_zh: "产品架构师",
    author_avatar: "/avatars/chhunsour.png",
    category: "Attendance",
    category_km: "វត្តមាន",
    category_zh: "考勤管理",
    tags: ["Attendance", "Construction", "Logistics", "Offline Mode", "Multi-Branch"],
    tags_km: ["វត្តមាន", "សំណង់", "ដឹកជញ្ជូន", "គ្មានអ៊ីនធឺណិត", "ពហុសាខា"],
    tags_zh: ["考勤管理", "工程建筑", "物流车队", "离线打卡", "多分支管理"],
    status: "published",
    published_at: "2026-08-14T07:45:00Z",
    scheduled_at: null,
    seo_title: "Remote Workforce Attendance for Construction & Logistics in Cambodia — AttendKH",
    seo_description:
      "Streamline time tracking on remote construction sites and delivery fleets across Cambodia with offline GPS logging and selfie verification.",
    og_image: "/blog/construction-workforce.jpg",
    view_count: 1150,
    created_at: "2026-08-14T07:45:00Z",
    updated_at: "2026-08-14T07:45:00Z",
  },
  ...extendedBlogPosts,
];

export const legalDocuments: Record<string, LegalDocument> = {
  privacy: {
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

### A. Employee Profile & Authentication Identifiers
When an employer registers an employee profile on AttendKH, or when you complete your employee mobile onboarding, we process:
- **Full Legal Name & Display Name**
- **Employee Identification Number (Staff ID)**
- **Authentication Contact Identifiers (Phone Number or Email)**: **At least ONE contact identifier (either a valid Phone Number for SMS/Telegram OTP verification OR a verified Email Address for magic links/OTP) is strictly required** to authenticate your account and receive secure login codes. Providing both contact methods is optional.
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

### D. Device Model, Hardware Authorization & Anti-Fraud Telemetry
To ensure mobile app security, authenticate authorized devices, and prevent multi-phone buddy punching or falsified check-ins, the mobile app collects:
- **Device Model & Manufacturer** (e.g., Apple iPhone 15 Pro, Samsung Galaxy S24, Xiaomi 13): Used to bind your employee profile to your authorized workplace device and prevent ghost clock-ins across unauthorized secondary phones.
- **Operating System & Version** (e.g., iOS 17.4, Android 14): Used for compatibility, security patching, and app stability.
- **Unique App Instance Identifier (UUID)** and hardware installation token.
- **Network State & IP Address**: Used to detect proxy evasion and ensure safe transmission.
- **Crash Reports & Diagnostics**: Non-identifying error stack traces used exclusively to resolve software bugs.

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
- Alternatively, you can submit an individual deletion request directly to our Data Protection Officer by emailing **[privacy@MPG_by_ongphaly.com](mailto:privacy@MPG_by_ongphaly.com)** with the subject line *"Employee Data Deletion Request"*. Include your registered phone number, organization name, and Staff ID.
- Upon receiving verified confirmation from your employer or upon account deactivation, all personal authentication tokens, biometric selfie photos, and device identifiers associated with your profile will be permanently deleted from active databases within **30 calendar days**.

### For Organizations & Business Owners:
- Organization administrators can request complete deletion of their enterprise account, all branch geofences, staff profiles, attendance logs, and payroll records by emailing **[privacy@MPG_by_ongphaly.com](mailto:privacy@MPG_by_ongphaly.com)** from the verified owner's corporate email address or via the Admin Dashboard.
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

To exercise any of these rights, please contact your employer's HR team or contact our privacy team at **[privacy@MPG_by_ongphaly.com](mailto:privacy@MPG_by_ongphaly.com)**.

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
- **Email**: [privacy@MPG_by_ongphaly.com](mailto:privacy@MPG_by_ongphaly.com)
- **General Support**: [support@MPG_by_ongphaly.com](mailto:support@MPG_by_ongphaly.com)
- **Official Telegram Hotline**: [@MPG_by_ongphaly](https://t.me/MPG_by_ongphaly)
- **Phone Hotline**: +855 23 999 888
- **Operating Hours**: Monday to Saturday, 8:00 AM – 6:00 PM (ICT / UTC+7)
- **Physical Address**: Phnom Penh, Kingdom of Cambodia`,
    title_km: "គោលការណ៍ភាពឯកជន និងស្តង់ដារអភិបាលកិច្ចទិន្នន័យ",
    title_zh: "隐私政策与劳动力数据治理规范",
    content_km: `## ១. សេចក្តីផ្តើម និងទិដ្ឋភាពទូទៅ

AttendKH ("យើង", "ពួកយើង" ឬ "AttendKH") ប្តេជ្ញាចិត្តយ៉ាងម៉ឺងម៉ាត់ក្នុងការការពារឯកជនភាព ការសម្ងាត់ និងសិទ្ធិការពារទិន្នន័យផ្ទាល់ខ្លួនរបស់ស្ថាប័ន និយោជក និងបុគ្គលិកទាំងអស់នៅក្នុងព្រះរាជាណាចក្រកម្ពុជា និងតំបន់ប្រតិបត្តិការអន្តរជាតិ។

គោលការណ៍ភាពឯកជននេះពន្យល់អំពីរបៀបដែល AttendKH ប្រមូល ប្រើប្រាស់ ដំណើរការ រក្សាទុក និងការពារទិន្នន័យផ្ទាល់ខ្លួន នៅពេលអ្នក៖
- ប្រើប្រាស់កម្មវិធីទូរស័ព្ទដៃរបស់យើងសម្រាប់ iOS (Apple App Store) និង Android (Google Play Store);
- ប្រើប្រាស់មុខងារ QR Kiosk នៅលើ Tablet រួមសម្រាប់ស្កេនវត្តមាន;
- ចូលប្រើផ្ទាំងគ្រប់គ្រងគេហទំព័រ (Admin & Manager Portal);
- ភ្ជាប់ជាមួយប្រព័ន្ធ Telegram Bot សម្រាប់ការជូនដំណឹងស្វ័យប្រវត្តិ;
- ចូលមើលគេហទំព័រផ្លូវការរបស់យើងនៅ [attendkh.com](https://attendkh.com)។

---

## ២. តួនាទី និងការទទួលខុសត្រូវ៖ អ្នកគ្រប់គ្រងទិន្នន័យ (Data Controller) និងអ្នកដំណើរការទិន្នន័យ (Data Processor)

ដើម្បីធានាតម្លាភាព និងអនុលោមតាមស្តង់ដារការពារទិន្នន័យ (រួមទាំងគោលការណ៍ GDPR និងបទប្បញ្ញត្តិនៃច្បាប់កម្ពុជា)៖

- **និយោជក / ស្ថាប័នរបស់អ្នក (Data Controller)**៖ ក្រុមហ៊ុន ឬអង្គភាពដែលជួលអ្នក គឺជាអ្នកគ្រប់គ្រងទិន្នន័យ។ និយោជករបស់អ្នកជាអ្នកកំណត់បុគ្គលិកដែលត្រូវចុះឈ្មោះ កំណត់ទីតាំងរង្វង់សាខា (Geofencing) រៀបចំវេនការងារ អនុម័តវត្តមាន និងកំណត់ច្បាប់គណនាប្រាក់បៀវត្សរ៍។
- **AttendKH (Data Processor / Service Provider)**៖ AttendKH ដើរតួជាអ្នកដំណើរការទិន្នន័យ ស្របតាមកិច្ចសន្យា និងការណែនាំរបស់និយោជករបស់អ្នក។ យើងផ្តល់នូវហេដ្ឋារចនាសម្ព័ន្ធ Cloud ប្រកបដោយសុវត្ថិភាព ក្បួនដោះស្រាយផ្ទៀងផ្ទាត់វត្តមាន ប្រព័ន្ធគណនាប្រាក់ខែស្របតាមច្បាប់ការងារកម្ពុជា និងការផ្ទុកទិន្នន័យដែលបានអ៊ិនគ្រីប។

---

## ៣. ប្រភេទនៃទិន្នន័យដែលត្រូវបានប្រមូល

### ក. ទិន្នន័យអត្តសញ្ញាណ និងព័ត៌មានទំនាក់ទំនងសម្រាប់ Login
នៅពេលនិយោជកចុះឈ្មោះបុគ្គលិក ឬនៅពេលអ្នកចូលប្រើកម្មវិធីទូរស័ព្ទ យើងដំណើរការ៖
- **ឈ្មោះពេញ និងឈ្មោះបង្ហាញ**
- **លេខសម្គាល់បុគ្គលិក (Staff ID)**
- **ព័ត៌មានទំនាក់ទំនងសម្រាប់ផ្ទៀងផ្ទាត់ (លេខទូរស័ព្ទ ឬ អ៊ីមែល)**៖ **តម្រូវឱ្យមានយ៉ាងហោចណាស់មួយ (លេខទូរស័ព្ទសម្រាប់ទទួលលេខកូដ OTP តាម SMS/Telegram ឬ អ៊ីមែលសម្រាប់ Sign-in)** ដើម្បីផ្ទៀងផ្ទាត់គណនីរបស់អ្នកប្រកបដោយសុវត្ថិភាព។ ការផ្តល់ព័ត៌មានទាំងពីរជាជម្រើស។
- **សាខាការងារ និងតួនាទី**៖ ផ្នែក ក្រុមការងារ តួនាទី និងអ្នកគ្រប់គ្រងផ្ទាល់
- **រចនាសម្ព័ន្ធប្រាក់ឈ្នួល**៖ ប្រាក់ខែគោល ប្រាក់ថែមម៉ោង (Overtime) និងប្រភេទរបបសន្តិសុខសង្គម ប.ស.ស (NSSF) សម្រាប់តែការគណនាប្រាក់ខែស្វ័យប្រវត្តិតែប៉ុណ្ណោះ

### ខ. ទីតាំង GPS នៅពេលចុះវត្តមានជាក់ស្តែង (Point-in-Time GPS)
ដើម្បីផ្ទៀងផ្ទាត់ថាបុគ្គលិកពិតជាមានវត្តមាននៅសាខាការងារដែលបានកំណត់៖
- **ពិនិត្យតែនៅវិនាទីចុះវត្តមាន (Point-in-Time Only)**៖ កូអរដោនេទីតាំងត្រូវបានកត់ត្រា **តែនៅវិនាទីដែលអ្នកចុចប៊ូតុងចុះវត្តមាន (Clock In/Out)** តែប៉ុណ្ណោះ។
- **គ្មានការតាមដាន ២៤ម៉ោងជាប់ឡើយ (Zero 24/7 Tracking)**៖ AttendKH **មិនដែល** តាមដានផ្លូវធ្វើដំណើរ ឬទីតាំងរបស់អ្នកក្រៅម៉ោងធ្វើការឡើយ។ នៅពេលបិទកម្មវិធី Sensor ទីតាំងបិទដំណើរការទាំងស្រុង។
- **ការផ្ទៀងផ្ទាត់រង្វង់សាខា (Geofence Radius)**៖ ប្រព័ន្ធពិនិត្យកូអរដោនេធៀបនឹងរង្វង់សាខា (៥០ ទៅ ៣០០ ម៉ែត្រ) ដើម្បីបញ្ជាក់ថាស្ថិតនៅក្នុង ឬក្រៅរង្វង់។
- **ការទប់ស្កាត់ការក្លែងបន្លំទីតាំង (Anti-Spoofing)**៖ កម្មវិធីមានប្រព័ន្ធការពារការប្រើប្រាស់ Fake GPS ឬ Mock Location ដើម្បីធានានូវភាពត្រឹមត្រូវនៃទិន្នន័យ។

### គ. ការថតរូប Selfie ផ្ទៀងផ្ទាត់ផ្ទាល់
ដើម្បីការពារការចុះវត្តមានជំនួសគ្នា (Buddy Punching)៖
- **រូបថត Selfie ផ្ទាល់**៖ កម្មវិធីថតរូបភាពមួយសន្លឹកតាមកាមេរ៉ាមុខនៅពេលចុចចុះវត្តមាន។
- **Watermark សម្ងាត់**៖ រូបថតត្រូវបានបោះត្រាដោយស្វ័យប្រវត្តិនូវកាលបរិច្ឆេទ ម៉ោង និងទីតាំង ដើម្បីការពារការកែច្នៃ។
- **ការរក្សាការសម្ងាត់**៖ រូបថតអាចមើលឃើញតែដោយអ្នកគ្រប់គ្រង និងផ្នែក HR របស់ក្រុមហ៊ុនអ្នកប៉ុណ្ណោះ។
- **ដាច់ខាតមិនលក់ ឬយកទៅបណ្តុះបណ្តាល AI ខាងក្រៅឡើយ**។

### ឃ. ម៉ូដែលទូរស័ព្ទ និងការចាក់សោសុវត្ថិភាពឧបករណ៍ (Device Model)
ដើម្បីធានាសុវត្ថិភាព និងការពារការចុះឈ្មោះលើទូរស័ព្ទច្រើនក្លែងបន្លំ៖
- **ម៉ូដែលទូរស័ព្ទ និងក្រុមហ៊ុនផលិត** (ឧ. Apple iPhone 15, Samsung Galaxy S24)
- **ប្រព័ន្ធប្រតិបត្តិការ និងកំណែ** (iOS, Android)
- **លេខកូដសម្គាល់កម្មវិធី (UUID)** សម្រាប់ចាក់សោឧបករណ៍តែមួយ (Single-Device Lock)

### ង. ការចុះវត្តមានពេលគ្មានអ៊ីនធឺណិត (Offline Mode)
- រក្សាទុកទិន្នន័យម៉ោង កូអរដោនេ និងរូបថតក្នុងទូរស័ព្ទដោយអ៊ិនគ្រីប (Encrypted Sandbox) ហើយធ្វើសមកាលកម្មដោយស្វ័យប្រវត្តិតាម Cloud នៅពេលមានសេវាអ៊ីនធឺណិតឡើងវិញ។

---

## ៤. តារាងសិទ្ធិប្រើប្រាស់លើកម្មវិធីទូរស័ព្ទ (App Store & Google Play)

| សិទ្ធិប្រើប្រាស់ | កម្រិតសុវត្ថិភាព | គោលបំណងច្បាស់លាស់ | ការគ្រប់គ្រងរបស់អ្នកប្រើ |
| :--- | :--- | :--- | :--- |
| **ទីតាំង (Location)** | សំខាន់ (Sensitive) | ផ្ទៀងផ្ទាត់វត្តមានក្នុងរង្វង់សាខាតែនៅពេលចុច Clock-in | ជ្រើសរើស "ពេលកំពុងប្រើកម្មវិធី" |
| **កាមេរ៉ា (Camera)** | សំខាន់ (Sensitive) | ថតរូប Selfie ការពារការចុះវត្តមានជំនួស | ដំណើរការតែពេលចុចចុះវត្តមាន |
| **អង្គចងចាំ (Storage)** | ទូទៅ (Standard) | រក្សាទុកទិន្នន័យពេលគ្មានអ៊ីនធឺណិត | គ្រប់គ្រងដោយប្រព័ន្ធ Sandbox |
| **ការជូនដំណឹង (Notifications)** | ជម្រើស (Optional) | ផ្ញើសាររំលឹកវេនការងារ និងការអនុម័តច្បាប់ | អាចបិទបើកបានគ្រប់ពេល |

---

## ៥. គោលបំណងនៃការប្រើប្រាស់ទិន្នន័យ

យើងប្រើប្រាស់ទិន្នន័យសម្រាប់តែគោលបំណងការងារស្របច្បាប់ប៉ុណ្ណោះ៖
1. **ផ្ទៀងផ្ទាត់វត្តមានជាក់ស្តែង** លើទីតាំងការងារដែលបានអនុញ្ញាត។
2. **ការពារការក្លែងបន្លំ** តាមរយៈរូបថត Selfie និងប្រព័ន្ធ Mock GPS Detection។
3. **គណនាប្រាក់បៀវត្សរ៍កម្ពុជាស្វ័យប្រវត្តិ** រួមទាំងម៉ោងបន្ថែម (១.៥ដង និង ២.០ដង) និងការកាត់ប្រាក់យឺតយ៉ាវតាមគោលការណ៍។
4. **អនុលោមតាមច្បាប់ការងារ** និងរបបសន្តិសុខសង្គម ប.ស.ស (NSSF)។
5. **ទំនាក់ទំនង និងការជូនដំណឹង** តាមរយៈ Telegram Bot និង Push Notification។

---

## ៦. មូលដ្ឋានច្បាប់នៃការដំណើរការទិន្នន័យ

- **កាតព្វកិច្ចកិច្ចសន្យា**៖ ដើម្បីផ្តល់សេវាកម្មស្របតាមកិច្ចព្រមព្រៀងជាមួយនិយោជករបស់អ្នក។
- **ការអនុលោមតាមច្បាប់ការងារកម្ពុជា**៖ តម្រូវការរក្សាទុកកំណត់ត្រាម៉ោងធ្វើការ ម៉ោងបន្ថែម និងភាគទាន ប.ស.ស។
- **ផលប្រយោជន៍ស្របច្បាប់**៖ ការពារទ្រព្យសម្បត្តិស្ថាប័ន និងធានានូវភាពត្រឹមត្រូវនៃប្រាក់បៀវត្សរ៍។

---

## ៧. សុវត្ថិភាពទិន្នន័យ និងស្ថាបត្យកម្មអ៊ិនគ្រីប

- **អ៊ិនគ្រីបពេលបញ្ជូន**៖ ប្រើប្រាស់ **TLS 1.3 / HTTPS** ជាមួយបច្ចេកវិទ្យាទំនើប។
- **អ៊ិនគ្រីបពេលរក្សាទុក**៖ ទិន្នន័យទាំងអស់ រូបថត និងប្រព័ន្ធ Backup ត្រូវបានអ៊ិនគ្រីបកម្រិត **AES-256**។
- **ការគ្រប់គ្រងសិទ្ធិ (RBAC)**៖ បែងចែកសិទ្ធិច្បាស់លាស់តាមតួនាទី (Super Admin, HR, Branch Manager, Employee)។
- **Audit Logs**៖ រាល់ការកែប្រែទិន្នន័យម៉ោងធ្វើការមានកំណត់ត្រាត្រួតពិនិត្យច្បាស់លាស់។
- **Multi-Tenant Isolation**៖ ទិន្នន័យស្ថាប័ននីមួយៗត្រូវបានបំបែកដាច់ដោយឡែកពីគ្នា។

---

## ៨. គោលការណ៍លុបគណនី និងទិន្នន័យ (Account & Data Deletion)

AttendKH ផ្តល់យន្តការច្បាស់លាស់ និងងាយស្រួលក្នុងការស្នើសុំលុបគណនី និងទិន្នន័យផ្ទាល់ខ្លួន៖
- **សម្រាប់បុគ្គលិក**៖ អ្នកអាចស្នើសុំតាមរយៈ HR ក្រុមហ៊ុនរបស់អ្នក ឬផ្ញើអ៊ីមែលដោយផ្ទាល់ទៅកាន់ **privacy@MPG_by_ongphaly.com** ដោយបញ្ជាក់ឈ្មោះ លេខទូរស័ព្ទ និង Staff ID។
- **រយៈពេលអនុវត្ត**៖ រាល់ទិន្នន័យផ្ទៀងផ្ទាត់ រូបថត Selfie និង token គណនីនឹងត្រូវបានលុបចេញពីប្រព័ន្ធជាស្ថាពរក្នុងរយៈពេល **៣០ ថ្ងៃ** ស្របតាមគោលការណ៍ Apple App Store និង Google Play។

---

## ៩. ការធានាមិនលក់ទិន្នន័យ (Zero-Sale Guarantee)

> **យើងដាច់ខាតមិនលក់ ជួល ឬផ្តល់ទិន្នន័យផ្ទាល់ខ្លួន ឬរូបថត Selfie របស់អ្នកទៅកាន់ក្រុមហ៊ុនផ្សាយពាណិជ្ជកម្ម ឬភាគីទីបីណាមួយឡើយ។**

---

## ១០. សិទ្ធិរបស់អ្នកជាម្ចាស់ទិន្នន័យ (Data Subject Rights)

- **សិទ្ធិពិនិត្យមើល**៖ អាចមើលប្រវត្តិវត្តមាន ម៉ោងធ្វើការ និងស្លឹកបើកប្រាក់ខែលើទូរស័ព្ទដៃផ្ទាល់។
- **សិទ្ធិកែតម្រូវ**៖ អាចស្នើសុំកែតម្រូវម៉ោងវត្តមានប្រសិនបើមានបញ្ហាបច្ចេកទេស។
- **សិទ្ធិលុបទិន្នន័យ**៖ ស្នើសុំលុបទិន្នន័យនៅពេលឈប់បម្រើការងារ។
- **សិទ្ធិនាំចេញទិន្នន័យ**៖ ទាញយករបាយការណ៍ជាទម្រង់ PDF, Excel ឬ CSV។

---

## ១១. ព័ត៌មានទំនាក់ទំនងមន្ត្រីការពារទិន្នន័យ (DPO)

- **មន្ត្រីការពារទិន្នន័យ (DPO)**៖ ក្រុមការងារអនុលោមភាព AttendKH
- **អ៊ីមែល**៖ [privacy@MPG_by_ongphaly.com](mailto:privacy@MPG_by_ongphaly.com)
- **ជំនួយទូទៅ**៖ [support@MPG_by_ongphaly.com](mailto:support@MPG_by_ongphaly.com)
- **Telegram Hotline**៖ [@MPG_by_ongphaly](https://t.me/MPG_by_ongphaly)
- **ទូរស័ព្ទ**៖ +855 23 999 888
- **អាសយដ្ឋាន**៖ រាជធានីភ្នំពេញ ព្រះរាជាណាចក្រកម្ពុជា`,
    content_zh: `## 1. 概述与适用范围

AttendKH（以下简称“我们”或“平台”）高度重视组织、雇主及其员工的隐私安全与数据保护权益。本隐私政策适用于柬埔寨及国际运营区域的所有用户。

本政策详细说明了当您进行以下操作时，平台如何收集、使用、存储及保护您的个人数据：
- 使用适用于 iOS（Apple App Store）和 Android（Google Play Store）的移动考勤应用；
- 使用平板电脑端的共享式 QR 门禁 Kiosk 模式；
- 登录企业管理后台及 HR 控制台；
- 接收 Telegram 机器人自动化考勤提醒及通知；
- 访问我们的官方网站 [attendkh.com](https://attendkh.com)。

---

## 2. 角色与权责：数据控制者 vs. 数据处理者

- **您的雇主 / 签约企业（数据控制者 Data Controller）**：雇佣您的企业为数据控制者，负责决定考勤人员名单、配置分支机构地理围栏、设置班次轮换规则及审批薪酬标准。
- **AttendKH（数据处理者 Data Processor）**：我们严格按照雇主的授权与服务协议提供安全云基础设施、瞬时考勤算法、柬埔寨劳工法薪酬引擎及高强度加密存储。

---

## 3. 移动端收集的数据类别与规范

### A. 员工身份与登录凭据信息
- **法定姓名与显示姓名**
- **员工工号（Staff ID）**
- **认证联系方式（手机号或邮箱，二选一必填）**：**必须提供至少一项联系方式（用于接收短信/Telegram 验证码的手机号，或用于接收免密登录链接的企业/个人邮箱）**以保障账户登录安全。同时提供两项为可选。
- **所属分支机构与部门岗位**
- **薪资与社保分类**：用于自动生成双币种（USD/KHR）合规工资单及柬埔寨 NSSF 社保代扣。

### B. 瞬时打卡 GPS 位置信息（拒绝全天候追踪）
- **仅在打卡瞬间核验**：仅在员工主动点击“上班/下班打卡”的 1–2 秒内调用 GPS 比对企业设定的分支机构围栏半径（50–300米）。
- **零 24/7 后台定位**：下班后或应用关闭时，定位传感器立即完全静默，绝不记录通勤路线或休息日动向。
- **防模拟定位（Anti-Spoofing）**：内置算法自动识别并拦截虚拟定位软件，确保考勤真实性。

### C. 实时自拍防代打卡核验
- **前置实时抓拍**：打卡瞬间拍摄人脸自拍照以防同事代打卡。
- **数字防伪水印**：照片自动附带时间戳、GPS 坐标与工号水印，并采用 AES-256 加密存储。
- **权限隔离**：仅授权企业 HR 审计查阅，**绝不出售或用于外部公开 AI 模型训练**。

### D. 设备型号与硬件防舞弊绑定（Device Model）
- 采集**设备品牌型号**（如 iPhone 15、Galaxy S24）及应用安装 UUID，用于唯一绑定授权考勤设备，防止多设备代打卡。

### E. 离线打卡加密队列（Offline Mode）
- 无网络环境下，打卡记录在本地安全沙盒加密缓存，待网络恢复后自动与云端核验同步。

---

## 4. 移动端权限使用披露矩阵（App Store & Google Play）

| 系统权限 | 敏感级别 | 业务使用目的 | 用户自主控制权 |
| :--- | :--- | :--- | :--- |
| **位置权限 (Location)** | 敏感 (Sensitive) | 仅在打卡瞬间比对分支机构地理围栏 | 授权“仅在使用期间允许”，无后台常驻 |
| **相机权限 (Camera)** | 敏感 (Sensitive) | 打卡时拍摄实时防伪自拍 | 仅在点击打卡时瞬时调用 |
| **本地存储 (Storage)** | 标准 (Standard) | 离线环境下沙盒加密缓存打卡数据 | 由操作系统隔离沙盒统一保护 |
| **通知推送 (Notifications)** | 可选 (Optional) | 接收排班提醒、加班通知及请假审批结果 | 可在系统设置中随时开关 |

---

## 5. 数据安全架构与加密体系

- **传输加密**：全链路采用现代 **TLS 1.3 / HTTPS** 加密协议。
- **静态存储加密**：数据库、考勤照片及备份均采用 **AES-256** 银行级加密。
- **权限控制 (RBAC)**：严格的多租户逻辑隔离与基于角色的权限划分。
- **不可篡改审计日志**：所有考勤与工时修改均保留永久操作审计链。

---

## 6. 账户注销与个人数据硬删除（30日 SLA）

- **申请途径**：员工可通过企业 HR 提交注销申请，或直接发送邮件至 **privacy@MPG_by_ongphaly.com**。
- **删除时限**：身份认证凭证、自拍照片及设备标识将在 **30 个日历日内**从生产数据库执行物理硬删除，严格符合苹果与谷歌商店规范。

---

## 7. 零出售数据承诺 (Zero-Sale Guarantee)

> **我们承诺：在任何情况下，绝不向广告商、数据经纪商或任何第三方出租、出售或商业化变现您的个人隐私或考勤数据。**

---

## 8. 数据保护官 (DPO) 联系方式

- **数据保护专员**：AttendKH 合规与安全团队
- **隐私专属邮箱**：[privacy@MPG_by_ongphaly.com](mailto:privacy@MPG_by_ongphaly.com)
- **技术支持**：[support@MPG_by_ongphaly.com](mailto:support@MPG_by_ongphaly.com)
- **Telegram 热线**：[@MPG_by_ongphaly](https://t.me/MPG_by_ongphaly)
- **电话热线**：+855 23 999 888
- **办公地点**：柬埔寨王国 金边市`,
    is_active: 1,
    changelog: "Upgraded Privacy Policy with full trilingual support (English, Khmer, Chinese), Phone/Email 1-required rule, and Device Model anti-fraud disclosures.",
    created_by: "AttendKH Compliance Team",
    created_at: "2026-09-01T00:00:00Z",
  },
  terms: {
    id: "doc-terms-v1",
    slug: "terms",
    title: "Terms of Service",
    title_km: "លក្ខខណ្ឌប្រើប្រាស់សេវាកម្ម",
    title_zh: "服务条款与企业使用规范",
    version: "1.0",
    content: `## 1. Acceptance of Terms

By accessing or utilizing the AttendKH website, mobile app, or cloud platform ("Service"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you must not access the Service.

## 2. Permitted Use
You agree to use AttendKH solely for legitimate organizational attendance, payroll calculation, shift scheduling, and product evaluation purposes. You shall not:
- Reverse-engineer, decompile, or disassemble any proprietary components of the website or mobile applications.
- Attempt unauthorized access to restricted administrative systems, multi-tenant databases, or cloud servers.
- Transmit malicious code, viruses, or disruptive network requests.
- Utilize mock GPS, fake location spoofing apps, or unauthorized automation scripts.

## 3. Subscription & Billing Content
Pricing tiers displayed on this website represent standard catalog offerings. Official enterprise service level agreements (SLAs), custom billing cycles, and contractual terms are formalized via mutual service agreements.

## 4. Intellectual Property
All trademarks, logos, system interfaces, visual designs, algorithms, and copy on AttendKH are the exclusive intellectual property of AttendKH. All rights reserved.

## 5. Governing Law
These Terms are governed by and construed in accordance with the laws of the Kingdom of Cambodia. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent courts of Cambodia.`,
    content_km: `## ១. ការយល់ព្រមលើលក្ខខណ្ឌប្រើប្រាស់

តាមរយៈការចូលប្រើ ឬប្រើប្រាស់កម្មវិធីទូរស័ព្ទ កម្មវិធី Kiosk គេហទំព័រ ឬសេវាកម្មពាក់ព័ន្ធរបស់ AttendKH ("សេវាកម្ម") អ្នកយល់ព្រមចងភ្ជាប់ដោយលក្ខខណ្ឌប្រើប្រាស់ទាំងនេះ។ ប្រសិនបើអ្នកមិនយល់ព្រមនឹងផ្នែកណាមួយនៃលក្ខខណ្ឌទាំងនេះទេ សូមកុំប្រើប្រាស់សេវាកម្មរបស់យើង។

## ២. ការប្រើប្រាស់ដែលត្រូវបានអនុញ្ញាត
អ្នកយល់ព្រមប្រើប្រាស់ AttendKH សម្រាប់តែគោលបំណងស្របច្បាប់ទាក់ទងនឹងការគ្រប់គ្រងវត្តមាន ការរៀបចំវេនការងារ និងការគណនាប្រាក់បៀវត្សរ៍បុគ្គលិកប៉ុណ្ណោះ។ អ្នកមិនត្រូវ៖
- ធ្វើវិស្វកម្មបញ្ច្រាស (Reverse-engineer) ឬព្យាយាមទាញយកកូដប្រភពនៃកម្មវិធីទូរស័ព្ទ ឬប្រព័ន្ធ Cloud។
- ព្យាយាមចូលប្រើប្រព័ន្ធគ្រប់គ្រង ឬម៉ាស៊ីនបម្រើ (Servers) ដោយគ្មានការអនុញ្ញាត។
- បញ្ជូនកូដព្យាបាទ មេរោគ ឬសំណើបណ្តាញដែលរំខានដល់ប្រតិបត្តិការរបស់ប្រព័ន្ធ។
- ប្រើប្រាស់កម្មវិធីក្លែងបន្លំទីតាំង (Mock GPS / Fake GPS) ដើម្បីកែប្រែទិន្នន័យវត្តមានដោយទុច្ចរិត។

## ៣. គម្រោងសេវាកម្ម និងការទូទាត់ប្រាក់
តម្លៃ និងគម្រោងសេវាកម្មដែលបង្ហាញលើគេហទំព័រជាតម្លៃស្តង់ដារ។ កិច្ចសន្យាសេវាកម្មផ្លូវការ (SLA) វដ្តនៃការទូទាត់ និងលក្ខខណ្ឌជាក់លាក់នឹងត្រូវបានចុះហត្ថលេខាក្នុងកិច្ចព្រមព្រៀងសេវាកម្មជាមួយស្ថាប័នរបស់អ្នក។

## ៤. កម្មសិទ្ធិបញ្ញា
រាល់ពាណិជ្ជសញ្ញា និមិត្តសញ្ញា ចំណុចប្រទាក់ប្រព័ន្ធ ការរចនា និងខ្លឹមសារទាំងអស់លើ AttendKH គឺជាកម្មសិទ្ធិបញ្ញាផ្តាច់មុខរបស់ AttendKH។ រក្សាសិទ្ធិគ្រប់យ៉ាង។

## ៥. ច្បាប់គ្រប់គ្រង
លក្ខខណ្ឌទាំងនេះត្រូវបានគ្រប់គ្រង និងបកស្រាយស្របតាមច្បាប់នៃព្រះរាជាណាចក្រកម្ពុជា។ រាល់វិវាទដែលកើតឡើងនឹងត្រូវដោះស្រាយតាមយន្តការច្បាប់កម្ពុជា។`,
    content_zh: `## 1. 条款接受与效力

通过访问或使用 AttendKH 移动考勤端、平板 Kiosk 门禁端、管理后台或相关云服务（统称“服务”），即表示您同意遵守本服务条款。如您不同意本条款的任何部分，请勿使用本服务。

## 2. 合规使用规范
您同意仅将 AttendKH 用于合法的企业考勤管理、排班考评与薪酬核算业务。您不得：
- 对移动应用或云端系统组件进行逆向工程、反编译或尝试提取源代码；
- 未经授权尝试渗透访问底层服务器、数据库或管理后台；
- 上传或传输任何恶意脚本、病毒或拒绝服务攻击请求；
- 使用虚拟定位（Mock GPS）或作弊软件恶意篡改真实考勤数据。

## 3. 订阅方案与计费条款
本网站公布的价格方案为标准公开资费。企业专属服务等级协议（SLA）、定制结算周期及合同条款以双方正式签署的企业采购协议为准。

## 4. 知识产权声明
AttendKH 平台的所有商标、标识、系统交互界面、代码架构及视觉素材均为 AttendKH 的专有知识产权，受国际与本地法律保护。

## 5. 适用法律与争议管辖
本服务条款受柬埔寨王国法律管辖并据其解释。因本条款引起的任何争议，应通过友好协商或柬埔寨主管司法机关管辖解决。`,
    is_active: 1,
    changelog: "Upgraded Terms of Service with full trilingual support (English, Khmer, Chinese).",
    created_by: "AttendKH Legal Team",
    created_at: "2026-08-01T00:00:00Z",
  },
  cookies: {
    id: "doc-cookies-v1",
    slug: "cookies",
    title: "Cookie & Consent Policy",
    title_km: "គោលការណ៍ Cookie និងការយល់ព្រម",
    title_zh: "Cookie 政策与用户偏好管理",
    version: "1.0",
    content: `## 1. What Are Cookies?

Cookies are small data files placed on your computer or mobile device when you browse our website. They enable website reliability, session security, and preference retention.

## 2. Cookie Categories We Use

- **Necessary Cookies**: Essential for site operation, secure sessions, and recording your cookie preferences. These cannot be disabled.
- **Analytics Cookies**: Collect anonymous aggregate metrics regarding page visits, session duration, and navigation flow to help us improve user experience.
- **Functional Cookies**: Remember user preferences such as your language selection (English vs. Khmer vs. Chinese) and currency toggle (USD vs. KHR).
- **Marketing Cookies**: Measure the performance of marketing campaigns and partner referrals.

## 3. Managing Your Preferences
You have full control over non-essential cookie categories. You can modify or revoke your consent at any time by clicking the **"Cookie Settings"** link in our website footer.`,
    content_km: `## ១. តើអ្វីទៅជា Cookie?

Cookie គឺជាឯកសារទិន្នន័យតូចៗដែលត្រូវបានរក្សាទុកនៅលើកុំព្យូទ័រ ឬទូរស័ព្ទដៃរបស់អ្នក នៅពេលអ្នកចូលមើលគេហទំព័ររបស់យើង។ វាជួយឱ្យគេហទំព័រដំណើរការប្រកបដោយស្ថិរភាព សុវត្ថិភាព និងចងចាំចំណូលចិត្តរបស់អ្នក។

## ២. ប្រភេទ Cookie ដែលយើងប្រើប្រាស់

- **Cookie ចាំបាច់ (Necessary Cookies)**៖ ចាំបាច់សម្រាប់ប្រតិបត្តិការស្នូលរបស់គេហទំព័រ ការផ្ទៀងផ្ទាត់សុវត្ថិភាព និងការកត់ត្រាការយល់ព្រមរបស់អ្នក។ ប្រភេទនេះមិនអាចបិទបានទេ។
- **Cookie វិភាគ (Analytics Cookies)**៖ ប្រមូលទិន្នន័យស្ថិតិរួមអំពីការចូលមើលទំព័រ រយៈពេលប្រើប្រាស់ និងលំហូររុករក ដើម្បីជួយយើងកែលម្អបទពិសោធន៍អ្នកប្រើប្រាស់។
- **Cookie មុខងារ (Functional Cookies)**៖ ចងចាំចំណូលចិត្តរបស់អ្នក ដូចជាភាសាដែលបានជ្រើសរើស (ភាសាខ្មែរ អង់គ្លេស ឬ ចិន) និងរូបិយប័ណ្ណ (USD ឬ KHR)។
- **Cookie ទីផ្សារ (Marketing Cookies)**៖ វាស់វែងប្រសិទ្ធភាពនៃយុទ្ធនាការផ្សព្វផ្សាយ និងការបញ្ជូនបន្តរបស់ដៃគូ។

## ៣. ការគ្រប់គ្រងចំណូលចិត្តរបស់អ្នក
អ្នកមានសិទ្ធិពេញលេញលើប្រភេទ Cookie មិនចាំបាច់។ អ្នកអាចកែប្រែ ឬដកការយល់ព្រមរបស់អ្នកបានគ្រប់ពេលវេលា ដោយចុចលើតំណ **"Cookie Settings"** នៅផ្នែកខាងក្រោម (Footer) នៃគេហទំព័រ។`,
    content_zh: `## 1. 什么是 Cookie？

Cookie 是您在浏览本网站时存储在计算机或移动设备上的小型文本数据文件。它们用于维持网站运行稳定性、保障安全会话并记住您的个性化偏好。

## 2. 我们使用的 Cookie 类别

- **必要型 Cookie (Necessary)**：保障网站核心运行、安全登录会话及记录 Cookie 偏好所必需，此类 Cookie 无法停用。
- **分析型 Cookie (Analytics)**：匿名收集页面访问量、停留时长和页面流转路径等聚合指标，协助我们持续改进系统交互体验。
- **功能型 Cookie (Functional)**：记住您的偏好配置，例如语言切换（中文/英文/高棉语）及币种显示（USD/KHR）。
- **营销型 Cookie (Marketing)**：用于评估推广渠道效益与合作伙伴推荐效果。

## 3. 偏好管理与随时撤回
您对非必要类别 Cookie 拥有完全自主控制权。您可以随时点击网站页脚的 **“Cookie 设置”** 链接重新调整或撤回您的授权。`,
    is_active: 1,
    changelog: "Upgraded Cookie Policy with full trilingual support (English, Khmer, Chinese).",
    created_by: "AttendKH Compliance Team",
    created_at: "2026-08-01T00:00:00Z",
  },
  support: {
    id: "doc-support-v1",
    slug: "support",
    title: "Support & SLA Policy",
    title_km: "គោលការណ៍ជំនួយបច្ចេកទេស និង SLA",
    title_zh: "技术支持与服务等级协议 (SLA)",
    version: "1.0",
    content: `## 1. Technical Support Overview

AttendKH provides dedicated multi-channel customer support for businesses via Telegram, Email, and Phone hotline.

## 2. Support Availability
- **Standard Support**: Monday to Saturday, 8:00 AM – 6:00 PM (ICT / UTC+7).
- **Priority Enterprise Support**: 24/7 dedicated Telegram emergency hotline with guaranteed 15-minute response SLA.

## 3. Contact Details
- **Official Telegram Hotline**: [@MPG_by_ongphaly](https://t.me/MPG_by_ongphaly)
- **Email Support**: [support@MPG_by_ongphaly.com](mailto:support@MPG_by_ongphaly.com)
- **Phone Hotline**: +855 23 999 888`,
    content_km: `## ១. ទិដ្ឋភាពទូទៅនៃជំនួយបច្ចេកទេស

AttendKH ផ្តល់ការគាំទ្រអតិថិជនពហុបណ្តាញសម្រាប់អាជីវកម្មទាំងអស់តាមរយៈ Telegram, អ៊ីមែល និងទូរស័ព្ទ Hotline។

## ២. ពេលវេលាបម្រើសេវា
- **ជំនួយស្តង់ដារ**៖ ថ្ងៃចន្ទ ដល់ ថ្ងៃសៅរ៍ វេលាម៉ោង ៨:០០ ព្រឹក – ៦:០០ ល្ងាច (ICT / UTC+7)។
- **ជំនួយអាទិភាពសហគ្រាស**៖ បណ្តាញបន្ទាន់ Telegram ២៤/៧ ជាមួយការធានាឆ្លើយតបក្នុងរយៈពេល ១៥ នាទី (SLA)។

## ៣. ព័ត៌មានទំនាក់ទំនង
- **Telegram Hotline ផ្លូវការ**៖ [@MPG_by_ongphaly](https://t.me/MPG_by_ongphaly)
- **អ៊ីមែលជំនួយ**៖ [support@MPG_by_ongphaly.com](mailto:support@MPG_by_ongphaly.com)
- **ទូរស័ព្ទ Hotline**៖ +855 23 999 888`,
    content_zh: `## 1. 技术支持与服务保障概览

AttendKH 通过 Telegram 专属频道、技术支持邮箱及电话热线为企业提供多通道客户支持。

## 2. 服务时间与响应级别
- **标准客户支持**：周一至周六 08:00 – 18:00（中南半岛时间 ICT / UTC+7）。
- **企业尊享专属支持**：7x24 小时全天候 Telegram 紧急响应通道，承诺 15 分钟内极速响应（SLA）。

## 3. 官方联系渠道
- **官方 Telegram 热线**：[@MPG_by_ongphaly](https://t.me/MPG_by_ongphaly)
- **技术支持邮箱**：[support@MPG_by_ongphaly.com](mailto:support@MPG_by_ongphaly.com)
- **客服电话热线**：+855 23 999 888`,
    is_active: 1,
    changelog: "Upgraded Support SLA policy with full trilingual support (English, Khmer, Chinese).",
    created_by: "AttendKH Support Team",
    created_at: "2026-08-01T00:00:00Z",
  },
};

// -------------------------------------------------------------
// GETTER METHODS
// -------------------------------------------------------------

export async function getWebsiteSettings(): Promise<WebsiteSettings> {
  return websiteSettings;
}

export async function getPricingPlans(onlyActive = false): Promise<PricingPlan[]> {
  if (onlyActive) {
    return pricingPlans.filter((p) => p.is_active === 1).sort((a, b) => a.display_order - b.display_order);
  }
  return [...pricingPlans].sort((a, b) => a.display_order - b.display_order);
}

export async function getPricingPlanById(id: string): Promise<PricingPlan | null> {
  return pricingPlans.find((p) => p.id === id || p.slug === id) || null;
}

export async function getBlogPosts(options?: {
  status?: string;
  category?: string;
  tag?: string;
  limit?: number;
  offset?: number;
}): Promise<{ posts: BlogPost[]; total: number }> {
  let list = blogPosts.filter((p) => (options?.status ? p.status === options.status : p.status === "published"));

  if (options?.category && options.category !== "All") {
    list = list.filter((p) => p.category.toLowerCase() === options.category?.toLowerCase());
  }

  if (options?.tag) {
    list = list.filter((p) => p.tags.includes(options.tag!));
  }

  // Sort by published_at descending (latest post first)
  list.sort((a, b) => {
    const timeA = new Date(a.published_at || a.created_at).getTime();
    const timeB = new Date(b.published_at || b.created_at).getTime();
    return timeB - timeA;
  });

  const total = list.length;
  const offset = options?.offset || 0;
  const limit = options?.limit || list.length;

  return {
    posts: list.slice(offset, offset + limit),
    total,
  };
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const post = blogPosts.find((p) => p.slug === slug);
  return post || null;
}

export async function getBlogPostById(id: string): Promise<BlogPost | null> {
  const post = blogPosts.find((p) => p.id === id);
  return post || null;
}

export async function incrementBlogPostViews(idOrSlug: string): Promise<void> {
  // In-memory or client tracker
}

export async function getActiveLegalDocument(slug: string): Promise<LegalDocument | null> {
  const normalized = slug.replace("-of-service", "").replace("-policy", "");
  return legalDocuments[normalized] || legalDocuments[slug] || null;
}
