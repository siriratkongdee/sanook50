# Dev Branch Setup — Sanook50

## Overview
- **Main branch** → sanook50.com (production, published content only)
- **Dev branch** → dev.sanook50.com (preview, drafts + published)

## Content Structure
```
content/
├── drafts/       ← Work-in-progress posts
└── published/    ← Approved, live posts
```

## Workflow

### 1. Write Draft
```bash
# Create new post
cd ~/sanook50/content/drafts
vi my-new-post.md
```

**Format:**
```markdown
---
title: "Your Post Title"
date: "2026-04-19"
excerpt: "Brief summary for preview"
---

Your content here...
```

### 2. Preview on Dev
```bash
git add content/drafts/my-new-post.md
git commit -m "Draft: My new post"
git push origin dev
```

**Result:** Amplify auto-builds → view at dev.sanook50.com in 2-3 min

### 3. Approve & Publish
```bash
# Move to published
git mv content/drafts/my-new-post.md content/published/
git commit -m "Publish: My new post"

# Merge to main
git checkout main
git merge dev
git push origin main
```

**Result:** Production auto-deploys → live at sanook50.com

## Amplify Setup

### Main Branch (Production)
- Branch: `main`
- Domain: `sanook50.com`
- Environment variables: (none needed)
- Shows: `content/published/` only

### Dev Branch (Preview)
- Branch: `dev`
- Domain: `dev.sanook50.com`
- Environment variables:
  - `SHOW_DRAFTS=true`
- Shows: `content/drafts/` + `content/published/`

## Local Development

```bash
# Preview locally (with drafts)
SHOW_DRAFTS=true npm run dev

# Preview production mode (published only)
npm run dev

# Open: http://localhost:3000/blog
```

## Dependencies

Install gray-matter for markdown parsing:
```bash
npm install gray-matter
```

## Next Steps

1. **Create blog routes:**
   - `app/blog/page.tsx` (list all posts)
   - `app/blog/[slug]/page.tsx` (individual post)

2. **Connect dev branch in Amplify:**
   - AWS Amplify Console → Your app
   - "Connect branch" → select `dev`
   - Add custom domain: `dev.sanook50.com`
   - Add env var: `SHOW_DRAFTS=true`

3. **Test workflow:**
   - Create test draft
   - Push to dev
   - Review on phone
   - Approve & merge to main

---

**Content helper:** `lib/content.ts` handles draft/published logic automatically.
