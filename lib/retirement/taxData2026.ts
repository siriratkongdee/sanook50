// 2026 federal tax figures (IRS inflation adjustments incl. One Big Beautiful Bill changes).
// Source: irs.gov 2026 inflation adjustments. Educational estimates only — not tax advice.

export type FilingStatus = "single" | "mfj";

export interface Bracket {
  rate: number;
  upTo: number; // upper bound of this bracket (Infinity for the top bracket)
}

export const BRACKETS_2026: Record<FilingStatus, Bracket[]> = {
  single: [
    { rate: 0.10, upTo: 12_400 },
    { rate: 0.12, upTo: 50_400 },
    { rate: 0.22, upTo: 105_700 },
    { rate: 0.24, upTo: 201_775 },
    { rate: 0.32, upTo: 256_225 },
    { rate: 0.35, upTo: 640_600 },
    { rate: 0.37, upTo: Infinity },
  ],
  mfj: [
    { rate: 0.10, upTo: 24_800 },
    { rate: 0.12, upTo: 100_800 },
    { rate: 0.22, upTo: 211_400 },
    { rate: 0.24, upTo: 403_550 },
    { rate: 0.32, upTo: 512_450 },
    { rate: 0.35, upTo: 768_700 },
    { rate: 0.37, upTo: Infinity },
  ],
};

export const STANDARD_DEDUCTION_2026: Record<FilingStatus, number> = {
  single: 16_100,
  mfj: 32_200,
};

// Extra standard deduction per qualifying person age 65+.
export const ADDITIONAL_65_DEDUCTION: Record<FilingStatus, number> = {
  single: 2_050,
  mfj: 1_650, // per qualifying spouse
};

// OBBBA temporary senior bonus deduction, 2025-2028, per qualifying person 65+.
export const SENIOR_BONUS_DEDUCTION = 6_000;
export const SENIOR_BONUS_PHASEOUT: Record<FilingStatus, { start: number; end: number }> = {
  single: { start: 75_000, end: 175_000 },
  mfj: { start: 150_000, end: 250_000 },
};

// IRMAA 2026 brackets (based on 2024 MAGI), monthly Part B + Part D surcharge per person.
export interface IrmaaTier {
  magiFloor: number;
  partB: number;
  partD: number;
}

export const IRMAA_2026: Record<FilingStatus, IrmaaTier[]> = {
  single: [
    { magiFloor: 0, partB: 0, partD: 0 },
    { magiFloor: 109_000, partB: 81.20, partD: 14.50 },
    { magiFloor: 137_000, partB: 202.90, partD: 37.50 },
    { magiFloor: 171_000, partB: 324.60, partD: 60.40 },
    { magiFloor: 205_000, partB: 446.30, partD: 83.30 },
    { magiFloor: 500_000, partB: 487.00, partD: 91.00 },
  ],
  mfj: [
    { magiFloor: 0, partB: 0, partD: 0 },
    { magiFloor: 218_000, partB: 81.20, partD: 14.50 },
    { magiFloor: 274_000, partB: 202.90, partD: 37.50 },
    { magiFloor: 342_000, partB: 324.60, partD: 60.40 },
    { magiFloor: 410_000, partB: 446.30, partD: 83.30 },
    { magiFloor: 750_000, partB: 487.00, partD: 91.00 },
  ],
};

// SECURE 2.0 RMD starting age: 73 for those born 1951-1959, 75 for born 1960+.
export function rmdStartAge(birthYear: number): number {
  return birthYear >= 1960 ? 75 : 73;
}

// IRS Uniform Lifetime Table (post-2022 revision), ages 73-100.
export const UNIFORM_LIFETIME_TABLE: Record<number, number> = {
  73: 26.5, 74: 25.5, 75: 24.6, 76: 23.7, 77: 22.9, 78: 22.0, 79: 21.1,
  80: 20.2, 81: 19.4, 82: 18.5, 83: 17.7, 84: 16.8, 85: 16.0, 86: 15.2,
  87: 14.4, 88: 13.7, 89: 12.9, 90: 12.2, 91: 11.5, 92: 10.8, 93: 10.1,
  94: 9.5, 95: 8.9, 96: 8.4, 97: 7.8, 98: 7.3, 99: 6.8, 100: 6.4,
};

export function rmdDivisor(age: number): number {
  if (age < 73) return Infinity;
  const cappedAge = Math.min(age, 100);
  return UNIFORM_LIFETIME_TABLE[cappedAge] ?? 6.4;
}
