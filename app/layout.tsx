import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PreHeader from "./components/preHeader";
import Providers from "./components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Lance Systems",
  description: "Lance Systems - Transforming tech solutions for a new digital age",
  openGraph: {
    title: "Lance Systems",
    description: "Transforming tech solutions for a new digital age",
    type: "website",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://prod.spline.design" />
        <link rel="dns-prefetch" href="https://prod.spline.design" />
        <link rel="preload" href="/assets/herovid.webm" as="video" type="video/webm" />
        <link rel="preload" href="/assets/fallback.png" as="image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-100`}
      >
        <Providers>
          <PreHeader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
