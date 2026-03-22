export default function WhatIf() {
  const scenarios = [
    {
      title: "What If Markets Drop 30% the Year You Retire?",
      emoji: "📉",
      color: "#C4622D",
      why: "This is the sequence of returns risk scenario — the most dangerous financial event that can happen to a new retiree. A 30% drop in year 1, combined with withdrawals, can permanently impair your portfolio even if markets fully recover.",
      theNumbers: "If you have $1M and withdraw $40,000 (4%) in year 1 while the portfolio drops 30%, you start year 2 with $660,000 — not $960,000. Your portfolio now needs to grow back to $1M starting from a much lower base while you keep withdrawing. This is how retirement portfolios fail even in strong markets over the long run.",
      whatToDoNow: [
        "Build a 1-2 year cash cushion before retiring so you do not need to sell equities in a down market",
        "Begin shifting allocation 3-5 years before retirement — not the day you retire",
        "Have a plan for what you will cut first if markets drop 20%+ in year 1",
        "Know your 'floor' income: Social Security + any fixed income that covers your non-negotiable expenses",
      ],
    },
    {
      title: "What If You Lose Your Job at 57?",
      emoji: "💼",
      color: "#7D9B76",
      why: "Age discrimination is real and statistically documented. Women over 55 who lose jobs take significantly longer to find comparable work. This scenario forces you to ask: could you survive financially if your income stopped today?",
      theNumbers: "The average job search for displaced workers over 55 is 7-9 months. If you find a job, it pays on average 20-30% less than your previous role. If you do not, you may need to start drawing from retirement accounts earlier than planned — potentially triggering a 10% penalty if you are under 59.5 and taking taxable withdrawals.",
      whatToDoNow: [
        "Have 6-12 months of living expenses in liquid savings — not invested",
        "Know your 72(t) SEPP rules: you can access retirement accounts before 59.5 without penalty if you follow specific distribution rules",
        "Keep your professional network warm — it is your best hedge against long job searches",
        "Know what your expenses would look like at 80% of your current income for 2 years",
      ],
    },
    {
      title: "What If You Live to 95?",
      emoji: "🎂",
      color: "#D4A853",
      why: "The average woman who reaches 65 today has a 50% chance of living past 87 and a meaningful chance of reaching 90+. Most retirement calculators default to age 85. Planning to age 85 when you live to 95 means running out of money at the worst possible time.",
      theNumbers: "Using a 4% withdrawal rate, a $1M portfolio lasts approximately 30 years — to age 95 if you retire at 65. But if you retire at 60, you need that $1M to last 35 years, which pushes your safe withdrawal rate closer to 3.5%. Every year earlier you retire, add 5-7 years to your required portfolio lifespan.",
      whatToDoNow: [
        "Plan to at least age 90, ideally 95. Use 30-35 year retirement horizons, not 20-25",
        "Delay Social Security as long as possible — it is the best longevity insurance you have",
        "Consider a deferred income annuity that starts at 80-85 as a longevity hedge",
        "Build flexibility into your withdrawal rate — plan to reduce spending by 10-15% if the portfolio underperforms",
      ],
    },
    {
      title: "What If Healthcare Costs Spike?",
      emoji: "🏥",
      color: "#C4622D",
      why: "Healthcare inflation consistently outpaces general inflation. If you retire before 65, you face 3-5 years of private market healthcare costs. Even after Medicare, out-of-pocket costs for a couple average over $300,000 over a retirement lifetime.",
      theNumbers: "A 60-year-old woman on an ACA marketplace plan in a mid-cost state might pay $700-$900/month in premiums plus $3,000-$6,000 in deductibles and out-of-pocket costs annually. A serious illness or hospitalization in the gap years could cost $20,000-$50,000 even with insurance. Add dental, vision, and hearing (not covered by traditional Medicare) and costs compound further.",
      whatToDoNow: [
        "Build a healthcare line item into your retirement budget, not a vague estimate",
        "Research your ACA options now — your income in retirement affects premiums dramatically",
        "Look into an HSA if you have access to one — these are triple tax-advantaged and ideal for healthcare in retirement",
        "Have a separate healthcare emergency fund of $25,000-$50,000 outside your core retirement accounts",
      ],
    },
    {
      title: "What If Inflation Stays High for 5 Years?",
      emoji: "📈",
      color: "#7D9B76",
      why: "Retirees are uniquely vulnerable to inflation. Your income is (largely) fixed while your costs keep rising. A sustained period of 5-6% inflation over 5 years reduces your purchasing power by 25-30% — meaning the same lifestyle costs significantly more than your withdrawal plan assumed.",
      theNumbers: "If inflation runs at 5% for 5 years, your $5,000/month retirement budget effectively becomes a $6,381/month budget in real terms. If you do not adjust withdrawals, you are slowly underfunding your lifestyle. If you do adjust withdrawals, you are drawing your portfolio down faster than planned.",
      whatToDoNow: [
        "Include a 3% annual inflation adjustment in your retirement income projections — not 0%",
        "Maintain exposure to equities in retirement — stocks are one of the best long-term inflation hedges",
        "Consider I-bonds or TIPS for a portion of your fixed income allocation",
        "Build discretionary spending into your budget that you can cut without impacting quality of life",
      ],
    },
    {
      title: "What If You Need to Support an Adult Child or Aging Parent?",
      emoji: "👨‍👩‍👧",
      color: "#D4A853",
      why: "The sandwich generation is real and disproportionately affects women. Financial support of adult children (education, job loss, housing) or aging parents (caregiving costs, supplemental income) is one of the least-modeled but most common retirement disruptions.",
      theNumbers: "Women spend an average of 44% more time on caregiving than men and are more likely to reduce work hours or leave the workforce entirely. The direct financial cost of supporting an aging parent can run $10,000-$30,000+ per year. Supporting an adult child through a crisis might mean $5,000-$15,000/year for 1-3 years.",
      whatToDoNow: [
        "Have explicit conversations with your parents about their financial situation and plans for care",
        "Know your own 'helping budget' — the maximum you can provide without permanently damaging your retirement",
        "Do not sacrifice retirement savings to support adult children. You cannot borrow for retirement the way they can borrow for other needs",
        "Look into long-term care insurance for your parents if they do not have it — this protects both them and you",
      ],
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF4EC" }}>
      {/* Back nav */}
      <div className="max-w-3xl mx-auto px-4 pt-8">
        <a href="/finance" className="text-sm font-medium hover:opacity-80" style={{ color: "#C4622D" }}>← Back to Finance</a>
      </div>

      {/* Hero */}
      <div className="py-16 mt-6" style={{ backgroundColor: "#FAF4EC", borderBottom: "4px solid #D4A853" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6" style={{ backgroundColor: "#FAF4EC", color: "#D4A853", border: "1px solid #D4A853" }}>Scenarios</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "#3B2A1A" }}>What If? Scenarios Every Woman 50+ Should Run Before Retiring</h1>
          <p className="text-lg" style={{ color: "#3B2A1A", opacity: 0.7 }}>By Siri · March 2026 · 12 min read</p>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-xl mb-6 font-medium" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The point of running what-if scenarios is not to catastrophize. It is to make decisions now — while you still have time to respond — rather than discovering a problem when it has already arrived.</p>
        <p className="mb-12" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Each scenario below includes the actual numbers and the specific things you can do today to reduce your exposure. Run through all six. The ones that make you most uncomfortable are the ones that most need your attention.</p>

        {scenarios.map((s, i) => (
          <div key={i} className="mb-14">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-4xl flex-shrink-0">{s.emoji}</div>
              <h2 className="text-2xl font-bold" style={{ color: s.color }}>{s.title}</h2>
            </div>

            <div className="rounded-xl p-5 mb-4" style={{ backgroundColor: "white", border: "1px solid #e8ddd0" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "#3B2A1A" }}>Why This Matters</p>
              <p className="text-sm" style={{ color: "#3B2A1A", lineHeight: "1.7" }}>{s.why}</p>
            </div>

            <div className="rounded-xl p-5 mb-4" style={{ backgroundColor: "#fff8f0", border: `1px solid ${s.color}40` }}>
              <p className="text-sm font-bold mb-2" style={{ color: s.color }}>The Numbers</p>
              <p className="text-sm" style={{ color: "#3B2A1A", lineHeight: "1.7" }}>{s.theNumbers}</p>
            </div>

            <div className="rounded-xl p-5" style={{ backgroundColor: "#f0f7f0", border: "1px solid #7D9B76" }}>
              <p className="text-sm font-bold mb-3" style={{ color: "#7D9B76" }}>What to Do Now</p>
              <div className="space-y-2">
                {s.whatToDoNow.map((action, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <span className="text-sm" style={{ color: "#7D9B76" }}>→</span>
                    <p className="text-sm" style={{ color: "#3B2A1A", lineHeight: "1.6" }}>{action}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="rounded-xl p-8 mb-8" style={{ backgroundColor: "#FAF4EC", border: "2px solid #C4622D" }}>
          <h3 className="font-bold text-xl mb-3" style={{ color: "#C4622D" }}>The Meta-Lesson from All Six Scenarios</h3>
          <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Every scenario has the same underlying structure: flexibility is the defense. Portfolios that survive the bad scenarios are ones built with margin — cash buffers, adjustable expenses, multiple income sources, and a realistic withdrawal rate.</p>
          <p style={{ color: "#3B2A1A", lineHeight: "1.8" }}>You cannot predict which scenario will happen to you. You can build a retirement plan that survives most of them.</p>
        </div>

        {/* CTA */}
        <div className="rounded-xl p-8 text-center" style={{ backgroundColor: "#7D9B76" }}>
          <h3 className="text-xl font-bold text-white mb-3">One Thing to Do This Week</h3>
          <p className="text-white mb-4" style={{ opacity: 0.9 }}>Pick the one scenario that scares you most. Open a spreadsheet and model it out — with real numbers from your actual situation. Write down the three actions you would take if it happened. You will feel measurably less afraid of it once you have a plan.</p>
          <a href="/finance/readiness-checklist">
            <button className="px-8 py-3 rounded-full font-bold hover:opacity-90" style={{ backgroundColor: "#FAF4EC", color: "#7D9B76" }}>Start With the Readiness Checklist</button>
          </a>
        </div>

        <div className="mt-12 pt-8 border-t" style={{ borderColor: "#e8ddd0" }}>
          <p className="text-sm mt-2" style={{ color: "#3B2A1A", opacity: 0.5 }}>Disclaimer: This is educational content, not financial advice. Scenarios are illustrative. Work with a fee-only fiduciary advisor for decisions specific to your circumstances.</p>
        </div>
      </div>
    </div>
  );
}
