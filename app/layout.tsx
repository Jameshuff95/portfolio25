import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "James Huff's Portfolio",
  description: "This portfolio was made by James Huff.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
