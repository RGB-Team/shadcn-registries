import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "@components/toggle-theme";
import { SiteHeader } from "@components/layout/navigation-bar";
import { Toaster } from "@components/ui/sonner";
import { ReactQueryWrapper } from "@components/react-query-wrapper";
import { siteConfig } from "@/config/site-config";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "shadcn registries",
  description:
    "a website we're everyone can find, or make a custom registry to use as part of his component collection or design system on his next project",
  creator: "shadcn extension team",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    url: siteConfig.url,
    locale: "en_US",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@bylka207",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryWrapper>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-sans)] flex flex-col min-h-screen supports-[min-h-[100dvh]]:min-h-[100dvh] scroll-smooth`}
        >
          <Provider>
            <SiteHeader />
            {children}
            <Toaster />
          </Provider>
        </body>
      </html>
    </ReactQueryWrapper>
  );
}
