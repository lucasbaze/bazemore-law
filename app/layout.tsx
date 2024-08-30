import type { Metadata } from 'next';
import { Prata, Open_Sans } from 'next/font/google';
import './globals.css';
import MainNav from '@/components/mainNav';
import MainFooter from '@/components/mainFooter';
import { Toaster } from 'sonner';

const prata = Prata({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-prata',
});
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'Bazemore Law Firm | Elder Law, Trusts, Estates',
  description:
    'A West Texas Law Firm specializing in trusts, elder law, medicaid, probates & estates',
  keywords: ['Elder Law', 'Probates', 'Estates', 'Trusts', 'Medicaid'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${prata.className} ${openSans.variable} `}>
        <div className="">
          <MainNav />
        </div>

        <div className="min-h-screen mt-16 bg-white">{children}</div>

        <div>
          <MainFooter />
        </div>
      </body>
    </html>
  );
}
