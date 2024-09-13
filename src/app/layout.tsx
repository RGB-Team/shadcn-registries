import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "@/components/toggle-theme";
import SessionWrapper from "@/components/session-wrapper";

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
      <SessionWrapper>
        <body>
          <div
            className={`${geistSans.variable} ${geistMono.variable} antialiased transition-all duration-300 ease-in-out 2xl:max-w-9xl font-[family-name:var(--font-geist-sans)] animate-transform`}
          >
            <Provider>{children}</Provider>
          </div>
        </body>
      </SessionWrapper>
    </html>
  );
}
