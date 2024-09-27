

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <html lang="en">
        <body
          className="mx-auto 2xl:max-w-7xl h-full"
        >
          {children}
        </body>
      </html>
  );
}
