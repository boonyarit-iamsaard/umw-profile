import { ReactNode } from 'react';
import type { Metadata } from 'next';

import { cn } from '@/libs/utils/cn';
import { fontSans } from '@/libs/utils/fonts';

import '@/styles/globals.css';

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export const metadata: Metadata = {
  title: 'Umawan Iamsa-ard',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
