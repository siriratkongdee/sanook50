import {
  BRACKETS_2026,
  STANDARD_DEDUCTION_2026,
  ADDITIONAL_65_DEDUCTION,
  SENIOR_BONUS_DEDUCTION,
  SENIOR_BONUS_PHASEOUT,
  IRMAA_2026,
  rmdDivisor,
  rmdStartAge,
  type FilingStatus,
} from "./taxData2026";

export function progressiveTax(taxableIncome: number, filingStatus: FilingStatus): number {
  if (taxableIncome <= 0) return 0;
  const brackets = BRACKETS_2026[filingStatus];
  let tax = 0;
  let lastCap = 0;
  for (const { rate, upTo } of brackets) {
    if (taxableIncome <= lastCap) break;
    const amountInBracket = Math.min(taxableIncome, upTo) - lastCap;
    tax += amountInBracket * rate;
    lastCap = upTo;
  }
  return tax;
}

export function marginalRate(taxableIncome: number, filingStatus: FilingStatus): number {
  const brackets = BRACKETS_2026[filingStatus];
  for (const { rate, upTo } of brackets) {
    if (taxableIncome <= upTo) return rate;
  }
  return brackets[brackets.length - 1].rate;
}

// Next bracket ceiling above the given taxable income (Infinity if already in the top bracket).
export function nextBracketCeiling(taxableIncome: number, filingStatus: FilingStatus): number {
  const brackets = BRACKETS_2026[filingStatus];
  for (const { upTo } of brackets) {
    if (taxableIncome < upTo) return upTo;
  }
  return Infinity;
}

interface DeductionInput {
  filingStatus: FilingStatus;
  age: number;
  spouseAge?: number;
  magiEstimate: number; // used only for the senior bonus deduction phaseout
}

export function totalDeduction({ filingStatus, age, spouseAge, magiEstimate }: DeductionInput): number {
  let deduction = STANDARD_DEDUCTION_2026[filingStatus];

  const qualifying65 = [age, ...(filingStatus === "mfj" && spouseAge != null ? [spouseAge] : [])].filter(
    (a) => a >= 65
  ).length;

  deduction += qualifying65 * ADDITIONAL_65_DEDUCTION[filingStatus];

  if (qualifying65 > 0) {
    const { start, end } = SENIOR_BONUS_PHASEOUT[filingStatus];
    const range = end - start;
    const overage = Math.max(0, magiEstimate - start);
    const phaseoutFraction = range > 0 ? Math.min(1, overage / range) : 1;
    const bonusPerPerson = SENIOR_BONUS_DEDUCTION * (1 - phaseoutFraction);
    deduction += qualifying65 * Math.max(0, bonusPerPerson);
  }

  return deduction;
}

export interface ConversionAnalysisInput {
  filingStatus: FilingStatus;
  age: number;
  spouseAge?: number;
  otherIncome: number; // ordinary income before any conversion (AGI components)
  conversionAmount: number;
}

export interface ConversionAnalysisResult {
  taxableBefore: number;
  taxableAfter: number;
  taxBefore: number;
  taxAfter: number;
  conversionCost: number;
  effectiveRateOnConversion: number;
  marginalRateAfter: number;
  headroomToNextBracket: number;
  magiBefore: number;
  magiAfter: number;
  irmaaTierBefore: number;
  irmaaTierAfter: number;
  headroomToNextIrmaaTier: number;
}

export function analyzeConversion(input: ConversionAnalysisInput): ConversionAnalysisResult {
  const { filingStatus, age, spouseAge, otherIncome, conversionAmount } = input;

  const magiBefore = otherIncome;
  const magiAfter = otherIncome + conversionAmount;

  const deductionBefore = totalDeduction({ filingStatus, age, spouseAge, magiEstimate: magiBefore });
  const deductionAfter = totalDeduction({ filingStatus, age, spouseAge, magiEstimate: magiAfter });

  const taxableBefore = Math.max(0, otherIncome - deductionBefore);
  const taxableAfter = Math.max(0, otherIncome + conversionAmount - deductionAfter);

  const taxBefore = progressiveTax(taxableBefore, filingStatus);
  const taxAfter = progressiveTax(taxableAfter, filingStatus);
  const conversionCost = taxAfter - taxBefore;

  const irmaaTiers = IRMAA_2026[filingStatus];
  const tierIndex = (magi: number) => {
    let idx = 0;
    irmaaTiers.forEach((tier, i) => {
      if (magi >= tier.magiFloor) idx = i;
    });
    return idx;
  };
  const irmaaTierBefore = tierIndex(magiBefore);
  const irmaaTierAfter = tierIndex(magiAfter);
  const nextIrmaaTier = irmaaTiers[irmaaTierAfter + 1];

  return {
    taxableBefore,
    taxableAfter,
    taxBefore,
    taxAfter,
    conversionCost,
    effectiveRateOnConversion: conversionAmount > 0 ? conversionCost / conversionAmount : 0,
    marginalRateAfter: marginalRate(taxableAfter, filingStatus),
    headroomToNextBracket: Math.max(0, nextBracketCeiling(taxableAfter, filingStatus) - taxableAfter),
    magiBefore,
    magiAfter,
    irmaaTierBefore,
    irmaaTierAfter,
    headroomToNextIrmaaTier: nextIrmaaTier ? Math.max(0, nextIrmaaTier.magiFloor - magiAfter) : Infinity,
  };
}

export interface ProjectionYear {
  age: number;
  traditionalBalance: number;
  rothBalance: number;
  rmd: number;
}

export interface ProjectionInput {
  startAge: number;
  birthYear: number;
  traditionalBalance: number;
  rothBalance: number;
  growthRate: number; // e.g. 0.06
  oneTimeConversion: number; // applied in year 0 only
  yearsToProject: number;
}

// Projects two scenarios (with vs. without a one-time conversion this year) so the
// effect on future required minimum distributions is visible side by side.
export function projectScenarios(input: ProjectionInput): {
  baseline: ProjectionYear[];
  withConversion: ProjectionYear[];
} {
  const { startAge, birthYear, traditionalBalance, rothBalance, growthRate, oneTimeConversion, yearsToProject } =
    input;
  const rmdAge = rmdStartAge(birthYear);

  const simulate = (conversionAmount: number): ProjectionYear[] => {
    let traditional = traditionalBalance - conversionAmount;
    let roth = rothBalance + conversionAmount;
    const years: ProjectionYear[] = [];

    for (let i = 0; i <= yearsToProject; i++) {
      const age = startAge + i;
      const rmd = age >= rmdAge ? traditional / rmdDivisor(age) : 0;
      years.push({ age, traditionalBalance: traditional, rothBalance: roth, rmd });

      traditional = (traditional - rmd) * (1 + growthRate);
      roth = roth * (1 + growthRate);
      traditional = Math.max(0, traditional);
    }
    return years;
  };

  return {
    baseline: simulate(0),
    withConversion: simulate(oneTimeConversion),
  };
}
