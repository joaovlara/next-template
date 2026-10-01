import type { Metadata } from "next";
import "./globals.css";
import { seoConfig } from "./data/SEO";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Bakbak_One } from 'next/font/google';

export const metadata: Metadata = seoConfig;
const bakbak = Bakbak_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bakbak',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={bakbak.variable}>
      <body className="bg-stone-900 text-brand-light">
        {children}
      </body>
      {/* <GoogleTagManager gtmId="GTM-XXXXXXX" /> */}
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
