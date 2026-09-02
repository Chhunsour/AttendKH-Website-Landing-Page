/**
 * AttendKH Website Content & Data Provider
 * Clean, lightweight, self-contained content layer for the frontend website.
 */

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

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  title_km?: string;
  title_zh?: string;
  excerpt: string;
  excerpt_km?: string;
  excerpt_zh?: string;
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
  contact_email: "hello@attendkh.com",
  support_phone: "+855 23 999 888",
  telegram_url: "https://t.me/attendkh",
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
    content: `## The Hidden Cost of Attendance Fraud in Retail

For Cambodian retail chains, coffee shops, and hospitality groups, traditional attendance systems present persistent operational vulnerabilities that directly erode profit margins:

1. **Hardware Scanners Fail Frequently**: Fingerprint readers often fail when staff handle moisture, food preparation, or cleaning chemicals, creating long queues during shift changes.
2. **Card Swiping Enables Buddy Punching**: It is common for staff to hand their RFID card or Telegram login to a colleague to clock them in when they are stuck in Phnom Penh traffic.
3. **Paper Sign-in Sheets Cause Administrative Chaos**: At the end of every month, HR managers spend 3 to 5 full days manually transcribing paper logs into Excel spreadsheets.

```
Traditional Manual Reconciliation: ~40 Hours / Month
AttendKH Verified GPS Clock-in: Real-Time Instant Cloud Sync
```

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
    content_km: `## ផលប៉ះពាល់ និងការខាតបង់ពីការក្លែងបន្លំវត្តមានក្នុងអាជីវកម្ម

សម្រាប់បណ្តាញហាងលក់រាយ ហាងកាហ្វេ និងសណ្ឋាគារនៅកម្ពុជា ប្រព័ន្ធកត់ត្រាវត្តមានបែបបុរាណតែងតែបង្កជាចន្លោះប្រហោងប្រតិបត្តិការដែលធ្វើឱ្យបាត់បង់ប្រាក់ចំណេញជាប្រចាំ៖

១. **ម៉ាស៊ីនស្កេនមេដៃឧស្សាហ៍គាំង ឬខូច**៖ ឧបករណ៍ស្កេនស្នាមម្រាមដៃតែងតែពិបាកស្គាល់នៅពេលដៃបុគ្គលិកសើម ប្រឡាក់ប្រេងឆា ឬសារធាតុគីមីសម្អាត ដែលធ្វើឱ្យកកស្ទះជួរនៅពេលផ្លាស់ប្តូរវេនការងារ។
២. **ការចុះវត្តមានជំនួសគ្នា (Buddy Punching)**៖ ជារឿយៗ បុគ្គលិកតែងតែផ្ញើកាត RFID ឬគណនី Telegram ទៅឱ្យមិត្តរួមការងារដើម្បីជួយចុះឈ្មោះចូលធ្វើការជំនួស ខណៈពេលដែលខ្លួនកំពុងស្ទះចរាចរណ៍នៅភ្នំពេញ។
៣. **សៀវភៅចុះហត្ថលេខាបង្កការលំបាកដល់ផ្នែករដ្ឋបាល**៖ នៅរៀងរាល់ដំណាច់ខែ ប្រធានផ្នែកធនធានមនុស្ស (HR) ត្រូវចំណាយពេលពី ៣ ទៅ ៥ ថ្ងៃពេញ ដើម្បីចម្លងទិន្នន័យពីក្រដាសចូលក្នុងតារាង Excel ដោយដៃ។

```
ការផ្ទៀងផ្ទាត់ទិន្នន័យដោយដៃបែបចាស់៖ ~៤០ ម៉ោង / ខែ
ការចុះវត្តមានតាម GPS របស់ AttendKH៖ សមកាលកម្ម Cloud ភ្លាមៗជាក់ស្តែង
```

## របៀបដែលប្រព័ន្ធកំណត់រង្វង់ទីតាំង GPS (Geofencing) ដំណើរការលើ AttendKH

AttendKH បង្កើតរង្វង់ព្រំប្រទល់និម្មិត (Virtual Perimeter) ជុំវិញទីតាំងសាខាដែលបានអនុញ្ញាតនីមួយៗ ដោយប្រើប្រាស់កូអរដោនេ GPS ទូរស័ព្ទដៃដែលមានភាពជាក់លាក់ខ្ពស់៖

- **កំណត់កាំរង្វង់តាមតម្រូវការ (៥០ម ដល់ ៣០០ម)**៖ កំណត់ព្រំប្រទល់សមស្របសម្រាប់ហាងលក់ទំនិញនៅបឹងកេងកង ១ (BKK1) ឬបរិវេណឃ្លាំងស្តុកទំនិញធំៗក្នុងតំបន់សេដ្ឋកិច្ចពិសេសភ្នំពេញ (PPSEZ)។
- **ប្រព័ន្ធចាប់ទីតាំងក្លែងក្លាយ (Anti-GPS Spoofing)**៖ កម្មវិធីទូរស័ព្ទអាចស្វែងរក និងទប់ស្កាត់កម្មវិធីបន្លំទីតាំង (Mock Location Apps) និងការកែប្រែ Developer Mode ទាំងលើ Android និង iOS។
- **ការថតរូប Selfie ផ្ទៀងផ្ទាត់ភ្លាមៗ**៖ បុគ្គលិកត្រូវថតរូប Selfie ផ្ទាល់តាមរយៈ App ពេលចុះវត្តមាន។ ត្រាពេលវេលា និងកូអរដោនេទីតាំងត្រូវបានភ្ជាប់ដោយផ្ទាល់ទៅនឹងកំណត់ត្រាវត្តមាន។
- **ដំណើរការបានទោះគ្មានអ៊ីនធឺណិត (Offline Mode)**៖ ប្រសិនបើសាខាដាច់អ៊ីនធឺណិត ការចុះវត្តមានត្រូវបានអ៊ិនគ្រីបទុកក្នុងទូរស័ព្ទដោយសុវត្ថិភាព និងធ្វើសមកាលកម្មដោយស្វ័យប្រវត្តិភ្លាមៗពេលមានអ៊ីនធឺណិតឡើងវិញ។

