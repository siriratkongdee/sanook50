---
title: "MDX Components Demo"
date: "2026-07-19"
excerpt: "A working preview of the reusable branded components available in draft articles."
category: "health"
tags: ["demo"]
---

This draft exists to preview the reusable, on-brand components available when writing articles — the same visual patterns used across the hand-coded pages, now available from plain text.

## Callout

<Callout title="My Wake-Up Call" color="gold">
  I found this out the hard way. My April bloodwork came back higher than expected, and nobody caught it.
</Callout>

## Expert Quotes

<ExpertQuote name="Dr. Louise Newson" role="UK Menopause Specialist" color="green">
  You need estradiol above 250 pmol/L for health benefits — bone, cardiovascular, and cognitive protection.
</ExpertQuote>

<ExpertQuote name="Peter Attia" role="Metabolic Health & Longevity" color="purple">
  Menopause is a metabolic crisis. Women who start HRT within 10 years of menopause onset show a meaningful reduction in coronary disease risk.
</ExpertQuote>

## Card Grid

<CardGrid columns={3}>
  <Card emoji="😤" title="Generic advice built for men">Most retirement calculators assume a career and timeline that doesn't fit your actual life.</Card>
  <Card emoji="💸" title="Good advisors cost $5,000+/year">Fee-only fiduciaries are the gold standard, but expensive and hard to find.</Card>
  <Card emoji="🤷" title="Calculators with no context">They spit out a number, not a plan.</Card>
</CardGrid>

## Action Box

<ActionBox title="One Action: Get the Right Tests" color="green">
  <p className="mb-4">If you're on HRT, this is what to track over time:</p>
  <div className="bg-white rounded-lg p-6 text-left">
    <TargetItem label="Estradiol (E2)" target="> 250 pmol/L" note="Test ~12 hours after application." />
    <TargetItem label="Total Testosterone" target="35–45 ng/dL" note="Reference range is typically 2–45 ng/dL." />
  </div>
</ActionBox>

Regular **markdown** still works everywhere else — headings, lists, [links](/articles), and `code` all pick up the site's brand colors automatically.
