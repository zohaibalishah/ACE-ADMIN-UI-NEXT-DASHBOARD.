import CountryPage from  './CountryPage';

import React, { ReactElement } from 'react';

import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

export default async function FeedBackPage(): Promise<ReactElement> {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/');
  }

  return (
    <>
      <div>
        <CountryPage />
      </div>
    </>
  );
}
