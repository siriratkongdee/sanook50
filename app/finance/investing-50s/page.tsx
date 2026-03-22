export default function Investing50sPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF4EC" }}>

      <div className="max-w-3xl mx-auto px-4 pt-8">
        <a href="/finance" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70" style={{ color: "#D4A853" }}>← Back to Finance</a>
      </div>
      <div className="py-16" style={{ backgroundColor: "#FAF4EC", borderBottom: "4px solid #D4A853" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6" style={{ backgroundColor: "#FAF4EC", color: "#D4A853", border: "1px solid #D4A853" }}>Investing</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "#3B2A1A" }}>Investing in Your 50s: Different Rules Apply</h1>
          <p className="text-lg" style={{ color: "#3B2A1A", opacity: 0.7 }}>By Siri · March 2026 · 7 min read</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-xl mb-8 font-medium" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Everything you learned about investing in your 30s and 40s still applies — but the context has shifted. You have less time to recover from big losses. You also have more capital, more clarity on your goals, and (hopefully) fewer financial surprises. Here is how I think about investing with a 5-year semi-retirement target.</p>

        <h2 className="text-2xl font-bold mt-10 mb-6" style={{ color: "#C4622D" }}>The Core Shift: From Accumulation to Preservation + Growth</h2>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>In your 30s, you could ride out a 50% market crash — you had decades to recover. In your 50s, a 50% crash right before you semi-retire is a serious problem. The goal is not to stop growing your money. It is to grow it while managing the sequence-of-returns risk that can derail early retirement.</p>

        <h2 className="text-2xl font-bold mt-10 mb-6" style={{ color: "#C4622D" }}>The Framework I Use</h2>

        {[
          { bucket: "Core (60-70%)", color: "#7D9B76", desc: "Boring index funds. S&P 500, total market, international. This is your foundation. Set it, forget it, rebalance annually. The goal here is not to beat the market — it is to not underperform it." },
          { bucket: "Growth Satellites (20-30%)", color: "#D4A853", desc: "Concentrated bets with real conviction. Defense ETFs (ITA), specific sectors, individual stocks you have researched. Enough to move the needle, not enough to sink you if one goes wrong." },
          { bucket: "Income Layer (10%)", color: "#C4622D", desc: "Dividend stocks, covered calls, cash-secured puts. Generate income from your portfolio now. Even $200-400/month from options premiums compounds meaningfully over 5 years." },
        ].map((b, i) => (
          <div key={i} className="rounded-xl p-6 mb-4 border-l-4" style={{ backgroundColor: "white", borderLeftColor: b.color }}>
            <div className="font-bold text-lg mb-2" style={{ color: b.color }}>{b.bucket}</div>
            <p style={{ color: "#3B2A1A", lineHeight: "1.7" }}>{b.desc}</p>
          </div>
        ))}

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>The Mistakes I See Most Often</h2>
        <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: "#fff8f0", border: "1px solid #D4A853" }}>
          {[
            "Going too conservative too early — staying in cash or bonds loses to inflation over 5 years",
            "Chasing performance — buying what went up last year, missing what will go up next",
            "Ignoring tax efficiency — wrong assets in wrong account types costs real money",
            "Not having a healthcare plan — this is the retirement expense nobody budgets for correctly",
            "Waiting for the perfect entry point — time in market beats timing the market",
          ].map((m, i) => (
            <div key={i} className="flex gap-3 mb-3"><span style={{ color: "#D4A853" }}>⚡</span><p style={{ color: "#3B2A1A" }}>{m}</p></div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>What I Actually Own</h2>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>I hold QQQM (Nasdaq 100 — tech and growth), ITA (aerospace and defense — bought during a market dip when geopolitical tensions increased defense spending), and use cash-secured puts to build positions in stocks I want to own at better prices. I am not a financial advisor and this is not advice — it is just what I do and why.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>My Take</h2>
        <div className="rounded-xl p-8 mb-8" style={{ backgroundColor: "#FAF4EC", border: "2px solid #C4622D" }}>
          <p style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The best investing decision in your 50s is not a stock pick. It is having a written plan — your target number, your asset allocation, your rebalancing rules — and following it when markets get scary. Most people make their worst investing decisions when they are emotional. A plan made in calm prevents decisions made in panic.</p>
        </div>

        <div className="rounded-xl p-8 text-center" style={{ backgroundColor: "#D4A853" }}>
          <h3 className="text-xl font-bold mb-3" style={{ color: "#3B2A1A" }}>One Thing to Do This Week</h3>
          <p style={{ color: "#3B2A1A" }}>Write down your asset allocation. What percentage is in stocks vs bonds vs cash? Does it match your actual risk tolerance and timeline? If you have not done this recently, now is the time.</p>
        </div>

        <div className="mt-12 pt-8 border-t" style={{ borderColor: "#e8ddd0" }}>
          <p className="text-sm" style={{ color: "#3B2A1A", opacity: 0.5 }}>Disclaimer: I am not a financial advisor. This is personal experience and research, not financial advice. Please consult a qualified financial planner.</p>
        </div>
      </div>
    </div>
  );
}