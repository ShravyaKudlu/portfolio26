# Backend Setup Instructions

## Features

### 1. Contact Form with Email & Database Storage
- Contact form submissions are saved to **Neon PostgreSQL** database (persistent)
- Email notifications sent to your Gmail instantly
- View all contacts via `/api/contacts` endpoint
- Works perfectly on Vercel serverless functions

### 2. AI Chatbot
- Virtual assistant fine-tuned with your portfolio context
- Free LLM integration via Google Gemini API
- Fallback responses if API is unavailable

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

### Required Variables:

**For Database (Neon PostgreSQL - Free):**
- `DATABASE_URL`: Your Neon connection string
  - Sign up at https://neon.tech/
  - Create a project
  - Copy connection string from dashboard
  - Format: `postgresql://username:password@hostname/database_name?sslmode=require`

**For Email (Gmail):**
- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASS`: Your Gmail App Password (not your regular password!)
  - Go to Google Account → Security → 2-Step Verification → App passwords
  - Generate an app password for "Mail"

**For Chatbot (Google Gemini - Free):**
- `GEMENI_API_KEY`: Get free API key at https://makersuite.google.com/app/apikey
  - Sign up with Google account
  - Create an API key
  - Free tier includes generous limits

**Optional:**
- `NEXT_PUBLIC_APP_URL`: Your app URL (http://localhost:3000 for local, your Vercel URL for production)

---

## Running the Application

### Development Mode:
```bash
npm run dev
```
This starts the Next.js dev server with API routes support.

### Production Build:
```bash
npm run build
npm start
```

---

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `POST /api/contact` | POST | Submit contact form (saves to DB + sends email) |
| `GET /api/contacts` | GET | Get all contacts (admin view) |
| `POST /api/chat` | POST | Chat with the AI assistant |

---

## Database

**Neon PostgreSQL** (free tier) - Persistent cloud database

### Schema:
```sql
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
)
```

### View Contacts:
Visit `http://localhost:3000/api/contacts` (or your deployed URL)

---

## Deployment

### Vercel (Recommended - Free)

See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for detailed instructions.

**Quick steps:**
1. Push code to GitHub
2. Import to Vercel
3. Add environment variables in Vercel dashboard:
   - `DATABASE_URL`
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `GEMENI_API_KEY`
   - `NEXT_PUBLIC_APP_URL`
4. Deploy

### Free Tier Limits:
- **Vercel**: 100GB bandwidth, unlimited API requests
- **Neon**: 512MB storage (100,000+ contacts)
- **Total Cost: $0/month**

---

## Customizing the Chatbot

Edit `lib/context/portfolio-context.ts` to:
- Add more details about yourself
- Change the chatbot's personality
- Add specific FAQs and responses
- Update contact information

---

## Troubleshooting

**Email not sending?**
- Check that you're using an App Password, not your regular Gmail password
- Verify 2-Step Verification is enabled on your Google account
- Check spam folders

**Database not saving?**
- Verify `DATABASE_URL` is set correctly
- Check Vercel logs for connection errors
- Ensure connection string includes `?sslmode=require`

**Chatbot not responding?**
- Verify `GEMENI_API_KEY` is set
- Check browser console for errors
- Fallback mode will work even without API key

**Build errors?**
- Make sure all dependencies are installed: `npm install`
- Check TypeScript errors: `npm run type-check` (if available)