| មុខងារ | ម៉ាស៊ីនស្កេនមេដៃ | សៀវភៅកត់ត្រា | AttendKH GPS + Selfie |
| :--- | :--- | :--- | :--- |
| **ទប់ស្កាត់ការចុះជំនួសគ្នា** | កម្រិតមធ្យម | គ្មាន | **ធានាបាន ១០០%** |
| **ថ្លៃដំឡើងឧបករណ៍ Hardware** | $២៥០ - $៦០០/គ្រឿង | $០ | **$០ (ប្រើទូរស័ព្ទបុគ្គលិកផ្ទាល់)** |
| **ការមើលឃើញគ្រប់សាខា** | ត្រូវដោត Flash ដកទិន្នន័យ | ប្រមូលឯកសាររាល់ខែ | **ផ្ទាំងគ្រប់គ្រង Real-Time ផ្ទាល់** |
| **រយៈពេលដំឡើង** | ២ - ៣ សប្តាហ៍ | ភ្លាមៗ | **៥ នាទីតាម Telegram** |

> "ការចុះវត្តមានជំនួសគ្នាបានបញ្ចប់ទាំងស្រុងតាំងពីសប្តាហ៍ដំបូងនៃការដាក់ឱ្យប្រើប្រាស់នៅទូទាំង ៦ សាខាហាងកាហ្វេរបស់យើងនៅទួលគោក និងបឹងកេងកង។ ប្រសិទ្ធភាពពិតជាឃើញភ្លាមៗ។" — *Dara Chan, ប្រធានផ្នែកប្រតិបត្តិការ*

## គន្លឹះសំខាន់ៗក្នុងការអនុវត្តជាក់ស្តែង

នៅពេលផ្លាស់ប្តូរក្រុមការងាររបស់អ្នកពីម៉ាស៊ីនស្កេនចាស់ៗ មកប្រើកម្មវិធីទូរស័ព្ទ GPS សូមអនុវត្តតាមជំហានទាំងនេះ៖

១. **វាស់កាំរង្វង់ឱ្យបានច្បាស់លាស់**៖ ដើរពិនិត្យជុំវិញបរិវេណហាង ឬភោជនីយដ្ឋានរបស់អ្នកជាមួយទូរស័ព្ទ ដើម្បីធានាថាកន្លែងអង្គុយខាងក្រៅ និងចំណតយានយន្តស្ថិតក្នុងរង្វង់ Geofence។
២. **កំណត់រយៈពេលអនុគ្រោះពេលយឺត**៖ កំណត់រយៈពេលអនុគ្រោះពី ១០ ទៅ ១៥ នាទីសមរម្យ មុនពេលប្រព័ន្ធចាប់ផ្តើមកាត់ប្រាក់យឺតដោយស្វ័យប្រវត្តិ។
៣. **ការជូនដំណឹងតាម Telegram ទៅកាន់អ្នកគ្រប់គ្រង**៖ បើកមុខងារជូនដំណឹងភ្លាមៗតាម Telegram នៅពេលបុគ្គលិកមកធ្វើការយឺត ឬអវត្តមានពីវេនការងារ។
`,
    content_zh: `## 零售与餐饮行业考勤欺诈的隐形成本

对于柬埔寨的连锁零售、精品咖啡馆及酒店餐饮集团而言，传统的考勤打卡方式存在长期的运营漏洞，直接侵蚀企业的净利润：

1. **传统指纹硬件故障频发**：在餐饮厨房、清洁或零售高峰期，员工手指潮湿或沾染油污常导致指纹仪无法识别，在换班高峰期造成严重排队拥堵。
2. **代刷卡与代打卡屡禁不止**：在金边早晚高峰严重堵车时，员工将 RFID 工牌或 Telegram 登录信息借给同事帮忙打卡已成为普遍现象。
3. **纸质签到表引发月末对账噩梦**：每月月末，HR 经理需花费 3 至 5 个整工作日，手动将纸质登记册逐条录入 Excel 表格，极易发生人工核算纠纷。

```
传统人工月底对账耗时：每月约 40 小时
AttendKH 智能 GPS 打卡：云端毫秒级实时自动同步
```

## AttendKH GPS 地理围栏核心工作原理

AttendKH 通过高精度移动端 GPS 卫星定位，在每一个授权的门市与办公室周围构建动态虚拟电子围栏：

- **50米至300米灵活半径配置**：为 BKK1 的街边精品店设置精细化小半径，或为金边经济特区（PPSEZ）占地数万平米的仓储物流中心设置广阔围栏。
- **反模拟定位与作弊拦截**：移动端内置底层防作弊算法，自动识别并严密拦截 Android / iOS 上的虚拟定位（Mock GPS）软件与开发者模式篡改。
- **真人自拍活体核验**：打卡瞬间调用前置摄像头拍摄实时自拍，打卡照片与加密时间戳、GPS 经纬度元数据深度绑定，杜绝冒名顶替。
- **离线断网智能打卡队列**：即使门市遇到断网或信号盲区，打卡数据将在本地进行高强度安全加密，网络恢复后瞬间静默同步至云端。

| 功能对比 | 传统指纹/面部打卡机 | 纸质考勤登记表 | AttendKH GPS + 实时自拍 |
| :--- | :--- | :--- | :--- |
| **杜绝员工代打卡** | 中等 | 无法防范 | **100% 绝对保障** |
| **硬件采购与布线成本** | $250 - $600 / 台 | $0 | **$0（员工自带手机打卡）** |
| **多门店跨区域监管** | 需插拔 U 盘导出数据 | 每月人工收集汇总 | **总部实时云端动态大屏** |
| **系统部署上线周期** | 2 - 3 周采购与安装 | 即刻可用但极易出错 | **通过 Telegram 5分钟一键开通** |

> “在金边堆谷区（Toul Kork）和万景岗（BKK）的 6 家咖啡门店推行 AttendKH 的第一周，代打卡现象就彻底归零。系统带来的管理回报是立竿见影的。” —— *Dara Chan, 运营总监*

## 数字化考勤落地最佳实操建议

在将团队从传统打卡机迁移至 AttendKH 移动定位考勤时，建议遵循以下标准步骤：

