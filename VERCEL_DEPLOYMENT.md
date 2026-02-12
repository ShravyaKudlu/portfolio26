# Vercel Deployment Guide

## ✅ Full Working Setup: Emails + Free Neon Database

Your portfolio now uses **Neon PostgreSQL** (free tier) for persistent data storage + **Gmail** for email notifications. Both work perfectly on Vercel!

---

## What Works on Vercel

### ✅ Contact Form
- Saves to Neon PostgreSQL database (persistent)
- Sends email notification to your Gmail
- Both work reliably on serverless functions

### ✅ Admin API
- View all contacts: `GET /api/contacts`
- Data persists forever in Neon free tier

### ✅ Chatbot
- Works perfectly (stateless API calls)

---

## Deployment Steps

### Step 1: Get Your Neon Database Connection String

1. Go to https://console.neon.tech/
2. Create a project (if not already done)
3. Click on your project
4. Go to "Connection String" section
5. Select **"PostgreSQL"** format
6. Copy the connection string (looks like):
   ```
   postgresql://username:password@hostname/database_name?sslmode=require
   ```

### Step 2: Prepare Your Code

Make sure you've pushed to GitHub:

```bash
git add .
git commit -m "Switch to Neon PostgreSQL - ready for Vercel deployment"
git push origin main
```

### Step 3: Sign Up on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" → Sign up with GitHub (easiest)
3. Authorize Vercel to access your repositories

### Step 4: Deploy Your Project

1. Click **"Add New..."** → **"Project"**
2. Find your portfolio repository → Click **"Import"**
3. Vercel auto-detects Next.js - keep default settings
4. Click **"Deploy"**
5. Wait 2-3 minutes for build to complete

### Step 5: Add Environment Variables

After first deployment:

1. Go to your project on Vercel Dashboard
2. Click **"Settings"** tab → **"Environment Variables"**
3. Add these variables:

| Name | Value | Required |
|------|-------|----------|
| `DATABASE_URL` | Your Neon connection string | ✅ **Required** |
| `EMAIL_USER` | Your Gmail | ✅ **Required** |
| `EMAIL_PASS` | Gmail App Password | ✅ **Required** |
| `OPENROUTER_API_KEY` | API key | ⚠️ For chatbot |
| `GEMENI_API_KEY` | API key | ⚠️ For chatbot |
| `GEMENI_API_VERSION` | v1 | ⚠️ For chatbot |
| `GEMENI_MODEL` | gemini-2.5-flash | ⚠️ For chatbot |
| `NEXT_PUBLIC_APP_URL` | Your deployed URL | ✅ **Required** |

### Step 6: Redeploy

1. Go to **"Deployments"** tab
2. Click the three dots on latest deployment
3. Click **"Redeploy"**

---

## Neon Database Setup (One-Time)

### Option 1: Using Neon Dashboard

1. Sign up at https://neon.tech/ (free tier)
2. Create a new project
3. Copy the connection string from dashboard
4. Add to Vercel environment variables as `DATABASE_URL`

### ✅ Free Tier Limits (More than enough!)

- **512 MB storage** (can store ~100,000+ contacts)
- **Unlimited API requests**
- **No time limits**
- **Auto-scaling**

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

## Testing After Deployment

### Test Contact Form:

1. Visit your deployed site
2. Go to Contact section
3. Fill out the form (name, email, message)
4. **Check your Gmail** - you should receive an email within 30 seconds
5. **Check database** - visit `https://your-app.vercel.app/api/contacts`
   - Should show JSON with the contact you just submitted

### Test Chatbot:

1. Click the floating chat button (bottom right)
2. Type "Hello" or "What are your skills?"
3. Should get a response within 2-3 seconds

---

## Database Schema

Your Neon database has this table:

```sql
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
)
```

---

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact` | POST | Submit contact form (saves to DB + sends email) |
| `/api/contacts` | GET | Get all contacts (admin view) |
| `/api/chat` | POST | AI chatbot |

---

## Troubleshooting

### Emails not working?

- Verify you're using Gmail App Password (not regular password)
- Check spam/junk folders
- Look at Vercel logs: Dashboard → Your Project → **"Logs"**

### Database not saving?

- Check `DATABASE_URL` is set correctly in Vercel
- Verify the connection string is complete (ends with `?sslmode=require`)
- Check Vercel logs for database connection errors

### Chatbot not responding?

- Check if API keys are set correctly
- Check browser console for errors

### Build fails?

- Check Vercel build logs
- Make sure all dependencies are in `package.json`
- Ensure `next.config.ts` doesn't have `output: 'export'`

---

## Viewing Contact Submissions

### Method 1: Check your Gmail (Recommended)

All contacts emailed to your Gmail instantly.

### Method 2: Admin API

Visit: `https://your-app.vercel.app/api/contacts`

Returns JSON:
```json
{
  "contacts": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "message": "Hello!",
      "created_at": "2025-02-11T10:30:00.000Z"
    }
  ]
}
```

---

## Pricing

### Vercel Hobby (Free Tier):

- ✅ 100 GB bandwidth/month
- ✅ Unlimited API requests
- ✅ 10,000 build minutes/month
- ✅ Serverless Functions (API routes)
- ✅ Custom domains
- ✅ Automatic HTTPS

### Neon Free Tier:

- ✅ 512 MB storage (100,000+ contacts)
- ✅ Unlimited read/write operations
- ✅ No credit card required
- ✅ Forever free

**Total Cost: $0/month** 🎉

---

## Quick Summary

✅ **Ready to deploy!**

**Steps:**
1. Get Neon connection string from dashboard
2. Push code to GitHub
3. Import to Vercel
4. Add environment variables (including `DATABASE_URL`)
5. Deploy
6. Test contact form

**Time required:** 10-15 minutes
**Cost:** FREE forever
**Result:** Portfolio with persistent database + email notifications!

---

## Need Help?

1. Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
2. Neon Docs: [neon.tech/docs](https://neon.tech/docs)
3. Check logs in Vercel Dashboard
4. Test locally first: `npm run dev`
