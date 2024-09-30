import type { Metadata } from 'next';

import { inter } from '../font';
import './globals.css';

import { AppProviders } from 'src/contexts';

import LayoutWrapper from 'src/components/common/container/LayoutWrapper';
import Header from 'src/components/header';
import Footer from 'src/components/footer';
import ScrollUpButton from 'src/components/common/button';

export const metadata: Metadata = {
  title: 'Rick and Morty',
  description: 'App Rick and Morty InovantI'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        suppressHydrationWarning={true}
        className={`${inter.variable} font-mono bg-black`}
      >
        <AppProviders>
          <LayoutWrapper>
            <Header />
            {children}
            <Footer />
            <ScrollUpButton />
          </LayoutWrapper>
        </AppProviders>
      </body>
    </html>
  );
}
