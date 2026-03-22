export default function ReadinessChecklist() {
  const categories = [
    {
      title: "1. Know Your Number",
      color: "#C4622D",
      items: [
        { label: "I know my monthly expenses in retirement (not a guess — actual line items)", done: false },
        { label: "I have calculated my annual retirement income need (expenses × 12)", done: false },
        { label: "I know my target portfolio size using the 4% rule (annual need ÷ 0.04)", done: false },
        { label: "I have accounted for inflation — expenses in today's dollars are not the same in 10 years", done: false },
        { label: "I have a separate healthcare cost estimate before Medicare at 65", done: false },
      ],
    },
    {
      title: "2. Know What You Have",
      color: "#7D9B76",
      items: [
        { label: "I have a complete picture of all accounts: 401k, IRA, Roth, brokerage, savings", done: false },
        { label: "I know my current total investable assets (not including home equity)", done: false },
        { label: "I know how much I am contributing annually and what my projected balance will be at retirement", done: false },
        { label: "I know my Social Security estimated benefit at 62, 67, and 70", done: false },
        { label: "I know if I have any pension income and what conditions apply", done: false },
      ],
    },
    {
      title: "3. Know the Gap",
      color: "#D4A853",
      items: [
        { label: "I have calculated the gap between what I need and what I will have", done: false },
        { label: "I know how many more years I need to work to close that gap", done: false },
        { label: "I have explored whether part-time or consulting income could bridge the gap earlier", done: false },
        { label: "I have modeled what happens if I retire 2 years earlier or later", done: false },
      ],
    },
    {
      title: "4. Protect Against the Risks",
      color: "#C4622D",
      items: [
        { label: "I have a plan for a 30% market correction in the 3 years before retirement", done: false },
        { label: "I have at least 1-2 years of living expenses in cash or equivalents", done: false },
        { label: "I have researched long-term care insurance or have a self-insurance plan", done: false },
        { label: "I have a will, healthcare proxy, and beneficiaries updated in the last 3 years", done: false },
        { label: "My Social Security strategy accounts for longevity — the average woman lives to 87", done: false },
      ],
    },
    {
      title: "5. Tax and Withdrawal Strategy",
      color: "#7D9B76",
      items: [
        { label: "I know the tax treatment of each of my accounts (pre-tax vs. Roth vs. taxable)", done: false },
        { label: "I have a plan for which accounts to draw from first in retirement", done: false },
        { label: "I have considered Roth conversions before 72 when RMDs kick in", done: false },
        { label: "I understand how Social Security benefits are taxed based on income level", done: false },
      ],
    },
  ];

  const redFlags = [
    "You have not opened your 401k statement in over 6 months",
    "You have no idea what your Social Security benefit will be",
    "Your only retirement plan is 'work until 65 and figure it out'",
    "You have significant credit card debt with no paydown plan",
    "You have never stress-tested your plan against a bad market year",
    "Your asset allocation has not changed since your 30s",
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
          <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6" style={{ backgroundColor: "#FAF4EC", color: "#D4A853", border: "1px solid #D4A853" }}>Planning</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "#3B2A1A" }}>The Retirement Readiness Checklist: Where Do You Actually Stand?</h1>
          <p className="text-lg" style={{ color: "#3B2A1A", opacity: 0.7 }}>By Siri · March 2026 · 8 min read</p>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-xl mb-8 font-medium" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Most women 50+ have a vague sense of whether they are on track for retirement. They are not sure. Neither are their financial advisors, if they have one. Here is the honest framework to get clear — and what to do about the gaps.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>Why Most People Do Not Know Where They Stand</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Retirement planning tools are designed to give you a score or a percentage. "You are 74% on track." That number means almost nothing without context. On track for what lifestyle? At what withdrawal rate? With what healthcare assumption?</p>
        <p className="mb-8" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Real readiness is not a score. It is the intersection of five things: knowing your number, knowing what you have, understanding the gap, protecting against the risks, and having a tax and withdrawal strategy. Most people have done none of these five things seriously.</p>

        <h2 className="text-2xl font-bold mt-10 mb-6" style={{ color: "#C4622D" }}>The 5-Category Readiness Check</h2>
        <p className="mb-8" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Go through each category honestly. Do not check boxes you cannot defend. The goal is an accurate picture, not a passing grade.</p>

        {categories.map((cat, i) => (
          <div key={i} className="rounded-xl p-6 mb-6 border-l-4" style={{ backgroundColor: "white", borderLeftColor: cat.color }}>
            <h3 className="font-bold text-lg mb-4" style={{ color: cat.color }}>{cat.title}</h3>
            <div className="space-y-3">
              {cat.items.map((item, j) => (
                <div key={j} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5" style={{ borderColor: cat.color }}></div>
                  <p style={{ color: "#3B2A1A", lineHeight: "1.6", fontSize: "0.95rem" }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>The Red Flags</h2>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>If any of these apply to you, address them before anything else. These are not minor gaps — they are structural problems that compound over time.</p>
        <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: "#fff8f0", border: "1px solid #D4A853" }}>
          {redFlags.map((flag, i) => (
            <div key={i} className="flex items-start gap-3 mb-3">
              <span style={{ color: "#C4622D" }}>⚠️</span>
              <p style={{ color: "#3B2A1A", lineHeight: "1.7" }}>{flag}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>What to Do With Your Score</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>If you checked 80% or more of the boxes, you have done serious work. Now the job is stress-testing — running the scenarios that could break your plan.</p>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>If you checked 50-80%, you have the foundation but gaps that need attention. Prioritize the ones in categories 1 and 2 — knowing your number and knowing what you have. Without those two things, everything else is speculation.</p>
        <p className="mb-8" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>If you checked less than 50%, do not panic. But do not ignore it either. You have time to change the outcome — but that window narrows every year you wait. Pick the single most important gap and spend one hour on it this week.</p>

        <div className="rounded-xl p-8 mb-8" style={{ backgroundColor: "#FAF4EC", border: "2px solid #C4622D" }}>
          <h3 className="font-bold text-xl mb-3" style={{ color: "#C4622D" }}>The Uncomfortable Truth</h3>
          <p className="mb-3" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Most people delay this assessment because they are afraid of what they will find. That fear is understandable. It is also exactly backwards.</p>
          <p style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Finding a gap at 52 gives you 8-13 years to close it. Finding the same gap at 63 gives you a crisis. The assessment is not the bad news — the delay is.</p>
        </div>

        {/* CTA */}
        <div className="rounded-xl p-8 text-center" style={{ backgroundColor: "#7D9B76" }}>
          <h3 className="text-xl font-bold text-white mb-3">One Thing to Do This Week</h3>
          <p className="text-white mb-4" style={{ opacity: 0.9 }}>Log in to SSA.gov and look up your Social Security benefit estimate at 62, 67, and 70. Write the three numbers down. This single piece of information changes how you model everything else.</p>
          <a href="https://ssa.gov/myaccount" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 rounded-full font-bold hover:opacity-90" style={{ backgroundColor: "#FAF4EC", color: "#7D9B76" }}>Check Your Social Security Estimate</button>
          </a>
        </div>

        <div className="mt-12 pt-8 border-t" style={{ borderColor: "#e8ddd0" }}>
          <p className="text-sm mt-2" style={{ color: "#3B2A1A", opacity: 0.5 }}>Disclaimer: This is educational content, not financial advice. Work with a fee-only fiduciary advisor for decisions specific to your situation.</p>
        </div>
      </div>
    </div>
  );
}
