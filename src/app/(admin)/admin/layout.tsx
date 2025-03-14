'use client';
import { TopNavbar } from '@/app/components/layouts';
import '@/app/styles/styles.css';
import '@/app/styles/globals.css';
import { AsideNavbar } from '@/app/components/layouts/Dashboard/AsideNavbar';
import NextTopLoader from 'nextjs-toploader';
import React, { useState } from 'react';
import { SessionProvider } from 'next-auth/react';

export default  function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
  
      <html lang="en">
        <body className="bg-black ">
          <NextTopLoader color="#8BA70D" showSpinner={false} height={4} />
          <div className="">
            <TopNavbar setIsOpen={setIsOpen} />
            <div className="lg:flex">
              <div className="w-[300px]">
                <AsideNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
              <div className="flex-1 p-5 sm:pr-9 bg-gradient-to-t from-black via-bgDark to-bgShadow/80 min-h-[85vh]">
                {children}
              </div>
            </div>
          </div>
        </body>
      </html>
  );
}
