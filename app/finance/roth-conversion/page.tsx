"use client";

import { useMemo, useState } from "react";
import { BRACKETS_2026, type FilingStatus } from "@/lib/retirement/taxData2026";
import { analyzeConversion, projectScenarios } from "@/lib/retirement/calculations";

const CURRENT_YEAR = 2026;
const COLORS = {
  bg: "#FAF4EC",
  text: "#3B2A1A",
  green: "#7D9B76",
  gold: "#D4A853",
  orange: "#C4622D",
};

function currency(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function RothConversionCalculator() {
  const [filingStatus, setFilingStatus] = useState<FilingStatus>("single");
  const [age, setAge] = useState(58);
  const [spouseAge, setSpouseAge] = useState(58);
  const [traditionalBalance, setTraditionalBalance] = useState(500_000);
  const [rothBalance, setRothBalance] = useState(50_000);
  const [otherIncome, setOtherIncome] = useState(40_000);
  const [conversionAmount, setConversionAmount] = useState(30_000);
  const [growthRate, setGrowthRate] = useState(0.06);

  const birthYear = CURRENT_YEAR - age;

  const analysis = useMemo(
    () =>
      analyzeConversion({
        filingStatus,
        age,
        spouseAge: filingStatus === "mfj" ? spouseAge : undefined,
        otherIncome,
        conversionAmount,
      }),
    [filingStatus, age, spouseAge, otherIncome, conversionAmount]
  );

  const projection = useMemo(
    () =>
      projectScenarios({
        startAge: age,
        birthYear,
        traditionalBalance,
        rothBalance,
        growthRate,
        oneTimeConversion: conversionAmount,
        yearsToProject: Math.max(0, 90 - age),
      }),
    [age, birthYear, traditionalBalance, rothBalance, growthRate, conversionAmount]
  );

  const brackets = BRACKETS_2026[filingStatus];
  const maxBracketWidth = brackets[brackets.length - 2].upTo * 1.15; // scale visual to just past the 35% bracket

  const milestoneAges = [age, age + 5, age + 10, age + 15, age + 20].filter((a) => a <= age + 90 - age);

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.bg }}>
      <div className="max-w-3xl mx-auto px-4 pt-8">
        <a href="/finance/advisor" className="text-sm font-medium hover:opacity-80" style={{ color: COLORS.green }}>
          ← Back to Advisor
        </a>
      </div>

      <div className="py-12 mt-4" style={{ backgroundColor: COLORS.green }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-4xl mb-4">🔄</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">Roth Conversion &amp; RMD Planner</h1>
          <p className="text-lg text-white" style={{ opacity: 0.9 }}>
            See what a Roth conversion actually costs this year — and how it changes your required
            distributions down the road.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="rounded-2xl p-6 border" style={{ backgroundColor: "white", borderColor: "#e8ddd0" }}>
          <h2 className="text-xl font-bold mb-4" style={{ color: COLORS.text }}>
            Your Situation
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: COLORS.text }}>
                Filing Status
              </label>
              <div className="flex gap-2">
                {(["single", "mfj"] as FilingStatus[]).map((fs) => (
                  <button
                    key={fs}
                    onClick={() => setFilingStatus(fs)}
                    className="flex-1 py-2 rounded-xl font-medium border transition-colors"
                    style={
                      filingStatus === fs
                        ? { backgroundColor: COLORS.green, color: "white", borderColor: COLORS.green }
                        : { backgroundColor: COLORS.bg, color: COLORS.text, borderColor: "#e8ddd0" }
                    }
                  >
                    {fs === "single" ? "Single" : "Married Filing Jointly"}
                  </button>
                ))}
              </div>
            </div>

            <NumberField label="Your Age" value={age} onChange={setAge} min={40} max={95} />
            {filingStatus === "mfj" && (
              <NumberField label="Spouse Age" value={spouseAge} onChange={setSpouseAge} min={40} max={95} />
            )}
            <NumberField
              label="Traditional IRA / 401(k) Balance"
              value={traditionalBalance}
              onChange={setTraditionalBalance}
              min={0}
              step={5000}
              prefix="$"
            />
            <NumberField
              label="Roth IRA Balance"
              value={rothBalance}
              onChange={setRothBalance}
              min={0}
              step={5000}
              prefix="$"
            />
            <NumberField
              label="Other Taxable Income This Year (pension, part-time work, taxable Social Security, interest/dividends)"
              value={otherIncome}
              onChange={setOtherIncome}
              min={0}
              step={1000}
              prefix="$"
            />
            <NumberField
              label="Expected Annual Growth Rate"
              value={growthRate * 100}
              onChange={(v) => setGrowthRate(v / 100)}
              min={0}
              max={12}
              step={0.5}
              suffix="%"
            />

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: COLORS.text }}>
                Roth Conversion Amount This Year: {currency(conversionAmount)}
              </label>
              <input
                type="range"
                min={0}
                max={Math.min(traditionalBalance, 300_000)}
                step={1000}
                value={conversionAmount}
                onChange={(e) => setConversionAmount(Number(e.target.value))}
                className="w-full"
                style={{ accentColor: COLORS.orange }}
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="rounded-2xl p-6 border" style={{ backgroundColor: "white", borderColor: "#e8ddd0" }}>
            <h2 className="text-xl font-bold mb-4" style={{ color: COLORS.text }}>
              Cost of This Conversion
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Stat label="Federal tax owed on the conversion" value={currency(analysis.conversionCost)} color={COLORS.orange} />
              <Stat
                label="Effective rate on converted $"
                value={`${(analysis.effectiveRateOnConversion * 100).toFixed(1)}%`}
                color={COLORS.orange}
              />
              <Stat label="Marginal bracket after conversion" value={`${(analysis.marginalRateAfter * 100).toFixed(0)}%`} color={COLORS.green} />
              <Stat
                label="Room left in this bracket"
                value={analysis.headroomToNextBracket === Infinity ? "Top bracket" : currency(analysis.headroomToNextBracket)}
                color={COLORS.green}
              />
            </div>

            <BracketBar
              brackets={brackets}
              taxableBefore={analysis.taxableBefore}
              taxableAfter={analysis.taxableAfter}
              maxWidth={maxBracketWidth}
            />

            <div
              className="mt-4 rounded-xl p-4 text-sm"
              style={{
                backgroundColor: analysis.irmaaTierAfter > analysis.irmaaTierBefore ? "#fff3ec" : COLORS.bg,
                border: `1px solid ${analysis.irmaaTierAfter > analysis.irmaaTierBefore ? COLORS.orange : "#e8ddd0"}`,
                color: COLORS.text,
              }}
            >
              {analysis.irmaaTierAfter > analysis.irmaaTierBefore ? (
                <>
                  ⚠️ This conversion pushes your MAGI into a higher <strong>IRMAA</strong> tier, which can raise
                  Medicare Part B/D premiums two years from now.
                </>
              ) : (
                <>
                  ✓ MAGI headroom before the next IRMAA surcharge tier:{" "}
                  <strong>
                    {analysis.headroomToNextIrmaaTier === Infinity ? "—" : currency(analysis.headroomToNextIrmaaTier)}
                  </strong>
                  . IRMAA is based on MAGI from two years prior.
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Projection */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="rounded-2xl p-6 border" style={{ backgroundColor: "white", borderColor: "#e8ddd0" }}>
          <h2 className="text-xl font-bold mb-2" style={{ color: COLORS.text }}>
            Traditional Balance &amp; RMDs: With vs. Without This Conversion
          </h2>
          <p className="text-sm mb-6" style={{ color: COLORS.text, opacity: 0.7 }}>
            Assumes {(growthRate * 100).toFixed(1)}% annual growth and required minimum distributions starting at
            age {birthYear >= 1960 ? 75 : 73} (SECURE 2.0). Withdrawals shown are RMD-only — your actual spending
            needs may require more.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ color: COLORS.text, opacity: 0.6 }}>
                  <th className="text-left py-2">Age</th>
                  <th className="text-right py-2">Traditional (no conversion)</th>
                  <th className="text-right py-2">Traditional (with conversion)</th>
                  <th className="text-right py-2">RMD (no conversion)</th>
                  <th className="text-right py-2">RMD (with conversion)</th>
                </tr>
              </thead>
              <tbody>
                {milestoneAges.map((milestoneAge) => {
                  const base = projection.baseline.find((y) => y.age === milestoneAge);
                  const withConv = projection.withConversion.find((y) => y.age === milestoneAge);
                  if (!base || !withConv) return null;
                  return (
                    <tr key={milestoneAge} style={{ borderTop: "1px solid #e8ddd0" }}>
                      <td className="py-2 font-medium" style={{ color: COLORS.text }}>
                        {milestoneAge}
                      </td>
                      <td className="text-right py-2" style={{ color: COLORS.text }}>
                        {currency(base.traditionalBalance)}
                      </td>
                      <td className="text-right py-2" style={{ color: COLORS.green }}>
                        {currency(withConv.traditionalBalance)}
                      </td>
                      <td className="text-right py-2" style={{ color: COLORS.text }}>
                        {base.rmd > 0 ? currency(base.rmd) : "—"}
                      </td>
                      <td className="text-right py-2" style={{ color: COLORS.green }}>
                        {withConv.rmd > 0 ? currency(withConv.rmd) : "—"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-xs text-center mt-6" style={{ color: COLORS.text, opacity: 0.5 }}>
          Educational estimates using 2026 federal tax brackets only — no state taxes, no Social Security taxability
          modeling, no market volatility. This is a planning tool, not personalized tax or investment advice. Talk
          to a tax professional before converting.
        </p>
      </div>
    </div>
  );
}

function NumberField({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  prefix,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2" style={{ color: COLORS.text }}>
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: COLORS.text, opacity: 0.6 }}>
            {prefix}
          </span>
        )}
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2"
          style={{
            borderColor: "#e8ddd0",
            backgroundColor: COLORS.bg,
            color: COLORS.text,
            paddingLeft: prefix ? "1.75rem" : undefined,
            paddingRight: suffix ? "2rem" : undefined,
          }}
        />
        {suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2" style={{ color: COLORS.text, opacity: 0.6 }}>
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div>
      <p className="text-2xl font-bold" style={{ color }}>
        {value}
      </p>
      <p className="text-xs" style={{ color: COLORS.text, opacity: 0.6 }}>
        {label}
      </p>
    </div>
  );
}

