'use client';
import '@/app/styles/styles.css';
import '@/app/styles/globals.css';
import NextTopLoader from 'nextjs-toploader';
import { Toastify } from '@/app/components/common';
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <html lang="en">
        <body>
          <NextTopLoader color="#8BA70D" showSpinner={false} height={4} />
          {children}
          <Toastify />
        </body>
      </html>
    </SessionProvider>
  );
}

// export const metadata = {
//   title: 'ACE Admin Dashboard',
//   description: 'ACE Admin Dashboard',
// };
