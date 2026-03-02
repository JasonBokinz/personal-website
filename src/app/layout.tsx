import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jasonbokinz.com"),
  title: "Jason Bokinz | Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer. Built AI-powered products used by 80,000+ students. Stony Brook CS graduate, Magna Cum Laude.",
  keywords: [
    "Jason Bokinz",
    "Full Stack Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Stony Brook University",
    "Whiz",
  ],
  openGraph: {
    title: "Jason Bokinz | Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer. Built AI-powered products used by 80,000+ students.",
    type: "website",
    url: "https://jasonbokinz.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jason Bokinz | Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer. Built AI-powered products used by 80,000+ students.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