1. **精准实地校准围栏半径**：管理人员手持手机在门店、露天后院及员工停车区绕行一圈，确保合法工作区域均落在围栏覆盖范围内。
2. **设置合理人性化的打卡宽限期**：配置 10 至 15 分钟的合理迟到豁免时间，超出后再自动启动按分钟扣款算法。
3. **开启 Telegram 实时管理预警**：开启 Telegram Bot 实时推送，当有员工迟到、早退或旷工时，店长和 HR 手机会第一时间收到清晰提醒。
`,
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
    content: `## Navigating Cambodian Payroll Compliance

Under guidelines established by Cambodia's Ministry of Labour and Vocational Training (MoLVT), calculating compliant employee payroll requires strict adherence to statutory formulas.

### 1. Determining Hourly Wage Rates

Standard full-time employment is calculated using either fixed contractual working days (typically 26 days) or actual calendar working days:

$\\text{Hourly Base Rate} = \\frac{\\text{Monthly Gross Salary}}{\\text{Working Days} \\times 8 \\text{ Hours}}$

### 2. Statutory Overtime Multipliers

- **Regular Working Days (Day Shift)**: Overtime performed beyond standard shift hours is compensated at **1.5×** the hourly base rate.
- **Night Shifts (22:00 – 06:00)**: Attracts an additional night differential as stipulated by MoLVT prakas.
- **Weekly Rest Days & Official Public Holidays**: Remunerated at **2.0× (Double Pay)** the standard hourly rate.

```
Example: Base Hourly Wage = $2.50/hr
Standard Overtime Rate (1.5x) = $3.75/hr
Public Holiday Rate (2.0x) = $5.00/hr
```

### 3. Grace Periods vs. Late Deductions

Many Cambodian employers adopt a standard 15-minute grace window. In AttendKH, you can configure whether late penalties apply:
- **Per-minute deduction** from the exact clock-in minute after grace expiration.
- **Tiered deduction brackets** (e.g., 16–30 min late = 30 min pay deduction).

```
Late Penalty = (Late Minutes - Grace Minutes) × (Hourly Rate / 60) × Penalty Factor
```

## NSSF (National Social Security Fund) Calculations

AttendKH automatically computes statutory NSSF deductions:
- **Occupational Risk & Healthcare Scheme**: Calculated against capped statutory ceilings (currently ~1,200,000 KHR / $300 USD maximum contribution base).
- **Pension Scheme**: Automatically splits mandatory employer (2%) and employee (2%) contributions.

## Dual-Currency (USD & KHR) Payslips

Given Cambodia's dual-currency economy, AttendKH produces bilingual Khmer/English PDF payslips displaying base wages, overtime bonuses, and deductions in both **US Dollars ($)** and **Khmer Riel (៛)** at the official National Bank of Cambodia (NBC) exchange rate.
`,
    content_km: `## ការអនុវត្តប្រព័ន្ធបើកប្រាក់បៀវត្សរ៍ស្របតាមច្បាប់ការងារកម្ពុជា

យោងតាមបទប្បញ្ញត្តិ និងប្រកាសដែលកំណត់ដោយ **ក្រសួងការងារ និងបណ្តុះបណ្តាលវិជ្ជាជីវៈ (MoLVT)** ការគណនាប្រាក់បៀវត្សរ៍បុគ្គលិកឱ្យបានត្រឹមត្រូវតម្រូវឱ្យអនុវត្តតាមរូបមន្តច្បាប់ជាធរមាន។

### ១. របៀបកំណត់អត្រាប្រាក់ឈ្នួលប្រចាំម៉ោង

ការងារពេញម៉ោងស្តង់ដារត្រូវបានគណនាដោយផ្អែកលើចំនួនថ្ងៃធ្វើការក្នុងកិច្ចសន្យា (ជាទូទៅ ២៦ ថ្ងៃ) ឬថ្ងៃធ្វើការជាក់ស្តែងក្នុងខែ៖

$\\text{ប្រាក់ឈ្នួលគោលប្រចាំម៉ោង} = \\frac{\\text{ប្រាក់បៀវត្សរ៍សរុបប្រចាំខែ}}{\\text{ចំនួនថ្ងៃធ្វើការ} \\times ៨ \\text{ ម៉ោង}}$

### ២. អត្រាគុណប្រាក់ឈ្នួលការងារថែមម៉ោង (OT) ស្របច្បាប់

- **ថ្ងៃធ្វើការធម្មតា (វេនថ្ងៃ)**៖ ការងារថែមម៉ោងបន្ទាប់ពីម៉ោងការងារធម្មតា ត្រូវបានទូទាត់ក្នុងអត្រា **១.៥ ដង (1.5×)** នៃប្រាក់ឈ្នួលម៉ោងគោល។
- **វេនយប់ (ម៉ោង ២២:០០ ដល់ ០៦:០០ ព្រឹក)**៖ ត្រូវទទួលបានប្រាក់បន្ថែមវេនយប់ស្របតាមប្រកាសរបស់ក្រសួងការងារ។
- **ថ្ងៃឈប់សម្រាកប្រចាំសប្តាហ៍ និងថ្ងៃបុណ្យជាតិផ្លូវការ**៖ ត្រូវទទួលបានប្រាក់ឈ្នួលទ្វេដងគឺ **២.០ ដង (2.0× / Double Pay)** នៃប្រាក់ឈ្នួលម៉ោងគោល។

```
ឧទាហរណ៍៖ ប្រាក់ឈ្នួលម៉ោងគោល = $២.៥០ / ម៉ោង
អត្រាថែមម៉ោងថ្ងៃធម្មតា (1.5x) = $៣.៧៥ / ម៉ោង
អត្រាថែមម៉ោងថ្ងៃបុណ្យជាតិ (2.0x) = $៥.០០ / ម៉ោង
```

### ៣. រយៈពេលអនុគ្រោះ និងការកាត់ប្រាក់ពេលមកធ្វើការយឺត

និយោជកជាច្រើននៅកម្ពុជាកំណត់រយៈពេលអនុគ្រោះ ១៥ នាទី។ នៅក្នុង AttendKH អ្នកអាចកំណត់ជម្រើសកាត់ប្រាក់យឺតបានយ៉ាងងាយស្រួល៖
- **កាត់តាមនាទីជាក់ស្តែង** បន្ទាប់ពីផុតរយៈពេលអនុគ្រោះ។
- **កាត់តាមកម្រិតកំណត់** (ឧទាហរណ៍៖ យឺត ១៦-៣០ នាទី កាត់ស្មើនឹង ៣០ នាទី)។

