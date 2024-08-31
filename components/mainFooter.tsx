import { Flower2 } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

const MainFooter = () => {
  return (
    <div className="mt-10 shadow-md">
      <footer className="bg-blue-800 text-white py-16 px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* <!-- Logo and Name --> */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/bazemore-logo-white.png"
              alt="Bazemore Law Firm Logo"
              className="mb-4 w-36 md:w-52"
            />
          </div>

          {/* <!-- Location Details --> */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold uppercase mb-2">
              Our Location
            </h3>
            <p className="font-sans">Bazemore Law Firm PLLC</p>
            <p className="font-sans">4710 67th Street, Suite F</p>
            <p className="font-sans">Lubbock, Texas 79414</p>
            <p className="font-sans">Phone: (806) 994-2060</p>
            <p className="font-sans mb-4">Fax: (806) 370-3732</p>
            <a
              href="https://maps.google.com"
              className="text-white font-semibold mb-8 underline font-sans"
            >
              Get Directions
            </a>
            <a href="/pay-invoice" className="text-white text-lg font-semibold">
              PAY INVOICE
            </a>
          </div>

          {/* <!-- Affiliations and Invoice --> */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold uppercase mb-2">
              Affiliations
            </h3>
            <p className="font-sans mb-6">Texas Bar Association</p>
            <img
              src="/ela-badge-wht.png"
              alt="Elder Law Answers"
              className="mt-4 mb-4 w-24 md:w-28"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainFooter;
