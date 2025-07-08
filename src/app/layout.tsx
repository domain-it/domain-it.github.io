import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header/header.component';
import React from 'react';
import { Geist_Mono } from 'next/font/google';
import { Footer } from '@/components/footer/footer.component';
import Blob from '@/assets/blob.svg';

export const metadata: Metadata = {
  title: 'Domain.it Blog',
  description: 'My world of technology',
  authors: [{ name: 'Dominik Boczkowski' }],
};

const geist = Geist_Mono({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.className} light`} suppressHydrationWarning>
      <body>
          <div className="background">
            <Blob className="background-blob" />
          </div>
          <Header />
          <div className="container">{children}</div>
          <Footer />
      </body>
    </html>
  );
}
