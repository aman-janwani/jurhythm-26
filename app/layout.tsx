import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

// Configure Anton font with optimal settings
const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
  preload: true,
  fallback: ['Arial', 'sans-serif'],
});

// Configure Inter font with multiple weights
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "JU Rhythm | Annual Cultural & Sports Fest",
  description: "Join JU Rhythm, the ultimate cultural and sports fest featuring music, dance, sports competitions, technical challenges, and media events celebrating talent and creativity.",
  keywords: ["cultural fest", "sports", "technical", "JU Rhythm", "college fest", "cultural event", "media"],
  authors: [{ name: "JU Rhythm Team" }],
  creator: "JU Rhythm",
  publisher: "JU Rhythm",
  openGraph: {
    title: "JU Rhythm | Annual Cultural & Sports Fest",
    description: "Join JU Rhythm, the ultimate cultural and sports fest featuring music, dance, sports competitions, technical challenges, and media events celebrating talent and creativity.",
    type: "website",
    locale: "en_US",
    siteName: "JU Rhythm",
  },
  twitter: {
    card: "summary_large_image",
    title: "JU Rhythm | Annual Cultural & Sports Fest",
    description: "Join JU Rhythm, the ultimate cultural and sports fest featuring music, dance, sports competitions, technical challenges, and media events celebrating talent and creativity.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <body className="antialiased">
        {children}
        <GoogleAnalytics gaId="G-0JYGXDHYMM" />
      </body>
    </html>
  );
}
