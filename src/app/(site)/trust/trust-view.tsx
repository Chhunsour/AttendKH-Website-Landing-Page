"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  EyeOff,
  Database,
  History,
  Server,
  UserCheck,
  FileCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { PageHero, DirectAnswerBlock, CtaBand } from "@/components/site/ui";
import { useSite } from "@/lib/i18n";

export function TrustView() {
  const { lang } = useSite();
  const isKm = lang === "km";
  const isZh = lang === "zh";

  const breadcrumbs = [
    { label: isKm ? "ទំព័រដើម" : isZh ? "首页" : "Home", href: "/" },
    { label: isKm ? "មជ្ឈមណ្ឌលសុវត្ថិភាព" : isZh ? "信任与安全中心" : "Trust & Security" },
  ];

  const title = isKm
    ? "វិធីសាស្ត្ររបស់យើងចំពោះឯកជនភាព សុវត្ថិភាព និងទិន្នន័យ"
    : isZh
    ? "AttendKH 数据安全、隐私边界与合规体系"
    : "Our Approach to Privacy, Security & Data Handling";

  const sub = isKm
    ? "យើងជឿជាក់ថាកម្មវិធីគ្រប់គ្រងវត្តមានបុគ្គលិកត្រូវតែផ្តល់អំណាចដល់ក្រុមការងារតាមរយៈតម្លាភាព។ ខាងក្រោមនេះជារបៀបដែល AttendKH ការពារឯកជនភាពបុគ្គលិក និងទិន្នន័យអាជីវកម្ម។"
    : isZh
    ? "我们坚信劳动力考勤系统应以透明与尊重为基石。以下为 AttendKH 如何捍卫员工隐私与企业核心业务数据。"
    : "We believe workforce management software should empower teams through transparency. Here is how AttendKH protects employee privacy and business data.";

  const badge = isKm
    ? "ស្តង់ដារសុវត្ថិភាព និងឯកជនភាព"
    : isZh
    ? "数据安全与合规治理"
    : "Trust, Security & Privacy Standards";

  const principles = [
    {
      icon: EyeOff,
      title: isKm
        ? "ពិនិត្យទីតាំងតែនៅពេលចុះវត្តមាន (Point-in-Time)"
        : isZh
        ? "瞬时打卡地理围栏核验（拒绝全天候追踪）"
        : "Point-in-Time Location Verification",
      desc: isKm
        ? "AttendKH ដំណើរការ GPS តែក្នុងរយៈពេល ១-២ វិនាទីនៅពេលចុច 'Clock In' ឬ 'Clock Out'។ គ្មានការដំណើរការ Background GPS ឬតាមដានផ្លូវធ្វើដំណើរក្រៅម៉ោងធ្វើការឡើយ។"
        : isZh
        ? "AttendKH 仅在员工主动点击“上班/下班打卡”的 1-2 秒内调用 GPS 比对分支围栏半径。绝无后台常驻定位或非工作时间漫游轨迹监控。"
        : "AttendKH reads device GPS coordinates exclusively at the moment a staff member taps 'Clock In' or 'Clock Out'. We do not run background route tracking, continuous location monitoring, or off-duty tracking.",
    },
    {
      icon: Lock,
      title: isKm
        ? "អ៊ិនគ្រីបពេលបញ្ជូន និងពេលរក្សាទុក (TLS 1.3 & AES-256)"
        : isZh
        ? "全链路传输与静态存储高强度加密"
        : "Encrypted in Transit & at Rest",
      desc: isKm
        ? "ទិន្នន័យទាំងអស់ត្រូវបានអ៊ិនគ្រីបពេលបញ្ជូនតាម TLS 1.3 ហើយទិន្នន័យមូលដ្ឋានទិន្នន័យ និងរូបថត Selfie ត្រូវបានអ៊ិនគ្រីបកម្រិត AES-256។"
        : isZh
        ? "客户端与服务器端交互全链路采用 TLS 1.3 加密传输，云端数据库及自拍照片均通过 AES-256 银行级算法静态加密存储。"
        : "Data transmitted between client apps and server endpoints is encrypted in transit via TLS 1.3, and database records and uploaded selfie photos are stored with AES-256 encryption at rest.",
    },
    {
      icon: UserCheck,
      title: isKm
        ? "ការគ្រប់គ្រងសិទ្ធិតាមតួនាទីតឹងរ៉ឹង (RBAC)"
        : isZh
        ? "严格的多租户与基于角色权限控制 (RBAC)"
        : "Strict Role-Based Access Control (RBAC)",
      desc: isKm
        ? "ប្រធានសាខាអាចមើលឃើញទិន្នន័យតែក្នុងសាខារបស់ខ្លួនប៉ុណ្ណោះ។ របាយការណ៍ប្រាក់បៀវត្សរ៍រួម និងការកំណត់កម្រិតខ្ពស់ត្រូវបានកំណត់ចំពោះតែ Administrator ដែលមានការអនុញ្ញាត។"
        : isZh
        ? "分支机构主管仅有权限查阅所属网点的考勤记录。跨网点集团汇总薪资报表及底层系统配置严格限制为授权超管。"
        : "Branch managers inspect attendance and schedules for their designated branch only. Consolidated company-wide payroll exports and administrative settings are restricted to authorized administrators.",
    },
    {
      icon: History,
      title: isKm
        ? "កំណត់ត្រាត្រួតពិនិត្យការកែប្រែ (Audit Trail)"
        : isZh
        ? "不可篡改的考勤补卡与修改审计日志"
        : "Supervisor Punch Audit Records",
      desc: isKm
        ? "ប្រសិនបើ HR ឬអ្នកគ្រប់គ្រងកែប្រែម៉ោងវត្តមាន ប្រព័ន្ធនឹងកត់ត្រាម៉ោងចាស់ ម៉ោងថ្មី លេខសម្គាល់អ្នកកែ កាលបរិច្ឆេទ និងមូលហេតុច្បាស់លាស់។"
        : isZh
        ? "若管理人员手动修改或审批补卡，系统将永久保留原始记录、修改后数据、操作人 ID、时间戳及修改事由，确保审计链透明。"
        : "If an HR supervisor manually corrects or overrides a punch time, AttendKH logs the previous state, new state, supervisor ID, timestamp, and explanation.",
    },
    {
      icon: Database,
      title: isKm
        ? "ការនាំចេញទិន្នន័យ និងការរក្សាទុក"
        : isZh
        ? "数据自由导出与合规保留机制"
        : "Data Export & Retention",
      desc: isKm
        ? "ស្ថាប័នអាចនាំចេញទិន្នន័យជា CSV, Excel និង PDF បានគ្រប់ពេល។ សម្រាប់ការលុបទិន្នន័យ និងការរក្សាទុក សូមមើលគោលការណ៍ឯកជនភាព។"
        : isZh
        ? "企业可随时一键导出 CSV、Excel 与 PDF 格式的考勤明细与薪酬核算报表。详细保留与注销规范请查阅隐私政策。"
        : "Organizations can export CSV and Excel records of employee punch logs and payroll summaries. For retention and deletion policies, please refer to our Privacy Policy.",
    },
    {
      icon: Server,
      title: isKm
        ? "ការធ្វើសមកាលកម្ម Cloud តាមពេលវេលាជាក់ស្តែង"
        : isZh
        ? "实时加密云端同步与离线沙盒队列"
        : "Encrypted Real-Time Cloud Sync",
      desc: isKm
        ? "រាល់ព្រឹត្តិការណ៍វត្តមាន កូអរដោនេ GPS និងរូបថត Selfie ត្រូវបានបញ្ជូនតាម TLS 1.3 ទៅកាន់ Cloud ដោយផ្ទាល់ ហើយគាំទ្រការរក្សាទុកពេលដាច់អ៊ីនធឺណិត។"
        : isZh
        ? "考勤打卡事件、GPS 坐标比对结果与防伪自拍通过加密隧道实时同步至云端，并具备断网本地安全沙盒队列自动重发能力。"
        : "Attendance events, GPS coordinates, and selfie verifications are transmitted via TLS 1.3 encryption directly to the central cloud for immediate synchronization.",
    },
  ];

  return (
    <div>
      {/* Rich PageHero with built-in breadcrumbs */}
      <PageHero
        title={title}
        sub={sub}
        badge={badge}
        breadcrumbs={breadcrumbs}
      />

      <div className="space-y-16 py-12 sm:space-y-20 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          {/* Direct Answer Block */}
          <div className="mt-4">
            <DirectAnswerBlock
              question={
                isKm
                  ? "តើ AttendKH តាមដានទីតាំងបុគ្គលិក ២៤ម៉ោងជាប់រហូតនៅកម្ពុជាដែរឬទេ?"
                  : isZh
                  ? "AttendKH 会在柬埔寨对员工进行全天候 24/7 实时轨迹定位监控吗？"
                  : "Does AttendKH track employee location continuously in Cambodia?"
              }
              answer={
                isKm
                  ? "ដាច់ខាតមិនមានឡើយ! AttendKH អានកូអរដោនេ GPS តែនៅវិនាទីដែលបុគ្គលិកចុច 'Clock In' ឬ 'Clock Out' ដើម្បីផ្ទៀងផ្ទាត់ថាតើស្ថិតក្នុងរង្វង់សាខាឬអត់។ AttendKH មិនមានមុខងារតាមដាន Background កត់ត្រាផ្លូវ ឬតាមដានក្រៅម៉ោងធ្វើការឡើយ។"
                  : isZh
                  ? "绝对不会！AttendKH 仅在员工主动点击“上班打卡/下班打卡”的瞬间读取 GPS 坐标，用于核验是否在企业授权网点范围内。AttendKH 绝不进行任何后台常驻追踪、通勤轨迹记录或非工作时间监控。"
                  : "No. AttendKH reads GPS coordinates strictly at the moment an employee taps 'Clock In' or 'Clock Out' to verify presence within the designated branch radius. AttendKH does not perform continuous background tracking, route recording, or off-duty monitoring. For complete data handling terms, see our Privacy Policy."
              }
              facts={[
                {
                  label: isKm ? "ការអានទីតាំង" : isZh ? "位置读取机制" : "Location Reading",
                  value: isKm ? "បន្ទាន់តែពេលចុះវត្តមាន" : isZh ? "打卡瞬时调用" : "Point-in-Time Only",
                },
                {
                  label: isKm ? "ការការពារទិន្នន័យ" : isZh ? "数据安全防护" : "Data Protection",
                  value: isKm ? "អ៊ិនគ្រីប TLS 1.3 & AES-256" : isZh ? "全链路及静态加密" : "Encrypted in Transit & at Rest",
                },
                {
                  label: isKm ? "ការនាំចេញទិន្នន័យ" : isZh ? "数据导出支持" : "Data Export",
                  value: isKm ? "ទម្រង់ CSV / Excel / PDF" : isZh ? "CSV / Excel / PDF" : "CSV / Excel Available",
                },
              ]}
            />
          </div>

          {/* Location Privacy Banner */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-brand-soft via-white to-white p-6 sm:p-10 shadow-xs">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 justify-between">
              <div className="space-y-2 max-w-2xl">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-brand px-2.5 py-0.5 text-xs font-bold text-white uppercase">
                  {isKm ? "ស្តង់ដារឯកជនភាពទីតាំង" : isZh ? "位置隐私基准" : "Location Privacy Standard"}
                </span>
                <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                  {isKm
                    ? "ការផ្ទៀងផ្ទាត់បន្ទាន់ មិនមែនការតាមដានជាប់រហូតឡើយ"
                    : isZh
                    ? "瞬时打卡核验，坚决杜绝侵入式全天候监控"
                    : "Point-in-Time Verification, Not Continuous Surveillance"}
                </h2>
                <p className="text-sm leading-relaxed text-body">
                  {isKm
                    ? "ទិន្នន័យ GPS ត្រូវបានដំណើរការតែនៅពេលចុចប៊ូតុងចុះវត្តមាន ដើម្បីផ្ទៀងផ្ទាត់ថាតើអ្នកនៅកន្លែងធ្វើការឬអត់។ បន្ទាប់ពីនោះ Sensor បិទភ្លាមៗ។"
                    : isZh
                    ? "GPS 定位传感器仅在触发打卡事件的 1-2 秒内核验分支机构围栏，核验完毕立即释放，绝不消耗电量，绝无后台追踪。"
                    : "GPS data is read only when submitting a clock-in or clock-out punch to verify presence within the designated branch perimeter."}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <div className="rounded-2xl border border-line bg-paper p-4 text-center shadow-xs">
                  <span className="block font-mono text-base sm:text-lg font-extrabold text-emerald-600">Point-in-Time</span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {isKm ? "ពិនិត្យតែពេលចុះវត្តមាន" : isZh ? "仅打卡瞬时核验" : "Punch Checks Only"}
                  </span>
                </div>
                <div className="rounded-2xl border border-line bg-paper p-4 text-center shadow-xs">
                  <span className="block font-mono text-base sm:text-lg font-extrabold text-brand">Encrypted</span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {isKm ? "TLS 1.3 & AES-256" : isZh ? "传输与静态加密" : "In Transit & At Rest"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Principles Grid */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-line bg-paper p-6 shadow-xs flex flex-col justify-between hover:border-brand hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand mb-4 shadow-xs">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-display text-[16.5px] font-bold text-ink">{item.title}</h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-body">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legal Policies Links Card */}
          <div className="mt-14 rounded-3xl border border-line bg-mist/50 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-bold text-ink">
                  {isKm ? "ពិនិត្យមើលគោលការណ៍ច្បាប់ និងអនុលោមភាពរបស់យើង" : isZh ? "查阅 AttendKH 官方合规与法律政策" : "Review Our Legal & Compliance Policies"}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {isKm
                    ? "ឯកសារច្បាប់ផ្លូវការដែលមានសុពលភាពចំពោះអ្នកប្រើប្រាស់ប្រព័ន្ធ AttendKH ទាំងអស់។"
                    : isZh
                    ? "适用于 AttendKH 全体企业客户与终端用户的法律约束性合规文档。"
                    : "Version-controlled, legally binding documentation for all AttendKH platform users."}
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="/privacy-policy"
                  className="rounded-xl border border-line bg-paper px-4 py-2 text-xs font-semibold text-ink hover:bg-mist transition-colors"
                >
                  {isKm ? "គោលការណ៍ឯកជនភាព" : isZh ? "隐私政策" : "Privacy Policy"}
                </Link>
                <Link
                  href="/terms"
                  className="rounded-xl border border-line bg-paper px-4 py-2 text-xs font-semibold text-ink hover:bg-mist transition-colors"
                >
                  {isKm ? "លក្ខខណ្ឌប្រើប្រាស់" : isZh ? "服务条款" : "Terms of Service"}
                </Link>
                <Link
                  href="/cookies"
                  className="rounded-xl border border-line bg-paper px-4 py-2 text-xs font-semibold text-ink hover:bg-mist transition-colors"
                >
                  {isKm ? "គោលការណ៍ Cookie" : isZh ? "Cookie 政策" : "Cookie Preferences"}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <CtaBand
          title={
            isKm
              ? "ទទួលបានបទពិសោធន៍គ្រប់គ្រងវត្តមានប្រកបដោយសុវត្ថិភាព និងតម្លាភាព"
              : isZh
              ? "立即体验安全、合规、透明的现代化劳动力管理系统"
              : "Experience secure, transparent workforce management"
          }
          sub={
            isKm
              ? "កក់ការសាកល្បងផ្ទាល់ខ្លួនដើម្បីស្វែងយល់ពីប្រព័ន្ធសុវត្ថិភាព និងឯកជនភាពកម្រិតសហគ្រាសរបស់យើង។"
              : isZh
              ? "预约 1 对 1 专家演示，全面了解企业级安全防护与精细化权限隔离架构。"
              : "Book a personalized demo to review our enterprise security and privacy controls."
          }
          cta={isKm ? "កក់ការសាកល្បង" : isZh ? "预约系统演示" : "Book a Demo"}
          href="/contact"
        />
      </div>
    </div>
  );
}