```
ប្រាក់ពិន័យយឺត = (ចំនួននាទីយឺត - នាទីអនុគ្រោះ) × (ប្រាក់ឈ្នួលម៉ោង / ៦០) × មេគុណពិន័យ
```

## ការគណនាវិភាគទាន ប.ស.ស. (បេឡាជាតិសន្តិសុខសង្គម)

AttendKH គណនាការកាត់ប្រាក់វិភាគទាន ប.ស.ស. ដោយស្វ័យប្រវត្តិ៖
- **របបហានិភ័យការងារ និងថែទាំសុខភាព**៖ គណនាផ្អែកលើពិដានប្រាក់ឈ្នួលអតិបរមាដែលកំណត់ដោយច្បាប់ (បច្ចុប្បន្នពិដានប្រមាណ ១,២០០,០០០ រៀល / ស្មើនឹង $៣០០ ដុល្លារ)។
- **របបសោធន (ប្រាក់សោធននិវត្តន៍)**៖ បែងចែកដោយស្វ័យប្រវត្តិនូវចំណែកកាតព្វកិច្ចរបស់និយោជក (២%) និងចំណែករបស់និយោជិត (២%)។

## ប័ណ្ណបើកប្រាក់ខែជារូបិយប័ណ្ណពីរ (USD និង KHR)

ដោយសារកម្ពុជាប្រើប្រាស់រូបិយប័ណ្ណពីរ AttendKH បង្កើតប័ណ្ណបើកប្រាក់បៀវត្សរ៍ (Payslip PDF) ជាពីរភាសាខ្មែរ-អង់គ្លេស ដែលបង្ហាញប្រាក់ឈ្នួលគោល ប្រាក់ថែមម៉ោង និងការកាត់ប្រាក់ទាំងជា **ប្រាក់ដុល្លារ ($)** និង **ប្រាក់រៀល (៛)** តាមអត្រាប្តូរប្រាក់ផ្លូវការរបស់ធនាគារជាតិនៃកម្ពុជា (NBC)។
`,
    content_zh: `## 柬埔寨企业薪酬合规核算全景指南

依据**柬埔寨劳工与职业培训部 (MoLVT)** 颁布的劳工法规及官方通令（Prakas），企业在核算员工工资与出勤时必须严格执行法定计算公式。

### 1. 员工基础时薪确定法则

标准全职员工的时薪依据合同约定工作日（通常按 26 天标准）或当月实际法定工作日计算：

$\\text{基础小时工资} = \\frac{\\text{月度税前总收入}}{\\text{法定月工作天数} \\times 8 \\text{ 小时}}$

### 2. 法定加班工资倍率（OT Multipliers）

- **工作日正常白班加班**：超出正常 8 小时工作制后的加班时间，按基础时薪的 **1.5 倍 (1.5×)** 计发。
- **夜班特殊津贴（22:00 – 次日 06:00）**：根据劳工部通令，夜班工时需叠加发放法定夜班津贴加成。
- **法定每周休息日与国家公共假期**：在休息日或法定公共假期加班，必须依法发放 **2.0 倍（双倍工资 Double Pay）**。

```
核算范例：基础时薪 = $2.50 / 小时
工作日加班时薪（1.5倍） = $3.75 / 小时
法定公休日加班时薪（2.0倍） = $5.00 / 小时
```

### 3. 迟到宽限期与按分钟扣款规则

许多在柬企业实行 15 分钟的合理迟到宽限。在 AttendKH 薪酬引擎中，HR 可以灵活设定合规的扣款策略：
- **按超出分钟精准扣减**：仅对超出宽限期之外的迟到分钟数折算时薪进行扣除。
- **阶梯式区间扣减**（例如：迟到 16–30 分钟按 30 分钟工时折算）。

```
迟到应扣金额 = (实际迟到分钟数 - 豁免分钟数) × (时薪 ÷ 60) × 惩罚因子
```

## 柬埔寨国家社会保障基金 (NSSF) 自动代扣核算

AttendKH 自动化薪酬系统精准内置 NSSF 最新法定缴费标准：
- **工伤与健康医疗保险**：严格按照官方规定的缴费基数上限（当前最高基数约为 1,200,000 柬币 / 约合 $300 美元上限）进行计算。
- **养老金计划 (Pension Scheme)**：自动分摊雇主法定应缴部分（2%）与员工个人应扣部分（2%）。

## 美元与柬币瑞尔 (USD & KHR) 双币工资单

结合柬埔寨独特的双币流通经济环境，AttendKH 可一键导出中/英/高棉多语言官方 PDF 电子工资条，在同一份凭证中按柬埔寨国家银行（NBC）官方汇率清晰呈现 **美元 ($)** 与 **柬币瑞尔 (៛)** 的应发金额、加班奖金及各项法定代扣明细。
`,
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
    content: `## The Operational Reality of Cambodian F&B

Managing shift work in Phnom Penh and Siem Reap restaurants requires juggling high frontline turnover, split shifts, and sudden absenteeism:

- **Split Shifts**: Staff clock in for lunch service (10:30–14:00), clock out for rest, and return for dinner service (17:00–22:00).
- **Cross-Branch Coverage**: Baristas or service crew moving between a BKK1 flagship and a Toul Tompoung satellite branch during peak hours.
- **Last-Minute Replacements**: If a line cook calls in sick, the head chef needs immediate visibility into who is off-duty and eligible to cover without exceeding overtime limits.

## Structuring the Ideal Shift Roster

```
Shift A (Morning/Lunch):  06:30 – 14:30 (Prep + Peak Lunch)
Shift B (Split Service):  10:30 – 14:00 & 17:00 – 21:30 (Peak Rush)
Shift C (Night Closing):  14:00 – 22:30 (Dinner + Daily Closing)
```

## How Digital Rostering Eliminates Shift Friction

