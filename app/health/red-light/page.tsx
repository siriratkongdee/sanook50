export default function RedLightPost() {
  const proExperts = [
    { color: '#C4622D', name: 'Dr. Michael Hamblin', role: 'Harvard Medical School — 400+ photobiomodulation papers', text: 'The most published researcher in photobiomodulation. Hamblin has spent decades documenting how specific wavelengths activate cytochrome c oxidase in mitochondria, triggering ATP production and reducing oxidative stress. His work underpins nearly every clinical application of red light therapy — from wound healing to traumatic brain injury.' },
    { color: '#7D9B76', name: 'Dr. Rhonda Patrick', role: 'FoundMyFitness — cautious but positive on skin and muscle', text: 'Patrick is careful not to overclaim, but she cites compelling evidence for skin collagen remodeling, muscle recovery acceleration, and wound healing. She consistently emphasizes that the dose-response curve is biphasic — more is not always better — and that panel distance and output matter enormously.' },
    { color: '#D4A853', name: 'Dr. Andrew Huberman', role: 'Huberman Lab — 670nm for eye health and circadian rhythm', text: 'Huberman has discussed red light at length, particularly 670nm wavelengths for retinal mitochondrial function. He also frames morning red light exposure as a circadian anchor — not unlike sunlight — that affects cortisol timing, alertness, and sleep quality later in the day. He recommends eye protection during high-intensity sessions but is open on the low-intensity 670nm eye application.' },
    { color: '#4a9eff', name: 'Dr. Glen Jeffrey', role: 'UCL Institute of Ophthalmology — 2021 landmark eye study', text: 'Jeffrey published a landmark 2021 study showing that just 3 minutes of 670nm red light in the morning improved color vision in adults over 40 by an average of 20%, with effects lasting up to a week. The hypothesis: aging mitochondria in the retina respond to red light the same way mitochondria elsewhere do — by producing more ATP and slowing degenerative decline. This study opened a serious scientific conversation about photobiomodulation and vision.' },
  ];

  const agrees = [
    'The mechanism is real — cytochrome c oxidase in mitochondria absorbs red and near-infrared wavelengths',
    'Skin has the strongest clinical evidence: collagen, wound healing, and inflammation reduction are well-documented',
    'Morning is optimal — aligns with circadian biology and cortisol patterns',
    'Eyes should be protected during high-intensity near-infrared sessions',
    'Consistency over intensity — daily short sessions beat infrequent long ones',
  ];

  const diverges = [
    'Brain and cognitive benefits: mechanistically plausible but limited in robust human RCTs; most studies are small or in clinical populations',
    'At-home device power vs. clinical: consumer panels vary wildly in irradiance — many underdeliver compared to research devices',
    'Eye health: Dr. Jeffrey\'s retinal work is gaining traction, but mainstream ophthalmology remains skeptical and does not yet endorse it',
    'Biphasic dose response: too much light can be inhibitory rather than stimulatory — the optimal dose window is debated',
  ];

  const cautious = [
    { name: 'Dr. Lisa Ostrin — University of Houston (2024)', text: 'Ostrin raised concerns about consumer red light devices marketed for myopia control in children, citing insufficient evidence and potential for overuse. Important context: her warnings address close-held devices aimed at the eye, not whole-body panels used at a distance. Panel-based red light at 30cm+ is a different exposure category, but her caution is a useful reminder that self-experimentation with eyes warrants care.' },
    { name: 'Stanford Dermatology', text: 'Stanford dermatologists acknowledge that photobiomodulation has legitimate clinical applications but caution that at-home devices are inconsistently regulated, rarely independently tested, and marketed with overclaiming. Their main concern is that consumers substitute unproven devices for evidence-based dermatology treatments — not that the mechanism itself is flawed.' },
    { name: 'General Ophthalmology Community', text: 'Mainstream ophthalmology has not endorsed red light therapy for vision improvement or myopia. The community notes that peer-reviewed evidence from Dr. Jeffrey\'s group is intriguing but preliminary — a single study is not clinical consensus. Until larger trials replicate the results, most eye doctors will not recommend it.' },
  ];

  const protocol = [
    { phase: 'Phase 1: Face & Skin', time: '8-10 min', distance: '15-30cm', wave: '660nm', emoji: '🌸', warning: 'If you have melasma: cover those areas. Red wavelengths (660nm especially) can temporarily activate melanocytes and darken existing pigmentation. I learned this the hard way — I now cover above my lip with my hand or a small cloth during face sessions.', benefit: 'Stimulates collagen and elastin remodeling. Apply hyaluronic acid serum immediately after while skin is warm — absorption improves with increased blood flow.' },
    { phase: 'Phase 2: Scalp & Hair', time: '5-10 min', distance: '2-5cm (as close as possible)', wave: '630-660nm', emoji: '💆', warning: null, benefit: 'Stimulates hair follicles and increases scalp microcirculation. Tip your head toward the panel. Realistic timeline is 8-12 weeks of consistency before visible changes — do not evaluate early.' },
    { phase: 'Phase 3: Brain, Mood & Eyes', time: '10 min', distance: 'As close as comfortable to forehead', wave: '810nm (NIR)', emoji: '🧠', warning: '⚠️ SAFETY: Do NOT stare directly into the panel — ever. I close my eyes or use protective goggles. I am personally tracking my vision over 90 days after reading the Jeffrey 2021 study. I do very brief (under 1 min), low-intensity exposure to the 670nm range only — eyes looking away, never directly at the panel. This is experimental self-tracking, not a recommendation.', benefit: '810nm near-infrared penetrates the skull most effectively. Research suggests improved cerebral blood flow and reduced neuroinflammation. Morning sessions also help set circadian rhythm — similar to morning light exposure.' },
    { phase: 'Phase 4: Back Pain', time: '10-15 min (as needed)', distance: '15-30cm', wave: '850nm + 940nm', emoji: '🔙', warning: null, benefit: 'Deep NIR wavelengths penetrate muscle, fascia, and spinal tissue. Reduces inflammatory cytokines, relaxes chronic muscle tension, and improves tissue oxygenation. My morning stiffness is measurably better at week three.' },
  ];

  const results = [
    { metric: 'Sleep quality', result: 'Noticeably better on days I use the panel' },
    { metric: 'Morning brain fog', result: 'Shorter — feel sharper earlier in the day' },
    { metric: 'Back stiffness', result: 'Real improvement, especially after consistent daily use' },
    { metric: 'Melasma', result: 'Darkened initially — now covering that area, stable since' },
    { metric: 'Vision tracking', result: 'Ongoing 90-day log — no conclusions yet' },
    { metric: 'Hair growth', result: 'Too early to assess — check back at week 12' },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF4EC' }}>

      <div className="max-w-3xl mx-auto px-4 pt-8">
        <a href="/health" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70" style={{ color: '#7D9B76' }}>← Back to Health</a>
      </div>

      <div className="py-16" style={{ backgroundColor: '#FAF4EC', borderBottom: '4px solid #C4622D' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6" style={{ backgroundColor: '#FAF4EC', color: '#C4622D', border: '1px solid #C4622D' }}>Wellness</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#3B2A1A' }}>Red Light Therapy at 50: What the Science Actually Says and My BQ90 Pro Protocol</h1>
          <p className="text-lg" style={{ color: '#3B2A1A', opacity: 0.7 }}>By Siri · March 2026 · 10 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">

        <p className="text-xl mb-8 font-medium" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>I have a Bestqool BQ90 Pro panel in my living room. Three weeks of daily morning sessions. I went deep on the research before I started — here is the honest breakdown of who believes in this, what they agree on, where they fight, and what I have noticed so far.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#C4622D' }}>The Mechanism: Why This Is Not Pseudoscience</h2>
        <p className="mb-4" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>Red light therapy — formally photobiomodulation (PBM) — works by delivering specific wavelengths of light (typically 630-850nm) that are absorbed by cytochrome c oxidase, an enzyme in your mitochondria. This activates the electron transport chain, increasing ATP production, reducing oxidative stress, and triggering downstream repair and anti-inflammatory responses.</p>
        <p className="mb-8" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>This is not homeopathy. The mechanism is documented. The debate is about which applications have robust human trial evidence — and which are extrapolated too aggressively from cell and animal studies.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#C4622D' }}>My Device: Bestqool BQ90 Pro — 6 Wavelengths</h2>
        <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: 'white', border: '1px solid #e8ddd0' }}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold mb-2" style={{ color: '#C4622D' }}>Red Light</p>
              <p style={{ color: '#3B2A1A' }}>630nm — surface skin, collagen</p>
              <p style={{ color: '#3B2A1A' }}>660nm — deeper skin, healing</p>
              <p style={{ color: '#3B2A1A' }}>680nm — mid-layer skin repair</p>
            </div>
            <div>
              <p className="font-semibold mb-2" style={{ color: '#7D9B76' }}>Near-Infrared</p>
              <p style={{ color: '#3B2A1A' }}>810nm — brain penetration, neurons</p>
              <p style={{ color: '#3B2A1A' }}>850nm — muscles, joints, anti-inflammatory</p>
              <p style={{ color: '#3B2A1A' }}>940nm — deep tissue, oxygenation</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6" style={{ color: '#C4622D' }}>What the Experts Say: The Pro-PBM Case</h2>
        {proExperts.map((e, i) => (
          <div key={i} className="rounded-xl p-6 mb-4 border-l-4" style={{ backgroundColor: 'white', borderLeftColor: e.color }}>
            <div className="font-bold text-lg mb-1" style={{ color: e.color }}>{e.name}</div>
            <div className="text-sm mb-3 italic" style={{ color: '#3B2A1A', opacity: 0.6 }}>{e.role}</div>
            <p style={{ color: '#3B2A1A', lineHeight: '1.7' }}>{e.text}</p>
          </div>
        ))}

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#C4622D' }}>Where They Agree</h2>
        <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#f0f7f0', border: '1px solid #7D9B76' }}>
          {agrees.map((item, i) => (
            <div key={i} className="flex items-start gap-3 mb-3">
              <span style={{ color: '#7D9B76' }}>✅</span>
              <p style={{ color: '#3B2A1A', lineHeight: '1.7' }}>{item}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#C4622D' }}>Where They Diverge</h2>
        <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#fff8f0', border: '1px solid #D4A853' }}>
          {diverges.map((item, i) => (
            <div key={i} className="flex items-start gap-3 mb-3">
              <span style={{ color: '#D4A853' }}>⚡</span>
              <p style={{ color: '#3B2A1A', lineHeight: '1.7' }}>{item}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#C4622D' }}>Eye Health: The Jeffrey 2021 Study</h2>
        <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: 'white', border: '1px solid #e8ddd0', borderLeftWidth: '4px', borderLeftColor: '#4a9eff' }}>
          <p className="font-semibold mb-2" style={{ color: '#4a9eff' }}>Dr. Glen Jeffrey — UCL, 2021</p>
          <p className="mb-3" style={{ color: '#3B2A1A', lineHeight: '1.7' }}>Adults over 40 used a small 670nm LED device for 3 minutes each morning. After two weeks, color contrast sensitivity improved by ~20% and effects persisted for at least a week after stopping. The hypothesis: mitochondria in aging retinal cells respond to red light the same way mitochondria elsewhere do. The retina has the highest mitochondrial density of any tissue in the body.</p>
          <p className="text-sm italic" style={{ color: '#3B2A1A', opacity: 0.65 }}>Jeffery et al., The Journals of Gerontology, 2021</p>
        </div>
        <div className="rounded-xl p-4 mb-8" style={{ backgroundColor: '#fff8f0', border: '1px solid #D4A853' }}>
          <p className="text-sm font-semibold mb-1" style={{ color: '#D4A853' }}>My personal tracking note</p>
          <p className="text-sm" style={{ color: '#3B2A1A', lineHeight: '1.7' }}>I am logging my vision informally over 90 days. I do brief low-intensity exposure in the 670nm range — eyes looking away, never directly at the panel. This is personal self-tracking. It is not a recommendation. <strong>Do NOT stare directly into any panel.</strong></p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6" style={{ color: '#C4622D' }}>Who Should Be Cautious</h2>
        <p className="mb-6" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>Balance matters. Not every expert endorses red light therapy, and specific populations warrant real caution.</p>
        {cautious.map((e, i) => (
          <div key={i} className="rounded-xl p-6 mb-4 border-l-4" style={{ backgroundColor: 'white', borderLeftColor: '#D4A853' }}>
            <div className="font-bold text-lg mb-2" style={{ color: '#3B2A1A' }}>{e.name}</div>
            <p style={{ color: '#3B2A1A', lineHeight: '1.7', opacity: 0.85 }}>{e.text}</p>
          </div>
        ))}

        <h2 className="text-2xl font-bold mt-10 mb-6" style={{ color: '#C4622D' }}>My Complete Morning Protocol (~25-30 min)</h2>
        {protocol.map((p, i) => (
          <div key={i} className="rounded-xl p-6 mb-4 border-l-4" style={{ backgroundColor: 'white', borderLeftColor: '#C4622D' }}>
            <div className="font-bold text-lg mb-1" style={{ color: '#C4622D' }}>{p.emoji} {p.phase}</div>
            <div className="text-sm mb-3" style={{ color: '#3B2A1A', opacity: 0.6 }}>⏱ {p.time} · 📏 {p.distance} · 💡 {p.wave}</div>
            {p.warning && (
              <div className="rounded-lg p-3 mb-3 text-sm" style={{ backgroundColor: '#fff8f0', border: '1px solid #D4A853', color: '#3B2A1A' }}>
                {p.warning}
              </div>
            )}
            <p style={{ color: '#3B2A1A', lineHeight: '1.7' }}>{p.benefit}</p>
          </div>
        ))}

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#C4622D' }}>The Rules That Actually Matter</h2>
        <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#f0f7f0', border: '1px solid #7D9B76' }}>
          {[
            'Morning is best — aligns with circadian biology and cortisol timing',
            'Bare skin only — even light fabric blocks meaningful irradiance',
            'No retinol or AHAs 24h before or after face sessions',
            'Consistency beats intensity — 10 min daily beats 30 min twice a week',
            'Eyes closed or use goggles during face and brain sessions — never stare directly at the panel',
          ].map((r, i) => (
            <div key={i} className="flex items-start gap-3 mb-2">
              <span style={{ color: '#7D9B76' }}>✓</span>
              <p style={{ color: '#3B2A1A' }}>{r}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#C4622D' }}>What I Have Noticed So Far (Week 3)</h2>
        <div className="rounded-xl p-8 mb-8" style={{ backgroundColor: '#FAF4EC', border: '2px solid #C4622D' }}>
          <p className="mb-6" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>I was skeptical going in. Three weeks later, I am a cautious convert — with the emphasis on cautious. Here is the honest log:</p>
          <div className="space-y-3">
            {results.map((item, i) => (
              <div key={i} className="flex gap-3">
                <span className="font-semibold shrink-0" style={{ color: '#C4622D', minWidth: '160px' }}>{item.metric}:</span>
                <span style={{ color: '#3B2A1A' }}>{item.result}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl p-8 text-center" style={{ backgroundColor: '#7D9B76' }}>
          <h3 className="text-xl font-bold text-white mb-3">One Thing to Do</h3>
          <p className="text-white opacity-90">If you already have a panel — commit to consistent morning sessions for 30 days, then evaluate. Consistency is everything with red light therapy. The research supports daily short sessions far more than occasional long ones.</p>
        </div>

        <div className="mt-12 pt-8 border-t" style={{ borderColor: '#e8ddd0' }}>
          <p className="text-sm mb-2" style={{ color: '#3B2A1A', opacity: 0.6 }}><strong>Sources:</strong> Dr. Glen Jeffrey UCL (Jeffery et al., The Journals of Gerontology, 2021) · Dr. Michael Hamblin, Harvard Medical School (multiple NIH/PubMed publications) · Huberman Lab · FoundMyFitness / Dr. Rhonda Patrick · Stanford Medicine (Feb 2025) · NIH/PubMed photobiomodulation research database</p>
          <p className="text-sm" style={{ color: '#3B2A1A', opacity: 0.5 }}>Disclaimer: I am not a doctor. This is my personal experience and curated research, not medical advice. Consult a qualified healthcare provider before starting any new therapy.</p>
        </div>

      </div>
    </div>
  );
}
