import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MainNav from '@/components/mainNav'
import MainFooter from '@/components/mainFooter'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Inators UI",
  description:
    "Inators UI is a collection of UI components and templates based on Tailwind and Shadcn/ui, just copy and use",
  keywords: ["Tailwind", "Shadcn/ui", "Components", "Inators UI"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="wuKkVFD1dhs31EjQNk81yBbw-temshhMPPc8JGAUC94"
      />
      <body className={inter.className}>
        <div className="">
          <MainNav />
        </div>

        <div className="min-h-screen mt-16">{children}</div>

        <div>
          <MainFooter />
        </div>
      </body>
    </html>
  );
}
