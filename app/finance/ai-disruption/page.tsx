export default function AiDisruptionPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF4EC" }}>

      <div className="max-w-3xl mx-auto px-4 pt-8">
        <a href="/finance" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70" style={{ color: "#D4A853" }}>← Back to Finance</a>
      </div>

      <div className="py-16" style={{ backgroundColor: "#FAF4EC", borderBottom: "4px solid #D4A853" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6" style={{ backgroundColor: "#FAF4EC", color: "#D4A853", border: "1px solid #D4A853" }}>AI + Career</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "#3B2A1A" }}>Why Women 50+ Are Most Exposed to AI Disruption — and What to Do About It</h1>
          <p className="text-lg" style={{ color: "#3B2A1A", opacity: 0.7 }}>By Siri · 2026 · 8 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-xl mb-8 font-medium" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The conversation about AI and jobs tends to focus on entry-level roles, call centers, and factory floors. That framing is wrong — and it is dangerous if you are a woman in your 50s with a high-paying, specialized career. Here is the honest picture, and the financial framework to protect yourself.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>The Threat Is Real and It Is Not What You Think</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>AI does not replace the cheapest workers first. It replaces the most expensive ones — because that is where the ROI is highest. A company replacing a $40,000 customer service rep with AI saves $40,000. Replacing a $150,000 analyst, strategist, or senior manager saves $150,000. The math makes high-salary mid-career professionals the priority target, not the protected class.</p>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The roles most affected are knowledge work roles that involve synthesizing information, producing reports and analysis, drafting communications, managing processes, and making repeatable decisions. These are exactly the roles that women 50+ have built 20-30 year careers in. The experience and institutional knowledge that made you valuable are increasingly replicable by AI — unless you are the one directing that AI.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>Why Women 50+ Are Specifically Vulnerable</h2>
        {[
          { label: "Higher salaries = higher AI ROI to replace you", body: "After 25-30 years of experience, you are likely at or near peak earning. From a pure cost-reduction standpoint, you are the most expensive person doing work that AI is increasingly capable of. This creates real pressure on your role — not because you are not valuable, but because you are expensive." },
          { label: "Historical AI fluency gap", body: "The tools that define AI productivity — prompt engineering, agent workflows, automation stacks — emerged in the last 2-3 years. Many women 50+ did not grow up with them and have not yet integrated them into daily work. This is a solvable problem, but it creates a visible gap that can affect how you are perceived." },
          { label: "Harder to pivot quickly", body: "At 50+, a job loss is not the same as one at 30. Hiring bias is real. The market for re-entry is harder. And the financial stakes are higher — you have fewer years to rebuild savings. This means the cost of disruption is asymmetric compared to younger colleagues." },
          { label: "Concentration risk in traditional industries", body: "Women 50+ are disproportionately represented in healthcare administration, financial services, legal, corporate HR, and marketing — all fields where AI automation is moving fast. If your industry is consolidating and AI-automating simultaneously, the risk compounds." },
        ].map((item, i) => (
          <div key={i} className="rounded-xl p-6 mb-4" style={{ backgroundColor: "white", border: "1px solid #e8ddd0" }}>
            <p className="font-bold mb-2" style={{ color: "#C4622D" }}>{item.label}</p>
            <p style={{ color: "#3B2A1A", lineHeight: "1.8" }}>{item.body}</p>
          </div>
        ))}

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>The Financial Resilience Framework</h2>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Financial resilience in an AI disruption scenario is built in three layers. All three matter. Most people only think about the third.</p>
        {[
          { num: "Layer 1", title: "Income Diversification", desc: "Your primary job is income stream one. What is income stream two? Consulting, fractional work, content, a side business, options income on your portfolio — having even $2,000-3,000/month from a second source changes your risk profile dramatically. If income stream one disappears, you have a bridge." },
          { num: "Layer 2", title: "Reduced Fixed Costs", desc: "The highest-risk financial position is high income with high fixed costs — a big mortgage, expensive lifestyle, no flexibility. If your fixed monthly costs are $8,000/month, job loss is a crisis. If they are $4,000/month, it is a problem you can solve. Reducing fixed costs is not about austerity. It is about buying yourself options." },
          { num: "Layer 3", title: "Investable Savings Runway", desc: "How many months can you sustain your current lifestyle without income? The answer to this question is the most important number in your financial picture right now. Twelve months is survivable. Six months is risky. Three months is a crisis. The goal: build this to 18-24 months while your income is still intact." },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 mb-4">
            <div className="rounded-lg px-3 py-1 text-sm font-semibold flex-shrink-0 h-fit mt-1" style={{ backgroundColor: "#D4A853", color: "white" }}>{item.num}</div>
            <div>
              <p className="font-bold mb-1" style={{ color: "#3B2A1A" }}>{item.title}</p>
              <p style={{ color: "#3B2A1A", lineHeight: "1.7" }}>{item.desc}</p>
            </div>
          </div>
        ))}

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>What to Do in the Next 12 Months</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The window to act is now — while you have income, time, and optionality. Here is the priority order:</p>
        {[
          { action: "Build AI fluency in your domain", detail: "Not generic AI awareness. Learn to use AI tools for the specific work you do. Can you use AI to do your job twice as fast? If yes, you become dramatically more valuable. If not, you are more replaceable. Start with ChatGPT or Claude for your actual daily tasks this week." },
          { action: "Reduce financial dependencies", detail: "Audit your fixed costs. What can you eliminate or reduce without affecting your quality of life? This is not about suffering — it is about buying yourself negotiating power. Every $500/month you free up is six months of extended runway." },
          { action: "Build a second income stream", detail: "Start now, not when you need it. A consulting project, freelance arrangement, or side income that generates $1,000-3,000/month takes 6-18 months to build from scratch. The best time to start was a year ago. The second best time is today." },
          { action: "Extend your savings runway to 18+ months", detail: "Calculate your number. Monthly expenses × 18. Is that amount sitting in liquid, accessible savings? If not, make building it the financial priority above everything except retirement contributions." },
          { action: "Document and externalize your expertise", detail: "Start creating content, building a professional presence, or consulting on the side — even minimally. This has two effects: it builds an income bridge, and it signals market value independent of your employer." },
        ].map((item, i) => (
          <div key={i} className="rounded-xl p-6 mb-4" style={{ backgroundColor: "white", border: "1px solid #e8ddd0" }}>
            <p className="font-bold mb-2" style={{ color: "#D4A853" }}>{`${i + 1}. ${item.action}`}</p>
            <p style={{ color: "#3B2A1A", lineHeight: "1.8" }}>{item.detail}</p>
          </div>
        ))}

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>The Upside Nobody Talks About</h2>
        <div className="rounded-xl p-8 mb-8" style={{ backgroundColor: "white", border: "1px solid #e8ddd0" }}>
          <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Here is what the doom-and-gloom AI narrative consistently misses: the combination of deep domain expertise and AI fluency is genuinely rare and genuinely valuable. A 55-year-old marketing executive who knows the industry inside out AND can direct AI to execute at 10x speed is not replaceable by AI. She is supercharged by it.</p>
          <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Most people — including younger workers — are not building this combination. They are either experienced but AI-resistant, or AI-fluent but inexperienced. Women 50+ who close the AI fluency gap sit in a category of one.</p>
          <p style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The threat is real. So is the opportunity. The difference between which one applies to you is whether you act now or wait.</p>
        </div>

        <div className="rounded-xl p-8 text-center" style={{ backgroundColor: "#D4A853" }}>
          <h3 className="text-xl font-bold mb-3" style={{ color: "#3B2A1A" }}>One Thing to Do This Week</h3>
          <p className="opacity-90 mb-4" style={{ color: "#3B2A1A" }}>Run the 12-month scenario: if you lost your job today, how long could you sustain your current lifestyle? Monthly expenses × 12 = your minimum runway target. If you are under 6 months, that is the only number that matters right now.</p>
          <a href="/career/ai-crosshairs">
            <button className="px-8 py-3 rounded-full font-bold hover:opacity-90" style={{ backgroundColor: "#3B2A1A", color: "#D4A853" }}>Read: How to Get Out of the Crosshairs →</button>
          </a>
        </div>

        <div className="mt-12 pt-8 border-t" style={{ borderColor: "#e8ddd0" }}>
          <p className="text-sm" style={{ color: "#3B2A1A", opacity: 0.5 }}>Disclaimer: I am not a financial advisor. This is personal research and experience, not financial advice. Consult a qualified financial planner.</p>
        </div>
      </div>
    </div>
  );
}