function BracketBar({
  brackets,
  taxableBefore,
  taxableAfter,
  maxWidth,
}: {
  brackets: { rate: number; upTo: number }[];
  taxableBefore: number;
  taxableAfter: number;
  maxWidth: number;
}) {
  const shadeForRate: Record<number, string> = {
    0.1: "#e8ddd0",
    0.12: "#d4c4ac",
    0.22: COLORS.gold,
    0.24: "#c99a3f",
    0.32: COLORS.orange,
    0.35: "#a84e23",
    0.37: "#7a3818",
  };

  const segments = brackets.reduce<{ rate: number; width: number }[]>((acc, { rate, upTo }) => {
    const previousCap = acc.length > 0 ? Math.min(brackets[acc.length - 1].upTo, maxWidth) : 0;
    const cap = Math.min(upTo, maxWidth);
    acc.push({ rate, width: ((cap - previousCap) / maxWidth) * 100 });
    return acc;
  }, []);

  return (
    <div>
      <div className="flex w-full h-8 rounded-lg overflow-hidden mb-2">
        {segments.map(({ rate, width }) =>
          width <= 0 ? null : (
            <div
              key={rate}
              style={{ width: `${width}%`, backgroundColor: shadeForRate[rate] ?? "#ccc" }}
              title={`${rate * 100}% bracket`}
            />
          )
        )}
      </div>
      <div className="relative h-6">
        <Marker position={(Math.min(taxableBefore, maxWidth) / maxWidth) * 100} label="Before" color={COLORS.text} />
        <Marker position={(Math.min(taxableAfter, maxWidth) / maxWidth) * 100} label="After" color={COLORS.orange} />
      </div>
      <p className="text-xs mt-3" style={{ color: COLORS.text, opacity: 0.6 }}>
        Taxable income before: {currency(taxableBefore)} → after conversion: {currency(taxableAfter)}
      </p>
    </div>
  );
}

function Marker({ position, label, color }: { position: number; label: string; color: string }) {
  return (
    <div
      className="absolute top-0 flex flex-col items-center"
      style={{ left: `${Math.min(98, Math.max(0, position))}%`, transform: "translateX(-50%)" }}
    >
      <div className="w-0.5 h-3" style={{ backgroundColor: color }} />
      <span className="text-[10px] font-medium" style={{ color }}>
        {label}
      </span>
    </div>
  );
}
