export default function HRTDosingPost() {
  const expertInsights = [
    { 
      color: '#7D9B76', 
      name: 'Dr. Louise Newson', 
      role: 'UK Menopause Specialist',
      text: 'You need estradiol above 250 pmol/L for health benefits — bone, cardiovascular, and cognitive protection. Below that, you get symptom relief but not systemic benefits. Absorption varies wildly. The only way to know is to test — 12 hours after application.'
    },
    { 
      color: '#4a9eff', 
      name: 'Kresser Institute', 
      role: 'Functional Medicine',
      text: 'Estradiol at 293 pg/mL looks normal on paper. But if your cycle runs 18–46 days, something is wrong. A single lab snapshot doesn't tell the whole story. Total testosterone can look "normal" while free testosterone is low if SHBG is above 100.'
    },
    { 
      color: '#C4622D', 
      name: 'SWAN Study', 
      role: '359 Women, 4-Year Follow-Up',
      text: 'Higher testosterone is associated with MORE visceral fat in women — the opposite of men. VAT increases 3.8% annually during menopause. At physiologic doses (35–45 ng/dL), benefits may outweigh risks. Above 70–100 ng/dL, you get VAT accumulation plus lipid harm.'
    },
    { 
      color: '#D4A853', 
      name: 'Meta-Analysis (73 Studies, 2022)', 
      role: 'Lipid Outcomes Research',
      text: 'Estrogen alone improves lipids — lower LDL, lower Lp(a), higher HDL. Add synthetic progestin, benefits are blunted. Micronized progesterone is better. Oral estrogen boosts HDL but raises triglycerides. Transdermal drops LDL without the TG spike.'
    },
    { 
      color: '#9b59b6', 
      name: 'Peter Attia', 
      role: 'Metabolic Health & Longevity',
      text: 'Menopause is a metabolic crisis. Women who start HRT within 10 years of menopause onset show 44% reduction in coronary disease risk. Start too late, after atherosclerosis progresses, and the timing advantage is lost. FSH rising above 10–12 on days 3–5 is an early warning.'
    },
  ];

  const keyActions = [
    'Get comprehensive hormones: estradiol, progesterone, total + free testosterone, SHBG, Free Androgen Index',
    'Test metabolic markers: LDL, HDL, triglycerides, ApoB, Lp(a), hsCRP',
    'Retest 6–8 weeks after any dose change',
    'Don\'t wait six months to find out something drifted'
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF4EC' }}>
      <div className="max-w-3xl mx-auto px-4 pt-8">
        <a href="/articles" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70" style={{ color: '#7D9B76' }}>
          ← Back to Articles
        </a>
      </div>

      {/* Hero Section */}
      <div className="py-16" style={{ backgroundColor: '#FAF4EC', borderBottom: '4px solid #7D9B76' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6" 
                style={{ backgroundColor: '#FAF4EC', color: '#7D9B76', border: '1px solid #7D9B76' }}>
            Hormones
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#3B2A1A' }}>
            HRT Is Not Set-and-Forget: How to Know If Your Hormones Are Actually Dialed In
          </h1>
          <p className="text-lg" style={{ color: '#3B2A1A', opacity: 0.7 }}>
            By Siri · April 2026 · 12 min read
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        
        {/* Opening */}
        <p className="text-xl mb-8 font-medium" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
          Most women on HRT are flying blind. Their doctor said "you should feel better" — and maybe they do. 
          But feeling better is not the same as being dosed correctly.
        </p>

        <p className="mb-8" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
          The gap between those two things is where the real damage happens: bone loss, cardiovascular risk, 
          and metabolic dysfunction quietly accelerating while your symptoms feel manageable.
        </p>

        <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#fff8f0', border: '2px solid #D4A853' }}>
          <p className="font-semibold mb-2" style={{ color: '#D4A853' }}>My Wake-Up Call</p>
          <p style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
            I found this out the hard way. My April bloodwork came back with testosterone at 112 ng/dL. 
            The reference range is 2–45. I was running at 2.5 times the upper limit, and nobody caught it.
          </p>
        </div>

        {/* Expert Insights */}
        <h2 className="text-2xl font-bold mt-10 mb-6" style={{ color: '#C4622D' }}>
          What the Experts Say
        </h2>

        {expertInsights.map((expert, i) => (
          <div key={i} className="rounded-xl p-6 mb-4 border-l-4" 
               style={{ backgroundColor: 'white', borderLeftColor: expert.color }}>
            <div className="font-bold text-lg mb-1" style={{ color: expert.color }}>
              {expert.name}
            </div>
            <div className="text-sm mb-3 italic" style={{ color: '#3B2A1A', opacity: 0.6 }}>
              {expert.role}
            </div>
            <p style={{ color: '#3B2A1A', lineHeight: '1.7' }}>
              {expert.text}
            </p>
          </div>
        ))}

        {/* My Take */}
        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#C4622D' }}>
          My Take
        </h2>

        <div className="rounded-xl p-8 mb-8" style={{ backgroundColor: '#FAF4EC', border: '2px solid #C4622D' }}>
          <p className="mb-4" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
            I've been on HRT for about a year. My symptoms improved. I felt better. I assumed that meant my doses were right.
          </p>
          <p className="mb-4" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
            They weren't.
          </p>
          <p className="mb-4" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
            My April 2026 labs: testosterone at 112 ng/dL, reference range 2–45. That's a 2.5× overdose. 
            At the same time, my LDL climbed 52% and my HDL dropped 18% compared to October 2024.
          </p>
          <p className="mb-4 font-semibold" style={{ color: '#C4622D' }}>
            The research explains it.
          </p>
          <p className="mb-4" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
            Excess testosterone drives visceral fat accumulation. Visceral fat drives insulin resistance. 
            Insulin resistance drives lipid dysregulation. It's a cascade, and it starts with a dose that\'s too high.
          </p>

        {/* The Other Side */}
        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#C4622D' }}>
          The Other Side: Not Everyone Agrees
        </h2>

        <p className="mb-6" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
          Balance matters. Not every expert thinks aggressive monitoring and tight dosing targets are necessary.
        </p>

        <div className="rounded-xl p-6 mb-4 border-l-4" style={{ backgroundColor: 'white', borderLeftColor: '#D4A853' }}>
          <div className="font-bold text-lg mb-2" style={{ color: '#3B2A1A' }}>Conservative Endocrinologists</div>
          <p style={{ color: '#3B2A1A', lineHeight: '1.7', opacity: 0.85 }}>
            Some argue that chasing optimal ranges creates unnecessary anxiety. If symptoms are controlled and there are no adverse effects, 
            aggressive monitoring may be overkill. The patient feels fine — why intervene?
          </p>
        </div>

        <div className="rounded-xl p-6 mb-4 border-l-4" style={{ backgroundColor: 'white', borderLeftColor: '#D4A853' }}>
          <div className="font-bold text-lg mb-2" style={{ color: '#3B2A1A' }}>Symptom-First Practitioners</div>
          <p style={{ color: '#3B2A1A', lineHeight: '1.7', opacity: 0.85' }}>
            Many doctors prioritize how you feel over lab numbers. If hot flashes are gone, sleep is better, and quality of life improved, 
            they argue the dose is right — regardless of whether estradiol is 60 or 120 pg/mL.
          </p>
        </div>

        <div className="rounded-xl p-6 mb-8 border-l-4" style={{ backgroundColor: 'white', borderLeftColor: '#D4A853' }}>
          <div className="font-bold text-lg mb-2" style={{ color: '#3B2A1A' }}>Cost & Access Reality</div>
          <p style={{ color: '#3B2A1A', lineHeight: '1.7', opacity: 0.85' }}>
            Comprehensive panels are expensive and not always covered by insurance. For many women, testing SHBG, free testosterone, ApoB, 
            and Lp(a) every 6-8 weeks is financially unrealistic. Symptom-based dosing is pragmatic.
          </p>
        </div>

          <p className="mb-4" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
            I\'m an AWS architect. I build distributed systems for a living. I know what happens when you don't 
            monitor your systems: they drift, they degrade, and eventually something breaks.
          </p>
          <p className="font-semibold" style={{ color: '#C4622D' }}>
            HRT is no different. You have to treat it like an engineering problem — set targets, measure, adjust, retest.
          </p>
        </div>

        {/* Action Box */}
        <div className="rounded-xl p-8 text-center" style={{ backgroundColor: '#7D9B76' }}>
          <h3 className="text-xl font-bold text-white mb-3">
            One Action: Get the Right Tests
          </h3>
          <p className="text-white opacity-90 mb-4">
            If you're on HRT (or considering it), this is what to test — and track over time:
          </p>
          <p className="text-white text-sm opacity-75 mb-6">
            Note: Targets vary by expert and individual context. What matters most is YOUR trend — 
            are things improving or worsening? Use these as discussion points with your provider.
          </p>
          <div className="bg-white rounded-lg p-6 text-left">
            <h4 className="font-bold mb-3" style={{ color: '#C4622D' }}>Hormone Panel:</h4>
            <div className="space-y-2 mb-6">
              {hormoneTests.map((test, i) => (
                <div key={i} className="text-sm">
                  <p className="font-semibold" style={{ color: '#3B2A1A' }}>{test.test}</p>
                  <p style={{ color: '#7D9B76' }}>Target: {test.target}</p>
                  <p className="text-xs opacity-70" style={{ color: '#3B2A1A' }}>{test.note}</p>
                </div>
              ))}
            </div>
            
            <h4 className="font-bold mb-3 mt-6" style={{ color: '#C4622D' }}>Metabolic Markers:</h4>
            <div className="space-y-2">
              {metabolicTests.map((test, i) => (
                <div key={i} className="text-sm">
                  <p className="font-semibold" style={{ color: '#3B2A1A' }}>{test.test}</p>
                  <p style={{ color: '#7D9B76' }}>Target: {test.target}</p>
                  <p className="text-xs opacity-70" style={{ color: '#3B2A1A' }}>{test.note}</p>
                </div>
              ))}
            </div>
            
            <p className="text-sm mt-6 font-semibold" style={{ color: '#C4622D' }}>
              Most important: Test baseline, retest 6–8 weeks after changes, and track YOUR trends.
            </p>
            <p className="text-xs mt-2 opacity-70" style={{ color: '#3B2A1A' }}>
              Single numbers don't tell the story — direction and rate of change do.
            </p>
          </div>
          <p className="text-white text-sm mt-6 opacity-75">
            You are not asking for permission. You are managing your own system.
          </p>
        </div>

        {/* Sources */}
        <div className="mt-12 pt-8 border-t" style={{ borderColor: '#e8ddd0' }}>
          <p className="text-sm mb-2" style={{ color: '#3B2A1A', opacity: 0.6 }}>
            <strong>Sources:</strong> Peter Attia MD · Dr. Louise Newson · Kresser Institute · 
            SWAN Study (Study of Women\'s Health Across the Nation) · Meta-analysis of 73 RCTs (2022) · Hone Health
          </p>
          <p className="text-sm" style={{ color: '#3B2A1A', opacity: 0.5 }}>
            I am not a doctor. This is curated research and my personal experience, not medical advice. 
            Work with a menopause-literate provider who will actually run the numbers.
          </p>
        </div>

      </div>
    </div>
  );
}