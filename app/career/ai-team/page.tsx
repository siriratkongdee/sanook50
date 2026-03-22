export default function AiTeamPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF4EC" }}>

      <div className="max-w-3xl mx-auto px-4 pt-8">
        <a href="/career" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70" style={{ color: "#C4622D" }}>← Back to Career</a>
      </div>

      <div className="py-16" style={{ backgroundColor: "#FAF4EC", borderBottom: "4px solid #C4622D" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6" style={{ backgroundColor: "#FAF4EC", color: "#C4622D", border: "1px solid #C4622D" }}>Productivity</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "#3B2A1A" }}>I Built My Own AI Team. Here Is What Changed.</h1>
          <p className="text-lg" style={{ color: "#3B2A1A", opacity: 0.7 }}>By Siri · 2026 · 8 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-xl mb-8 font-medium" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Six months ago I was doing everything myself. Research, writing, content planning, scheduling, analysis — all of it, manually, one task at a time. Then I built an AI team. This is what that looks like, what changed, and how you can start building yours.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>Why I Built It</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>I was hitting a ceiling. There was more I wanted to do — more content, more research, more strategic thinking — and not enough hours. Hiring people felt premature and expensive. Staying stuck felt unacceptable.</p>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The solution was not to work harder. It was to build leverage. Specifically, AI agents that could handle the repeatable, time-consuming parts of my work so I could focus on the parts only I could do: judgment, direction, and quality.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>Meet Sanook and Dee</h2>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>I built two agents with different roles and personalities. They are not just AI tools — they are configured AI assistants with specific contexts, instructions, and areas of responsibility.</p>

        <div className="rounded-xl p-6 mb-4" style={{ backgroundColor: "white", border: "1px solid #e8ddd0" }}>
          <p className="text-xl font-bold mb-3" style={{ color: "#C4622D" }}>Sanook — Research and Content Intelligence</p>
          <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Sanook handles the research and content side. When I need to understand a topic deeply — AI displacement trends, options strategies, healthcare costs in retirement — Sanook researches, synthesizes, and produces structured briefings. Sanook also handles the content pipeline: article outlines, draft sections, content calendar planning.</p>
          <p className="font-medium" style={{ color: "#D4A853" }}>Key tasks: research synthesis, article drafting, content planning, fact-checking briefs</p>
        </div>

        <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: "white", border: "1px solid #e8ddd0" }}>
          <p className="text-xl font-bold mb-3" style={{ color: "#C4622D" }}>Dee — Operations and Daily Intelligence</p>
          <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Dee runs the daily brief and operational intelligence. Every morning I get a structured summary: what is happening in the topics I track, what needs my attention, what decisions are pending. Dee also handles communications drafts, scheduling logic, and the kind of operational thinking that used to eat 2 hours of my morning.</p>
          <p className="font-medium" style={{ color: "#D4A853" }}>Key tasks: daily brief, communications drafts, decision support, operational workflows</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>The Daily Brief</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The daily brief is the thing that changed my morning most. Instead of spending an hour scanning, I get a structured briefing: what matters today, what decisions I need to make, what content is ready to review, and what I should be thinking about. Five minutes of reading instead of 60 minutes of scattered attention.</p>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>It sounds simple. The compound effect is not. Getting your day structured before you start working — rather than discovering structure mid-day — changes how much you accomplish. This alone was worth the entire setup effort.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>The Content Pipeline</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Before: I would think about what to write, research it, outline it, draft it, revise it — all sequentially, all myself. Each piece took days.</p>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>After: Sanook handles the research and first-draft structuring. I handle the voice, judgment calls, and final edit. What took three days now takes an afternoon. The quality is higher because I am focused on the parts I am actually good at, not exhausted from the mechanical parts.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>What It Took to Set Up</h2>
        {[
          { label: "Learning to prompt well", desc: "The biggest skill was not technical — it was learning to give clear, specific, contextual instructions. Vague prompts produce vague outputs. Learning to be precise about what I wanted, in what format, with what constraints, took a few weeks of iteration." },
          { label: "Building the context", desc: "Each agent needed to understand my goals, my audience, my voice, and my constraints. This took time to articulate — but the work of articulating it was valuable in itself. I understood my own work better after building the context documents." },
          { label: "Iterating on workflows", desc: "The workflows I use now are not the ones I started with. I iterated. What looked good in theory did not always work in practice. The willingness to adjust based on what actually helped — rather than what seemed clever — was the key." },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 mb-4">
            <div className="rounded-lg px-3 py-1 text-sm font-semibold flex-shrink-0 h-fit mt-1" style={{ backgroundColor: "#C4622D", color: "white" }}>{`0${i + 1}`}</div>
            <div>
              <p className="font-bold mb-1" style={{ color: "#3B2A1A" }}>{item.label}</p>
              <p style={{ color: "#3B2A1A", lineHeight: "1.7" }}>{item.desc}</p>
            </div>
          </div>
        ))}

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>What This Means for Career Resilience</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The career implication goes beyond productivity. When you can do more — produce more, research faster, respond more quickly — you become more valuable and more independent simultaneously. You are not dependent on a team of people to execute. You are the team.</p>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>This is the AI-resilient career position: not someone who competes with AI, but someone who directs it. Someone whose experience tells AI what to do and whose judgment validates what AI produces. At 50+, your experience is the rare ingredient that makes the combination work. AI alone produces competent generic output. You plus AI produces expert-level work at scale.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>How to Start</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>You do not need to build a full agent system to start. Here is the minimum viable version:</p>
        {[
          "Pick one task you do weekly that is time-consuming and repetitive",
          "Write a detailed prompt for it — be specific about the output format, tone, and constraints",
          "Run it with Claude or ChatGPT and iterate until the output is useful",
          "Save that prompt. Use it every week. Refine it over time.",
          "After a month, identify the next task and repeat",
        ].map((step, i) => (
          <div key={i} className="flex gap-3 mb-3">
            <span className="font-bold flex-shrink-0" style={{ color: "#C4622D" }}>{i + 1}.</span>
            <p style={{ color: "#3B2A1A", lineHeight: "1.7" }}>{step}</p>
          </div>
        ))}
        <p className="mt-6 mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>That is the beginning of an AI workflow. Start small, prove the value, expand from there. The people who will look back at 2026 and say "that changed everything" are the ones who started with one task today.</p>

        <div className="rounded-xl p-8 mb-8" style={{ backgroundColor: "#FAF4EC", border: "2px solid #C4622D" }}>
          <p style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The most important thing I learned: AI does not replace your experience and judgment. It amplifies it. The rarer your expertise, the more leverage AI gives you. Women 50+ are sitting on decades of domain knowledge. That knowledge, combined with AI execution, is one of the most powerful professional combinations available right now. Build it.</p>
        </div>

        <div className="rounded-xl p-8 text-center" style={{ backgroundColor: "#C4622D" }}>
          <h3 className="text-xl font-bold mb-3 text-white">One Thing to Do This Week</h3>
          <p className="text-white opacity-90">Write a prompt for one task you do every week. Make it specific — include the output format, the tone, the constraints. Run it. See what comes back. That is your first workflow.</p>
        </div>
      </div>
    </div>
  );
}
