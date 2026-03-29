export default function CardiovascularPost() {
  const experts = [
    {
      color: '#4a9eff',
      name: 'Peter Attia',
      role: 'Menopause as metabolic inflection point',
      text: 'Attia frames menopause as a metabolic inflection point — not a gradual wind-down but a hard pivot in cardiovascular trajectory. He advocates for aggressive lipid monitoring starting in perimenopause, specifically LDL-P and ApoB, not just standard LDL-C. On HRT, he argues the critical window is the 10 years post-menopause, when estrogen can still protect the cardiovascular system before plaques calcify and the opportunity closes.',
    },
    {
      color: '#7D9B76',
      name: 'Dr. Mary Claire Haver',
      role: 'Cardiovascular risk is undertreated in menopause',
      text: 'Haver is direct: most GPs are not screening menopausal women correctly for cardiovascular risk. Standard lipid panels miss the picture. She calls out the failure to test LDL-P, ApoB, and hsCRP as a systemic gap in women\'s healthcare. On HRT, she emphasizes timing — estrogen started early in the menopausal transition has meaningful cardiovascular benefit. Waiting until symptoms are severe or until something bad happens misses the window.',
    },
    {
      color: '#C4622D',
      name: 'Dr. Vonda Wright',
      role: 'It is all connected — muscle, bone, and heart',
      text: 'Wright coined the term musculoskeletal syndrome of menopause and argues that the cardiovascular and musculoskeletal systems share the same hormonal infrastructure. Her research shows resistance training reduces cardiovascular risk by 30-35% in postmenopausal women — not because it burns calories, but because muscle tissue is metabolically active, improves insulin sensitivity, and reduces systemic inflammation. She testified before the FDA in 2025 on women\'s access to estrogen therapy.',
    },
    {
      color: '#9b59b6',
      name: 'Dr. JoAnn Manson',
      role: 'Harvard cardiologist — led the WHI reanalysis',
      text: 'Manson led the reanalysis of the Women\'s Health Initiative study that changed the conversation. Her findings established the timing hypothesis: HRT started within 10 years of menopause (or before age 60) appears to reduce cardiovascular risk. Started later — more than 10 years post-menopause — the benefit disappears and may reverse. She emphasizes that women should not read the WHI headline as a blanket warning. Age, timing, and formulation all matter.',
    },
  ];

  const agrees = [
    'Menopause transition accelerates cardiovascular risk independent of aging',
    'The 10-year window after menopause is critical — act early or lose the opportunity',
    'Most women are not adequately screened; standard panels miss the real picture',
    'Resistance training significantly and measurably reduces cardiovascular risk',
    'Diet and inflammation reduction matter more post-menopause than pre-menopause',
  ];

  const diverges = [
    'Whether HRT definitively reduces cardiovascular events — timing hypothesis is compelling but not universally accepted',
    'How aggressively to treat borderline lipid numbers in women without prior cardiac events',
    'The role of statins in postmenopausal women with no prior cardiovascular events',
  ];

  const markers = [
    { name: 'LDL-P', detail: 'LDL particle number — more predictive than LDL-C alone', note: 'Ask for NMR lipoprofile or equivalent' },
    { name: 'ApoB', detail: 'Apolipoprotein B — best single predictor of cardiovascular risk', note: 'Target: below 90 mg/dL (ideally below 80)' },
    { name: 'A1C + fasting glucose', detail: 'Tracks insulin resistance trajectory', note: 'Catches the metabolic shift early' },
    { name: 'hsCRP', detail: 'High-sensitivity C-reactive protein — systemic inflammation marker', note: 'Target: below 1.0 mg/L' },
    { name: 'Homocysteine', detail: 'Elevated levels damage arterial walls and accelerate atherosclerosis', note: 'Target: below 10 µmol/L' },
    { name: 'Blood pressure trend', detail: 'Postmenopausal BP rises ~1-2 mmHg per year during transition', note: 'Track over time, not just one reading' },
    { name: 'Waist circumference', detail: 'Visceral fat proxy — more meaningful than weight or BMI', note: 'Target: below 35 inches for women' },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF4EC' }}>
      <div className="max-w-3xl mx-auto px-4 pt-8">
        <a href="/health" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70" style={{ color: '#7D9B76' }}>← Back to Health</a>
      </div>

      {/* Hero */}
      <div className="py-16" style={{ backgroundColor: '#FAF4EC', borderBottom: '4px solid #C4622D' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6" style={{ backgroundColor: '#FAF4EC', color: '#C4622D', border: '1px solid #C4622D' }}>Heart Health</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#3B2A1A' }}>The Heart Danger Nobody Warns You About: How Menopause Affects Your Cardiovascular Risk</h1>
          <p className="text-lg" style={{ color: '#3B2A1A', opacity: 0.7 }}>By Siri · March 2026 · 12 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">

        {/* Opening */}
        <p className="text-xl mb-6 font-medium" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
          Heart disease kills more women than all cancers combined. And menopause accelerates the risk. Most women do not know this.
        </p>
        <p className="mb-8" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
          We talk about hot flashes. We talk about sleep. We talk about mood. Almost nobody sits down with a woman in perimenopause and says: your cardiovascular system is about to go through a major shift, and the next 10 years are the window that matters. I was not told. You probably were not either.
        </p>

        {/* Estrogen Effect */}
        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#C4622D' }}>The Estrogen Effect: What Your Heart Was Counting On</h2>
        <p className="mb-4" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
          Estrogen was not just a reproductive hormone. It was a full-body systems manager — and your cardiovascular system relied on it more than you may realize.
        </p>
        <p className="mb-4" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
          Here is what estrogen was doing for your heart every single day before menopause:
        </p>
        <ul className="mb-6 space-y-3" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
          <li className="flex gap-3"><span style={{ color: '#C4622D', fontWeight: 700 }}>→</span><span><strong>LDL receptor expression:</strong> Estrogen increases LDL receptors in liver cells, pulling LDL cholesterol out of circulation. Without it, LDL builds up.</span></li>
          <li className="flex gap-3"><span style={{ color: '#C4622D', fontWeight: 700 }}>→</span><span><strong>HDL synthesis:</strong> Estrogen upregulates the proteins that make HDL particles — the so-called "good" cholesterol. As estrogen drops, so does your HDL.</span></li>
          <li className="flex gap-3"><span style={{ color: '#C4622D', fontWeight: 700 }}>→</span><span><strong>Endothelial function:</strong> Estrogen promotes nitric oxide production, which keeps your artery walls flexible and responsive. Stiffer arteries mean higher blood pressure and faster plaque accumulation.</span></li>
          <li className="flex gap-3"><span style={{ color: '#C4622D', fontWeight: 700 }}>→</span><span><strong>Inflammation control:</strong> Estrogen suppresses inflammatory signaling molecules like IL-6 and TNF-α. Without it, chronic low-grade inflammation increases — a major driver of atherosclerosis.</span></li>
        </ul>
        <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: 'white', border: '1px solid #e8ddd0' }}>
          <p className="font-semibold mb-3" style={{ color: '#C4622D' }}>SWAN Study Numbers (Matthews et al., 2013, Circulation)</p>
          <p className="text-sm mb-2" style={{ color: '#3B2A1A', opacity: 0.7 }}>3,302 women tracked through the full menopausal transition:</p>
          <div className="space-y-2 mt-4">
            <div className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid #f0ece6' }}>
              <span style={{ color: '#3B2A1A', fontWeight: 600 }}>LDL cholesterol</span>
              <span className="font-bold" style={{ color: '#e74c3c' }}>+9.6 mg/dL</span>
            </div>
            <div className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid #f0ece6' }}>
              <span style={{ color: '#3B2A1A', fontWeight: 600 }}>HDL cholesterol</span>
              <span className="font-bold" style={{ color: '#e74c3c' }}>−3.3 mg/dL</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span style={{ color: '#3B2A1A', fontWeight: 600 }}>Triglycerides</span>
              <span className="font-bold" style={{ color: '#e74c3c' }}>+11.8 mg/dL</span>
            </div>
          </div>
          <p className="text-sm mt-4" style={{ color: '#3B2A1A', opacity: 0.6 }}>The Framingham Offspring Study found that menopause itself — independent of age — accounts for roughly one-third of the increase in LDL and decrease in HDL.</p>
        </div>

        {/* Metabolic Domino */}
        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#C4622D' }}>The Metabolic Domino: Insulin, Fat, and Blood Sugar</h2>
        <p className="mb-4" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
          The lipid changes are just the beginning. Estrogen loss also triggers a metabolic cascade that most doctors do not connect to cardiovascular risk in their conversations with patients.
        </p>
        <div className="grid gap-4 mb-8">
          <div className="rounded-xl p-5" style={{ backgroundColor: 'white', borderLeft: '4px solid #4a9eff' }}>
            <p className="font-bold mb-1" style={{ color: '#4a9eff' }}>Insulin resistance increases 10–15%</p>
            <p style={{ color: '#3B2A1A', lineHeight: '1.7' }}>Fasting insulin levels rise during the menopausal transition even when controlling for BMI changes. Estrogen normally supports glucose transporter (GLUT4) expression — without it, cells become less responsive to insulin.</p>
          </div>
          <div className="rounded-xl p-5" style={{ backgroundColor: 'white', borderLeft: '4px solid #9b59b6' }}>
            <p className="font-bold mb-1" style={{ color: '#9b59b6' }}>Visceral fat increases 20–30%</p>
            <p style={{ color: '#3B2A1A', lineHeight: '1.7' }}>Estrogen loss causes preferential fat storage around the abdomen and organs — not under the skin. Visceral fat is metabolically active, inflammatory, and strongly linked to cardiovascular events. This happens even in women whose weight stays stable.</p>
          </div>
          <div className="rounded-xl p-5" style={{ backgroundColor: 'white', borderLeft: '4px solid #C4622D' }}>
            <p className="font-bold mb-1" style={{ color: '#C4622D' }}>A1C and glucose tolerance shift</p>
            <p style={{ color: '#3B2A1A', lineHeight: '1.7' }}>The SWAN study documented a mean A1C increase of 0.1–0.15% through the menopausal transition — small in absolute terms, but associated with measurably increased CVD risk. Type 2 diabetes incidence increases approximately 3-fold in postmenopausal women compared to premenopausal women of the same age.</p>
          </div>
        </div>

        {/* Expert Cards */}
        <h2 className="text-2xl font-bold mt-10 mb-6" style={{ color: '#C4622D' }}>What the Experts Say</h2>
        {experts.map((e, i) => (
          <div key={i} className="rounded-xl p-6 mb-4 border-l-4" style={{ backgroundColor: 'white', borderLeftColor: e.color }}>
            <div className="font-bold text-lg mb-1" style={{ color: e.color }}>{e.name}</div>
            <div className="text-sm mb-3 italic" style={{ color: '#3B2A1A', opacity: 0.6 }}>{e.role}</div>
            <p style={{ color: '#3B2A1A', lineHeight: '1.7' }}>{e.text}</p>
          </div>
        ))}

        {/* Agree */}
        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#C4622D' }}>Where They Agree</h2>
        <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#f0f7f0', border: '1px solid #7D9B76' }}>
          {agrees.map((item, i) => (
            <div key={i} className="flex items-start gap-3 mb-3">
              <span style={{ color: '#7D9B76' }}>✅</span>
              <p style={{ color: '#3B2A1A', lineHeight: '1.7' }}>{item}</p>
            </div>
          ))}
        </div>

        {/* Diverge */}
        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#C4622D' }}>Where They Diverge</h2>
        <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#fff8f0', border: '1px solid #D4A853' }}>
          {diverges.map((item, i) => (
            <div key={i} className="flex items-start gap-3 mb-3">
              <span style={{ color: '#D4A853' }}>⚡</span>
              <p style={{ color: '#3B2A1A', lineHeight: '1.7' }}>{item}</p>
            </div>
          ))}
        </div>

        {/* Numbers to Track */}
        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#C4622D' }}>The Numbers You Should Track</h2>
        <p className="mb-6" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
          A standard annual lipid panel is not enough. These are the markers that actually tell the story for women in perimenopause and beyond:
        </p>
        <div className="rounded-xl overflow-hidden mb-8" style={{ border: '1px solid #e8ddd0' }}>
          {markers.map((m, i) => (
            <div key={i} className="px-6 py-4" style={{ backgroundColor: i % 2 === 0 ? 'white' : '#FAF4EC', borderBottom: i < markers.length - 1 ? '1px solid #e8ddd0' : 'none' }}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                <div>
                  <span className="font-bold" style={{ color: '#C4622D' }}>{m.name}</span>
                  <p className="text-sm mt-1" style={{ color: '#3B2A1A', lineHeight: '1.6' }}>{m.detail}</p>
                </div>
                <span className="text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap self-start mt-1" style={{ backgroundColor: '#f0f7f0', color: '#7D9B76', border: '1px solid #7D9B76' }}>{m.note}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="mb-8 text-sm" style={{ color: '#3B2A1A', opacity: 0.7, lineHeight: '1.7' }}>
          Note: LDL-P requires an NMR LipoProfile test or equivalent. Not all labs offer it by default — you may need to ask specifically. ApoB is increasingly available on standard panels but still not universally ordered. hsCRP and homocysteine are separate add-ons. Ask for them by name.
        </p>

        {/* My Take */}
        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#C4622D' }}>My Take — And My Actual Numbers</h2>
        <div className="rounded-xl p-8 mb-8" style={{ backgroundColor: '#FAF4EC', border: '2px solid #C4622D' }}>
          <p className="mb-4" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
            I got curious about my own heart health last year and pushed for a comprehensive panel — not just the standard cholesterol numbers. Four panels. Dozens of markers. Here is what came back, and what it actually means.
          </p>

          <div className="rounded-lg p-5 mb-4" style={{ backgroundColor: 'white', border: '1px solid #e8ddd0' }}>
            <p className="font-semibold mb-1" style={{ color: '#7D9B76' }}>✅ Standard Cholesterol — Looked Perfect</p>
            <p className="text-sm mb-3" style={{ color: '#3B2A1A', opacity: 0.7 }}>A doctor glancing at this would say: you are doing great.</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm" style={{ color: '#3B2A1A' }}>
              <span>Total Cholesterol</span><span className="font-medium" style={{ color: '#7D9B76' }}>165 mg/dL ✓</span>
              <span>LDL-C</span><span className="font-medium" style={{ color: '#7D9B76' }}>71 mg/dL ✓</span>
              <span>Triglycerides</span><span className="font-medium" style={{ color: '#7D9B76' }}>72 mg/dL ✓</span>
              <span>TC/HDL Ratio</span><span className="font-medium" style={{ color: '#7D9B76' }}>2.1 ✓</span>
              <span>ApoB</span><span className="font-medium" style={{ color: '#7D9B76' }}>65 mg/dL ✓</span>
              <span>Lp(a)</span><span className="font-medium" style={{ color: '#7D9B76' }}>20 nmol/L ✓</span>
            </div>
          </div>

          <div className="rounded-lg p-5 mb-4" style={{ backgroundColor: 'white', border: '1px solid #e8ddd0' }}>
            <p className="font-semibold mb-1" style={{ color: '#C4622D' }}>⚠️ Particle Breakdown — Where It Got Interesting</p>
            <p className="text-sm mb-3" style={{ color: '#3B2A1A', opacity: 0.7 }}>Same blood draw. Very different story.</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm" style={{ color: '#3B2A1A' }}>
              <span>LDL Small (dense particles)</span><span className="font-medium" style={{ color: '#C4622D' }}>162 nmol/L ↑ above range</span>
              <span>HDL Large (protective)</span><span className="font-medium" style={{ color: '#C4622D' }}>5858 nmol/L ↓ below range</span>
              <span>hs-CRP (inflammation)</span><span className="font-medium" style={{ color: '#D4A853' }}>1.2 mg/L — mildly elevated</span>
            </div>
          </div>

          <div className="rounded-lg p-5 mb-4" style={{ backgroundColor: 'white', border: '1px solid #e8ddd0' }}>
            <p className="font-semibold mb-1" style={{ color: '#D4A853' }}>🔬 Metabolic Panel — One Flag</p>
            <p className="text-sm mb-3" style={{ color: '#3B2A1A', opacity: 0.7 }}>Glucose and insulin were fine. One marker caught my attention.</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm" style={{ color: '#3B2A1A' }}>
              <span>Fasting Glucose</span><span className="font-medium" style={{ color: '#7D9B76' }}>93 mg/dL ✓</span>
              <span>Fasting Insulin</span><span className="font-medium" style={{ color: '#7D9B76' }}>8.9 µIU/mL ✓</span>
              <span>HbA1c</span><span className="font-medium" style={{ color: '#D4A853' }}>5.7% — borderline (ADA prediabetes threshold)</span>
            </div>
          </div>

          <div className="rounded-lg p-5 mb-4" style={{ backgroundColor: 'white', border: '1px solid #e8ddd0' }}>
            <p className="font-semibold mb-1" style={{ color: '#7D9B76' }}>✅ Nutrients — Mostly Good, Room to Optimize</p>
            <p className="text-sm mb-3" style={{ color: '#3B2A1A', opacity: 0.7 }}>All in range technically — but &apos;in range&apos; and &apos;optimal&apos; are not the same thing.</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm" style={{ color: '#3B2A1A' }}>
              <span>Vitamin D</span><span className="font-medium" style={{ color: '#D4A853' }}>31 ng/mL (optimal is 40–60)</span>
              <span>Omega 6/3 Ratio</span><span className="font-medium" style={{ color: '#D4A853' }}>6.7 (optimal is under 4)</span>
              <span>Omega-3 Total</span><span className="font-medium" style={{ color: '#7D9B76' }}>6.6% ✓</span>
              <span>Magnesium</span><span className="font-medium" style={{ color: '#7D9B76' }}>5.4 mg/dL ✓</span>
              <span>Zinc</span><span className="font-medium" style={{ color: '#7D9B76' }}>77 mcg/dL ✓</span>
            </div>
          </div>

          <div className="rounded-lg p-5 mb-4" style={{ backgroundColor: 'white', border: '1px solid #e8ddd0' }}>
            <p className="font-semibold mb-1" style={{ color: '#C4622D' }}>🔑 Hormones — The Root Cause</p>
            <p className="text-sm mb-3" style={{ color: '#3B2A1A', opacity: 0.7 }}>This is the panel that explains why everything else is shifting.</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm" style={{ color: '#3B2A1A' }}>
              <span>AMH (ovarian reserve)</span><span className="font-medium" style={{ color: '#C4622D' }}>0.04 ng/mL — essentially depleted</span>
              <span>FSH</span><span className="font-medium" style={{ color: '#D4A853' }}>21.1 mIU/mL — elevated (perimenopause)</span>
              <span>LH</span><span className="font-medium" style={{ color: '#D4A853' }}>21.2 mIU/mL — elevated</span>
              <span>Estradiol (E2)</span><span className="font-medium" style={{ color: '#D4A853' }}>167 pg/mL — fluctuating, not stable</span>
              <span>Testosterone, Total</span><span className="font-medium" style={{ color: '#7D9B76' }}>32 ng/dL ✓</span>
              <span>SHBG</span><span className="font-medium" style={{ color: '#D4A853' }}>83 nmol/L — high (binds free hormones)</span>
              <span>DHEA Sulfate</span><span className="font-medium" style={{ color: '#7D9B76' }}>176 mcg/dL ✓</span>
            </div>
          </div>

          <div className="rounded-lg p-5 mb-5" style={{ backgroundColor: 'white', border: '1px solid #e8ddd0' }}>
            <p className="font-semibold mb-1" style={{ color: '#7D9B76' }}>✅ Thyroid — Completely Clean</p>
            <p className="text-sm mb-3" style={{ color: '#3B2A1A', opacity: 0.7 }}>No autoimmune markers. No dysfunction. The thyroid is not why I am tired.</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm" style={{ color: '#3B2A1A' }}>
              <span>TSH</span><span className="font-medium" style={{ color: '#7D9B76' }}>1.31 mIU/L ✓ (optimal 1–2)</span>
              <span>Free T4</span><span className="font-medium" style={{ color: '#7D9B76' }}>1.1 ng/dL ✓</span>
              <span>Free T3</span><span className="font-medium" style={{ color: '#7D9B76' }}>3.0 pg/mL ✓</span>
              <span>TPO Antibodies</span><span className="font-medium" style={{ color: '#7D9B76' }}>1 IU/mL ✓ (no Hashimoto&apos;s)</span>
              <span>TgAb Antibodies</span><span className="font-medium" style={{ color: '#7D9B76' }}>&lt;1 IU/mL ✓</span>
            </div>
          </div>

          <p className="mb-4" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
            Looking at all six panels together, everything connects. My AMH is nearly zero. My FSH and LH are elevated — my brain is working overtime trying to stimulate ovaries that are winding down. My estradiol is still present but fluctuating wildly, not stable. That hormonal volatility is the root cause behind every other signal: the particle shifts in my lipids, the HbA1c creeping to the borderline, the mild inflammation, the Vitamin D and omega ratios that could be better.
          </p>
          <p className="mb-4" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
            None of this is a crisis. It is a map. And the thyroid being completely clean is actually useful information — it rules out one common cause of fatigue and points more clearly at the hormonal transition as the driver.
          </p>
          <p className="mb-4" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
            A standard panel would have sent me home with a clean bill of health. And I would have had no idea any of this was quietly shifting.
          </p>
          <p className="font-semibold" style={{ color: '#C4622D' }}>
            I am not panicking. I am paying attention. There is a big difference — and this is exactly what informed prevention looks like at 50.
          </p>
        </div>

        {/* CTA */}
        <div className="rounded-xl p-8 text-center" style={{ backgroundColor: '#7D9B76' }}>
          <h3 className="text-xl font-bold text-white mb-3">One Thing to Do This Week</h3>
          <p className="text-white mb-4" style={{ opacity: 0.92, lineHeight: '1.7' }}>
            Ask your doctor for a full cardiovascular panel — specifically: <strong>LDL-P, ApoB, hsCRP, A1C, and homocysteine</strong>. Print this list and bring it to your appointment. If your doctor is unfamiliar with these markers, find a menopause-literate cardiologist or internist.
          </p>
          <div className="inline-block px-8 py-3 rounded-full font-bold" style={{ backgroundColor: '#FAF4EC', color: '#7D9B76' }}>
            Print this marker list
          </div>
        </div>

        {/* Sources + Disclaimer */}
        <div className="mt-12 pt-8 border-t" style={{ borderColor: '#e8ddd0' }}>
          <p className="text-sm" style={{ color: '#3B2A1A', opacity: 0.6 }}>
            <strong>Sources:</strong> Matthews et al. (2013) SWAN Study, <em>Circulation</em> · Framingham Heart Study (Castelli et al., 1986) · Nurses&apos; Health Study · INTERHEART Study · Multi-Ethnic Study of Atherosclerosis (MESA) · Dr. JoAnn Manson WHI Reanalysis · Peter Attia Drive podcast · drvondawright.com · Janssen et al. (2010) <em>Journal of Clinical Endocrinology &amp; Metabolism</em> · Janssen et al. (2013) <em>Diabetes Care</em>
          </p>
          <p className="text-sm mt-2" style={{ color: '#3B2A1A', opacity: 0.5 }}>Disclaimer: I am not a doctor. This is curated research and personal perspective, not medical advice. Always work with a qualified healthcare provider for screening decisions and treatment.</p>
        </div>
      </div>
    </div>
  );
}
