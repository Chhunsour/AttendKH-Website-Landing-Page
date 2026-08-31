"use client";

import Link from "next/link";
import {
  Headphones,
  Send,
  Mail,
  MapPin,
  Clock,
  HelpCircle,
  Smartphone,
  WifiOff,
  Calculator,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import {
  useCopy,
  PageHero,
  Section,
  SectionHead,
  DirectAnswerBlock,
  Reveal,
  CtaBand,
} from "@/components/site/ui";
import { useSite } from "@/lib/i18n";

export function SupportView() {
  const c = useCopy();
  const f = c.footer;
  const { lang, publicSettings } = useSite();
  const isKm = lang === "km";

  const channels = [
    {
      icon: Send,
      title: isKm ? "Telegram Hotline" : "Telegram Support Hotline",
      detail: "@attendkh",
      href: publicSettings.telegramUrl,
      external: true,
      time: isKm ? "ក្នុងម៉ោងធ្វើការ" : "Mon–Fri, 8:00 AM – 5:30 PM ICT",
      desc: isKm
        ? "ជជែកផ្ទាល់ជាមួយក្រុមការងារបច្ចេកទេសនៅរាជធានីភ្នំពេញ"
        : "Chat directly with our Phnom Penh support and engineering team.",
    },
    {
      icon: Mail,
      title: isKm ? "អ៊ីមែលជំនួយការងារ" : "Email Support",
      detail: publicSettings.contactEmail,
      href: `mailto:${publicSettings.contactEmail}`,
      external: false,
      time: isKm ? "ក្នុងម៉ោងធ្វើការ" : "Mon–Fri, 8:00 AM – 5:30 PM ICT",
      desc: isKm
        ? "សម្រាប់សំណើផ្លូវការ វិក្កយបត្រ ឬរបាយការណ៍បច្ចេកទេស"
        : "For billing questions, official invoices, and formal ticket escalation.",
    },
    {
      icon: MapPin,
      title: isKm ? "ការិយាល័យទួលគោក" : "Toul Kork Support Hub",
      detail: isKm ? "ខណ្ឌទួលគោក រាជធានីភ្នំពេញ" : "No. 12, St 315, Toul Kork, Phnom Penh",
      href: "/contact",
      external: false,
      time: isKm ? "ច័ន្ទ–សុក្រ ៨:០០–១៧:៣០" : "Mon–Fri, 8:00 AM – 5:30 PM ICT",
      desc: isKm
        ? "ស្វាគមន៍ការចូលមកជួបផ្ទាល់ ឬបណ្តុះបណ្តាលក្រុមការងារ"
        : "In-person onboarding, hardware setup, and manager training sessions.",
    },
  ];

  const troubleshootingTopics = [
    {
      icon: Smartphone,
      title: isKm ? "ការកំណត់សិទ្ធិទីតាំង GPS (iOS & Android)" : "Location Permissions Setup",
      desc: isKm
        ? "របៀបបើក 'Precise Location' លើទូរស័ព្ទ iPhone និង Android ដើម្បីធានាថាការចុះវត្តមានស្ថិតក្នុងកាំសាខាត្រឹមត្រូវ។"
        : "Ensure 'Precise Location' is enabled in iOS Settings or Android App Info so clock-ins register within the branch geofence.",
    },
    {
      icon: WifiOff,
      title: isKm ? "ការដោះស្រាយបញ្ហាដាច់សេវា (Offline Sync)" : "Offline Punch Synchronization",
      desc: isKm
        ? "ប្រសិនបើដាច់សេវាទូរស័ព្ទ កម្មវិធីនឹងរក្សាទុកម៉ោងក្នុងទូរស័ព្ទ។ កុំលុបកម្មវិធី ហើយភ្ជាប់ Wi-Fi ឬ 4G វិញដើម្បី upload។"
        : "Punches are safely stored in encrypted local storage. Connect to Wi-Fi or 4G to push cached punches to the cloud.",
    },
    {
      icon: Calculator,
      title: isKm ? "ការកែសម្រួលម៉ោង និងគណនាប្រាក់ខែឡើងវិញ" : "Punch Overrides & Recalculation",
      desc: isKm
        ? "របៀបដែលប្រធានសាខាអាចអនុម័តការកែម៉ោង (Time Fix) និងរបៀបដែលប្រព័ន្ធគណនាប្រាក់ខែឡើងវិញដោយស្វ័យប្រវត្តិ។"
        : "How branch managers approve missed punch requests with audit notes and trigger instant payroll recalculation.",
    },
    {
      icon: ShieldAlert,
      title: isKm ? "ការរារាំង GPS ក្លែងក្លាយ និង Mock Locations" : "Anti-Mock Location Warnings",
      desc: isKm
        ? "មូលហេតុដែលប្រព័ន្ធរារាំងទូរស័ព្ទដែលមានកម្មវិធី Mock Location ឬទូរស័ព្ទដែលបាន Jailbreak/Root។"
        : "Why AttendKH flags devices with active mock location providers, VPN coordinate tampering, or root modifications.",
    },
  ];

  return (
    <>
      <PageHero
        title={isKm ? "មជ្ឈមណ្ឌលជំនួយ និងសេវាគាំទ្រ" : "Help & Customer Support Center"}
        sub={
          isKm
            ? "ជំនួយផ្ទាល់ជាភាសាខ្មែរ និងអង់គ្លេស ពីក្រុមការងាររបស់យើងនៅរាជធានីភ្នំពេញ"
            : "Dedicated local support from our Phnom Penh team. Operating Monday to Friday, 8:00 AM – 5:30 PM ICT."
        }
      />

      {/* Support Channels Grid */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-6 md:grid-cols-3">
            {channels.map((ch, i) => {
              const Icon = ch.icon;
              return (
                <Reveal key={ch.title} delay={i * 0.06}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-line bg-paper p-7 shadow-xs hover:border-brand hover:shadow-md transition-all">
                    <div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand mb-5">
                        <Icon size={22} />
                      </div>
                      <h3 className="font-display text-[17.5px] font-bold text-ink">{ch.title}</h3>
                      <p className="mt-1 font-mono text-xs font-semibold text-brand">{ch.detail}</p>
                      <p className="mt-1 text-[11px] text-slate-500 font-medium">{ch.time}</p>
                      <p className="mt-4 text-xs leading-relaxed text-body">{ch.desc}</p>
                    </div>

                    <div className="mt-6 border-t border-line/60 pt-4">
                      {ch.external ? (
                        <a
                          href={ch.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:underline"
                        >
                          <span>{isKm ? "ទាក់ទងតាម Telegram" : "Open Telegram Chat"}</span>
                          <ArrowRight size={13} />
                        </a>
                      ) : (
                        <Link
                          href={ch.href}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:underline"
                        >
                          <span>{isKm ? "ផ្ញើសំណើ ឬព័ត៌មាន" : "Contact Team"}</span>
                          <ArrowRight size={13} />
                        </Link>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Direct Answer Block for Urgent Help */}
      <Section tone="mist">
        <div className="mx-auto max-w-[1240px]">
          <DirectAnswerBlock
            question={
              isKm
                ? "តើខ្ញុំអាចទទួលបានជំនួយបន្ទាន់សម្រាប់ AttendKH នៅកម្ពុជាដោយរបៀបណា?"
                : "How do I get urgent support for AttendKH in Cambodia?"
            }
            answer={
              isKm
                ? "សម្រាប់ជំនួយបច្ចេកទេស វិធីដែលលឿនបំផុតគឺផ្ញើសារមកកាន់ Telegram Hotline @attendkh របស់យើង ក្នុងម៉ោងធ្វើការ (ច័ន្ទ–សុក្រ ៨:០០ ដល់ ១៧:៣០ ICT)។ អ្នកក៏អាចផ្ញើអ៊ីមែលមកកាន់ support@attendkh.com ឬណាត់ជួបនៅការិយាល័យទួលគោកបានផងដែរ។"
                : "For technical assistance, message our direct Telegram hotline at @attendkh during business hours (Monday to Friday, 8:00 AM to 5:30 PM ICT). For account or billing requests, email support@attendkh.com or schedule an in-person session at our Toul Kork office."
            }
            facts={[
              {
                label: isKm ? "ម៉ោងធ្វើការគាំទ្រ" : "Operating Hours",
                value: "Mon–Fri, 8:00–17:30 ICT",
              },
              {
                label: isKm ? "ឆានែលគាំទ្រផ្ទាល់" : "Direct Channel",
                value: "Telegram @attendkh",
              },
              {
                label: isKm ? "ភាសាគាំទ្រ" : "Support Languages",
                value: isKm ? "ខ្មែរ និង អង់គ្លេស" : "Khmer & English Native",
              },
            ]}
          />
        </div>
      </Section>

      {/* Common Troubleshooting Guides */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <SectionHead
            title={isKm ? "ការណែនាំអំពីបញ្ហាទូទៅ" : "Common Troubleshooting & Guides"}
            sub={
              isKm
                ? "ដំណោះស្រាយរហ័សចំពោះបញ្ហាទីតាំង GPS ការដាច់សេវា និងការគណនាប្រាក់ខែ"
                : "Quick steps for GPS permissions, offline punch caching, and supervisor overrides."
            }
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {troubleshootingTopics.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.05}>
                  <div className="rounded-2xl border border-line bg-paper p-6 shadow-xs">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mist text-brand mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display text-[16px] font-bold text-ink">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-body">{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      <CtaBand
        title={isKm ? "ត្រូវការការបណ្តុះបណ្តាលសម្រាប់ក្រុមការងារ?" : "Need Custom Onboarding for Your Staff?"}
        sub={
          isKm
            ? "យើងផ្តល់ការបណ្តុះបណ្តាលដល់ប្រធានសាខា និងបុគ្គលិកធនធានមនុស្សដោយឥតគិតថ្លៃ"
            : "We provide free onboarding sessions for HR managers and branch supervisors in Phnom Penh."
        }
      />
    </>
  );
}
