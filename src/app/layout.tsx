import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "@components/toggle-theme";
import { SiteHeader } from "@components/layout/navigation-bar";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div
          className={`${geistSans.variable} ${geistMono.variable} antialiased mx-auto 2xl:max-w-7xl font-[family-name:var(--font-geist-sans)]`}
        >
          <SiteHeader />
          <Provider>{children}</Provider>
        </div>
      </body>
    </html>
  );
}