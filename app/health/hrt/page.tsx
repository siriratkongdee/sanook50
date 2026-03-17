export default function HRTPost() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF4EC' }}>
      {/* Hero */}
      <div className="py-16" style={{ backgroundColor: '#FAF4EC', borderBottom: '4px solid #7D9B76' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6" style={{ backgroundColor: '#FAF4EC', color: '#7D9B76', border: '1px solid #7D9B76' }}>Hormones</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#3B2A1A' }}>
            Should I Try HRT? What the Experts Say (And What I Actually Think)
          </h1>
          <p className="text-lg" style={{ color: '#3B2A1A', opacity: 0.7 }}>By Sirirat Kongdee · March 2026 · 8 min read</p>
        </div>
      </div>

      {/* Article */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="prose-custom">

          <p className="text-xl mb-8 font-medium" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
            I spent three weekends going down a rabbit hole of podcasts, papers, and expert interviews so you don't have to. Here's the honest breakdown on Hormone Replacement Therapy — one of the most confusing, most debated topics in women's health right now.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#C4622D' }}>What Is HRT, Really?</h2>
          <p className="mb-4" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
            Hormone Replacement Therapy (HRT) replaces the estrogen (and sometimes progesterone and testosterone) that your body stops producing during menopause. It comes in pills, patches, gels, and creams.
          </p>
          <p className="mb-8" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
            For decades, women were told to avoid it after a 2002 study linked it to breast cancer. Most doctors stopped prescribing it. Most women suffered in silence. The science has moved on. The conversation hasn't caught up — yet.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6" style={{ color: '#C4622D' }}>What the Experts Say</h2>

          {[
            { color: '#4a9eff', name: 'Peter Attia', role: 'Strong advocate, with timing caveats', text: 'Attia calls menopause a "metabolic crisis." He argues HRT — when started during perimenopause or within 10 years of your last period — protects your heart, brain, and bones. He calls this the "critical window." Miss it, and the benefits shrink significantly.' },
            { color: '#7D9B76', name: 'Dr. Mary Claire Haver', role: 'Yes, and start the conversation early', text: "OB/GYN and menopause specialist. Her position: most women are good candidates, most doctors are undertrained, and the 2002 study that scared everyone was deeply flawed. She emphasizes body composition — estrogen loss accelerates muscle loss and visceral fat gain. HRT helps slow that." },
            { color: '#D4A853', name: 'Andrew Huberman', role: 'Evidence points to yes, personalize it', text: "Huberman consistently platforms pro-HRT experts. His takeaway: work with a menopause-literate doctor, test your hormones early (before you're symptomatic), and don't wait until you're in crisis." },
            { color: '#C4622D', name: 'Rhonda Patrick', role: 'Lifestyle first, HRT as part of the picture', text: "Patrick's approach is more cautious — not anti-HRT, but she emphasizes that nutrition, inflammation control, and mitochondrial health should run alongside any hormone intervention." },
            { color: '#9b59b6', name: 'Dr. Louise Newson', role: 'The HRT champion', text: "UK-based menopause specialist who has arguably done more than anyone to destigmatize HRT. Her position: the risks have been overstated, the benefits are underappreciated, and women deserve better information." },
          ].map((expert, i) => (
            <div key={i} className="rounded-xl p-6 mb-4 border-l-4" style={{ backgroundColor: 'white', borderLeftColor: expert.color }}>
              <div className="font-bold text-lg mb-1" style={{ color: expert.color }}>{expert.name}</div>
              <div className="text-sm mb-3 italic" style={{ color: '#3B2A1A', opacity: 0.6 }}>{expert.role}</div>
              <p style={{ color: '#3B2A1A', lineHeight: '1.7' }}>{expert.text}</p>
            </div>
          ))}

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#C4622D' }}>Where They Agree</h2>
          <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#f0f7f0', border: '1px solid #7D9B76' }}>
            {[
              "The 2002 WHI study was flawed — it used older women, synthetic hormones, and oral-only delivery",
              "Timing matters — earlier is better",
              "Bioidentical hormones (estradiol + progesterone) have a better safety profile than synthetic",
              "Muscle loss, bone density, and cardiovascular risk all worsen without estrogen",
              "Most women are undertreated and underinformed",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 mb-3">
                <span style={{ color: '#7D9B76', fontSize: '1.2rem' }}>✅</span>
                <p style={{ color: '#3B2A1A', lineHeight: '1.7' }}>{item}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#C4622D' }}>Where They Diverge</h2>
          <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#fff8f0', border: '1px solid #D4A853' }}>
            {[
              "How aggressively to add testosterone (Attia is more pro-testosterone for women than others)",
              "How much lifestyle can compensate if you choose not to do HRT",
              "How to handle women with a history of hormone-sensitive cancers",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 mb-3">
                <span style={{ color: '#D4A853', fontSize: '1.2rem' }}>⚡</span>
                <p style={{ color: '#3B2A1A', lineHeight: '1.7' }}>{item}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#C4622D' }}>My Take</h2>
          <div className="rounded-xl p-8 mb-8" style={{ backgroundColor: '#FAF4EC', border: '2px solid #C4622D' }}>
            <p className="mb-4" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
              I'm 50. I'm navigating this myself. And honestly? The more I read, the more I felt angry — not at the experts, but at how long this conversation was suppressed.
            </p>
            <p className="mb-4 font-semibold" style={{ color: '#C4622D', lineHeight: '1.8' }}>
              HRT is not a scary last resort. For many women, it's proactive healthcare.
            </p>
            <p style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
              Find a doctor who is menopause-literate — not just any OB/GYN. Ask them directly how many menopause patients they see. Get your hormone levels tested. Bring the research with you. You're not asking for permission. You're advocating for yourself.
            </p>
          </div>

          {/* CTA */}
          <div className="rounded-xl p-8 text-center" style={{ backgroundColor: '#7D9B76' }}>
            <h3 className="text-xl font-bold text-white mb-3">One Thing to Do This Week</h3>
            <p className="text-white opacity-90 mb-4">Go to <strong>menopausesociety.org</strong> and use their "find a provider" tool to locate a menopause-certified doctor near you.</p>
            <a href="https://menopausesociety.org" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 rounded-full font-bold transition hover:opacity-90" style={{ backgroundColor: '#FAF4EC', color: '#7D9B76' }}>
                Find a Provider →
              </button>
            </a>
          </div>

          {/* Sources */}
          <div className="mt-12 pt-8 border-t" style={{ borderColor: '#e8ddd0' }}>
            <p className="text-sm" style={{ color: '#3B2A1A', opacity: 0.6 }}>
              <strong>Sources:</strong> The Peter Attia Drive podcast · Huberman Lab (Dr. Mary Claire Haver episode, June 2024) · The Dr. Louise Newson Podcast · FoundMyFitness (Dr. Rhonda Patrick)
            </p>
            <p className="text-sm mt-2" style={{ color: '#3B2A1A', opacity: 0.5 }}>
              <em>Disclaimer: I'm not a doctor. This is curated research, not medical advice. Always work with a qualified healthcare provider.</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
