# Vercel Deployment Guide

## Compatibility Check Results

### ✅ Works Perfectly on Vercel:
- **API Routes** (`/api/contact`, `/api/chat`, `/api/contacts`)
- **Chatbot** (OpenRouter API calls work great)
- **Email Notifications** (Gmail SMTP works fine)
- **Frontend** (Next.js optimized for Vercel)

### ⚠️ SQLite Limitations on Vercel:
**Problem**: Vercel uses serverless functions with ephemeral storage
- Data written to disk is lost after the request ends
- Each API call might hit a different server instance
- **Result**: Contact form saves to DB, but data disappears quickly

### ✅ Solutions:

**Option 1: Email-Only Mode (Recommended for Quick Deploy)**
- Keep SQLite but don't rely on it
- Email notifications always work perfectly
- Contact data comes to your Gmail reliably

**Option 2: Vercel Postgres (Persistent Data)**
- $5/month minimum (256MB free included)
- Data persists forever
- I can help you set this up if needed

**Option 3: Neon Postgres (Free Tier)**
- 512MB storage free forever
- Requires slight code changes
- More setup required

---

## Deployment Steps

### Step 1: Prepare Your Code

Your backend is already configured! Just make sure you've pushed to GitHub:

```bash
git add .
git commit -m "Add backend - ready for Vercel deployment"
git push origin main
```

### Step 2: Sign Up on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" → Sign up with GitHub (easiest)
3. Authorize Vercel to access your repositories

### Step 3: Deploy Your Project

1. Click **"Add New..."** → **"Project"**
2. Find your portfolio repository → Click **"Import"**
3. Vercel auto-detects Next.js - keep default settings
4. Click **"Deploy"**
5. Wait 2-3 minutes for build to complete

### Step 4: Add Environment Variables

After first deployment:

1. Go to your project on Vercel Dashboard
2. Click **"Settings"** tab → **"Environment Variables"**
3. Add these variables:

| Name | Value | Example |
|------|-------|---------|
| `EMAIL_USER` | Your Gmail | `shravyakudlu@gmail.com` |
| `EMAIL_PASS` | Gmail App Password | `abcd efgh ijkl mnop` |
| `OPENROUTER_API_KEY` | API key | `sk-or-v1-...` |
| `NEXT_PUBLIC_APP_URL` | Your deployed URL | `https://your-app.vercel.app` |

**Important**: Use Gmail App Password, not your regular password!

### Step 5: Redeploy

1. Go to **"Deployments"** tab
2. Click the three dots on latest deployment
3. Click **"Redeploy"**

---

## Gmail App Password Setup

1. Go to [myaccount.google.com](https://myaccount.google.com)
2. **Security** → **2-Step Verification** (enable if not already)
3. Search for **"App passwords"** at the top
4. Select app: **Mail**
5. Select device: **Other** (name it "Portfolio")
6. Click **Generate**
7. Copy the 16-character password (with spaces)
8. Use this in Vercel's `EMAIL_PASS` field

---

## OpenRouter API Key (Free)

1. Go to [openrouter.ai](https://openrouter.ai)
2. Sign up with GitHub
3. Go to **Keys** → **Create Key**
4. Copy the key (starts with `sk-or-v1-`)
5. Add to Vercel environment variables

**Free tier includes:**
- Llama 3.2 (what we're using)
- Limited requests per day
- Perfect for a portfolio chatbot

---

## Testing After Deployment

### Test Contact Form:
1. Visit your deployed site
2. Go to Contact section
3. Fill out the form
4. Check `shravyakudlu@gmail.com` - you should receive an email within 30 seconds

### Test Chatbot:
1. Click the floating chat button (bottom right)
2. Type "Hello" or "What are your skills?"
3. Should get a response within 2-3 seconds

---

## Custom Domain (Optional)

1. Vercel Dashboard → Your Project → **"Domains"**
2. Add your domain (e.g., `shravya.dev`)
3. Follow DNS instructions
4. Free SSL certificate auto-generated

---

## Troubleshooting

### Emails not working?
- Verify you're using Gmail App Password (not regular password)
- Check spam/junk folders
- Look at Vercel logs: Dashboard → Your Project → **"Logs"**

### Chatbot not responding?
- Check if `OPENROUTER_API_KEY` is set correctly
- Check browser console for errors
- API has fallback mode - should always work even without API key

### Database issues?
- SQLite has limitations on Vercel (expected)
- Email notifications still work perfectly
- Contact data is in your Gmail inbox

### Build fails?
- Check Vercel build logs
- Make sure all dependencies are in `package.json`
- Ensure `next.config.ts` doesn't have `output: 'export'`

---

## Monitoring

### View Contact Submissions

**Method 1: Check your Gmail** (Recommended)
- All contacts emailed to `shravyakudlu@gmail.com`

**Method 2: API Endpoint** (Data may not persist)
- Visit: `https://your-app.vercel.app/api/contacts`
- Returns JSON of saved contacts

### View Logs
1. Vercel Dashboard → Your Project
2. Click **"Logs"** tab
3. See real-time API requests

---

## Pricing

**Vercel Hobby (Free Tier):**
- ✅ 100 GB bandwidth/month
- ✅ Unlimited API requests
- ✅ 10,000 build minutes/month
- ✅ 1 concurrent build
- ✅ Serverless Functions (API routes)
- ✅ Custom domains
- ✅ Automatic HTTPS

**Limits:**
- Function execution: 10 seconds
- SQLite: Ephemeral (data doesn't persist)

**Upgrade if you need:**
- Database persistence → Vercel Pro or Postgres
- More bandwidth → Pro ($20/month)

---

## Need Help?

1. Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
2. Check logs in Vercel Dashboard
3. Test locally first: `npm run dev`
4. Contact support in Vercel dashboard

---

## Quick Summary

✅ **Your backend is Vercel-ready!**

**Just do this:**
1. Push to GitHub
2. Import to Vercel
3. Add 4 environment variables
4. Deploy
5. Test contact form and chatbot

**Time required:** 10-15 minutes
**Cost:** FREE
**Result:** Live portfolio with working backend! 🚀
