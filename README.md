# AttendKH - Landing Page

Official landing and marketing website for **AttendKH** — Smart Attendance, QR Verification, Leave Management, and Automated Payroll System tailored for modern Cambodian businesses and institutions.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+ recommended) installed.

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Chhunsour/AttendKH-Website-Landing-Page.git
cd AttendKH-Website-Landing-Page
npm install
```

### Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── (site)/             # Main site route group
│   │   ├── about/          # About page
│   │   ├── attendance/     # Attendance solution feature page
│   │   ├── payroll/        # Payroll solution feature page
│   │   ├── pricing/        # Pricing tiers & plans
│   │   ├── contact/        # Contact & inquiries
│   │   ├── support/        # Help & Support
│   │   ├── terms/          # Terms of Service
│   │   └── privacy-policy/ # Privacy Policy
│   ├── globals.css         # Global styling & Tailwind configuration
│   └── layout.tsx          # Root layout & font definitions
├── components/             # Reusable UI & section components
└── lib/                    # Helper utilities
```

---

## 📄 License

This project is proprietary and confidential. All rights reserved.

## Home page image slots

The home page (`src/app/(home)/home-view.tsx`) is a replica of the supplied reference
design. Every phone mockup is a `PhoneSlot` (`src/components/home/parts.tsx`) that renders
a labelled grey placeholder until artwork is supplied.

Drop a device render in `public/` — a transparent PNG works best, since the placeholder
frame disappears entirely once `src` is set — and pass it through:

```tsx
<PhoneSlot label={c.hero.phone} src="/hero-phone.png" className="-mb-[124px] w-[216px]" />
```

There are three phone slots (hero, clock-in, payroll summary) and one `ArtSlot` for the
"Get Started Today" illustration. Keep the `className` sizing as-is so the crop against
the blue and grey cards stays the same.

## Adding your own images

Every picture on the site is an `ImageSlot` (`src/components/site/ui.tsx`). Until a real
file is supplied it renders a labelled grey box, so nothing is broken while artwork is
pending.

To replace one:

1. Put the file in `public/`, e.g. `public/clock-in.png`.
2. Pass `src` to the slot, e.g. in `src/app/(site)/attendance/attendance-view.tsx`:

```tsx
<ImageSlot label={a.heroImage} src="/clock-in.png" ratio="16 / 7" />
```

The `label` stays as the alt text, so keep it descriptive.

## Pages

`/` · `/attendance` · `/payroll` · `/multi-branch` · `/pricing` · `/customers` · `/faq` ·
`/about` · `/contact` · `/privacy-policy` · `/terms` · `/support`

Copy for the marketing pages lives in `src/lib/site-copy.ts` (English + Khmer).
Legal page copy stays in `src/lib/i18n.tsx`.
