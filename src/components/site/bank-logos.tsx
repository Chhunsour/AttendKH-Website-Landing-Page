import React from "react";

/**
 * 1. Bakong (National Bank of Cambodia) / KHQR Logo
 */
export function BakongLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Bakong KHQR"
    >
      <rect width="64" height="64" rx="16" fill="#E1251B" />
      <circle cx="32" cy="32" r="22" fill="#E1251B" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="3 3" />
      <path
        d="M32 18C24.268 18 18 24.268 18 32C18 39.732 24.268 46 32 46C39.732 46 46 39.732 46 32"
        stroke="#FFFFFF"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40C36.4183 40 40 36.4183 40 32"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="32" cy="32" r="3.5" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * 2. ABA Bank (Advanced Bank of Asia) Logo
 */
export function AbaBankLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="ABA Bank"
    >
      <rect width="64" height="64" rx="16" fill="#004F71" />
      <text
        x="32"
        y="42"
        fill="#FFFFFF"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="23"
        fontWeight="900"
        letterSpacing="-1"
        textAnchor="middle"
      >
        ABA
      </text>
      <circle cx="53" cy="20" r="3.5" fill="#00B2E3" />
    </svg>
  );
}

/**
 * 3. ACLEDA Bank Logo (Golden Hang / Hamsa Emblem)
 */
export function AcledaBankLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="ACLEDA Bank"
    >
      <rect width="64" height="64" rx="16" fill="#0B2F64" />
      <g transform="translate(14, 12) scale(0.75)">
        <path
          d="M24 4C20 4 16 7 14 11C11 17 12 25 17 30C19 32 22 34 25 35C22 36 18 36 15 34C11 32 8 28 8 23C8 21 7 19 5 19C3 19 2 21 2 23C2 31 8 39 16 42C21 44 27 44 32 42C39 39 44 32 45 25C46 19 44 13 39 8C35 4 29 4 24 4Z"
          fill="#DF9B13"
        />
        <circle cx="28" cy="12" r="3" fill="#FFD700" />
        <path
          d="M26 18C24 20 22 23 22 26C24 27 26 27 28 26C30 24 30 21 29 18C28 17 27 17 26 18Z"
          fill="#FFD700"
        />
        <path
          d="M32 20C30 22 29 25 29 28C32 29 34 28 36 26C37 23 36 21 34 20C33 19 32 19 32 20Z"
          fill="#FFD700"
        />
      </g>
    </svg>
  );
}

/**
 * 4. Canadia Bank Logo
 */
export function CanadiaBankLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Canadia Bank"
    >
      <rect width="64" height="64" rx="16" fill="#D61B23" />
      <g transform="translate(16, 16)">
        <polygon points="16,2 30,16 16,30 2,16" fill="none" stroke="#FFD700" strokeWidth="3.5" />
        <polygon points="16,8 24,16 16,24 8,16" fill="#FFD700" />
        <circle cx="16" cy="16" r="3" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

/**
 * 5. Wing Bank Logo
 */
export function WingBankLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Wing Bank"
    >
      <rect width="64" height="64" rx="16" fill="#8DC63F" />
      <path
        d="M14 36C18 24 28 16 42 14C36 20 32 28 30 36C28 42 24 46 18 48C15 48 13 44 14 36Z"
        fill="#0F2B48"
      />
      <path
        d="M24 38C28 28 36 22 48 20C44 26 40 32 38 40C36 44 32 47 26 48C24 48 23 45 24 38Z"
        fill="#FFFFFF"
      />
      <circle cx="46" cy="17" r="3.5" fill="#0F2B48" />
    </svg>
  );
}

/**
 * 6. Corporate Transfer / Bank Wire Logo
 */
export function CorporateTransferLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Corporate Transfer"
    >
      <rect width="64" height="64" rx="16" fill="#0F172A" />
      <path d="M16 26L32 16L48 26H16Z" fill="#38BDF8" />
      <rect x="20" y="28" width="4" height="14" rx="1" fill="#FFFFFF" />
      <rect x="28" y="28" width="4" height="14" rx="1" fill="#FFFFFF" />
      <rect x="36" y="28" width="4" height="14" rx="1" fill="#FFFFFF" />
      <rect x="44" y="28" width="4" height="14" rx="1" fill="#FFFFFF" />
      <rect x="14" y="44" width="36" height="4" rx="1.5" fill="#38BDF8" />
    </svg>
  );
}
