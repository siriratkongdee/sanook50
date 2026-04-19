# ✅ Blog System Setup Complete

## What's Been Built

### 1. Dev Branch Infrastructure
- ✅ `dev` branch created and pushed to GitHub
- ✅ Content structure: `content/drafts/` and `content/published/`
- ✅ Smart content loader respects `SHOW_DRAFTS` env var

### 2. Blog Routes (Next.js)
- ✅ `/blog` — List all posts (with DRAFT badges on dev)
- ✅ `/blog/[slug]` — Individual post pages
- ✅ Responsive, mobile-friendly design
- ✅ Markdown rendering with ReactMarkdown

### 3. Test Content
- ✅ Sample draft post created at `content/drafts/test-post.md`

---

## Next Steps (AWS Amplify)

### Connect Dev Branch

1. **Open AWS Amplify Console**
   - Go to your Sanook50 app
   - Click **"Connect branch"**

2. **Select Dev Branch**
   - Branch: `dev`
   - Use same build settings as main

3. **Add Environment Variable**
   - Key: `SHOW_DRAFTS`
   - Value: `true`

4. **Set Custom Domain**
   - Add: `dev.sanook50.com`
   - Let Amplify provision SSL

5. **Deploy!**
   - Wait 2-3 minutes
   - Visit `dev.sanook50.com/blog`
   - You should see the test post with a "DRAFT" badge

---

## Your Content Workflow

### Writing & Previewing
```bash
# 1. Switch to dev branch
cd ~/sanook50
git checkout dev

# 2. Create new post
vi content/drafts/my-new-post.md

# Use this format:
---
title: "Your Post Title"
date: "2026-04-19"
excerpt: "Brief summary"
---

Your markdown content here...

# 3. Push to dev
git add content/drafts/my-new-post.md
git commit -m "Draft: My new post"
git push origin dev

# 4. Review on phone
# Open: dev.sanook50.com/blog/my-new-post
# (Wait 2-3 min for Amplify build)
```

### Publishing
```bash
# When approved, move to published
git mv content/drafts/my-new-post.md content/published/
git commit -m "Publish: My new post"
git push origin dev

# Merge to main (production)
git checkout main
git merge dev
git push origin main

# Production auto-deploys to sanook50.com
```

---

## Local Development

```bash
# Run dev server with drafts visible
cd ~/sanook50
SHOW_DRAFTS=true npm run dev

# Open: http://localhost:3000/blog
```

---

## File Structure

```
~/sanook50/
├── app/
│   ├── blog/
│   │   ├── page.tsx              ← Blog list
│   │   └── [slug]/page.tsx       ← Individual posts
│   ├── about/
│   ├── career/
│   ├── finance/
│   └── health/
├── content/
│   ├── drafts/                   ← Work here
│   │   └── test-post.md
│   └── published/                ← Approved posts
├── lib/
│   └── content.ts                ← Content loader
├── DEV-SETUP.md                  ← Detailed instructions
└── BLOG-SETUP-COMPLETE.md        ← This file
```

---

## Key Features

✅ **Mobile preview** — Review drafts on any device
✅ **Draft badges** — Clear visual indicator on dev site
✅ **Clean separation** — Drafts never appear on production
✅ **Auto-deploy** — Push to GitHub → Amplify rebuilds
✅ **Markdown support** — Write in familiar format
✅ **Responsive design** — Works on phone, tablet, desktop

---

## Testing Checklist

After connecting dev branch in Amplify:

- [ ] Visit `dev.sanook50.com/blog`
- [ ] See "Welcome to Sanook50" post with DRAFT badge
- [ ] Click into the post
- [ ] Verify orange draft warning banner shows
- [ ] Check mobile layout looks good
- [ ] Verify `sanook50.com/blog` shows no drafts (once you merge)

---

## Integration with Content Pipeline

Your content pipeline now flows directly into the site:

```
1. Sunday: "Find topics" runs
2. Pick topic: "Research [topic]"
3. Review research
4. "Write [topic]" → generates markdown
5. Save to content/drafts/
6. Push to dev → preview on phone
7. Approve → move to published/ → merge to main
8. Auto-deploys to production
```

---

**All set!** 🐾  
Next: Connect the dev branch in Amplify and test the workflow.
