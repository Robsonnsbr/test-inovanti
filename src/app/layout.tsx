import type { Metadata } from 'next';

import { inter } from '../font';
import './globals.css';

import { AppProviders } from 'src/contexts';

import LayoutWrapper from 'src/components/common/container/LayoutWrapper';
import Header from 'src/components/header';
import Footer from 'src/components/footer';

export const metadata: Metadata = {
  title: 'todo'
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
          </LayoutWrapper>
        </AppProviders>
      </body>
    </html>
  );
}
