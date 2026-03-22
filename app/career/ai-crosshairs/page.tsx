export default function AiCrosshairsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF4EC" }}>

      <div className="max-w-3xl mx-auto px-4 pt-8">
        <a href="/career" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70" style={{ color: "#C4622D" }}>← Back to Career</a>
      </div>

      <div className="py-16" style={{ backgroundColor: "#FAF4EC", borderBottom: "4px solid #C4622D" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6" style={{ backgroundColor: "#FAF4EC", color: "#C4622D", border: "1px solid #C4622D" }}>AI Risk</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "#3B2A1A" }}>Why Women 50+ Are in AI Crosshairs (And How to Get Out)</h1>
          <p className="text-lg" style={{ color: "#3B2A1A", opacity: 0.7 }}>By Siri · 2026 · 7 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-xl mb-8 font-medium" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The people most at risk from AI displacement are not the ones you expect. They are not entry-level workers. They are not young. They are experienced, well-paid, and in their 50s. Here is the honest threat profile — and what to do about it.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>The Specific Threat Profile</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>To understand who AI replaces first, follow the money. Companies do not automate to prove a point — they automate to reduce costs. The highest-value automation targets are roles where:</p>
        {[
          "The work is primarily cognitive rather than physical",
          "The outputs are documents, decisions, analysis, or communications",
          "The salary is high enough that automation pays for itself quickly",
          "The work is consistent enough to be systematized",
        ].map((point, i) => (
          <div key={i} className="flex gap-3 mb-3">
            <span style={{ color: "#C4622D" }}>→</span>
            <p style={{ color: "#3B2A1A", lineHeight: "1.7" }}>{point}</p>
          </div>
        ))}
        <p className="mt-6 mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>This describes a huge proportion of women 50+ careers: senior managers, analysts, strategists, HR leaders, marketing directors, legal professionals, consultants, and communications roles. The work that took decades to master is now being systematized by AI that can do a version of it instantly.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>Which Roles Are Most at Risk</h2>
        <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: "white", border: "1px solid #e8ddd0" }}>
          <p className="font-bold mb-4" style={{ color: "#C4622D" }}>High risk:</p>
          {[
            "Marketing and communications roles where AI can write, strategize, and optimize",
            "Financial analysis and reporting roles where AI can synthesize data",
            "HR and talent roles where AI handles screening, documentation, process",
            "Legal and compliance roles where AI handles research and drafting",
            "Project management and operations roles where AI manages workflows",
          ].map((role, i) => (
            <p key={i} className="mb-2" style={{ color: "#3B2A1A", lineHeight: "1.7" }}>• {role}</p>
          ))}
          <p className="font-bold mt-6 mb-4" style={{ color: "#7D9B76" }}>Lower risk (for now):</p>
          {[
            "Roles requiring physical presence and human judgment in real-time",
            "Roles where relationships and trust are the primary product",
            "Roles where you direct and validate AI rather than compete with it",
          ].map((role, i) => (
            <p key={i} className="mb-2" style={{ color: "#3B2A1A", lineHeight: "1.7" }}>• {role}</p>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>The Salary Paradox</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Here is the counterintuitive truth that makes this particularly dangerous for high earners: the higher your salary, the higher the ROI for a company to replace you with AI.</p>
        <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: "#FAF4EC", border: "1px solid #D4A853" }}>
          <p className="font-semibold mb-3" style={{ color: "#D4A853" }}>The math:</p>
          <p className="mb-2" style={{ color: "#3B2A1A" }}>Replace a $45,000/year coordinator with AI → saves $45K</p>
          <p className="mb-2" style={{ color: "#3B2A1A" }}>Replace a $160,000/year director with AI → saves $160K</p>
          <p className="mt-4 font-semibold" style={{ color: "#C4622D" }}>AI tools cost roughly $100-500/month. The ROI math at senior levels is overwhelming.</p>
        </div>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Your high salary is not protection. In the current climate, it is exposure. This is not about being bad at your job. It is about being expensive at a moment when AI can do a version of your job for almost nothing.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>What the Data Shows About Age and AI Displacement</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The data on AI and employment is still emerging, but the patterns are visible: layoffs in knowledge-work sectors are disproportionately hitting mid-career and senior employees. The official reason is "restructuring" — but the context is always AI capability expansion.</p>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Age discrimination is real and well-documented. Adding AI-displacement risk on top of existing age bias creates a compounding effect. Workers 50+ who lose jobs in AI-affected industries face longer re-employment timelines and lower replacement salaries than younger workers in the same situation. The risk is not theoretical — it is actuarial.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>The Action Plan: How to Get Out of the Crosshairs</h2>
        {[
          {
            step: "Step 1: Become the person who uses AI, not the one AI replaces",
            body: "The safest position is not AI-resistant — it is AI-enabled. If you can use AI to do your job twice as fast, or take on the work of two people, you become more valuable, not less. Start using AI tools for your actual work this week. Not generic tasks. Your specific deliverables.",
          },
          {
            step: "Step 2: Shift your value proposition from execution to direction",
            body: "AI executes well. It directs poorly. The senior professional who knows which questions to ask, what good output looks like, and how to apply judgment to AI-generated work is not replaceable — they are essential. Consciously move your work toward judgment, strategy, and quality control rather than production.",
          },
          {
            step: "Step 3: Build visibility outside your company",
            body: "Your employer knows your value. The market does not — unless you tell it. Start building an external professional presence now: writing, speaking, consulting, advising. This is your insurance policy. If your role disappears, you need the market to already know who you are.",
          },
          {
            step: "Step 4: Diversify your income before you need to",
            body: "A second income stream — consulting, fractional work, content, a side business — changes your risk profile completely. You are not desperate if you have options. Build the second stream now, while the first is still intact.",
          },
          {
            step: "Step 5: Build your financial runway",
            body: "If disruption comes, you want time. Time to think, to pivot, to build something new. That time is bought by savings. How many months can you sustain your current lifestyle without income? The goal is 18-24 months. Start building toward it now.",
          },
        ].map((item, i) => (
          <div key={i} className="rounded-xl p-6 mb-4" style={{ backgroundColor: "white", border: "1px solid #e8ddd0" }}>
            <p className="font-bold mb-2" style={{ color: "#C4622D" }}>{item.step}</p>
            <p style={{ color: "#3B2A1A", lineHeight: "1.8" }}>{item.body}</p>
          </div>
        ))}

        <div className="rounded-xl p-8 mb-8 mt-10" style={{ backgroundColor: "#FAF4EC", border: "2px solid #C4622D" }}>
          <p style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The women who will be fine are not the ones who avoid AI. They are the ones who get ahead of it — who use it, direct it, and build financial resilience before they need it. The window to act from a position of strength is now. Do not wait until the crosshairs tighten.</p>
        </div>

        <div className="rounded-xl p-8 text-center" style={{ backgroundColor: "#C4622D" }}>
          <h3 className="text-xl font-bold mb-3 text-white">One Thing to Do This Week</h3>
          <p className="text-white opacity-90">Pick one task you do regularly at work and do it with AI assistance. Time yourself before and after. The result will tell you everything about where your energy should go next.</p>
        </div>
      </div>
    </div>
  );
}
