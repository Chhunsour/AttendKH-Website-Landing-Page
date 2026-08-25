export type OtType = 'regular' | 'rest_day' | 'public_holiday';

export interface OtMultiplierOption {
  type: OtType;
  labelEn: string;
  labelKm: string;
  multiplier: number;
}

export const OT_OPTIONS: Record<OtType, OtMultiplierOption> = {
  regular: {
    type: 'regular',
    labelEn: 'Regular (1.5×)',
    labelKm: 'ថ្ងៃធម្មតា (1.5×)',
    multiplier: 1.5,
  },
  rest_day: {
    type: 'rest_day',
    labelEn: 'Rest Day (2.0×)',
    labelKm: 'ថ្ងៃសម្រាកប្រចាំសប្តាហ៍ (2.0×)',
    multiplier: 2.0,
  },
  public_holiday: {
    type: 'public_holiday',
    labelEn: 'Public Holiday (2.0×)',
    labelKm: 'ថ្ងៃបុណ្យជាតិ (2.0×)',
    multiplier: 2.0,
  },
};

export const GRACE_PERIOD_MINUTES = 15;

export interface PayrollInput {
  baseSalary: number;
  workingDays: 22 | 26;
  lateMinutes: number;
  otHours: number;
  otType: OtType;
  gracePeriodMinutes?: number;
}

export interface PayrollCalculationResult {
  hourlyRate: number;
  gracePeriodMinutes: number;
  chargeableLateMinutes: number;
  lateDeduction: number;
  otHours: number;
  otMultiplier: number;
  otBonus: number;
  grossSalary: number;
  netTakeHome: number;
}

/**
 * Calculates hourly rate based on Cambodian standard:
 * hourlyRate = base / workingDays / 8
 */
export function calculateHourlyRate(baseSalary: number, workingDays: 22 | 26): number {
  if (workingDays <= 0) return 0;
  return baseSalary / workingDays / 8;
}

/**
 * Calculates late penalty deduction:
 * chargeableLateMinutes = max(0, lateMinutes - gracePeriodMinutes)
 * lateDeduction = chargeableLateMinutes * hourlyRate
 */
export function calculateLateDeduction(
  lateMinutes: number,
  hourlyRate: number,
  gracePeriodMinutes: number = GRACE_PERIOD_MINUTES
): { chargeableLateMinutes: number; lateDeduction: number } {
  const chargeableLateMinutes = Math.max(0, lateMinutes - gracePeriodMinutes);
  const lateDeduction = chargeableLateMinutes * hourlyRate;
  return { chargeableLateMinutes, lateDeduction };
}

/**
 * Calculates overtime bonus:
 * otBonus = otHours * hourlyRate * multiplier
 */
export function calculateOtBonus(
  otHours: number,
  hourlyRate: number,
  otType: OtType
): { otMultiplier: number; otBonus: number } {
  const multiplier = OT_OPTIONS[otType]?.multiplier ?? 1.5;
  const otBonus = otHours * hourlyRate * multiplier;
  return { otMultiplier: multiplier, otBonus };
}

/**
 * Full payroll calculation matching Cambodian labor law practice and brief specification.
 */
export function calculatePayroll(input: PayrollInput): PayrollCalculationResult {
  const gracePeriod = input.gracePeriodMinutes ?? GRACE_PERIOD_MINUTES;
  const hourlyRate = calculateHourlyRate(input.baseSalary, input.workingDays);
  const { chargeableLateMinutes, lateDeduction } = calculateLateDeduction(
    input.lateMinutes,
    hourlyRate,
    gracePeriod
  );
  const { otMultiplier, otBonus } = calculateOtBonus(input.otHours, hourlyRate, input.otType);

  const grossSalary = input.baseSalary - lateDeduction + otBonus;
  const netTakeHome = grossSalary; // Pre-tax / pre-NSSF take home specification

  return {
    hourlyRate,
    gracePeriodMinutes: gracePeriod,
    chargeableLateMinutes,
    lateDeduction,
    otHours: input.otHours,
    otMultiplier,
    otBonus,
    grossSalary,
    netTakeHome,
  };
}
