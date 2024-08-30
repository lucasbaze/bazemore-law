import { Flower2 } from 'lucide-react';
import React from 'react'
import Link from 'next/link';

const MainFooter = () => {
  return (
    <div className="mt-10 shadow-md">
			<footer className="bg-blue-800 text-white p-8">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
    {/* <!-- Logo and Name --> */}
    <div className="flex flex-col items-center md:items-start">
      <img src="/bazemore-logo-white.png" alt="Bazemore Law Firm Logo" className="mb-4 w-24 md:w-32" />
      <h2 className="text-2xl font-bold">Bazemore Law Firm, PLLC</h2>
    </div>

    {/* <!-- Location Details --> */}
    <div className="flex flex-col items-center md:items-start">
      <h3 className="text-lg font-semibold uppercase mb-2">Our Location</h3>
      <p>Bazemore Law Firm PLLC</p>
      <p>4710 67th Street, Suite F</p>
      <p>Lubbock, Texas 79414</p>
      <p>Phone: (806) 329-4601</p>
      <p>Fax: (806) 370-3732</p>
      <a href="https://maps.google.com" className="text-white font-semibold mt-2">get directions</a>
    </div>

    {/* <!-- Affiliations and Invoice --> */}
    <div className="flex flex-col items-center md:items-start">
      <h3 className="text-lg font-semibold uppercase mb-2">Affiliations</h3>
      <p>Texas Bar Association</p>
      <img src="/bazemore-logo-white.png" alt="Elder Law Answers" className="mt-4 mb-4 w-24 md:w-32" />
      <a href="/pay-invoice" className="text-white text-lg font-semibold">PAY INVOICE</a>
    </div>
  </div>
</footer>
    </div>
  );
}

export default MainFooter