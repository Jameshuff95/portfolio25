import type { Metadata } from 'next';
import Nav from './_components/Nav';
import Footer from './_components/Footer';

import './globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const metadata: Metadata = {
  title: "James Huff's Portfolio",
  description: 'This portfolio was made by James Huff.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-foreground border flex flex-col min-h-screen select-none">
        <Nav />
        <div className="min-h-0 flex flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
