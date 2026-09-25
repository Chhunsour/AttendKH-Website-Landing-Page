import type { BlogPost } from "./site-content";

export const newBlogPostsSep12to14: BlogPost[] = [
  // =========================================================================
  // BLOG 3: How to Build a Better Employee Attendance Policy for Your Cambodian Business (Sep 14, 2026)
  // =========================================================================
  {
    id: "post-employee-attendance-policy-guide-cambodia",
    slug: "employee-attendance-policy-guide-cambodia",
    title: "How to Build a Better Employee Attendance Policy for Your Cambodian Business",
    title_km: "របៀបបង្កើតគោលការណ៍វត្តមានបុគ្គលិកកាន់តែប្រសើរសម្រាប់អាជីវកម្មរបស់អ្នកនៅកម្ពុជា",
    title_zh: "柬埔寨企业员工考勤管理制度与合规政策制定实务指南",
    excerpt:
      "A comprehensive, practical guide for Cambodian enterprises to build a clear, fair, and legally compliant employee attendance policy. Covers work schedules, grace periods, leave rules, disciplinary procedures, and multi-branch enforcement.",
    excerpt_km:
      "មគ្គុទ្ទេសក៍ជាក់ស្តែង និងទូលំទូលាយសម្រាប់អាជីវកម្មនៅកម្ពុជា ក្នុងការកសាងគោលការណ៍វត្តមានបុគ្គលិកច្បាស់លាស់ យុត្តិធម៌ និងស្របច្បាប់។ គ្របដណ្តប់លើកាលវិភាគ ពេលអនុគ្រោះ ច្បាប់ឈប់សម្រាក វិន័យការងារ និងការគ្រប់គ្រងសាខាច្រើន។",
    excerpt_zh:
      "柬埔寨企业量身定制的员工考勤制度与合规政策实操指南：涵盖工时排班、迟到宽限期、请假规范、合规纪律处分程序以及跨省多分店统一执行标准。",
    key_takeaways: [
      "A written, transparent attendance policy eliminates workplace ambiguity, protects employee trust, and provides essential legal defense during Ministry of Labour and Vocational Training (MoLVT) inspections.",
      "Cambodian labor regulations mandate strict parameters: 48-hour standard workweeks (Article 137), a 2-hour daily voluntary overtime cap (Article 139), and 18 days of annual leave (Article 166).",
      "Effective policies establish a realistic 10-minute traffic grace buffer for Phnom Penh morning commutes, substituting arbitrary wage docking with structured progressive warning tiers.",
      "Digital workforce tools like AttendKH automate policy enforcement across multi-branch retail, F&B, factories, and offices without putting administrative burdens on managers.",
    ],
    key_takeaways_km: [
      "គោលការណ៍វត្តមានជាលាយលក្ខណ៍អក្សរច្បាស់លាស់ ជួយលុបបំបាត់ភាពមិនច្បាស់លាស់ បង្កើនទំនុកចិត្តបុគ្គលិក និងជាភស្តុតាងការពារផ្លូវច្បាប់ក្នុងពេលអធិការកិច្ចការងាររបស់ក្រសួងការងារ។",
      "ច្បាប់ការងារកម្ពុជាកំណត់ច្បាស់លាស់៖ ម៉ោងធ្វើការ ៤៨ ម៉ោង/សប្តាហ៍ (មាត្រា ១៣៧), ថែមម៉ោងអតិបរមា ២ ម៉ោង/ថ្ងៃដោយស្ម័គ្រចិត្ត (មាត្រា ១៣៩), និងច្បាប់ឈប់សម្រាកប្រចាំឆ្នាំ ១៨ ថ្ងៃ (មាត្រា ១៦៦)។",
      "គោលការណ៍ដ៏មានប្រសិទ្ធភាពគួរកំណត់ចន្លោះពេលអនុគ្រោះ ១០ នាទីសម្រាប់ការកកស្ទះចរាចរណ៍នៅភ្នំពេញ ដោយជំនួសការកាត់ប្រាក់ខែភ្លាមៗ មកជាការណែនាំជាដំណាក់កាល។",
      "ប្រព័ន្ធបច្ចេកវិទ្យាដូចជា AttendKH ជួយអនុវត្តគោលការណ៍ក្រុមហ៊ុនដោយស្វ័យប្រវត្តិតាមសាខាហាង រោងចក្រ និងការិយាល័យ ដោយមិនបង្កបន្ទុកដល់អ្នកគ្រប់គ្រងឡើយ។",
    ],
    key_takeaways_zh: [
      "制定书面透明的考勤管理规章制度，能够消除管理模糊地带，增强劳资信任，并在劳工与职业培训部（MoLVT）稽查中提供不可或缺的合法抗辩凭据。",
      "柬埔寨现行《劳工法》红线要求：每周标准工时上限 48 小时（第 137 条）、每日自愿加班最多 2 小时（第 139 条）以及全年 18 天法定年假（第 166 条）。",
      "成熟的考勤制度通常针对金边早高峰交通设定 10 分钟弹性宽限期，以分级梯度预警替代粗暴克扣底薪，兼顾人文关怀与制度刚性。",
      "借助 AttendKH 等数字化中台，企业可实现多分店、连锁餐饮、制造车间与办公室考勤规则的云端自动化执行，极大减轻基层管理者的审核负担。",
    ],
    content: `![Cambodian HR director and diverse enterprise team discussing workplace attendance policy guidelines in a Phnom Penh conference room](/blog/employee-attendance-policy-guide-cambodia.jpg)

## 1. Why Every Cambodian Business Needs a Documented Attendance Policy

In fast-growing Cambodian enterprises—whether managing a tech office in Tuol Kork, a multi-outlet coffee chain spanning BKK1 and Toul Tompoung, an auto garage in Chamkarmon, or a garment line in the Phnom Penh Special Economic Zone (PPSEZ)—workforce rules frequently begin as unwritten assumptions.

When a company employs five people, the founder can verbally manage shift times, late arrivals, and emergency absences over coffee. But once headcounts grow past 20, 50, or 200 across multiple branches, informal verbal arrangements inevitably break down:
- One department head tolerates 20-minute daily lateness, while another docks wages on the first late arrival, breeding perceived favoritism and workplace resentment.
- Employees text sudden absence notices to personal Telegram accounts at 09:30 AM, leaving shift supervisors scrambling to cover customer-facing counters.
- Unapproved overtime claims balloon payroll expenditure by thousands of dollars at month-end.
- When an employee is eventually terminated for chronic attendance failure, the company faces expensive wrongful termination complaints at the Ministry of Labour because no written warnings or clear policies were ever documented.

> **Legal & Practical Clarification**: A documented internal attendance policy is your company's operational constitution. Under *Article 22 of the Cambodian Labour Law*, every enterprise employing at least 8 workers must establish Internal Enterprise Regulations (Internal Rules) registered with the Ministry of Labour and Vocational Training (MoLVT). The framework detailed below provides practical operational guidance to harmonize company culture with Cambodian statutory baselines; it is not a formal legal substitute for tailored legal counsel.

---

## 2. Statutory Baselines vs. Internal Discretion: What the Law Dictates

When drafting your company attendance guidelines, you must clearly distinguish between **non-negotiable legal mandates** and **areas of company discretion**:

| Operational Dimension | Cambodian Statutory Baseline (Labour Law) | Recommended Internal Company Policy Discretion |
| :--- | :--- | :--- |
| **Standard Workweek** | **Maximum 48 hours/week** or 8 hours/day (*Article 137*); mandatory weekly rest day (*Article 147*) | Specific shift hours (e.g., 08:00–17:00 or staggered retail shifts 07:00–15:30 / 14:30–22:00) |
| **Overtime Work** | Strictly **voluntary**; strictly capped at **maximum 2 hours/day** (*Article 139*) | Requirement for advance manager approval before any overtime work commences |
| **Lateness & Commuting** | The law does not mandate wages for unworked time, but arbitrary punitive wage docking is restricted | Standard **10-minute traffic grace window** with progressive verbal/written warnings |
| **Paid Annual Leave** | **18 working days per year** (1.5 days/month accrued), increasing with tenure (*Article 166*) | Advance submission timelines (e.g., submit leave request 3 to 7 days in advance) |
| **Special Event Leave** | Up to 7 days per year for direct marriage, paternity, or bereavement (*Article 169*) | Submission of marriage certificates or funeral notices to HR within 5 business days |
| **Medical Sick Leave** | Statutory framework requiring valid medical certification from licensed clinics | Notification required before shift start (e.g., by 07:30 AM); doctor's note within 48 hours |
| **Unexcused Absence (AWOL)** | Consecutive unnotified absences may constitute serious misconduct under *Article 83* | Defined abandonment threshold (e.g., 2 consecutive days without notice triggers disciplinary review) |

---

## 3. The 10-Point Sample Attendance Policy Framework

To build a policy that is easy for frontline staff to understand and for managers to enforce, structure your document around these ten practical sections:

### Section 1: Work Schedules & Shift Design
Clearly specify operating schedules for each staff group:
- **Corporate & Office Staff**: Monday through Friday 08:00–17:00, Saturday 08:00–12:00 (44 hours/week).
- **Retail & Hospitality Staff**: Rotating shift rosters (e.g., Morning Shift 06:30–15:30, Afternoon Shift 13:30–22:30) distributed at least 7 days before the start of each work week.
- **Unpaid Meal Breaks**: Define mandatory 1-hour midday breaks to prevent disputes over break duration.

### Section 2: Check-In & Check-Out Expectations
- Staff must record their own attendance using the designated digital system ([AttendKH Mobile App](/attendance) within the verified GPS geofence, or the entrance Tablet QR Kiosk).
- Clocking in or out for another employee (buddy punching) constitutes severe misconduct subject to immediate formal disciplinary action.
- Leaving workplace premises during scheduled working hours for personal errands requires explicit floor supervisor permission and an interim check-out record.

### Section 3: Lateness & The Morning Grace Window
- **Standard Grace Window**: A 10-minute grace window (08:00–08:10) applies to accommodate morning traffic congestion along Monivong Boulevard, Russian Boulevard, or heavy rain.
- **Making Up Lost Time**: Staff arriving during the grace window must complete their full 8 daily hours at shift end.
- **Repeated Tardiness Protocol**:
  - Arriving after the 10-minute window without prior notification is logged as unexcused lateness.
  - 1st to 3rd lateness in a calendar month: Informal verbal coaching by direct supervisor.
  - 4th lateness: Formal written advisory from HR.
  - 5th or persistent lateness: Documented review under progressive disciplinary procedures.

### Section 4: Unplanned Absence & Emergency Notification
- When an employee is unable to report to work due to sudden illness or an emergency, they must notify their direct supervisor or submit an urgent notice via the [AttendKH App](/downloads) at least **30 minutes prior to scheduled shift start** (or by 07:30 AM).
- Sending an unverified message to a casual coworker does not satisfy official notification requirements.

### Section 5: Leave Request & Approval Protocols
- **Annual Leave**: Must be submitted at least 3 business days in advance for 1–2 days off, and at least 7 business days in advance for 3 or more consecutive days.
- **Medical Sick Leave**: Requires submission of a licensed clinic or hospital medical certificate to HR within 48 hours of returning to work.
- **Approval Chain**: Requests flow from employee submission → direct supervisor review → HR balance verification → final approval.

### Section 6: Overtime Authorization Guidelines
- Overtime is entirely **voluntary** and limited to maximum 2 hours per day under *Article 139*.
- No employee may perform payable overtime work without prior written or digital pre-approval from their department manager.
- Approved overtime hours are compensated strictly in accordance with statutory multipliers (150% standard daytime, 200% night shifts, 200% Sundays and public holidays) through the [AttendKH Payroll Engine](/payroll).

### Section 7: Missed Punches & Manual Attendance Corrections
- If an employee forgets to clock in, experiences device battery failure, or encounters network issues, they must submit a **Manual Attendance Correction Request** within 24 hours.
- The request must specify exact arrival/departure times, state the reason for the missed punch, and require supervisor sign-off before being credited in the monthly timesheet.

### Section 8: Managerial Responsibilities
- Supervisors must review and resolve all pending leave, overtime, and attendance correction requests within **24 hours of submission**.
- Managers must apply attendance rules uniformly and without personal bias across all team members.

### Section 9: Handling Repeated Violations (Progressive Discipline)
To ensure compliance with Cambodian labor dispute arbitration standards, disciplinary actions must follow a progressive, documented path:
1. **Stage 1: Informal Verbal Reminder** (Logged privately in HR records).
2. **Stage 2: First Written Warning Letter** (Signed by employee, manager, and HR; archived in personnel file).
3. **Stage 3: Second Written Warning Letter** (Specifies 30-day corrective probation).
4. **Stage 4: Legal Termination Under Article 83** (For persistent unexcused absence, gross insubordination, or repeated time theft, backed by full timestamped audit trails).

### Section 10: Record Keeping & Timesheet Audits
- All digital attendance timestamps, GPS logs, leave slips, and overtime authorizations are securely archived in [AttendKH Cloud Storage](/trust) for a minimum statutory retention period of five years.
- Employees may review their personal monthly attendance summary at any time directly within the mobile application.

---

## 4. Multi-Branch Policy Enforcement: Avoiding Regional Disconnects

For multi-location Cambodian organizations with outlets in Phnom Penh, Siem Reap, Battambang, or Kampot, maintaining policy consistency is notoriously difficult. Branch managers often develop their own informal habits, leading to employee discontent when staff transfer between locations.

With [AttendKH Multi-Branch Architecture](/multi-branch):
- **Centralized Rule Engine**: Company policies (grace windows, overtime caps, leave types) are configured once in the master admin dashboard and apply universally across all branches.
- **Localized Geofences**: Each branch maintains its own geographic perimeter, ensuring staff can only check in at their assigned workplace.
- **Head Office Real-Time Audit**: Executive directors and HR managers monitor on-time percentages, active overtime hours, and unexcused absences across every provincial branch simultaneously from a single screen.

---

## 5. 6 Questions HR Must Answer Before Launching Your Policy

Before releasing your new attendance policy to employees, pressure-test your readiness with these questions:

1. **Is the language clear, simple, and bilingual?**  
   Ensure the policy is written in plain Khmer and English. Avoid dense legalistic jargon that frontline staff cannot understand.
2. **Have floor supervisors been trained?**  
   Your policy will fail if branch managers do not know how to approve overtime or handle late arrivals consistently. Conduct a 30-minute training session for all team leads.
3. **Are grace periods realistic?**  
   Test your 10-minute grace window against actual local road conditions. A policy that sets an impossible standard will simply be ignored.
4. **Is the digital submission process accessible?**  
   Can employees easily submit leave and view their schedules on their phones, or are they forced to fill out paper forms in duplicate?
5. **Does the policy link directly to payroll?**  
   Ensure your attendance rules flow automatically into salary calculations without requiring manual spreadsheet transcription.
6. **Have all employees acknowledged receipt?**  
   Collect signed acknowledgment slips or digital in-app acceptances confirming every employee has read and understood the rules.

---

## 6. The Attendance Policy Rollout Checklist & Next Steps

Use this step-by-step checklist to launch your attendance policy smoothly:

- [ ] **Step 1**: Audit existing informal practices and identify top causes of attendance friction.
- [ ] **Step 2**: Align shift schedules and overtime rules with MoLVT *Article 137* and *Article 139*.
- [ ] **Step 3**: Draft the 10-point policy document in both Khmer and English.
- [ ] **Step 4**: Consult department heads and branch supervisors for practical feedback.
- [ ] **Step 5**: Register the updated Internal Rules with your local MoLVT labor inspectorate if employing 8+ workers.
- [ ] **Step 6**: Configure shift times, geofences, and grace periods in [AttendKH](/pricing).
- [ ] **Step 7**: Conduct an all-hands meeting to introduce the policy with transparency and empathy.
- [ ] **Step 8**: Collect employee acknowledgments and monitor operations for the first 30 days.

### Put Your Policy on Autopilot with AttendKH
Stop policing timesheets manually. Discover how [AttendKH Attendance](/attendance) and [AttendKH Payroll](/payroll) automate policy enforcement, overtime tracking, and leave management for just **$1 USD per employee per month**. [Explore our transparent pricing](/pricing), [download the mobile apps](/downloads), or [contact our Phnom Penh team](/contact) to get started today.`,
    content_km: `![ប្រធានផ្នែក HR និងក្រុមការងារសហគ្រាសកម្ពុជាពិភាក្សាអំពីគោលការណ៍វត្តមានការងារក្នុងបន្ទប់ប្រជុំនៅរាជធានីភ្នំពេញ](/blog/employee-attendance-policy-guide-cambodia.jpg)

## ១. ហេតុអ្វីបានជាអាជីវកម្មនៅកម្ពុជាត្រូវការគោលការណ៍វត្តមានជាលាយលក្ខណ៍អក្សរ?

នៅក្នុងសហគ្រាសកម្ពុជាដែលកំពុងរីកចម្រើនយ៉ាងឆាប់រហ័ស មិនថាជាការិយាល័យបច្ចេកវិទ្យានៅទួលគោក ហាងកាហ្វេដែលមានសាខាច្រើននៅបឹងកេងកង និងទួលទំពូង យានដ្ឋានជួសជុលរថយន្តនៅចំការមន ឬរោងចក្រកាត់ដេរក្នុងតំបន់សេដ្ឋកិច្ចពិសេសភ្នំពេញ (PPSEZ) ឡើយ វិធានការការងារច្រើនតែចាប់ផ្តើមឡើងពីការយល់ស្របតាមពាក្យសំដី។

នៅពេលក្រុមហ៊ុនមានបុគ្គលិកត្រឹមតែ ៥ នាក់ ស្ថាបនិកអាចនិយាយគ្នាដោយផ្ទាល់ពេលហូបកាហ្វេអំពីម៉ោងធ្វើការ ការមកយឺត និងការសុំច្បាប់បន្ទាន់។ ប៉ុន្តែនៅពេលចំនួនបុគ្គលិកកើនឡើងលើសពី ២០ នាក់ ៥០ នាក់ ឬ ២០០ នាក់តាមសាខាច្រើន ការគ្រប់គ្រងតាមពាក្យសំដីនឹងបង្កបញ្ហាធំៗភ្លាមៗ៖
- ប្រធានផ្នែកមួយយោគយល់ឱ្យបុគ្គលិកមកយឺត ២០ នាទីរាល់ថ្ងៃ រីឯប្រធានផ្នែកមួយទៀតកាត់ប្រាក់ខែតាំងពីយឺតលើកដំបូង ដែលបង្កឱ្យមានការថ្នាំងថ្នាក់ និងការរើសអើងក្នុងកន្លែងធ្វើការ។
- បុគ្គលិកផ្ញើសារសុំច្បាប់តាម Telegram ផ្ទាល់ខ្លួននៅម៉ោង ០៩:៣០ ព្រឹក ធ្វើឱ្យប្រធានវេនពិបាកស្វែងរកមនុស្សមកជំនួសកន្លែងលក់ដូរ។
- ការទាមទារម៉ោងថែមគ្មានការអនុម័ត ធ្វើឱ្យការចំណាយលើប្រាក់ខែកើនឡើងរាប់ពាន់ដុល្លារនៅចុងខែ។
- នៅពេលក្រុមហ៊ុនសម្រេចចិត្តបញ្ឈប់បុគ្គលិកដែលអវត្តមានញឹកញាប់ ក្រុមហ៊ុនបែរជាប្រឈមនឹងពាក្យបណ្តឹងបញ្ឈប់ដោយអយុត្តិធម៌នៅក្រសួងការងារ ដោយសារគ្មានកំណត់ត្រា ឬគោលការណ៍ច្បាស់លាស់ពីមុនមក។

> **ការបញ្ជាក់ផ្លូវច្បាប់ និងការអនុវត្ត**: គោលការណ៍វត្តមានផ្ទៃក្នុងគឺជាច្បាប់ទម្លាប់នៃការងារប្រចាំថ្ងៃរបស់ក្រុមហ៊ុន។ យោងតាម **មាត្រា ២២ នៃច្បាប់ស្តីពីការងារកម្ពុជា** សហគ្រាសទាំងអស់ដែលមានកម្មករនិយោជិតចាប់ពី ៨ នាក់ឡើងទៅ ត្រូវតែបង្កើតបទបញ្ជាផ្ទៃក្នុងសហគ្រាស ដែលត្រូវយកទៅចុះបញ្ជីនៅក្រសួងការងារ និងបណ្តុះបណ្តាលវិជ្ជាជីវៈ (MoLVT)។

---

## ២. ច្បាប់ការងារ និងការសម្រេចចិត្តផ្ទៃក្នុងរបស់ក្រុមហ៊ុន

| ទិដ្ឋភាពនៃការងារ | បទដ្ឋានច្បាប់ការងារកម្ពុជា (MoLVT) | គោលការណ៍ផ្ទៃក្នុងដែលក្រុមហ៊ុនអាចកំណត់បាន |
| :--- | :--- | :--- |
| **ម៉ោងធ្វើការស្តង់ដារ** | **អតិបរមា ៤៨ ម៉ោង/សប្តាហ៍** ឬ ៨ ម៉ោង/ថ្ងៃ (*មាត្រា ១៣៧*); ថ្ងៃសម្រាកប្រចាំសប្តាហ៍ (*មាត្រា ១៤៧*) | ម៉ោងធ្វើការជាក់លាក់ (ឧ. ០៨:០០–១៧:០០ ឬបែងចែកវេនហាងលក់រាយ ០៧:០០–១៥:៣០) |
| **ការធ្វើការបន្ថែមម៉ោង (OT)** | ត្រូវធ្វើឡើងដោយ **ការស្ម័គ្រចិត្ត**; កម្រិតអតិបរមា **២ ម៉ោង/ថ្ងៃ** (*មាត្រា ១៣៩*) | តម្រូវឱ្យមានការស្នើសុំ និងការអនុម័តជាមុនពីប្រធានផ្នែក មុនពេលចាប់ផ្តើមថែមម៉ោង |
| **ការមកយឺត និងចរាចរណ៍** | ច្បាប់មិនតម្រូវឱ្យបើកប្រាក់ឈ្នួលសម្រាប់ម៉ោងមិនធ្វើការឡើយ ប៉ុន្តែហាមឃាត់ការផាកពិន័យកាត់ប្រាក់ខែតាមទំនើងចិត្ត | កំណត់ **ចន្លោះពេលអនុគ្រោះ ១០ នាទី** សម្រាប់ការកកស្ទះចរាចរណ៍ រួមជាមួយការណែនាំជាដំណាក់កាល |
| **ច្បាប់ឈប់សម្រាកប្រចាំឆ្នាំ** | **១៨ ថ្ងៃក្នុងមួយឆ្នាំ** (សន្សំបាន ១.៥ ថ្ងៃ/ខែ) និងកើនឡើងតាមអតីតភាព (*មាត្រា ១៦៦*) | កំណត់កាលបរិច្ឆេទស្នើសុំជាមុន (ឧ. ត្រូវដាក់ពាក្យសុំច្បាប់ ៣ ទៅ ៧ ថ្ងៃជាមុន) |
| **ច្បាប់ឈប់សម្រាកពិសេស** | រហូតដល់ ៧ ថ្ងៃក្នុងមួយឆ្នាំ សម្រាប់អាពាហ៍ពិពាហ៍ ឬបុណ្យសពសាច់ញាតិផ្ទាល់ (*មាត្រា ១៦៩*) | ត្រូវភ្ជាប់ឯកសារបញ្ជាក់ (សំបុត្រអាពាហ៍ពិពាហ៍ ឬធៀបបុណ្យ) ជូន HR ក្នុងពេល ៥ ថ្ងៃ |
| **ការសុំច្បាប់ឈឺ** | ត្រូវមានលិខិតបញ្ជាក់សុខភាពពីគ្លីនិក ឬមន្ទីរពេទ្យស្របច្បាប់ | ត្រូវជូនដំណឹងមុនពេលចាប់ផ្តើមវេន (មុនម៉ោង ០៧:៣០ ព្រឹក) និងផ្ញើលិខិតពេទ្យក្នុងពេល ៤៨ ម៉ោង |
| **ការអវត្តមានគ្មានការអនុញ្ញាត (AWOL)** | ការឈប់ពីការងារជាច្រើនថ្ងៃជាប់ៗគ្នាដោយគ្មានការអនុញ្ញាត ចាត់ទុកជាកំហុសធ្ងន់ (*មាត្រា ៨៣*) | កំណត់ច្បាស់លាស់ (ឧ. បាត់មុខ ២ ថ្ងៃជាប់គ្នាដោយគ្មានដំណឹង នឹងត្រូវពិនិត្យវិន័យ) |

---

## ៣. ក្របខ័ណ្ឌគំរូនៃគោលការណ៍វត្តមាន ១០ ចំណុច

### ចំណុចទី ១៖ កាលវិភាគការងារ និងវេន
- បុគ្គលិកការិយាល័យ៖ ថ្ងៃចន្ទ ដល់ សុក្រ ០៨:០០–១៧:០០, ថ្ងៃសៅរ៍ ០៨:០០–១២:០០ (៤៤ ម៉ោង/សប្តាហ៍)។  
- បុគ្គលិកផ្នែកសេវាកម្ម និងហាង៖ វេនវិលជុំដែលត្រូវប្រកាសយ៉ាងតិច ៧ ថ្ងៃមុនពេលចាប់ផ្តើមសប្តាហ៍ការងារថ្មី។  
- ម៉ោងសម្រាកបាយថ្ងៃត្រង់ ១ ម៉ោងច្បាស់លាស់។

### ចំណុចទី ២៖ ការចុះវត្តមានចូល និងចេញពីការងារ
- បុគ្គលិកត្រូវចុះវត្តមានដោយខ្លួនឯងតាមរយៈ [កម្មវិធីទូរស័ព្ទ AttendKH](/attendance) ក្នុងរង្វង់ GPS របស់ក្រុមហ៊ុន ឬស្កេនកូដ QR លើថេប្លេតនៅមាត់ទ្វារ។  
- ការចុះវត្តមានជំនួសគ្នា (Buddy punching) គឺជាការបំពានវិន័យការងារយ៉ាងធ្ងន់ធ្ងរ។  
- ការចេញក្រៅការិយាល័យក្នុងម៉ោងធ្វើការសម្រាប់កិច្ចការផ្ទាល់ខ្លួន ត្រូវសុំការអនុញ្ញាតពីប្រធានផ្នែក និងស្កេនចេញ។

### ចំណុចទី ៣៖ ការមកយឺត និងចន្លោះពេលអនុគ្រោះ ១០ នាទី
- ផ្តល់ចន្លោះពេលអនុគ្រោះ ១០ នាទី (០៨:០០–០៨:១០) សម្រាប់ការកកស្ទះចរាចរណ៍នៅរាជធានីភ្នំពេញ ឬភ្លៀងធ្លាក់។  
- បុគ្គលិកដែលមកដល់ក្នុងពេលអនុគ្រោះ ត្រូវបំពេញការងារឱ្យគ្រប់ ៨ ម៉ោងនៅចុងម៉ោង។  
- ការមកយឺតលើសពី ១០ នាទីដោយគ្មានដំណឹងជាមុន៖ លើកទី ១ ដល់ទី ៣ ក្នុងមួយខែ ធ្វើការណែនាំផ្ទាល់មាត់; លើកទី ៤ ជូនលិខិតព្រមានជាលាយលក្ខណ៍អក្សរ។

### ចំណុចទី ៤៖ ការជូនដំណឹងពេលអវត្តមានបន្ទាន់
- ក្នុងករណីមានជំងឺ ឬធុរៈបន្ទាន់ ត្រូវជូនដំណឹងទៅប្រធានផ្នែក ឬស្នើសុំតាម [កម្មវិធី AttendKH](/downloads) យ៉ាងតិច ៣០ នាទីមុនម៉ោងចាប់ផ្តើមការងារ (ឬមុនម៉ោង ០៧:៣០ ព្រឹក)។

### ចំណុចទី ៥៖ ដំណើរការស្នើសុំច្បាប់ឈប់សម្រាក
- ច្បាប់ប្រចាំឆ្នាំត្រូវស្នើសុំមុន ៣ ថ្ងៃ (សម្រាប់ការឈប់ ១–២ ថ្ងៃ) ឬមុន ៧ ថ្ងៃ (សម្រាប់ការឈប់ចាប់ពី ៣ ថ្ងៃឡើងទៅ)។  
- ច្បាប់ឈឺត្រូវផ្ញើលិខិតបញ្ជាក់ពីគ្រូពេទ្យជូន HR ក្នុងរយៈពេល ៤៨ ម៉ោងក្រោយពេលត្រឡប់មកធ្វើការវិញ។

### ចំណុចទី ៦៖ គោលការណ៍ធ្វើការបន្ថែមម៉ោង (OT)
- ការថែមម៉ោងត្រូវតែធ្វើឡើងដោយស្ម័គ្រចិត្ត និងមិនលើសពី ២ ម៉ោងក្នុងមួយថ្ងៃ តាមមាត្រា ១៣៩។  
- បុគ្គលិកមិនអាចធ្វើការថែមម៉ោងដោយគ្មានការអនុម័តជាមុនពីប្រធានផ្នែកឡើយ។  
- ម៉ោងថែមត្រូវគណនាតាមអត្រាច្បាប់ការងារ (១៥០% ថ្ងៃធម្មតា, ២០០% វេនយប់/ថ្ងៃអាទិត្យ/បុណ្យជាតិ) តាមរយៈ [ប្រព័ន្ធបើកប្រាក់ខែ AttendKH](/payroll)។

### ចំណុចទី ៧៖ ការបំពេញបន្ថែមម៉ោងដែលភ្លេចស្កេន
- ប្រសិនបើភ្លេចស្កេនវត្តមាន ឬទូរស័ព្ទអស់ថ្ម បុគ្គលិកត្រូវដាក់ពាក្យកែតម្រូវវត្តមាន (Attendance Correction) ក្នុងរយៈពេល ២៤ ម៉ោង ដោយមានការបញ្ជាក់ពីប្រធានផ្នែក។

### ចំណុចទី ៨៖ ការទទួលខុសត្រូវរបស់អ្នកគ្រប់គ្រង
- ប្រធានផ្នែកត្រូវពិនិត្យ និងអនុម័តរាល់សំណើសុំច្បាប់ ម៉ោងថែម និងការកែវត្តមានក្នុងរយៈពេល ២៤ ម៉ោង។  
- ត្រូវអនុវត្តវិន័យឱ្យមានតម្លាភាព និងគ្មានការរើសអើង។

### ចំណុចទី ៩៖ វិធានការវិន័យជាដំណាក់កាល
១. ដំណាក់កាលទី ១៖ ការរំលឹក និងណែនាំផ្ទាល់មាត់។  
២. ដំណាក់កាលទី ២៖ លិខិតព្រមានជាលាយលក្ខណ៍អក្សរលើកទី ១។  
៣. ដំណាក់កាលទី ៣៖ លិខិតព្រមានជាលាយលក្ខណ៍អក្សរលើកទី ២ (កំណត់ពេលកែលម្អ ៣០ ថ្ងៃ)។  
៤. ដំណាក់កាលទី ៤៖ ការបញ្ឈប់ពីការងារស្របតាមមាត្រា ៨៣ នៃច្បាប់ការងារ ចំពោះកំហុសធ្ងន់ និងអវត្តមានគ្មានការអនុញ្ញាតជាប់ៗគ្នា។

### ចំណុចទី ១០៖ ការរក្សាទុកកំណត់ត្រា
- រាល់ទិន្នន័យវត្តមាន ទីតាំង GPS និងការសុំច្បាប់ ត្រូវបានរក្សាទុកក្នុង [ប្រព័ន្ធ Cloud របស់ AttendKH](/trust) ប្រកបដោយសុវត្ថិភាព ស្របតាមច្បាប់កំណត់។

---

## ៤. ការអនុវត្តគោលការណ៍ឱ្យមានប្រសិទ្ធភាពតាមសាខាច្រើន

តាមរយៈ [AttendKH Multi-Branch](/multi-branch) ក្រុមហ៊ុនដែលមានសាខានៅភ្នំពេញ សៀមរាប បាត់ដំបង ឬកំពត អាចកំណត់គោលការណ៍រួមតែមួយចេញពីការិយាល័យកណ្តាល ដោយធានាថាសាខានីមួយៗអនុវត្តច្បាប់ដូចគ្នា ១០០% និងមើលឃើញទិន្នន័យជាក់ស្តែងលើផ្ទាំងតែមួយ។

---

## ៥. សំណួរ ៦ ចំណុចដែល HR ត្រូវឆ្លើយមុនពេលប្រកាសគោលការណ៍

១. តើខ្លឹមសារគោលការណ៍មានភាពច្បាស់លាស់ និងមានជាភាសាខ្មែរដែរឬទេ?  
២. តើប្រធានផ្នែក និងប្រធានសាខាត្រូវបានបណ្តុះបណ្តាលយល់ច្បាស់ពីរបៀបអនុម័តហើយឬនៅ?  
៣. តើចន្លោះពេលអនុគ្រោះ ១០ នាទីស្របនឹងស្ថានភាពចរាចរណ៍ជាក់ស្តែងដែរឬទេ?  
៤. តើបុគ្គលិកអាចស្នើសុំច្បាប់ និងពិនិត្យវត្តមានតាមទូរស័ព្ទបានងាយស្រួលដែរឬទេ?  
៥. តើទិន្នន័យវត្តមានភ្ជាប់ត្រង់ទៅកាន់ការបើកប្រាក់ខែដោយស្វ័យប្រវត្តិដែរឬទេ?  
៦. តើបុគ្គលិកទាំងអស់បានចុះហត្ថលេខាទទួលស្គាល់គោលការណ៍នេះហើយឬនៅ?

---

## ៦. បញ្ជីត្រួតពិនិត្យការដាក់ឱ្យប្រើប្រាស់គោលការណ៍វត្តមាន

- [ ] **ជំហានទី ១**: ពិនិត្យមើលបញ្ហាប្រឈមនៃវត្តមានបុគ្គលិកកន្លងមក។  
- [ ] **ជំហានទី ២**: រៀបចំកាលវិភាគការងារ និងម៉ោងថែមឱ្យស្របតាមមាត្រា ១៣៧ និង ១៣៩ នៃច្បាប់ការងារ។  
- [ ] **ជំហានទី ៣**: ចងក្រងសេចក្តីព្រាងគោលការណ៍ទាំង ១០ ចំណុចជាភាសាខ្មែរ និងអង់គ្លេស។  
- [ ] **ជំហានទី ៤**: ប្រជុំជាមួយប្រធានផ្នែកដើម្បីប្រមូលមតិកែលម្អ។  
- [ ] **ជំហានទី ៥**: យកបទបញ្ជាផ្ទៃក្នុងទៅចុះបញ្ជីនៅក្រសួងការងារ ប្រសិនបើមានបុគ្គលិកចាប់ពី ៨ នាក់ឡើងទៅ។  
- [ ] **ជំហានទី ៦**: កំណត់កាលវិភាគ ទីតាំង Geofence និងពេលអនុគ្រោះលើ [AttendKH](/pricing)។  
- [ ] **ជំហានទី ៧**: រៀបចំការប្រជុំពន្យល់ណែនាំដល់បុគ្គលិកទាំងអស់ដោយភាពរួសរាយ។  
- [ ] **ជំហានទី ៨**: ប្រមូលការយល់ព្រមពីបុគ្គលិក និងតាមដានការអនុវត្តក្នុងរយៈពេល ៣០ ថ្ងៃដំបូង។

ស្វែងយល់បន្ថែមពី [ប្រព័ន្ធគ្រប់គ្រងវត្តមាន AttendKH](/attendance) ត្រឹមតែ **$១/នាក់/ខែ** ឬទាក់ទងមកកាន់ [ក្រុមការងាររបស់យើង](/contact) ដើម្បីចាប់ផ្តើមសាកល្បងដោយឥតគិតថ្លៃ!`,
    content_zh: `![柬埔寨企业人力资源总监与多部门团队在金边会议室研讨员工出勤管理制度规范](/blog/employee-attendance-policy-guide-cambodia.jpg)

## 1. 为什么柬埔寨企业必须建立明文化的员工考勤制度？

在柬埔寨蓬勃发展的商业环境中，无论是在堆谷区的科技金融总部、万景岗（BKK1）与俄罗斯市场周边拥有多家分店的连锁餐饮连锁、堆谷的大型汽修汽配工坊，还是金边经济特区（PPSEZ）的高产能制造车间，早期的用工管理往往始于口头约定。

当团队只有三五人时，创始人可以在喝咖啡时随性协调上下班时间、偶尔的迟到以及突发生病请假。然而，一旦团队规模跨越 20 人、50 人乃至数百人并分布在全柬各省分店时，缺乏书面规章的口头管理必然引发管理瘫痪：
- 分店长 A 默许员工每天迟到 20 分钟，而分店长 B 在员工初次迟到时便严厉扣款，直接导致团队内部产生严重的不公平感与抵触情绪；
- 员工在早晨 09:30 随手在个人 Telegram 给直属领导发一句“今天有事”，导致前台、后厨或收银岗位猝不及防出现人员空缺；
- 缺乏明确审批链条的加班单在月末集中爆发，导致企业薪酬预算超支数千美元；
- 当企业最终决定解雇长期旷工早退的违纪员工时，却因此前未留存任何书面告诫凭证与正规规章，在劳工部劳资仲裁中被判定为非法解雇并承担巨额赔偿。

> **合规实操准绳与免责声明**: 书面考勤规章制度是企业的内部用工宪法。依据《柬埔寨劳工法》第 22 条之明确要求，凡聘用员工人数达到 8 人及以上的企业，必须依法制定内部企业规章（Internal Regulations），并向劳工与职业培训部（MoLVT）办理备案。本文详述的十项政策框架旨在帮助在柬企业建立兼具人性化与刚性的管理闭环，不可替代专业的法律咨询意见。

---

## 2. 柬埔寨法定基准 vs. 企业内部自主权：厘清合规红线

在起草企业内部考勤细则时，HR 必须清晰区分**不可逾越的法定红线**与**企业自主权范畴**：

| 管理维度 | 柬埔寨《劳工法》法定基准 (MoLVT) | 推荐的企业内部自主规章与实操细则 |
| :--- | :--- | :--- |
| **标准工作时间** | 每周**最高不得超过 48 小时**或每日 8 小时（第 137 条）；每周必须保证法定公休日（第 147 条） | 具体班次排定（如办公室 08:00–17:00，或零售门市早晚倒班 07:00–15:30 / 14:30–22:00） |
| **加班安排 (OT)** | 必须遵循员工**完全自愿原则**；单日累计加班上限**不得超过 2 小时**（第 139 条） | 明确要求员工在实施任何加班前，必须提前取得部门主管的数字化审批 |
| **迟到与通勤缓冲** | 法律未规定未出勤时段必须发薪，但严禁雇主随意推行破坏性的“以罚代管”式扣款 | 设立合理的 **10 分钟交通弹性免罚宽限期**，辅以分级梯度告诫谈话机制 |
| **法定带薪年休假** | **全年共 18 个工作日**（按每月 1.5 天依工龄递增累计，第 166 条） | 规定合理的请假提前提报期（如 1–2 天年假提前 3 天提报，长假提前 7 天申请） |
| **特别带薪事假** | 直系亲属婚丧嫁娶享有每年最多 7 天的特别假期（第 169 条） | 规定员工必须在返岗后 5 个工作日内向人事部补交结婚证或讣告证明凭证 |
| **病假规范与假条** | 法律要求提供合法执业资质医疗机构或公立医院出具的医生诊断证明书 | 要求在开工前至少 30 分钟电话报备，并在返岗后 48 小时内出具正规病假单 |
| **无故脱岗旷工 (AWOL)** | 连续无故旷工且无法提供正当理由，构成依第 83 条解除合同的严重违纪 | 明确界定旷工红线（如连续旷工 2 天未予联络，直接启动法定严重违纪核查） |

---

## 3. 企业员工考勤管理制度全景十条框架

为确保规章制度在基层一线易懂、易记、易执行，建议围绕以下十个核心模块构建：

### 第一条：工作时间与排班规则
清晰界定不同部门的工作模式：
- **职能与办公室人员**: 周一至周五 08:00–17:00，周六 08:00–12:00（全周标准 44 小时）；
- **门市与轮班人员**: 实行周期性轮班排表，班表必须在每周开始前至少 7 天正式发布；
- **午休就餐时段**: 明确固定 1 小时未计薪午休区间，杜绝关于就餐时长的模糊扯皮。

### 第二条：上下班打卡规范
- 员工必须通过公司统一指定的数字化平台（[AttendKH 移动 App](/attendance) GPS 地理围栏或前台 Tablet QR Kiosk）独立完成打卡；
- 严禁任何人替他人代打卡（Buddy Punching），一经查实直接定性为严重违纪并记入人事处分档案；
- 工作时间内因私外出必须提前向主管请假并执行临时离场打卡。

### 第三条：早间迟到与 10 分钟弹性宽限期
- **交通宽限期**: 鉴于金边莫尼旺大道、俄罗斯大道早高峰及暴雨积水实情，允许 08:00–08:10 之间打卡不计入迟到；
- **工时补足原则**: 在宽限期内到岗的员工，下班时需顺延补足 8 小时有效工时；
- **分级告诫机制**: 单月迟到前 3 次由主管口头谈话提醒；第 4 次出具正式书面告诫信；达到 5 次者依严重违纪程序处置。

### 第四条：突发应急与未计划缺勤报备
- 因突发严重疾病或不可抗力无法到岗者，必须在**排班开始前至少 30 分钟**通过 [AttendKH 移动端](/downloads) 提交紧急缺勤单；
- 私下委托平级同事口头转达，不视为有效合规报备。

### 第五条：请假申请与多级审批流程
- **常规年休假**: 1–2 天假期提前 3 个工作日申请；3 天以上长假提前 7 个工作日提报；
- **医疗病假**: 返岗后 48 小时内必须在系统中拍照上传合规医疗机构证明；
- **审批全流程**: 员工手机提交 → 主管移动端 24 小时内初审 → 人事部核实剩余假额 → 终审生效。

### 第六条：加班（OT）预先核准管理
- 加班严格建立在自愿原则之上，且单日上限绝对不得超过 2 小时；
- 严禁未批先加。未经主管在系统中提前发起或核准的延时滞留，不计入计薪加班时长；
- 核准加班自动套用劳工部法定乘数（1.5倍、2.0倍），直连 [AttendKH 薪酬引擎](/payroll) 发放。

### 第七条：漏打卡补卡与异常申诉
- 因手机故障、断电或外勤公务导致未打卡，员工必须在 24 小时内发起“异常补卡申请”；
- 补卡必须注明具体出勤时刻、客观证明人或工作凭据，经主管核准后方可计入月度出勤。

### 第八条：管理层审核责任与考核
- 各级主管必须在 24 小时内闭环处理所辖团队的请假、加班与补卡申请；
- 管理层严禁出现包庇瞒报或因个人好恶差异化执行制度的情形。

### 第九条：渐进式纪律处分程序（Progressive Discipline）
为确保劳动用工解除程序在劳工仲裁中具备绝对合规效力，处分必须层层留痕：
1. **第一阶段：口头告诫谈话**（人事系统内部密件归档）；
2. **第二阶段：第一份正式书面警告信**（由员工签字确认，人事档案封存）；
3. **第三阶段：第二份严重书面警告信**（附加 30 天重点考察期）；
4. **第四阶段：依《劳工法》第 83 条合法解除合同**（适用于屡教不改的严重违纪旷工，附带完整打卡数据链）。

### 第十条：出勤档案留存与月度公示
- 所有打卡流水、电子围栏数据、请假单据在 [AttendKH 云安全中台](/trust) 永久加密留存至少 5 年备查；
- 员工可随时在手机端自助查阅当月出勤底表，保障薪资知情权。

---

## 4. 跨省与多分店环境下的制度统一执行

对于在金边、暹粒、西哈努克港及马德望布局多家门市的连锁企业，制度在执行层极易走样变形。借助 [AttendKH 多门市架构](/multi-branch)：
- **总部统一策略中枢**: 宽限期、加班规则、假期审批权限在总部后台一次配置，全柬所有门市即刻生效；
- **门市独立地理围栏**: 各店只能在各自绑定的 GPS 半径内打卡，彻底杜绝跨店乱打卡；
- **总部全景实时看板**: 集团高管与 HR 在同一屏幕上即可实时比对各门市的出勤合规率与加班异常。

---

## 5. 推行新考勤制度前 HR 必须自检的 6 个问题

1. 制度文本是否使用通俗易懂的**柬英双语**编写，避免晦涩难懂的法言法语？
2. 是否已对所有基层门店主管与车间班组长开展了 30 分钟的系统审批实操培训？
3. 10 分钟弹性宽限期是否契合当地门市周边的实际早高峰拥堵现状？
4. 员工能否在手机端 10 秒内丝滑提交请假，彻底告别繁琐的纸质单据？
5. 考勤制度的违纪扣减与加班计息，能否无缝自动汇入月末薪资核算，避免人工二次搬运？
6. 是否已安排全体员工进行签阅知悉确认并完成档案存档？

---

## 6. 考勤规章制度落地实操清单

- [ ] **步骤一**：全面梳理历史考勤纠纷痛点与班次结构。
- [ ] **步骤二**：依据劳工法第 137 与 139 条核准标准工时与加班红线。
- [ ] **步骤三**：用柬英双语正式成文十条核心规章制度。
- [ ] **步骤四**：召开中层管理干部研讨会，收集一线执行反馈。
- [ ] **步骤五**：企业员工达 8 人以上的，向当地劳工部稽查科递交内部规章备案。
- [ ] **步骤六**：在 [AttendKH 官网](/pricing) 配置班次、围栏与宽限期规则。
- [ ] **步骤七**：召开全员沟通宣贯会，坦诚传达制度的人文关怀与严肃性。
- [ ] **步骤八**：全员签署知悉确认书，正式开启首月平稳试运行。

### 用 AttendKH 让考勤制度自动化稳健运行
告别痛苦的人情拉扯与繁琐纸质跑腿。探索 [AttendKH 极简透明定价](/pricing)，每人每月仅需 1 美元；前往 [应用下载中心](/downloads) 获取应用，或 [联系我们的金边专家团队](/contact) 预约专属企业演练。`,
    cover_image: "/blog/employee-attendance-policy-guide-cambodia.jpg",
    author_name: "Chhunsour Seng",
    author_role: "Product Builder",
    author_role_km: "អ្នកបង្កើតផលិតផល",
    author_role_zh: "产品架构师",
    author_avatar: "/avatars/chhunsour.png",
    category: "Operations",
    category_km: "ប្រតិបត្តិការ",
    category_zh: "运营管理",
    tags: [
      "Attendance Policy Cambodia",
      "Employee Attendance Rules Cambodia",
      "HR Policy Cambodia",
      "Staff Attendance Cambodia",
      "Workplace Attendance Cambodia",
      "MoLVT Compliance",
    ],
    tags_km: [
      "គោលការណ៍វត្តមានកម្ពុជា",
      "ច្បាប់វត្តមានបុគ្គលិក",
      "គោលការណ៍ HR កម្ពុជា",
      "បទបញ្ជាផ្ទៃក្នុងសហគ្រាស",
      "ច្បាប់ការងារកម្ពុជា",
    ],
    tags_zh: [
      "柬埔寨考勤制度",
      "企业员工考勤规章",
      "柬埔寨HR政策",
      "劳工法合规制度",
      "出勤管理手册",
    ],
    status: "published",
    published_at: "2026-09-14T08:00:00Z",
    scheduled_at: null,
    seo_title: "How to Build an Employee Attendance Policy in Cambodia — AttendKH",
    seo_description:
      "A complete guide for Cambodian businesses to build a compliant employee attendance policy. Covers work schedules, grace periods, leave rules, and disciplinary procedures.",
    og_image: "/blog/employee-attendance-policy-guide-cambodia.jpg",
    view_count: 1680,
    faqs: [
      {
        question: "Are Cambodian businesses legally required to have written Internal Enterprise Regulations?",
        question_km: "តើអាជីវកម្មនៅកម្ពុជាត្រូវមានកាតព្វកិច្ចផ្លូវច្បាប់ក្នុងការបង្កើតបទបញ្ជាផ្ទៃក្នុងសហគ្រាសដែរឬទេ?",
        question_zh: "在柬埔寨，企业是否在法律上被强制要求必须制定书面的内部企业规章（Internal Regulations）？",
        answer:
          "Yes. Under Article 22 of the Cambodian Labour Law, every enterprise employing at least 8 workers must establish Internal Enterprise Regulations covering hiring, work hours, attendance, discipline, and workplace health, which must be officially registered with the Ministry of Labour and Vocational Training (MoLVT).",
        answer_km:
          "បាទ/ចាស! យោងតាមមាត្រា ២២ នៃច្បាប់ស្តីពីការងារ សហគ្រាសទាំងអស់ដែលមានកម្មករនិយោជិតចាប់ពី ៨ នាក់ឡើងទៅ ត្រូវតែបង្កើតបទបញ្ជាផ្ទៃក្នុងសហគ្រាស ដែលគ្របដណ្តប់លើការជ្រើសរើស ម៉ោងធ្វើការ វត្តមាន វិន័យ និងសុខភាពការងារ ហើយត្រូវយកទៅចុះបញ្ជីជាផ្លូវការនៅក្រសួងការងារ និងបណ្តុះបណ្តាលវិជ្ជាជីវៈ (MoLVT)។",
        answer_zh:
          "是的。根据柬埔寨《劳工法》第 22 条规定，凡雇佣员工人数达到 8 人及以上的各类企业，必须依法制定涵盖用工录用、工作时间、考勤作息、纪律处分及职业健康的《内部企业规章》（Internal Regulations），并在法定时间内提交至劳工与职业培训部（MoLVT）审核备案。",
      },
      {
        question: "Can an employer arbitrarily dock an employee's salary as punishment for morning lateness?",
        question_km: "តើនិយោជកអាចកាត់ប្រាក់ខែបុគ្គលិកតាមអំពើចិត្តជាការផាកពិន័យចំពោះការមកយឺតបានដែរឬទេ?",
        question_zh: "雇主是否可以直接粗暴克扣员工的基本底薪，以此作为早晨迟到的行政经济罚款？",
        answer:
          "No. Arbitrary punitive salary docking is strictly prohibited under Cambodian labor jurisprudence. While employers are not obligated to pay for unworked time, disciplining lateness must follow progressive warnings rather than unilateral wage reductions.",
        answer_km:
          "មិនអាចដាច់ខាត! ការកាត់ប្រាក់ខែជាការផាកពិន័យតាមទំនើងចិត្ត ត្រូវបានហាមឃាត់យ៉ាងតឹងរ៉ឹងក្នុងវិវាទការងារនៅកម្ពុជា។ ទោះបីជានិយោជកមិនចាំបាច់បើកប្រាក់ឈ្នួលសម្រាប់ម៉ោងដែលបុគ្គលិកមិនបានធ្វើការក៏ដោយ ប៉ុន្តែការដោះស្រាយការមកយឺតត្រូវធ្វើឡើងតាមរយៈការណែនាំ និងព្រមានជាដំណាក់កាល។",
        answer_zh:
          "绝对不可以。在柬埔寨劳工仲裁与法律实践中，雇主严禁对员工进行惩罚性、非法的以罚代管式克扣基本工资。尽管企业无需对员工未提供劳动的缺勤时段支付工资，但对于迟到早退的处理，必须依照备案规章严格执行口头告诫、书面警告等渐进式合规纪律程序。",
      },
      {
        question: "How should an attendance policy treat office workers vs. retail or factory shift workers?",
        question_km: "តើគោលការណ៍វត្តមានគួរអនុវត្តចំពោះបុគ្គលិកការិយាល័យ និងបុគ្គលិកតាមហាង ឬរោងចក្រយ៉ាងដូចម្តេច?",
        question_zh: "考勤管理制度应如何平衡对待全职办公室白领与零售门市/制造车间的倒班员工？",
        answer:
          "Core standards (honesty, leave approval, disciplinary tiers) remain universal, while operating schedules diverge. Office staff typically follow a fixed 5-day or 5.5-day schedule, whereas retail and factory workers follow rotating shift rosters published 7 days in advance.",
        answer_km:
          "ស្តង់ដារស្នូល (ភាពស្មោះត្រង់ ការសុំច្បាប់ វិន័យការងារ) ត្រូវតែអនុវត្តដូចគ្នាទាំងអស់ ប៉ុន្តែកាលវិភាគការងារអាចខុសគ្នា។ បុគ្គលិកការិយាល័យធ្វើការតាមម៉ោងថេរ ៥ ថ្ងៃ ឬ ៥.៥ ថ្ងៃ រីឯបុគ្គលិកហាង និងរោងចក្រធ្វើការតាមវេនវិលជុំដែលត្រូវប្រកាស ៧ ថ្ងៃជាមុន។",
        answer_zh:
          "核心底线原则（诚信打卡、禁止替打卡、请假审批链条及违纪处分流程）必须全员统一，但具体排班维度允许差异化。办公室白领通常执行固定的 5 天或 5.5 天周排班；而零售餐饮及车间工人则适用按月循环轮班，且班表需提前 7 天锁定并同步至员工手机。",
      },
      {
        question: "How does AttendKH help Cambodian businesses enforce their attendance policy automatically?",
        question_km: "តើ AttendKH ជួយអាជីវកម្មនៅកម្ពុជាអនុវត្តគោលការណ៍វត្តមានដោយស្វ័យប្រវត្តិយ៉ាងដូចម្តេច?",
        question_zh: "AttendKH 是如何帮助在柬企业将书面考勤制度转化为系统级自动化执行流的？",
        answer:
          "AttendKH embeds your exact company rules into cloud automation: enforcing GPS branch geofences, applying 10-minute morning grace windows, requiring manager overtime approvals, and logging full audit trails directly into payroll.",
        answer_km:
          "AttendKH បញ្ចូលគោលការណ៍ជាក់ស្តែងរបស់ក្រុមហ៊ុនអ្នកទៅក្នុងប្រព័ន្ធ Cloud ស្វ័យប្រវត្តិ៖ កំណត់ទីតាំង GPS សាខា អនុវត្តចន្លោះពេលអនុគ្រោះ ១០ នាទី តម្រូវឱ្យមានការអនុម័តម៉ោងថែមពីប្រធានផ្នែក និងរក្សាទុកកំណត់ត្រាទាំងអស់បញ្ជូនត្រង់ទៅកាន់ការបើកប្រាក់ខែ។",
        answer_zh:
          "AttendKH 将纸面规章深度转化为底层规则：基于高精度 GPS 自动划定门店合法围栏、智能执行 10 分钟交通免罚宽限期、加班超时自动触发移动端审批卡片，并将出勤流水与劳工部法定算薪公式直接绑定，真正实现规章制度的无感闭环执行。",
      },
    ],
    created_at: "2026-09-14T08:00:00Z",
    updated_at: "2026-09-14T08:00:00Z",
  },

  // =========================================================================
  // BLOG 2: Buddy Punching and Attendance Fraud: How Cambodian Businesses Can Reduce Fake Check-Ins (Sep 13, 2026)
  // =========================================================================
  {
    id: "post-reduce-buddy-punching-attendance-fraud-cambodia",
    slug: "reduce-buddy-punching-attendance-fraud-cambodia",
    title: "Buddy Punching and Attendance Fraud: How Cambodian Businesses Can Reduce Fake Check-Ins",
    title_km: "ការចុះវត្តមានជំនួសគ្នា និងការបន្លំវត្តមាន៖ របៀបដែលអាជីវកម្មនៅកម្ពុជាអាចកាត់បន្ថយការចុះវត្តមានក្លែងក្លាយ",
    title_zh: "代打卡与虚假考勤防范实操：柬埔寨企业如何科学遏制打卡作弊漏洞",
    excerpt:
      "A pragmatic handbook for Cambodian employers to eliminate buddy punching, mock GPS spoofing, and ghost hours. Compare biometrics, geofences, and live selfie verification while protecting employee trust and privacy.",
    excerpt_km:
      "សៀវភៅណែនាំជាក់ស្តែងសម្រាប់និយោជកនៅកម្ពុជា ដើម្បីលុបបំបាត់ការចុះវត្តមានជំនួសគ្នា ការបន្លំទីតាំង GPS និងការកេងបន្លំម៉ោងធ្វើការ។ ប្រៀបធៀបម៉ាស៊ីនស្កេន ប្រព័ន្ធ Geofence និងការថតរូប Selfie ជាក់ស្តែង ដោយរក្សាការគោរពសិទ្ធិឯកជនភាពបុគ្គលិក។",
    excerpt_zh:
      "柬埔寨雇主终结代打卡、虚拟定位作弊与虚报工时的系统化指南：深度剖析生物识别、电子围栏与现场活体核验技术，兼顾用工刚性纪律与员工隐私信任平衡。",
    key_takeaways: [
      "Buddy punching—when an employee clocks in on behalf of an absent or late colleague—costs Cambodian businesses an estimated 2% to 5% of gross payroll expenses every year.",
      "Traditional solutions like paper sign-in binders, loose ID badges, and static 4-digit PIN terminals are inherently vulnerable to credential sharing and proxy check-ins.",
      "Modern fraud prevention uses a multi-layered verification model: high-precision GPS geofencing, device binding, and live front-camera selfie capture.",
      "Technology cannot replace management: the most effective fraud prevention combines tamper-resistant software with clear enterprise policies, manager accountability, and mutual workplace respect.",
    ],
    key_takeaways_km: [
      "ការចុះវត្តមានជំនួសគ្នា (Buddy punching) នៅពេលបុគ្គលិកចុះវត្តមានឱ្យមិត្តរួមការងារដែលមកយឺតឬអវត្តមាន ធ្វើឱ្យអាជីវកម្មនៅកម្ពុជាខាតបង់ប្រមាណ ២% ទៅ ៥% នៃថ្លៃដើមប្រាក់ខែជារៀងរាល់ឆ្នាំ។",
      "វិធីសាស្ត្របែបបុរាណ ដូចជាសៀវភៅកត់ឈ្មោះ កាតសម្គាល់ខ្លួន និងម៉ាស៊ីនវាយលេខកូដ PIN ៤ ខ្ទង់ ងាយរងគ្រោះបំផុតដោយសារការចែករំលែកកូដ ឬចុះជំនួសគ្នា។",
      "ការទប់ស្កាត់ការបន្លំសម័យទំនើបប្រើប្រាស់ប្រព័ន្ធការពារច្រើនជាន់៖ កំណត់រង្វង់ទីតាំង GPS កម្រិតខ្ពស់ ការភ្ជាប់ជាមួយទូរស័ព្ទជាក់លាក់ និងការថតរូប Selfie ជាក់ស្តែងពីកាមេរ៉ាមុខ។",
      "បច្ចេកវិទ្យាតែម្នាក់ឯងមិនអាចជំនួសការគ្រប់គ្រងបានឡើយ៖ វិធីសាស្ត្រល្អបំផុតគឺការរួមបញ្ចូលគ្នារវាងប្រព័ន្ធសុវត្ថិភាព គោលការណ៍ក្រុមហ៊ុនច្បាស់លាស់ និងការទទួលខុសត្រូវរបស់អ្នកគ្រប់គ្រង។",
    ],
    key_takeaways_zh: [
      "代打卡（Buddy Punching）——即员工替迟到或缺勤的同事冒名打卡，每年给柬埔寨各类企业造成的隐性薪酬损耗高达工资总额的 2% 至 5%。",
      "传统的手写签名簿、工牌门禁卡以及固定 4 位数字密码打卡机，在机制上存在致命缺陷，极易被员工私下互通信息冒领出勤。",
      "现代防作弊体系采用分层校验模型：高精度 GPS 电子围栏、手机物理硬件指纹绑定以及前置摄像头现场活体自拍抓拍。",
      "技术永远无法完全替代管理：最行之有效的作弊防范，是将防篡改软件中台与清晰的企业内部制度、主管审核责任及劳资互信文化深度融合。",
    ],
    content: `![Professional Cambodian employee naturally verifying morning attendance check-in on a smartphone at an entrance foyer in Phnom Penh](/blog/reduce-buddy-punching-attendance-fraud-cambodia.jpg)

## 1. What is Buddy Punching? The Hidden Financial Drain on Cambodian Enterprises

In Cambodian workplaces, "buddy punching" is one of the most widespread yet rarely discussed operational leaks. The scenario is familiar to almost every office manager, retail supervisor, and factory director:
> *Dara is stuck on his motorbike in heavy traffic along Russian Boulevard at 07:55 AM. Fearing he will miss the 08:00 AM shift cutoff, he calls or texts his coworker Sokha, who is already standing in the lobby: "Can you punch my fingerprint / scan my badge / sign the book for me? I'll be there in 15 minutes."*

Sokha complies, thinking he is simply doing a friend a favor. 

However, when multiplied across 30, 80, or 250 workers over 26 working days a month, this seemingly harmless habit translates into massive corporate losses:
- **Direct Financial Payroll Drain**: Industry data indicates that unearned paid time (time theft) drains **2% to 5% of gross payroll expenditure** annually. For a business with a $30,000 monthly wage bill, buddy punching bleeds **$600 to $1,500 USD in unworked wages every single month**.
- **Erosion of Workplace Morale**: Conscientious employees who wake up early to beat Phnom Penh traffic quickly become demoralized when they see chronic latecomers enjoying identical perfect attendance records and bonuses.
- **Safety & Fire Compliance Blindspots**: In the event of a factory evacuation or workplace accident, an inaccurate attendance log means emergency responders have no reliable way to verify who is physically inside the building.

---

## 2. Common Forms of Attendance Fraud Across Cambodian Industries

Attendance dishonesty takes many shapes depending on the workplace environment and the technology in use:

### A. The Shared Badge or PIN Hand-Off (Retail & F&B)
In cafes, bakeries, and retail boutiques, employers frequently mount a simple wall clock where staff enter a 4-digit PIN or tap an RFID badge. Cashiers and baristas routinely share their PINs in private Telegram chats, allowing whoever arrives first to clock in the entire morning crew.

### B. Inaccurate Manual Timesheets & Retroactive Edits
In organizations relying on paper sign-in binders or editable Excel sheets, staff regularly write down 08:00 AM even when arriving at 08:35 AM. Because manual logs lack immutable cryptographic timestamps, supervisors rarely have the time or evidence to challenge false entries.

### C. GPS Spoofing & "Mock Location" Applications
With the advent of basic mobile check-in systems, tech-savvy employees began installing third-party "Fake GPS" tools on Android smartphones. These utilities feed simulated coordinates to the phone's operating system, allowing a worker to clock in from their bed in Sen Sok while claiming to be at the office desk in BKK1.

### D. Ghost Overtime Claims
Without clear shift cutoffs and digital approvals, workers linger on premises after their 17:30 shift ends—scrolling social media or chatting—before clocking out at 19:30 to claim two hours of statutory overtime pay.

---

## 3. Technology Verification Layers: How Modern Mobile Systems Validate Presence

To combat attendance dishonesty effectively without investing thousands of dollars in bulky hardware, modern workforce systems like [AttendKH](/attendance) employ a **multi-layered verification model**:

| Verification Layer | How It Operates | Specific Attack Vector It Defeats |
| :--- | :--- | :--- |
| **Layer 1: GPS Radius Geofencing** | Establishes a tight 50–100m virtual boundary around verified workplace coordinates | Prevents clocking in from home, coffee shops, or roadside traffic |
| **Layer 2: Live Front-Camera Selfie** | Captures an instant live photo at the exact moment of check-in, binding face to punch | Completely stops coworker buddy punching and badge handoffs |
| **Layer 3: Device Binding & Anti-Mock Inspection** | Inspects OS APIs for active "Mock Location" flags, developer debuggers, and jailbreaks | Blocks third-party "Fake GPS" and coordinate simulation software |
| **Layer 4: Dynamic Tablet QR Kiosk** | Emits short-lived dynamic QR tokens (valid for only 15 seconds) on a shared entrance tablet | Prevents workers from photographing or printing static QR codes to share |
| **Layer 5: Real-Time Audit Log & Telegram Alerts** | Instantly notifies department managers via Telegram when an out-of-boundary punch is attempted | Provides immediate operational visibility and timestamped proof |

### Honest Limitations: What Technology Can and Cannot Do
It is essential to be realistic: **technology alone cannot eliminate all dishonesty**. 
- A smartphone app can verify that an employee was physically inside the building at 08:00 AM and took a genuine selfie.
- It *cannot* ensure that the employee worked with intense focus rather than chatting in the breakroom for the rest of the day.
- Genuine productivity requires clear performance expectations, vigilant floor managers, and open communication.

---

## 4. Balancing Fraud Prevention with Employee Privacy & Workplace Trust

A critical mistake many employers make when attempting to eliminate buddy punching is turning the workplace into an oppressive surveillance prison.

### Avoiding Invasive 24/7 Tracking
Some aggressive tracking apps continuously log employee GPS locations throughout the day, draining battery life and tracking staff during their private lunch hours or evening commutes.
> **The AttendKH Privacy Guarantee**: AttendKH adheres strictly to progressive data governance principles. The application **only queries GPS coordinates at the exact second the employee presses "Clock In" or "Clock Out"**. Outside of these two discrete daily moments, the application remains completely dormant, tracking zero location data and zero movement.

### Building Culture Through Policy Transparency
Instead of surprising staff with sudden new controls, frame attendance modernization as a matter of **fairness and operational integrity**:
- Explain that digital time tracking protects punctual employees by ensuring overtime and punctuality bonuses are awarded fairly.
- Ensure the attendance policy is documented in both Khmer and English with explicit definitions of acceptable grace periods.

---

## 5. Sector-by-Sector Field Implementations

Different commercial settings in Cambodia require tailored fraud-prevention configurations:

### A. Corporate Offices & Professional Services (Phnom Penh CBD)
- **Primary Vulnerability**: Lateness masked by coworker sign-in; lingering for unapproved overtime.
- **Recommended Setup**: [AttendKH BYOD Mobile App](/attendance). Staff check in on personal smartphones within a 50m office geofence. Early morning traffic congestion is accommodated by a fair 10-minute grace window.

### B. Multi-Branch Retail Stores & Cafes
- **Primary Vulnerability**: PIN sharing and badge handoffs among rotating shift staff.
- **Recommended Setup**: **Tablet QR Kiosk Mode**. Mount an affordable Android tablet at the cashier counter. Staff clock in with dynamic personal QR badges and live photo captures, eliminating buddy punching in under 1.5 seconds.

### C. Automotive Repair Garages & Workshops
- **Primary Vulnerability**: Fingerprint scanner optical failures due to motor oil, grease, and brake dust.
- **Recommended Setup**: Wall-mounted counter tablet utilizing camera facial verification. Technicians do not touch optical sensors with dirty hands.

### D. Manufacturing Plants & Garment Factories (SEZs)
- **Primary Vulnerability**: Massive shift turnarounds with 500+ workers entering within 20 minutes.
- **Recommended Setup**: High-throughput shared QR stations at department checkpoints backed by shift supervisor visual oversight.

### E. Field Technicians, Logistics & Construction Crews
- **Primary Vulnerability**: Employees claiming to be at remote job sites while still at home.
- **Recommended Setup**: Mobile GPS geofencing with offline caching. Supervisors draw custom geofences around client delivery points or borey construction perimeters.

---

## 6. The Attendance Fraud Prevention Checklist & Common Pitfalls

### Common Mistakes Businesses Make
1. **Relying solely on static passwords or PINs**: PINs are shared via Telegram within 24 hours of issuance.
2. **Ignoring supervisor collusion**: If a branch manager ignores buddy punching among their friends, technological data logs must be reviewed by head office.
3. **Punishing honest mistakes excessively**: Accidental missed punches should be resolved through simple digital correction workflows rather than aggressive disciplinary action.

### Your Fraud Prevention Implementation Checklist
- [ ] **Step 1**: Audit historical timesheet variances between branch visitor numbers and staff attendance logs.
- [ ] **Step 2**: Retire physical sign-in books, static PIN terminals, and unsecured Telegram group chats.
- [ ] **Step 3**: Publish a clear, written Attendance Policy defining buddy punching as serious misconduct under *Article 83 of the Cambodian Labour Law*.
- [ ] **Step 4**: Deploy [AttendKH](/pricing) with GPS geofencing and live selfie verification.
- [ ] **Step 5**: Enable automated Telegram notifications for shift leads to review out-of-boundary check-in attempts.
- [ ] **Step 6**: Direct attendance data seamlessly into [AttendKH Payroll](/payroll) to eliminate manual calculation errors.

### Upgrade to Honest, Effortless Workforce Tracking
Protect your company's bottom line and foster a culture of transparent accountability. Discover how [AttendKH Attendance](/attendance) eliminates attendance fraud for just **$1 USD per employee per month**. [View our transparent plans](/pricing), [download the apps](/downloads), or [contact our Phnom Penh team](/contact) to launch your free 14-day trial.`,
    content_km: `![បុគ្គលិកកម្ពុជាចុះវត្តមានការងារពេលព្រឹកយ៉ាងរលូនតាមទូរស័ព្ទដៃនៅច្រកចូលអគារពាណិជ្ជកម្មទំនើបនៅភ្នំពេញ](/blog/reduce-buddy-punching-attendance-fraud-cambodia.jpg)

## ១. អ្វីជាការចុះវត្តមានជំនួសគ្នា (Buddy Punching)? ការខាតបង់ដែលលាក់កំបាំង

នៅកន្លែងធ្វើការក្នុងប្រទេសកម្ពុជា "ការចុះវត្តមានជំនួសគ្នា" ឬ Buddy Punching គឺជាបញ្ហាលេចធ្លាយថវិកាដ៏ធំមួយ ប៉ុន្តែកម្រត្រូវបានលើកយកមកនិយាយដោយចំហ៖
> *តារា កំពុងជាប់ម៉ូតូក្នុងការកកស្ទះចរាចរណ៍លើមហាវិថីសហព័ន្ធរុស្ស៊ីនៅម៉ោង ០៧:៥៥ ព្រឹក។ ដោយខ្លាចហួសម៉ោងកំណត់ ០៨:០០ គាត់ក៏ខល ឬផ្ញើសារ Telegram ទៅកាន់ សុខា ដែលកំពុងឈរនៅមាត់ទ្វារ៖ "ជួយស្កេនមេដៃ/ចុះឈ្មោះឱ្យខ្ញុំមួយផង! ១៥ នាទីទៀតខ្ញុំទៅដល់ហើយ។"*

សុខា ក៏ជួយចុះឈ្មោះឱ្យ ព្រោះគិតថាគ្រាន់តែជួយមិត្តភក្តិធម្មតា។

ប៉ុន្តែនៅពេលទម្លាប់នេះកើតឡើងលើបុគ្គលិក ៣០ នាក់ ៨០ នាក់ ឬ ២៥០ នាក់រៀងរាល់ខែ ផលប៉ះពាល់លើអាជីវកម្មមានទំហំធំធេងណាស់៖
- **ការខាតបង់ថវិកាប្រាក់ខែជាក់ស្តែង**: ការសិក្សាបង្ហាញថា ការបន្លំម៉ោងធ្វើការធ្វើឱ្យអាជីវកម្មខាតបង់ **២% ទៅ ៥% នៃថ្លៃដើមប្រាក់ខែសរុប** ជារៀងរាល់ឆ្នាំ។ សម្រាប់ក្រុមហ៊ុនដែលចំណាយប្រាក់ខែ $៣០,០០០ ក្នុងមួយខែ ការបន្លំវត្តមានធ្វើឱ្យបាត់បង់ថវិកាពី **$៦០០ ដល់ $១,៥០០ USD ក្នុងមួយខែៗ**។
- **ការបាក់ទឹកចិត្តរបស់បុគ្គលិកស្មោះត្រង់**: បុគ្គលិកដែលភ្ញាក់ពីព្រលឹមដើម្បីជិះម៉ូតូមកឱ្យទាន់ម៉ោង នឹងមានអារម្មណ៍អន់ចិត្ត នៅពេលឃើញអ្នកមកយឺតរាល់ថ្ងៃទទួលបានប្រាក់ខែ និងប្រាក់រង្វាន់ទៀងទាត់ស្មើគ្នា។
- **សុវត្ថិភាពពេលមានអាសន្ន**: ប្រសិនបើមានអគ្គិភ័យ ឬគ្រោះថ្នាក់ណាមួយ កំណត់ត្រាវត្តមានមិនត្រឹមត្រូវធ្វើឱ្យអ្នកសង្គ្រោះមិនអាចដឹងថា តើមានមនុស្សប៉ុន្មាននាក់នៅក្នុងអគារពិតប្រាកដឡើយ។

---

## ២. ទម្រង់នៃការបន្លំវត្តមានទូទៅនៅកម្ពុជា

### ក. ការចែករំលែកកូដសម្ងាត់ PIN ឬកាតស្កេន
នៅតាមហាងកាហ្វេ និងហាងលក់រាយ និយោជកតែងតែដាក់ម៉ាស៊ីនវាយលេខកូដសម្ងាត់ PIN ៤ ខ្ទង់។ បុគ្គលិកច្រើនតែចែករំលែកលេខកូដនេះក្នុងក្រុម Telegram ធ្វើឱ្យអ្នកមកដល់មុនអាចវាយលេខកូដចុះវត្តមានឱ្យអ្នកដទៃបានយ៉ាងងាយ។

### ខ. ការកត់ត្រាក្នុងសៀវភៅ ឬ Excel ដោយដៃ
បុគ្គលិកតែងតែសរសេរម៉ោង ០៨:០០ ទាំងដែលខ្លួនមកដល់ម៉ោង ០៨:៣៥។ ដោយសារសៀវភៅគ្មានត្រាពេលវេលាច្បាស់លាស់ អ្នកគ្រប់គ្រងកម្រមានភស្តុតាងដើម្បីជំទាស់ណាស់។

### គ. ការប្រើកម្មវិធីបន្លំទីតាំង GPS (Mock Location)
បុគ្គលិកដែលចេះបច្ចេកវិទ្យាខ្លះ ដំឡើងកម្មវិធី "Fake GPS" លើទូរស័ព្ទ Android ដើម្បីបញ្ឆោតប្រព័ន្ធឱ្យគិតថាខ្លួនកំពុងនៅការិយាល័យ ទាំងដែលការពិតកំពុងដេកនៅផ្ទះនៅឡើយ។

---

## ៣. ប្រព័ន្ធការពារច្រើនជាន់៖ របៀបដែល AttendKH ផ្ទៀងផ្ទាត់វត្តមាន

| ជាន់ការពារ | ដំណើរការជាក់ស្តែង | ទប់ស្កាត់ការបន្លំ |
| :--- | :--- | :--- |
| **ជាន់ទី ១៖ GPS Geofencing** | កំណត់រង្វង់កាំ ៥០–១០០ ម៉ែត្រជុំវិញទីតាំងការិយាល័យ | ទប់ស្កាត់ការចុះវត្តមានពីផ្ទះ ហាងកាហ្វេ ឬលើផ្លូវ |
| **ជាន់ទី ២៖ ការថតរូប Selfie ផ្ទាល់** | ថតរូបមុខជាក់ស្តែងពីកាមេរ៉ាមុខភ្លាមៗពេលចុចស្កេន | លុបបំបាត់ការចុះវត្តមានជំនួសគ្នាបាន ១០០% |
| **ជាន់ទី ៣៖ ការទប់ស្កាត់ Fake GPS** | ស្វែងរក និងទប់ស្កាត់កម្មវិធីបន្លំទីតាំង និងទូរស័ព្ទ Root/Jailbreak | ការពារការបន្លំកូអរដោនេតាមបច្ចេកទេស |
| **ជាន់ទី ៤៖ Tablet QR Kiosk** | បង្កើតកូដ QR ឌីជីថលដែលផ្លាស់ប្តូររៀងរាល់ ១៥ វិនាទីម្តង | ការពារការថតរូបកូដ QR យកទៅផ្ញើបន្ត |
| **ជាន់ទី ៥៖ Telegram Alerts ភ្លាមៗ** | ផ្ញើសារដំណឹងទៅកាន់ Telegram របស់អ្នកគ្រប់គ្រងពេលមានការសង្ស័យ | ផ្តល់ភស្តុតាង និងតម្លាភាពភ្លាមៗ |

> **ការពិតជាក់ស្តែង**: បច្ចេកវិទ្យាអាចបញ្ជាក់បានថាបុគ្គលិកបានមកដល់កន្លែងធ្វើការ ប៉ុន្តែវាមិនអាចជំនួសការដឹកនាំ និងការលើកទឹកចិត្តរបស់ថ្នាក់ដឹកនាំបានឡើយ។

---

## ៤. តុល្យភាពរវាងការការពារការបន្លំ និងសិទ្ធិឯកជនភាពបុគ្គលិក

និយោជកមួយចំនួនព្យាយាមតាមដានបុគ្គលិកជ្រុលហួសហេតុ ដោយបើក GPS តាមដានបុគ្គលិក ២៤ ម៉ោង ដែលធ្វើឱ្យខូចថ្មទូរស័ព្ទ និងរំលោភលើជីវិតឯកជន។
> **ការគោរពសិទ្ធិឯកជនភាពរបស់ AttendKH**: AttendKH **ពិនិត្យទីតាំង GPS តែមួយវិនាទីប៉ុណ្ណោះ គឺនៅពេលបុគ្គលិកចុច "ចុះវត្តមាន" ឬ "ស្កេនចេញ"**។ ក្រៅពីពេលនោះ កម្មវិធីមិនតាមដានទីតាំង ឬទិន្នន័យអ្វីទាំងអស់ឡើយ។

---

## ៥. ដំណោះស្រាយតាមវិស័យអាជីវកម្មនៅកម្ពុជា

- **ការិយាល័យក្រុមហ៊ុន**: បុគ្គលិកប្រើទូរស័ព្ទដៃផ្ទាល់ខ្លួនចុះវត្តមានតាម GPS Geofencing ភ្ជាប់ការថតរូប Selfie។  
- **ហាងកាហ្វេ និងហាងលក់រាយ**: ដំឡើងថេប្លេតនៅតុគិតលុយដំណើរការមុខងារ **Tablet QR Kiosk** ស្កេនកូដ QR ត្រឹមតែ ១ វិនាទី។  
- **យានដ្ឋានជួសជុលរថយន្ត**: ប្រើប្រព័ន្ធស្កេនមុខលើថេប្លេត មិនបាច់ស្កេនមេដៃដែលប្រឡាក់ប្រេងឡើយ។  
- **ក្រុមការងារចុះការដ្ឋាន និងដឹកជញ្ជូន**: កំណត់ទីតាំង Geofence តាមការដ្ឋានអតិថិជន និងដំណើរការបានទោះបីគ្មានអ៊ីនធឺណិត។

---

## ៦. បញ្ជីត្រួតពិនិត្យការទប់ស្កាត់ការបន្លំវត្តមាន

- [ ] **ជំហានទី ១**: ពិនិត្យមើលភាពមិនប្រក្រតីនៃវត្តមានកន្លងមកធៀបនឹងលទ្ធផលការងារជាក់ស្តែង។  
- [ ] **ជំហានទី ២**: ឈប់ប្រើប្រាស់សៀវភៅកត់ឈ្មោះ និងការផ្ញើសារក្នុងក្រុម Telegram។  
- [ ] **ជំហានទី ៣**: កំណត់ក្នុងបទបញ្ជាផ្ទៃក្នុងថា ការចុះវត្តមានជំនួសគ្នាជាកំហុសធ្ងន់ធ្ងរតាមមាត្រា ៨៣ នៃច្បាប់ការងារ។  
- [ ] **ជំហានទី ៤**: ដាក់ឱ្យប្រើប្រាស់ [AttendKH](/pricing) ដែលមានប្រព័ន្ធ GPS និង Live Selfie។  
- [ ] **ជំហានទី ៥**: ភ្ជាប់ជាមួយ Telegram Channel ដើម្បីឱ្យអ្នកគ្រប់គ្រងទទួលបានដំណឹងភ្លាមៗ។  
- [ ] **ជំហានទី ៦**: បញ្ជូនទិន្នន័យត្រង់ទៅកាន់ [ប្រព័ន្ធបើកប្រាក់ខែ AttendKH](/payroll) ដើម្បីកាត់បន្ថយកំហុសរាប់ម៉ោង។

ទាក់ទងមកកាន់ [ក្រុមការងារ AttendKH](/contact) ឬទាញយក [កម្មវិធីទូរស័ព្ទ](/downloads) ដើម្បីសាកល្បងដោយឥតគិតថ្លៃ ១៤ ថ្ងៃ!`,
    content_zh: `![柬埔寨白领员工早晨在金边现代化企业大厦大厅使用手机从容完成自拍打卡](/blog/reduce-buddy-punching-attendance-fraud-cambodia.jpg)

## 1. 什么是代打卡（Buddy Punching）？在柬企业的隐形失血点

在柬埔寨各行业用工场景中，“代打卡”（Buddy Punching）是一个极其普遍却常被管理层低估的严重运营漏洞。这种场景在几乎每间金边办公室、沿街餐饮门市及工厂车间屡见不鲜：
> *早晨 07:55，Dara 驾驶摩托车深陷俄罗斯大道的严重早高峰车流中。眼看无法在 08:00 前赶到，他急忙给已在一楼大厅的同事 Sokha 发 Telegram：“兄弟，能帮我按一下指纹 / 刷一下工牌 / 在签到簿上代签个字吗？我 15 分钟内必到！”*

Sokha 碍于同事情面随手代劳，认为这不过是职场举手之劳。

然而，当这种虚假出勤在全公司 30 人、80 人乃至数百人之间形成心照不宣的潜规则时，企业的利益正在遭受持续侵蚀：
- **真金白银的隐性薪资流失**: 国际权威劳动力统计数据显示，虚假工时与代打卡每年导致的直接薪酬浪费高达企业**总工资盘的 2% 至 5%**。对于一家月薪资支出为 30,000 美元的中型企业而言，这意味着每月有 **600 至 1,500 美元** 被白白支付给了并未提供劳动的“幽灵工时”；
- **打击诚信员工的工作士气**: 每天清晨克服暴雨和堵车准时到岗的员工，在发现经常迟到的同事凭借“互相代打卡”同样拿着全勤奖金与相同薪资时，团队敬业度与信任基石将迅速崩塌；
- **安全责任与突发事故隐患**: 在商场火警疏散或工厂意外断电时，失真的考勤记录将导致救援人员无法核实楼宇内的真实在场人员名单。

---

## 2. 柬埔寨常见考勤作弊形态全景剖析

### A. 密码与工牌私下互借（餐饮与连锁零售）
在咖啡馆、精品店及便利超市，老板常安装一台简单的打卡机，要求员工输入 4 位密码或刷 RFID 考勤卡。员工往往在私人群里互通密码，早到的一名员工即可轻松替全班组完成签到。

### B. 纸质签名簿手写涂改与 Excel 事后篡改
在仍沿用纸质签到册或共享 Excel 登记的单位，迟到 30 分钟的员工随手写上 08:00。由于纸质和离线表格缺乏无法篡改的加密时间戳，主管根本无从核查真相。

### C. 手机端“虚拟定位”（Fake GPS）软件作弊
在普及移动打卡初期，部分技术型员工在安卓手机上安装虚拟定位软件，伪造经纬度欺骗系统，人尚在森速区的出租屋床上，却在手机上完成了万景岗（BKK1）办公室的打卡。

### D. 无序滞留骗取加班费（Ghost Overtime）
缺乏下班时间管控与事前审批机制，员工在 17:30 下班后继续在公司玩手机闲聊至 19:30，随后打卡下班并虚报 2 小时劳工部法定加班费。

---

## 3. 分层核验模型：现代移动系统如何有效防范作弊

为了以极低成本根治作弊顽疾，以 [AttendKH](/attendance) 为代表的本地化考勤系统建立了**五重防作弊防护网**：

| 校验层级 | 底层技术实现逻辑 | 针对性击穿的作弊手段 |
| :--- | :--- | :--- |
| **第一层：高精度 GPS 电子围栏** | 在办公楼或门市周边构建 50–100 米精准虚拟地理围栏 | 彻底封死在家中、路上或路边咖啡厅远程打卡可能 |
| **第二层：前置摄像头现场活体自拍** | 点击打卡瞬间必须抓拍真人自拍，加密绑定时间戳与坐标 | 彻底根除同事间代打卡、借工牌或代输密码漏洞 |
| **第三层：系统底层反改机检测** | 实时扫描底层 Mock Location 虚拟定位服务、开发者调试模式与 Root/越狱 | 拦截市面上绝大多数“假定位”作弊软件与改机插件 |
| **第四层：前台动态防伪平板 Kiosk** | 共享前台门禁平板生成 15 秒动态轮换二维码 | 防止员工翻拍静态工牌二维码并在群里私下分享 |
| **第五层：Telegram 异常即时告警** | 任何越界打卡或异常重试流水，毫秒级推送主管 Telegram 群 | 主管实时掌握异动事实，第一时间介入纠偏 |

> **理性认知技术的边界**: 技术能够精准核验员工是否在 08:00 准时站在店内完成真人自拍打卡，但技术无法替代现场管理——员工到岗后的工作产出依然需要依赖明确的 KPI 目标与主管的日常领导力。

---

## 4. 兼顾防作弊与员工隐私尊重

防范考勤作弊绝不意味着将公司变成冷冰冰的全天候监控监狱。
> **AttendKH 隐私保护原则**: AttendKH 严守数据合规标准。系统**仅在员工主动点击“上班打卡”或“下班打卡”的物理瞬间调用一次经纬度校验**。在打卡完成后的全天工作与下班私人时间内，应用在后台完全静默，绝不追踪任何行动轨迹，充分保障员工隐私与手机电池续航。

---

## 5. 柬埔寨代表性行业针对性防作弊实践

- **CBD 现代化办公室**: 推行员工个人手机 [AttendKH App](/attendance) 打卡，结合 10 分钟交通宽限期，既严谨又显人文关怀；
- **连锁咖啡厅与零售门市**: 前台收银处架设百元平板，启用 **Tablet QR Kiosk** 模式，扫码自拍秒刷进店；
- **汽修工坊与轮胎保养厂**: 采用免触碰人脸自拍识别，避免技师因机油黑手污染损坏指纹传感器；
- **物流配送与建筑工程队**: 基于移动端离线数据缓存与项目地块电子围栏，确保外勤人员真实到达作业现场。

---

## 6. 防范考勤作弊实操落地清单

- [ ] **步骤一**：对比分析各门市营业额与排班考勤流水，排查人效异常点。  
- [ ] **步骤二**：全面废止手写签名册、固定 PIN 码打卡机与无序的 Telegram 文字打卡群。  
- [ ] **步骤三**：在公司规章中明确将“代打卡”界定为违反《劳工法》第 83 条的严重违纪行为。  
- [ ] **步骤四**：全面上线 [AttendKH](/pricing) 具备 GPS 电子围栏与现场活体自拍的防作弊中台。  
- [ ] **步骤五**：开通 Telegram 实时预警机器人，让基层主管第一时间掌握异常打卡记录。  
- [ ] **步骤六**：考勤数据直通 [AttendKH 自动化薪资引擎](/payroll)，杜绝人工改单算薪风险。

即刻开启真实、高效、透明的出勤数字化管理。探索 [AttendKH 极简透明定价](/pricing)，每人每月仅需 1 美元；前往 [应用下载中心](/downloads) 或 [联系金边团队](/contact) 免费开启 14 天企业实操体验。`,
    cover_image: "/blog/reduce-buddy-punching-attendance-fraud-cambodia.jpg",
    author_name: "Chhunsour Seng",
    author_role: "Product Builder",
    author_role_km: "អ្នកបង្កើតផលិតផល",
    author_role_zh: "产品架构师",
    author_avatar: "/avatars/chhunsour.png",
    category: "Attendance",
    category_km: "វត្តមាន",
    category_zh: "考勤管理",
    tags: [
      "Attendance Fraud Cambodia",
      "Buddy Punching Cambodia",
      "Fake Attendance Cambodia",
      "GPS Attendance Cambodia",
      "Employee Check In System Cambodia",
      "Biometric Security",
    ],
    tags_km: [
      "ការបន្លំវត្តមានកម្ពុជា",
      "ការចុះវត្តមានជំនួសគ្នា",
      "វត្តមាន GPS កម្ពុជា",
      "ប្រព័ន្ធកត់ត្រាវត្តមាន",
      "សុវត្ថិភាពវត្តមានការងារ",
    ],
    tags_zh: [
      "柬埔寨代打卡",
      "虚假考勤防范",
      "GPS防作弊考勤",
      "考勤打卡系统",
      "企业用工合规",
    ],
    status: "published",
    published_at: "2026-09-13T08:00:00Z",
    scheduled_at: null,
    seo_title: "How to Stop Buddy Punching & Attendance Fraud in Cambodia — AttendKH",
    seo_description:
      "Eliminate buddy punching and fake check-ins in Cambodia. Learn how GPS geofencing, live selfie verification, and clear HR policies stop attendance fraud.",
    og_image: "/blog/reduce-buddy-punching-attendance-fraud-cambodia.jpg",
    view_count: 1940,
    faqs: [
      {
        question: "How can Cambodian employers legally discipline employees caught buddy punching?",
        question_km: "តើនិយោជកនៅកម្ពុជាអាចចាត់វិធានការវិន័យស្របច្បាប់លើបុគ្គលិកដែលចុះវត្តមានជំនួសគ្នាយ៉ាងដូចម្តេច?",
        question_zh: "在柬埔寨，雇主应如何依法对被抓到代打卡的违纪员工执行合规纪律处分？",
        answer:
          "Buddy punching constitutes time theft and fraud. Employers should issue a formal written warning signed by the employee. Under Article 83 of the Cambodian Labour Law and registered enterprise internal rules, repeated or deliberate falsification provides legal grounds for termination for serious misconduct.",
        answer_km:
          "ការចុះវត្តមានជំនួសគ្នា គឺជាការបន្លំម៉ោងធ្វើការ។ និយោជកគួរចេញលិខិតព្រមានជាលាយលក្ខណ៍អក្សរផ្លូវការ។ យោងតាមមាត្រា ៨៣ នៃច្បាប់ស្តីពីការងារ និងបទបញ្ជាផ្ទៃក្នុងសហគ្រាស ការក្លែងបន្លំទិន្នន័យម្តងហើយម្តងទៀត គឺជាមូលដ្ឋានស្របច្បាប់ក្នុងការបញ្ឈប់ពីការងារដោយកំហុសធ្ងន់។",
        answer_zh:
          "代打卡在法律性质上属于盗领薪酬与出勤欺诈。雇主首先应出具经员工签字确认的书面警告处分单。依据《柬埔寨劳工法》第 83 条及企业合规备案的内部规章，屡教不改的虚假打卡行为可直接定性为严重违纪，雇主有权依法单方解除劳动合同且无需支付解雇预告金。",
      },
      {
        question: "Does AttendKH track an employee's location outside of working hours?",
        question_km: "តើ AttendKH តាមដានទីតាំងរបស់បុគ្គលិកក្រៅម៉ោងធ្វើការដែរឬទេ?",
        question_zh: "AttendKH 是否会在下班后或非工作时间全天候追踪员工的个人移动轨迹？",
        answer:
          "Absolutely not. AttendKH only samples GPS location at the precise second the employee presses 'Clock In' or 'Clock Out'. Outside of these moments, the app remains completely dormant and captures zero location or movement data.",
        answer_km:
          "មិនតាមដានដាច់ខាត! AttendKH ពិនិត្យទីតាំង GPS តែមួយវិនាទីប៉ុណ្ណោះ គឺនៅពេលដែលបុគ្គលិកចុចចុះវត្តមានចូល ឬចេញពីការងារ។ ក្រៅពីពេលនោះ កម្មវិធីមិនកត់ត្រាទីតាំង ឬការធ្វើដំណើររបស់បុគ្គលិកឡើយ។",
        answer_zh:
          "绝对不会。AttendKH 仅在员工主动点击“上班打卡”或“下班打卡”的一瞬间调用单次 GPS 经纬度进行围栏匹配。在非打卡时段，应用在后台完全静默，绝不记录任何个人地理轨迹，严格守护员工隐私权。",
      },
      {
        question: "What should managers do if an employee claims their phone GPS was inaccurate?",
        question_km: "តើអ្នកគ្រប់គ្រងគួរដោះស្រាយយ៉ាងណាប្រសិនបើបុគ្គលិកអះអាងថា GPS ទូរស័ព្ទរបស់គាត់មិនច្បាស់?",
        question_zh: "如果员工声称因手机 GPS 定位漂移导致无法打卡，管理层应如何核实并妥善处理？",
        answer:
          "Employees can submit a digital 'Attendance Correction Request' in the app with attached photo evidence. The supervisor can review the timestamp and approve the punch with a single tap, while verifying whether the employee was genuinely present.",
        answer_km:
          "បុគ្គលិកអាចដាក់ពាក្យស្នើសុំកែតម្រូវវត្តមាន (Attendance Correction) ក្នុងកម្មវិធីដោយភ្ជាប់រូបថតភស្តុតាង។ ប្រធានផ្នែកអាចពិនិត្យពេលវេលា និងចុចអនុម័តបានភ្លាមៗ ប្រសិនបើបុគ្គលិកពិតជាបានមកធ្វើការជាក់ស្តែង។",
        answer_zh:
          "员工可在手机端发起“异常考勤补卡申请”，并由现场主管进行核实确认。主管确认员工真实在岗后，在手机端一键核准即可补正记录，系统会完整留存补卡流水的修改轨迹备查。",
      },
      {
        question: "Why is a shared Tablet QR Kiosk safer than traditional 4-digit PIN time clocks?",
        question_km: "ហេតុអ្វីបានជា Tablet QR Kiosk មានសុវត្ថិភាពជាងម៉ាស៊ីនវាយលេខកូដ PIN ៤ ខ្ទង់បុរាណ?",
        question_zh: "为什么共享平板 QR Kiosk 门禁模式比传统的 4 位数字密码打卡机更安全防作弊？",
        answer:
          "Static 4-digit PINs are easily memorized, texted, and entered by coworkers. In contrast, AttendKH Tablet QR Kiosk utilizes dynamic rolling QR codes that refresh every 15 seconds paired with live front-camera photo captures, eliminating proxy clock-ins.",
        answer_km:
          "លេខកូដ PIN ៤ ខ្ទង់ងាយស្រួលទន្ទេញចាំ និងផ្ញើសារឱ្យអ្នកដទៃវាយជំនួស។ ផ្ទុយទៅវិញ Tablet QR Kiosk របស់ AttendKH ប្រើប្រាស់កូដ QR ឌីជីថលដែលផ្លាស់ប្តូររៀងរាល់ ១៥ វិនាទីម្តង ភ្ជាប់ជាមួយការថតរូប Selfie ជាក់ស្តែង ដែលលុបបំបាត់ការចុះវត្តមានជំនួសគ្នាបានទាំងស្រុង។",
        answer_zh:
          "固定的 4 位数字密码极易被同事私下抄录并通过 Telegram 代输。而 AttendKH 的 Tablet QR Kiosk 采用每 15 秒动态轮换的加密防伪二维码，打卡瞬间更会触发前置摄像头现场人脸快照，彻底杜绝任何凭据共享漏洞。",
      },
    ],
    created_at: "2026-09-13T08:00:00Z",
    updated_at: "2026-09-13T08:00:00Z",
  },

  // =========================================================================
  // BLOG 1: How to Manage Employee Leave and Attendance Together in Cambodia (Sep 12, 2026)
  // =========================================================================
  {
    id: "post-manage-leave-attendance-cambodia",
    slug: "manage-employee-leave-attendance-cambodia",
    title: "How to Manage Employee Leave and Attendance Together in Cambodia",
    title_km: "របៀបគ្រប់គ្រងការសុំច្បាប់ និងវត្តមានបុគ្គលិកជាមួយគ្នានៅកម្ពុជា",
    title_zh: "柬埔寨企业员工请假与考勤一体化协同管理实操指南",
    excerpt:
      "A complete guide for Cambodian HR teams on synchronizing employee leave requests with daily attendance tracking. Prevent double-counted absences, streamline manager approvals, and ensure 100% accurate payroll preparation.",
    excerpt_km:
      "មគ្គុទ្ទេសក៍ពេញលេញសម្រាប់ក្រុមការងារ HR នៅកម្ពុជាក្នុងការតភ្ជាប់ការសុំច្បាប់របស់បុគ្គលិកជាមួយការកត់ត្រាវត្តមានប្រចាំថ្ងៃ។ ទប់ស្កាត់ការកាត់ប្រាក់ខែច្រឡំ សម្រួលដំណើរការអនុម័ត និងរៀបចំប្រាក់ខែឱ្យបានត្រឹមត្រូវ ១០០%។",
    excerpt_zh:
      "柬埔寨企业人事团队请假与考勤协同闭环实务手册：告别两张皮断层，彻底消除重复扣减缺勤隐患、敏捷化移动端审批流，确保每月薪酬核算 100% 精准无误。",
    key_takeaways: [
      "Managing leave on paper or Telegram separate from attendance clocks creates severe administrative friction, resulting in false unexcused absences and incorrect payroll deductions.",
      "Cambodian Labour Law governs distinct leave types: 18 annual leave days (Article 166), certified medical sick leave, special event leave (Article 169), and maternity leave (Article 182).",
      "Automating the workflow from employee leave submission to instant attendance roster updating prevents the dreaded 'double-deduction' trap at month-end.",
      "AttendKH connects leave approvals directly into daily geofenced attendance logs and the statutory payroll engine in one seamless, $1/user/month cloud platform.",
    ],
    key_takeaways_km: [
      "ការគ្រប់គ្រងការសុំច្បាប់លើក្រដាស ឬ Telegram ដាច់ដោយឡែកពីប្រព័ន្ធវត្តមាន បង្កឱ្យមានកំហុសច្រឡំកត់ជាការអវត្តមានគ្មានការអនុញ្ញាត និងកាត់ប្រាក់ខែខុស។",
      "ច្បាប់ស្តីពីការងារកម្ពុជាកំណត់ប្រភេទច្បាប់ច្បាស់លាស់៖ ច្បាប់ឈប់សម្រាកប្រចាំឆ្នាំ ១៨ ថ្ងៃ (មាត្រា ១៦៦), ច្បាប់ឈឺមានលិខិតពេទ្យ, ច្បាប់ពិសេស ៧ ថ្ងៃ (មាត្រា ១៦៩), និងច្បាប់លំហែមាតុភាព (មាត្រា ១៨២)។",
      "ការតភ្ជាប់ការសុំច្បាប់ទៅកាន់បញ្ជីវត្តមានដោយស្វ័យប្រវត្តិ ជួយទប់ស្កាត់ការកាត់ប្រាក់ខែត្រួតគ្នាលើថ្ងៃដែលបានសុំច្បាប់អនុញ្ញាតត្រឹមត្រូវ។",
      "AttendKH ភ្ជាប់ការអនុម័តច្បាប់ត្រង់ទៅកាន់កំណត់ត្រាវត្តមាន GPS និងប្រព័ន្ធបើកប្រាក់បៀវត្សរ៍ក្នុងប្រព័ន្ធតែមួយ ក្នុងតម្លៃសមរម្យត្រឹមតែ $១/នាក់/ខែ។",
    ],
    key_takeaways_zh: [
      "将员工请假单停留在纸质或 Telegram 群，与考勤打卡系统相互割裂，极易导致正规请假被系统误判为旷工，引发严重的错算薪酬纠纷。",
      "柬埔寨《劳工法》明确规范法定假期待遇：全职年假 18 个工作日（第 166 条）、正规凭证医疗病假、直系亲属特别事假（第 169 条）以及法定产假（第 182 条）。",
      "打通从员工手机提报请假、主管移动审批到考勤排班表实时自动标记的完整数据流，能够彻底根绝月末“重复扣款”的低级财务错误。",
      "AttendKH 将请假核准流水与 GPS 地理围栏考勤底表及法定算薪引擎深度打通，全流程集成于每人每月仅 1 美元的云端极简中台中。",
    ],
    content: `![Cambodian female HR manager pleasantly reviewing a digital leave request on a tablet with a male employee in a Phnom Penh office](/blog/manage-employee-leave-attendance-cambodia.jpg)

## 1. The Disconnected System Dilemma in Cambodian HR Operations

In many businesses across Phnom Penh, Siem Reap, and the provincial economic corridors, human resources managers fight a frustrating battle every month: **leave management and attendance tracking operate in two completely disconnected worlds**.

Consider the typical end-of-month reality:
- An employee submits a handwritten paper leave request or sends an informal message in a branch Telegram chat asking for two days of annual leave.
- The branch manager verbally agrees or sends a thumbs-up emoji ("👍") in Telegram.
- Two weeks later, the HR accountant sitting at headquarters in Tuol Kork opens the biometric attendance logs or Excel timesheet.
- Seeing that the employee did not clock in on those two days, the system registers two full days of **Unexcused Absence (AWOL)**.
- The accountant automatically docks the employee's salary and strips their monthly attendance bonus.
- On payday, the employee receives their payslip, discovers the wrongful deduction, and an angry confrontation erupts in the manager's office.

> **The Cost of Disconnection**: Industry studies show that Cambodian HR teams spend **15 to 25 hours every single month** cross-referencing Telegram messages, paper leave forms, and attendance sheets just to fix duplicate absence deductions. When leave and attendance do not talk to each other, administrative waste and employee grievances are guaranteed.

To run an efficient, compliant business, Cambodian employers must unify leave and attendance into a single, automated workflow.

---

## 2. Approved Leave vs. Unplanned Absence: Understanding the Legal Framework

A unified workforce system must accurately reflect Cambodian statutory leave entitlements codified under the **Ministry of Labour and Vocational Training (MoLVT)**:

| Leave Category | Statutory Legal Reference | Minimum Statutory Entitlement | Required Evidence & Approval Rules |
| :--- | :--- | :--- | :--- |
| **Paid Annual Leave** | *Article 166, Cambodian Labour Law* | **18 working days/year** (accrued at 1.5 days/month; +1 extra day per 3 years continuous tenure) | Prior written or digital request; requires manager sign-off before leave is taken |
| **Medical Sick Leave** | Statutory MoLVT Regulations & Labour Jurisprudence | Typically up to 1–6 months with progressive salary compensation tiers | Valid medical certificate from a licensed physician, hospital, or recognized clinic submitted within 48 hours |
| **Special Event Leave** | *Article 169* | **Up to 7 days/year** for personal marriage, child birth, or direct parent/spouse/child bereavement | May be deducted from accrued annual leave or granted as special paid leave under enterprise rules |
| **Maternity Leave** | *Article 182 & 183* | **90 calendar days** for female employees who give birth | Medical certificate confirming confinement; compensation tied to length of tenure |
| **Unexcused Absence (AWOL)** | *Article 83 & Enterprise Internal Regulations* | **0 days**; non-compensable | Absence without prior notice or medical justification; constitutes serious misconduct |

### Why Conflating Sick Leave and Unexcused Absence Is Dangerous
Under Cambodian labor arbitration jurisprudence, deducting salary or issuing disciplinary warnings to an employee who was legitimately ill and provided a timely medical certificate constitutes a labor law violation. An integrated system flags the absence as **Pending Medical Verification** until the certificate is uploaded, preventing erroneous payroll deductions.

---

## 3. The 5-Step Unified Workflow: From Mobile Request to Verified Payslip

Connecting leave and attendance eliminates manual verification entirely. Modern platforms enforce this seamless five-step loop:

### Step 1: Employee Mobile Leave Submission
The employee opens the [AttendKH Mobile App](/attendance) on their smartphone. They select the leave category (e.g., Annual Leave, Sick Leave, Special Leave), pick the date range, enter a brief reason, and attach a photo (such as a clinic doctor's certificate for sick leave).

### Step 2: Line Manager Instant Review
The employee's direct department supervisor receives an immediate notification on their phone or linked Telegram bot:
> *"Vicheka Heng requested 2 days of Annual Leave (Sep 18–19). Reason: Family wedding in Battambang. Current remaining balance: 8.5 days. Approve or Reject?"*

### Step 3: Automated HR Balance & Policy Verification
The cloud engine instantly verifies that the employee has sufficient accrued leave days, that the request does not violate black-out dates, and that the department will not be left understaffed.

### Step 4: Automatic Attendance Roster Synchronization
The moment the manager taps "Approve", the system **automatically updates the employee's attendance record**. On September 18 and 19:
- The attendance roster marks the days as **Approved Paid Annual Leave**.
- The geofenced check-in requirement is waived for those dates.
- The employee is not flagged as absent or late.

### Step 5: Direct Statutory Payroll Export
At month-end, [AttendKH Payroll](/payroll) processes the attendance logs automatically:
- Approved annual leave days are compensated at 100% regular base salary.
- No false absence deductions occur.
- Exact remaining leave balances print transparently on the employee's bilingual payslip.

---

## 4. Multi-Branch Operations: Avoiding Regional Leave Blindspots

For companies operating across multiple locations—such as retail branches in Phnom Penh, Siem Reap, and Sihanoukville, or distribution warehouses in Kampong Cham—managing leave across disconnected spreadsheets leads to operational chaos:
- A barista in Siem Reap requests leave via a local paper form; head office in Phnom Penh never receives the paper, leading to wrongful salary cuts.
- Store managers grant informal time off without recording it, resulting in unexpected weekend staffing shortages during busy sales periods.

With [AttendKH Multi-Branch Architecture](/multi-branch):
- **Single Centralized Calendar**: Regional operations directors view real-time leave coverage across all branches on one visual interactive calendar.
- **Fair Shift Coverage**: Managers easily spot overlapping leave requests and reassign shifts before service suffers.
- **Audit-Ready History**: Every submission, manager approval timestamp, and uploaded doctor's note is preserved in secure cloud storage for mandatory MoLVT labor audits.

---

## 5. 5 Common Leave Management Mistakes Cambodian HR Teams Make

### Mistake 1: Accepting Verbal or Casual Telegram Leave Requests
When managers accept informal voice notes or texts in personal chats, records get lost. Enforce a strict policy: *every leave request must be recorded in the digital system before it is considered approved*.

### Mistake 2: Failing to Enforce Medical Certificate Deadlines
Allowing employees to submit clinic notes weeks after returning to work creates payroll chaos. Establish a clear 48-hour deadline for medical documentation.

### Mistake 3: Double-Deducting Wages for Legitimate Leave
The most common payroll mistake in Cambodia: an employee takes approved annual leave, but because attendance and payroll systems are not synchronized, the accountant manually docks their pay for "missing work".

### Mistake 4: Not Tracking Remaining Leave Balances
When an employee resigns or their contract finishes (*Article 73 for FDC contracts*), employers must pay out all unused accrued annual leave. Failing to maintain an accurate ledger leads to bitter severance disputes at the Ministry of Labour.

### Mistake 5: Failing to Synchronize Leave with NSSF and GDT Tax
Certain unpaid leave types alter taxable gross wages, which impacts monthly **Tax on Salary (ToS)** progressive brackets and NSSF contribution ceilings. An automated platform handles these adjustments automatically.

---

## 6. The Cambodian HR Leave Management Implementation Checklist

Ready to modernize your workforce operations? Follow this straightforward rollout checklist:

- [ ] **Step 1**: Audit current leave tracking methods across all branches and identify where records fall through the cracks.
- [ ] **Step 2**: Update internal company leave rules to align with *Article 166* (18 days annual leave) and *Article 169* (special leave).
- [ ] **Step 3**: Establish clear advance notice requirements (e.g., 3 days for short leave, 7 days for extended leave).
- [ ] **Step 4**: Deploy [AttendKH](/pricing) across your organization to give staff mobile self-service leave requests.
- [ ] **Step 5**: Train shift supervisors to review and approve leave requests via their mobile phones or Telegram in under 24 hours.
- [ ] **Step 6**: Connect leave records directly to the [AttendKH Payroll Engine](/payroll) for automated, mistake-free salary preparation.

### Unify Attendance and Leave with AttendKH
Say goodbye to lost paper forms, messy Telegram chats, and wrongful payroll deductions. Discover how [AttendKH Attendance](/attendance) and [AttendKH Payroll](/payroll) bring harmony to your workforce management for just **$1 USD per employee per month**. [Explore our transparent pricing plans](/pricing), [download the mobile apps](/downloads), or [contact our Phnom Penh team](/contact) to start your free 14-day trial today.`,
    content_km: `![ប្រធានផ្នែក HR ពិនិត្យសំណើសុំច្បាប់របស់បុគ្គលិកលើថេប្លេតក្នុងបន្ទប់ធ្វើការទំនើបនៅរាជធានីភ្នំពេញ](/blog/manage-employee-leave-attendance-cambodia.jpg)

## ១. ផលវិបាកនៃការគ្រប់គ្រងវត្តមាន និងការសុំច្បាប់ដាច់ដោយឡែកពីគ្នា

នៅក្នុងអាជីវកម្មជាច្រើននៅរាជធានីភ្នំពេញ សៀមរាប និងតាមបណ្តាខេត្ត អ្នកគ្រប់គ្រងធនធានមនុស្ស (HR) តែងតែជួបប្រទះការឈឺក្បាលជាប្រចាំរៀងរាល់ចុងខែ៖ **ការសុំច្បាប់ និងការកត់ត្រាវត្តមានដំណើរការក្នុងប្រព័ន្ធពីរដាច់ដោយឡែកពីគ្នា**។

ទិដ្ឋភាពជាក់ស្តែងដែលកើតឡើងជាទូទៅ៖
- បុគ្គលិកសរសេរពាក្យសុំច្បាប់លើក្រដាស ឬផ្ញើសារសុំច្បាប់សម្រាក ២ ថ្ងៃក្នុងក្រុម Telegram របស់សាខា។
- ប្រធានសាខាយល់ព្រម ឬផ្ញើរូបសញ្ញាមេដៃ ("👍") ក្នុង Telegram។
- ពីរសប្តាហ៍ក្រោយមក គណនេយ្យករនៅការិយាល័យកណ្តាលបើកទិន្នន័យម៉ាស៊ីនស្កេន ឬ Excel មកមើល។
- ដោយឃើញបុគ្គលិកមិនបានស្កេនវត្តមាន ២ ថ្ងៃនោះ ប្រព័ន្ធក៏កត់ត្រាថាជា **ការអវត្តមានគ្មានការអនុញ្ញាត (AWOL)**។
- គណនេយ្យករកាត់ប្រាក់ខែ ២ ថ្ងៃនោះ និងដកប្រាក់រង្វាន់ឧស្សាហ៍ព្យាយាម (Attendance Bonus) ចោល។
- នៅថ្ងៃបើកប្រាក់ខែ បុគ្គលិកឃើញប័ណ្ណបើកប្រាក់ខែត្រូវកាត់លុយ ក៏កើតជាជម្លោះតវ៉ាយ៉ាងខ្លាំងជាមួយអ្នកគ្រប់គ្រង។

> **ការខាតបង់ពេលវេលា**: ការសិក្សាបង្ហាញថា ក្រុមការងារ HR នៅកម្ពុជាត្រូវចំណាយពេលពី **១៥ ទៅ ២៥ ម៉ោងជារៀងរាល់ខែ** ដើម្បីអង្គុយផ្ទៀងផ្ទាត់សារ Telegram ពាក្យសុំច្បាប់លើក្រដាស និងបញ្ជីវត្តមាន ដើម្បីកែតម្រូវប្រាក់ខែដែលកាត់ច្រឡំ។

---

## ២. ច្បាប់អនុញ្ញាត និងការអវត្តមានគ្មានច្បាប់៖ ក្របខ័ណ្ឌច្បាប់ការងារ

ប្រព័ន្ធគ្រប់គ្រងការងារត្រូវតែស្របតាមច្បាប់ស្តីពីការងារនៃព្រះរាជាណាចក្រកម្ពុជា និងបទដ្ឋានរបស់ក្រសួងការងារ៖
- **ច្បាប់ឈប់សម្រាកប្រចាំឆ្នាំ (មាត្រា ១៦៦)**: បុគ្គលិកពេញសិទ្ធិទទួលបានការឈប់សម្រាកប្រចាំឆ្នាំ **១៨ ថ្ងៃក្នុងមួយឆ្នាំ** (សន្សំបាន ១.៥ ថ្ងៃក្នុងមួយខែ) និងកើនឡើង ១ ថ្ងៃបន្ថែមរៀងរាល់អតីតភាពការងារ ៣ ឆ្នាំជាប់គ្នា។  
- **ច្បាប់ឈឺ (Sick Leave)**: តម្រូវឱ្យមានលិខិតបញ្ជាក់សុខភាពត្រឹមត្រូវពីគ្លីនិក ឬមន្ទីរពេទ្យស្របច្បាប់ ដែលត្រូវផ្ញើជូន HR ក្នុងរយៈពេល ៤៨ ម៉ោង។  
- **ច្បាប់ឈប់សម្រាកពិសេស (មាត្រា ១៦៩)**: រហូតដល់ ៧ ថ្ងៃក្នុងមួយឆ្នាំ សម្រាប់អាពាហ៍ពិពាហ៍ផ្ទាល់ខ្លួន ភរិយាសម្រាលកូន ឬមរណភាពសាច់ញាតិផ្ទាល់។  
- **ច្បាប់លំហែមាតុភាព (មាត្រា ១៨២)**: ៩០ ថ្ងៃតាមប្រតិទិនសម្រាប់បុគ្គលិកស្ត្រីសម្រាលកូន។  
- **ការអវត្តមានគ្មានការអនុញ្ញាត (AWOL)**: ការឈប់ដោយគ្មានដំណឹង មិនទទួលបានប្រាក់ឈ្នួលឡើយ និងអាចប្រឈមនឹងវិន័យការងារធ្ងន់ធ្ងរតាមមាត្រា ៨៣។

---

## ៣. ដំណើរការ ៥ ជំហានក្នុងការតភ្ជាប់ការសុំច្បាប់ និងវត្តមាន

### ជំហានទី ១៖ បុគ្គលិកស្នើសុំច្បាប់តាមទូរស័ព្ទ
បុគ្គលិកបើក [កម្មវិធីទូរស័ព្ទ AttendKH](/attendance) ជ្រើសរើសប្រភេទច្បាប់ (ច្បាប់ប្រចាំឆ្នាំ ច្បាប់ឈឺ ច្បាប់ពិសេស) ជ្រើសរើសថ្ងៃ និងភ្ជាប់រូបថត (ដូចជាលិខិតពេទ្យ)។

### ជំហានទី ២៖ ប្រធានផ្នែកអនុម័តភ្លាមៗ
ប្រធានផ្នែកទទួលបានសារដំណឹងលើទូរស័ព្ទ ឬ Telegram Bot ភ្លាមៗ៖
> *"វិច្ឆិកា ស្នើសុំច្បាប់ប្រចាំឆ្នាំ ២ ថ្ងៃ (១៨–១៩ កញ្ញា)។ មូលហេតុ៖ ការបងប្អូននៅបាត់ដំបង។ ច្បាប់នៅសល់៖ ៨.៥ ថ្ងៃ។ តើយល់ព្រម ឬបដិសេធ?"*

### ជំហានទី ៣៖ ប្រព័ន្ធផ្ទៀងផ្ទាត់ចំនួនថ្ងៃច្បាប់ស្វ័យប្រវត្តិ
ប្រព័ន្ធ Cloud ពិនិត្យមើលចំនួនថ្ងៃច្បាប់ដែលនៅសល់ដោយស្វ័យប្រវត្តិ។

### ជំហានទី ៤៖ បច្ចុប្បន្នភាពបញ្ជីវត្តមានស្វ័យប្រវត្តិ
នៅពេលប្រធានផ្នែកចុច "យល់ព្រម" ប្រព័ន្ធនឹងកត់ត្រាថ្ងៃទី ១៨ និង ១៩ កញ្ញា ក្នុងបញ្ជីវត្តមានថា **ច្បាប់ប្រចាំឆ្នាំមានការអនុញ្ញាត (Approved Annual Leave)** ដោយមិនចាត់ទុកជាការមកយឺត ឬអវត្តមានឡើយ។

### ជំហានទី ៥៖ បញ្ជូនទៅកាន់ការគណនាប្រាក់ខែ
នៅចុងខែ [ប្រព័ន្ធបើកប្រាក់ខែ AttendKH](/payroll) គណនាប្រាក់ខែដោយស្វ័យប្រវត្តិ ដោយមិនមានការកាត់ប្រាក់ច្រឡំឡើយ។

---

## ៤. ការគ្រប់គ្រងសាខាច្រើនដោយគ្មានគម្លាត

សម្រាប់ក្រុមហ៊ុនដែលមានសាខានៅភ្នំពេញ សៀមរាប និងព្រះសីហនុ [AttendKH Multi-Branch](/multi-branch) ផ្តល់នូវ៖
- **ប្រតិទិនរួមតែមួយ**: មើលឃើញវត្តមាន និងការសុំច្បាប់របស់បុគ្គលិកគ្រប់សាខាលើអេក្រង់តែមួយ។  
- **ការរៀបចំវេនការងារបានល្អ**: ដឹងមុនពីការខ្វះមនុស្ស និងរៀបចំបុគ្គលិកជំនួសទាន់ពេលវេលា។  
- **ទិន្នន័យស្របច្បាប់**: រាល់លិខិតពេទ្យ និងកំណត់ត្រាត្រូវបានរក្សាទុកលើ Cloud ងាយស្រួលពេលមានអធិការកិច្ចការងារ។

---

## ៥. កំហុសទូទៅ ៥ យ៉ាងដែលផ្នែក HR តែងតែជួបប្រទះ

១. ទទួលយកការសុំច្បាប់តាមពាក្យសំដី ឬសារ Telegram ធម្មតា។  
២. មិនកំណត់ពេលច្បាស់លាស់ក្នុងការយកលិខិតបញ្ជាក់ពីគ្រូពេទ្យមកឱ្យ HR។  
៣. កាត់ប្រាក់ខែត្រួតគ្នាលើថ្ងៃដែលបុគ្គលិកបានសុំច្បាប់ត្រឹមត្រូវ។  
៤. មិនបានកត់ត្រាចំនួនថ្ងៃច្បាប់ដែលនៅសល់ច្បាស់លាស់ ធ្វើឱ្យមានជម្លោះពេលបញ្ចប់កិច្ចសន្យាការងារ (*មាត្រា ៧៣*)។  
៥. គណនាការកាត់ប្រាក់ច្បាប់គ្មានប្រាក់ឈ្នួលខុសកាំពន្ធលើប្រាក់បៀវត្សរ៍ (ToS) និង ប.ស.ស.។

---

## ៦. បញ្ជីត្រួតពិនិត្យការអនុវត្តជាក់ស្តែងសម្រាប់ HR

- [ ] **ជំហានទី ១**: ពិនិត្យមើលដំណើរការសុំច្បាប់បច្ចុប្បន្ននៅគ្រប់សាខា។  
- [ ] **ជំហានទី ២**: កែសម្រួលគោលការណ៍ច្បាប់ឈប់សម្រាកឱ្យស្របតាមមាត្រា ១៦៦ និង ១៦៩ នៃច្បាប់ការងារ។  
- [ ] **ជំហានទី ៣**: កំណត់ពេលសុំច្បាប់ជាមុនឱ្យបានច្បាស់លាស់ (ឧ. សុំមុន ៣ ថ្ងៃ ឬ ៧ ថ្ងៃ)។  
- [ ] **ជំហានទី ៤**: ដាក់ឱ្យប្រើប្រាស់ [AttendKH](/pricing) ឱ្យបុគ្គលិកសុំច្បាប់តាមទូរស័ព្ទ។  
- [ ] **ជំហានទី ៥**: បណ្តុះបណ្តាលប្រធានផ្នែកឱ្យចេះអនុម័តតាមទូរស័ព្ទ ឬ Telegram។  
- [ ] **ជំហានទី ៦**: ភ្ជាប់ជាមួយ [ប្រព័ន្ធបើកប្រាក់ខែស្វ័យប្រវត្តិ](/payroll) ដើម្បីលុបបំបាត់កំហុសកាត់ប្រាក់ខែ។

ស្វែងយល់បន្ថែមពី [ប្រព័ន្ធគ្រប់គ្រងវត្តមាន AttendKH](/attendance) ត្រឹមតែ **$១/នាក់/ខែ** ឬទាក់ទងមកកាន់ [ក្រុមការងាររបស់យើង](/contact) ដើម្បីចាប់ផ្តើមសាកល្បងដោយឥតគិតថ្លៃ!`,
    content_zh: `![柬埔寨女HR主管在金边写字楼内使用平板电脑与男员工亲切沟通核对数字化请假申请](/blog/manage-employee-leave-attendance-cambodia.jpg)

## 1. 考勤打卡与请假割裂引发的运营内耗

在金边、暹粒以及全柬各大商业中心的企业中，人力资源主管每到月底发薪日，常常深陷于一场精疲力竭的数据对账泥潭：**请假管理与考勤打卡系统完全是两张皮**。

这种由于系统割裂造成的典型业务摩擦极为普遍：
- 员工在分店手写了一张纸质请假条，或在分店的日常工作 Telegram 群里发了一条文字消息申请休假 2 天；
- 门店店长口头同意或随手回了一个赞（"👍"）表情；
- 半个月后，坐在金边堆谷区总部的薪酬会计导出指纹机数据或手工 Excel 考勤底表；
- 看到该员工在这两天完全没有打卡记录，系统或会计直接判定为 **无故缺勤旷工（AWOL）**；
- 会计直接扣减 2 天基本工资，并顺手清零当月的全勤奖金；
- 发薪日员工收到工资条发现被多扣款，愤怒地冲进主管办公室发生激烈争执。

> **数据统计事实**: 调研表明，柬埔寨企业人事部门每月平均需要耗费 **15 至 25 个小时**，专门在 Telegram 聊天记录、散落的纸质假条和考勤报表之间反复比对、手工调单与退补扣款。系统不互通，不仅大幅增加用工风险，更严重破坏团队士气。

要构建高效透明的现代用工体系，企业必须将请假审批与考勤排班深度打通为同一条数字化闭环。

---

## 2. 合规法定假期与无故旷工的法律界定

协同系统的底层规则，必须严格锚定柬埔寨劳工与职业培训部（MoLVT）强制推行的法定休假框架：

| 法定假期类别 | 《柬埔寨劳工法》法律条文 | 法定最低假期标准 | 凭证要求与审批准则 |
| :--- | :--- | :--- | :--- |
| **带薪年休假 (Annual Leave)** | 第 166 条 | **全年 18 个工作日**（每月计提 1.5 天；每连续服务满 3 年递增 1 天） | 必须提前履行书面或数字化申请，经主管核准后方可离岗休假 |
| **医疗病假 (Sick Leave)** | 劳工部法规与劳动仲裁法理 | 依企业规章享有阶梯式保障期 | 必须提供正规执业诊所、公立医院出具的医生诊断证明书（48小时内提交） |
| **特别事假 (Special Leave)** | 第 169 条 | **每年最多 7 天**（直系亲属婚丧嫁娶、配偶分娩等直系大事） | 依规章可从带薪年假中折抵或享有特别保障，需附相关证明文件 |
| **法定产假 (Maternity Leave)** | 第 182、183 条 | **90 个自然日**（连续全额或半额薪资保障依工龄执行） | 需提供正规医疗机构分娩或预产期凭证 |
| **无故旷工 (AWOL)** | 第 83 条及企业内部规章 | **0 天**；无薪且属于严重违纪范畴 | 既无事前请假亦无合规病假凭证，构成雇主合法解除劳动合同的事由 |

### 严禁将合规病假混淆为无故旷工
在柬埔寨劳工仲裁法理中，对已按规定提供真实正规医疗诊断书的生病员工粗暴判定旷工并扣薪，属于严重的违法行为。一体化协同系统会将此类缺勤自动标记为“待提交医院诊断证明”，彻底杜绝误扣工资。

---

## 3. 五步协同闭环：从手机提报到精准发薪

将请假审批直接无缝链接考勤打卡，彻底免去人工核单的繁琐苦力：

### 第一步：员工手机极速提报
员工打开 [AttendKH 移动应用](/attendance)，选择假期类型（年假、病假、事假），选定日期区间，填写事由并直接手机拍照上传证明材料（如医院病假单）。

### 第二步：主管移动端一键秒审
直属主管手机端或绑定的 Telegram 机器人即刻收到结构化审批通知：
> *"员工 Vicheka Heng 申请 2 天带薪年休假（9月18日–19日）。请假事由：赴马德望参加亲属婚礼。当前剩余年假额度：8.5天。请审批？"*

### 第三步：系统智能核销假额与排班冲撞
云端中台全自动核验该员工名下剩余可用年假天数，校验是否有部门人员排班冲突。

### 第四步：考勤排班底表毫秒级自动标记
主管轻触“核准”的同一瞬间，**考勤系统自动同步更新**。在 9 月 18 日与 19 日当天：
- 考勤底表自动将该员工状态标记为 **已核准带薪年假（Approved Annual Leave）**；
- 豁免当天的现场 GPS 围栏打卡要求；
- 系统绝不触发迟到报警，亦绝不记入旷工。

### 第五步：直连薪酬自动合规发薪
月末核算时，[AttendKH 薪酬引擎](/payroll) 自动识别年假天数并发放 100% 基础薪资，剩余年假天数透明展示在三语电子工资条上。

---

## 4. 多门市与跨省分支统管：消除休假视线盲区

对于在金边、暹粒、西哈努克港及各省拥有多家连锁门市的企业，各自为政的手工假条常酿成灾难。借助 [AttendKH 多门市管理中台](/multi-branch)：
- **统一全景假期看板**: 跨省运营总监在电脑端即可全盘查阅全柬各门店员工在岗与请假覆盖率；
- **排班冲突预防**: 智能预警同门市关键岗位多人同时请假，提前协调支援；
- **合规审计备查**: 审批流水、假条快照、主管确认时间戳在云端加密封存，随时从容应对劳工部突击稽查。

---

## 5. 柬埔寨企业 HR 常见的 5 大请假管理误区

1. **允许私下口头请假或非正规群聊报备**: 缺少规范记录，发生纠纷时企业百口莫辩；
2. **病假条回收机制形同虚设**: 必须明确返岗后 48 小时内提交正规医院假条的红线；
3. **已批年假被考勤系统当成缺勤重复扣薪**: 缺乏打通的一体化系统导致的最常见算薪低级失误；
4. **未精准动态记账剩余年假**: 员工离职或固定期限合同（FDC）到期终止时，未结清年假补偿常引发昂贵劳资仲裁；
5. **无薪假与工资税（ToS）脱节**: 未出勤扣款影响应税工资基数，需由系统自动化完成阶梯折算。

---

## 6. 请假与考勤协同落地实操清单

- [ ] **步骤一**：排查目前各部门及分店在用的请假表单，废除口头私下报备。  
- [ ] **步骤二**：依据劳工法第 166 条与 169 条完善带薪年休假与特别事假内部细则。  
- [ ] **步骤三**：明确请假提前提报期（短假提前 3 天，长假提前 7 天）。  
- [ ] **步骤四**：全员启用 [AttendKH 移动端](/pricing)，赋予员工手机自助查假与请假能力。  
- [ ] **步骤五**：培训门店主管在手机或 Telegram 上进行 24 小时内快速审批。  
- [ ] **步骤六**：将请假考勤无缝关联至 [AttendKH 自动化算薪引擎](/payroll)，发薪日前彻底消除重复对账。

告别散落的纸质单据与算薪冲突。查看 [AttendKH 极简透明定价](/pricing)，每人每月仅需 1 美元；前往 [应用下载中心](/downloads) 获取应用，或 [联系金边团队](/contact) 免费开启 14 天企业实操体验。`,
    cover_image: "/blog/manage-employee-leave-attendance-cambodia.jpg",
    author_name: "Chhunsour Seng",
    author_role: "Product Builder",
    author_role_km: "អ្នកបង្កើតផលិតផល",
    author_role_zh: "产品架构师",
    author_avatar: "/avatars/chhunsour.png",
    category: "Attendance",
    category_km: "វត្តមាន",
    category_zh: "考勤管理",
    tags: [
      "Employee Leave Cambodia",
      "Leave Management Cambodia",
      "Attendance and Leave System Cambodia",
      "HR Leave Tracking Cambodia",
      "Employee Absence Cambodia",
      "MoLVT Compliance",
    ],
    tags_km: [
      "ច្បាប់ឈប់សម្រាកកម្ពុជា",
      "ការគ្រប់គ្រងច្បាប់បុគ្គលិក",
      "វត្តមាននិងការសុំច្បាប់",
      "ប្រព័ន្ធសុំច្បាប់តាមទូរស័ព្ទ",
      "ច្បាប់ការងារកម្ពុជា",
    ],
    tags_zh: [
      "柬埔寨员工请假",
      "请假考勤一体化",
      "年休假管理系统",
      "柬埔寨HR软件",
      "劳工法合规考勤",
    ],
    status: "published",
    published_at: "2026-09-12T08:00:00Z",
    scheduled_at: null,
    seo_title: "How to Manage Employee Leave & Attendance in Cambodia — AttendKH",
    seo_description:
      "A complete guide to managing employee leave and attendance together in Cambodia. Prevent double-counted absences, streamline approvals, and sync with payroll.",
    og_image: "/blog/manage-employee-leave-attendance-cambodia.jpg",
    view_count: 1720,
    faqs: [
      {
        question: "How many days of paid annual leave do full-time employees accrue in Cambodia?",
        question_km: "តើបុគ្គលិកពេញសិទ្ធិនៅកម្ពុជាទទួលបានការឈប់សម្រាកប្រចាំឆ្នាំប៉ុន្មានថ្ងៃ?",
        question_zh: "依据柬埔寨现行《劳工法》，全职员工每年享有几天法定带薪年休假？",
        answer:
          "Under Article 166 of the Cambodian Labour Law, full-time employees accrue 18 working days of paid annual leave per year (1.5 days per month of continuous service). Tenure adds +1 additional working day for every 3 years of service.",
        answer_km:
          "យោងតាមមាត្រា ១៦៦ នៃច្បាប់ស្តីពីការងារ បុគ្គលិកពេញសិទ្ធិទទួលបានការឈប់សម្រាកប្រចាំឆ្នាំ ១៨ ថ្ងៃធ្វើការក្នុងមួយឆ្នាំ (សន្សំបាន ១.៥ ថ្ងៃក្នុងមួយខែធ្វើការជាប់គ្នា)។ អតីតភាពការងាររៀងរាល់ ៣ ឆ្នាំជាប់គ្នា បន្ថែមបាន ១ ថ្ងៃធ្វើការទៀត។",
        answer_zh:
          "根据柬埔寨《劳工法》第 166 条明确规定，全职员工每连续服务满 1 个月即可计提 1.5 个工作日年假，全年累计享有 18 个工作日的法定带薪年休假。在此基准上，员工连续工龄每满 3 年，依法递增 1 个工作日带薪年假。",
      },
      {
        question: "What documentation is legally required for medical sick leave in Cambodia?",
        question_km: "តើឯកសារអ្វីខ្លះដែលតម្រូវតាមផ្លូវច្បាប់សម្រាប់ការសុំច្បាប់ឈឺនៅកម្ពុជា?",
        question_zh: "在柬埔寨，员工申请医疗病假在法律和企业制度上需要提交何种有效证明文件？",
        answer:
          "Sick leave requires a formal medical certificate signed by a licensed physician from a legally registered clinic or hospital. Employees should notify supervisors prior to shift start and provide the physical or digital certificate within 48 hours.",
        answer_km:
          "ការឈប់សម្រាកដោយសារជំងឺ តម្រូវឱ្យមានលិខិតបញ្ជាក់សុខភាពផ្លូវការដែលមានចុះហត្ថលេខាពីគ្រូពេទ្យមានអាជ្ញាប័ណ្ណនៃគ្លីនិក ឬមន្ទីរពេទ្យស្របច្បាប់។ បុគ្គលិកគួរជូនដំណឹងមុនម៉ោងចាប់ផ្តើមការងារ និងផ្ញើលិខិតពេទ្យជូន HR ក្នុងពេល ៤៨ ម៉ោង។",
        answer_zh:
          "合规病假必须附带具有合法执业资质的公立医院或正规注册诊所医生出具并签字盖章的诊断证明书（Medical Certificate）。制度上通常要求员工在班次开始前先行电话/线上报备，并在返岗后 48 小时内提交假条原件或拍照上传系统备查。",
      },
      {
        question: "How does integrated leave and attendance prevent wrongful payroll deductions?",
        question_km: "តើការតភ្ជាប់ការសុំច្បាប់ និងវត្តមានជាមួយគ្នា ជួយទប់ស្កាត់ការកាត់ប្រាក់ខែច្រឡំយ៉ាងដូចម្តេច?",
        question_zh: "请假与考勤一体化协同中台是如何从根本上杜绝发薪时对员工错误扣款的？",
        answer:
          "When a manager approves a leave request, the system automatically marks the employee as on approved leave in the attendance database. On those dates, the check-in requirement is waived, preventing the system from falsely recording an unexcused absence.",
        answer_km:
          "នៅពេលប្រធានផ្នែកចុចយល់ព្រមលើពាក្យសុំច្បាប់ ប្រព័ន្ធនឹងកត់ត្រាដោយស្វ័យប្រវត្តិថាបុគ្គលិកកំពុងឈប់សម្រាកមានច្បាប់។ នៅថ្ងៃទាំងនោះ ប្រព័ន្ធនឹងលើកលែងការតម្រូវឱ្យស្កេនវត្តមាន ដែលទប់ស្កាត់ការកត់ច្រឡំថាជាការអវត្តមានគ្មានការអនុញ្ញាត។",
        answer_zh:
          "当主管在移动端核准请假后，底层考勤数据库会在对应日期毫秒级自动打上“已核准带薪/合规假”标签，并主动豁免当天的现场 GPS 围栏打卡校验。月底算薪引擎直接读取请假属性发薪，从源头切断系统将请假误判为旷工扣款的逻辑链条。",
      },
      {
        question: "Can Cambodian employers pay out unused annual leave in cash at contract termination?",
        question_km: "តើនិយោជកនៅកម្ពុជាអាចបើកប្រាក់សងថ្លៃច្បាប់ប្រចាំឆ្នាំដែលនៅសល់ពេលបញ្ចប់កិច្ចសន្យាការងារបានដែរឬទេ?",
        question_zh: "在劳动合同到期或解除时，柬埔寨雇主是否必须对员工未休满的带薪年休假折现补偿？",
        answer:
          "Yes. Under Article 167 of the Cambodian Labour Law, if an employment contract ends before an employee has taken their accrued annual leave, the employer is legally obligated to compensate all remaining accrued leave days in cash.",
        answer_km:
          "បាទ/ចាស! យោងតាមមាត្រា ១៦៧ នៃច្បាប់ស្តីពីការងារ ប្រសិនបើកិច្ចសន្យាការងារត្រូវបានបញ្ចប់មុនពេលបុគ្គលិកបានឈប់សម្រាកច្បាប់ប្រចាំឆ្នាំដែលខ្លួនបានសន្សំ និយោជកត្រូវតែបើកប្រាក់សងជំនួសថ្ងៃច្បាប់ដែលនៅសល់ទាំងអស់នោះជាសាច់ប្រាក់។",
        answer_zh:
          "是的，属于法定强制要求。依据柬埔寨《劳工法》第 167 条明确规定，当劳动合同依法解除或固定期限合同（FDC）期满终止时，若员工尚有累计未休完的带薪年休假额度，雇主依法必须将全部剩余假额全额折算为现金发放结算。",
      },
    ],
    created_at: "2026-09-12T08:00:00Z",
    updated_at: "2026-09-12T08:00:00Z",
  },
];
