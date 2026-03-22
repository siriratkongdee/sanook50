export default function PersonalBrandPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF4EC" }}>

      <div className="max-w-3xl mx-auto px-4 pt-8">
        <a href="/career" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70" style={{ color: "#C4622D" }}>← Back to Career</a>
      </div>

      <div className="py-16" style={{ backgroundColor: "#FAF4EC", borderBottom: "4px solid #C4622D" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6" style={{ backgroundColor: "#FAF4EC", color: "#C4622D", border: "1px solid #C4622D" }}>Career Strategy</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "#3B2A1A" }}>Building a Personal Brand After 50: Your Experience Is the Asset</h1>
          <p className="text-lg" style={{ color: "#3B2A1A", opacity: 0.7 }}>By Siri · 2026 · 8 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-xl mb-8 font-medium" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Personal brand sounds like something for 28-year-olds trying to go viral. It is not. For women 50+ with decades of real expertise, building a professional presence is one of the highest-return career moves available — and the AI era makes it more valuable, not less.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>Why Most Women 50+ Underestimate Their Brand Value</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>There is a particular kind of invisibility that happens to experienced women in their 50s. They have decades of solved problems, hard-won expertise, and real results — and they have learned to be modest about it. The professional culture that rewarded deference and collaboration has conditioned the exact people with the most to offer to speak the least.</p>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Here is what you have that a 25-year-old content creator does not:</p>
        {[
          "Expertise earned through actual failure and iteration, not just theory or certification",
          "Real results with real numbers attached — P&L impact, teams built, projects delivered",
          "A professional network that took 25 years to develop and reflects genuine relationship depth",
          "Perspective on how industries, companies, and problems actually work over time",
          "Credibility that comes from having been in the room when decisions were made",
        ].map((item, i) => (
          <div key={i} className="flex gap-3 mb-3">
            <span style={{ color: "#C4622D" }}>→</span>
            <p style={{ color: "#3B2A1A", lineHeight: "1.7" }}>{item}</p>
          </div>
        ))}
        <p className="mt-6 mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>That is a brand. You have just not been naming it or sharing it.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>The AI Era Changes Everything</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>There is a common fear that AI will flood the internet with content and make it impossible to stand out. The opposite is true for people with real expertise.</p>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>AI is extremely good at producing generic content that sounds authoritative but contains nothing that could only come from lived experience. The market is about to be flooded with polished mediocrity. What becomes scarce — and therefore valuable — is perspective that is distinctly human, grounded in specific experience, and backed by a real track record.</p>
        <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: "#FAF4EC", border: "1px solid #D4A853" }}>
          <p className="font-semibold mb-3" style={{ color: "#D4A853" }}>What AI cannot fake:</p>
          {[
            "The specific lesson you learned from a specific failure in 2014",
            "Your read on why a particular kind of strategy fails in mid-market companies",
            "The pattern you have seen play out 12 times across different industries",
            "Your honest, unhedged opinion on something controversial in your field",
          ].map((item, i) => (
            <p key={i} className="mb-2" style={{ color: "#3B2A1A", lineHeight: "1.7" }}>• {item}</p>
          ))}
        </div>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>That is what a personal brand built on real expertise looks like. AI commoditizes generic. It amplifies genuine.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>Where to Build</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>You do not need to be everywhere. Pick one platform and commit to it for 90 days before adding another.</p>
        {[
          {
            platform: "LinkedIn",
            best_for: "Professional credibility, B2B visibility, consulting pipeline",
            reality: "The highest-signal professional platform. A well-maintained LinkedIn presence with regular, substantive posts is the single best move for most women 50+ building a professional brand. Recruiters, clients, and partners check it. Your network already exists there.",
          },
          {
            platform: "X / Twitter",
            best_for: "Thought leadership, niche authority, building in public",
            reality: "High leverage for building a public profile quickly, especially in finance, tech, and strategy. The bar is short-form clarity — can you say something true and non-obvious in a few sentences? Harder to build from zero, but the signal-to-noise ratio for serious professionals is still high.",
          },
          {
            platform: "Writing (Substack, Medium, your own site)",
            best_for: "Deep expertise, long-form authority, subscriber relationships",
            reality: "The highest-trust format. Someone who has read 10 of your essays knows your thinking better than someone who follows you on social. Slower to build, but the audience is more committed. Best paired with a social presence that drives discovery.",
          },
        ].map((item, i) => (
          <div key={i} className="rounded-xl p-6 mb-4" style={{ backgroundColor: "white", border: "1px solid #e8ddd0" }}>
            <p className="font-bold mb-1" style={{ color: "#C4622D" }}>{item.platform}</p>
            <p className="text-sm mb-2" style={{ color: "#7D9B76" }}><strong>Best for:</strong> {item.best_for}</p>
            <p style={{ color: "#3B2A1A", lineHeight: "1.8" }}>{item.reality}</p>
          </div>
        ))}

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>The Content Formula</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>A personal brand is not your resume. It is not a list of credentials or a highlight reel. It is a consistent answer to the question: <em>what do you know, who are you, and who do you help?</em></p>
        <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: "#FAF4EC", border: "2px solid #7D9B76" }}>
          <p className="font-bold text-center mb-4 text-lg" style={{ color: "#7D9B76" }}>Your brand angle:</p>
          <p className="text-center font-semibold" style={{ color: "#3B2A1A" }}>What you know + Who you are + Who you help = Your brand angle</p>
          <div className="mt-4 pt-4" style={{ borderTop: "1px solid #e8ddd0" }}>
            <p className="text-sm mb-1" style={{ color: "#3B2A1A" }}><strong>Example:</strong> "I help mid-career women in finance navigate pivots into consulting" (what you know: finance + career transitions; who you are: someone who has done it; who you help: mid-career women)</p>
          </div>
        </div>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Content that works:</p>
        {[
          "What you have learned from a specific experience — with the actual lesson, not a vague takeaway",
          "What you think is wrong or misunderstood about a topic in your field",
          "What you would do differently if you were starting over",
          "The pattern you keep seeing that most people are not talking about",
          "Honest analysis of a decision, trend, or situation in your industry",
        ].map((item, i) => (
          <div key={i} className="flex gap-3 mb-3">
            <span style={{ color: "#7D9B76" }}>→</span>
            <p style={{ color: "#3B2A1A", lineHeight: "1.7" }}>{item}</p>
          </div>
        ))}

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>How to Start Without Being Cringe</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The fear is not that you will be ignored — it is that you will embarrass yourself. That fear is worth examining, because it is keeping you invisible.</p>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The content that reads as cringe is aspirational content from people who have not actually done the thing they are writing about. Inspirational quotes. Generic productivity advice. "Hot takes" designed to provoke without substance. That is cringe because it is hollow.</p>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Writing about what you have actually done is the opposite of cringe. It is what people with real expertise do. The rules:</p>
        {[
          { rule: "Write about what you have done, not what you aspire to do", note: "Specificity is credibility. \"I managed a $12M budget through two downturns\" is interesting. \"I am passionate about financial strategy\" is not." },
          { rule: "Start with one piece of content per week, not one per day", note: "Consistency over volume. One good post a week for a year is 52 pieces of content — more than enough to build a real presence." },
          { rule: "Do not write for everyone", note: "Write for one specific person who is where you were 10 years ago. The more specific your imagined reader, the more broadly your content resonates. It sounds counterintuitive. It works." },
          { rule: "Edit ruthlessly", note: "The first draft is almost never ready. Remove every sentence that does not add something. A shorter, sharper post outperforms a longer, padded one every time." },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 mb-5" style={{ borderLeft: "3px solid #D4A853", paddingLeft: "1rem" }}>
            <div>
              <p className="font-bold mb-1" style={{ color: "#D4A853" }}>{item.rule}</p>
              <p style={{ color: "#3B2A1A", lineHeight: "1.8" }}>{item.note}</p>
            </div>
          </div>
        ))}

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>Personal Brand as Career Insurance</h2>
        <p className="mb-4" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Here is the strategic case for building a personal brand that has nothing to do with influencer culture or follower counts.</p>
        {[
          {
            point: "Being known means opportunities find you",
            body: "When the right people know what you do and what you are good at, you stop competing for opportunities cold and start being approached. Consulting clients, board seats, speaking invitations, job offers — these come to people who are visible, not to people who are equally qualified but invisible.",
          },
          {
            point: "It reduces dependency on a single employer",
            body: "If your entire professional identity exists inside one company, you are fully exposed if that company restructures, gets acquired, or decides to cut senior roles. A public professional presence means your value is portable. You are not starting from zero if you have to leave.",
          },
          {
            point: "It compounds over time",
            body: "Unlike most career investments, a personal brand gets more valuable as it grows. The 500th LinkedIn post performs better than the 5th. The audience you have built at year two opens doors that were closed at year one. Starting later just means the compounding starts later — which is still better than never starting.",
          },
        ].map((item, i) => (
          <div key={i} className="rounded-xl p-6 mb-4" style={{ backgroundColor: "white", border: "1px solid #e8ddd0" }}>
            <p className="font-bold mb-2" style={{ color: "#C4622D" }}>{item.point}</p>
            <p style={{ color: "#3B2A1A", lineHeight: "1.8" }}>{item.body}</p>
          </div>
        ))}

        <div className="rounded-xl p-8 mb-8 mt-6" style={{ backgroundColor: "#FAF4EC", border: "2px solid #C4622D" }}>
          <p style={{ color: "#3B2A1A", lineHeight: "1.8" }}>The women who will have the most options in the next decade are the ones who are already known for something. Not famous — known. Known in their industry, their niche, their professional community. That is built one piece of real content at a time. You have 25 years of content waiting to be written.</p>
        </div>

        <div className="rounded-xl p-8 text-center" style={{ backgroundColor: "#C4622D" }}>
          <h3 className="text-xl font-bold mb-3 text-white">One Thing to Do This Week</h3>
          <p className="text-white opacity-90">Write one LinkedIn post this week about something you learned or solved in the last month. No inspirational quotes. Just one real thing you know.</p>
        </div>
      </div>
    </div>
  );
}