1. **Real-Time Staff Replacement Alerts**: When an opening shift barista fails to clock in within 15 minutes of store opening, the branch manager receives an automatic Telegram alert.
2. **Direct Shift Swapping with Manager Approval**: Staff propose shift trades directly on the mobile app; managers approve with a single tap.
3. **Automated Split-Shift Pay Calculations**: AttendKH accurately combines multiple punches in a single calendar day without treating intermediate hours as unauthorized leave.

> "Managing rosters across our 4 restaurant locations used to take 12 hours a week on whiteboard photos. Now it takes 15 minutes in AttendKH." — *Vannak Seng, Operations Director*
`,
    content_km: `## បញ្ហាប្រឈមជាក់ស្តែងក្នុងប្រតិបត្តិការភោជនីយដ្ឋាន និងហាងកាហ្វេនៅកម្ពុជា

ការគ្រប់គ្រងវេនការងារក្នុងភោជនីយដ្ឋាននៅរាជធានីភ្នំពេញ និងខេត្តសៀមរាប តែងតែជួបប្រទះការលំបាកដូចជា អត្រាផ្លាស់ប្តូរបុគ្គលិកខ្ពស់ វេនការងារបំបែកពីរពេល និងអវត្តមានភ្លាមៗ៖

- **វេនបំបែក (Split Shifts)**៖ បុគ្គលិកចុះវត្តមានសម្រាប់វេនថ្ងៃត្រង់ (១០:៣០–១៤:០០) ចុះចេញសម្រាក និងត្រឡប់មកធ្វើការវិញសម្រាប់វេនល្ងាច (១៧:០០–២២:០០)។
- **ការផ្លាស់ប្តូរបុគ្គលិកឆ្លងសាខា**៖ អ្នកឆុងកាហ្វេ (Barista) ឬបុគ្គលិកបម្រើការត្រូវផ្លាស់ប្តូរទីតាំងចន្លោះពីសាខាបឹងកេងកង ១ (BKK1) ទៅសាខាទួលទំពូង ក្នុងអំឡុងម៉ោងមមាញឹក។
- **ការរកបុគ្គលិកជំនួសបន្ទាន់**៖ ប្រសិនបើចុងភៅម្នាក់ឈឺ ប្រធានចុងភៅត្រូវការដឹងភ្លាមៗថា តើបុគ្គលិកណាខ្លះកំពុងសម្រាក ហើយអាចមកធ្វើការជំនួសបានដោយមិនលើសម៉ោងកំណត់។

## គំរូរៀបចំកាលវិភាគវេនការងារដ៏មានប្រសិទ្ធភាព

```
វេន A (ព្រឹក/ថ្ងៃត្រង់)៖   ០៦:៣០ – ១៤:៣០ (រៀបចំ + ម៉ោងថ្ងៃត្រង់មមាញឹក)
វេន B (វេនបំបែកពីរពេល)៖ ១០:៣០ – ១៤:០០ និង ១៧:០០ – ២១:៣០ (ម៉ោងភ្ញៀវច្រើន)
វេន C (វេនល្ងាច/បិទហាង)៖ ១៤:០០ – ២២:៣០ (អាហារពេលល្ងាច + បិទការិយាល័យ)
```

## របៀបដែល AttendKH ជួយដោះស្រាយបញ្ហាវេនការងារ

១. **ការជូនដំណឹងស្វែងរកបុគ្គលិកជំនួសភ្លាមៗ**៖ ប្រសិនបើអ្នកឆុងកាហ្វេវេនព្រឹកមិនទាន់ចុះវត្តមានក្នុងរយៈពេល ១៥ នាទីមុនពេលបើកហាង ប្រព័ន្ធនឹងផ្ញើសារជូនដំណឹងទៅ Telegram របស់អ្នកគ្រប់គ្រងសាខាភ្លាមៗ។
២. **ការស្នើសុំប្តូរវេនការងារតាមទូរស័ព្ទ**៖ បុគ្គលិកអាចស្នើសុំប្តូរវេនគ្នាដោយផ្ទាល់លើ App ហើយអ្នកគ្រប់គ្រងអាចចុចយល់ព្រមបានដោយងាយស្រួល។
៣. **ការគណនាប្រាក់ឈ្នួលវេនបំបែកដោយស្វ័យប្រវត្តិ**៖ AttendKH រួមបញ្ចូលការចុះវត្តមានច្រើនដងក្នុងមួយថ្ងៃបានយ៉ាងត្រឹមត្រូវ ដោយមិនចាត់ទុកចន្លោះពេលសម្រាកជាការអវត្តមានឡើយ។

> "កាលពីមុន ការរៀបចំកាលវិភាគវេនការងារនៅ ៤ សាខារបស់យើង ចំណាយពេលរហូតដល់ ១២ ម៉ោងក្នុងមួយសប្តាហ៍លើក្តារខៀន និងការថតរូបផ្ញើគ្នា។ ឥឡូវនេះ ប្រើត្រឹមតែ ១៥ នាទីប៉ុណ្ណោះក្នុង AttendKH។" — *Vannak Seng, នាយកផ្នែកប្រតិបត្តិការ*
`,
    content_zh: `## 柬埔寨餐饮与酒店业的真实运营挑战

在金边和暹粒管理餐饮门市的排班，管理者往往需要应对一线员工高流动率、分段倒班（Split Shifts）以及突发请假的严峻挑战：

- **分段倒班（两头班模式）**：员工在午餐高峰（10:30–14:00）打卡上岗，中途离场休息，在晚餐高峰（17:00–22:00）再次返回打卡。
- **跨门店灵活调度支援**：在客流波峰期，咖啡师或服务员需要在 BKK1 旗舰店与俄罗斯市场（Toul Tompoung）分店之间快速流动支援。
- **紧急临时顶岗代班**：当主力厨师突发请病假时，店长需要秒级获知当前有哪些员工处于轮休状态且可合规顶班而不触发违规超时加班。

## 餐饮门店标准排班架构示范

```
班次 A（早班/午餐峰值）：06:30 – 14:30（开店备料 + 午市高峰）
班次 B（分段倒班两头班）：10:30 – 14:00 & 17:00 – 21:30（全天核心峰值）
班次 C（晚班/打烊清算）：14:00 – 22:30（晚市服务 + 每日打烊盘点）
```

## 数字化智能排班如何彻底消除管理摩擦

