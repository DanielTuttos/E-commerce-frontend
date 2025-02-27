import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';

const urbanist = Urbanist({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Daniel E-commerce',
  description: 'Welcome to my e-commerce from DanielRomeroAG',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
