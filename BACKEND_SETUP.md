# Backend Setup Instructions

## Features Added

### 1. Contact Form with Email & Database Storage
- Contact form submissions are saved to SQLite database
- Email notifications sent to your Gmail
- View all contacts via `/api/contacts` endpoint

### 2. AI Chatbot
- Virtual assistant fine-tuned with your portfolio context
- Free LLM integration via OpenRouter (Llama 3.2)
- Fallback responses if API is unavailable

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

### Required Variables:

**For Email (Gmail):**
- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASS`: Your Gmail App Password (not your regular password!)
  - Go to Google Account → Security → 2-Step Verification → App passwords
  - Generate an app password for "Mail"

**For Chatbot (OpenRouter - Free):**
- `OPENROUTER_API_KEY`: Get free API key at https://openrouter.ai/
  - Sign up and create an API key
  - The free tier includes Llama 3.2 and other models

## Running the Application

### Development Mode (Recommended for testing backend):
```bash
npm run dev
```
This starts the Next.js dev server with API routes support.

### Production Build (Serverful deployment):
```bash
# Remove or comment out 'output: export' in next.config.ts
npm run build
npm start
```

### Static Export (No API support):
```bash
# With 'output: export' in next.config.ts
npm run build
# Output will be in /dist folder
```

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Get all contacts (for your admin use)
- `POST /api/chat` - Chat with the AI assistant

## Deployment Options

### With Backend (Full Features):
1. **Vercel**: Connect GitHub repo, set environment variables
2. **Railway**: Deploy with Dockerfile or Node.js template
3. **Render**: Web service with Node.js
4. **DigitalOcean App Platform**

### Static Only (Frontend Only):
- GitHub Pages
- Netlify
- Cloudflare Pages
- Any static hosting

**Note**: With static export, contact form and chatbot won't work. Use serverful deployment for full functionality.

## Database

SQLite database is stored in `data/contacts.db`. It's automatically created on first run.

To view contacts manually:
```bash
sqlite3 data/contacts.db "SELECT * FROM contacts ORDER BY created_at DESC;"
```

## Customizing the Chatbot

Edit `lib/context/portfolio-context.ts` to:
- Add more details about yourself
- Change the chatbot's personality
- Add specific FAQs and responses
- Update contact information

## Troubleshooting

**Email not sending?**
- Check that you're using an App Password, not your regular Gmail password
- Ensure less secure app access is enabled if not using 2FA
- Check spam folders

**Chatbot not responding?**
- Verify OPENROUTER_API_KEY is set
- Check browser console for errors
- Fallback mode will work even without API key

**Database errors?**
- Ensure `data/` directory exists and is writable
- Check file permissions
- Delete `data/contacts.db` to reset (data will be lost)
