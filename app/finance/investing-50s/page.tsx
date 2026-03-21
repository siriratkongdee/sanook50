export default function Investing50sPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF4EC" }}>
      <div className="py-16" style={{ backgroundColor: "#FAF4EC", borderBottom: "4px solid #D4A853" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6" style={{ backgroundColor: "#FAF4EC", color: "#D4A853", border: "1px solid #D4A853" }}>Investing</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "#3B2A1A" }}>Investing in Your 50s: Different Rules Apply</h1>
          <p className="text-lg" style={{ color: "#3B2A1A", opacity: 0.7 }}>By Siri · March 2026 · 7 min read</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-xl mb-8 font-medium" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The conventional wisdom says: get more conservative as you age. Shift to bonds. Reduce risk. But if you are 50 with a 5-year runway to semi-retirement and potentially 35+ more years of life, that advice may actually hurt you. Here is how I think about investing at this stage.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>The Problem With Conventional Wisdom</h2>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The old rule — subtract your age from 100 to get your stock allocation — was designed when people retired at 65 and lived to 75. A 10-year retirement. Today, a 50-year-old woman can expect to live into her late 80s. That is a 35-40 year horizon. Going too conservative too early means your money does not grow fast enough to last.</p>

        <h2 className="text-2xl font-bold mt-10 mb-6" style={{ color: "#C4622D" }}>The Core-Satellite Framework</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>I organize my investments into two buckets:</p>

        <div className="rounded-xl p-6 mb-4" style={{ backgroundColor: "white", border: "1px solid #e8ddd0" }}>
          <div className="font-bold text-xl mb-2" style={{ color: "#7D9B76" }}>Core (60-70%)</div>
          <p className="mb-3" style={{ color: "#3B2A1A", lineHeight: "1.7" }}>Low-cost, diversified index funds. S&P 500, total market, international. Set it and forget it. This is your foundation — boring and effective.</p>
          <div className="text-sm px-3 py-2 rounded-lg" style={{ backgroundColor: "#f0f7f0", color: "#3B2A1A" }}>Examples: VTI, QQQM, VOO, VT</div>
        </div>

        <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: "white", border: "1px solid #e8ddd0" }}>
          <div className="font-bold text-xl mb-2" style={{ color: "#D4A853" }}>Satellites (30-40%)</div>
          <p className="mb-3" style={{ color: "#3B2A1A", lineHeight: "1.7" }}>Targeted bets on sectors or companies you have conviction in. Higher risk, higher potential reward. Each position sized so a 50% loss does not derail your plan.</p>
          <div className="text-sm px-3 py-2 rounded-lg" style={{ backgroundColor: "#fff8f0", color: "#3B2A1A" }}>Examples: Sector ETFs (ITA for defense), individual stocks with strong thesis (SOFI), thematic plays (AI infrastructure)</div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6" style={{ color: "#C4622D" }}>What Changes at 50</h2>
        {[
          { title: "Sequence of returns matters more", body: "A market crash at 55 hurts more than one at 40. You have less time to recover. Keep 1-2 years of expenses in cash or short-term bonds as a buffer — so you never sell equities when they are down." },
          { title: "Tax efficiency becomes critical", body: "At 50, every dollar you keep is a dollar that compounds. Use tax-advantaged accounts first (401k, Roth IRA, HSA). Hold bonds in tax-advantaged, growth stocks in taxable accounts." },
          { title: "Catch-up contributions kick in", body: "At 50, the IRS allows extra 401k and IRA contributions. Max them. This is free tax-advantaged space — use every dollar of it for the next 5 years." },
          { title: "Healthcare is a real line item", body: "Model your healthcare costs explicitly in your plan. Pre-Medicare years (55-65) can cost $6,000-15,000/year depending on your coverage. This changes the math significantly." },
        ].map((item, i) => (
          <div key={i} className="rounded-xl p-6 mb-4 border-l-4" style={{ backgroundColor: "white", borderLeftColor: "#D4A853" }}>
            <div className="font-bold text-lg mb-2" style={{ color: "#D4A853" }}>{item.title}</div>
            <p style={{ color: "#3B2A1A", lineHeight: "1.7" }}>{item.body}</p>
          </div>
        ))}

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>My Take</h2>
        <div className="rounded-xl p-8 mb-8" style={{ backgroundColor: "#FAF4EC", border: "2px solid #C4622D" }}>
          <p style={{ color: "#3B2A1A", lineHeight: "1.8" }}>I am staying primarily in equities until at least 55. Not because I am reckless — but because my time horizon is 35 years, not 10. I use the core-satellite approach: boring index funds as my foundation, a few targeted bets where I have real conviction. The wheel strategy generates income on my satellite holdings. And I keep enough cash to sleep at night without selling when markets drop.</p>
        </div>

        <div className="rounded-xl p-8 text-center" style={{ backgroundColor: "#D4A853" }}>
          <h3 className="text-xl font-bold mb-3" style={{ color: "#3B2A1A" }}>One Thing to Do This Week</h3>
          <p style={{ color: "#3B2A1A" }}>Look at your current allocation. What percentage is in index funds vs. individual stocks vs. bonds? If you do not know, find out. Clarity is the first step to a plan that actually works.</p>
        </div>

        <div className="mt-12 pt-8 border-t" style={{ borderColor: "#e8ddd0" }}>
          <p className="text-sm" style={{ color: "#3B2A1A", opacity: 0.5 }}>Disclaimer: I am not a financial advisor. This is personal research and experience, not financial advice.</p>
        </div>
      </div>
    </div>
  );
}