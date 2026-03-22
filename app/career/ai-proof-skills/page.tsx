export default function AiProofSkillsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF4EC" }}>

      <div className="max-w-3xl mx-auto px-4 pt-8">
        <a href="/career" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70" style={{ color: "#C4622D" }}>← Back to Career</a>
      </div>

      <div className="py-16" style={{ backgroundColor: "#FAF4EC", borderBottom: "4px solid #C4622D" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6" style={{ backgroundColor: "#FAF4EC", color: "#C4622D", border: "1px solid #C4622D" }}>Skills</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "#3B2A1A" }}>The Skills That Make You AI-Proof After 50</h1>
          <p className="text-lg" style={{ color: "#3B2A1A", opacity: 0.7 }}>By Siri · 2026 · 8 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-xl mb-8 font-medium" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Every article about AI and careers tells you to "learn to code" or "stay curious." That advice is almost useless. Here are the specific, practical skills that actually create resilience — and how to build them starting this week.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>Why "Learn to Code" Is the Wrong Answer</h2>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Generic advice about "learning to code" misunderstands the opportunity. AI has actually reduced the value of basic coding — because AI can write basic code. The skills that create real resilience are not about replacing what AI does well. They are about doing what AI cannot: directing it with expertise, validating its outputs with judgment, and applying domain knowledge to real-world problems. These are learnable skills. And at 50+, your experience gives you a head start that younger people simply do not have.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>Skill 1: Prompt Engineering</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Prompt engineering is not a technical skill — it is a communication skill. It means knowing how to give AI clear, specific, structured instructions that produce useful output. The difference between a vague prompt and a precise one is the difference between a generic paragraph and a genuinely useful result.</p>
        <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: "white", border: "1px solid #e8ddd0" }}>
          <p className="font-bold mb-3" style={{ color: "#D4A853" }}>What good looks like:</p>
          <p className="mb-2 text-sm" style={{ color: "#3B2A1A", opacity: 0.6 }}>Weak prompt:</p>
          <p className="mb-4 italic" style={{ color: "#3B2A1A" }}>"Write a summary of this report."</p>
          <p className="mb-2 text-sm" style={{ color: "#3B2A1A", opacity: 0.6 }}>Strong prompt:</p>
          <p className="italic" style={{ color: "#3B2A1A" }}>"You are a senior analyst. Summarize this report in 3 bullet points for an executive audience. Each bullet should state a finding, its business implication, and a recommended action. Use plain language, no jargon."</p>
          <p className="mt-4" style={{ color: "#C4622D", fontWeight: "600" }}>The second prompt takes 30 extra seconds to write. It saves 20 minutes of revision.</p>
        </div>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>How to build it: Start by prompting with context (who you are, what you need), format (how you want the output structured), and constraints (what to avoid). Iterate on real work tasks. Save the prompts that work. Over time you build a personal prompt library for your domain — which is genuinely valuable and transferable.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>Skill 2: Agent Orchestration</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Agent orchestration means setting up automated workflows where AI handles repeatable tasks with minimal manual input. This is not coding — it is workflow design. You define the process, the tools, and the outputs. AI executes.</p>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Examples: a weekly research brief that runs automatically, a content pipeline that takes a topic and produces a structured draft, a monitoring workflow that surfaces relevant news each morning. These are not exotic — they are accessible to anyone willing to invest a few hours in setup.</p>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>How to build it: Start with tools like Claude, ChatGPT, or Zapier. Identify one repeatable task and automate the first step. Do not try to automate everything at once. Build one workflow, prove it works, then expand. The compounding effect over months is significant.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>Skill 3: Domain Expertise + AI = Rare Combination</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>This is the most undervalued skill combination in the market right now. AI is widely available. Deep domain expertise — the kind built over 20-30 years — is not. The person who combines both is genuinely rare.</p>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>What this means in practice: you know which AI outputs are good and which are confidently wrong. You know what questions to ask that a junior person using AI would not think to ask. You can validate, refine, and direct AI in your field in ways that a generalist cannot.</p>
        <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: "#FAF4EC", border: "1px solid #D4A853" }}>
          <p className="font-semibold mb-2" style={{ color: "#D4A853" }}>The strategic move:</p>
          <p style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Stop thinking of your expertise as competing with AI. Start positioning it as what makes AI useful in your domain. You are not the person AI replaces — you are the person who makes AI reliable for everyone else in your field.</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>Skill 4: Demonstrating AI Fluency in Your Current Role</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Knowing how to use AI is one thing. Making sure your organization knows you know is another. The visibility matters — both for your current role and for your market positioning.</p>
        {[
          { label: "Use AI in meetings", desc: "Reference AI-assisted research, bring AI-generated analysis to discussions, propose AI-enhanced workflows. Make your fluency visible without being performative." },
          { label: "Propose AI experiments", desc: "Identify one process in your team that could be improved with AI and propose a pilot. Being the person who brings AI solutions — rather than the person AI solutions are imposed on — completely changes your position." },
          { label: "Document your AI workflows", desc: "If you have built useful prompts or workflows for your work, share them internally. This establishes you as a resource rather than a risk." },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 mb-4">
            <div className="rounded-lg px-3 py-1 text-sm font-semibold flex-shrink-0 h-fit mt-1" style={{ backgroundColor: "#C4622D", color: "white" }}>{`0${i + 1}`}</div>
            <div>
              <p className="font-bold mb-1" style={{ color: "#3B2A1A" }}>{item.label}</p>
              <p style={{ color: "#3B2A1A", lineHeight: "1.7" }}>{item.desc}</p>
            </div>
          </div>
        ))}

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>Skill 5: Building a Second Income Stream Using AI Tools</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>This is where AI fluency becomes directly financial. AI tools dramatically reduce the time and cost of building a second income stream — whether that is consulting, content, digital products, or fractional expertise.</p>
        {[
          { type: "Consulting and fractional work", desc: "AI handles research, documentation, and deliverable production. You provide the expertise and relationships. What used to require a team or 60-hour weeks is now doable solo." },
          { type: "Content and publishing", desc: "AI assists with research, drafting, and formatting. You provide the point of view, the audience connection, and the editorial judgment. A content business that would have taken years to build is now accessible in months." },
          { type: "Digital products and courses", desc: "Package your expertise into structured products. AI helps with the production — outlines, scripts, workbooks, supporting materials. Your expertise is the irreplaceable ingredient." },
        ].map((item, i) => (
          <div key={i} className="rounded-xl p-6 mb-4" style={{ backgroundColor: "white", border: "1px solid #e8ddd0" }}>
            <p className="font-bold mb-2" style={{ color: "#C4622D" }}>{item.type}</p>
            <p style={{ color: "#3B2A1A", lineHeight: "1.8" }}>{item.desc}</p>
          </div>
        ))}

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>The Honest Timeline</h2>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>You will not master all of this in a week. You will not become an AI expert in a month. But in 90 days of consistent, focused effort — one skill at a time, applied to real work — you can build enough fluency to shift your market position meaningfully. The people who started six months ago are already seeing results. The best time to start is today.</p>

        <div className="rounded-xl p-8 mb-8" style={{ backgroundColor: "#FAF4EC", border: "2px solid #C4622D" }}>
          <p style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The women who are AI-proof after 50 are not the ones who learned to code or got a certification. They are the ones who built genuine AI fluency in their specific domain — who can direct AI with expertise, validate its outputs with judgment, and combine 30 years of experience with tools that multiply what they can accomplish. That combination does not age. It compounds.</p>
        </div>

        <div className="rounded-xl p-8 text-center" style={{ backgroundColor: "#C4622D" }}>
          <h3 className="text-xl font-bold mb-3 text-white">One Thing to Do This Week</h3>
          <p className="text-white opacity-90">Choose one task from your job that takes more than an hour per week. Write a detailed prompt for it — specific, structured, with clear output format. Run it with Claude or ChatGPT. That is prompt engineering. That is your first AI skill. Build from there.</p>
        </div>
      </div>
    </div>
  );
}
