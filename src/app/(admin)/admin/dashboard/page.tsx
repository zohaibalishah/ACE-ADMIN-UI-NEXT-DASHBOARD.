import DashboardPage from './dashboardPage';

import React, { ReactElement } from 'react';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

export default async function Dashboard(): Promise<ReactElement> {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/');
  }

  return (
    <>
      <DashboardPage />
    </>
  );
}
