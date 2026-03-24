export default function SemiRetirePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF4EC" }}>

      <div className="max-w-3xl mx-auto px-4 pt-8">
        <a href="/finance" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70" style={{ color: "#D4A853" }}>← Back to Finance</a>
      </div>
      <div className="py-16" style={{ backgroundColor: "#FAF4EC", borderBottom: "4px solid #D4A853" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6" style={{ backgroundColor: "#FAF4EC", color: "#D4A853", border: "1px solid #D4A853" }}>Retirement</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "#3B2A1A" }}>Semi-Retire at 55: The Math You Need to Know</h1>
          <p className="text-lg" style={{ color: "#3B2A1A", opacity: 0.7 }}>By Siri · March 2026 · 7 min read</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-xl mb-8 font-medium" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>I am 50. My goal is to semi-retire at 55. Not fully stop working — but have enough financial independence to choose when, how, and for whom I work. Here is the math I use to make that concrete.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>What Does Semi-Retirement Actually Mean?</h2>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Semi-retirement is not retirement. It means your investments and passive income cover your essential expenses, so work becomes optional. You might still work 20 hours a week — but on your terms. The goal is freedom, not idleness.</p>

        <h2 className="text-2xl font-bold mt-10 mb-6" style={{ color: "#C4622D" }}>The 4% Rule — Your Starting Point</h2>
        <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: "white", border: "1px solid #e8ddd0" }}>
          <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The 4% rule says you can withdraw 4% of your portfolio annually without running out of money over 30 years. To find your number: multiply your annual expenses by 25. Note: many planners now recommend 3.5-3.7% for retirements longer than 30 years — especially if you are semi-retiring at 55 and your money needs to last 40 years. More conservative = multiply expenses by 27-29 instead.</p>
          <div className="rounded-lg p-4" style={{ backgroundColor: "#FAF4EC" }}>
            <p className="font-semibold mb-2" style={{ color: "#C4622D" }}>Example:</p>
            <p style={{ color: "#3B2A1A" }}>Annual expenses: $80,000</p>
            <p style={{ color: "#3B2A1A" }}>Portfolio needed: $80,000 × 25 = <strong>$2,000,000</strong></p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>The Semi-Retirement Adjustment</h2>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Since you are semi-retiring, not fully retiring, you only need to cover the gap between your passive income and your expenses. If you plan to earn $30,000 from part-time work, you only need investments to cover $50,000 — which requires $1.25M instead of $2M. A significant difference.</p>

        <h2 className="text-2xl font-bold mt-10 mb-6" style={{ color: "#C4622D" }}>The 5-Year Sprint Framework</h2>
        {[
          { year: "Year 1 (Age 50)", action: "Maximize contributions — 401k, IRA, HSA. In 2026, the 401k catch-up limit for 50+ is $32,500 total ($24,500 + $8,000 catch-up). Know your exact number. Cut lifestyle inflation aggressively." },
          { year: "Year 2 (Age 51)", action: "Add taxable brokerage investing. Build 2-3 income streams beyond salary. Start tracking net worth monthly." },
          { year: "Year 3 (Age 52)", action: "Stress-test your plan. What happens if markets drop 30%? Optimize for tax efficiency." },
          { year: "Year 4 (Age 53)", action: "Transition planning. Begin reducing dependency on full-time income. Test semi-retirement lifestyle." },
          { year: "Year 5 (Age 54-55)", action: "Final push. Confirm healthcare coverage plan. Execute the transition." },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 mb-4">
            <div className="rounded-lg px-3 py-1 text-sm font-semibold flex-shrink-0 h-fit mt-1" style={{ backgroundColor: "#D4A853", color: "white" }}>{item.year}</div>
            <p style={{ color: "#3B2A1A", lineHeight: "1.7" }}>{item.action}</p>
          </div>
        ))}

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>The Variable Nobody Talks About: Healthcare</h2>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>If you semi-retire before 65 (Medicare eligibility), you need to fund your own healthcare. This is often the biggest surprise. The enhanced ACA subsidies that kept premiums artificially low expired at the end of 2025 — and 2026 marketplace rates jumped roughly 18-20%. For a 60-year-old on an unsubsidized Silver plan, budget $800-$1,400/month depending on your state and insurer. If your retirement income is low enough to qualify for subsidies (below ~$62,000/year), your costs will be lower — but you need to model this explicitly. Add this to your expense calculation before anything else.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>My Take</h2>
        <div className="rounded-xl p-8 mb-8" style={{ backgroundColor: "#FAF4EC", border: "2px solid #C4622D" }}>
          <p style={{ color: "#3B2A1A", lineHeight: "1.8" }}>I did not start seriously tracking this until 50. I wish I had started at 45. But 5 years of focused effort — maximizing contributions, building income streams, eliminating lifestyle inflation — can move the number significantly. The math is not magic. It is just math. And once you know your number, everything gets clearer.</p>
        </div>

        <div className="rounded-xl p-8 text-center" style={{ backgroundColor: "#D4A853" }}>
          <h3 className="text-xl font-bold mb-3" style={{ color: "#3B2A1A" }}>One Thing to Do This Week</h3>
          <p className="opacity-90" style={{ color: "#3B2A1A" }}>Calculate your number. Annual expenses × 25. Then subtract what part-time income could cover. That gap is your target portfolio. Write it down.</p>
        </div>

        <div className="mt-12 pt-8 border-t" style={{ borderColor: "#e8ddd0" }}>
          <p className="text-sm" style={{ color: "#3B2A1A", opacity: 0.5 }}>Disclaimer: I am not a financial advisor. This is personal research and experience, not financial advice. Consult a qualified financial planner.</p>
        </div>
      </div>
    </div>
  );
}