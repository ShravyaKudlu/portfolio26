# Shravya's Portfolio

A stunning, modern portfolio website built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. Features Hyprland-inspired animations with spring physics, glassmorphism UI, and dark/light mode support.

![Portfolio Preview](https://via.placeholder.com/800x400/violet/white?text=Shravya+Portfolio)

## ✨ Features

- ⚡ **Next.js 15** with Turbopack for blazing fast builds
- 🎨 **Tailwind CSS v4** for utility-first styling
- 🌓 **Dark/Light Mode** with next-themes
- 🎭 **Hyprland Animations** - Smooth spring physics and window-like transitions
- 🪟 **Glassmorphism UI** - Frosted glass effects throughout
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎯 **TypeScript** - Type-safe development
- 🔍 **SEO Optimized** - Meta tags and Open Graph
- 📊 **Bento Grid Layout** - Modern grid-based sections
- ✉️ **Contact Form** - With validation and animations

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Motion (formerly Framer Motion)
- **Icons:** Lucide React
- **Deployment:** Vercel

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio/my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)**

## 📦 Deployment to Vercel

### Option 1: Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd my-app
   vercel --prod
   ```

### Option 2: Deploy with Git Integration

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

### Option 3: Manual Static Export

1. **Build static files**
   ```bash
   cd my-app
   npm run build
   ```

2. **Deploy `dist` folder**
   - The static files are in `my-app/dist/`
   - Upload to any static hosting service

## 🎨 Customization

### Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --background: oklch(0.98 0.01 280);
  --foreground: oklch(0.15 0.05 280);
  --primary: oklch(0.6 0.2 290);
  /* ... more colors */
}
```

### Content

Update the content in each component:

- `components/hero.tsx` - Hero section
- `components/about.tsx` - About section
- `components/skills.tsx` - Skills section
- `components/experience.tsx` - Work experience
- `components/projects.tsx` - Projects
- `components/education.tsx` - Education
- `components/contact.tsx` - Contact form

### Animations

All animations use **Motion** with Hyprland-style spring physics:

```typescript
const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};
```

## 📁 Project Structure

```
my-app/
├── app/
│   ├── globals.css      # Global styles & Tailwind
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page
├── components/
│   ├── navigation.tsx   # Navbar with glassmorphism
│   ├── hero.tsx         # Hero section
│   ├── about.tsx        # About section
│   ├── skills.tsx       # Skills bento grid
│   ├── experience.tsx   # Work timeline
│   ├── projects.tsx     # Projects showcase
│   ├── education.tsx    # Education & certs
│   ├── contact.tsx      # Contact form
│   ├── footer.tsx       # Footer
│   ├── theme-provider.tsx  # Theme context
│   └── theme-toggle.tsx    # Dark/light toggle
├── lib/
│   └── utils.ts         # Utility functions
├── dist/                # Static build output
└── next.config.ts       # Next.js config
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Credits

- Design inspired by Hyprland window manager animations
- Built with love using Next.js and Tailwind CSS
- Icons by [Lucide](https://lucide.dev)

---

**Built by Shravya** ✨
