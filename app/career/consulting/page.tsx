export default function ConsultingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF4EC" }}>

      <div className="max-w-3xl mx-auto px-4 pt-8">
        <a href="/career" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70" style={{ color: "#C4622D" }}>← Back to Career</a>
      </div>

      <div className="py-16" style={{ backgroundColor: "#FAF4EC", borderBottom: "4px solid #C4622D" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6" style={{ backgroundColor: "#FAF4EC", color: "#C4622D", border: "1px solid #C4622D" }}>Career Strategy</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "#3B2A1A" }}>From Employee to Consultant: Making the Leap</h1>
          <p className="text-lg" style={{ color: "#3B2A1A", opacity: 0.7 }}>By Siri · 2026 · 9 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-xl mb-8 font-medium" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Consulting is not a fallback. For women 50+ with deep domain expertise, it can be the highest-leverage move of your career — better pay, more autonomy, and work that actually uses what you know. Here is what the leap actually looks like.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>Why Consulting Works Especially Well After 50</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Consulting rewards exactly what you have spent decades building. The things that make you valuable as a senior employee — deep expertise, a strong professional network, credibility, and the ability to self-manage without hand-holding — are the precise things that make a consultant worth hiring.</p>
        {[
          { title: "Deep expertise", body: "Clients pay for answers, not hours. Someone who has solved a problem 50 times is worth more than someone who has to figure it out from scratch. Your decades of pattern recognition have a market rate." },
          { title: "Network", body: "Your network is not just who you know — it is who trusts you and who will take your call. That is pipeline. A 50-year-old with 25 years of professional relationships has a distribution advantage a 28-year-old consultant cannot replicate." },
          { title: "Credibility", body: "Clients hire consultants partly on confidence. Walking in as someone with a 25-year track record closes differently than walking in as someone still building theirs. Your age is a credential here, not a liability." },
          { title: "Self-management", body: "Consulting is not supervised. It rewards people who can set priorities, manage their own time, and deliver without being managed. That is a skill that takes years to develop, and you have it." },
        ].map((item, i) => (
          <div key={i} className="rounded-xl p-5 mb-4" style={{ backgroundColor: "white", border: "1px solid #e8ddd0" }}>
            <p className="font-bold mb-1" style={{ color: "#7D9B76" }}>{item.title}</p>
            <p style={{ color: "#3B2A1A", lineHeight: "1.8" }}>{item.body}</p>
          </div>
        ))}

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>The Financial Reality Check</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Before you romanticize consulting, run the numbers. The economics are genuinely better than employment — but only if you understand them.</p>
        <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: "#FAF4EC", border: "1px solid #D4A853" }}>
          <p className="font-semibold mb-3" style={{ color: "#D4A853" }}>The rate calculation:</p>
          <p className="mb-2" style={{ color: "#3B2A1A" }}>Target annual income ÷ 1,000 billable hours = your minimum hourly rate</p>
          <p className="mb-2" style={{ color: "#3B2A1A" }}>1,000 hours is a realistic billable target for a solo consultant (roughly 20 hours/week, accounting for sales, admin, and vacation).</p>
          <p className="mt-4" style={{ color: "#3B2A1A" }}>Example: $200,000 target ÷ 1,000 hours = $200/hour minimum. Most experienced consultants in knowledge work charge $150–$500/hour. Many charge more.</p>
        </div>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The honest downsides:</p>
        {[
          "Feast and famine: income is lumpy. Some months are great, some are slow. You need 6 months of living expenses as a buffer before you go independent.",
          "Healthcare gap: losing employer healthcare is the biggest shock for new consultants. Price this before you leave — it is often $500–$1,200/month for individual coverage.",
          "Self-employment tax: you pay both sides of Social Security and Medicare, which adds roughly 7.65% to your effective tax rate. Talk to an accountant before you set your rates.",
          "No paid vacation or sick days: when you don't work, you don't get paid. Build this into your rate from day one.",
        ].map((item, i) => (
          <div key={i} className="flex gap-3 mb-3">
            <span style={{ color: "#C4622D" }}>→</span>
            <p style={{ color: "#3B2A1A", lineHeight: "1.7" }}>{item}</p>
          </div>
        ))}

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>The 3 Types of Consulting</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Not all consulting is the same. The type you choose shapes your income, risk, and lifestyle.</p>
        {[
          {
            type: "Staff augmentation",
            description: "You work inside a client's team, often full-time or near-full-time, for a defined period.",
            upside: "Steady income, easy to sell, low sales effort once placed",
            downside: "Feels a lot like employment; rate pressure is higher; single-client dependency",
            best_for: "First consulting engagement; transitioning out of a specific role",
          },
          {
            type: "Project-based consulting",
            description: "You deliver a defined outcome — a strategy, an audit, a system implementation — for a fixed fee or time block.",
            upside: "Clear scope, often higher effective rates, portfolio-building",
            downside: "More sales work; scope creep risk; income less predictable",
            best_for: "Consultants with a specific, repeatable methodology or deliverable",
          },
          {
            type: "Retainer / advisory",
            description: "A company pays you a monthly fee to be available — for advice, reviews, fractional leadership, or ongoing access to your judgment.",
            upside: "Predictable income, high leverage (multiple clients), prestigious positioning",
            downside: "Hardest to sell until you have credibility; requires clear value definition",
            best_for: "Experienced operators who can serve as fractional C-suite or senior advisors",
          },
        ].map((item, i) => (
          <div key={i} className="rounded-xl p-6 mb-4" style={{ backgroundColor: "white", border: "1px solid #e8ddd0" }}>
            <p className="font-bold mb-1" style={{ color: "#C4622D" }}>{item.type}</p>
            <p className="mb-3" style={{ color: "#3B2A1A", lineHeight: "1.7" }}>{item.description}</p>
            <p className="text-sm mb-1" style={{ color: "#7D9B76" }}><strong>Upside:</strong> {item.upside}</p>
            <p className="text-sm mb-1" style={{ color: "#C4622D" }}><strong>Downside:</strong> {item.downside}</p>
            <p className="text-sm" style={{ color: "#3B2A1A" }}><strong>Best for:</strong> {item.best_for}</p>
          </div>
        ))}

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>Building Your Pipeline Before You Quit</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The single biggest mistake new consultants make is quitting first and building their pipeline second. By the time you have burned through savings, you are pitching from desperation. The right order is: first client, then quit.</p>
        <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: "#FAF4EC", border: "1px solid #D4A853" }}>
          <p className="font-semibold mb-3" style={{ color: "#D4A853" }}>Where your first client comes from:</p>
          <p className="mb-3" style={{ color: "#3B2A1A", lineHeight: "1.7" }}>Your first consulting client is almost always someone you already know. A former employer, a past colleague, a company in your industry where you have relationships. You do not cold-pitch your way to your first client — you have a conversation with someone who already trusts you and says: "Actually, I could use help with that."</p>
          <p style={{ color: "#3B2A1A", lineHeight: "1.7" }}>Start those conversations now. Tell people you are exploring consulting. Ask what problems they are trying to solve. You are not pitching — you are listening. The offer emerges from the conversation.</p>
        </div>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Productize your service. A vague offer ("I help companies with strategy") is hard to buy. A specific offer ("I help mid-sized e-commerce companies reduce customer acquisition cost by auditing their paid media mix") is something a buyer can evaluate and say yes to. The more specific, the easier you are to hire.</p>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Position yourself on LinkedIn as a consultant before you need to. Update your headline. Write about what you know. When you eventually approach a prospect, they will have already been seeing your expertise. Warm is always easier than cold.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>The Transition Plan</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>A 2-year runway is the right mental model. Here is how it plays out:</p>
        {[
          { phase: "Year 1: Build while employed", body: "Identify your consulting offer. Update your positioning. Have pipeline conversations. Do not quit. Use your current employment as your financial safety net while you test the market. A side project or pro bono engagement is worth doing here — you need case studies before you can sell." },
          { phase: "Year 2: Land your first client", body: "Your goal is a paying client while still employed. This could be evenings and weekends, or a formal arrangement with your employer's knowledge. The first dollar of consulting income changes your psychology completely. You have proof of concept." },
          { phase: "Year 2.5: Go independent", body: "With at least one client and 6 months of savings, you have enough foundation to make the leap. You are not betting on the market — you are transitioning to something that already exists. That is a different kind of risk than jumping blind." },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 mb-5" style={{ borderLeft: "3px solid #C4622D", paddingLeft: "1rem" }}>
            <div>
              <p className="font-bold mb-1" style={{ color: "#C4622D" }}>{item.phase}</p>
              <p style={{ color: "#3B2A1A", lineHeight: "1.8" }}>{item.body}</p>
            </div>
          </div>
        ))}

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>AI as Your Consulting Superpower</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Solo consulting used to mean capacity constraints. You could only take on what one person could deliver. AI changes that equation fundamentally.</p>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>A consultant who uses AI effectively can produce research, analysis, deliverables, and communications at a pace that used to require a team. You can take on more clients. You can deliver faster. You can offer services that would have been out of scope for a solo practice — and charge accordingly.</p>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The consultants who will thrive in the next decade are not the ones who resist AI — they are the ones who combine deep domain expertise with AI leverage. That is a combination that is genuinely rare, and genuinely valuable. At 50+, you have the domain expertise side of that equation fully loaded.</p>

        <div className="rounded-xl p-8 text-center" style={{ backgroundColor: "#C4622D" }}>
          <h3 className="text-xl font-bold mb-3 text-white">One Thing to Do This Week</h3>
          <p className="text-white opacity-90">Write down 3 specific problems you have solved in the last 2 years that another company would pay to have solved. That is the beginning of your consulting offer.</p>
        </div>
      </div>
    </div>
  );
}
