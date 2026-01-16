import type { Metadata } from "next";
import clsx from "clsx";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content";
import { getSiteUrl } from "@/lib/siteUrl";
import { validateContent } from "@/content/validate";

const siteName = siteConfig.brand.name;
const defaultDescription = "Portfolio of Avery Reed, product designer and front-end partner.";
const sansFont = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

validateContent();

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  openGraph: {
    type: "website",
    siteName,
    title: siteName,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: defaultDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx("antialiased", sansFont.variable, monoFont.variable)} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
