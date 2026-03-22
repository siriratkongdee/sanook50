export default function KeyDecisions() {
  const decisions = [
    {
      number: "01",
      title: "Social Security Timing",
      color: "#C4622D",
      stakes: "Up to $200,000+ in lifetime income difference",
      summary: "You can claim as early as 62 or as late as 70. The difference is roughly 8% per year. Wait from 62 to 70 and your monthly benefit increases by about 76%. Most people take it early because they need the money or they fear they will die before they break even.",
      theMath: "Break-even is typically around age 80-82. If you live past that — and the average woman today lives to 87 — delaying pays off significantly. If you have other income to bridge the gap, delaying Social Security is often the single highest-ROI decision you can make.",
      wrongMove: "Taking Social Security at 62 out of anxiety, without actually running the math. Many people leave $150,000-$200,000 in lifetime income on the table.",
      rightMove: "Run your break-even calculation at SSA.gov. If you are in reasonable health and have bridge income, seriously consider delaying to 67 or 70.",
    },
    {
      number: "02",
      title: "Healthcare Bridge (62 to 65)",
      color: "#7D9B76",
      stakes: "Healthcare is the single largest retirement wildcard before Medicare",
      summary: "Medicare begins at 65. If you retire before then, you need to bridge your healthcare costs. Options include COBRA (expensive, time-limited), ACA marketplace plans (income-dependent subsidies), a spouse's plan, or part-time work with benefits.",
      theMath: "A healthy 60-year-old woman can expect to pay $500-$1,200/month in ACA premiums depending on income and location. That is $6,000-$14,400/year before deductibles and out-of-pocket costs. Over 3 years of early retirement, you are looking at $18,000-$43,000.",
      wrongMove: "Retiring early without a specific, costed healthcare plan. This gap surprises people more than any other.",
      rightMove: "Go to healthcare.gov and model your ACA options based on your projected retirement income. Managing your income below key ACA thresholds can dramatically reduce your premiums.",
    },
    {
      number: "03",
      title: "Asset Allocation Shift",
      color: "#D4A853",
      stakes: "Your allocation in the 5 years before and after retirement matters more than any other 10-year window",
      summary: "Sequence of returns risk is real. A 30% market drop in year 1 of retirement is far more damaging than the same drop in year 10 — because you are withdrawing money while the portfolio is down. The recovery math is brutal.",
      theMath: "A portfolio that drops 30% in year 1 of a 4% withdrawal rate may fail within 20 years, even if the market fully recovers. The same portfolio that drops 30% in year 15 has a much higher chance of surviving. This is why the 5 years on either side of retirement require a different approach.",
      wrongMove: "Staying 80% equities until the day you retire, then scrambling to shift allocations after a bad year.",
      rightMove: "Begin a gradual allocation shift 3-5 years before your target retirement date. Build a 1-2 year cash cushion so you are not forced to sell equities in a down market.",
    },
    {
      number: "04",
      title: "Tax Strategy and Account Order",
      color: "#C4622D",
      stakes: "Getting this wrong can cost $50,000-$100,000 in unnecessary taxes over retirement",
      summary: "You have three types of accounts with different tax treatments: pre-tax (traditional 401k/IRA — taxed on withdrawal), Roth (after-tax — grows and withdraws tax-free), and taxable brokerage (capital gains tax applies). The order you draw from them determines your tax bill.",
      theMath: "Many retirees draw down taxable and Roth accounts first, leaving pre-tax accounts to grow — which triggers massive RMDs at 72 that push them into higher brackets. A better strategy often involves Roth conversions between retirement and age 72, when income may be lower.",
      wrongMove: "Drawing randomly from whatever account has money in it, with no tax strategy. Or leaving pre-tax accounts untouched until RMDs force large taxable withdrawals.",
      rightMove: "Map out your projected income by year from 55-75. Identify the years when Roth conversions make sense. This is one area where a fee-only CPA or fiduciary advisor earns their cost.",
    },
    {
      number: "05",
      title: "The Part-Time Bridge Decision",
      color: "#7D9B76",
      stakes: "Working part-time for 2-3 extra years can add 5-10 years of portfolio runway",
      summary: "Full retirement is not the only option. Working 20 hours a week for 2-3 years after your primary career — consulting, fractional work, a passion project — can fundamentally change your retirement math by letting your portfolio grow longer and drawing less from it early.",
      theMath: "If your portfolio needs to last 30 years at $60,000/year, that requires roughly $1.5M. If instead you work part-time for 3 years covering $30,000/year of expenses, you only need $45,000/year from the portfolio for those years, buying 3 more years of compounding. This can add 5-7 years of portfolio longevity.",
      wrongMove: "Seeing retirement as binary — fully on or fully off. Or staying in a high-stress job longer than necessary when a part-time transition would serve both your finances and your health.",
      rightMove: "Model the part-time scenario explicitly. What would 3 years of part-time look like at your current skills and salary? What would you need to earn to meaningfully move the needle?",
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
          <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6" style={{ backgroundColor: "#FAF4EC", color: "#D4A853", border: "1px solid #D4A853" }}>Decisions</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "#3B2A1A" }}>The 5 Financial Decisions That Make or Break Early Retirement</h1>
          <p className="text-lg" style={{ color: "#3B2A1A", opacity: 0.7 }}>By Siri · March 2026 · 10 min read</p>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-xl mb-8 font-medium" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>There are hundreds of financial decisions to make in retirement planning. But five of them move the needle more than all the others combined. Most people pull these levers without thinking — and pay for it for decades.</p>

        <p className="mb-12" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Here are the five decisions, the math behind them, and what the wrong move looks like so you can avoid it.</p>

        {decisions.map((d, i) => (
          <div key={i} className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-4xl font-bold flex-shrink-0" style={{ color: d.color, opacity: 0.3 }}>{d.number}</div>
              <h2 className="text-2xl font-bold" style={{ color: d.color }}>{d.title}</h2>
            </div>
            <div className="rounded-xl px-4 py-2 inline-block mb-4" style={{ backgroundColor: `${d.color}15`, border: `1px solid ${d.color}40` }}>
              <p className="text-sm font-semibold" style={{ color: d.color }}>Stakes: {d.stakes}</p>
            </div>
            <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>{d.summary}</p>
            <div className="rounded-xl p-5 mb-4" style={{ backgroundColor: "#f0f7f0", border: "1px solid #7D9B76" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "#7D9B76" }}>The Math</p>
              <p className="text-sm" style={{ color: "#3B2A1A", lineHeight: "1.7" }}>{d.theMath}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl p-5" style={{ backgroundColor: "#fff0f0", border: "1px solid #C4622D40" }}>
                <p className="text-sm font-bold mb-2" style={{ color: "#C4622D" }}>Wrong Move</p>
                <p className="text-sm" style={{ color: "#3B2A1A", lineHeight: "1.7" }}>{d.wrongMove}</p>
              </div>
              <div className="rounded-xl p-5" style={{ backgroundColor: "#f0f7f0", border: "1px solid #7D9B7640" }}>
                <p className="text-sm font-bold mb-2" style={{ color: "#7D9B76" }}>Right Move</p>
                <p className="text-sm" style={{ color: "#3B2A1A", lineHeight: "1.7" }}>{d.rightMove}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="rounded-xl p-8 mb-8" style={{ backgroundColor: "#FAF4EC", border: "2px solid #C4622D" }}>
          <h3 className="font-bold text-xl mb-3" style={{ color: "#C4622D" }}>These Are Not Set-and-Forget Decisions</h3>
          <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Each of these five decisions intersects with the others. Your Social Security timing affects your tax strategy. Your healthcare bridge affects your part-time bridge math. Your asset allocation affects your sequence of returns risk.</p>
          <p style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The goal is not to optimize each decision in isolation — it is to understand how they interact so you can make them intentionally, not by default.</p>
        </div>

        {/* CTA */}
        <div className="rounded-xl p-8 text-center" style={{ backgroundColor: "#7D9B76" }}>
          <h3 className="text-xl font-bold text-white mb-3">One Thing to Do This Week</h3>
          <p className="text-white mb-4" style={{ opacity: 0.9 }}>Pick the one decision on this list where you have the least clarity. Spend 30 minutes this week doing just that research. Not all five — just one. Decision paralysis kills more retirement plans than bad markets do.</p>
          <a href="/finance/readiness-checklist">
            <button className="px-8 py-3 rounded-full font-bold hover:opacity-90" style={{ backgroundColor: "#FAF4EC", color: "#7D9B76" }}>Take the Readiness Checklist</button>
          </a>
        </div>

        <div className="mt-12 pt-8 border-t" style={{ borderColor: "#e8ddd0" }}>
          <p className="text-sm mt-2" style={{ color: "#3B2A1A", opacity: 0.5 }}>Disclaimer: This is educational content, not financial advice. Every situation is different. Work with a fee-only fiduciary for decisions specific to your circumstances.</p>
        </div>
      </div>
    </div>
  );
}