1. **开店防空岗实时预警**：当早班咖啡师在开店前 15 分钟未完成 GPS 自拍打卡时，店长手机的 Telegram 会第一时间收到缺勤预警。
2. **手机端自主换班与一键审批**：员工可在 App 内直接向同事发起换班申请，经店长在手机端一键确认后排班表自动刷新。
3. **分段打卡工时智能合并核算**：AttendKH 精准识别单日内多次进出打卡记录，智能计算有效出勤工时，绝不将中途休息误判为异常早退或缺勤。

> “过去管理 4 家餐厅分店的周排班表，店长要在白板上写画拍照，每周耗费 12 个小时；现在通过 AttendKH 仅需 15 分钟即可搞定全员智能排班。” —— *Vannak Seng, 运营总监*
`,
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
    content_km: `## ស្វែងយល់អំពីថ្ងៃឈប់សម្រាកបុណ្យជាតិផ្លូវការនៅកម្ពុជា

ប្រទេសកម្ពុជាមានថ្ងៃឈប់សម្រាកបុណ្យជាតិផ្លូវការប្រមាណ ២២ ដល់ ២៤ ថ្ងៃក្នុងមួយឆ្នាំ។ សម្រាប់ម្ចាស់អាជីវកម្ម ការគ្រប់គ្រងវត្តមានបុគ្គលិកក្នុងអំឡុងរដូវបុណ្យទានធំៗដូចជា **ពិធីបុណ្យចូលឆ្នាំប្រពៃណីជាតិខ្មែរ**, **ពិធីបុណ្យភ្ជុំបិណ្ឌ**, និង **ពិធីបុណ្យអុំទូក** គឺមានសារៈសំខាន់បំផុតដើម្បីធានាការអនុលោមតាមច្បាប់ការងារ។

### ១. តម្រូវការបើកប្រាក់ឈ្នួលទ្វេដង (២០០% / Double Pay)

យោងតាមច្បាប់ស្តីពីការងារនៅកម្ពុជា បុគ្គលិកដែលត្រូវបានតម្រូវឱ្យមកបំពេញការងារក្នុងថ្ងៃឈប់សម្រាកបុណ្យជាតិផ្លូវការ ត្រូវតែទទួលបានប្រាក់ឈ្នួលគុណនឹង **២០០% (២.០ ដង / 2.0×)** នៃប្រាក់ឈ្នួលម៉ោងធម្មតាសម្រាប់គ្រប់ម៉ោងដែលបានធ្វើការ។

### ២. ថ្ងៃឈប់សម្រាកប៉ះប៉ូវ (Compensatory Rest Days)

ប្រសិនបើថ្ងៃឈប់សម្រាកបុណ្យជាតិចំលើថ្ងៃសម្រាកប្រចាំសប្តាហ៍របស់បុគ្គលិក (ជាទូទៅគឺថ្ងៃអាទិត្យ) និយោជកត្រូវផ្តល់ថ្ងៃឈប់សម្រាកប៉ះប៉ូវនៅថ្ងៃបន្ទាប់ ឬទូទាត់ប្រាក់ឈ្នួលថ្ងៃបុណ្យឱ្យបានពេញលេញ។

### ៣. ច្បាប់សន្សំបុណ្យឈប់សម្រាកប្រចាំឆ្នាំ (Annual Leave)

- **សិទ្ធិឈប់សម្រាកគោល**៖ បុគ្គលិកពេញម៉ោងទទួលបានសិទ្ធិឈប់សម្រាកប្រចាំឆ្នាំចំនួន **១.៥ ថ្ងៃ ក្នុងមួយខែនៃការបំពេញការងារ** (ស្មើនឹង ១៨ ថ្ងៃក្នុងមួយឆ្នាំ)។
- **ថ្ងៃឈប់សម្រាកបន្ថែមតាមអតីតភាពការងារ**៖ រាល់ការបម្រើការងារបាន **៣ ឆ្នាំជាប់គ្នា** បុគ្គលិកទទួលបានសិទ្ធិឈប់សម្រាក **+១ ថ្ងៃបន្ថែមទៀត** ក្នុងមួយឆ្នាំ។

| អតីតភាពការងារ | ចំនួនថ្ងៃឈប់សម្រាកប្រចាំឆ្នាំ |
| :--- | :--- |
| **១ – ៣ ឆ្នាំ** | ១៨ ថ្ងៃ |
| **៤ – ៦ ឆ្នាំ** | ១៩ ថ្ងៃ |
| **៧ – ៩ ឆ្នាំ** | ២០ ថ្ងៃ |
| **១០ ឆ្នាំឡើងទៅ** | ២១+ ថ្ងៃ |

## ស្វ័យប្រវត្តិកម្មការគណនាប្រាក់ឈ្នួលថ្ងៃបុណ្យជាមួយ AttendKH

ជំនួសឱ្យការកត់ត្រា និងគណនាលើក្រដាសដោយដៃ AttendKH ដំណើរការដោយស្វ័យប្រវត្តិ៖
១. គុណអត្រា **២.០ ដង (2.0×)** ដោយស្វ័យប្រវត្តិចំពោះរាល់ការចុះវត្តមានក្នុងថ្ងៃបុណ្យជាតិផ្លូវការរបស់កម្ពុជា។
២. តាមដានសមតុល្យថ្ងៃឈប់សម្រាក និងប្រាក់បំណាច់អតីតភាពការងារយ៉ាងច្បាស់លាស់លើគណនីទូរស័ព្ទរបស់បុគ្គលិកម្នាក់ៗ។
៣. គណនាការចំណាយប្រាក់បៀវត្សរ៍ថ្ងៃឈប់សម្រាកទុកជាមុន មុនពេលបិទបញ្ជីទូទាត់ប្រាក់ខែប្រចាំខែ។
`,
    content_zh: `## 深度解读柬埔寨法定公共假期体系

柬埔寨每年拥有约 22 至 24 天的法定公共假期。对于在柬运营的企业而言，在**柬埔寨传统新年（Chaoul Chnam Thmey）**、**亡人节（Pchum Ben）**及**送水节（Bon Om Touk）**等重大节庆期间合规管理人力与考勤，是规避劳工仲裁与劳动争议的核心。

### 1. 法定节假日 200%（双倍工资）强制要求

