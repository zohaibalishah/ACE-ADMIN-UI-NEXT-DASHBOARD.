import CityPageList from  '../city-configuration/CountryPage';

import React, { ReactElement } from 'react';

import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

interface CityPageProps {
  params: { id: string };
}

export default async function CityPage({ params }: CityPageProps): Promise<ReactElement> {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/');
  }

  return (
    <>
      <div>
        <CityPageList id={Number(params.id)} />
      </div>
    </>
  );
}
