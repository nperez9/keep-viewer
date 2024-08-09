import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { SessionWrapper } from '@/components/SessionWrapper';
import { ThemeProvider } from '@/components/theme-porvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Keep Viewer',
  description: 'Quick visualizer of your keep notes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider defaultTheme="dark" enableSystem attribute="class">
            {children}
          </ThemeProvider>
        </body>
      </html>
    </SessionWrapper>
  );
}
