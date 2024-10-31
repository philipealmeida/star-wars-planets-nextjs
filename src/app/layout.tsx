import "./globals.css";
import localFont from "next/font/local";
import styles from './layout.module.css';
import Image from 'next/image'

import type { Metadata } from "next";

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
  title: "Star Wars Planets Explorer",
  description: "Explore planets from the Star Wars universe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className={styles.header}>
          <Image 
            className={styles.title}
            src="/star-wars.svg"
            alt="Star Wars Logo"
            width={200}
            height={100}
          />
          <h1 className={styles.title}>Planets</h1>
        </header>
        {children}
      </body>
    </html>
  );
}