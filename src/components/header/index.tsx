'use client';
import React from 'react';
import './style/contentHeader.css';
import ContainerMedium from '../common/container/ContainerMedium';
import { SearchBar } from './components/SearchBar';
// import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className="global-height-header class-header shadow-md" id="header">
      <ContainerMedium id="container-header">
        <div className="contentHeader">
          <div
            className="order-1 flex sm:gap-4  flex-1 items-center w-full"
            title="CoreNotes"
          >
            <Link
              href="/"
              onClick={() => window.location.reload()}
              className="flex items-center w-fit max-w-32 sm:gap-2 pr-4"
            >
              {/* <Image
                src={iconHeader}
                width={32}
                height={32}
                loading="lazy"
                alt="imagem-monichara-linkedIn"
              /> */}
              <h3 className="w-full text-base hidden sm:block">
                Rick And Morty
              </h3>
              <h3 className="w-full text-xs block sm:hidden">R&M</h3>
            </Link>
            <SearchBar />
          </div>
        </div>
      </ContainerMedium>
    </header>
  );
}

export default Header;