根据《柬埔寨王国劳工法》，在政府法定公共假日期间安排员工加班出勤的，雇主必须按照正常标准时薪的 **200%（即 2.0 倍双倍工资）** 严格足额计发假日加班费。

### 2. 遇周末公休日之补休调休机制

若法定公共假期恰逢员工原本排定的每周休息日（通常为周日），雇主依法应顺延安排工作日补休一天，或全额核发法定节假日出勤津贴。

### 3. 法定带薪年休假与工龄递增规则

- **基础带薪年假标准**：全职雇员每正常工作满 1 个月，享有 **1.5 天带薪年假**（即每年标准享有 18 个工作日全薪年假）。
- **工龄累进奖励年假**：员工在同一企业连续工作**每满 3 年**，每年在法定 18 天基准上**额外递增 1 天**带薪年假。

| 员工连续在职年限 | 法定每年全薪年休假天数 |
| :--- | :--- |
| **在职 1 – 3 年** | 18 天 |
| **在职 4 – 6 年** | 19 天（18+1） |
| **在职 7 – 9 年** | 20 天（18+2） |
| **在职 10 年及以上** | 21+ 天递增 |

## AttendKH 节假日薪酬全自动化引擎

AttendKH 完全省去了人工手动翻查日历与纸质加班单核算的繁琐流程：
1. 系统自动关联柬埔寨官方放假通令，对法定假日当天的打卡记录自动匹配 **2.0 倍** 薪资乘数。
2. 员工手机端实时清晰展示个人剩余年假额度与工龄累计天数，请假审批全流程留痕。
3. 月末自动生成包含假日加班明细与法定假期的精准双币工资明细表。
`,
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
    content: `## Overcoming Remote Attendance Challenges

Operating construction projects in Siem Reap, coastal infrastructure in Sihanoukville, and national logistics routes between Phnom Penh and Bavet involves distinct operational challenges:

- **Unstable Internet Connectivity**: Remote project sites frequently suffer cellular dropouts.
- **High Workforce Mobility**: Heavy equipment operators and subcontractors shift between job sites throughout the work week.
- **Physical Fingerprint Wear**: Heavy manual labor damages biometric skin ridges, making hardware scanners completely unusable.

```
Offline Clock-in: Encrypted Local Cache -> Automatic Sync on Reconnect
Selfie Validation: Front Camera Verification + Reverse Timestamp Signature
```

## The AttendKH Offline Construction Protocol

1. **Offline Mode**: Workers clock in on the supervisor's mobile kiosk or their personal smartphone. The timestamp and GPS coordinates are cryptographically cached locally.
2. **Automatic Background Sync**: Once the device enters 4G or Wi-Fi range, punches upload immediately to central headquarters.
3. **Subcontractor Team Check-ins**: Site engineers can use "Kiosk Team Punch" to verify up to 50 workers in under 3 minutes with photo proof.

> "On our infrastructure projects in Kampot, AttendKH eliminated payroll disputes with subcontractors entirely." — *Sopheap Chan, Head of Product*
`,
    content_km: `## ដំណោះស្រាយបញ្ហាប្រឈមនៃវត្តមាននៅតំបន់ដាច់ស្រយាល

ការគ្រប់គ្រងគម្រោងការដ្ឋានសំណង់នៅសៀមរាប ហេដ្ឋារចនាសម្ព័ន្ធមាត់សមុទ្រនៅក្រុងព្រះសីហនុ និងបណ្តាញដឹកជញ្ជូនជាតិរវាងភ្នំពេញ និងបាវិត ជួបប្រទះបញ្ហាប្រឈមធំៗមួយចំនួន៖

- **សេវាអ៊ីនធឺណិតមិនស្ថិតស្ថេរ**៖ ទីតាំងការដ្ឋានឆ្ងាយៗតែងតែដាច់សេវាទូរស័ព្ទជាញឹកញាប់។
- **កម្លាំងពលកម្មមានការផ្លាស់ប្តូរទីតាំងច្រើន**៖ អ្នកបញ្ជាគ្រឿងចក្រធុនធ្ងន់ និងក្រុមការងារម៉ៅការបន្តត្រូវផ្លាស់ប្តូរទីតាំងការដ្ឋានជាបន្តបន្ទាប់ពេញមួយសប្តាហ៍។
- **ស្នាមម្រាមដៃសឹក ឬប្រឡាក់**៖ ការងារធ្ងន់ៗធ្វើឱ្យស្នាមម្រាមដៃសឹក ដែលធ្វើឱ្យម៉ាស៊ីនស្កេនមេដៃមិនអាចប្រើប្រាស់បានទាំងស្រុង។

```
ការចុះវត្តមានពេលគ្មានអ៊ីនធឺណិត៖ អ៊ិនគ្រីបទុកក្នុងទូរស័ព្ទ -> ផ្ញើទិន្នន័យស្វ័យប្រវត្តិកាលណាមានសេវា
ការផ្ទៀងផ្ទាត់ Selfie៖ ថតរូបផ្ទាល់ពីកាមេរ៉ាមុខ + ភ្ជាប់ត្រាពេលវេលាសុវត្ថិភាព
```

## ពិធីការគ្រប់គ្រងការដ្ឋានសំណង់បែប Offline របស់ AttendKH

១. **មុខងារ Offline ពេញលេញ**៖ កម្មករអាចចុះវត្តមានលើទូរស័ព្ទរបស់ប្រធានការដ្ឋាន ឬទូរស័ព្ទផ្ទាល់ខ្លួន។ ត្រាពេលវេលា និងកូអរដោនេ GPS ត្រូវបានរក្សាទុកដោយសុវត្ថិភាពក្នុងឧបករណ៍។
២. **សមកាលកម្មទិន្នន័យស្វ័យប្រវត្តិ**៖ នៅពេលឧបករណ៍ចាប់បានសេវា 4G ឬ Wi-Fi ទិន្នន័យវត្តមាននឹងត្រូវបានបញ្ជូនភ្លាមៗទៅកាន់ការិយាល័យកណ្តាល។
៣. **ការចុះវត្តមានជាក្រុមសម្រាប់អ្នកម៉ៅការបន្ត**៖ វិស្វករការដ្ឋានអាចប្រើមុខងារ "ចុះវត្តមានជាក្រុម (Team Punch)" ដើម្បីផ្ទៀងផ្ទាត់កម្មកររហូតដល់ ៥០ នាក់ ក្នុងរយៈពេលមិនដល់ ៣ នាទី ជាមួយរូបថតបញ្ជាក់ជាក់ស្តែង។

