"use client";
export default function AdvisorWaitlist() {
  const painPoints = [
    { emoji: "😤", title: "Generic advice built for men", text: "Most retirement calculators assume a 35-year career, a spouse with pension income, and a 65-year retirement date. None of that fits your actual life." },
    { emoji: "💸", title: "Good advisors cost $5,000+/year", text: "Fee-only fiduciaries are the gold standard. They are also expensive, hard to find, and rarely specialize in women navigating career breaks, divorce, or early retirement." },
    { emoji: "🤷", title: "Calculators with no context", text: "They spit out a number. They do not tell you what to do if you are $200K short, whether to take Social Security at 62 or 70, or how to bridge healthcare until Medicare." },
  ];

  const features = [
    { emoji: "📸", title: "Retirement Snapshot", text: "Input your assets, income, expenses, and timeline. Get a clear picture of exactly where you stand — not a vague score." },
    { emoji: "🔮", title: "Scenario Simulator", text: "Run what-if scenarios in plain English. What if I retire at 58? What if markets drop 30%? What if I work part-time for 3 years?" },
    { emoji: "💬", title: "AI Advisor", text: "Ask any question, get a plain-English answer. No jargon. No upsell. Understands your specific situation, not a generic profile." },
    { emoji: "📋", title: "Weekly Action Plan", text: "Every week, one concrete action. Rebalance this account. Run this calculation. Have this conversation with your partner. Progress, not overwhelm." },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF4EC" }}>
      {/* Back nav */}
      <div className="max-w-3xl mx-auto px-4 pt-8">
        <a href="/finance" className="text-sm font-medium hover:opacity-80" style={{ color: "#7D9B76" }}>← Back to Finance</a>
      </div>

      {/* Hero */}
      <div className="py-20 mt-6" style={{ backgroundColor: "#7D9B76" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-5xl mb-6">🤖</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Finally. A Financial Advisor Built for Women 50+</h1>
          <p className="text-xl text-white mb-4" style={{ opacity: 0.9 }}>Personalized retirement scenarios. Plain-English answers. No sales pitch. No one-size-fits-all nonsense.</p>
          <p className="text-lg text-white" style={{ opacity: 0.8 }}>Your situation is specific. Your advisor should be too.</p>
        </div>
      </div>

      {/* Problem section */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#3B2A1A" }}>Why Retirement Planning Fails Women</h2>
        <p className="text-center mb-10" style={{ color: "#3B2A1A", opacity: 0.7 }}>The tools were not built for you. The advice is not relevant. And you are running out of time to figure it out alone.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {painPoints.map((p, i) => (
            <div key={i} className="rounded-2xl p-6 border" style={{ backgroundColor: "white", borderColor: "#e8ddd0" }}>
              <div className="text-3xl mb-3">{p.emoji}</div>
              <h3 className="font-bold mb-2" style={{ color: "#3B2A1A" }}>{p.title}</h3>
              <p className="text-sm" style={{ color: "#3B2A1A", opacity: 0.7, lineHeight: "1.7" }}>{p.text}</p>
            </div>
          ))}
        </div>

        {/* Solution */}
        <div className="rounded-2xl p-8 mb-16 border-2" style={{ backgroundColor: "#fff8f0", borderColor: "#C4622D" }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#C4622D" }}>What This Tool Does Differently</h2>
          <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>This is not another retirement calculator. It is an AI advisor trained specifically on the financial decisions women in their 50s actually face — career transitions, healthcare gaps, Social Security timing, asset drawdown order, and the math of semi-retirement.</p>
          <div className="space-y-3">
            {["Snapshots your real situation — not a hypothetical", "Runs what-if scenarios in plain English", "Gives specific, actionable answers (not disclaimers)", "Adapts to your timeline, not a generic 65-year target", "No product to sell, no commissions, no upsell"].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span style={{ color: "#C4622D" }}>✓</span>
                <p style={{ color: "#3B2A1A", lineHeight: "1.7" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#3B2A1A" }}>What You Get</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl p-6 border" style={{ backgroundColor: "white", borderColor: "#e8ddd0" }}>
              <div className="text-3xl mb-3">{f.emoji}</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#3B2A1A" }}>{f.title}</h3>
              <p className="text-sm" style={{ color: "#3B2A1A", opacity: 0.75, lineHeight: "1.7" }}>{f.text}</p>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="text-center mb-8">
          <p className="text-lg font-semibold" style={{ color: "#7D9B76" }}>Join 500+ women building their second chapter</p>
          <p className="text-sm mt-1" style={{ color: "#3B2A1A", opacity: 0.6 }}>Early access is limited. No spam. Unsubscribe anytime.</p>
        </div>

        {/* Waitlist form */}
        <div className="rounded-2xl p-8 border-2" style={{ backgroundColor: "white", borderColor: "#7D9B76" }}>
          <h3 className="text-2xl font-bold mb-2 text-center" style={{ color: "#3B2A1A" }}>Get Early Access</h3>
          <p className="text-center mb-8" style={{ color: "#3B2A1A", opacity: 0.7 }}>Be the first to know when we launch. Free during beta.</p>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: "#3B2A1A" }}>First Name</label>
              <input
                type="text"
                placeholder="Your first name"
                className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2"
                style={{ borderColor: "#e8ddd0", backgroundColor: "#FAF4EC", color: "#3B2A1A" }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: "#3B2A1A" }}>Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2"
                style={{ borderColor: "#e8ddd0", backgroundColor: "#FAF4EC", color: "#3B2A1A" }}
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl font-bold text-white text-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#7D9B76" }}
            >
              Join the Waitlist →
            </button>
          </form>
          <p className="text-xs text-center mt-4" style={{ color: "#3B2A1A", opacity: 0.5 }}>No spam. No sales pitch. Just updates when we launch.</p>
        </div>
      </div>
    </div>
  );
}
