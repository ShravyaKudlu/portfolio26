import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shravya | Software Engineer",
  description: "Full-stack software engineer crafting beautiful digital experiences. Passionate about clean code, modern UI/UX, and building products that make a difference.",
  keywords: ["software engineer", "full stack developer", "react", "next.js", "portfolio"],
  authors: [{ name: "Shravya" }],
  openGraph: {
    title: "Shravya | Software Engineer",
    description: "Full-stack software engineer crafting beautiful digital experiences.",
    type: "website",
    url: "https://your-portfolio.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shravya | Software Engineer",
    description: "Full-stack software engineer crafting beautiful digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
