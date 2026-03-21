export default function RedLightPost() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF4EC" }}>
      <div className="py-16" style={{ backgroundColor: "#FAF4EC", borderBottom: "4px solid #C4622D" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6" style={{ backgroundColor: "#FAF4EC", color: "#C4622D", border: "1px solid #C4622D" }}>Wellness</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "#3B2A1A" }}>Red Light Therapy at 50: My BQ90 Pro Protocol and What the Science Actually Says</h1>
          <p className="text-lg" style={{ color: "#3B2A1A", opacity: 0.7 }}>By Siri · March 2026 · 8 min read</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-16">

        <p className="text-xl mb-8 font-medium" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>I started red light therapy three weeks ago. I have a Bestqool BQ90 Pro panel in my living room and I use it every morning before coffee. Here is what I have learned — about the science, what actually works, and the exact routine I use.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>Why Red Light Therapy? The Science First</h2>
        <p className="mb-6" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>Red light therapy (photobiomodulation) uses specific wavelengths to stimulate your mitochondria, which makes more ATP (cellular energy), triggering repair, regeneration, and reduced inflammation. For women in menopause, estrogen decline already disrupts mitochondrial function. Red light gives your cells a boost from the outside in. The research is surprisingly solid — hundreds of peer-reviewed studies covering skin, brain, hair, joints, mood, and sleep.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>My Device: Bestqool BQ90 Pro — 6 Wavelengths</h2>
        <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: "white", border: "1px solid #e8ddd0" }}>
          <div className="grid grid-cols-2 gap-4">
            <div><p className="font-semibold mb-2" style={{ color: "#C4622D" }}>Red Light</p>
              <p style={{ color: "#3B2A1A" }}>630nm — collagen, skin texture</p>
              <p style={{ color: "#3B2A1A" }}>660nm — deeper skin, healing</p>
              <p style={{ color: "#3B2A1A" }}>680nm — mid-layer skin repair</p>
            </div>
            <div><p className="font-semibold mb-2" style={{ color: "#7D9B76" }}>Near-Infrared</p>
              <p style={{ color: "#3B2A1A" }}>810nm — brain health (skull penetration)</p>
              <p style={{ color: "#3B2A1A" }}>850nm — muscles, joints, anti-inflammatory</p>
              <p style={{ color: "#3B2A1A" }}>940nm — deep tissue, oxygenation</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6" style={{ color: "#C4622D" }}>My Complete Morning Protocol (~25-30 min)</h2>

        {[
          { phase: "Phase 1: Face & Skin", time: "8-10 min", distance: "15-30cm", wave: "660nm", emoji: "🌸", warning: "⚠️ If you have melasma: cover those areas. Red wavelengths can temporarily darken existing pigmentation. I learned this the hard way — cover above the lip with your hand or a small cloth.", benefit: "Stimulates collagen and elastin. After sessions apply hyaluronic acid serum while skin is warm — absorption is better." },
          { phase: "Phase 2: Scalp & Hair", time: "5-10 min", distance: "2-5cm (as close as possible)", wave: "630-660nm", emoji: "💆", warning: null, benefit: "Stimulates hair follicles, increases scalp blood flow. Tip your head toward the panel. Results take 8-12 weeks of consistency." },
          { phase: "Phase 3: Brain & Mood", time: "10 min", distance: "As close as possible to forehead", wave: "810nm + 850nm", emoji: "🧠", warning: null, benefit: "810nm penetrates the skull best. Research shows improved blood flow, more ATP in neurons, reduced brain inflammation. Translation: less brain fog, better mood. I do this in the morning — it also helps set circadian rhythm and sleep quality." },
          { phase: "Phase 4: Back Pain", time: "10-15 min (as needed)", distance: "6-12 inches from area", wave: "850nm + 940nm", emoji: "🔙", warning: null, benefit: "Deep NIR penetrates muscle, fascia, and spinal tissue. Reduces inflammation, relaxes muscle tension, improves blood flow. My morning stiffness is noticeably better." },
        ].map((p, i) => (
          <div key={i} className="rounded-xl p-6 mb-4 border-l-4" style={{ backgroundColor: "white", borderLeftColor: "#C4622D" }}>
            <div className="font-bold text-lg mb-1" style={{ color: "#C4622D" }}>{p.emoji} {p.phase}</div>
            <div className="text-sm mb-3" style={{ color: "#3B2A1A", opacity: 0.6 }}>⏱ {p.time} · 📏 {p.distance} · 💡 {p.wave}</div>
            {p.warning && <div className="rounded-lg p-3 mb-3 text-sm" style={{ backgroundColor: "#fff8f0", border: "1px solid #D4A853", color: "#3B2A1A" }}>{p.warning}</div>}
            <p style={{ color: "#3B2A1A", lineHeight: "1.7" }}>{p.benefit}</p>
          </div>
        ))}

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>The Rules That Actually Matter</h2>
        <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: "#f0f7f0", border: "1px solid #7D9B76" }}>
          {["Morning is best — sets your circadian clock, affects sleep quality","Bare skin only — even light fabric blocks the light","No retinol or AHAs 24h before or after face sessions","Consistency beats intensity — 10 min daily beats 30 min twice a week","Eyes closed or goggles during face and brain sessions"].map((r, i) => (
            <div key={i} className="flex items-start gap-3 mb-2"><span style={{ color: "#7D9B76" }}>✓</span><p style={{ color: "#3B2A1A" }}>{r}</p></div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#C4622D" }}>What I Have Noticed So Far (Week 3)</h2>
        <div className="rounded-xl p-8 mb-8" style={{ backgroundColor: "#FAF4EC", border: "2px solid #C4622D" }}>
          <p className="mb-3" style={{ color: "#3B2A1A", lineHeight: "1.8" }}>I was skeptical. Three weeks in, I am a cautious convert.</p>
          <div className="space-y-2">
            {[["Sleep quality","Noticeably better on days I use the panel"],["Morning brain fog","Shorter — I feel sharper earlier"],["Back stiffness","Real improvement"],["Melasma","Darkened slightly — now cover that area during face sessions"],["Hair","Too early to say — checking back at week 12"]].map((item, i) => (
              <div key={i} className="flex gap-3"><span className="font-semibold" style={{ color: "#C4622D", minWidth: "140px" }}>{item[0]}:</span><span style={{ color: "#3B2A1A" }}>{item[1]}</span></div>
            ))}
          </div>
        </div>

        <div className="rounded-xl p-8 text-center" style={{ backgroundColor: "#7D9B76" }}>
          <h3 className="text-xl font-bold text-white mb-3">One Thing to Do</h3>
          <p className="text-white opacity-90">If you already have a panel — commit to consistent morning sessions for 30 days, then evaluate. Consistency is everything with red light therapy.</p>
        </div>

        <div className="mt-12 pt-8 border-t" style={{ borderColor: "#e8ddd0" }}>
          <p className="text-sm" style={{ color: "#3B2A1A", opacity: 0.6 }}><strong>Sources:</strong> Frontiers in Aging Neuroscience · NIH/PubMed (photobiomodulation) · infraredi.com dosage guide · bestqool.com</p>
          <p className="text-sm mt-2" style={{ color: "#3B2A1A", opacity: 0.5 }}>Disclaimer: I am not a doctor. This is my personal experience and curated research, not medical advice.</p>
        </div>
      </div>
    </div>
  );
}