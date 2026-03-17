export default function HRTPost() {
  const proExperts = [
    { color: '#4a9eff', name: 'Peter Attia', role: 'Strong advocate, with timing caveats', text: 'Attia calls menopause a metabolic crisis. He argues HRT when started within 10 years of your last period protects your heart, brain, and bones. He calls this the critical window.' },
    { color: '#7D9B76', name: 'Dr. Mary Claire Haver', role: 'Yes, and start the conversation early', text: 'OB/GYN and menopause specialist. Most women are good candidates, most doctors are undertrained, and the 2002 study was deeply flawed. Estrogen loss accelerates muscle loss and visceral fat gain.' },
    { color: '#D4A853', name: 'Andrew Huberman', role: 'Evidence points to yes, personalize it', text: 'Huberman consistently platforms pro-HRT experts. Work with a menopause-literate doctor, test your hormones early, and do not wait until you are in crisis.' },
    { color: '#C4622D', name: 'Rhonda Patrick', role: 'Lifestyle first, HRT as part of the picture', text: 'Not anti-HRT, but she emphasizes nutrition, inflammation control, and mitochondrial health should run alongside any hormone intervention. Fix the foundation first.' },
    { color: '#9b59b6', name: 'Dr. Louise Newson', role: 'The HRT champion', text: 'UK-based menopause specialist. The risks have been overstated, the benefits are underappreciated, and women deserve better information.' },
  ];
  const cautious = [
    { name: 'Breast Cancer Survivors', text: 'Most oncologists still advise caution for women with a history of estrogen receptor-positive breast cancer. If you have had breast cancer, this decision needs deep conversation with your oncologist.' },
    { name: 'Diana Zuckerman — National Center for Health Research', text: 'A vocal critic of the FDA removing Black Box warnings from HRT in 2025. She argues risks of breast cancer, stroke, and pulmonary embolism still warrant strong warnings.' },
    { name: 'Dr. Adriane Fugh-Berman — Georgetown University', text: 'Argues the risk of invasive breast cancer is significantly increased with certain HRT formulations. The softening of warnings moves too fast ahead of the evidence.' },
    { name: 'Integrative Medicine Practitioners', text: 'Many naturopathic doctors emphasize lifestyle-first approaches before or alongside hormones. Their concern is not that HRT is dangerous, but that root causes go unaddressed.' },
  ];
  const agrees = ['The 2002 WHI study was flawed — older women, synthetic hormones, oral-only delivery','Timing matters — earlier is better','Bioidentical hormones have a better safety profile than synthetic','Muscle loss, bone density, and cardiovascular risk worsen without estrogen','Most women are undertreated and underinformed'];
  const diverges = ['How aggressively to add testosterone','How much lifestyle can compensate without HRT','How to handle women with hormone-sensitive cancer history'];
  const contra = ['History of hormone-sensitive breast or endometrial cancer','Active liver disease','Unexplained vaginal bleeding','History of blood clots or clotting disorders','Recent stroke or heart attack'];
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF4EC' }}>
      <div className="py-16" style={{ backgroundColor: '#FAF4EC', borderBottom: '4px solid #7D9B76' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6" style={{ backgroundColor: '#FAF4EC', color: '#7D9B76', border: '1px solid #7D9B76' }}>Hormones</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#3B2A1A' }}>Should I Try HRT? What the Experts Say (And What I Actually Think)</h1>
          <p className="text-lg" style={{ color: '#3B2A1A', opacity: 0.7 }}>By Sirirat Kongdee · March 2026 · 10 min read</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-xl mb-8 font-medium" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>I spent three weekends going down a rabbit hole of podcasts, papers, and expert interviews so you do not have to. Here is the honest breakdown on Hormone Replacement Therapy.</p>
        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#C4622D' }}>What Is HRT, Really?</h2>
        <p className="mb-4" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>Hormone Replacement Therapy replaces the estrogen (and sometimes progesterone and testosterone) that your body stops producing during menopause. It comes in pills, patches, gels, and creams.</p>
        <p className="mb-8" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>For decades, women were told to avoid it after a 2002 study linked it to breast cancer. Most doctors stopped prescribing it. Most women suffered in silence. The science has moved on.</p>
        <h2 className="text-2xl font-bold mt-10 mb-6" style={{ color: '#C4622D' }}>What the Experts Say: The Pro-HRT Case</h2>
        {proExperts.map((e, i) => (
          <div key={i} className="rounded-xl p-6 mb-4 border-l-4" style={{ backgroundColor: 'white', borderLeftColor: e.color }}>
            <div className="font-bold text-lg mb-1" style={{ color: e.color }}>{e.name}</div>
            <div className="text-sm mb-3 italic" style={{ color: '#3B2A1A', opacity: 0.6 }}>{e.role}</div>
            <p style={{ color: '#3B2A1A', lineHeight: '1.7' }}>{e.text}</p>
          </div>
        ))}
        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#C4622D' }}>Where They Agree</h2>
        <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#f0f7f0', border: '1px solid #7D9B76' }}>
          {agrees.map((item, i) => (<div key={i} className="flex items-start gap-3 mb-3"><span style={{ color: '#7D9B76' }}>✅</span><p style={{ color: '#3B2A1A', lineHeight: '1.7' }}>{item}</p></div>))}
        </div>
        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#C4622D' }}>Where They Diverge</h2>
        <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#fff8f0', border: '1px solid #D4A853' }}>
          {diverges.map((item, i) => (<div key={i} className="flex items-start gap-3 mb-3"><span style={{ color: '#D4A853' }}>⚡</span><p style={{ color: '#3B2A1A', lineHeight: '1.7' }}>{item}</p></div>))}
        </div>
        <h2 className="text-2xl font-bold mt-10 mb-6" style={{ color: '#C4622D' }}>The Other Side: Who Should Be Cautious</h2>
        <p className="mb-6" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>Balance matters. Not every expert is fully pro-HRT, and some women genuinely should not use it.</p>
        {cautious.map((e, i) => (
          <div key={i} className="rounded-xl p-6 mb-4 border-l-4" style={{ backgroundColor: 'white', borderLeftColor: '#D4A853' }}>
            <div className="font-bold text-lg mb-2" style={{ color: '#3B2A1A' }}>{e.name}</div>
            <p style={{ color: '#3B2A1A', lineHeight: '1.7', opacity: 0.85 }}>{e.text}</p>
          </div>
        ))}
        <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#fff8f0', border: '1px solid #D4A853' }}>
          <p className="font-semibold mb-3" style={{ color: '#D4A853' }}>HRT is generally NOT recommended if you have:</p>
          {contra.map((item, i) => (<p key={i} className="mb-1" style={{ color: '#3B2A1A' }}>• {item}</p>))}
        </div>
        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#C4622D' }}>My Take</h2>
        <div className="rounded-xl p-8 mb-8" style={{ backgroundColor: '#FAF4EC', border: '2px solid #C4622D' }}>
          <p className="mb-4" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>I am 50. I am navigating this myself. The more I read, the more I felt angry — not at the experts, but at how long this conversation was suppressed.</p>
          <p className="mb-4 font-semibold" style={{ color: '#C4622D' }}>HRT is not a scary last resort. For many women, it is proactive healthcare.</p>
          <p style={{ color: '#3B2A1A', lineHeight: '1.8' }}>But it is also not for everyone. Find a menopause-literate doctor. Get your hormone levels tested. Bring the research. You are not asking for permission. You are advocating for yourself.</p>
        </div>
        <div className="rounded-xl p-8 text-center" style={{ backgroundColor: '#7D9B76' }}>
          <h3 className="text-xl font-bold text-white mb-3">One Thing to Do This Week</h3>
          <p className="text-white opacity-90 mb-4">Go to <strong>menopausesociety.org</strong> and find a menopause-certified doctor near you.</p>
          <a href="https://menopausesociety.org" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 rounded-full font-bold hover:opacity-90" style={{ backgroundColor: '#FAF4EC', color: '#7D9B76' }}>Find a Provider</button>
          </a>
        </div>
        <div className="mt-12 pt-8 border-t" style={{ borderColor: '#e8ddd0' }}>
          <p className="text-sm" style={{ color: '#3B2A1A', opacity: 0.6 }}><strong>Sources:</strong> The Peter Attia Drive · Huberman Lab (Dr. Mary Claire Haver, June 2024) · The Dr. Louise Newson Podcast · FoundMyFitness · National Center for Health Research · Georgetown University</p>
          <p className="text-sm mt-2" style={{ color: '#3B2A1A', opacity: 0.5 }}>Disclaimer: I am not a doctor. This is curated research, not medical advice. Always work with a qualified healthcare provider.</p>
        </div>
      </div>
    </div>
  );
}