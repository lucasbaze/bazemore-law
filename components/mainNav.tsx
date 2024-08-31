'use client';

import * as React from 'react';
import Link from 'next/link';
import { Flower2, Menu } from 'lucide-react';
import { Button } from './ui/button';

export default function MainNav() {
  const [state, setState] = React.useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <button
        className="pr-2 absolute md:hidden right-4 top-8"
        title="menu"
        onClick={() => setState(!state)}
      >
        <Menu />
      </button>
      <header className="px-4 sm:px-8 md:px-0 py-5 shadow-lg bg-white">
        <div
          className={`max-w-7xl flex justify-between md:px-16 mx-auto ${state ? 'flex-col' : ''}`}
        >
          <div className="flex items-center">
            <Link
              href="/"
              aria-label="Back to homepage"
              className=" flex md:justify-center justify-start items-center gap-3 mr-12"
            >
              <img src="/bazemore-law-logo.jpg" width="180" />
            </Link>
            <div className="font-semibold text-lg hidden md:block">
              A West Texas Law Firm
            </div>
          </div>
          <div className="flex flex-1 justify-end items-center">
            <div
              className={`flex flex-row justify-self-center pb-3 mt-16 md:block md:pb-0 md:mt-0 ${
                state ? 'block' : 'hidden'
              }`}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-6">
                  <a href="tel:8069942060">Call: (806) 994-2060</a>
                </div>
                <div className="flex-shrink-0">
                  <a
                    className="text-center px-3 py-2 bg-blue-800 text-white shadow-md"
                    target="_blank"
                    href="https://secure.lawpay.com/pages/bazemore-law-firm-pllc/operating"
                  >
                    Pay Invoice
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