> "នៅលើគម្រោងហេដ្ឋារចនាសម្ព័ន្ធរបស់យើងក្នុងខេត្តកំពត AttendKH បានជួយលុបបំបាត់ទំនាស់ប្រាក់ឈ្នួលជាមួយអ្នកម៉ៅការបន្តទាំងស្រុង។" — *Sopheap Chan, ប្រធានផ្នែកផលិតផល*
`,
    content_zh: `## 攻克偏远项目与分散作业的考勤难题

在暹粒的文旅工程项目、西哈努克港的海滨基础设施以及金边至巴域的跨国物流干线上，企业面临着极为特殊的现场管理痛点：

- **现场网络信号不稳定**：偏远项目现场经常发生蜂窝网络掉线或无信号情况。
- **人员流动性与跨现场作业频繁**：重型机械操作手、专业技工与分包施工队在多个工区之间动态轮换。
- **高强度体力劳动导致指纹磨损严重**：建筑泥水工人的指纹极易磨损起皮，导致传统指纹机识别率极低、形同虚设。

```
离线打卡流程：本地高强度加密暂存 -> 恢复网络秒级静默自动同步
自拍防伪核验：前置摄像头实时自拍 + 防篡改时间戳数字水印
```

## AttendKH 专为工地打造的离线打卡作业规范

1. **全功能离线模式**：工人在现场工长手机的“流动考勤机模式”或个人手机上完成自拍打卡，打卡时间戳与经纬度在本地安全加密存储。
2. **后台智能无感自动同步**：一旦手机进入 4G 信号区或连上 Wi-Fi，暂存的全部打卡流水立即无损上传至总部云端数据库。
3. **分包施工队极速扫码群打卡**：现场工程师可启用“团队快速打卡”，3 分钟内即可完成多达 50 名分包工人的自拍与点名核验。

> “在我们在贡布（Kampot）的基础设施建设工程中，AttendKH 彻底杜绝了与劳务分包队伍之间的出勤与工时对账纠纷。” —— *Sopheap Chan, 资深产品总监*
`,
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
- **សម្រាប់បុគ្គលិក**៖ អ្នកអាចស្នើសុំតាមរយៈ HR ក្រុមហ៊ុនរបស់អ្នក ឬផ្ញើអ៊ីមែលដោយផ្ទាល់ទៅកាន់ **privacy@attendkh.com** ដោយបញ្ជាក់ឈ្មោះ លេខទូរស័ព្ទ និង Staff ID។
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
- **អ៊ីមែល**៖ [privacy@attendkh.com](mailto:privacy@attendkh.com)
- **ជំនួយទូទៅ**៖ [support@attendkh.com](mailto:support@attendkh.com)
- **Telegram Hotline**៖ [@attendkh](https://t.me/attendkh)
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

- **申请途径**：员工可通过企业 HR 提交注销申请，或直接发送邮件至 **privacy@attendkh.com**。
- **删除时限**：身份认证凭证、自拍照片及设备标识将在 **30 个日历日内**从生产数据库执行物理硬删除，严格符合苹果与谷歌商店规范。

---

## 7. 零出售数据承诺 (Zero-Sale Guarantee)

> **我们承诺：在任何情况下，绝不向广告商、数据经纪商或任何第三方出租、出售或商业化变现您的个人隐私或考勤数据。**

---

## 8. 数据保护官 (DPO) 联系方式

- **数据保护专员**：AttendKH 合规与安全团队
- **隐私专属邮箱**：[privacy@attendkh.com](mailto:privacy@attendkh.com)
- **技术支持**：[support@attendkh.com](mailto:support@attendkh.com)
- **Telegram 热线**：[@attendkh](https://t.me/attendkh)
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
- **Official Telegram Hotline**: [@attendkh](https://t.me/attendkh)
- **Email Support**: [support@attendkh.com](mailto:support@attendkh.com)
- **Phone Hotline**: +855 23 999 888`,
    content_km: `## ១. ទិដ្ឋភាពទូទៅនៃជំនួយបច្ចេកទេស

AttendKH ផ្តល់ការគាំទ្រអតិថិជនពហុបណ្តាញសម្រាប់អាជីវកម្មទាំងអស់តាមរយៈ Telegram, អ៊ីមែល និងទូរស័ព្ទ Hotline។

## ២. ពេលវេលាបម្រើសេវា
- **ជំនួយស្តង់ដារ**៖ ថ្ងៃចន្ទ ដល់ ថ្ងៃសៅរ៍ វេលាម៉ោង ៨:០០ ព្រឹក – ៦:០០ ល្ងាច (ICT / UTC+7)។
- **ជំនួយអាទិភាពសហគ្រាស**៖ បណ្តាញបន្ទាន់ Telegram ២៤/៧ ជាមួយការធានាឆ្លើយតបក្នុងរយៈពេល ១៥ នាទី (SLA)។

## ៣. ព័ត៌មានទំនាក់ទំនង
- **Telegram Hotline ផ្លូវការ**៖ [@attendkh](https://t.me/attendkh)
- **អ៊ីមែលជំនួយ**៖ [support@attendkh.com](mailto:support@attendkh.com)
- **ទូរស័ព្ទ Hotline**៖ +855 23 999 888`,
    content_zh: `## 1. 技术支持与服务保障概览

AttendKH 通过 Telegram 专属频道、技术支持邮箱及电话热线为企业提供多通道客户支持。

## 2. 服务时间与响应级别
- **标准客户支持**：周一至周六 08:00 – 18:00（中南半岛时间 ICT / UTC+7）。
- **企业尊享专属支持**：7x24 小时全天候 Telegram 紧急响应通道，承诺 15 分钟内极速响应（SLA）。

## 3. 官方联系渠道
- **官方 Telegram 热线**：[@attendkh](https://t.me/attendkh)
- **技术支持邮箱**：[support@attendkh.com](mailto:support@attendkh.com)
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
