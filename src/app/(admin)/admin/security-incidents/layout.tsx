import { SecurityStatics } from "@/app/components/SecurityIncidents";
import React from "react";
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

interface ILayout {
  children: React.ReactNode;
}


export default async function SecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/');
  }
  return (
    <>
      <SecurityStatics />
      {children}
    </>
  );
};
