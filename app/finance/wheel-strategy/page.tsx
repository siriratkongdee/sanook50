export default function WheelStrategyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF4EC" }}>

      <div className="max-w-3xl mx-auto px-4 pt-8">
        <a href="/finance" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70" style={{ color: "#D4A853" }}>← Back to Finance</a>
      </div>
      <div className="py-16" style={{ backgroundColor: "#FAF4EC", borderBottom: "4px solid #D4A853" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6" style={{ backgroundColor: "#FAF4EC", color: "#D4A853", border: "1px solid #D4A853" }}>Options</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "#3B2A1A" }}>The Wheel Strategy: Getting Paid While You Wait to Buy Stocks</h1>
          <p className="text-lg" style={{ color: "#3B2A1A", opacity: 0.7 }}>By Siri · March 2026 · 6 min read</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-xl mb-8 font-medium" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Most people think options are complicated and risky. And they can be. But one options strategy — the wheel — is essentially just getting paid to wait for a stock you already want to own. Here is how it works.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>The Core Idea</h2>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>If you want to buy a stock, why not get paid while you wait for your price? That is exactly what selling cash-secured puts does. You sell someone the right to sell you 100 shares at a specific price. They pay you a premium. If the stock drops to that price, you buy it — cheaper than today. If it does not, you keep the premium and do it again.</p>

        <h2 className="text-2xl font-bold mt-10 mb-6" style={{ color: "#C4622D" }}>The Wheel — Step by Step</h2>

        <div className="rounded-xl p-6 mb-4" style={{ backgroundColor: "white", border: "1px solid #e8ddd0" }}>
          <div className="font-bold text-lg mb-2" style={{ color: "#D4A853" }}>Step 1: Sell a Cash-Secured Put</div>
          <p className="mb-3" style={{ color: "#3B2A1A", lineHeight: "1.7" }}>Pick a stock you want to own. Choose a strike price you would be happy buying at. Sell a put option at that strike. Collect the premium immediately.</p>
          <div className="rounded-lg p-4 text-sm" style={{ backgroundColor: "#FAF4EC" }}>
            <p style={{ color: "#3B2A1A" }}>Example: SOFI at $17.85. You sell a $16 put for $0.69. You collect $69.</p>
            <p className="mt-1" style={{ color: "#3B2A1A" }}>You set aside $1,600 as collateral (100 shares × $16).</p>
          </div>
        </div>

        <div className="rounded-xl p-6 mb-4" style={{ backgroundColor: "white", border: "1px solid #e8ddd0" }}>
          <div className="font-bold text-lg mb-2" style={{ color: "#D4A853" }}>Outcome A: Stock stays above $16 (expires worthless)</div>
          <p style={{ color: "#3B2A1A", lineHeight: "1.7" }}>You keep the $69 premium. Free money. Sell another put next month. Repeat.</p>
        </div>

        <div className="rounded-xl p-6 mb-4" style={{ backgroundColor: "white", border: "1px solid #e8ddd0" }}>
          <div className="font-bold text-lg mb-2" style={{ color: "#D4A853" }}>Outcome B: Stock drops below $16 (you get assigned)</div>
          <p style={{ color: "#3B2A1A", lineHeight: "1.7" }}>You buy 100 shares at $16. But your effective cost is $15.31 (after the $69 premium). You own a stock you wanted, cheaper than today. Now move to Step 2.</p>
        </div>

        <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: "white", border: "1px solid #e8ddd0" }}>
          <div className="font-bold text-lg mb-2" style={{ color: "#D4A853" }}>Step 2: Sell Covered Calls</div>
          <p style={{ color: "#3B2A1A", lineHeight: "1.7" }}>Now you own the shares. Sell call options against them — collect more premium while you hold. If the stock rises above your call strike, your shares get called away at a profit. Then go back to Step 1.</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>Why This Works for Women 50+</h2>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The wheel generates consistent income on stocks you believe in long-term. It reduces your cost basis on every share you own. And it turns waiting — something most investors do impatiently — into a productive, income-generating activity. For a 5-year retirement horizon, even $100-200/month in premium income compounds meaningfully.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>Important Risks</h2>
        <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: "#fff8f0", border: "1px solid #D4A853" }}>
          {["Only wheel stocks you genuinely want to own — you may end up holding them","If the stock drops 50%, your premium does not save you much","Requires options approval at your brokerage (Level 2)","Best on stocks with higher implied volatility — more premium to collect"].map((r, i) => (
            <div key={i} className="flex gap-3 mb-2"><span style={{ color: "#D4A853" }}>⚡</span><p style={{ color: "#3B2A1A" }}>{r}</p></div>
          ))}
        </div>

        <div className="rounded-xl p-8 text-center" style={{ backgroundColor: "#D4A853" }}>
          <h3 className="text-xl font-bold mb-3" style={{ color: "#3B2A1A" }}>One Thing to Do This Week</h3>
          <p style={{ color: "#3B2A1A" }}>Pick one stock you have been watching. Check if options are available. Look at the put chain 30-45 days out. See what premium you could collect at a strike 8-10% below current price. Just look — no commitment required.</p>
        </div>

        <div className="mt-12 pt-8 border-t" style={{ borderColor: "#e8ddd0" }}>
          <p className="text-sm" style={{ color: "#3B2A1A", opacity: 0.5 }}>Disclaimer: Options trading involves risk. This is not financial advice. Consult a qualified financial advisor before trading options.</p>
        </div>
      </div>
    </div>
  );
}