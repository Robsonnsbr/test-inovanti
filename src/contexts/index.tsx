'use client';

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AosProvider } from './aosProvider';
import { CharacterProvider } from './itemsProvider';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <AosProvider>
        <CharacterProvider>{children}</CharacterProvider>
      </AosProvider>
    </ChakraProvider>
  );
}
