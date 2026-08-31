export const EXCHANGE_RATE_USD_TO_KHR = 4100;

export type Currency = 'USD' | 'KHR';

/**
 * Converts a USD amount to Cambodian Riel (KHR) using the standard 4,100 rate.
 */
export function usdToKhr(usdAmount: number, rate = EXCHANGE_RATE_USD_TO_KHR): number {
  return Math.round(usdAmount * rate);
}

/**
 * Formats a numeric USD amount with $ symbol and commas.
 */
export function formatUSD(
  amount: number,
  options?: {
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    showCentsIfZero?: boolean;
  }
): string {
  const isWhole = Number.isInteger(amount) || Math.abs(amount - Math.round(amount)) < 0.001;
  const minDigits = options?.minimumFractionDigits ?? (options?.showCentsIfZero || !isWhole ? 2 : 0);
  const maxDigits = options?.maximumFractionDigits ?? 2;

  const formatted = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: minDigits,
    maximumFractionDigits: maxDigits,
  }).format(amount);

  return `$${formatted}`;
}

/**
 * Formats a numeric KHR amount with ៛ symbol and thousands separators.
 */
export function formatKHR(amount: number): string {
  const rounded = Math.round(amount);
  const formatted = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
  }).format(rounded);

  return `៛${formatted}`;
}

/**
 * Formats an amount given in USD into either USD or KHR depending on currency choice.
 */
export function formatCurrency(
  amountUsd: number,
  currency: Currency,
  options?: {
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    showCentsIfZero?: boolean;
  },
  rate = EXCHANGE_RATE_USD_TO_KHR
): string {
  if (currency === 'KHR') {
    const khrValue = usdToKhr(amountUsd, rate);
    return formatKHR(khrValue);
  }
  return formatUSD(amountUsd, options);
}
