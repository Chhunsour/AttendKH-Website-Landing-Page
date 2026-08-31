import { Logo } from "./chrome";

export function MaintenancePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-mist px-6 text-center">
      <div className="max-w-lg rounded-3xl border border-line bg-paper p-10 shadow-lg">
        <Logo />
        <h1 className="mt-6 font-display text-3xl font-bold text-ink">We’ll be right back</h1>
        <p className="mt-3 text-body">
          AttendKH is undergoing scheduled maintenance. Please try again shortly.
        </p>
        <p lang="km" className="mt-3 font-khmer text-body">
          AttendKH កំពុងថែទាំប្រព័ន្ធតាមកាលវិភាគ។ សូមព្យាយាមម្តងទៀតក្នុងពេលឆាប់ៗនេះ។
        </p>
      </div>
    </main>
  );
}
