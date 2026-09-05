import React from "react";
import Image from "next/image";

/**
 * 1. Bakong (National Bank of Cambodia) / KHQR Official Logo
 * Uses the official National Bank of Cambodia Bakong emblem
 */
export function BakongLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <Image
      src="/banks/bakong.png"
      alt="Bakong KHQR Payroll Settlement — National Bank of Cambodia | AttendKH"
      width={48}
      height={48}
      className={`${className} object-contain rounded-xl`}
      priority
    />
  );
}

/**
 * 2. ABA Bank (Advanced Bank of Asia) Official Logo
 * Uses the official ABA Bank teal icon with white ABA & red accent square
 */
export function AbaBankLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <Image
      src="/banks/aba.png"
      alt="ABA Bank Corporate Mass Payroll Batch Transfer & PayWay | AttendKH"
      width={48}
      height={48}
      className={`${className} object-contain rounded-xl`}
      priority
    />
  );
}

/**
 * 3. ACLEDA Bank (ACLEDA Bank Plc.) Official Logo
 * Uses the official ACLEDA modern mythological bird in flight (gold & white on royal blue)
 */
export function AcledaBankLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <Image
      src="/banks/acleda.png"
      alt="ACLEDA Bank ToanChet Bulk Payroll Disbursement | AttendKH"
      width={48}
      height={48}
      className={`${className} object-contain rounded-xl`}
      priority
    />
  );
}

/**
 * 4. Canadia Bank (Canadia Bank PLC) Official Logo
 * Uses the official Canadia Bank crimson icon with double gold rings & ancient coin star
 */
export function CanadiaBankLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <Image
      src="/banks/canadia.png"
      alt="Canadia Bank Direct Corporate Payroll Settlement | AttendKH"
      width={48}
      height={48}
      className={`${className} object-contain rounded-xl`}
      priority
    />
  );
}

/**
 * 5. Wing Bank (Wing Bank (Cambodia) Plc) Official Logo
 * Uses the official Wing Bank lime green icon with white Wing & blue swallow bird
 */
export function WingBankLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <Image
      src="/banks/wing.png"
      alt="Wing Bank Enterprise Payroll Settlement | AttendKH"
      width={48}
      height={48}
      className={`${className} object-contain rounded-xl`}
      priority
    />
  );
}

/**
 * 6. Corporate Transfer / Bank Wire Official Emblem
 * High-resolution neoclassical corporate bank wire insignia
 */
export function CorporateTransferLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <Image
      src="/banks/corporate.png"
      alt="Corporate Bank Wire & Payroll Settlement Invoice | AttendKH"
      width={48}
      height={48}
      className={`${className} object-contain rounded-xl`}
      priority
    />
  );
}
