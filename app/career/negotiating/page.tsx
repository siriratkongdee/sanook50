export default function NegotiatingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF4EC" }}>

      <div className="max-w-3xl mx-auto px-4 pt-8">
        <a href="/career" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70" style={{ color: "#C4622D" }}>← Back to Career</a>
      </div>

      <div className="py-16" style={{ backgroundColor: "#FAF4EC", borderBottom: "4px solid #C4622D" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6" style={{ backgroundColor: "#FAF4EC", color: "#C4622D", border: "1px solid #C4622D" }}>Career Strategy</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "#3B2A1A" }}>Negotiating Salary After 50: Yes, You Can and Should</h1>
          <p className="text-lg" style={{ color: "#3B2A1A", opacity: 0.7 }}>By Siri · 2026 · 8 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-xl mb-8 font-medium" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Most women 50+ walk into salary negotiations already apologizing. They have internalized the idea that age is a liability, that they should be grateful, that asking too much will cost them the offer. All of that is wrong. Here is what negotiation actually looks like when you have real leverage.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>The Age Bias Myth vs Reality</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Age bias is real. Do not pretend it is not. Studies consistently show that older workers — especially women — face discrimination in hiring, promotion, and compensation. Acknowledging this is not defeatism. It is strategy.</p>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>But here is what the bias narrative misses: it applies unevenly. A company that discriminates against a 52-year-old in initial screening may negotiate aggressively to retain a 52-year-old who is already delivering results. The leverage you have as an existing or highly-recruited candidate is categorically different from the leverage of a cold applicant.</p>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Your experience is real. Your network is real. Your institutional knowledge is real. These things have dollar values that can be calculated and argued. Age bias does not erase leverage — it just means you have to name your value explicitly rather than assume it is obvious.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>Why Women 50+ Actually Have More Leverage Than They Think</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The cost to replace a senior employee is staggering. Research consistently puts it at 50–200% of annual salary once you account for recruiting, onboarding, lost productivity during ramp-up, and knowledge transfer risk.</p>
        <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: "#FAF4EC", border: "1px solid #D4A853" }}>
          <p className="font-semibold mb-3" style={{ color: "#D4A853" }}>What a company actually loses when you leave:</p>
          {[
            "Recruiting cost: agency fees, job board spend, interviewer time — often $15,000–$40,000",
            "Ramp-up time: a new hire at your level takes 6–12 months to reach your productivity",
            "Knowledge transfer risk: relationships, context, and institutional memory that live only in your head",
            "Disruption cost: projects stall, clients notice, team morale dips",
          ].map((item, i) => (
            <p key={i} className="mb-2" style={{ color: "#3B2A1A", lineHeight: "1.7" }}>• {item}</p>
          ))}
        </div>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>If you are negotiating a raise of $15,000, you are asking for a fraction of what it would cost to replace you. Frame your request in those terms — internally, even if not out loud — and your confidence changes.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>The 5 Negotiation Mistakes That Kill Offers</h2>
        {[
          {
            title: "1. Anchoring too low",
            body: "When you name a number first — or accept theirs without countering — you set the ceiling. Research shows the first number stated in a negotiation anchors the entire conversation. If you anchor low out of fear, you lose before the negotiation starts.",
          },
          {
            title: "2. Apologizing",
            body: "\"I know this might be a lot to ask\" and \"I don't want to be difficult\" are negotiation killers. They signal that you don't believe your own ask. State your number or request. Then stop talking. Silence is not awkward — it is pressure.",
          },
          {
            title: "3. Not researching market rate",
            body: "Walking in without data is walking in blind. You need three numbers: the low end of market rate for your role and location, the median, and the high end. Glassdoor, LinkedIn Salary, levels.fyi, and industry salary surveys are your starting points. Your ask should be grounded in data, not gut feeling.",
          },
          {
            title: "4. Negotiating salary alone",
            body: "Total compensation includes base salary, bonus structure, equity or profit-sharing, retirement contributions, PTO, remote flexibility, healthcare, development budget, and title. Fixating only on base means leaving significant value on the table. Sometimes a company can't move on salary but will give you three extra weeks off or a $5,000 development budget.",
          },
          {
            title: "5. Accepting the first offer",
            body: "First offers are not final offers. Companies expect negotiation. The person who made you an offer wants to hire you — they will not rescind the offer because you countered reasonably. The first offer is an opening bid, not a contract.",
          },
        ].map((item, i) => (
          <div key={i} className="rounded-xl p-6 mb-4" style={{ backgroundColor: "white", border: "1px solid #e8ddd0" }}>
            <p className="font-bold mb-2" style={{ color: "#C4622D" }}>{item.title}</p>
            <p style={{ color: "#3B2A1A", lineHeight: "1.8" }}>{item.body}</p>
          </div>
        ))}

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>The Preparation Framework</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Negotiation is won in preparation, not in the moment. Before any salary conversation, work through these four steps:</p>
        {[
          {
            step: "Research market rate",
            body: "Gather salary data from at least three sources. Note the range for your specific role, level, industry, and geography. Identify where your experience, tenure, and track record should place you in that range.",
          },
          {
            step: "Document your value in numbers",
            body: "Convert your contributions to dollars where possible. Revenue generated, costs reduced, projects delivered, team size managed, clients retained. \"I led a team of 12\" is less powerful than \"I managed a $4M operational budget and reduced vendor costs by 18%.\"",
          },
          {
            step: "Know your walkaway number",
            body: "Before you walk in, know the minimum you will accept. This number is not negotiable in the room — it is a commitment you make to yourself in advance. Without a walkaway number, you are negotiating against your own anxiety.",
          },
          {
            step: "Prepare for the age question",
            body: "It may come indirectly: \"Are you planning to stay long-term?\" or \"How do you feel about working with a younger team?\" Prepare specific, confident answers that reframe the question: \"I am at the stage of my career where I have the most to offer and the most clarity about what I want. That tends to make me a reliable long-term bet.\"",
          },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 mb-5" style={{ borderLeft: "3px solid #7D9B76", paddingLeft: "1rem" }}>
            <div>
              <p className="font-bold mb-1" style={{ color: "#7D9B76" }}>{item.step}</p>
              <p style={{ color: "#3B2A1A", lineHeight: "1.8" }}>{item.body}</p>
            </div>
          </div>
        ))}

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>Scripts That Work</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The exact words matter. Use these as starting points and adapt them to your voice:</p>
        <div className="rounded-xl p-6 mb-4" style={{ backgroundColor: "white", border: "1px solid #e8ddd0" }}>
          {[
            {
              situation: "When they give you a number first:",
              script: "\"Thank you — I want to make sure I give this the consideration it deserves. Based on my research and the scope of this role, I was expecting something in the range of [X to Y]. Is there flexibility there?\"",
            },
            {
              situation: "When asked for your number first:",
              script: "\"Based on my research for this role and geography, and given my track record in [specific area], I'm targeting [X]. What does the budget for this role look like?\"",
            },
            {
              situation: "When they say they can't go higher on base:",
              script: "\"I understand. Can we talk about the rest of the package? I'd like to explore [bonus structure / additional PTO / remote flexibility / development budget].\"",
            },
            {
              situation: "After a counter:",
              script: "\"I appreciate you working with me on this. I can make [their new number] work if we can also include [one specific ask]. That gets me to yes.\"",
            },
            {
              situation: "When you need time:",
              script: "\"This is helpful context. I want to think it through carefully — can I get back to you by [specific date]?\" Always name a date. Vague \"I'll think about it\" loses momentum.",
            },
          ].map((item, i) => (
            <div key={i} className="mb-5">
              <p className="font-semibold mb-1" style={{ color: "#C4622D" }}>{item.situation}</p>
              <p className="italic" style={{ color: "#3B2A1A", lineHeight: "1.7", backgroundColor: "#FAF4EC", padding: "0.75rem", borderRadius: "0.5rem" }}>{item.script}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>Negotiating Beyond Salary</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>At this stage of your career, non-salary terms often matter as much as base pay. Consider negotiating for:</p>
        {[
          { item: "Remote or hybrid flexibility", note: "Worth thousands per year in commute time and cost alone" },
          { item: "Additional PTO", note: "An extra week adds real quality of life without touching the salary budget" },
          { item: "Title", note: "A better title affects your next negotiation and your professional visibility" },
          { item: "Equity or profit-sharing", note: "Especially at smaller companies where base is constrained but upside exists" },
          { item: "Professional development budget", note: "Training, conferences, certifications — invest in your next chapter on their dime" },
          { item: "Flexible schedule", note: "Start time, compressed weeks, or part-time options that protect your energy" },
        ].map((item, i) => (
          <div key={i} className="flex gap-3 mb-3">
            <span style={{ color: "#C4622D" }}>→</span>
            <p style={{ color: "#3B2A1A", lineHeight: "1.7" }}><strong>{item.item}:</strong> {item.note}</p>
          </div>
        ))}
        <p className="mt-6 mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Build your full wish list before any negotiation. Prioritize it. Know what you will trade against what. The goal is a total package you can say yes to — not just a number.</p>

        <div className="rounded-xl p-8 text-center" style={{ backgroundColor: "#C4622D" }}>
          <h3 className="text-xl font-bold mb-3 text-white">One Thing to Do This Week</h3>
          <p className="text-white opacity-90">Look up your market rate on levels.fyi, Glassdoor, and LinkedIn Salary this week. Write down the range. That is your baseline.</p>
        </div>
      </div>
    </div>
  );
}
